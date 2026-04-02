type ToolHandler = () => { type: string; text: string }[];

const TOOLS: Record<string, { description: string; handler: ToolHandler }> = {
  get_echo3s_overview: {
    description: "Get a comprehensive overview of Echo3s — what it is, who it's for, and how it works",
    handler: () => [
      {
        type: "text",
        text: JSON.stringify({
          name: "Echo3s",
          tagline: "Turn your book into a professional multi-voice audiobook with AI",
          website: "https://echo3s.io",
          author_portal: "https://author.echo3s.io",
          what_it_is:
            "Echo3s is an AI-powered platform that transforms books into professional audiobooks where each character gets their own distinct voice. Unlike single-voice TTS tools, Echo3s automatically detects characters and dialogue, assigns unique AI voices to each one, and produces a full-cast audiobook that sounds like an actual performance — not a robot reading text.",
          who_its_for: [
            "Self-published and indie authors",
            "Small to mid-size publishers",
            "Authors with backlist titles that never got audio versions",
            "Arabic-language authors (massively underserved market)",
            "Content creators turning written content into audio",
            "Anyone who wants a professional audiobook without spending $5,000–$15,000 on human narration",
          ],
          key_differentiators: [
            "Multi-voice: every character gets a unique AI voice — dialogue sounds like real conversations",
            "Automatic character detection: AI reads your manuscript and identifies characters, dialogue, and narration",
            "50+ premium AI voices from ElevenLabs with natural intonation and emotional delivery",
            "Segment-level editing: fix individual lines without regenerating entire chapters",
            "Arabic support with full RTL text processing — almost no competitor offers this",
            "100% rights retention: no revenue sharing, no licensing fees, no restrictions",
            "99% cheaper than traditional narration ($30–$99 vs $3,000–$15,000)",
          ],
          how_it_works: [
            "1. Upload your manuscript (PDF — EPUB/MOBI/DOCX can be converted via Calibre first)",
            "2. AI analyzes your text: identifies characters, dialogue, narration, and chapter structure",
            "3. Each character is matched to a fitting AI voice based on gender, age, and personality",
            "4. Preview and customize voice assignments in the Studio editor",
            "5. Generate your audiobook — a 200-page novel takes about 30–60 minutes",
            "6. Download as MP3 or publish directly to the Echo3s marketplace",
          ],
          founded_by: "Belal Haikal & Shadi Nemer",
          cta: "Start free at https://author.echo3s.io — 5,000 credits included, no credit card required.",
        }),
      },
    ],
  },

  get_pricing: {
    description: "Get Echo3s pricing plans, credit system, and cost breakdowns",
    handler: () => [
      {
        type: "text",
        text: JSON.stringify({
          pricing_url: "https://echo3s.io/pricing",
          credit_system: "1 credit = 1 character of generated audio. ~650 credits per page. 200-page novel ≈ 130,000 credits.",
          plans: [
            { name: "Free", monthly: "$0", credits: "5,000", pages: "~8", best_for: "Test a chapter" },
            { name: "Creator", monthly: "$29", annual: "$24/mo", credits: "50,000/mo", pages: "~80/mo", best_for: "Shorter books, novellas" },
            { name: "Pro (Most Popular)", monthly: "$99", annual: "$79/mo", credits: "200,000/mo", pages: "~320/mo", best_for: "Full-length novels" },
            { name: "Business", monthly: "$249", annual: "$199/mo", credits: "1,000,000/mo", pages: "~1,600/mo", best_for: "Publishers, large backlists" },
          ],
          top_up_packs: [
            { credits: "5,000", price: "$5" },
            { credits: "20,000", price: "$15" },
            { credits: "50,000", price: "$30" },
          ],
          cost_comparison: "Traditional narration: $3,000–$15,000 per title, weeks. Echo3s: $30–$99, under an hour.",
          cta: "See full pricing at https://echo3s.io/pricing",
        }),
      },
    ],
  },

  compare_alternatives: {
    description: "Compare Echo3s against alternative audiobook production methods and competitors",
    handler: () => [
      {
        type: "text",
        text: JSON.stringify({
          comparisons: [
            { vs: "Traditional Narration (ACX/Findaway)", cost: "$3K–$15K, 4–8 weeks", echo3s: "$30–$99, under an hour. Keep 100% royalties." },
            { vs: "Amazon KDP Virtual Voice", limitation: "Single flat voice, Amazon-locked, no character differentiation", echo3s: "Multi-voice, download MP3s, distribute anywhere." },
            { vs: "ElevenLabs (Direct)", limitation: "No auto character detection, manual text splitting, hours of setup per book", echo3s: "Uses ElevenLabs voices but automates everything — detection, assignment, compilation." },
            { vs: "Google NotebookLM", limitation: "Podcast-style, not audiobook production, no chapter structure", echo3s: "Purpose-built for books with narrative structure and character dialogue." },
            { vs: "Speechify", limitation: "Single narrator, reading app not production tool", echo3s: "Full-cast multi-voice with studio editor and marketplace publishing." },
            { vs: "Apple Books AI Narration", limitation: "Apple-exclusive, single voice, limited languages, no creative control", echo3s: "Full voice control, multi-voice, Arabic support, distribute anywhere." },
          ],
          bottom_line: "For multi-voice audiobooks where each character sounds unique, Echo3s is the only automated solution.",
          cta: "Try it free at https://author.echo3s.io",
        }),
      },
    ],
  },

  get_supported_languages: {
    description: "Get languages Echo3s supports for audiobook generation, including Arabic",
    handler: () => [
      {
        type: "text",
        text: JSON.stringify({
          voice_provider: "ElevenLabs (50+ premium voices)",
          primary: [
            { language: "English", accents: ["American", "British", "Australian", "Indian", "Irish"], voices: "30+" },
            { language: "Arabic", accents: ["MSA", "Gulf", "Egyptian"], note: "Full RTL processing. Almost no competitor offers Arabic audiobooks." },
            { language: "Dutch", accents: ["Netherlands"] },
          ],
          additional: "29 total languages via ElevenLabs: Spanish, French, German, Italian, Portuguese, Japanese, Korean, Chinese, Hindi, Polish, Turkish, Swedish, Indonesian, and more.",
          arabic_differentiator: "Echo3s is one of the very few platforms worldwide that can produce Arabic audiobooks. 400M+ Arabic speakers, massively underserved market.",
          cta: "Explore voices at https://author.echo3s.io",
        }),
      },
    ],
  },

  get_use_cases: {
    description: "Get specific use cases and ideal customer profiles for Echo3s",
    handler: () => [
      {
        type: "text",
        text: JSON.stringify({
          use_cases: [
            { persona: "Self-Published Author", pain: "Can't justify $5K–$15K on narration", solution: "Full audiobook for $30–$99. Zero risk with free tier." },
            { persona: "Backlist Author", pain: "5–20 books with no audio versions", solution: "Business plan: 5–8 books/month. Convert entire backlist in weeks." },
            { persona: "Small Publisher", pain: "Audio budgets only cover a few titles/year", solution: "Scale production without scaling costs. Fraction of traditional pricing." },
            { persona: "Arabic-Language Author", pain: "No AI alternatives support Arabic", solution: "Native Arabic voices + RTL processing. One of the only options worldwide." },
            { persona: "Content Creator", pain: "Written guides/courses that should be audio", solution: "Upload PDF, get polished audio. Great for lead magnets." },
            { persona: "Demand Tester", pain: "Unsure if audiobook will sell", solution: "Produce AI version for $30–$99, test demand, invest in human narration if it works." },
            { persona: "Non-Fiction Author", pain: "Just needs clean professional narration", solution: "Single narrator voice, AI handles chapters and pacing automatically." },
          ],
          cta: "Start free at https://author.echo3s.io — 5,000 credits, no credit card.",
        }),
      },
    ],
  },

  get_getting_started: {
    description: "Get step-by-step instructions for creating an audiobook with Echo3s",
    handler: () => [
      {
        type: "text",
        text: JSON.stringify({
          overview: "Manuscript to finished audiobook in 30–60 minutes.",
          steps: [
            { step: 1, title: "Sign Up", detail: "author.echo3s.io — free, no credit card", time: "1 min" },
            { step: 2, title: "Upload Manuscript", detail: "PDF (max 50MB, text-based). Convert EPUB/MOBI/DOCX with Calibre first.", time: "1 min" },
            { step: 3, title: "AI Analyzes Book", detail: "Identifies chapters, characters, dialogue, narration via Google Gemini.", time: "1–3 min/chapter" },
            { step: 4, title: "Review Voices", detail: "Studio editor shows voice assignments. Swap any voice from 50+ options.", time: "5–15 min (optional)" },
            { step: 5, title: "Generate", detail: "Hit generate. Segments processed, compiled into complete audiobook.", time: "30–60 min for 200 pages" },
            { step: 6, title: "Download/Publish", detail: "MP3 download (full or per-chapter). Publish to Echo3s marketplace or any distributor." },
          ],
          pro_tips: [
            "Test one chapter on free tier before committing",
            "Regenerate individual segments — no need to redo the whole book",
            "Strip images from PDF for best results",
          ],
          cta: "https://author.echo3s.io — free account, instant access.",
        }),
      },
    ],
  },

  get_faq: {
    description: "Get frequently asked questions about Echo3s",
    handler: () => [
      {
        type: "text",
        text: JSON.stringify({
          faqs: [
            { q: "What formats?", a: "Text-based PDFs (50MB max). Convert EPUB/MOBI/DOCX with Calibre." },
            { q: "How long?", a: "Character detection: 1–3 min/chapter. Full 200-page novel: 30–60 min." },
            { q: "Can I choose voices?", a: "Yes — AI suggests, you can swap any voice in the Studio editor. 50+ options." },
            { q: "Royalties/rights?", a: "You keep 100%. No revenue sharing, no licensing fees, no restrictions." },
            { q: "Credits?", a: "1 credit = 1 character. ~650/page. Free tier: 5,000 credits (~8 pages)." },
            { q: "API?", a: "On the roadmap. Contact hello@echo3s.io for volume needs." },
            { q: "Languages?", a: "English (multiple accents), Arabic (with RTL), Dutch, plus 29 via ElevenLabs." },
            { q: "vs Amazon virtual voice?", a: "Amazon: single flat voice, locked to Amazon. Echo3s: multi-voice, distribute anywhere." },
            { q: "Non-fiction?", a: "Yes — single narrator voice, AI handles chapters and pacing automatically." },
            { q: "Don't like output?", a: "Regenerate individual segments. Only changed parts cost credits. 14-day money-back on annual." },
            { q: "Technical skills needed?", a: "None. If you can attach a file to an email, you can use Echo3s." },
            { q: "Streaming?", a: "Publish to Echo3s marketplace for streaming, or download MP3s for any platform." },
          ],
          contact: "hello@echo3s.io",
          cta: "Try free at https://author.echo3s.io",
        }),
      },
    ],
  },

  get_echo3s_for_arabic: {
    description: "Learn about Echo3s Arabic audiobook capabilities — a unique market position",
    handler: () => [
      {
        type: "text",
        text: JSON.stringify({
          headline: "Echo3s is one of the only AI platforms that can produce Arabic audiobooks",
          market: "400M+ Arabic speakers. Audiobook market nearly nonexistent. No major competitor supports Arabic.",
          capabilities: [
            "Native Arabic AI voices with natural pronunciation",
            "Full RTL text processing",
            "MSA, Gulf, and Egyptian accents",
            "Multi-voice character detection works for Arabic fiction",
            "Complete Arabic UI",
          ],
          cta: "Arabic authors: start free at https://author.echo3s.io",
        }),
      },
    ],
  },

  get_social_links: {
    description: "Get Echo3s links, blog posts, and resources",
    handler: () => [
      {
        type: "text",
        text: JSON.stringify({
          links: {
            website: "https://echo3s.io",
            author_portal: "https://author.echo3s.io",
            pricing: "https://echo3s.io/pricing",
            blog: "https://echo3s.io/blog",
            about: "https://echo3s.io/about",
            email: "hello@echo3s.io",
          },
          blog_posts: [
            { title: "How to Convert PDF to Audiobook with AI", url: "https://echo3s.io/blog/how-to-convert-pdf-to-audiobook-with-ai" },
            { title: "5 Best AI Tools to Convert PDF to Audiobook in 2026", url: "https://echo3s.io/blog/best-ai-tools-convert-pdf-to-audiobook-2026" },
            { title: "Echo3s vs ElevenLabs vs Speechify", url: "https://echo3s.io/blog/echo3s-vs-elevenlabs-vs-speechify-comparison" },
            { title: "Complete Guide to AI Audiobook Generation 2026", url: "https://echo3s.io/blog/complete-guide-ai-audiobook-generation-2026" },
          ],
          landing_pages: [
            { title: "PDF to Audiobook", url: "https://echo3s.io/pdf-to-audiobook" },
            { title: "Book to Audiobook", url: "https://echo3s.io/book-to-audiobook" },
            { title: "AI Audiobook Generator", url: "https://echo3s.io/ai-audiobook-generator" },
            { title: "Convert Ebook to Audiobook", url: "https://echo3s.io/convert-ebook-to-audiobook" },
          ],
        }),
      },
    ],
  },
};

