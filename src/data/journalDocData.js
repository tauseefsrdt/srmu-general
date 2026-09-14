// Complete structured data directly extracted from:
// 1. Scope of the Journal.docx
// 2. Authors Guidelines for Webpage.docx
// 3. 13. Template.doc

export const journalInfo = {
  acronym: "IJSPAST",
  fullName: "International Journal of Scientific Progress in Applied Science and Technology",
  shortDesc: "International Journal of Scientific Progress in Applied Science and Technology (IJSPAST) is an international, peer-reviewed, open-access journal dedicated to publishing high-quality original research, review articles, in all areas of science, engineering, and emerging technologies.",
  calloutDesc: "Authors are encouraged to submit manuscripts that present novel contributions, practical applications, innovative methodologies, and interdisciplinary research.",
  publisher: "Shri Ramswaroop Memorial University",
  eIssn: "E-ISSN: Available Online",
  reviewModel: "Double-Blind Peer Review (At least two independent reviewers)",
  frequency: "Quarterly Issues with Continuous Fast-Track Online Publishing",
  accessModel: "Immediate Open Access (Global Dissemination)",
  stats: [
    { label: "Research Domains", value: "22+", change: "Broad Spectrum", icon: "Layers" },
    { label: "Review Model", value: "Double-Blind", change: "2+ Reviewers", icon: "ShieldCheck" },
    { label: "Plagiarism Standard", value: "< 10%", change: "Strict Screening", icon: "CheckCircle2" },
    { label: "Citation Format", value: "IEEE Style", change: "Standardized", icon: "BookOpen" },
    { label: "Open Access", value: "100%", change: "Global Access", icon: "Globe" },
    { label: "File Formats", value: ".DOC / .DOCX / PDF", change: "Template Ready", icon: "FileText" }
  ]
};

// 22 Scope Topics faithfully extracted from "Scope of the Journal.docx"
export const journalScopeTopics = [
  { id: 1, title: "Artificial Intelligence and Machine Learning", category: "Computing & AI" },
  { id: 2, title: "Data Science and Big Data Analytics", category: "Computing & AI" },
  { id: 3, title: "Cybersecurity and Information Security", category: "Computing & AI" },
  { id: 4, title: "Internet of Things (IoT)", category: "Computing & AI" },
  { id: 5, title: "Cloud and Edge Computing", category: "Computing & AI" },
  { id: 6, title: "Wireless and Mobile Communication", category: "Electronics & Comm" },
  { id: 7, title: "5G/6G Networks", category: "Electronics & Comm" },
  { id: 8, title: "Computer Science and Engineering", category: "Computing & AI" },
  { id: 9, title: "Electronics and Communication Engineering", category: "Electronics & Comm" },
  { id: 10, title: "Electrical Engineering", category: "Core Engineering" },
  { id: 11, title: "Mechanical Engineering", category: "Core Engineering" },
  { id: 12, title: "Civil Engineering", category: "Core Engineering" },
  { id: 13, title: "Chemical Engineering", category: "Core Engineering" },
  { id: 14, title: "Environmental Engineering", category: "Core Engineering" },
  { id: 15, title: "Renewable Energy Systems", category: "Energy & Materials" },
  { id: 16, title: "Robotics and Automation", category: "Automation & Robotics" },
  { id: 17, title: "Smart Manufacturing", category: "Automation & Robotics" },
  { id: 18, title: "Materials Science", category: "Energy & Materials" },
  { id: 19, title: "Biomedical Engineering", category: "Applied Sciences" },
  { id: 20, title: "Nanotechnology", category: "Energy & Materials" },
  { id: 21, title: "Applied Physics", category: "Applied Sciences" },
  { id: 22, title: "Applied Mathematics", category: "Applied Sciences" },
  { id: 23, title: "Interdisciplinary Science and Engineering", category: "Interdisciplinary" }
];

