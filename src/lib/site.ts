import gan from "@/assets/service-gan.jpeg";
import sic from "@/assets/service-sic.jpg";
import rf from "@/assets/service-rf.jpg";

export const SITE = {
  name: "TEKSYS",
  tagline: "Innovate · Train · Transform",
  description:
    "Semiconductor, Defence & Advanced Technology Solutions — GaN/SiC consulting, fabless MMIC design, and a semiconductor skill training academy.",
  phone: "+91 86004 18168",
  phoneHref: "tel:+918600418168",
  email: "admin@teksys-services.com",
  locations: ["India", "Singapore", "USA"],
  legalName: "Teksys Services Pvt. Ltd.",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/training", label: "Training Academy" },
  { to: "/semiconductor-skill-training", label: "Semiconductor Skill Training Program" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const SERVICES = [
  {
    slug: "gan",
    title: "GaN Technology Consulting",
    icon: "Cpu",
    image: gan,
    summary:
      "End-to-end Gallium Nitride consulting — device physics, RF power amplifier design, qualification and tech transfer for defence, telecom and power applications.",
    bullets: [
      "GaN HEMT device & process consulting",
      "RF / radar power amplifier architecture",
      "Reliability, qualification & tech transfer",
    ],
  },
  {
    slug: "sic",
    title: "SiC Power Electronics",
    icon: "Zap",
    image: sic,
    summary:
      "Silicon Carbide solutions for EV, renewable and high-voltage industrial systems — from device selection to packaged power module design.",
    bullets: [
      "SiC MOSFET / diode application engineering",
      "EV traction inverter & on-board charger design",
      "Thermal & power module packaging",
    ],
  },
  {
    slug: "mmic",
    title: "Fabless MMIC Design & Development",
    icon: "Layers",
    image: rf,
    summary:
      "Full fabless flow for GaN/GaAs MMICs — from specification and schematic to layout, foundry tape-out and on-wafer characterization.",
    bullets: [
      "RF / microwave PA, LNA and switch design",
      "Layout, DRC/LVS and foundry tape-out",
      "On-wafer measurement & model extraction",
    ],
  },
  {
    slug: "training",
    title: "Semiconductor Skill Training",
    icon: "GraduationCap",
    image: gan,
    summary:
      "Industry-led semiconductor workforce development on GaN, SiC, RF, sensors, materials and advanced systems — delivered globally with TechDataX certification.",
    bullets: [
      "8 specialised programs across the value chain",
      "Hands-on labs, projects and mentorship",
      "Global certification & placement assistance",
    ],
  },
  {
    slug: "engineering",
    title: "Engineering & Technology Services",
    icon: "Wrench",
    image: rf,
    summary:
      "Technology computing, device simulation, characterization and engineering support for industry, academia, startups and government programs.",
    bullets: [
      "TCAD / device simulation & modelling",
      "Test, measurement & characterization",
      "Defence & strategic electronics programs",
    ],
  },
  {
    slug: "osat",
    title: "OSAT Lab & Process Lab Partnerships",
    icon: "Microscope",
    image: sic,
    summary:
      "Access to OSAT, packaging and process labs through our partner ecosystem — for prototyping, qualification and small-volume builds.",
    bullets: [
      "Wafer-level & advanced packaging access",
      "Reliability and qualification labs",
      "Pilot-line & low-volume fabrication",
    ],
  },
];

export type Course = {
  slug: string;
  number: string;
  title: string;
  overview: string;
  outcomes: string[];
  curriculum: string[];
  prerequisites: string;
  keyLearningAreas: string[];
};

export const COURSES: Course[] = [
  {
    slug: "semiconductor-fundamentals",
    number: "01",
    title: "Semiconductor Fundamentals and Industry Value Chain",
    overview:
      "Semiconductor basics, materials, devices, industry ecosystem, applications, fab-to-product flow, and career pathways across design, process, testing, packaging, quality, and applications.",
    outcomes: [
      "Explain semiconductor device physics confidently",
      "Navigate wafer fab and cleanroom process flows",
      "Understand test, measurement and reliability basics",
      "Map career paths across the semiconductor industry",
    ],
    curriculum: [
      "Semiconductor materials & device physics",
      "Wafer fabrication & cleanroom processes",
      "Testing, measurement & reliability",
      "Semiconductor industry & career opportunities",
    ],
    prerequisites: "Basic electronics or physics background. Suitable for students and early-career engineers.",
    keyLearningAreas: [
      "Semiconductor Materials & Device Physics",
      "Wafer Fabrication & Cleanroom Processes",
      "Testing, Measurement & Reliability",
      "Semiconductor Industry & Career Opportunities",
    ],
  },
  {
    slug: "tcad-device-simulation",
    number: "02",
    title: "TCAD, Device Simulation and Design Awareness",
    overview:
      "Introduction to semiconductor device simulation, TCAD workflow, material parameters, device structures, I-V/C-V behavior, GaN/SiC/silicon device modeling, and simulation-based learning for device engineering roles.",
    outcomes: [
      "Understand TCAD simulation workflows",
      "Model GaN/SiC/silicon device structures",
      "Analyze I-V/C-V device behavior",
      "Apply simulation tools for device engineering",
    ],
    curriculum: [
      "TCAD simulation fundamentals",
      "Device structure modeling",
      "I-V/C-V behavior analysis",
      "Simulation-based device engineering",
    ],
    prerequisites: "Working knowledge of electronic devices and basic semiconductor concepts.",
    keyLearningAreas: [
      "TCAD Simulation Fundamentals",
      "Device Structure Modeling",
      "I-V/C-V Behavior Analysis",
      "Simulation-Based Device Engineering",
    ],
  },
  {
    slug: "wafer-epitaxy",
    number: "03",
    title: "Wafer Epitaxy and Semiconductor Materials",
    overview:
      "Basics of wafers, substrates, epitaxial growth, MOCVD/CVD awareness, GaN, SiC, silicon and compound semiconductor materials, defect control, material quality, and applications in power/RF devices.",
    outcomes: [
      "Understand wafer and substrate technologies",
      "Apply epitaxial growth techniques",
      "Evaluate material quality and defect control",
      "Select materials for power/RF applications",
    ],
    curriculum: [
      "Wafer & substrate technology",
      "Epitaxial growth processes",
      "Material quality & defect control",
      "Power/RF device materials",
    ],
    prerequisites: "Familiarity with semiconductor basics.",
    keyLearningAreas: [
      "Wafer & Substrate Technology",
      "Epitaxial Growth Processes",
      "Material Quality & Defect Control",
      "Power/RF Device Materials",
    ],
  },
  {
    slug: "wafer-fabrication",
    number: "04",
    title: "Wafer Fabrication and Cleanroom Process Technology",
    overview:
      "Cleanroom discipline, lithography, deposition, etching, oxidation, diffusion, metallization, process flow, contamination control, safety practices, and fab operations awareness.",
    outcomes: [
      "Navigate cleanroom processes and protocols",
      "Understand lithography and deposition techniques",
      "Apply contamination control practices",
      "Follow fab operations safety standards",
    ],
    curriculum: [
      "Cleanroom discipline & protocols",
      "Lithography & deposition",
      "Etching, oxidation & diffusion",
      "Fab operations & safety",
    ],
    prerequisites: "Basic understanding of semiconductor manufacturing.",
    keyLearningAreas: [
      "Cleanroom Discipline & Protocols",
      "Lithography & Deposition",
      "Etching, Oxidation & Diffusion",
      "Fab Operations & Safety",
    ],
  },
  {
    slug: "semiconductor-gases",
    number: "05",
    title: "Semiconductor Gases, Chemicals and Facilities",
    overview:
      "Role of specialty gases, wet chemicals, DI water, cleanroom utilities, exhaust, vacuum, safety systems, EHS practices, chemical handling, gas cabinets, facility readiness, and fab support functions.",
    outcomes: [
      "Understand specialty gas and chemical handling",
      "Apply cleanroom utility systems knowledge",
      "Follow EHS practices for semiconductor facilities",
      "Support fab readiness and operations",
    ],
    curriculum: [
      "Specialty gases & chemicals",
      "Cleanroom utilities & systems",
      "EHS practices & safety",
      "Facility readiness & support",
    ],
    prerequisites: "Basic understanding of semiconductor manufacturing environment.",
    keyLearningAreas: [
      "Specialty Gases & Chemicals",
      "Cleanroom Utilities & Systems",
      "EHS Practices & Safety",
      "Facility Readiness & Support",
    ],
  },
  {
    slug: "device-testing",
    number: "06",
    title: "Device Testing and Characterization",
    overview:
      "Electrical testing, wafer probing awareness, I-V/C-V measurements, RF and power device characterization, probe stations, test instruments, data interpretation, and lab documentation.",
    outcomes: [
      "Perform electrical testing and measurements",
      "Operate probe stations and test instruments",
      "Characterize RF and power devices",
      "Interpret test data and document results",
    ],
    curriculum: [
      "Electrical testing fundamentals",
      "Wafer probing & measurements",
      "RF/power device characterization",
      "Data interpretation & documentation",
    ],
    prerequisites: "Power electronics or analog circuits exposure.",
    keyLearningAreas: [
      "Electrical Testing Fundamentals",
      "Wafer Probing & Measurements",
      "RF/Power Device Characterization",
      "Data Interpretation & Documentation",
    ],
  },
  {
    slug: "semiconductor-packaging",
    number: "07",
    title: "Semiconductor Packaging and Assembly",
    overview:
      "Packaging fundamentals, die attach, wire bonding, flip-chip awareness, thermal management, package types, assembly flow, interconnects, and packaging requirements for power, RF, and sensor devices.",
    outcomes: [
      "Understand packaging fundamentals and flows",
      "Apply die attach and wire bonding techniques",
      "Address thermal management challenges",
      "Select packages for power/RF/sensor devices",
    ],
    curriculum: [
      "Packaging fundamentals",
      "Die attach & wire bonding",
      "Thermal management",
      "Package selection & assembly",
    ],
    prerequisites: "Undergraduate physics / materials / electronics.",
    keyLearningAreas: [
      "Packaging Fundamentals",
      "Die Attach & Wire Bonding",
      "Thermal Management",
      "Package Selection & Assembly",
    ],
  },
  {
    slug: "reliability-quality",
    number: "08",
    title: "Reliability, Failure Analysis and Quality Systems",
    overview:
      "Reliability testing, burn-in awareness, thermal cycling, stress testing, failure analysis basics, defect reporting, yield improvement, quality documentation, and product qualification awareness.",
    outcomes: [
      "Perform reliability testing procedures",
      "Conduct basic failure analysis",
      "Apply yield improvement techniques",
      "Maintain quality documentation standards",
    ],
    curriculum: [
      "Reliability testing methods",
      "Failure analysis basics",
      "Yield improvement",
      "Quality documentation & standards",
    ],
    prerequisites: "Working engineers or final-year students in ECE/EEE.",
    keyLearningAreas: [
      "Reliability Testing Methods",
      "Failure Analysis Basics",
      "Yield Improvement",
      "Quality Documentation & Standards",
    ],
  },
  {
    slug: "iso-ehs-compliance",
    number: "09",
    title: "ISO, EHS and Compliance in Semiconductor Industry",
    overview:
      "ISO systems, quality management, cleanroom documentation, SOPs, traceability, audit readiness, EHS compliance, safety culture, and industry-standard operating discipline required in semiconductor facilities.",
    outcomes: [
      "Implement ISO quality management systems",
      "Maintain cleanroom documentation and SOPs",
      "Ensure EHS compliance and audit readiness",
      "Foster safety culture in semiconductor facilities",
    ],
    curriculum: [
      "ISO quality management",
      "Cleanroom documentation & SOPs",
      "EHS compliance & audits",
      "Safety culture & operating discipline",
    ],
    prerequisites: "Basic understanding of quality systems and manufacturing.",
    keyLearningAreas: [
      "ISO Quality Management",
      "Cleanroom Documentation & SOPs",
      "EHS Compliance & Audits",
      "Safety Culture & Operating Discipline",
    ],
  },
  {
    slug: "cs-ai-ml-analytics",
    number: "10",
    title: "CS, AI, ML and Data Analytics in Semiconductor Industry",
    overview:
      "AI/ML for yield analytics, defect detection, predictive maintenance, equipment automation, process optimization, digital twins, test-data analytics, image-based inspection, and semiconductor manufacturing intelligence.",
    outcomes: [
      "Apply AI/ML to yield analytics",
      "Implement defect detection systems",
      "Use predictive maintenance techniques",
      "Optimize semiconductor manufacturing with data",
    ],
    curriculum: [
      "AI/ML for semiconductor manufacturing",
      "Defect detection & yield analytics",
      "Predictive maintenance & automation",
      "Digital twins & data analytics",
    ],
    prerequisites: "Basic programming and data analysis skills.",
    keyLearningAreas: [
      "AI/ML for Semiconductor Manufacturing",
      "Defect Detection & Yield Analytics",
      "Predictive Maintenance & Automation",
      "Digital Twins & Data Analytics",
    ],
  },
];

export const HIGHLIGHT_PILLARS = [
  "Semiconductor Fundamentals",
  "TCAD & Device Simulation",
  "Wafer Epitaxy & Materials",
  "Wafer Fabrication & Cleanroom",
  "Gases, Chemicals & Facilities",
  "Device Testing & Characterization",
  "Packaging & Assembly",
  "Reliability & Quality",
  "ISO, EHS & Compliance",
  "CS, AI, ML & Data Analytics",
];