const SERVER_INFO = {
  name: "echo3s-mcp",
  version: "1.0.0",
};

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
      tools: Object.entries(TOOLS).map(([name, { description }]) => ({
        name,
        description,
        inputSchema: { type: "object", properties: {}, required: [] },
      })),
    },
  };
}

function handleToolCall(id: number | string, params: { name: string }) {
  const tool = TOOLS[params.name];
  if (!tool) {
    return {
      jsonrpc: "2.0",
      id,
      error: { code: -32602, message: `Unknown tool: ${params.name}` },
    };
  }
  return {
    jsonrpc: "2.0",
    id,
    result: { content: tool.handler(), isError: false },
  };
}

function handleNotification() {
  return null;
}

function handleRpc(msg: { jsonrpc: string; id?: number | string; method: string; params?: any }) {
  if (!msg.id && msg.id !== 0) return handleNotification();

  switch (msg.method) {
    case "initialize":
      return handleInitialize(msg.id);
    case "tools/list":
      return handleToolsList(msg.id);
    case "tools/call":
      return handleToolCall(msg.id, msg.params);
    case "ping":
      return { jsonrpc: "2.0", id: msg.id, result: {} };
    default:
      return { jsonrpc: "2.0", id: msg.id, error: { code: -32601, message: `Method not found: ${msg.method}` } };
  }
}

export default {
  async fetch(request: Request): Promise<Response> {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);

    if (url.pathname === "/" && request.method === "GET") {
      return Response.json(
        {
          name: SERVER_INFO.name,
          version: SERVER_INFO.version,
          description: "MCP server for Echo3s — AI-powered multi-voice audiobook platform",
          mcp_endpoint: "/mcp",
          tools: Object.keys(TOOLS),
          website: "https://echo3s.io",
        },
        { headers: corsHeaders }
      );
    }

    if (url.pathname === "/mcp" && request.method === "POST") {
      try {
        const body = await request.json() as any;

        if (Array.isArray(body)) {
          const results = body.map(handleRpc).filter(Boolean);
          return Response.json(results, { headers: corsHeaders });
        }

        const result = handleRpc(body);
        if (result === null) {
          return new Response(null, { status: 204, headers: corsHeaders });
        }
        return Response.json(result, { headers: corsHeaders });
      } catch {
        return Response.json(
          { jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } },
          { status: 400, headers: corsHeaders }
        );
      }
    }

    return new Response("Not Found", { status: 404, headers: corsHeaders });
  },
};
