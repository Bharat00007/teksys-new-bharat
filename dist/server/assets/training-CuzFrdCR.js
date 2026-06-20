import { t as ContactForm } from "./ContactForm-CWkKHkuN.js";
import { n as COURSES } from "./utils-CW_M51bF.js";
import { n as SectionEyebrow, r as SectionTitle, t as Section } from "./Section-BEf1Lo9O.js";
import { t as training_classroom_default } from "./training-classroom-CMYo-9cA.js";
import { useState } from "react";
import { Globe2, GraduationCap, ShieldCheck, Users } from "lucide-react";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/_site/training.tsx?tsr-split=component
var _jsxFileName = "D:/SCS projects/teksys-vision-craft/src/routes/_site/training.tsx?tsr-split=component";
function TrainingPage() {
	const [requestSlug, setRequestSlug] = useState(null);
	return /* @__PURE__ */ jsxDEV(Fragment, { children: [
		/* @__PURE__ */ jsxDEV("section", {
			className: "relative isolate overflow-hidden bg-hero-radial text-white",
			children: /* @__PURE__ */ jsxDEV("div", {
				className: "mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8",
				children: [/* @__PURE__ */ jsxDEV("div", { children: [
					/* @__PURE__ */ jsxDEV(SectionEyebrow, { children: "Training Academy" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 13,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("h1", {
						className: "mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl",
						children: ["Semiconductor Skill ", /* @__PURE__ */ jsxDEV("span", {
							className: "text-gradient-brand",
							children: "Training Academy"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 15,
							columnNumber: 35
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 14,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "mt-5 max-w-xl text-white/75",
						children: "Industry-led programs designed by practitioners — covering materials, devices, fabrication, RF/MMIC, power electronics and advanced semiconductor systems."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 17,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("div", {
						className: "mt-7 grid gap-3 sm:grid-cols-2",
						children: [
							{
								i: ShieldCheck,
								t: "Industry Expert Faculty"
							},
							{
								i: GraduationCap,
								t: "Hands-on Labs & Projects"
							},
							{
								i: Globe2,
								t: "Global Certification with TechDataX"
							},
							{
								i: Users,
								t: "Placement Assistance"
							}
						].map((x) => /* @__PURE__ */ jsxDEV("span", {
							className: "flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-3 py-2 text-sm",
							children: [
								/* @__PURE__ */ jsxDEV(x.i, { className: "h-4 w-4 text-indigo-glow" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 35,
									columnNumber: 19
								}, this),
								" ",
								x.t
							]
						}, x.t, true, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 25
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 21,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "mt-6 text-xs uppercase tracking-widest text-white/60",
						children: "Who can join: Engineering Students · Faculty · Researchers · Working Professionals · Industry Experts"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 12,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("div", {
					className: "relative",
					children: /* @__PURE__ */ jsxDEV("img", {
						src: training_classroom_default,
						alt: "TEKSYS semiconductor training classroom",
						className: "glow-ring rounded-3xl object-cover",
						width: 1400,
						height: 900,
						loading: "lazy"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 11,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 10,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ jsxDEV(Section, { children: [/* @__PURE__ */ jsxDEV(SectionTitle, {
			eyebrow: "Certification Tracks",
			title: "Our 8 Certification Tracks",
			description: "Choose your path to semiconductor expertise"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 49,
			columnNumber: 9
		}, this), /* @__PURE__ */ jsxDEV("div", {
			className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
			children: COURSES.map((course) => {
				const colors = [
					{
						bg: "bg-blue-900",
						text: "text-white"
					},
					{
						bg: "bg-green-700",
						text: "text-white"
					},
					{
						bg: "bg-blue-600",
						text: "text-white"
					},
					{
						bg: "bg-red-700",
						text: "text-white"
					},
					{
						bg: "bg-teal-600",
						text: "text-white"
					},
					{
						bg: "bg-pink-600",
						text: "text-white"
					},
					{
						bg: "bg-blue-800",
						text: "text-white"
					},
					{
						bg: "bg-amber-700",
						text: "text-white"
					}
				];
				const color = colors[parseInt(course.number) - 1] || colors[0];
				return /* @__PURE__ */ jsxDEV("div", {
					className: "flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:shadow-lg hover:border-primary/50",
					children: [
						/* @__PURE__ */ jsxDEV("div", {
							className: `mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full font-bold ${color.bg} ${color.text}`,
							children: course.number
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 80,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("h3", {
							className: "mb-3 text-lg font-semibold",
							children: course.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 85,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("p", {
							className: "mb-4 flex-grow text-sm text-muted-foreground",
							children: course.overview
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 88,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("div", {
							className: "mb-6",
							children: [/* @__PURE__ */ jsxDEV("h4", {
								className: "mb-2 text-xs font-semibold uppercase tracking-widest text-primary",
								children: "Key Learning Areas"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 19
							}, this), /* @__PURE__ */ jsxDEV("ul", {
								className: "space-y-1.5",
								children: course.keyLearningAreas.map((area) => /* @__PURE__ */ jsxDEV("li", {
									className: "flex gap-2 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ jsxDEV("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 99,
										columnNumber: 25
									}, this), area]
								}, area, true, {
									fileName: _jsxFileName,
									lineNumber: 98,
									columnNumber: 58
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 97,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 93,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("button", {
							type: "button",
							onClick: () => {
								setRequestSlug(course.slug);
								document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" });
							},
							className: "w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-indigo-glow",
							children: "ENROLL NOW"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 17
						}, this)
					]
				}, course.slug, true, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 18
				}, this);
			})
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 50,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 48,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ jsxDEV("section", {
			id: "enroll",
			className: "scroll-mt-24 bg-secondary/40",
			children: /* @__PURE__ */ jsxDEV(Section, { children: /* @__PURE__ */ jsxDEV("div", {
				className: "grid items-start gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV(SectionTitle, {
					eyebrow: "Enrol",
					title: requestSlug ? "Request course information" : "Get details for any program",
					description: "Tell us a bit about you and the program you're interested in — our academy team will reach out within 1–2 business days."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 123,
					columnNumber: 15
				}, this), /* @__PURE__ */ jsxDEV("div", {
					className: "mt-6 grid gap-3 sm:grid-cols-2",
					children: COURSES.map((c) => /* @__PURE__ */ jsxDEV("button", {
						type: "button",
						onClick: () => setRequestSlug(c.slug),
						className: `rounded-xl border px-3 py-2 text-left text-sm transition ${requestSlug === c.slug ? "border-primary bg-primary/5 text-primary" : "border-border hover:border-primary/50"}`,
						children: [/* @__PURE__ */ jsxDEV("span", {
							className: "mr-1 font-mono text-xs text-primary",
							children: c.number
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 126,
							columnNumber: 21
						}, this), c.title]
					}, c.slug, true, {
						fileName: _jsxFileName,
						lineNumber: 125,
						columnNumber: 35
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 124,
					columnNumber: 15
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 122,
					columnNumber: 13
				}, this), /* @__PURE__ */ jsxDEV("div", {
					className: "rounded-2xl border border-border bg-card p-6 sm:p-8",
					children: /* @__PURE__ */ jsxDEV(ContactForm, {
						source: "enroll",
						topic: requestSlug ? COURSES.find((c) => c.slug === requestSlug)?.title ?? void 0 : void 0
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 132,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 131,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 121,
				columnNumber: 11
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 120,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 119,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
//#endregion
export { TrainingPage as component };
