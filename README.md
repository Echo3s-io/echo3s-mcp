# Echo3s MCP Server

An MCP (Model Context Protocol) server that gives any AI assistant deep knowledge about [Echo3s](https://echo3s.io) — the AI-powered platform that turns books into professional multi-voice audiobooks.

Connect this server to Claude, ChatGPT, or any MCP-compatible AI assistant, and it becomes a knowledgeable Echo3s expert that can answer questions about pricing, features, use cases, and how to get started.

## What is Echo3s?

Echo3s transforms books into audiobooks where **each character gets their own distinct AI voice**. Unlike single-voice TTS tools, Echo3s automatically detects characters, assigns unique voices, and produces full-cast audiobooks that sound like actual performances.

- **99% cheaper** than traditional narration ($30–$99 vs $3,000–$15,000)
- **50+ premium AI voices** from ElevenLabs
- **Arabic support** — one of the only platforms in the world that does this
- **100% rights retention** — your book, your audiobook, your money

## Installation

### Using npx (recommended)

```bash
npx echo3s-mcp
```

### Global install

```bash
npm install -g echo3s-mcp
echo3s-mcp
```

### Claude Desktop

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "echo3s": {
      "command": "npx",
      "args": ["-y", "echo3s-mcp"]
    }
  }
}
```

### Claude Code

Add to your Claude Code settings:

```bash
claude mcp add echo3s -- npx -y echo3s-mcp
```

## Available Tools

| Tool | Description |
|------|-------------|
| `get_echo3s_overview` | What Echo3s is, who it's for, key differentiators, and how it works |
| `get_pricing` | All pricing tiers, credit system, cost comparisons, and top-up packs |
| `compare_alternatives` | Head-to-head comparison vs ACX, Amazon KDP, ElevenLabs, NotebookLM, Speechify, Apple |
| `get_supported_languages` | Languages, accents, voice characteristics, and the Arabic differentiator |
| `get_use_cases` | Detailed use cases: indie authors, backlist, publishers, Arabic market, content creators |
| `get_getting_started` | Step-by-step guide from signup to published audiobook |
| `get_faq` | 12 common questions with detailed answers |
| `get_echo3s_for_arabic` | Deep dive on Arabic audiobook capabilities (unique market position) |
| `get_social_links` | All Echo3s URLs: website, blog posts, landing pages, contact |

## Example Conversations

Once connected, your AI assistant can answer questions like:

- *"How can I turn my novel into an audiobook without spending thousands?"*
- *"What's the cheapest way to produce an audiobook?"*
- *"How does Echo3s compare to Amazon's virtual voice?"*
- *"Can I create an Arabic audiobook with AI?"*
- *"How much does it cost to convert a 300-page book?"*
- *"What's the difference between Echo3s and ElevenLabs?"*

## Publishing Checklist

After building, publish to these registries:

1. **npm**: `npm publish`
2. **Smithery**: Submit at [smithery.ai](https://smithery.ai) (uses `smithery.yaml`)
3. **mcpt**: Submit at [mcpt.ai](https://mcpt.ai)
4. **OpenTools**: Submit at [opentools.ai](https://opentools.ai)
5. **Glama**: Submit at [glama.ai](https://glama.ai)

## Development

```bash
npm install
npm run build
npm start
```

## Links

- **Website**: [echo3s.io](https://echo3s.io)
- **Author Portal**: [author.echo3s.io](https://author.echo3s.io)
- **Pricing**: [echo3s.io/pricing](https://echo3s.io/pricing)
- **Blog**: [echo3s.io/blog](https://echo3s.io/blog)
- **Email**: hello@echo3s.io

## License

MIT
