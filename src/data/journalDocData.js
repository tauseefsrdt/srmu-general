// Complete structured data directly extracted from:
// 1. Scope of the Journal.docx
// 2. Authors Guidelines for Webpage.docx
// 3. 13. Template.doc

import research from "../assets/research-paper/IJSPAST150926.pdf";

// Local Images for all 23 Interdisciplinary Submission Areas (Named after each area)
import area1Img from "../assets/images/submission-areas/artificial-intelligence-and-machine-learning.jpg";
import area2Img from "../assets/images/submission-areas/data-science-and-big-data-analytics.jpg";
import area3Img from "../assets/images/submission-areas/cybersecurity-and-information-security.jpg";
import area4Img from "../assets/images/submission-areas/internet-of-things-iot.jpg";
import area5Img from "../assets/images/submission-areas/cloud-and-edge-computing.jpg";
import area6Img from "../assets/images/submission-areas/wireless-and-mobile-communication.jpg";
import area7Img from "../assets/images/submission-areas/5g-6g-networks.jpg";
import area8Img from "../assets/images/submission-areas/computer-science-and-engineering.jpg";
import area9Img from "../assets/images/submission-areas/electronics-and-communication-engineering.jpg";
import area10Img from "../assets/images/submission-areas/electrical-engineering.jpg";
import area11Img from "../assets/images/submission-areas/mechanical-engineering.jpg";
import area12Img from "../assets/images/submission-areas/civil-engineering.jpg";
import area13Img from "../assets/images/submission-areas/chemical-engineering.jpg";
import area14Img from "../assets/images/submission-areas/environmental-engineering.jpg";
import area15Img from "../assets/images/submission-areas/renewable-energy-systems.jpg";
import area16Img from "../assets/images/submission-areas/robotics-and-automation.jpg";
import area17Img from "../assets/images/submission-areas/smart-manufacturing.jpg";
import area18Img from "../assets/images/submission-areas/materials-science.jpg";
import area19Img from "../assets/images/submission-areas/biomedical-engineering.jpg";
import area20Img from "../assets/images/submission-areas/nanotechnology.jpg";
import area21Img from "../assets/images/submission-areas/applied-physics.jpg";
import area22Img from "../assets/images/submission-areas/applied-mathematics.jpg";
import area23Img from "../assets/images/submission-areas/interdisciplinary-science-and-engineering.jpg";

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

// 23 Scope Topics faithfully extracted from "Scope of the Journal.docx"
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

