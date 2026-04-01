#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "echo3s-mcp",
  version: "1.0.0",
});

// ---------------------------------------------------------------------------
// Tool: get_echo3s_overview
// ---------------------------------------------------------------------------
server.tool(
  "get_echo3s_overview",
  "Get a comprehensive overview of Echo3s — what it is, who it's for, and how it works",
  {},
  async () => ({
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(
          {
            name: "Echo3s",
            tagline:
              "Turn your book into a professional multi-voice audiobook with AI",
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
              "Automatic character detection: AI reads your manuscript and identifies characters, dialogue, and narration automatically",
              "50+ premium AI voices from ElevenLabs with natural intonation and emotional delivery",
              "Segment-level editing: fix individual lines without regenerating entire chapters",
              "Arabic support with full RTL text processing — almost no competitor offers this",
              "100% rights retention: no revenue sharing, no licensing fees, no restrictions on your audiobook",
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
            tech_highlights: [
              "Character detection powered by Google Gemini AI",
              "Voice synthesis via ElevenLabs (studio-quality TTS)",
              "Smart voice matching: gender, age, accent, and personality scoring",
              "Per-segment regeneration — no need to redo entire chapters for small fixes",
            ],
            founded_by: "Belal Haikal & Shadi Nemer",
            cta: "Start free at https://author.echo3s.io — 5,000 credits included, no credit card required.",
          },
          null,
          2
        ),
      },
    ],
  })
);

// ---------------------------------------------------------------------------
// Tool: get_pricing
// ---------------------------------------------------------------------------
server.tool(
  "get_pricing",
  "Get Echo3s pricing plans, credit system, and cost breakdowns",
  {},
  async () => ({
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(
          {
            pricing_url: "https://echo3s.io/pricing",
            credit_system:
              "Echo3s uses a credit-based system. 1 credit = 1 character of generated audio. A typical book page is about 650 credits. A 200-page novel uses roughly 130,000 credits.",
            plans: [
              {
                name: "Free",
                monthly_price: "$0/month",
                annual_price: "Free forever",
                credits: "5,000 credits",
                approximate_pages: "~8 pages",
                features: [
                  "Full voice library access (50+ voices)",
                  "Multi-voice audiobook generation",
                  "MP3 download & streaming",
                  "Email support",
                ],
                best_for:
                  "Trying Echo3s out — enough credits to test a chapter and hear the quality",
              },
              {
                name: "Creator",
                monthly_price: "$29/month",
                annual_price: "$24/month (billed annually at $288 — save 20%)",
                credits: "50,000 credits/month",
                approximate_pages: "~80 pages/month",
                features: [
                  "Everything in Free",
                  "Unlimited projects",
                  "Marketplace listing",
                  "Priority support",
                ],
                best_for:
                  "Authors working on shorter books, novellas, or testing audiobook demand",
              },
              {
                name: "Pro",
                monthly_price: "$99/month",
                annual_price: "$79/month (billed annually at $948 — save 20%)",
                credits: "200,000 credits/month",
                approximate_pages: "~320 pages/month",
                label: "Most Popular",
                features: [
                  "Everything in Creator",
                  "Enough credits for 1–2 full novels/month",
                  "Unlimited projects",
                  "Marketplace listing",
                ],
                best_for:
                  "Active authors producing full-length audiobooks regularly",
              },
              {
                name: "Business",
                monthly_price: "$249/month",
                annual_price:
                  "$199/month (billed annually at $2,388 — save 20%)",
                credits: "1,000,000 credits/month",
                approximate_pages: "~1,600 pages/month",
                features: [
                  "Everything in Pro",
                  "Enough credits for 5–8 full novels/month",
                  "Built for publishers and agencies",
                ],
                best_for:
                  "Small publishers or prolific authors with large backlists to convert",
              },
            ],
            top_up_packs: [
              {
                name: "Small",
                credits: "5,000",
                price: "$5",
                approximate_pages: "~8 pages",
              },
              {
                name: "Medium",
                credits: "20,000",
                price: "$15",
                approximate_pages: "~30 pages",
              },
              {
                name: "Large",
                credits: "50,000",
                price: "$30",
                approximate_pages: "~80 pages",
              },
            ],
            cost_comparison:
              "Traditional human narration costs $3,000–$15,000 per title and takes weeks. With Echo3s, a full 200-page audiobook costs roughly $30–$99 and is done in under an hour.",
            payment_methods:
              "Visa, Mastercard, American Express via Stripe. 14-day money-back guarantee on annual plans.",
            cta: "See full pricing at https://echo3s.io/pricing — start free, upgrade anytime.",
          },
          null,
          2
        ),
      },
    ],
  })
);

