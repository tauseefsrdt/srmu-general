export const brandInfo = {
  name: "NEXUS",
  fullName: "Nexus Dynamics & Digital Innovations",
  tagline: "Engineering the Future of Scalable Enterprise Technology",
  shortDesc: "Nexus delivers enterprise-grade cloud transformation, intelligent AI architectures, and resilient digital products designed to accelerate operational scale and sustainable business growth.",
  established: "2018",
  headquarters: "San Francisco • London • Singapore",
  stats: [
    { label: "Global Enterprises Served", value: "250+", change: "+32% YoY" },
    { label: "Client Value Generated", value: "$4.2B+", change: "Demonstrated ROI" },
    { label: "Infrastructure Uptime", value: "99.99%", change: "Enterprise SLA" },
    { label: "Global Delivery Hubs", value: "14", change: "Americas & EMEA" },
    { label: "Senior Cloud & AI Engineers", value: "180+", change: "Top 2% Talent" },
    { label: "Industry Innovation Awards", value: "42", change: "Recognized Globally" }
  ]
};

export const navItems = [
  {
    name: "About",
    href: "#about",
    dropdown: [
      { title: "Our Story & Vision", desc: "Discover how we architect future-proof digital experiences", href: "#about" },
      { title: "Core Values & Culture", desc: "Engineering rigor, continuous learning, and client obsession", href: "#values" },
      { title: "Global Presence", desc: "Offices and specialized delivery centers across 3 continents", href: "#about" },
      { title: "Leadership Team", desc: "Meet the technology visionaries driving our strategy", href: "#team" }
    ]
  },
  {
    name: "Services",
    href: "#services",
    dropdown: [
      { title: "Cloud Architecture & DevOps", desc: "Zero-downtime multi-cloud migrations and automated CI/CD", href: "#services" },
      { title: "AI & Cognitive Intelligence", desc: "Custom LLMs, predictive modeling, and intelligent automation", href: "#services" },
      { title: "Enterprise Cybersecurity", desc: "Zero-trust posture, threat intelligence, and compliance audit", href: "#services" },
      { title: "Product Engineering & UX", desc: "End-to-end modern web and mobile application development", href: "#services" }
    ]
  },
  {
    name: "Projects",
    href: "#projects",
    dropdown: [
      { title: "Featured Case Studies", desc: "Transformative digital milestones across Fortune 500 brands", href: "#projects" },
      { title: "FinTech & Real-Time Payments", desc: "Sub-millisecond ledger and transaction processing systems", href: "#projects" },
      { title: "HealthTech & Diagnostics", desc: "HIPAA-compliant telemetry and AI-driven clinical pipelines", href: "#projects" },
      { title: "Smart Logistics & IoT", desc: "Real-time edge telemetry and predictive supply chains", href: "#projects" }
    ]
  },
  {
    name: "Testimonials",
    href: "#testimonials"
  },
  {
    name: "Contact",
    href: "#contact"
  }
];

export const aboutPillars = [
  {
    id: "mission",
    title: "Our Mission",
    tagline: "Empowering Next-Gen Scale",
    badge: "Core Purpose",
    icon: "Target",
    color: "from-amber-500 to-amber-600",
    desc: "To empower global enterprises by architecting mission-critical digital systems, resilient cloud infrastructure, and intelligent automation that eliminate operational bottlenecks and drive unprecedented growth.",
    highlights: [
      "Rigorous engineering excellence adhering to ISO 27001 and SOC2 standards.",
      "Accelerated time-to-market with automated development lifecycles.",
      "Continuous optimization for sustainable, cost-efficient cloud utilization."
    ]
  },
  {
    id: "overview",
    title: "General Information",
    tagline: "Global Technology Partner",
    badge: "Global Footprint",
    isPrimary: true,
    icon: "Globe",
    color: "from-blue-600 to-brand-900",
    desc: "Founded in 2018, Nexus is an international technology consultancy partnering with high-growth startups and Fortune 500 corporations across North America, Europe, and Asia-Pacific to build transformative digital platforms.",
    highlights: [
      "Headquarters in San Francisco with major centers in London and Singapore.",
      "Multi-disciplinary teams of software architects, data scientists, and UX strategists.",
      "Over 98% client retention rate backed by long-term strategic relationships."
    ]
  },
  {
    id: "vision",
    title: "Our Vision",
    tagline: "Shaping Tomorrow's Tech",
    badge: "Future Horizon",
    icon: "Sparkles",
    color: "from-sky-500 to-blue-700",
    desc: "To be the most trusted technology acceleration partner globally, setting the standard for how organizations harness artificial intelligence, distributed computing, and human-centric design to create enduring value.",
    highlights: [
      "Pioneering ethical AI deployment and autonomous operational workflows.",
      "Driving decentralized and carbon-neutral compute infrastructures.",
      "Cultivating the next generation of top-tier software and cloud leaders."
    ]
  }
];