// Complete 23 Interdisciplinary Submission Areas with individual high-resolution research imagery
export const submissionAreaSlides = [
  {
    id: 1,
    category: "Computing & AI",
    title: "Artificial Intelligence and Machine Learning",
    subtitle: "Deep learning models, natural language processing, computer vision, and neural network optimization.",
    tagline: "Cognitive Computing & Intelligent Algorithms",
    image: area1Img,
    badge: "AI & Neural Systems",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
    stats: "Fast-Track · Double-Blind",
    link: "/submit"
  },
  {
    id: 2,
    category: "Computing & AI",
    title: "Data Science and Big Data Analytics",
    subtitle: "Predictive analytics, large-scale data mining, distributed architectures, and statistical intelligence.",
    tagline: "Big Data Processing & Predictive Intelligence",
    image: area2Img,
    badge: "Big Data & Mining",
    badgeColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
    stats: "IEEE Format · Open Access",
    link: "/submit"
  },
  {
    id: 3,
    category: "Computing & AI",
    title: "Cybersecurity and Information Security",
    subtitle: "Network defense, zero-trust protocols, cryptography, vulnerability mitigation, and cyber forensics.",
    tagline: "Threat Defense & Cryptographic Integrity",
    image: area3Img,
    badge: "Information Security",
    badgeColor: "bg-rose-100 text-rose-900 border-rose-300",
    stats: "Strict Peer Review · DOI Assigned",
    link: "/submit"
  },
  {
    id: 4,
    category: "Computing & AI",
    title: "Internet of Things (IoT)",
    subtitle: "Smart sensors, embedded ecosystems, industrial IoT (IIoT), and edge actuation frameworks.",
    tagline: "Ubiquitous Sensing & Connected Systems",
    image: area4Img,
    badge: "IoT & Smart Systems",
    badgeColor: "bg-cyan-100 text-cyan-900 border-cyan-300",
    stats: "Open Access · CC BY 4.0",
    link: "/submit"
  },
  {
    id: 5,
    category: "Computing & AI",
    title: "Cloud and Edge Computing",
    subtitle: "Distributed cloud infrastructure, serverless compute, microservices, and edge intelligence.",
    tagline: "Decentralized Compute & Serverless Scale",
    image: area5Img,
    badge: "Cloud & Edge",
    badgeColor: "bg-sky-100 text-sky-900 border-sky-300",
    stats: "Fast-Track · Plagiarism < 10%",
    link: "/submit"
  },
  {
    id: 6,
    category: "Electronics & Comm",
    title: "Wireless and Mobile Communication",
    subtitle: "Propagation modeling, massive MIMO, RF transceivers, and next-generation mobile protocols.",
    tagline: "High-Bandwidth Spectrum & RF Engineering",
    image: area6Img,
    badge: "Wireless Systems",
    badgeColor: "bg-violet-100 text-violet-900 border-violet-300",
    stats: "Double-Blind · Template Ready",
    link: "/submit"
  },
  {
    id: 7,
    category: "Electronics & Comm",
    title: "5G/6G Networks",
    subtitle: "Terahertz communication, beamforming, network slicing, and ultra-reliable low latency channels.",
    tagline: "Next-Gen Ultra-Low Latency Connectivity",
    image: area7Img,
    badge: "5G/6G Technology",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
    stats: "Rapid Fast-Track · Global Reach",
    link: "/submit"
  },
  {
    id: 8,
    category: "Computing & AI",
    title: "Computer Science and Engineering",
    subtitle: "Algorithmic computation, distributed operating systems, software engineering, and formal methods.",
    tagline: "Scalable Architecture & Algorithmic Design",
    image: area8Img,
    badge: "Computer Science",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
    stats: "IEEE Standard · Peer Reviewed",
    link: "/submit"
  },
  {
    id: 9,
    category: "Electronics & Comm",
    title: "Electronics and Communication Engineering",
    subtitle: "VLSI design, embedded processors, FPGA architectures, and signal modulation systems.",
    tagline: "Semiconductor Silicon & VLSI Hardware",
    image: area9Img,
    badge: "ECE & Microchips",
    badgeColor: "bg-teal-100 text-teal-900 border-teal-300",
    stats: "Double-Blind · Continuous Publish",
    link: "/submit"
  },
  {
    id: 10,
    category: "Core Engineering",
    title: "Electrical Engineering",
    subtitle: "Power systems, high-voltage engineering, smart grid integration, and electrical drive converters.",
    tagline: "Grid Optimization & Power Electronics",
    image: area10Img,
    badge: "Electrical Systems",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    stats: "Open Access · CrossRef DOI",
    link: "/submit"
  },
  {
    id: 11,
    category: "Core Engineering",
    title: "Mechanical Engineering",
    subtitle: "Computational fluid dynamics, thermodynamics, turbomachinery, and precision mechanics.",
    tagline: "Thermodynamics & Precision Kinematics",
    image: area11Img,
    badge: "Mechanical Engg",
    badgeColor: "bg-orange-100 text-orange-900 border-orange-300",
    stats: "Double-Blind · Fast-Track",
    link: "/submit"
  },
  {
    id: 12,
    category: "Core Engineering",
    title: "Civil Engineering",
    subtitle: "Structural resilience, earthquake engineering, sustainable building materials, and smart transportation.",
    tagline: "Resilient Infrastructure & Structural Design",
    image: area12Img,
    badge: "Civil & Structural",
    badgeColor: "bg-stone-100 text-stone-900 border-stone-300",
    stats: "Standardized Review · DOI",
    link: "/submit"
  },
  {
    id: 13,
    category: "Core Engineering",
    title: "Chemical Engineering",
    subtitle: "Reaction kinetics, process synthesis, novel catalysis, separation units, and biochemical processing.",
    tagline: "Catalysis & Sustainable Process Chemistry",
    image: area13Img,
    badge: "Chemical Processes",
    badgeColor: "bg-red-100 text-red-900 border-red-300",
    stats: "Peer Reviewed · IEEE Format",
    link: "/submit"
  },
  {
    id: 14,
    category: "Core Engineering",
    title: "Environmental Engineering",
    subtitle: "Effluent treatment, carbon capture, renewable water cycles, and environmental bio-remediation.",
    tagline: "Ecological Restoration & Carbon Reduction",
    image: area14Img,
    badge: "Environmental Tech",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    stats: "Open Access · Global Indexing",
    link: "/submit"
  },
  {
    id: 15,
    category: "Energy & Materials",
    title: "Renewable Energy Systems",
    subtitle: "Next-gen photovoltaics, wind energy aerodynamics, green hydrogen cells, and battery storage.",
    tagline: "Clean Energy Transition & Photovoltaics",
    image: area15Img,
    badge: "Renewable Energy",
    badgeColor: "bg-green-100 text-green-900 border-green-300",
    stats: "Fast-Track · Double-Blind",
    link: "/submit"
  },
  {
    id: 16,
    category: "Automation & Robotics",
    title: "Robotics and Automation",
    subtitle: "Autonomous mobile robots, robotic kinematics, industrial cobots, teleoperation, and mechatronics.",
    tagline: "Mechatronics & Autonomous Robotics",
    image: area16Img,
    badge: "Robotics & Cobots",
    badgeColor: "bg-fuchsia-100 text-fuchsia-900 border-fuchsia-300",
    stats: "Peer Reviewed · High Impact",
    link: "/submit"
  },
  {
    id: 17,
    category: "Automation & Robotics",
    title: "Smart Manufacturing",
    subtitle: "Industry 4.0, additive manufacturing (3D printing), digital twins, and cyber-physical production.",
    tagline: "Industry 4.0 & Digital Twin Production",
    image: area17Img,
    badge: "Smart Factory",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    stats: "Double-Blind · Fast Review",
    link: "/submit"
  },
  {
    id: 18,
    category: "Energy & Materials",
    title: "Materials Science",
    subtitle: "Advanced composites, metamaterials, functional biomaterials, crystal lattices, and polymers.",
    tagline: "Nanocrystals & Advanced Metamaterials",
    image: area18Img,
    badge: "Materials Science",
    badgeColor: "bg-lime-100 text-lime-900 border-lime-300",
    stats: "IEEE Referencing · DOI",
    link: "/submit"
  },
  {
    id: 19,
    category: "Applied Sciences",
    title: "Biomedical Engineering",
    subtitle: "Wearable biosensors, biomedical imaging, neural prosthetics, and physiological signal diagnostics.",
    tagline: "Bio-Sensors & Neural Engineering",
    image: area19Img,
    badge: "Biomedical Tech",
    badgeColor: "bg-pink-100 text-pink-900 border-pink-300",
    stats: "Double-Blind · Open Access",
    link: "/submit"
  },
  {
    id: 20,
    category: "Energy & Materials",
    title: "Nanotechnology",
    subtitle: "Carbon nanotubes, 2D graphene sheets, quantum dot synthesis, and molecular engineering.",
    tagline: "Molecular Synthesis & Quantum Dots",
    image: area20Img,
    badge: "Nanotech & Graphene",
    badgeColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
    stats: "Rigorous Review · CC BY 4.0",
    link: "/submit"
  },
  {
    id: 21,
    category: "Applied Sciences",
    title: "Applied Physics",
    subtitle: "Photonics, laser plasma interactions, solid-state semiconductors, and quantum optics.",
    tagline: "Quantum Optics & Laser Photonics",
    image: area21Img,
    badge: "Applied Physics",
    badgeColor: "bg-cyan-100 text-cyan-900 border-cyan-300",
    stats: "Fast-Track · DOI Assigned",
    link: "/submit"
  },
  {
    id: 22,
    category: "Applied Sciences",
    title: "Applied Mathematics",
    subtitle: "Nonlinear dynamical systems, computational optimization, stochastic modeling, and PDEs.",
    tagline: "Computational Modeling & Optimization",
    image: area22Img,
    badge: "Applied Mathematics",
    badgeColor: "bg-violet-100 text-violet-900 border-violet-300",
    stats: "Double-Blind · Peer Reviewed",
    link: "/submit"
  },
  {
    id: 23,
    category: "Interdisciplinary",
    title: "Interdisciplinary Science and Engineering",
    subtitle: "Cross-disciplinary convergence, translational engineering, and multidisciplinary scientific breakthroughs.",
    tagline: "Cross-Domain Synergy & Novel Breakthroughs",
    image: area23Img,
    badge: "Interdisciplinary Core",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    stats: "Priority Review · Open Access",
    link: "/submit"
  }
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
  ]
};

export const referencingStyleData = {
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
};

export const ethicsAndPoliciesData = [
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
];

export const submissionChecklistData = [
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
];

// Real Featured Articles from the Official Template & Metamaterials / Applied Research
export const featuredTemplateArticles = [
  {
    id: "art-1",
    title:
      "Dual-Band Concentric Split Square Resonators Based Metamaterial Absorber for X-Band Applications",
    authors: [
      { name: "Supriya" },
      { name: "Alkesh Agrawal" },
      { name: "Bhagwant Singh" },
    ],
    keywords: [
      "Absorber",
      "Absorptance",
      "Dual-Band",
      "Broad-Band",
    ],
    paperId: "IJSPAST150926",
    citation:
      'Supriya, Alkesh Agrawal, Bhagwant Singh, “Dual-Band Concentric Split Square Resonators Based Metamaterial Absorber for X-Band Applications”, International Journal of Scientific Research in Applied Science and Technology, Vol. 1, 1-6, Dec., 2026',
    path: research,
  },
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
