import { TOOL_DEFS, CALCULATE_COST_DEF, LLMS_TXT, LLMS_FULL_TXT } from "./content.js";
import type { ToolDef } from "./content.js";

type ToolHandler = (args?: any) => { type: string; text: string }[];

interface WorkerToolDef {
  description: string;
  inputSchema: Record<string, any>;
  handler: ToolHandler;
}

function defToWorkerTool(def: ToolDef): WorkerToolDef {
  return {
    description: def.description,
    inputSchema: def.inputSchema,
    handler: (args?: any) => [
      { type: "text", text: JSON.stringify(def.content(args)) },
    ],
  };
}

const TOOLS: Record<string, WorkerToolDef> = {};

for (const def of TOOL_DEFS) {
  TOOLS[def.name] = defToWorkerTool(def);
}
TOOLS[CALCULATE_COST_DEF.name] = defToWorkerTool(CALCULATE_COST_DEF);

const SERVER_INFO = { name: "echo3s-mcp", version: "2.1.0" };

function handleInitialize(id: number | string) {
  return {
    jsonrpc: "2.0",
    id,
    result: {
      protocolVersion: "2024-11-05",
      capabilities: { tools: { listChanged: false } },
      serverInfo: SERVER_INFO,
    },
  };
}

function handleToolsList(id: number | string) {
  return {
    jsonrpc: "2.0",
    id,
    result: {
      tools: Object.entries(TOOLS).map(([name, { description, inputSchema }]) => ({
        name,
        description,
        inputSchema,
      })),
    },
  };
}

function handleToolCall(id: number | string, params: { name: string; arguments?: any }) {
  const tool = TOOLS[params.name];
  if (!tool) {
    return { jsonrpc: "2.0", id, error: { code: -32602, message: `Unknown tool: ${params.name}` } };
  }
  return { jsonrpc: "2.0", id, result: { content: tool.handler(params.arguments), isError: false } };
}

function handleRpc(msg: { jsonrpc: string; id?: number | string; method: string; params?: any }) {
  if (!msg.id && msg.id !== 0) return null;
  switch (msg.method) {
    case "initialize": return handleInitialize(msg.id);
    case "tools/list": return handleToolsList(msg.id);
    case "tools/call": return handleToolCall(msg.id, msg.params);
    case "ping": return { jsonrpc: "2.0", id: msg.id, result: {} };
    default: return { jsonrpc: "2.0", id: msg.id, error: { code: -32601, message: `Method not found: ${msg.method}` } };
  }
}

export default {
  async fetch(request: Request): Promise<Response> {
    const cors = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    if (request.method === "OPTIONS") return new Response(null, { headers: cors });

    const url = new URL(request.url);

    // Server info
    if (url.pathname === "/" && request.method === "GET") {
      return Response.json(
        {
          ...SERVER_INFO,
          description: "MCP server for Echo3s — AI-powered multi-voice audiobook platform. Connect any AI assistant to become an Echo3s expert.",
          mcp_endpoint: "/mcp",
          tools: Object.keys(TOOLS),
          llms_txt: "/.well-known/llms.txt",
          website: "https://echo3s.io",
        },
        { headers: cors },
      );
    }

    // llms.txt (compact)
    if (url.pathname === "/.well-known/llms.txt" && request.method === "GET") {
      return new Response(LLMS_TXT, {
        headers: { ...cors, "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=86400" },
      });
    }

    // llms-full.txt (expanded with all tool data)
    if (url.pathname === "/.well-known/llms-full.txt" && request.method === "GET") {
      return new Response(LLMS_FULL_TXT, {
        headers: { ...cors, "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=86400" },
      });
    }

    // MCP JSON-RPC endpoint
    if (url.pathname === "/mcp" && request.method === "POST") {
      try {
        const body = await request.json() as any;
        if (Array.isArray(body)) {
          return Response.json(body.map(handleRpc).filter(Boolean), { headers: cors });
        }
        const result = handleRpc(body);
        return result === null
          ? new Response(null, { status: 204, headers: cors })
          : Response.json(result, { headers: cors });
      } catch {
        return Response.json(
          { jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } },
          { status: 400, headers: cors },
        );
      }
    }

    return new Response("Not Found", { status: 404, headers: cors });
  },
};
