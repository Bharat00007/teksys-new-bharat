import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Zap,
  Layers,
  GraduationCap,
  Wrench,
  Microscope,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Hexagon,
  MonitorPlay,
  Network,
  ClipboardList,
  Handshake,
  Factory,
} from "lucide-react";
import hero from "@/assets/hero-semiconductor.jpg";
import advisor from "@/assets/dr-kumud-ranjan.jpg";
import partnerTdx from "@/assets/partner-techdatax.jpg";
import partnerAligned from "@/assets/partner-aligned-test.jpg";
import partnerSemicom from "@/assets/partner-semicom.jpg";
import collageGan from "@/assets/service-gan.jpeg";
import collageTraining from "@/assets/training-classroom.jpg";
import { SERVICES, COURSES, SITE } from "@/lib/site";
import { Section, SectionTitle, SectionEyebrow } from "@/components/site/Section";

const ICONS = { Cpu, Zap, Layers, GraduationCap, Wrench, Microscope } as const;

function Home() {
  return (
    <>
      <Hero />
      <PillarGrid />
      <ServicesPreview />
      <TrainingPreview />
      <AdvisorBlock />
      <Partners />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-[2rem] font-extrabold leading-[1.15] tracking-tight text-foreground drop-shadow-sm sm:text-[2.5rem] lg:text-[3rem] lg:leading-[1.1]"
          >
            Semiconductor, Defence &amp; Advanced Technology Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80"
          >
            Supporting Industry, Academia, Startups &amp; Government Organizations Through{" "}
            <span className="font-semibold text-primary">Semiconductor Skill Training</span>,{" "}
            <span className="font-medium text-foreground">Technology Computing</span>,{" "}
            <span className="font-medium text-foreground">Engineering Services</span> &amp;{" "}
            <span className="font-medium text-foreground">Workforce Development</span>
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
        >
          <HeroCard
            img={collageGan}
            title="GaN Technology, Fabless & MMIC Design and Development"
            position="bottom"
            className="col-span-2 aspect-[16/7]"
            imgClassName="object-[center_75%]"
          />
          <HeroCard
            img={collageTraining}
            title="Semiconductor Skill Training on GaN and SiC "
            position="bottom"
            className="col-span-2 aspect-[16/7]"
          />
        </motion.div>
      </div>
      <img src={hero} alt="" className="hidden" aria-hidden />
    </section>
  );
}