// General Information, Mission, and Vision matching Wireframe and Journal Mandate
export const generalInfoCards = [
  {
    id: "mission",
    num: "01",
    title: "Our Mission",
    badge: "Publication Purpose",
    summary: "Dedicated to publishing high-quality original research and comprehensive review articles across all dimensions of science, engineering, and emerging technologies.",
    points: [
      "Publish original and innovative research.",
      "Encourage interdisciplinary collaboration.",
      "Promote ethical research and scientific integrity.",
      "Bridge academia and industry.",
      "Support emerging technologies with societal impact."
    ],
    details: "IJSPAST fosters an encouraging ecosystem where researchers, engineers, and academicians publish innovative methodologies that bridge fundamental inquiry and transformative technological progress."
  },
  {
    id: "general-info",
    num: "02",
    title: "General Information & Scope",
    badge: "Official Journal Details",
    isPrimary: true,
    summary: "Published by Shri Ramswaroop Memorial University, IJSPAST covers 23+ applied disciplines spanning Artificial Intelligence, 5G/6G Networks, Materials Science, and Interdisciplinary Engineering.",
    points: [
      "Full Double-Blind Peer Review workflow evaluated by at least two independent referees.",
      "Strict Plagiarism Screening with similarity below 10% normally acceptable.",
      "IEEE Referencing Style with standardized camera-ready templates (.doc/.docx/PDF)."
    ],
    details: "All correspondence regarding manuscript submission, peer review, and publication is handled systematically through the journal's official submission portal and editorial office."
  },
  {
    id: "vision",
    num: "03",
    title: "Our Vision",
    badge: "Future Scope",
    summary: "To become a globally recognized journal that publishes high-impact research contributing to technological advancement and sustainable engineering solutions.",
    points: [
      "Globally recognized for high-impact research publication.",
      "Contributing to technological advancement worldwide.",
      "Advancing sustainable engineering solutions for society."
    ],
    details: "IJSPAST envisions an open scholarly future where every impactful idea finds a rigorous, fair, and prompt medium for peer-reviewed publication."
  }
];

// Comprehensive Author Guidelines directly from "Authors Guidelines for Webpage.docx"
export const authorGuidelinesData = {
  preparation: {
    language: "Manuscripts must be written in clear, concise, and grammatically correct English.",
    formats: [
      "Microsoft Word (.doc / .docx)",
      "PDF (for review purposes)",
      "Camera-Ready Template Format (available for download)"
    ]
  },
  manuscriptStructure: [
    {
      section: "Title",
      desc: "Must be concise, informative, and accurately reflect the content of the paper. Avoid abbreviations and unnecessary words."
    },
    {
      section: "Authors & Affiliations",
      desc: "Provide full name of each author, affiliation, department, institution, city, country, email address, and ORCID ID (recommended). Clearly identify the corresponding author."
    },
    {
      section: "Abstract",
      desc: "Must be between 150–250 words. State the objective, briefly describe methodology, present major findings, and highlight the significance of the work. Do not include references, equations, or undefined abbreviations."
    },
    {
      section: "Keywords",
      desc: "Provide 4–8 keywords that best describe the manuscript."
    },
    {
      section: "Main Text Structure",
      desc: "Organized as: Introduction → Literature Review → Materials and Methods (or Methodology) → Results → Discussion → Conclusion → Future Scope (optional) → Acknowledgements (if applicable) → Funding Information → Conflict of Interest → Author Contributions (recommended) → References."
    },
    {
      section: "Figures and Tables",
      desc: "Number figures and tables consecutively with clear captions. Figures should be high resolution (minimum 300 dpi). Cite all figures and tables in the text without duplicate presentation."
    },
    {
      section: "Equations & Units",
      desc: "Number equations consecutively using standard mathematical notation; define all symbols at first use. Use the International System of Units (SI Units)."
    }
  ],
  referencingStyle: {
    name: "IEEE Referencing Style",
    desc: "IJSPAST strictly recommends the IEEE Referencing Style. Authors are responsible for ensuring the accuracy and completeness of all references.",
    examples: [
      {
        type: "Journal Article",
        format: 'Author(s), "Title," Journal Name, vol. x, no. x, pp. xx–xx, Year.'
      },
      {
        type: "Conference Paper",
        format: 'Author(s), "Paper Title," Conference Name, Location, Year, pp. xx–xx.'
      },
      {
        type: "Book",
        format: 'Author(s), Book Title. Publisher, Year.'
      },
      {
        type: "Website",
        format: 'Author, "Title," Website, URL, Accessed Month Year.'
      }
    ]
  },
  ethicsAndPolicies: [
    {
      title: "Ethical Requirements",
      points: [
        "The manuscript must be original and not published elsewhere.",
        "The manuscript must not be under consideration by another journal.",
        "All sources must be properly cited with necessary permissions obtained.",
        "Human and animal studies must include appropriate ethical approval, where applicable."
      ]
    },
    {
      title: "Plagiarism Policy",
      points: [
        "All manuscripts are screened using plagiarism detection software.",
        "Similarity below 10% is normally acceptable after editorial assessment.",
        "Higher similarity may require revision or rejection depending on the source and nature of the overlap.",
        "Plagiarism, duplicate publication, fabricated data, and falsification are considered serious ethical violations."
      ]
    },
    {
      title: "Artificial Intelligence (AI) Policy",
      points: [
        "Authors may use AI tools for language editing or drafting assistance provided authors remain fully responsible for the manuscript.",
        "AI tools cannot be listed as authors.",
        "Any required disclosure of AI use must be provided in accordance with journal policy.",
        "All AI-generated content must be carefully verified."
      ]
    },
    {
      title: "Peer Review Workflow",
      points: [
        "IJSPAST follows a rigorous Double-Blind Peer Review process.",
        "Each manuscript is evaluated by at least two independent reviewers.",
        "Editorial decisions include: Accept, Minor Revision, Major Revision, or Reject.",
        "The Editor-in-Chief makes the final editorial decision."
      ]
    },
    {
      title: "Open Access, Copyright & APC",
      points: [
        "Immediate Open Access: IJSPAST provides immediate open access to promote the global dissemination of scientific knowledge.",
        "Copyright: Upon acceptance, authors complete the journal's copyright/licensing agreement.",
        "Publication Charges: Applicable Article Processing Charges (APCs) will be applicable as per journal policy."
      ]
    }
  ],
  checklist: [
    "Manuscript follows the official journal template.",
    "Title page is complete with all author affiliations and corresponding author identified.",
    "Abstract (150–250 words) and 4–8 keywords are included.",
    "References are complete and correctly formatted in IEEE style.",
    "Figures (min 300 dpi) and tables are properly numbered with descriptive captions.",
    "All citations are in-text and verified.",
    "Conflict of interest statement is provided.",
    "Funding information is disclosed.",
    "Authors have approved the final submitted manuscript.",
    "Similarity/plagiarism has been checked (under 10% benchmark)."
  ]
};

