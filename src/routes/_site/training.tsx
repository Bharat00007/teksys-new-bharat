import { useState } from "react";
import { COURSES } from "@/lib/site";
import { Section, SectionTitle } from "@/components/site/Section";
import { ContactForm } from "@/components/site/ContactForm";

function TrainingPage() {
  const [requestSlug, setRequestSlug] = useState<string | null>(null);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-hero-radial text-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Semiconductor Skill Training Academy
          </h1>
          <p className="mt-4 text-lg font-medium tracking-wide text-white/85 sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Certification with Global Companies –{" "}
            <span className="text-gradient-brand font-semibold">Singapore</span> |{" "}
            <span className="text-gradient-brand font-semibold">USA</span> |{" "}
            <span className="text-gradient-brand font-semibold">India</span>
          </p>
        </div>
      </section>

      <Section>
        <SectionTitle
          eyebrow="Certification Tracks"
          title="Our 10 Certification Tracks"
          description="Choose your path to semiconductor expertise"
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((course) => {
            const colors = [
              { bg: "bg-blue-800", text: "text-white" },
              { bg: "bg-green-600", text: "text-white" },
              { bg: "bg-blue-600", text: "text-white" },
              { bg: "bg-red-600", text: "text-white" },
              { bg: "bg-blue-700", text: "text-white" },
              { bg: "bg-gray-900", text: "text-white" },
              { bg: "bg-green-600", text: "text-white" },
              { bg: "bg-red-600", text: "text-white" },
              { bg: "bg-green-600", text: "text-white" },
              { bg: "bg-red-600", text: "text-white" },
            ];
            const color = colors[parseInt(course.number) - 1] || colors[0];
            
            return (
              <div
                key={course.slug}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:shadow-lg hover:border-primary/50"
              >
                {/* Number Circle */}
                <div
                  className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full font-bold ${color.bg} ${color.text}`}
                >
                  {course.number}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-semibold">{course.title}</h3>

                {/* Description */}
                <p className="mb-4 flex-grow text-sm text-muted-foreground">
                  {course.overview}
                </p>

                {/* Key Learning Areas */}
                <div className="mb-6">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                    Key Learning Areas
                  </h4>
                  <ul className="space-y-1.5">
                    {course.keyLearningAreas.map((area) => (
                      <li key={area} className="flex gap-2 text-xs text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enroll Button */}
                <button
                  type="button"
                  onClick={() => {
                    setRequestSlug(course.slug);
                    document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-indigo-glow"
                >
                  ENROLL NOW
                </button>
              </div>
            );
          })}
        </div>
      </Section>

      <section id="enroll" className="scroll-mt-24 bg-secondary/40">
        <Section>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="Enrol"
                title={requestSlug ? "Request course information" : "Get details for any program"}
                description="Tell us a bit about you and the program you're interested in — our academy team will reach out within 1–2 business days."
              />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {COURSES.map((c) => (
                  <button
                    key={c.slug}
                    type="button"
                    onClick={() => setRequestSlug(c.slug)}
                    className={`rounded-xl border px-3 py-2 text-left text-sm transition ${
                      requestSlug === c.slug
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <span className="mr-1 font-mono text-xs text-primary">{c.number}</span>
                    {c.title}
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <ContactForm
                source="enroll"
                topic={
                  requestSlug
                    ? COURSES.find((c) => c.slug === requestSlug)?.title ?? undefined
                    : undefined
                }
              />
            </div>
          </div>
        </Section>
      </section>
    </>
  );
}

export default TrainingPage;