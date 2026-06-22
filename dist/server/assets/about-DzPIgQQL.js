import { a as SITE } from "./utils-CW_M51bF.js";
import { t as dr_kumud_ranjan_default } from "./dr-kumud-ranjan-D-VTKWuw.js";
import { r as SectionTitle, t as Section } from "./Section-DnuYYV5j.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, CheckCircle2 } from "lucide-react";
//#region src/assets/about-lab.jpg
var about_lab_default = "/assets/about-lab-CEziapyW.jpg";
//#endregion
//#region src/routes/_site/about.tsx?tsr-split=component
function AboutPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "bg-hero-radial text-white",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ jsxs("h1", {
					className: "text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl",
					children: [
						"Engineering teams behind ",
						/* @__PURE__ */ jsx("span", {
							className: "text-gradient-brand",
							children: "next-generation"
						}),
						" ",
						"semiconductor programs"
					]
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-5 max-w-2xl text-white/75",
					children: "TEKSYS partners with industry, academia, startups and government organizations to accelerate semiconductor, defence and advanced technology programs — combining engineering services with structured workforce development."
				})]
			})
		}),
		/* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", {
			className: "grid items-center gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ jsx("img", {
				src: about_lab_default,
				alt: "Semiconductor cleanroom",
				className: "rounded-3xl border border-border object-cover",
				width: 1400,
				height: 900,
				loading: "lazy"
			}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(SectionTitle, {
				eyebrow: "Our mission",
				title: "Innovate · Train · Transform",
				description: "We bridge advanced engineering services and structured skill development so that India, Singapore and the USA build resilient semiconductor capability — across GaN, SiC, RF, power electronics and defence systems."
			}), /* @__PURE__ */ jsx("ul", {
				className: "mt-6 space-y-3 text-sm",
				children: [
					"Trusted advisor for defence electronics and semiconductor programs",
					"Fabless flow expertise — design, layout, tape-out, measurement",
					"Hands-on training academy with global certification",
					"Operating from India, Singapore and the USA"
				].map((b) => /* @__PURE__ */ jsxs("li", {
					className: "flex gap-2",
					children: [
						/* @__PURE__ */ jsx(CheckCircle2, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
						" ",
						b
					]
				}, b))
			})] })]
		}) }),
		/* @__PURE__ */ jsx("section", {
			className: "bg-secondary/40",
			children: /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", {
				className: "grid items-center gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx(SectionTitle, {
						eyebrow: "Lead Technical Advisor & Mentor",
						title: "Dr. Kumud Ranjan",
						description: "Cofounder & Director, Teksys Services Pvt. Ltd. — a defence and semiconductor technologist with two decades of practical experience."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-6 grid gap-4 sm:grid-cols-2",
						children: [
							{
								k: "Former Scientist",
								v: "DRDO"
							},
							{
								k: "Specialisation",
								v: "GaN · RF · MMIC"
							},
							{
								k: "Experience",
								v: "20+ years"
							},
							{
								k: "Role",
								v: "Mentor & Strategist"
							}
						].map((s) => /* @__PURE__ */ jsxs("div", {
							className: "rounded-2xl border border-border bg-card p-4",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: s.k
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-1 text-base font-semibold",
								children: s.v
							})]
						}, s.k))
					}),
					/* @__PURE__ */ jsxs(Link, {
						to: "/contact",
						className: "mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-indigo-glow",
						children: ["Connect with our team ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
					})
				] }), /* @__PURE__ */ jsx("div", {
					className: "relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-white",
					children: /* @__PURE__ */ jsx("img", {
						src: dr_kumud_ranjan_default,
						alt: "Dr. Kumud Ranjan",
						className: "h-full w-full object-cover",
						width: 400,
						height: 500,
						loading: "lazy"
					})
				})]
			}) })
		}),
		/* @__PURE__ */ jsxs(Section, { children: [/* @__PURE__ */ jsx(SectionTitle, {
			eyebrow: "Global footprint",
			title: "Operating across three continents",
			description: "Working with semiconductor, defence and academic partners across India, Singapore and the USA.",
			align: "center"
		}), /* @__PURE__ */ jsx("div", {
			className: "mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3",
			children: SITE.locations.map((l) => /* @__PURE__ */ jsxs("div", {
				className: "card-elevated rounded-2xl p-6 text-center",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-xs font-semibold uppercase tracking-widest text-primary",
						children: "Office"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-2xl font-bold",
						children: l
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Serving clients globally"
					})
				]
			}, l))
		})] })
	] });
}
//#endregion
export { AboutPage as component };