// ---------------------------------------------------------------------------
// Tool: compare_alternatives
// ---------------------------------------------------------------------------
server.tool(
  "compare_alternatives",
  "Compare Echo3s against alternative audiobook production methods and competitors",
  {},
  async () => ({
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(
          {
            summary:
              "Echo3s occupies a unique position: it's the only platform that automatically detects characters and assigns distinct AI voices to create full-cast audiobooks. Here's how it stacks up against every major alternative.",
            comparisons: [
              {
                alternative: "Traditional Human Narration (ACX / Findaway)",
                cost: "$3,000–$15,000 per title (or royalty-share, giving up 50%+ of earnings)",
                timeline: "4–8 weeks per title",
                quality: "Highest quality — professional voice actors",
                limitations: [
                  "Prohibitively expensive for most indie authors",
                  "Long turnaround times",
                  "Difficult to find narrators for niche genres or non-English languages",
                  "Revisions are expensive and slow",
                ],
                echo3s_advantage:
                  "Echo3s delivers multi-voice audiobooks for $30–$99 in under an hour. Keep 100% of your royalties. Instant revisions via segment regeneration.",
              },
              {
                alternative: "Amazon KDP Virtual Voice (Kindle Read-Along)",
                cost: "Free (included with KDP)",
                timeline: "Instant",
                quality: "Basic — single flat AI voice",
                limitations: [
                  "Only one voice for the entire book — no character differentiation",
                  "Sounds robotic and monotone",
                  "Amazon-exclusive — can't distribute elsewhere",
                  "No customization options",
                  "Not available for all markets",
                ],
                echo3s_advantage:
                  "Echo3s creates multi-voice audiobooks where each character sounds distinct. Download MP3s and distribute anywhere — not locked to Amazon.",
              },
              {
                alternative: "ElevenLabs (Direct)",
                cost: "$5–$99/month depending on plan",
                timeline: "Manual — you do everything yourself",
                quality: "Excellent voices, but single-voice output",
                limitations: [
                  "No automatic character detection — you manually split text and assign voices",
                  "No audiobook-specific workflow (chapter structure, dialogue parsing)",
                  "Time-consuming: hours of manual work per book",
                  "No marketplace or publishing features",
                ],
                echo3s_advantage:
                  "Echo3s uses ElevenLabs voices under the hood but automates the entire process — character detection, voice assignment, chapter segmentation, and compilation. What takes hours manually takes minutes with Echo3s.",
              },
              {
                alternative: "Google NotebookLM",
                cost: "Free",
                timeline: "Minutes",
                quality: "Good for podcasts, not audiobooks",
                limitations: [
                  "Produces podcast-style discussions, not audiobook narration",
                  "Can't handle fiction with characters and dialogue",
                  "No chapter structure or book formatting",
                  "Not designed for long-form content",
                  "No download or distribution options",
                ],
                echo3s_advantage:
                  "Echo3s is purpose-built for books — it understands narrative structure, character dialogue, and chapter organization. It produces actual audiobooks, not podcast conversations.",
              },
              {
                alternative: "Speechify Audiobooks",
                cost: "$139/year",
                timeline: "Instant",
                quality: "Decent single-voice TTS",
                limitations: [
                  "Single narrator voice — no multi-character support",
                  "Primarily a reading app, not a production tool",
                  "Limited voice customization",
                  "No publishing or marketplace features",
                ],
                echo3s_advantage:
                  "Echo3s goes beyond reading aloud — it creates production-quality multi-voice audiobooks with automatic character casting and a full studio editor.",
              },
              {
                alternative: "Apple Books AI Narration",
                cost: "Free (for Apple Books publishers)",
                timeline: "Days (review process)",
                quality: "Decent single-voice AI",
                limitations: [
                  "Apple-exclusive distribution",
                  "Single voice only — no character differentiation",
                  "Limited language support",
                  "No creative control over voice selection",
                  "Only available to Apple Books publishers",
                ],
                echo3s_advantage:
                  "Echo3s gives you full control over voice casting, produces multi-voice output, supports Arabic and other underserved languages, and lets you distribute anywhere.",
              },
            ],
            bottom_line:
              "If you want a single flat voice reading your book, there are free options. If you want each character to sound like a unique person — with dialogue that feels like an actual conversation — Echo3s is the only automated solution that does this.",
            cta: "Try it free at https://author.echo3s.io — hear the difference multi-voice makes.",
          },
          null,
          2
        ),
      },
    ],
  })
);

