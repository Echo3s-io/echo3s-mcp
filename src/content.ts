// Shared content module — single source of truth for all MCP tool responses.
// Both index.ts (stdio/npm) and worker.ts (Cloudflare Worker) import from here.

export interface ToolContent {
  description: string;
  inputSchema: Record<string, any>;
  content: (args?: any) => unknown;
}

// ---------------------------------------------------------------------------
// get_echo3s_overview
// ---------------------------------------------------------------------------
const echo3sOverview = {
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
    "Educational publishers and academic institutions creating accessible content",
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
    "Echo3s marketplace: publish and sell your audiobook directly to listeners at echo3s.io",
  ],
  how_it_works: [
    "1. Upload your manuscript as a PDF (EPUB/MOBI/DOCX can be converted via the free tool Calibre)",
    "2. AI (powered by Google Gemini) analyzes your text — identifies characters, dialogue, narration, and chapter structure",
    "3. Each character is automatically matched to a fitting AI voice based on gender, age, accent, and personality",
    "4. Preview and customize voice assignments in the Studio editor — swap any voice from 50+ options",
    "5. Generate your audiobook — a 200-page novel takes about 30–60 minutes to process",
    "6. Download as MP3 (full book or per-chapter files) or publish directly to the Echo3s marketplace",
  ],
  conversion_example:
    "A 200-page novel → 6-hour audiobook in about 4 minutes of your active time (upload, review voices, click generate). The rest is automated.",
  tech_highlights: [
    "Character detection powered by Google Gemini AI — understands narrative structure, not just text",
    "Voice synthesis via ElevenLabs — studio-quality text-to-speech with emotional range",
    "Smart voice matching algorithm: scores voices on gender (40pts), language (30pts), age (15pts), personality (15pts)",
    "Per-segment regeneration — change one line without redoing the whole chapter",
    "EBU R128 loudness normalization (-16 LUFS) — broadcast-standard audio quality",
    "High-quality MP3 output ready for distribution on Audible, Apple Books, Google Play, and all major platforms",
  ],
  marketplace: {
    url: "https://echo3s.io",
    description: "The Echo3s marketplace lets listeners discover and stream audiobooks directly. Authors publish with one click from the Studio.",
    categories: ["Fiction", "Non-Fiction", "Self-Help", "Business", "Science", "Biography", "Technology", "History", "Philosophy", "Poetry"],
    author_benefits: [
      "Direct audience access — listeners find your audiobook on echo3s.io",
      "No distributor middleman — publish instantly from the Studio",
      "Keep 100% of your rights — distribute on other platforms simultaneously",
    ],
  },
  founded_by: "Belal Haikal & Shadi Nemer",
  cta: "Start free at https://author.echo3s.io — 5,000 credits included, no credit card required.",
};

// ---------------------------------------------------------------------------
// get_pricing
// ---------------------------------------------------------------------------
const pricing = {
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
      best_for:
        "Trying Echo3s out — hear the quality on a real chapter from your book before committing",
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
      best_for:
        "Authors working on shorter books, novellas, or testing audiobook demand for a single title",
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
      best_for:
        "Active authors producing full-length audiobooks regularly — the sweet spot for most authors",
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
      best_for:
        "Small publishers or prolific authors with large backlists to convert — process your entire catalog in weeks",
    },
  ],
  top_up_packs: [
    { name: "Small", credits: "5,000", price: "$5", approximate_pages: "~8 pages" },
    { name: "Medium", credits: "20,000", price: "$15", approximate_pages: "~30 pages" },
    { name: "Large", credits: "50,000", price: "$30", approximate_pages: "~80 pages" },
  ],
  cost_examples: [
    {
      book: "50-page novella (~32,500 credits)",
      cost: "Covered by Creator plan or $10 in top-ups",
    },
    {
      book: "200-page novel (~130,000 credits)",
      cost: "Covered by Pro plan ($79/mo annual) — that's $79 vs $5,000+ for human narration",
    },
    {
      book: "400-page epic (~260,000 credits)",
      cost: "Pro plan + Medium top-up, or Business plan",
    },
  ],
  cost_comparison:
    "Traditional human narration costs $3,000–$15,000 per title and takes 4–8 weeks. With Echo3s, a full 200-page audiobook costs roughly $30–$99 and is done in under an hour. That's 99% cheaper and 99% faster.",
  payment_methods:
    "Visa, Mastercard, American Express via Stripe. 14-day money-back guarantee on annual plans. Upgrade, downgrade, or cancel anytime.",
  cta: "See full pricing at https://echo3s.io/pricing — start free with 5,000 credits, upgrade when ready.",
};