export const servicesData = [
  {
    id: "srv-1",
    title: "Cloud Architecture & Modern DevOps",
    icon: "Cloud",
    category: "Infrastructure",
    badge: "Popular",
    desc: "Design, migrate, and optimize resilient multi-cloud environments on AWS, Azure, and Google Cloud with Kubernetes and automated infrastructure as code.",
    features: [
      "Kubernetes & Microservices Orchestration",
      "Terraform & GitOps Automated Pipelines",
      "Cost Optimization & FinOps Auditing",
      "24/7 Site Reliability Engineering (SRE)"
    ],
    metric: "99.99% Uptime",
    metricLabel: "Historical Reliability"
  },
  {
    id: "srv-2",
    title: "Applied AI & Machine Learning",
    icon: "Cpu",
    category: "Intelligent Systems",
    badge: "High Growth",
    desc: "Unlock proprietary data assets with customized large language models, predictive intelligence pipelines, and computer vision algorithms tailored to your domain.",
    features: [
      "Domain-Specific LLM Fine-Tuning & RAG",
      "Real-Time Predictive Analytics Engines",
      "Computer Vision & Edge Inference",
      "Ethical AI Governance & Monitoring"
    ],
    metric: "4.8x Speedup",
    metricLabel: "Operational Velocity"
  },
  {
    id: "srv-3",
    title: "Enterprise Cybersecurity & Zero Trust",
    icon: "ShieldCheck",
    category: "Security & Risk",
    badge: "Essential",
    desc: "Protect critical digital infrastructure with continuous threat detection, zero-trust architecture, identity governance, and proactive penetration testing.",
    features: [
      "Zero-Trust Architecture Implementation",
      "SOC2, HIPAA & ISO 27001 Readiness",
      "Continuous Red Team Penetration Testing",
      "Automated Vulnerability Remediation"
    ],
    metric: "Zero Breach",
    metricLabel: "Record Across All Clients"
  },
  {
    id: "srv-4",
    title: "Custom Digital Product Engineering",
    icon: "Smartphone",
    category: "Software Development",
    badge: "Core Service",
    desc: "Craft high-performance, responsive web and mobile applications with intuitive design systems, sub-second latency, and frictionless user flows.",
    features: [
      "Modern React, Next.js & TypeScript Systems",
      "Cross-Platform Native iOS & Android Apps",
      "High-Throughput GraphQL & REST APIs",
      "Micro-Frontend Component Libraries"
    ],
    metric: "<150ms",
    metricLabel: "Avg. User Interaction Latency"
  },
  {
    id: "srv-5",
    title: "Data Intelligence & Big Data Pipelines",
    icon: "Database",
    category: "Data Engineering",
    badge: "Analytics",
    desc: "Transform unstructured enterprise data into actionable business intelligence with modern data lakes, real-time streaming, and executive dashboards.",
    features: [
      "Snowflake, Databricks & BigQuery Architecture",
      "Real-Time Apache Kafka & Flink Streaming",
      "dbt Data Modeling & Automated Quality Checks",
      "Executive KPI Analytics & Dashboards"
    ],
    metric: "10B+ Events",
    metricLabel: "Processed Daily"
  },
  {
    id: "srv-6",
    title: "Strategic Advisory & Digital Transformation",
    icon: "Compass",
    category: "Consulting",
    badge: "Strategic",
    desc: "Navigate complex technological change with seasoned executive advisors who align modern engineering roadmaps with business revenue objectives.",
    features: [
      "Legacy System Modernization Roadmaps",
      "Technology Due Diligence for M&A",
      "Team Topology & Agile Optimization",
      "Cloud Strategy & Vendor Selection"
    ],
    metric: "3.2x ROI",
    metricLabel: "Average First-Year Impact"
  }
];

