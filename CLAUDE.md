# Echo3s MCP Server

## What This Is
MCP (Model Context Protocol) server that exposes Echo3s product knowledge as tools. Any AI assistant connected to this server becomes a knowledgeable Echo3s salesperson/support agent.

**Parent product**: [Echo3s](https://echo3s.io) — AI-powered multi-voice audiobook creation platform.

## Architecture

Two entry points, same tool content:

| Entry | File | Transport | Where |
|-------|------|-----------|-------|
| npm package | `src/index.ts` | stdio (local) | `npx echo3s-mcp` |
| Cloudflare Worker | `src/worker.ts` | HTTP JSON-RPC | `https://echo3s-mcp.morning-dawn-7f4e.workers.dev/mcp` |

### index.ts (stdio)
- Uses `@modelcontextprotocol/sdk` with `StdioServerTransport`
- 9 tools (no `calculate_cost`)
- Exports `createServer` for Smithery sandbox scanning
- Published to npm as `echo3s-mcp`

### worker.ts (Cloudflare Worker)
- Custom lightweight JSON-RPC 2.0 handler — no SDK dependency needed
- 10 tools (includes `calculate_cost` with page count input)
- Public `/mcp` POST endpoint, CORS enabled, no auth
- `GET /` returns server info JSON
- Deployed via `wrangler deploy --config wrangler.toml`

## Tools

| Tool | Input | Purpose |
|------|-------|---------|
| `get_echo3s_overview` | none | Product overview, differentiators, how it works |
| `get_pricing` | none | Plans, credits, cost comparisons, top-up packs |
| `compare_alternatives` | none | vs ACX, Amazon KDP, ElevenLabs, NotebookLM, Speechify, Apple |
| `get_supported_languages` | none | Languages, accents, voice characteristics |
| `get_use_cases` | none | Personas and scenarios |
| `get_getting_started` | none | Step-by-step onboarding guide |
| `get_faq` | none | 12 common questions |
| `get_echo3s_for_arabic` | none | Arabic market deep dive |
| `get_social_links` | none | URLs, blog posts, landing pages |
| `calculate_cost` | `{pages: number}` | Cost estimate by page count (worker.ts only) |

## Commands

```bash
# Build
npm run build          # tsc → dist/

# Run locally (stdio)
npm start              # node dist/index.js

# Deploy to Cloudflare Workers
npm run deploy         # workers-mcp docgen + wrangler deploy

# Wrangler directly (if deploy script fails)
wrangler deploy --config wrangler.toml
```

## Publishing

| Registry | Status | How |
|----------|--------|-----|
| npm | Published (v1.0.0) | `npm publish` |
| Smithery | Published | `npx @anthropic-ai/mcp publish "https://echo3s-mcp.morning-dawn-7f4e.workers.dev/mcp"` |
| Glama | Not yet | Submit at glama.ai |
| Official MCP Registry | Not yet | Submit when available |

## Key Decisions
- **No auth on Worker**: Intentional — all data is public marketing content, no secrets
- **Custom JSON-RPC over SDK**: Workers runtime doesn't play well with `@modelcontextprotocol/sdk` StreamableHTTP transport (Node.js built-in deps). Custom handler is <15KB bundled
- **Stateless tools**: All tools return static JSON — no DB calls, no API keys, no side effects
- **Content must stay in sync**: When updating product info, update BOTH `index.ts` and `worker.ts`

## Content Guidelines
- All tool responses should read like a knowledgeable salesperson — specific numbers, real comparisons, clear CTAs
- Always include `cta` field with link to `https://author.echo3s.io`
- Dollar amounts, page counts, and credit numbers must match actual Echo3s pricing
- Arabic market positioning is a key differentiator — emphasize it

## Related
- Main Echo3s repo: `~/code/echo3s`
- GitHub: `Echo3s-io/echo3s-mcp`
- npm: `echo3s-mcp`