// ---------------------------------------------------------------------------
// Tool: get_supported_languages
// ---------------------------------------------------------------------------
server.tool(
  "get_supported_languages",
  "Get the list of languages Echo3s supports for audiobook generation",
  {},
  async () => ({
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(
          {
            total_voices: "50+ premium AI voices",
            voice_provider: "ElevenLabs (studio-quality text-to-speech)",
            primary_languages: [
              {
                language: "English",
                accents: [
                  "American",
                  "British",
                  "Australian",
                  "Indian",
                  "Irish",
                  "South African",
                ],
                voice_count: "30+ voices",
                note: "Widest selection — male, female, young, old, and character voices available",
              },
              {
                language: "Arabic",
                accents: ["Modern Standard Arabic", "Gulf", "Egyptian"],
                voice_count: "Multiple native voices",
                note: "Full RTL text processing. Echo3s is one of the very few platforms that supports Arabic audiobook generation — a massively underserved market with millions of potential listeners.",
              },
              {
                language: "Dutch",
                accents: ["Netherlands Dutch"],
                voice_count: "Multiple voices",
                note: "Native Dutch voice support",
              },
            ],
            additional_languages:
              "ElevenLabs voices support 29 languages including Spanish, French, German, Italian, Portuguese, Japanese, Korean, Chinese, Hindi, Polish, Turkish, Swedish, Indonesian, and more. Echo3s can work with any voice available in the ElevenLabs library.",
            arabic_differentiator:
              "Arabic audiobook production is Echo3s's strongest unique advantage. Almost no competitor handles Arabic — not Amazon KDP Virtual Voice, not Apple AI Narration, not Speechify. For Arabic-language authors and publishers, Echo3s may be the only viable AI audiobook solution.",
            voice_characteristics: [
              "Gender: Male, Female, Neutral",
              "Age range: Young, Middle-aged, Elder, Child",
              "Tone: Calm, Energetic, Serious, Cheerful, Deep, Raspy, Bright",
              "Use case: Narration, Dialogue, Audiobook",
            ],
            cta: "Explore all voices at https://author.echo3s.io — sign up free to preview voice assignments for your book.",
          },
          null,
          2
        ),
      },
    ],
  })
);