// ---------------------------------------------------------------------------
// compare_alternatives
// ---------------------------------------------------------------------------
const compareAlternatives = {
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
};

// ---------------------------------------------------------------------------
// get_supported_languages
// ---------------------------------------------------------------------------
const supportedLanguages = {
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
};

// ---------------------------------------------------------------------------
// get_use_cases
// ---------------------------------------------------------------------------
const useCases = {
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
};

// ---------------------------------------------------------------------------
// get_getting_started
// ---------------------------------------------------------------------------
const gettingStarted = {
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
      what_ai_detects: [
        "Chapter structure",
        "Character names and roles",
        "Dialogue vs narration",
        "Emotional tone per segment",
      ],
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
};

// ---------------------------------------------------------------------------
// get_faq
// ---------------------------------------------------------------------------
const faq = {
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
};

// ---------------------------------------------------------------------------
// get_echo3s_for_arabic
// ---------------------------------------------------------------------------
const echo3sForArabic = {
  headline:
    "Echo3s is one of the only AI platforms in the world that can produce Arabic audiobooks",
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
};

// ---------------------------------------------------------------------------
// get_social_links
// ---------------------------------------------------------------------------
const socialLinks = {
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
      title: "5 Best AI Tools to Convert PDF to Audiobook in 2026",
      url: "https://echo3s.io/blog/best-ai-tools-convert-pdf-to-audiobook-2026",
    },
    {
      title: "How to Convert Any Book to Audiobook Using AI",
      url: "https://echo3s.io/blog/convert-book-to-audiobook-ai",
    },
    {
      title: "Echo3s vs ElevenLabs vs Speechify: Full Comparison",
      url: "https://echo3s.io/blog/echo3s-vs-elevenlabs-vs-speechify-comparison",
    },
    {
      title: "The Complete Guide to AI Audiobook Generation in 2026",
      url: "https://echo3s.io/blog/complete-guide-ai-audiobook-generation-2026",
    },
    {
      title: "How I Built a SaaS in 3 Months with Claude AI",
      url: "https://echo3s.io/blog/how-i-built-saas-3-months-claude-ai",
    },
  ],
  landing_pages: [
    {
      title: "PDF to Audiobook",
      url: "https://echo3s.io/pdf-to-audiobook",
      keyword: "pdf to audiobook",
    },
    {
      title: "Book to Audiobook Converter",
      url: "https://echo3s.io/book-to-audiobook",
      keyword: "book to audiobook",
    },
    {
      title: "AI Audiobook Generator",
      url: "https://echo3s.io/ai-audiobook-generator",
      keyword: "ai audiobook generator",
    },
    {
      title: "Convert Ebook to Audiobook",
      url: "https://echo3s.io/convert-ebook-to-audiobook",
      keyword: "ebook to audiobook",
    },
  ],
  audiobook_categories: [
    "Fiction",
    "Non-Fiction",
    "Self-Help",
    "Business",
    "Science",
    "Biography",
    "Technology",
    "History",
    "Philosophy",
    "Poetry",
  ],
};