export const projectsData = [
  {
    id: "proj-1",
    title: "AuraPay: Global Real-Time Cross-Border Payment Engine",
    category: "FinTech & Banking",
    tagColor: "bg-amber-100 text-amber-900 border-amber-300",
    client: "Tier-1 Global Payments Consortium",
    impact: "+320% Processing Capacity",
    desc: "Architected a low-latency, distributed transaction processing engine capable of settling 45,000 multi-currency transactions per second with instant cryptographic reconciliation.",
    deliverables: ["Distributed Consensus Engine", "Multi-Region AWS Cluster", "Real-Time Fraud Telemetry"],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    stats: { metric1: "45K TPS", metric2: "99.999% SLA", metric3: "$1.8B Flow/Mo" }
  },
  {
    id: "proj-2",
    title: "OmniHealth: Autonomous Clinical Diagnostics & Telemetry",
    category: "HealthTech & AI",
    tagColor: "bg-blue-100 text-blue-900 border-blue-300",
    client: "Healthcare Network Group",
    impact: "64% Diagnostic Time Saved",
    desc: "Deployed a HIPAA-compliant federated computer vision pipeline analyzing MRI and CT scans in near real-time to prioritize urgent clinical triage across 38 hospital centers.",
    deliverables: ["HIPAA-Compliant Cloud Lake", "Federated Deep Learning Models", "Clinician iPad Application"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    stats: { metric1: "38 Hospitals", metric2: "99.2% Accuracy", metric3: "1.2M Scans" }
  },
  {
    id: "proj-3",
    title: "Vanguard Logistics: Predictive Autonomous Supply Chain",
    category: "IoT & Supply Chain",
    tagColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    client: "International Cargo & Freight Corp",
    impact: "22% Fuel & Cost Reduction",
    desc: "Engineered edge-connected IoT sensor arrays across 12,000 intermodal shipping containers with dynamic route re-optimization and proactive temperature monitoring.",
    deliverables: ["Edge Sensor Firmware", "Kafka Real-Time Streaming", "Predictive Route AI"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    stats: { metric1: "12K Sensors", metric2: "22% Savings", metric3: "Zero Spoilage" }
  },
  {
    id: "proj-4",
    title: "Krypton Cloud: Next-Generation Developer Compute Fabric",
    category: "Cloud & DevTools",
    tagColor: "bg-purple-100 text-purple-900 border-purple-300",
    client: "Silicon Valley Unicorn",
    impact: "70% Faster Deployments",
    desc: "Built a self-healing serverless execution platform allowing 200,000 developers worldwide to compile, test, and deploy microservices in under 4 seconds.",
    deliverables: ["Rust-based Container Runtime", "WASM Sandbox Execution", "Real-Time Observability"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    stats: { metric1: "200K Devs", metric2: "<4s Deploy", metric3: "4M Daily Runs" }
  }
];

export const testimonialsData = [
  {
    id: "test-1",
    name: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "Apex Financial Global",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote: "Nexus revolutionized our legacy infrastructure in record time. Their cloud and AI engineering teams delivered our real-time payments platform with zero disruption and uncompromising security."
  },
  {
    id: "test-2",
    name: "Dr. Evelyn Ward",
    role: "VP of Digital Innovation",
    company: "BioMed LifeSciences",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote: "The depth of technical mastery and design precision that Nexus brought to our clinical diagnostics application was phenomenal. They act as a true extension of our executive leadership."
  },
  {
    id: "test-3",
    name: "Julian Thorne",
    role: "Chief Executive Officer",
    company: "Starlight Technologies",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote: "Working with Nexus provided our business a decisive competitive edge. Our deployment velocity increased fourfold and our cloud operational expenses dropped by 34% in the first quarter."
  }
];

export const footerLinks = {
  solutions: [
    { name: "Cloud & DevOps", href: "#services" },
    { name: "Applied AI & Data", href: "#services" },
    { name: "Enterprise Security", href: "#services" },
    { name: "Product Engineering", href: "#services" },
    { name: "Executive Consulting", href: "#services" }
  ],
  company: [
    { name: "About Nexus", href: "#about" },
    { name: "Leadership & Careers", href: "#about" },
    { name: "Featured Case Studies", href: "#projects" },
    { name: "Client Testimonials", href: "#testimonials" },
    { name: "Press & News", href: "#about" }
  ],
  resources: [
    { name: "Technical Whitepapers", href: "#projects" },
    { name: "Architecture Blueprints", href: "#services" },
    { name: "Cloud Cost Calculator", href: "#services" },
    { name: "Security Compliance Hub", href: "#services" },
    { name: "Engineering Blog", href: "#projects" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Security & Compliance (SOC2)", href: "#" },
    { name: "Cookie Settings", href: "#" }
  ]
};