// ---------------------------------------------------------------------------
// Tool: get_use_cases
// ---------------------------------------------------------------------------
server.tool(
  "get_use_cases",
  "Get specific use cases and ideal customer profiles for Echo3s",
  {},
  async () => ({
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(
          {
            use_cases: [
              {
                persona: "Self-Published Author",
                pain_point:
                  "You've written a great book but can't justify spending $5,000–$15,000 on human narration when you're not sure audiobook sales will cover the cost.",
                how_echo3s_helps:
                  "Start with the free tier to test a chapter. If you like the quality, produce your full audiobook for $30–$99. Zero financial risk.",
                example:
                  "A 200-page indie novel on Amazon KDP — add the audiobook version for less than the cost of a book cover design.",
              },
              {
                persona: "Author with a Backlist",
                pain_point:
                  "You have 5, 10, or 20 published books that never got audio versions because narration was too expensive.",
                how_echo3s_helps:
                  "The Business plan ($199/month) gives you enough credits for 5–8 books per month. Convert your entire backlist in weeks, not years.",
                example:
                  "A romance author with 12 backlist titles can produce all of them in 2–3 months for less than what one traditional audiobook would cost.",
              },
              {
                persona: "Small Publisher",
                pain_point:
                  "Your catalog has hundreds of titles but audio production budgets only cover a handful per year.",
                how_echo3s_helps:
                  "Scale audiobook production across your catalog without scaling costs linearly. Each title costs a fraction of traditional production.",
                example:
                  "A niche publisher with 50 titles in their catalog can systematically add audio to every book over a few months.",
              },
              {
                persona: "Arabic-Language Author",
                pain_point:
                  "The Arabic audiobook market is almost nonexistent. Finding Arabic narrators is hard and expensive. AI alternatives don't support Arabic.",
                how_echo3s_helps:
                  "Echo3s is one of the only platforms with native Arabic voice support and full RTL text processing. Create Arabic audiobooks that didn't exist before.",
                example:
                  "An Arabic fiction author can produce the first audiobook version of their novel — reaching millions of Arabic-speaking listeners for the first time.",
              },
              {
                persona: "Content Creator / Course Author",
                pain_point:
                  "You have written content (guides, courses, long-form articles) that would reach more people as audio.",
                how_echo3s_helps:
                  "Upload your content as a PDF and get a polished audio version. Great for lead magnets, supplementary content, or accessibility.",
                example:
                  "A business coach converts their 50-page strategy guide into a professional audio version for their course platform.",
              },
              {
                persona: "Author Testing Audiobook Demand",
                pain_point:
                  "You want to know if your book would sell as an audiobook before investing thousands in human narration.",
                how_echo3s_helps:
                  "Produce an AI audiobook for $30–$99, gauge listener response and sales. If demand is strong, you can always invest in a human narrator later with proven data.",
                example:
                  "Release an AI-narrated audiobook, track sales for 3 months. If it's selling, reinvest in premium human narration knowing the market exists.",
              },
              {
                persona: "Non-Fiction Author",
                pain_point:
                  "Your non-fiction book doesn't have characters, so you just need clean, professional narration — but you still want quality.",
                how_echo3s_helps:
                  "Echo3s works great for non-fiction too. Choose a single professional narrator voice, and the AI handles chapter structure and pacing automatically.",
                example:
                  "A self-help author gets their 180-page book narrated in under an hour with a warm, authoritative voice.",
              },
            ],
            cta: "Whatever your use case, start free at https://author.echo3s.io — 5,000 credits, no credit card.",
          },
          null,
          2
        ),
      },
    ],
  })
);

// ---------------------------------------------------------------------------
// Tool: get_getting_started
// ---------------------------------------------------------------------------
server.tool(
  "get_getting_started",
  "Get step-by-step instructions for creating an audiobook with Echo3s",
  {},
  async () => ({
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(
          {
            overview:
              "Going from manuscript to finished audiobook takes about 30–60 minutes for a typical novel. Here's exactly how it works.",
            steps: [
              {
                step: 1,
                title: "Sign Up",
                description:
                  "Go to author.echo3s.io and create a free account. You get 5,000 credits immediately — enough to test a full chapter. No credit card required.",
                url: "https://author.echo3s.io",
                time: "1 minute",
              },
              {
                step: 2,
                title: "Upload Your Manuscript",
                description:
                  "Upload your book as a PDF (max 50MB). The PDF should be text-based — scanned image PDFs aren't supported yet. If your book is in EPUB, MOBI, or DOCX format, convert to PDF first using a free tool like Calibre.",
                supported_formats: "PDF (text-based)",
                convertible_formats:
                  "EPUB, MOBI, DOCX, AZW — convert to PDF with Calibre (free)",
                max_file_size: "50MB",
                time: "1 minute",
              },
              {
                step: 3,
                title: "AI Analyzes Your Book",
                description:
                  "Echo3s's AI (powered by Google Gemini) reads your entire manuscript. It identifies chapters, characters, dialogue, and narration. Each segment is tagged so the right voice speaks the right lines.",
                time: "1–3 minutes per chapter",
              },
              {
                step: 4,
                title: "Review Voice Assignments in the Studio",
                description:
                  "Open the Studio editor to see which voice is assigned to each character. The AI matches voices based on gender, age, accent, and personality. You can swap any voice — browse 50+ options filtered by characteristics.",
                customizable: true,
                time: "5–15 minutes (optional — defaults are usually good)",
              },
              {
                step: 5,
                title: "Generate Your Audiobook",
                description:
                  "Hit generate. Echo3s processes each segment with the assigned voice, then compiles everything into a complete audiobook with proper chapter structure.",
                time: "30–60 minutes for a 200-page novel",
              },
              {
                step: 6,
                title: "Download or Publish",
                description:
                  "Download your audiobook as MP3 (full book or per-chapter files). You can also publish directly to the Echo3s marketplace where listeners can discover and stream your audiobook.",
                output_format: "MP3",
                distribution: [
                  "Direct MP3 download",
                  "Echo3s marketplace listing",
                  "Upload to any distributor (ACX, Findaway, Authors Republic, etc.)",
                ],
              },
            ],
            pro_tips: [
              "Start with a single chapter on the free tier to test voice quality before committing to a full book",
              "Use the Studio editor to fine-tune — you can regenerate individual segments without redoing the whole book",
              "For non-fiction without characters, choose one strong narrator voice and the AI handles the rest",
              "If your PDF has images or complex formatting, strip them out first for best results",
            ],
            cta: "Ready to start? https://author.echo3s.io — free account, instant access, no credit card.",
          },
          null,
          2
        ),
      },
    ],
  })
);