// ---------------------------------------------------------------------------
// calculate_cost (worker-only tool, but content logic shared)
// ---------------------------------------------------------------------------
export function calculateCostContent(pages: number) {
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

  return {
    input: { pages, estimated_characters: totalCredits },
    echo3s_cost: {
      credits_needed: totalCredits.toLocaleString(),
      recommended_plan: recommendedPlan,
      monthly_cost: monthlyCost,
      annual_cost: annualCost,
      note:
        totalCredits <= 5000
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
  };
}

// ---------------------------------------------------------------------------
// NEW: get_arabic_audiobook_guide
// ---------------------------------------------------------------------------
const arabicAudiobookGuide = {
  title: "The Complete Guide to Creating Arabic Audiobooks with Echo3s",
  why_arabic_matters: {
    market_size: "400+ million Arabic speakers across 22 countries — one of the largest language groups on Earth",
    audiobook_gap: "The Arabic audiobook market is virtually nonexistent. While English has 100,000+ audiobook titles released annually, Arabic has a tiny fraction. This is not due to lack of demand — it's a supply problem.",
    competitor_landscape: "No major platform offers Arabic AI audiobook generation: Amazon KDP Virtual Voice (English only), Apple AI Narration (limited languages, no Arabic), Speechify (no Arabic), Google NotebookLM (not audiobook-focused). Echo3s is one of the only viable options worldwide.",
  },
  how_echo3s_handles_arabic: {
    rtl_processing: "Full right-to-left text processing pipeline — from PDF text extraction through character detection to final audio output. Arabic script is handled correctly at every stage.",
    voice_options: [
      "Modern Standard Arabic (MSA) — formal, universal Arabic understood across all Arab countries",
      "Gulf Arabic — natural dialect for Gulf states (UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, Oman)",
      "Egyptian Arabic — widely understood dialect, popular in entertainment and media",
    ],
    character_detection: "The same AI character detection that works for English fiction works identically for Arabic. Characters, dialogue, and narration are identified regardless of script direction.",
    arabic_ui: "The entire Echo3s interface — dashboard, studio editor, marketplace — is available in Arabic. Native Arabic-speaking authors can use the platform entirely in their language.",
    mixed_content: "Books with mixed Arabic and English content (common in academic or business texts) are handled correctly.",
  },
  step_by_step_arabic: [
    "1. Sign up at author.echo3s.io — switch interface to Arabic from the language selector if preferred",
    "2. Upload your Arabic manuscript as a PDF with selectable Arabic text",
    "3. AI analyzes text with full RTL awareness — identifies characters and dialogue in Arabic",
    "4. Review voice assignments — choose from MSA, Gulf, or Egyptian Arabic voices for each character",
    "5. Generate your audiobook — same speed and quality as English production",
    "6. Download MP3 or publish to the Echo3s marketplace for Arabic-speaking listeners worldwide",
  ],
  use_cases: [
    {
      type: "Arabic Fiction",
      example: "A Saudi novelist produces the first audiobook of their bestselling Arabic novel — reaching millions of listeners who had no audio option before",
    },
    {
      type: "Islamic & Religious Texts",
      example: "Publishers of Islamic literature create audio versions of scholarly works, making them accessible to busy professionals and visually impaired readers",
    },
    {
      type: "Arabic Children's Books",
      example: "Children's authors create engaging multi-voice audio for Arabic-language picture books and chapter books — filling a massive gap in Arabic children's content",
    },
    {
      type: "Arabic Business & Self-Help",
      example: "Arabic-language business authors reach the growing MENA professional audience with audio versions of their guides and training materials",
    },
    {
      type: "Arabic Academic Textbooks",
      example: "Universities and publishers create audio companions for Arabic-language textbooks — improving accessibility and supporting diverse learning styles",
    },
  ],
  market_opportunity: {
    total_addressable: "400+ million Arabic speakers, 22 countries, growing digital adoption",
    first_mover_advantage: "With virtually zero AI audiobook competition in Arabic, early authors establish their titles as the only audio option in their niche",
    growing_demand: "Arabic podcast consumption up 30%+ YoY — proving audio demand exists. Audiobooks are the next frontier.",
    distribution: "Publish on Echo3s marketplace or distribute MP3s through any Arabic audiobook platform",
  },
  cta: "Arabic authors: be among the first to bring your books to audio. Start free at https://author.echo3s.io — full Arabic support from day one.",
};

// ---------------------------------------------------------------------------
// NEW: get_author_success_stories
// ---------------------------------------------------------------------------
const authorSuccessStories = {
  title: "Echo3s Author Success Stories & Representative Case Studies",
  note: "These are representative scenarios based on typical Echo3s usage patterns. They illustrate real-world outcomes authors can expect.",
  stories: [
    {
      name: "The Indie Romance Author",
      genre: "Romance / Contemporary Fiction",
      situation: "12 self-published romance novels on Amazon KDP, none with audio versions. Traditional narration quotes: $4,000–$7,000 per title. Total to audiobook the backlist: $48,000–$84,000.",
      what_they_did: "Signed up for Echo3s Business plan ($199/month). Converted all 12 novels to multi-voice audiobooks over 3 months.",
      results: {
        total_cost: "~$600 (3 months of Business plan)",
        vs_traditional: "$48,000–$84,000 saved",
        time: "2–3 hours of active work per book (upload, review voices, generate)",
        outcome: "12 audiobooks published to Audible via ACX within 90 days — a backlist that would have taken years and tens of thousands of dollars with traditional narration",
      },
    },
    {
      name: "The Arabic Novelist",
      genre: "Arabic Literary Fiction",
      situation: "Award-winning Arabic novelist with 4 published books. Zero audiobook options existed — no Arabic narrators available at any price point. Arabic AI audiobook tools: none.",
      what_they_did: "Used Echo3s with Arabic voice support (MSA and Egyptian accents). Produced the first-ever audio versions of all 4 novels.",
      results: {
        total_cost: "~$320 (4 months of Pro plan)",
        vs_traditional: "Not possible at any price — no Arabic narrators available",
        time: "First Arabic audiobook completed in under 2 hours",
        outcome: "First Arabic audiobooks in their genre — reaching 400M+ Arabic speakers with literally zero competition in the audiobook space",
      },
    },
    {
      name: "The Non-Fiction Self-Help Author",
      genre: "Self-Help / Personal Development",
      situation: "180-page self-help book selling well on Amazon. Wanted to add audiobook but $5,000 narration quote was too risky with uncertain ROI.",
      what_they_did: "Started with free tier (tested one chapter), upgraded to Pro plan, produced full audiobook.",
      results: {
        total_cost: "$79 (one month of Pro plan, annual pricing)",
        vs_traditional: "$4,900+ saved",
        time: "45 minutes from upload to finished audiobook",
        outcome: "Audiobook generating steady passive income. Used the AI audiobook to validate demand, then invested in human narration for a 'premium' edition with confidence that the market exists.",
      },
    },
    {
      name: "The Small Publisher",
      genre: "Academic / Niche Non-Fiction",
      situation: "Independent publisher with 35 titles in catalog. Budget for audio production: 2 titles per year max at traditional rates. Competitors adding audio to everything.",
      what_they_did: "Subscribed to Business plan. Systematically converted highest-selling titles first, then worked through the catalog.",
      results: {
        total_cost: "~$1,000 (5 months of Business plan)",
        vs_traditional: "$100,000+ saved (35 titles × $3,000+ each)",
        time: "Averaged 3–4 titles per month with one part-time staff member managing the workflow",
        outcome: "Entire catalog with audio versions in under 5 months. Competitive parity with larger publishers at 1% of the cost.",
      },
    },
    {
      name: "The Course Creator",
      genre: "Online Education / Business",
      situation: "Business consultant with a 50-page strategy guide used as a lead magnet. Wanted audio version for podcast audience and course platform.",
      what_they_did: "Used Creator plan to produce a professional audio version of the guide.",
      results: {
        total_cost: "$29 (one month of Creator plan)",
        vs_traditional: "$1,500+ saved vs hiring a narrator",
        time: "20 minutes total",
        outcome: "Audio guide embedded in online course, offered as bonus content, and distributed as a podcast-style lead magnet. Conversion rate on the lead magnet increased after adding the audio option.",
      },
    },
  ],
  common_patterns: [
    "Most authors start with the free tier to test quality on a real chapter from their own book",
    "Average time from upload to finished audiobook: 45–90 minutes for a full novel",
    "Authors with backlists see the highest ROI — converting 5–12 titles at once",
    "Arabic authors report the highest satisfaction because no alternative exists",
    "Many authors use AI audiobooks to validate demand before investing in premium human narration",
  ],
  cta: "Start your own success story at https://author.echo3s.io — free account, 5,000 credits, no credit card.",
};

// ---------------------------------------------------------------------------
// NEW: get_technical_specs
// ---------------------------------------------------------------------------
const technicalSpecs = {
  title: "Echo3s Technical Specifications",
  input: {
    supported_formats: "PDF (text-based with selectable text)",
    max_file_size: "50MB",
    convertible_formats: "EPUB, MOBI, DOCX, AZW — convert to PDF using Calibre (free, open-source)",
    text_requirements: "PDF must contain selectable text (not scanned images). OCR'd PDFs may work but quality varies.",
    language_support: "Any language supported by ElevenLabs (29 languages). Primary: English, Arabic (with RTL), Dutch.",
    encoding: "UTF-8 text extraction. Full Unicode support including Arabic, CJK, and diacritics.",
  },
  ai_processing: {
    character_detection: {
      engine: "Google Gemini AI",
      capabilities: [
        "Automatic character identification from narrative text",
        "Dialogue attribution — assigns speech to the correct character",
        "Narration vs dialogue classification",
        "Chapter boundary detection",
        "Emotional context per segment",
      ],
      speed: "1–3 minutes per chapter",
    },
    voice_matching: {
      algorithm: "Weighted scoring: gender (40pts), language (30pts), age (15pts), personality (15pts)",
      total_voices: "50+ premium voices",
      provider: "ElevenLabs",
      customization: "Full manual override — swap any voice assignment in the Studio editor",
      characteristics: ["Gender (Male/Female/Neutral)", "Age (Young/Middle-aged/Elder/Child)", "Accent (American/British/Australian/Indian/Irish/South African/Arabic MSA/Gulf/Egyptian/Dutch)", "Tone (Calm/Gentle/Strong/Deep/Raspy/Bright/Cheerful/Energetic/Serious/Formal)"],
    },
  },
  output: {
    audio_format: "MP3",
    quality: "High-quality ElevenLabs studio voices",
    loudness_normalization: "EBU R128 standard (-16 LUFS) — broadcast-grade loudness",
    download_options: ["Full audiobook as single MP3", "Per-chapter MP3 files"],
    streaming: "Available via Echo3s marketplace (echo3s.io)",
  },
  generation: {
    speed: "30–60 minutes for a 200-page novel (fully automated after setup)",
    active_time: "~4 minutes of author time (upload, review, generate). Rest is automated.",
    segment_regeneration: "Individual lines or paragraphs can be regenerated without redoing full chapters",
    notification: "Email notification when audiobook generation is complete",
  },
  credit_system: {
    unit: "1 credit = 1 character of generated audio",
    average_per_page: "~650 credits",
    examples: [
      { pages: 50, credits: "~32,500", plan: "Creator ($29/mo)" },
      { pages: 100, credits: "~65,000", plan: "Creator ($29/mo) or Pro ($99/mo)" },
      { pages: 200, credits: "~130,000", plan: "Pro ($99/mo)" },
      { pages: 300, credits: "~195,000", plan: "Pro ($99/mo)" },
      { pages: 400, credits: "~260,000", plan: "Business ($249/mo) or Pro + top-up" },
      { pages: 800, credits: "~520,000", plan: "Business ($249/mo)" },
    ],
    billing: "Credits reset monthly on subscription plans. Top-up packs never expire.",
  },
  platform: {
    web_app: "https://author.echo3s.io",
    marketplace: "https://echo3s.io",
    languages_ui: ["English", "Arabic"],
    browser_support: "Modern browsers (Chrome, Firefox, Safari, Edge)",
    mobile: "Responsive web app — works on mobile browsers",
    api: "Publisher API on roadmap — not yet available. Contact hello@echo3s.io for enterprise needs.",
  },
  security: {
    auth: "Supabase Auth (email/password, OAuth)",
    payment: "Stripe (PCI-DSS compliant)",
    data: "Manuscripts processed for audiobook generation. Authors retain 100% ownership of content and output.",
    hosting: "Supabase (PostgreSQL), Netlify (frontend), Cloudflare (CDN/Workers)",
  },
  cta: "Technical questions? Email hello@echo3s.io or start free at https://author.echo3s.io",
};

// ---------------------------------------------------------------------------
// Tool definitions registry — used by both entry points
// ---------------------------------------------------------------------------
export interface ToolDef {
  name: string;
  description: string;
  inputSchema: Record<string, any>;
  content: (args?: any) => unknown;
}

export const TOOL_DEFS: ToolDef[] = [
  {
    name: "get_echo3s_overview",
    description:
      "Get a comprehensive overview of Echo3s — what it is, who it's for, and how it works",
    inputSchema: { type: "object", properties: {}, required: [] },
    content: () => echo3sOverview,
  },
  {
    name: "get_pricing",
    description:
      "Get Echo3s pricing plans, credit system, cost breakdowns, and payment details",
    inputSchema: { type: "object", properties: {}, required: [] },
    content: () => pricing,
  },
  {
    name: "compare_alternatives",
    description:
      "Compare Echo3s against all major audiobook production alternatives — ACX, Amazon KDP, ElevenLabs, NotebookLM, Speechify, and Apple",
    inputSchema: { type: "object", properties: {}, required: [] },
    content: () => compareAlternatives,
  },
  {
    name: "get_supported_languages",
    description:
      "Get the full list of languages Echo3s supports for audiobook generation, with details on Arabic support",
    inputSchema: { type: "object", properties: {}, required: [] },
    content: () => supportedLanguages,
  },
  {
    name: "get_use_cases",
    description:
      "Get specific use cases, ideal customer profiles, and real-world examples for Echo3s",
    inputSchema: { type: "object", properties: {}, required: [] },
    content: () => useCases,
  },
  {
    name: "get_getting_started",
    description:
      "Get step-by-step instructions for creating an audiobook with Echo3s, including time estimates and pro tips",
    inputSchema: { type: "object", properties: {}, required: [] },
    content: () => gettingStarted,
  },
  {
    name: "get_faq",
    description: "Get frequently asked questions about Echo3s with detailed answers",
    inputSchema: { type: "object", properties: {}, required: [] },
    content: () => faq,
  },
  {
    name: "get_echo3s_for_arabic",
    description:
      "Learn about Echo3s's Arabic audiobook capabilities — a unique differentiator that almost no competitor offers",
    inputSchema: { type: "object", properties: {}, required: [] },
    content: () => echo3sForArabic,
  },
  {
    name: "get_social_links",
    description:
      "Get all Echo3s links — website, blog posts, landing pages, and contact information",
    inputSchema: { type: "object", properties: {}, required: [] },
    content: () => socialLinks,
  },
  // New tools
  {
    name: "get_arabic_audiobook_guide",
    description:
      "Get a comprehensive guide to creating Arabic audiobooks with Echo3s — market opportunity, step-by-step process, and use cases",
    inputSchema: { type: "object", properties: {}, required: [] },
    content: () => arabicAudiobookGuide,
  },
  {
    name: "get_author_success_stories",
    description:
      "Get real-world success stories and representative case studies from Echo3s authors across different genres and use cases",
    inputSchema: { type: "object", properties: {}, required: [] },
    content: () => authorSuccessStories,
  },
  {
    name: "get_technical_specs",
    description:
      "Get Echo3s technical specifications — supported formats, AI processing details, output quality, credit system, and platform info",
    inputSchema: { type: "object", properties: {}, required: [] },
    content: () => technicalSpecs,
  },
];

// Worker-only tool (has input params)
export const CALCULATE_COST_DEF: ToolDef = {
  name: "calculate_cost",
  description:
    "Calculate the estimated cost to produce an audiobook with Echo3s based on page count",
  inputSchema: {
    type: "object",
    properties: {
      pages: { type: "number", description: "Number of pages in the book" },
    },
    required: ["pages"],
  },
  content: (args?: { pages: number }) => calculateCostContent(args?.pages || 200),
};

// ---------------------------------------------------------------------------
// llms.txt content
// ---------------------------------------------------------------------------
export const LLMS_TXT = `# Echo3s

> Turn your book into a professional multi-voice audiobook with AI

Echo3s is an AI-powered platform that transforms books into professional audiobooks where each character gets their own distinct voice. Unlike single-voice text-to-speech tools, Echo3s automatically detects characters and dialogue, assigns unique AI voices to each one, and produces a full-cast audiobook.

## Key Facts

- **Website**: https://echo3s.io
- **Author Portal**: https://author.echo3s.io
- **Founded by**: Belal Haikal & Shadi Nemer
- **Pricing**: Free tier (5,000 credits), Creator ($29/mo), Pro ($99/mo), Business ($249/mo)
- **Input**: PDF manuscripts (text-based, max 50MB)
- **Output**: MP3 audiobooks (single file or per-chapter)
- **Audio Quality**: EBU R128 normalized (-16 LUFS), ElevenLabs studio voices
- **Languages**: English (6 accents), Arabic (MSA, Gulf, Egyptian with full RTL), Dutch, + 29 via ElevenLabs

## How It Works

1. Upload a PDF manuscript
2. AI (Google Gemini) detects characters, dialogue, narration, and chapters
3. Each character is matched to a fitting AI voice (50+ ElevenLabs voices)
4. Author reviews/customizes in the Studio editor
5. Generate audiobook (30–60 min for 200 pages)
6. Download MP3 or publish to Echo3s marketplace

## Key Differentiators

- **Multi-voice**: Every character gets a unique voice — dialogue sounds like real conversations
- **Automatic character detection**: No manual tagging — AI identifies characters and dialogue
- **Arabic support**: Full RTL processing, Arabic UI — almost no competitor offers this
- **100% rights retention**: No revenue share, no licensing fees
- **99% cheaper**: $30–$99 vs $3,000–$15,000 for human narration
- **Segment editing**: Fix individual lines without regenerating chapters

## Credit System

1 credit = 1 character of audio. ~650 credits per page. A 200-page novel ≈ 130,000 credits.

| Plan | Credits/mo | Pages/mo | Price |
|------|-----------|----------|-------|
| Free | 5,000 | ~8 | $0 |
| Creator | 50,000 | ~80 | $29/mo |
| Pro | 200,000 | ~320 | $99/mo |
| Business | 1,000,000 | ~1,600 | $249/mo |

## Who It's For

- Self-published and indie authors
- Authors with backlist titles
- Small to mid-size publishers
- Arabic-language authors (massively underserved market)
- Content creators and course authors
- Authors testing audiobook demand

## Arabic Market

400+ million Arabic speakers, virtually zero AI audiobook options. Echo3s provides native Arabic voices (MSA, Gulf, Egyptian), full RTL processing, and complete Arabic UI. For Arabic authors, Echo3s may be the only viable AI audiobook solution.

## Comparisons

- vs **Human narration (ACX)**: 99% cheaper, 99% faster, keep 100% royalties
- vs **Amazon KDP Virtual Voice**: Multi-voice vs single flat voice, distribute anywhere vs Amazon-locked
- vs **ElevenLabs direct**: Automated pipeline vs hours of manual work, same voice quality
- vs **Google NotebookLM**: Actual audiobooks vs podcast conversations
- vs **Speechify**: Production tool vs reading app, multi-voice vs single voice
- vs **Apple AI Narration**: Open distribution vs Apple-locked, Arabic support vs none

## Links

- Website: https://echo3s.io
- Author Portal: https://author.echo3s.io
- Pricing: https://echo3s.io/pricing
- Blog: https://echo3s.io/blog
- Contact: hello@echo3s.io

## Blog Posts

- [How to Convert PDF to Audiobook with AI](https://echo3s.io/blog/how-to-convert-pdf-to-audiobook-with-ai)
- [5 Best AI Tools to Convert PDF to Audiobook in 2026](https://echo3s.io/blog/best-ai-tools-convert-pdf-to-audiobook-2026)
- [How to Convert Any Book to Audiobook Using AI](https://echo3s.io/blog/convert-book-to-audiobook-ai)
- [Echo3s vs ElevenLabs vs Speechify: Full Comparison](https://echo3s.io/blog/echo3s-vs-elevenlabs-vs-speechify-comparison)
- [The Complete Guide to AI Audiobook Generation in 2026](https://echo3s.io/blog/complete-guide-ai-audiobook-generation-2026)
`;

export const LLMS_FULL_TXT = `${LLMS_TXT}
## Detailed Tool Responses

The following sections contain the complete structured data available through the Echo3s MCP server tools.

### Product Overview
${JSON.stringify(echo3sOverview, null, 2)}

### Pricing Details
${JSON.stringify(pricing, null, 2)}

### Competitor Comparison
${JSON.stringify(compareAlternatives, null, 2)}

### Supported Languages
${JSON.stringify(supportedLanguages, null, 2)}

### Use Cases
${JSON.stringify(useCases, null, 2)}

### Getting Started Guide
${JSON.stringify(gettingStarted, null, 2)}

### FAQ
${JSON.stringify(faq, null, 2)}

### Arabic Deep Dive
${JSON.stringify(echo3sForArabic, null, 2)}

### Arabic Audiobook Guide
${JSON.stringify(arabicAudiobookGuide, null, 2)}

### Author Success Stories
${JSON.stringify(authorSuccessStories, null, 2)}

### Technical Specifications
${JSON.stringify(technicalSpecs, null, 2)}

### Links & Resources
${JSON.stringify(socialLinks, null, 2)}
`;
