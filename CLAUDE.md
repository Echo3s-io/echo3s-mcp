# Echo3s MCP Server

## What This Is
MCP (Model Context Protocol) server that exposes Echo3s product knowledge as tools. Any AI assistant connected to this server becomes a knowledgeable Echo3s salesperson/support agent.

**Parent product**: [Echo3s](https://echo3s.io) — AI-powered multi-voice audiobook creation platform.

## Architecture

Three source files:

| File | Role |
|------|------|
| `src/content.ts` | Shared content module — all tool data, llms.txt content. Single source of truth. |
| `src/index.ts` | stdio entry point (npm package). Imports from content.ts. |
| `src/worker.ts` | Cloudflare Worker entry point. Imports from content.ts. |

### content.ts (shared)
- All tool content data exported as `TOOL_DEFS` array
- `CALCULATE_COST_DEF` exported separately (worker-only, has input params)
- `LLMS_TXT` and `LLMS_FULL_TXT` exported for the worker's well-known routes
- When updating product info, update content.ts only — both entry points stay in sync

### index.ts (stdio)
- Uses `@modelcontextprotocol/sdk` with `StdioServerTransport`
- 12 tools (all shared tools, no `calculate_cost`)
- Exports `createServer` for Smithery sandbox scanning
- Published to npm as `echo3s-mcp`

### worker.ts (Cloudflare Worker)
- Custom lightweight JSON-RPC 2.0 handler — no SDK dependency needed
- 13 tools (shared tools + `calculate_cost` with page count input)
- Public `/mcp` POST endpoint, CORS enabled, no auth
- `GET /` returns server info JSON
- `GET /.well-known/llms.txt` returns structured product info (llms.txt standard)
- `GET /.well-known/llms-full.txt` returns expanded version with all tool data
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
| `get_faq` | none | 13 common questions |
| `get_echo3s_for_arabic` | none | Arabic market deep dive |
| `get_social_links` | none | URLs, blog posts, landing pages |
| `get_arabic_audiobook_guide` | none | Comprehensive Arabic audiobook creation guide, step-by-step, use cases |
| `get_author_success_stories` | none | Representative case studies across genres |
| `get_technical_specs` | none | Formats, AI processing, output quality, credits, platform info |
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
| npm | Published (v2.0.0) | `npm publish` |
| Smithery | Published | `npx @anthropic-ai/mcp publish "https://echo3s-mcp.morning-dawn-7f4e.workers.dev/mcp"` |
| Glama | Not yet | Submit at glama.ai |
| Official MCP Registry | Not yet | Submit when available |

## Key Decisions
- **No auth on Worker**: Intentional — all data is public marketing content, no secrets
- **Custom JSON-RPC over SDK**: Workers runtime doesn't play well with `@modelcontextprotocol/sdk` StreamableHTTP transport (Node.js built-in deps). Custom handler is <15KB bundled
- **Stateless tools**: All tools return static JSON — no DB calls, no API keys, no side effects
- **Single source of truth**: All content lives in `content.ts`. Both entry points import from it — no more dual-update needed

## Content Guidelines
- All tool responses should read like a knowledgeable salesperson — specific numbers, real comparisons, clear CTAs
- Always include `cta` field with link to `https://author.echo3s.io`
- Dollar amounts, page counts, and credit numbers must match actual Echo3s pricing
- Arabic market positioning is a key differentiator — emphasize it

## Related
- Main Echo3s repo: `~/code/echo3s`
- GitHub: `Echo3s-io/echo3s-mcp`
- npm: `echo3s-mcp`