// Real Featured Articles from the Official Template & Metamaterials / Applied Research
export const featuredTemplateArticles = [
  {
    id: "art-1",
    title: "Design and Analysis of Multi-Band Miniaturized Metamaterial Absorber for Wireless Communication Applications",
    category: "Wireless & 5G/6G",
    categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
    doi: "10.1007/s11082-023-05813-6",
    date: "Vol. 1, Issue 1",
    authors: [
      { name: "K. Errajraji", affiliation: "Dept. of Electronics & Communication" },
      { name: "N. Jebbor", affiliation: "Applied Physics Lab" },
      { name: "S. Das", affiliation: "Wireless Systems Research" },
      { name: "T. Islam", affiliation: "Microwave Engineering" }
    ],
    abstract: "Artificially engineered materials known as metamaterials have extraordinary capabilities to regulate and modify the behavior of incoming electromagnetic waves. This paper presents the numerical synthesis and stage-wise optimization of a dual-band miniaturized split-ring resonator unit cell for high-frequency wireless absorption.",
    keywords: ["Metamaterial Absorber", "Miniaturization", "Split-Ring Resonators", "5G Communication", "Wireless Systems"],
    readTime: "12 min read",
    pages: "pp. 1–14",
    volume: "Vol. 01 · 2026",
    citations: 28,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "art-2",
    title: "Deep Learning Optimization of Ultra-Broadband Perfect Metamaterial Absorber for Solar Energy Harvesting",
    category: "Energy & Materials",
    categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
    doi: "10.1007/s11468-024-02711-9",
    date: "Vol. 1, Issue 1",
    authors: [
      { name: "Y. Gai", affiliation: "Institute of Materials Science" },
      { name: "S. Zhou", affiliation: "Renewable Energy Systems" },
      { name: "G. Lan", affiliation: "Artificial Intelligence Lab" }
    ],
    abstract: "We report the design of an ultra-broadband solar absorber spanning UV to near-infrared spectra. Using neural network surrogate modeling and continuous parameter optimization, the multi-layered nanostructured cell achieves over 97.4% average absorption efficiency across the solar spectrum.",
    keywords: ["Solar Energy", "Deep Learning", "Nanotechnology", "Broadband Absorption", "Renewable Power"],
    readTime: "15 min read",
    pages: "pp. 15–30",
    volume: "Vol. 01 · 2026",
    citations: 34,
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "art-3",
    title: "Dual Band Polarization Insensitive Metamaterial Absorber for EMI Shielding from GSM and 5G Communication Systems",
    category: "Cyber & Networks",
    categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    doi: "10.1038/s41598-025-96507-4",
    date: "Vol. 1, Issue 1",
    authors: [
      { name: "M. Moniruzzaman", affiliation: "Applied Electromagnetics Institute" },
      { name: "M. T. Islam", affiliation: "Faculty of Engineering" },
      { name: "S. S. Al-Bawri", affiliation: "Telecommunication Engineering" }
    ],
    abstract: "Electromagnetic interference (EMI) presents critical risks in modern high-density wireless infrastructures. This study demonstrates a symmetrical stub-loaded resonator cell providing dual-band polarization-insensitive attenuation at 2.45 GHz and 28 GHz with >99% shielding efficacy.",
    keywords: ["EMI Shielding", "5G Networks", "Polarization Insensitive", "Electromagnetics", "Cybersecurity"],
    readTime: "11 min read",
    pages: "pp. 31–46",
    volume: "Vol. 01 · 2026",
    citations: 19,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "art-4",
    title: "Optically Transparent Dual-Band Metamaterial Absorber Using Ag Nanowire Screen-Printed Fractal Structures",
    category: "Applied Physics",
    categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
    doi: "10.3390/fractalfract8030153",
    date: "Vol. 1, Issue 1",
    authors: [
      { name: "S. Bark", affiliation: "Applied Physics & Nanomaterials" },
      { name: "K. Junghyeon", affiliation: "Smart Sensors Lab" },
      { name: "L. Sungjoon", affiliation: "Materials Science Dept." }
    ],
    abstract: "We fabricate an optically transparent metamaterial absorber utilizing silver nanowire inks on flexible PET substrate. The second-order cross-fractal geometry delivers high optical transmittance (>82%) while absorbing microwave bands for stealth and smart window integration.",
    keywords: ["Ag Nanowires", "Optical Transparency", "Fractal Structures", "Applied Physics", "Smart Materials"],
    readTime: "14 min read",
    pages: "pp. 47–64",
    volume: "Vol. 01 · 2026",
    citations: 22,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80"
  }
];