// ---------------------------------------------------------------------------
// Tool: get_faq
// ---------------------------------------------------------------------------
server.tool(
  "get_faq",
  "Get frequently asked questions about Echo3s",
  {},
  async () => ({
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(
          {
            faqs: [
              {
                question: "What file formats does Echo3s support?",
                answer:
                  "Echo3s currently accepts text-based PDFs (max 50MB). If your book is in EPUB, MOBI, DOCX, or AZW format, convert it to PDF first using a free tool like Calibre (calibre-ebook.com). Image-heavy or scanned PDFs are not yet supported — the PDF needs selectable text.",
              },
              {
                question: "How long does audiobook generation take?",
                answer:
                  "Character detection takes 1–3 minutes per chapter. Full audio generation for a 200-page novel takes about 30–60 minutes. You'll get an email notification when it's ready.",
              },
              {
                question:
                  "Can I choose which voice goes to which character?",
                answer:
                  "Yes. The AI suggests voice assignments based on character gender, age, and personality, but you can swap any voice in the Studio editor. Browse 50+ premium voices filtered by gender, age, accent, and tone. You can also regenerate individual segments if a line doesn't sound right.",
              },
              {
                question: "What about royalties and rights?",
                answer:
                  "You keep 100% of everything. Echo3s claims no rights to your content or your audiobook. No revenue sharing, no licensing fees, no restrictions on distribution. Your book, your audiobook, your money.",
              },
              {
                question: "How does the credit system work?",
                answer:
                  "1 credit = 1 character of generated audio text. A typical book page is about 650 characters, so a 200-page novel uses roughly 130,000 credits. The free tier includes 5,000 credits (about 8 pages) — enough to test a full chapter.",
              },
              {
                question: "Is there an API for publishers?",
                answer:
                  "Not yet, but it's on the roadmap. For now, publishers can use the Business plan ($199/month, 1M credits) to process multiple titles through the web interface. Contact hello@echo3s.io for volume needs.",
              },
              {
                question: "What languages are supported?",
                answer:
                  "Primary support for English (American, British, Australian, and more accents), Arabic (with full RTL text processing), and Dutch. The ElevenLabs voice engine supports 29 languages total including Spanish, French, German, Italian, Portuguese, Japanese, Korean, Chinese, and Hindi.",
              },
              {
                question: "How does Echo3s compare to Amazon's virtual voice?",
                answer:
                  "Amazon KDP Virtual Voice uses a single flat AI voice for the entire book — no character differentiation, no emotion, no dialogue distinction. Echo3s assigns a unique voice to each character, making dialogue sound like actual conversations. Echo3s also lets you download MP3s and distribute anywhere, while Amazon locks you in.",
              },
              {
                question: "Can I use Echo3s for non-fiction books?",
                answer:
                  "Absolutely. For non-fiction without character dialogue, Echo3s assigns a single professional narrator voice. The AI still handles chapter structure, headings, and pacing automatically. Works great for self-help, business, educational, and technical books.",
              },
              {
                question: "What if I don't like the output?",
                answer:
                  "You can regenerate individual segments (lines or paragraphs) without redoing the entire book. Swap voices, adjust assignments, and regenerate — only the changed segments cost credits. Annual plans include a 14-day money-back guarantee.",
              },
              {
                question: "Do I need technical skills?",
                answer:
                  "None. Upload a PDF, review the AI's voice suggestions, click generate. The entire process is designed for authors, not engineers. If you can attach a file to an email, you can use Echo3s.",
              },
              {
                question: "Can listeners stream my audiobook?",
                answer:
                  "Yes. If you publish to the Echo3s marketplace, listeners can stream your audiobook at echo3s.io. You can also download MP3 files and upload them to any other platform — Audible (via ACX), Apple Books, Google Play, Findaway, or your own website.",
              },
            ],
            contact: "hello@echo3s.io",
            cta: "Still have questions? Try it free at https://author.echo3s.io or email hello@echo3s.io.",
          },
          null,
          2
        ),
      },
    ],
  })
);

