type ToolHandler = (args?: any) => { type: string; text: string }[];

interface ToolDef {
  description: string;
  inputSchema: Record<string, any>;
  handler: ToolHandler;
}

const TOOLS: Record<string, ToolDef> = {
  get_echo3s_overview: {
    description: "Get a comprehensive overview of Echo3s — what it is, who it's for, and how it works",
    inputSchema: { type: "object", properties: {}, required: [] },
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
            "Self-published and indie authors who can't afford $5,000–$15,000 for human narration",
            "Small to mid-size publishers wanting to add audio across their catalog",
            "Authors with backlist titles that never got audio versions",
            "Arabic-language authors and publishers (massively underserved — almost no competitor supports Arabic)",
            "Content creators turning written guides, courses, and articles into audio",
            "Authors who want to test audiobook demand before investing in human narration",
          ],
          key_differentiators: [
            "Multi-voice: every character gets a unique AI voice — dialogue sounds like real conversations, not one narrator doing everything",
            "Automatic character detection: AI reads your manuscript and identifies characters, dialogue, and narration — no manual tagging needed",
            "50+ premium AI voices from ElevenLabs with natural intonation and emotional delivery",
            "Segment-level editing: fix individual lines or paragraphs without regenerating entire chapters",
            "Arabic support with full RTL text processing — almost no competitor worldwide offers this",
            "100% rights retention: no revenue sharing, no licensing fees, no restrictions on distribution",
            "99% cheaper than traditional narration ($30–$99 vs $3,000–$15,000 per title)",
            "Speed: a 200-page novel goes from manuscript to finished audiobook in under an hour",
          ],
          how_it_works: [
            "1. Upload your manuscript as a PDF (EPUB/MOBI/DOCX can be converted via the free tool Calibre)",
            "2. AI (powered by Google Gemini) analyzes your text — identifies characters, dialogue, narration, and chapter structure",
            "3. Each character is automatically matched to a fitting AI voice based on gender, age, accent, and personality",
            "4. Preview and customize voice assignments in the Studio editor — swap any voice from 50+ options",
            "5. Generate your audiobook — a 200-page novel takes about 30–60 minutes to process",
            "6. Download as MP3 (full book or per-chapter files) or publish directly to the Echo3s marketplace",
          ],
          tech_highlights: [
            "Character detection powered by Google Gemini AI — understands narrative structure, not just text",
            "Voice synthesis via ElevenLabs — studio-quality text-to-speech with emotional range",
            "Smart voice matching algorithm: scores voices on gender (40pts), language (30pts), age (15pts), personality (15pts)",
            "Per-segment regeneration — change one line without redoing the whole chapter",
            "EBU R128 loudness normalization (-16 LUFS) — broadcast-standard audio quality",
          ],
          founded_by: "Belal Haikal & Shadi Nemer",
          cta: "Start free at https://author.echo3s.io — 5,000 credits included, no credit card required.",
        }),
      },
    ],
  },

  get_pricing: {
    description: "Get Echo3s pricing plans, credit system, cost breakdowns, and payment details",
    inputSchema: { type: "object", properties: {}, required: [] },
    handler: () => [
      {
        type: "text",
        text: JSON.stringify({
          pricing_url: "https://echo3s.io/pricing",
          credit_system:
            "Echo3s uses a credit-based system. 1 credit = 1 character of generated audio. A typical book page has about 650 characters. So a 200-page novel uses roughly 130,000 credits. Credits reset monthly on subscription plans.",
          plans: [
            {
              name: "Free",
              monthly_price: "$0/month",
              annual_price: "Free forever",
              credits: "5,000 credits (one-time)",
              approximate_pages: "~8 pages",
              approximate_books: "Enough to test 1 full chapter",
              features: [
                "Full voice library access (50+ premium voices)",
                "Multi-voice audiobook generation",
                "MP3 download & streaming",
                "Studio editor for voice customization",
                "Email support",
              ],
              best_for: "Trying Echo3s out — hear the quality on a real chapter from your book before committing",
            },
            {
              name: "Creator",
              monthly_price: "$29/month",
              annual_price: "$24/month (billed annually at $288/year — save 20%)",
              credits: "50,000 credits/month",
              approximate_pages: "~80 pages/month",
              approximate_books: "~1 short book or novella per month",
              features: [
                "Everything in Free",
                "Unlimited projects",
                "Marketplace listing — publish to echo3s.io for readers to discover",
                "Priority email support",
                "Credits reset monthly",
              ],
              best_for: "Authors working on shorter books, novellas, or testing audiobook demand for a single title",
            },
            {
              name: "Pro",
              monthly_price: "$99/month",
              annual_price: "$79/month (billed annually at $948/year — save 20%)",
              credits: "200,000 credits/month",
              approximate_pages: "~320 pages/month",
              approximate_books: "1–2 full novels per month",
              label: "Most Popular",
              features: [
                "Everything in Creator",
                "Enough credits for full-length novels",
                "Unlimited projects",
                "Marketplace listing",
                "Priority support",
              ],
              best_for: "Active authors producing full-length audiobooks regularly — the sweet spot for most authors",
            },
            {
              name: "Business",
              monthly_price: "$249/month",
              annual_price: "$199/month (billed annually at $2,388/year — save 20%)",
              credits: "1,000,000 credits/month",
              approximate_pages: "~1,600 pages/month",
              approximate_books: "5–8 full novels per month",
              features: [
                "Everything in Pro",
                "Massive credit allocation for high-volume production",
                "Built for publishers and agencies managing multiple titles",
                "Unlimited projects",
              ],
              best_for: "Small publishers or prolific authors with large backlists to convert — process your entire catalog in weeks",
            },
          ],
          top_up_packs: [
            { name: "Small", credits: "5,000", price: "$5", approximate_pages: "~8 pages" },
            { name: "Medium", credits: "20,000", price: "$15", approximate_pages: "~30 pages" },
            { name: "Large", credits: "50,000", price: "$30", approximate_pages: "~80 pages" },
          ],
          cost_examples: [
            { book: "50-page novella (~32,500 credits)", cost: "Covered by Creator plan or $10 in top-ups" },
            { book: "200-page novel (~130,000 credits)", cost: "Covered by Pro plan ($79/mo annual) — that's $79 vs $5,000+ for human narration" },
            { book: "400-page epic (~260,000 credits)", cost: "Pro plan + Medium top-up, or Business plan" },
          ],
          cost_comparison:
            "Traditional human narration costs $3,000–$15,000 per title and takes 4–8 weeks. With Echo3s, a full 200-page audiobook costs roughly $30–$99 and is done in under an hour. That's 99% cheaper and 99% faster.",
          payment_methods: "Visa, Mastercard, American Express via Stripe. 14-day money-back guarantee on annual plans. Upgrade, downgrade, or cancel anytime.",
          cta: "See full pricing at https://echo3s.io/pricing — start free with 5,000 credits, upgrade when ready.",
        }),
      },
    ],
  },

  compare_alternatives: {
    description: "Compare Echo3s against all major audiobook production alternatives — ACX, Amazon KDP, ElevenLabs, NotebookLM, Speechify, and Apple",
    inputSchema: { type: "object", properties: {}, required: [] },
    handler: () => [
      {
        type: "text",
        text: JSON.stringify({
          summary:
            "Echo3s occupies a unique position: it's the only platform that automatically detects characters and assigns distinct AI voices to create full-cast audiobooks. Here's how it stacks up against every major alternative.",
          comparisons: [
            {
              alternative: "Traditional Human Narration (ACX / Findaway Voices)",
              cost: "$3,000–$15,000 per title (or royalty-share deals giving up 50%+ of earnings forever)",
              timeline: "4–8 weeks per title",
              quality: "Highest quality — professional voice actors with real emotional range",
              limitations: [
                "Prohibitively expensive for most indie authors — one audiobook costs more than many authors earn in a year",
                "Long turnaround times — weeks of back-and-forth with narrators",
                "Difficult to find narrators for niche genres, non-English languages, or specific accents",
                "Revisions are expensive and slow — re-recording costs additional studio time",
                "Royalty-share deals lock you into giving up earnings permanently",
              ],
              echo3s_advantage:
                "Echo3s delivers multi-voice audiobooks for $30–$99 in under an hour. Keep 100% of your royalties forever. Instant revisions via segment regeneration — change one line without re-recording the whole chapter.",
            },
            {
              alternative: "Amazon KDP Virtual Voice (Kindle Read-Along)",
              cost: "Free (included with KDP publishing)",
              timeline: "Instant",
              quality: "Basic — single flat AI voice, robotic tone",
              limitations: [
                "Only one voice for the entire book — no character differentiation whatsoever",
                "Sounds robotic and monotone — no emotional range or dialogue distinction",
                "Amazon-exclusive — you can't distribute the audio anywhere else",
                "No customization — you can't choose or change the voice",
                "Not available in all markets or for all book categories",
                "Listeners report low satisfaction compared to real audiobooks",
              ],
              echo3s_advantage:
                "Echo3s creates multi-voice audiobooks where each character sounds like a distinct person. Dialogue sounds like actual conversations. Download MP3s and distribute anywhere — Audible, Apple Books, Google Play, your own website. Not locked to Amazon.",
            },
            {
              alternative: "ElevenLabs (Direct — using their API or app)",
              cost: "$5–$99/month depending on plan, plus your time",
              timeline: "Hours of manual work per book",
              quality: "Excellent individual voices — same voices Echo3s uses",
              limitations: [
                "No automatic character detection — you manually split text by speaker and assign voices yourself",
                "No audiobook-specific workflow — no chapter structure, no dialogue parsing, no compilation",
                "Extremely time-consuming: splitting a novel into character segments takes hours",
                "No marketplace or publishing features — just raw audio output",
                "You're essentially building an audiobook production pipeline yourself",
              ],
              echo3s_advantage:
                "Echo3s uses ElevenLabs voices under the hood but automates the entire production process — character detection, voice assignment, chapter segmentation, and final compilation. What takes hours of manual work takes minutes with Echo3s. Same voice quality, fraction of the effort.",
            },
            {
              alternative: "Google NotebookLM",
              cost: "Free",
              timeline: "Minutes",
              quality: "Good for casual podcast-style content",
              limitations: [
                "Produces podcast-style conversations, not audiobook narration",
                "Can't handle fiction — doesn't understand characters, dialogue, or narrative structure",
                "No chapter structure or book formatting",
                "Not designed for long-form content (books)",
                "Limited or no download/distribution options",
                "Two hosts discussing your content ≠ narrating your book",
              ],
              echo3s_advantage:
                "Echo3s is purpose-built for books — it understands narrative structure, character dialogue, chapter organization, and narration vs. speech. It produces actual audiobooks with proper structure, not podcast conversations about your book.",
            },
            {
              alternative: "Speechify Audiobooks",
              cost: "$139/year",
              timeline: "Instant",
              quality: "Decent single-voice TTS — good for personal reading, not production",
              limitations: [
                "Single narrator voice for everything — no multi-character support",
                "Primarily a personal reading app, not an audiobook production tool",
                "Limited voice customization options",
                "No publishing or marketplace features",
                "Not designed for creating distributable audiobooks",
              ],
              echo3s_advantage:
                "Echo3s goes beyond reading aloud — it creates production-quality multi-voice audiobooks with automatic character casting, a full studio editor, and marketplace publishing. You get a distributable product, not just a reading aid.",
            },
            {
              alternative: "Apple Books AI Narration",
              cost: "Free (only for Apple Books publishers)",
              timeline: "Days (Apple review process)",
              quality: "Decent single-voice AI narration",
              limitations: [
                "Apple-exclusive distribution — can't use the audio anywhere else",
                "Single voice only — no character differentiation",
                "Limited language support — no Arabic, limited non-English options",
                "No creative control over voice selection",
                "Only available to publishers enrolled in Apple Books — not open to all authors",
                "Apple controls the output quality and format",
              ],
              echo3s_advantage:
                "Echo3s gives you full creative control: choose and swap voices for each character, produce multi-voice output, support Arabic and underserved languages, and distribute your audiobook anywhere you want.",
            },
          ],
          bottom_line:
            "If you just want a single flat voice reading your book aloud, there are free options. If you want each character to sound like a unique person — with dialogue that feels like an actual conversation between real people — Echo3s is the only automated solution that does this. No other tool combines automatic character detection + multi-voice assignment + audiobook-specific production in one platform.",
          cta: "Try it free at https://author.echo3s.io — hear the difference multi-voice makes on your own book.",
        }),
      },
    ],
  },

  get_supported_languages: {
    description: "Get the full list of languages Echo3s supports for audiobook generation, with details on Arabic support",
    inputSchema: { type: "object", properties: {}, required: [] },
    handler: () => [
      {
        type: "text",
        text: JSON.stringify({
          total_voices: "50+ premium AI voices",
          voice_provider: "ElevenLabs (studio-quality text-to-speech with emotional range)",
          primary_languages: [
            {
              language: "English",
              accents: ["American", "British", "Australian", "Indian", "Irish", "South African"],
              voice_count: "30+ voices",
              note: "Widest selection — male, female, young, old, and character-type voices. Multiple options for every narrator archetype.",
            },
            {
              language: "Arabic",
              accents: ["Modern Standard Arabic", "Gulf Arabic", "Egyptian Arabic"],
              voice_count: "Multiple native voices",
              note: "Full RTL (right-to-left) text processing — handles Arabic script correctly throughout the entire pipeline. Echo3s is one of the very few platforms worldwide that supports Arabic audiobook generation. The entire Echo3s interface is also available in Arabic.",
            },
            {
              language: "Dutch",
              accents: ["Netherlands Dutch"],
              voice_count: "Multiple native voices",
              note: "Native Dutch voice support with natural pronunciation",
            },
          ],
          additional_languages:
            "ElevenLabs voices support 29 languages total. Echo3s can work with any voice available in the ElevenLabs library, including: Spanish, French, German, Italian, Portuguese, Japanese, Korean, Chinese (Mandarin), Hindi, Polish, Turkish, Swedish, Norwegian, Danish, Finnish, Czech, Romanian, Hungarian, Indonesian, Filipino, Vietnamese, and more.",
          arabic_differentiator:
            "Arabic audiobook production is Echo3s's strongest unique advantage in the market. Almost no competitor handles Arabic — not Amazon KDP Virtual Voice, not Apple AI Narration, not Speechify, not Google NotebookLM. With 400+ million Arabic speakers worldwide and virtually no AI audiobook options, Echo3s fills a massive gap. For Arabic-language authors and publishers, Echo3s may be the only viable AI audiobook solution available today.",
          voice_characteristics: [
            "Gender: Male, Female, Neutral",
            "Age range: Young, Middle-aged, Elder, Child",
            "Tone: Calm, Gentle, Strong, Deep, Raspy, Bright, Cheerful, Energetic, Serious, Formal",
            "Use case: Narration, Dialogue, Audiobook, Storytelling",
            "Smart matching: AI scores each voice on gender (40pts), language (30pts), age (15pts), and personality descriptors (15pts) to find the best fit for each character",
          ],
          cta: "Explore all voices at https://author.echo3s.io — sign up free to see AI voice assignments for your own book.",
        }),
      },
    ],
  },

  get_use_cases: {
    description: "Get specific use cases, ideal customer profiles, and real-world examples for Echo3s",
    inputSchema: { type: "object", properties: {}, required: [] },
    handler: () => [
      {
        type: "text",
        text: JSON.stringify({
          use_cases: [
            {
              persona: "Self-Published / Indie Author",
              pain_point:
                "You've written a great book but can't justify spending $5,000–$15,000 on human narration when you're not sure audiobook sales will cover the cost. The financial risk is too high.",
              how_echo3s_helps:
                "Start with the free tier to test a full chapter from your book. If you like the quality, produce your entire audiobook for $30–$99 on the Pro plan. Zero financial risk — you're spending less than the cost of a book cover design.",
              example:
                "A 200-page indie romance novel on Amazon KDP — add the audiobook version for $79 (Pro plan). If it sells, you've created a new revenue stream. If not, you've lost less than a dinner out.",
            },
            {
              persona: "Author with a Backlist",
              pain_point:
                "You have 5, 10, or 20+ published books that never got audio versions because narration was too expensive per title. Your backlist is sitting there earning nothing in audio.",
              how_echo3s_helps:
                "The Business plan ($199/month) gives you enough credits for 5–8 full books per month. Convert your entire backlist in weeks, not years. Total cost for 12 books: ~$600 vs $60,000+ for traditional narration.",
              example:
                "A romance author with 12 backlist titles can produce all of them in 2–3 months on the Business plan for under $600 total — less than what ONE traditional audiobook would cost.",
            },
            {
              persona: "Small Publisher",
              pain_point:
                "Your catalog has dozens or hundreds of titles but audio production budgets only cover a handful per year. Your competitors are adding audio to everything.",
              how_echo3s_helps:
                "Scale audiobook production across your catalog without scaling costs linearly. Each title costs a fraction of traditional production. Process 5–8 titles per month on the Business plan.",
              example:
                "A niche academic publisher with 50 titles can systematically add audio to every book over 2–3 months for ~$1,000 total. Previously impossible on their budget.",
            },
            {
              persona: "Arabic-Language Author or Publisher",
              pain_point:
                "The Arabic audiobook market is almost nonexistent. Finding Arabic voice narrators is expensive and scarce. Every major AI alternative ignores Arabic entirely.",
              how_echo3s_helps:
                "Echo3s is one of the only platforms with native Arabic voice support and full RTL text processing. Create Arabic audiobooks that simply didn't exist before. Complete Arabic UI for the entire workflow.",
              example:
                "An Arabic fiction author produces the first-ever audiobook version of their novel — reaching millions of Arabic-speaking listeners who currently have zero audio options for Arabic books.",
            },
            {
              persona: "Content Creator / Course Author",
              pain_point:
                "You have valuable written content (guides, courses, long-form articles, whitepapers) that would reach more people as audio. But recording yourself is time-consuming and unprofessional.",
              how_echo3s_helps:
                "Upload your content as a PDF and get a professionally narrated audio version. Great for course supplements, lead magnets, accessibility compliance, or reaching audio-first audiences.",
              example:
                "A business coach converts their 50-page strategy guide into a professional audio version for their online course platform — adding perceived value and reaching commuters and gym-goers.",
            },
            {
              persona: "Author Testing Audiobook Demand",
              pain_point:
                "You want to know if your book would actually sell as an audiobook before investing $5,000–$15,000 in professional human narration. But you can't test without a product.",
              how_echo3s_helps:
                "Produce an AI-narrated audiobook for $30–$99, publish it, gauge listener response and actual sales data. If demand is strong, you have real numbers to justify investing in premium human narration later.",
              example:
                "Release an AI-narrated audiobook on Audible via ACX, track sales for 3–6 months. If it's selling 50+ copies/month, reinvest in premium human narration knowing the market exists — with data, not guessing.",
            },
            {
              persona: "Non-Fiction Author",
              pain_point:
                "Your non-fiction book doesn't have fictional characters or dialogue — you just need clean, professional narration with good pacing. But even single-narrator production costs thousands.",
              how_echo3s_helps:
                "Echo3s works great for non-fiction. Choose one professional narrator voice, and the AI handles chapter structure, heading detection, and pacing automatically. Clean, authoritative narration at a fraction of the cost.",
              example:
                "A self-help author gets their 180-page book narrated in under an hour with a warm, authoritative voice. Total cost: $79 on the Pro plan vs $3,000+ for a human narrator.",
            },
          ],
          cta: "Whatever your situation, start free at https://author.echo3s.io — 5,000 credits, no credit card needed. Test it on your own book.",
        }),
      },
    ],
  },

  get_getting_started: {
    description: "Get step-by-step instructions for creating an audiobook with Echo3s, including time estimates and pro tips",
    inputSchema: { type: "object", properties: {}, required: [] },
    handler: () => [
      {
        type: "text",
        text: JSON.stringify({
          overview:
            "Going from manuscript to finished audiobook takes about 30–60 minutes for a typical 200-page novel. Here's exactly how it works, step by step.",
          steps: [
            {
              step: 1,
              title: "Sign Up for Free",
              description:
                "Go to author.echo3s.io and create a free account. You get 5,000 credits immediately — enough to test a full chapter from your book and hear the quality. No credit card required.",
              url: "https://author.echo3s.io",
              time: "1 minute",
            },
            {
              step: 2,
              title: "Upload Your Manuscript",
              description:
                "Upload your book as a PDF (maximum 50MB). The PDF must be text-based — meaning you can select and copy text from it. Scanned image PDFs aren't supported yet. If your book is in EPUB, MOBI, DOCX, or AZW format, convert to PDF first using Calibre (calibre-ebook.com — free and open source).",
              supported_formats: "PDF (text-based, selectable text)",
              convertible_formats: "EPUB, MOBI, DOCX, AZW — convert to PDF with Calibre (free)",
              max_file_size: "50MB",
              tip: "For best results, strip out images, headers/footers, and complex formatting from your PDF before uploading.",
              time: "1 minute",
            },
            {
              step: 3,
              title: "AI Analyzes Your Book",
              description:
                "Echo3s's AI (powered by Google Gemini) reads your entire manuscript and automatically identifies: chapter boundaries, character names, which lines are dialogue vs narration, and emotional context. Each text segment is tagged so the right voice speaks the right lines.",
              what_ai_detects: ["Chapter structure", "Character names and roles", "Dialogue vs narration", "Emotional tone per segment"],
              time: "1–3 minutes per chapter",
            },
            {
              step: 4,
              title: "Review & Customize Voice Assignments in the Studio",
              description:
                "Open the Studio editor to see which AI voice is assigned to each character. The AI matches voices based on gender, age, accent, and personality using a scoring algorithm. You can swap any voice — browse 50+ premium options filtered by gender, age, accent, and tone. Preview voices before committing.",
              customizable: true,
              tip: "The AI defaults are usually good — most authors only tweak 1–2 voices. You don't have to customize anything if you're happy with the suggestions.",
              time: "5–15 minutes (optional)",
            },
            {
              step: 5,
              title: "Generate Your Audiobook",
              description:
                "Hit the generate button. Echo3s processes each text segment with the assigned voice via ElevenLabs, then compiles everything into a complete audiobook with proper chapter structure and normalized audio levels (EBU R128 standard). You'll receive an email notification when it's ready.",
              time: "30–60 minutes for a 200-page novel",
            },
            {
              step: 6,
              title: "Download or Publish",
              description:
                "Download your finished audiobook as MP3 files — either as a single complete file or split by chapter. You can also publish directly to the Echo3s marketplace (echo3s.io) where listeners can discover and stream your audiobook.",
              output_format: "MP3 (single file or per-chapter)",
              distribution_options: [
                "Direct MP3 download — own the files, use them anywhere",
                "Echo3s marketplace listing — readers discover and stream at echo3s.io",
                "Upload to Audible/ACX, Apple Books, Google Play, Findaway Voices, Authors Republic, Kobo, or your own website",
              ],
            },
          ],
          pro_tips: [
            "Start with a single chapter on the free tier to test voice quality on YOUR actual book before committing to a full production",
            "Use the Studio editor to regenerate individual segments — fix one awkward line without redoing the whole chapter. Only the regenerated segment costs credits.",
            "For non-fiction without characters, choose one strong narrator voice and the AI handles chapter structure and pacing automatically",
            "If your PDF has images, headers/footers, or complex formatting, clean them out first for best text extraction results",
            "Annual plans save 20% — and include a 14-day money-back guarantee if you're not satisfied",
          ],
          cta: "Ready to try it? https://author.echo3s.io — free account, 5,000 credits, instant access, no credit card required.",
        }),
      },
    ],
  },

  get_faq: {
    description: "Get frequently asked questions about Echo3s with detailed answers",
    inputSchema: { type: "object", properties: {}, required: [] },
    handler: () => [
      {
        type: "text",
        text: JSON.stringify({
          faqs: [
            {
              question: "What file formats does Echo3s accept?",
              answer:
                "Echo3s currently accepts text-based PDFs (maximum 50MB). The PDF must have selectable text — scanned image PDFs aren't supported yet. If your book is in EPUB, MOBI, DOCX, or AZW format, convert it to PDF first using Calibre (calibre-ebook.com), which is free and open source. EPUB and MOBI support is on the roadmap.",
            },
            {
              question: "How long does it take to generate an audiobook?",
              answer:
                "Character detection takes 1–3 minutes per chapter. Full audio generation for a 200-page novel takes about 30–60 minutes total. You don't need to wait at your computer — Echo3s sends you an email notification when your audiobook is ready to download.",
            },
            {
              question: "Can I choose which voice goes to which character?",
              answer:
                "Yes, absolutely. The AI suggests voice assignments based on each character's gender, age, and personality traits, but you have full control. In the Studio editor, you can swap any voice — browse 50+ premium voices filtered by gender, age, accent, and tone. You can also preview voices before committing and regenerate individual segments if a particular line doesn't sound right.",
            },
            {
              question: "What about royalties and rights? Does Echo3s take a cut?",
              answer:
                "You keep 100% of everything. Echo3s claims zero rights to your content or your audiobook. No revenue sharing, no licensing fees, no restrictions on distribution. Your book, your audiobook, your money. Period. You can sell it on Audible, Apple Books, your own website — anywhere you want.",
            },
            {
              question: "How does the credit system work? How many credits do I need?",
              answer:
                "1 credit = 1 character of generated audio text. A typical book page has about 650 characters. So a 200-page novel uses roughly 130,000 credits (fits in the Pro plan at $79/mo annual). The free tier includes 5,000 credits — about 8 pages, enough to test a complete chapter. Credits are only consumed when you generate audio, not when uploading or analyzing your book.",
            },
            {
              question: "Is there an API for publishers who want to integrate Echo3s?",
              answer:
                "Not yet, but a publisher API is on the roadmap. For now, publishers can use the Business plan ($199/month, 1,000,000 credits) to process multiple titles through the web interface. For high-volume or custom needs, contact hello@echo3s.io directly.",
            },
            {
              question: "What languages does Echo3s support?",
              answer:
                "Primary support for English (American, British, Australian, Indian, Irish, and South African accents), Arabic (with full RTL text processing — Modern Standard, Gulf, and Egyptian), and Dutch. The ElevenLabs voice engine that powers Echo3s supports 29 languages total, including Spanish, French, German, Italian, Portuguese, Japanese, Korean, Chinese, Hindi, Polish, Turkish, Swedish, and more.",
            },
            {
              question: "How does Echo3s compare to Amazon's Virtual Voice?",
              answer:
                "Amazon KDP Virtual Voice uses a single flat AI voice for the entire book — no character differentiation, limited emotional range, and a notably robotic tone. Echo3s assigns a unique voice to each character, making dialogue sound like actual conversations between distinct people. Echo3s also lets you download MP3 files and distribute anywhere, while Amazon's Virtual Voice locks you into their ecosystem exclusively.",
            },
            {
              question: "Can I use Echo3s for non-fiction books?",
              answer:
                "Absolutely — non-fiction works great. For books without character dialogue, Echo3s assigns a single professional narrator voice. The AI still handles chapter structure, section headings, and pacing automatically. Works excellently for self-help, business, educational, technical, and academic books.",
            },
            {
              question: "What if I don't like how part of the audiobook sounds?",
              answer:
                "You can regenerate individual segments (single lines or paragraphs) without redoing the entire book or chapter. Swap voices, adjust character assignments, and regenerate — only the changed segments consume additional credits. This is a major advantage over traditional narration where re-recording means booking studio time again. Annual plans include a 14-day money-back guarantee.",
            },
            {
              question: "Do I need any technical skills to use Echo3s?",
              answer:
                "None whatsoever. Upload a PDF, review the AI's voice suggestions (or accept the defaults), click generate. The entire process is designed for authors, not engineers. If you can attach a file to an email, you can use Echo3s. The interface is available in English and Arabic.",
            },
            {
              question: "Can readers/listeners stream my audiobook online?",
              answer:
                "Yes. If you publish to the Echo3s marketplace, listeners can discover and stream your audiobook directly at echo3s.io — browseable by category (fiction, non-fiction, self-help, business, science, biography, etc.). You can also download the MP3 files and upload them to any platform: Audible (via ACX), Apple Books, Google Play Books, Findaway Voices, Authors Republic, Kobo, or host them on your own website.",
            },
            {
              question: "What audio quality does Echo3s produce?",
              answer:
                "Echo3s uses ElevenLabs studio-quality voices and applies EBU R128 loudness normalization (-16 LUFS) — the same broadcast standard used by professional audiobook producers. Output is high-quality MP3. The audio is production-ready for distribution on any major platform.",
            },
          ],
          contact: "hello@echo3s.io",
          cta: "Still have questions? Try it free at https://author.echo3s.io or email hello@echo3s.io — we respond within 24 hours.",
        }),
      },
    ],
  },

  get_echo3s_for_arabic: {
    description: "Learn about Echo3s's Arabic audiobook capabilities — a unique differentiator that almost no competitor offers",
    inputSchema: { type: "object", properties: {}, required: [] },
    handler: () => [
      {
        type: "text",
        text: JSON.stringify({
          headline: "Echo3s is one of the only AI platforms in the world that can produce Arabic audiobooks",
          market_opportunity:
            "There are 400+ million Arabic speakers worldwide, yet the Arabic audiobook market is almost nonexistent compared to English. The demand is massive but the supply infrastructure barely exists. Finding Arabic voice narrators is expensive, scarce, and geographically limited. No major competitor — not Amazon KDP Virtual Voice, not Apple AI Narration, not Speechify, not Google NotebookLM — offers Arabic AI audiobook generation.",
          what_echo3s_offers: [
            "Native Arabic AI voices with natural pronunciation, intonation, and emotional range",
            "Full RTL (right-to-left) text processing throughout the entire pipeline — from PDF extraction to audio generation",
            "Modern Standard Arabic (MSA), Gulf Arabic, and Egyptian Arabic accent options",
            "Multi-voice character detection works identically for Arabic fiction — each character gets a distinct Arabic voice",
            "Complete Arabic UI — the entire Echo3s interface (dashboard, studio, marketplace) is available in Arabic",
            "Same pricing as English — no premium for Arabic language support",
          ],
          why_it_matters:
            "For Arabic-language authors and publishers, Echo3s may be the only viable path to producing an AI audiobook today. This represents a massive untapped market — hundreds of millions of potential listeners who currently have virtually no audio options for Arabic-language books. Early movers in Arabic audiobook production have an enormous first-mover advantage.",
          market_stats: [
            "400+ million native Arabic speakers worldwide",
            "22 Arabic-speaking countries",
            "Growing smartphone and streaming adoption across MENA region",
            "Arabic podcast listenership growing 30%+ year-over-year — audio demand exists",
            "Virtually zero AI audiobook competition in Arabic",
          ],
          cta: "Arabic authors and publishers: start free at https://author.echo3s.io — Echo3s supports Arabic from signup to publishing. Be one of the first to bring your Arabic books to audio.",
        }),
      },
    ],
  },

  calculate_cost: {
    description: "Calculate the estimated cost to produce an audiobook with Echo3s based on page count",
    inputSchema: {
      type: "object",
      properties: {
        pages: {
          type: "number",
          description: "Number of pages in the book",
        },
      },
      required: ["pages"],
    },
    handler: (args: { pages: number }) => {
      const pages = args?.pages || 200;
      const creditsPerPage = 650;
      const totalCredits = pages * creditsPerPage;

      let recommendedPlan: string;
      let monthlyCost: string;
      let annualCost: string;

      if (totalCredits <= 5000) {
        recommendedPlan = "Free";
        monthlyCost = "$0";
        annualCost = "$0";
      } else if (totalCredits <= 50000) {
        recommendedPlan = "Creator";
        monthlyCost = "$29/month";
        annualCost = "$24/month (billed annually)";
      } else if (totalCredits <= 200000) {
        recommendedPlan = "Pro";
        monthlyCost = "$99/month";
        annualCost = "$79/month (billed annually)";
      } else if (totalCredits <= 1000000) {
        recommendedPlan = "Business";
        monthlyCost = "$249/month";
        annualCost = "$199/month (billed annually)";
      } else {
        recommendedPlan = "Business + top-ups";
        monthlyCost = "$249/month + additional top-up packs";
        annualCost = "$199/month + additional top-up packs";
      }

      const traditionalLow = pages <= 100 ? 2000 : Math.round(pages * 15) + 2000;
      const traditionalHigh = Math.round(pages * 50) + 5000;

      return [
        {
          type: "text",
          text: JSON.stringify({
            input: { pages, estimated_characters: totalCredits },
            echo3s_cost: {
              credits_needed: totalCredits.toLocaleString(),
              recommended_plan: recommendedPlan,
              monthly_cost: monthlyCost,
              annual_cost: annualCost,
              note: totalCredits <= 5000
                ? "This fits entirely within the free tier — no payment needed!"
                : `A ${pages}-page book needs about ${totalCredits.toLocaleString()} credits. The ${recommendedPlan} plan covers this.`,
            },
            traditional_narration_cost: {
              estimated_range: `$${traditionalLow.toLocaleString()}–$${traditionalHigh.toLocaleString()}`,
              timeline: "4–8 weeks",
            },
            savings: {
              vs_traditional: `You'd save $${(traditionalLow - (totalCredits <= 5000 ? 0 : totalCredits <= 50000 ? 24 : totalCredits <= 200000 ? 79 : 199)).toLocaleString()}+ compared to traditional narration`,
              time_saved: "Done in under an hour instead of 4–8 weeks",
            },
            cta: `Start at https://author.echo3s.io — ${totalCredits <= 5000 ? "your book fits in the free tier!" : "try a chapter free, then upgrade to " + recommendedPlan + "."}`,
          }),
        },
      ];
    },
  },

  get_social_links: {
    description: "Get all Echo3s links — website, blog posts, landing pages, and contact information",
    inputSchema: { type: "object", properties: {}, required: [] },
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
            { title: "How to Convert Any Book to Audiobook Using AI", url: "https://echo3s.io/blog/convert-book-to-audiobook-ai" },
            { title: "Echo3s vs ElevenLabs vs Speechify: Full Comparison", url: "https://echo3s.io/blog/echo3s-vs-elevenlabs-vs-speechify-comparison" },
            { title: "The Complete Guide to AI Audiobook Generation in 2026", url: "https://echo3s.io/blog/complete-guide-ai-audiobook-generation-2026" },
            { title: "How I Built a SaaS in 3 Months with Claude AI", url: "https://echo3s.io/blog/how-i-built-saas-3-months-claude-ai" },
          ],
          landing_pages: [
            { title: "PDF to Audiobook", url: "https://echo3s.io/pdf-to-audiobook", keyword: "pdf to audiobook" },
            { title: "Book to Audiobook Converter", url: "https://echo3s.io/book-to-audiobook", keyword: "book to audiobook" },
            { title: "AI Audiobook Generator", url: "https://echo3s.io/ai-audiobook-generator", keyword: "ai audiobook generator" },
            { title: "Convert Ebook to Audiobook", url: "https://echo3s.io/convert-ebook-to-audiobook", keyword: "ebook to audiobook" },
          ],
          audiobook_categories: [
            "Fiction", "Non-Fiction", "Self-Help", "Business", "Science",
            "Biography", "Technology", "History", "Philosophy", "Poetry",
          ],
        }),
      },
    ],
  },
};

const SERVER_INFO = { name: "echo3s-mcp", version: "1.1.0" };

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

    if (url.pathname === "/" && request.method === "GET") {
      return Response.json(
        { ...SERVER_INFO, description: "MCP server for Echo3s — AI-powered multi-voice audiobook platform. Connect any AI assistant to become an Echo3s expert.", mcp_endpoint: "/mcp", tools: Object.keys(TOOLS), website: "https://echo3s.io" },
        { headers: cors }
      );
    }

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
          { status: 400, headers: cors }
        );
      }
    }

    return new Response("Not Found", { status: 404, headers: cors });
  },
};