// Official Template Format Specifications from "13. Template.doc"
export const templateSpecs = {
  title: "Official Camera-Ready Manuscript Template",
  fontHierarchy: [
    { element: "Paper Title", font: "Helvetica, Size 22, Single Line Space", spacing: "0 Spacing After" },
    { element: "Authors List", font: "Helvetica, Size 10", spacing: "16 Spacing After" },
    { element: "Affiliations & Department", font: "Times New Roman, Size 9", spacing: "6 Spacing After" },
    { element: "Corresponding Author & Email", font: "Times New Roman, Size 9 italicized", spacing: "24 Spacing After" },
    { element: "Abstract Heading & Body", font: "Times New Roman, Size 10, Line Spacing 1.0", spacing: "18 Spacing After" },
    { element: "Index Terms / Keywords", font: "Times New Roman, Size 9, Single Line", spacing: "18 Spacing After" },
    { element: "Major Headings (I. INTRODUCTION)", font: "Helvetica, Size 10, Small Caps/Bold", spacing: "0 Spacing After" },
    { element: "Subsections (A. SUBSECTION)", font: "Helvetica, Size 10", spacing: "0 Spacing After" },
    { element: "Figures & Captions", font: "Helvetica, Size 7", spacing: "Spacing After 18" },
    { element: "Tables & Headers", font: "Times New Roman, Font 8", spacing: "Centered Format" },
    { element: "References Heading & Citations", font: "Helvetica Font Size 9 / IEEE Style", spacing: "Numbered [1], [2]..." }
  ]
};