function HeroCard({
  img,
  eyebrow,
  title,
  caption,
  position = "bottom",
  className = "",
  imgClassName = "",
}: {
  img: string;
  eyebrow?: string;
  title: string;
  caption?: string;
  position?: "top" | "bottom";
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div className={`group relative overflow-hidden rounded-md shadow-md ${className}`}>
      <img src={img} alt={title} className={`absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 ${imgClassName}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
      <div
        className={`absolute inset-x-0 ${position === "top" ? "top-0 p-4" : "bottom-0 p-4"} text-white`}
      >
        {eyebrow && <p className="text-lg font-bold leading-tight">{eyebrow}</p>}
        <p className={`${eyebrow ? "text-sm" : "text-lg font-bold leading-tight"}`}>{title}</p>
        {caption && <p className="mt-1 text-[11px] leading-snug text-white/80">{caption}</p>}
      </div>
    </div>
  );
}

const PILL_ITEMS = [
  { n: "01", label: "Semiconductor Fundamentals", icon: Cpu, color: "bg-blue-200 text-blue-900", num: "bg-blue-800" },
  { n: "02", label: "TCAD & Device Simulation", icon: MonitorPlay, color: "bg-green-200 text-green-900", num: "bg-green-600" },
  { n: "03", label: "Wafer Epitaxy & Materials", icon: Hexagon, color: "bg-cyan-200 text-cyan-900", num: "bg-blue-600" },
  { n: "04", label: "Wafer Fabrication & Cleanroom", icon: Factory, color: "bg-red-200 text-red-900", num: "bg-red-600" },
  { n: "05", label: "Gases, Chemicals & Facilities", icon: Layers, color: "bg-blue-200 text-blue-900", num: "bg-blue-700" },
  { n: "06", label: "Device Testing & Characterization", icon: Microscope, color: "bg-gray-200 text-gray-900", num: "bg-gray-900" },
  { n: "07", label: "Packaging & Assembly", icon: ClipboardList, color: "bg-green-200 text-green-900", num: "bg-green-600" },
  { n: "08", label: "Reliability & Quality", icon: Network, color: "bg-red-200 text-red-900", num: "bg-red-600" },
  { n: "09", label: "ISO, EHS & Compliance", icon: Handshake, color: "bg-green-200 text-green-900", num: "bg-green-600" },
  { n: "10", label: "CS, AI, ML & Data Analytics", icon: Cpu, color: "bg-red-200 text-red-900", num: "bg-red-600" },
];

function PillarGrid() {
  return (
    <section className="bg-background pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 lg:gap-2">
          {PILL_ITEMS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`relative flex flex-col items-center rounded-2xl px-2 pb-3 pt-5 text-center ${p.color}`}
              >
                <span
                  className={`absolute -top-3 grid h-7 w-7 place-items-center rounded-full text-xs font-bold text-white ${p.num}`}
                >
                  {p.n}
                </span>
                <div className="my-2 grid h-12 w-12 place-items-center rounded-lg bg-white/70">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <p className="mt-1 text-[11px] font-semibold leading-tight">{p.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <Section>
      <SectionTitle
        eyebrow="What we do"
        title={<>End-to-End Semiconductor &<br className="hidden sm:block" /> Deep-Tech Engineering</>}
        description="From GaN device consulting to MMIC tape-out and workforce training — we partner with engineering teams to deliver advanced technology programs."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[s.icon as keyof typeof ICONS];
          return (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group card-elevated rounded-2xl p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
              <ul className="mt-4 space-y-1.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {b}
                  </li>
                ))}
              </ul>
              <Link
                to={`/services#${s.slug}`}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
              >
                Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function TrainingPreview() {
  /* Badge colors matching the reference design exactly */
  const badgeColors: Record<string, string> = {
    "01": "bg-blue-800",      // dark blue
    "02": "bg-green-600",     // green
    "03": "bg-blue-600",      // blue
    "04": "bg-red-600",       // red
    "05": "bg-blue-700",      // blue
    "06": "bg-gray-900",      // dark/black
    "07": "bg-green-600",     // green
    "08": "bg-red-600",       // red
    "09": "bg-green-600",     // green
    "10": "bg-red-600",       // red
  };

  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <SectionEyebrow>Training Academy</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Semiconductor Skill <span className="text-gradient-brand">Training Academy</span>
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Ten industry-led programs covering the full semiconductor value chain — taught by
              experienced practitioners with hands-on labs, projects and global certification.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {[
              { icon: ShieldCheck, label: "Industry Expert Faculty" },
              { icon: Globe2, label: "Global Certification with TechDataX" },
              { icon: GraduationCap, label: "Placement Assistance" },
            ].map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs"
              >
                <b.icon className="h-3.5 w-3.5 text-indigo-glow" /> {b.label}
              </span>
            ))}
          </div>
        </div>

        {/* Cards Grid — 5 columns on desktop to match reference */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {COURSES.map((course, i) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group flex flex-col rounded-2xl border-2 border-ink-soft bg-white p-5 transition-shadow hover:shadow-2xl"
            >
              {/* Numbered Badge */}
              <div
                className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${badgeColors[course.number] || "bg-blue-800"}`}
              >
                {course.number}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-base font-bold leading-snug text-gray-900">
                {course.title}
              </h3>

              {/* Description */}
              <p className="mb-5 flex-grow text-[13px] leading-relaxed text-gray-500">
                {course.overview}
              </p>

              {/* Key Learning Areas — mt-auto pushes this block to the bottom */}
              <div className="mt-auto mb-5">
                <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
                  Key Learning Areas
                </h4>
                <ul className="space-y-1.5">
                  {course.keyLearningAreas.map((area) => (
                    <li key={area} className="flex items-start gap-2 text-xs text-gray-500">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enroll Now Button */}
              <Link
                to={`/training#${course.slug}`}
                className="block w-full rounded-lg bg-ink px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-indigo-glow"
              >
                ENROLL NOW
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdvisorBlock() {
  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-secondary">
            <img
              src={advisor}
              alt="Dr. Kumud Ranjan, Director, Teksys Services"
              width={400}
              height={500}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 rounded-2xl border border-border bg-card px-5 py-3 shadow-xl sm:block">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              20+ years experience
            </p>
            <p className="text-sm font-semibold">Defence Electronics · Semiconductor</p>
          </div>
        </motion.div>
        <div>
          <SectionEyebrow>Lead Technical Advisor & Mentor</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Dr. Kumud Ranjan</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Cofounder & Director, Teksys Services Pvt. Ltd.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Former Scientist, DRDO",
              "GaN Technologist & RF / MMIC Expert",
              "20+ years in Defence Electronics and Semiconductor Technologies",
              "Mentor, Consultant and Technology Strategist",
            ].map((b) => (
              <li key={b} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {b}
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-indigo-glow"
          >
            Know more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

function Partners() {
  const items = [
    { name: "TechDataX Singapore", img: partnerTdx },
    { name: "Aligned Test", img: partnerAligned },
    { name: "Semicom Consultancy Services", img: partnerSemicom },
  ];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Global Partners & Certifications
        </p>
        <div className="mt-8 grid grid-cols-1 items-center justify-items-center gap-8 sm:grid-cols-3">
          {items.map((p) => (
            <div
              key={p.name}
              className="flex h-24 w-full max-w-[320px] items-center justify-center rounded-xl bg-white p-6 shadow-sm ring-1 ring-border"
            >
              <img
                src={p.img}
                alt={p.name}
                className="max-h-20 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl bg-ink p-10 text-white sm:p-14">
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-glow/40 blur-3xl" aria-hidden />
        <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Have a semiconductor program in mind?
            </h2>
            <p className="mt-3 max-w-xl text-white/75">
              Whether it's a GaN MMIC, SiC power module or a workforce training rollout — talk to
              our engineering team.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Home;