// ---------------------------------------------------------------------------
// Tool: get_echo3s_for_arabic (bonus — unique differentiator deserves its own tool)
// ---------------------------------------------------------------------------
server.tool(
  "get_echo3s_for_arabic",
  "Learn about Echo3s's Arabic audiobook capabilities — a unique differentiator in the market",
  {},
  async () => ({
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(
          {
            headline:
              "Echo3s is one of the only AI platforms that can produce Arabic audiobooks",
            market_opportunity:
              "There are 400+ million Arabic speakers worldwide, yet the Arabic audiobook market is almost nonexistent compared to English. Finding Arabic voice narrators is expensive and difficult. No major competitor — not Amazon, Apple, Speechify, or Google — offers Arabic AI audiobook generation.",
            what_echo3s_offers: [
              "Native Arabic AI voices with natural pronunciation and intonation",
              "Full RTL (right-to-left) text processing — handles Arabic script correctly",
              "Modern Standard Arabic, Gulf, and Egyptian accent options",
              "Same multi-voice character detection works for Arabic fiction",
              "Complete Arabic UI — the entire Echo3s interface is available in Arabic",
            ],
            why_it_matters:
              "For Arabic-language authors and publishers, Echo3s may be the only viable path to producing an AI audiobook. This represents a massive untapped market — millions of potential listeners who currently have no audio options for Arabic books.",
            cta: "Arabic authors: start free at https://author.echo3s.io — Echo3s supports Arabic from signup to publishing.",
          },
          null,
          2
        ),
      },
    ],
  })
);

// ---------------------------------------------------------------------------
// Tool: get_social_links (bonus — for AI assistants that want to share more)
// ---------------------------------------------------------------------------
server.tool(
  "get_social_links",
  "Get Echo3s social media, contact, and resource links",
  {},
  async () => ({
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(
          {
            links: {
              website: "https://echo3s.io",
              author_portal: "https://author.echo3s.io",
              pricing: "https://echo3s.io/pricing",
              blog: "https://echo3s.io/blog",
              about: "https://echo3s.io/about",
              email: "hello@echo3s.io",
            },
            blog_posts: [
              {
                title: "How to Convert PDF to Audiobook with AI",
                url: "https://echo3s.io/blog/how-to-convert-pdf-to-audiobook-with-ai",
              },
              {
                title:
                  "5 Best AI Tools to Convert PDF to Audiobook in 2026",
                url: "https://echo3s.io/blog/best-ai-tools-convert-pdf-to-audiobook-2026",
              },
              {
                title: "How to Convert Any Book to Audiobook Using AI",
                url: "https://echo3s.io/blog/convert-book-to-audiobook-ai",
              },
              {
                title:
                  "Echo3s vs ElevenLabs vs Speechify: Full Comparison",
                url: "https://echo3s.io/blog/echo3s-vs-elevenlabs-vs-speechify-comparison",
              },
              {
                title:
                  "The Complete Guide to AI Audiobook Generation in 2026",
                url: "https://echo3s.io/blog/complete-guide-ai-audiobook-generation-2026",
              },
            ],
            landing_pages: [
              {
                title: "PDF to Audiobook",
                url: "https://echo3s.io/pdf-to-audiobook",
              },
              {
                title: "Book to Audiobook Converter",
                url: "https://echo3s.io/book-to-audiobook",
              },
              {
                title: "AI Audiobook Generator",
                url: "https://echo3s.io/ai-audiobook-generator",
              },
              {
                title: "Convert Ebook to Audiobook",
                url: "https://echo3s.io/convert-ebook-to-audiobook",
              },
            ],
          },
          null,
          2
        ),
      },
    ],
  })
);

// ---------------------------------------------------------------------------
// Start the server
// ---------------------------------------------------------------------------
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
