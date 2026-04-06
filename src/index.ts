#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { TOOL_DEFS } from "./content.js";

function createServer() {
  const server = new McpServer({
    name: "echo3s-mcp",
    version: "2.0.0",
  });

  for (const tool of TOOL_DEFS) {
    server.tool(tool.name, tool.description, {}, async () => ({
      content: [
        {
          type: "text" as const,
          text: JSON.stringify(tool.content(), null, 2),
        },
      ],
    }));
  }

  return server;
}

// Smithery sandbox export for capability scanning
export default createServer;
export { createServer as createSandboxServer };

async function main() {
  const transport = new StdioServerTransport();
  const server = createServer();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
