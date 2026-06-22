import { i as SERVICES } from "./utils-CW_M51bF.js";
import { t as Section } from "./Section-DnuYYV5j.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, CheckCircle2, Cpu, GraduationCap, Layers, Microscope, Wrench, Zap } from "lucide-react";
import { motion } from "framer-motion";
//#region src/routes/_site/services.tsx?tsr-split=component
var ICONS = {
	Cpu,
	Zap,
	Layers,
	GraduationCap,
	Wrench,
	Microscope
};
function ServicesPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("section", {
		className: "bg-hero-radial text-white",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("h1", {
				className: "text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl",
				children: [
					"Engineering services for ",
					/* @__PURE__ */ jsx("span", {
						className: "text-gradient-brand",
						children: "advanced semiconductor"
					}),
					" programs"
				]
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-5 max-w-2xl text-white/75",
				children: "From device-level consulting to fabless MMIC tape-out and workforce development — TEKSYS provides the engineering depth your roadmap needs."
			})]
		})
	}), /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("div", {
		className: "space-y-12",
		children: SERVICES.map((s, i) => {
			const Icon = ICONS[s.icon];
			const reverse = i % 2 === 1;
			return /* @__PURE__ */ jsxs(motion.div, {
				id: s.slug,
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: { duration: .5 },
				className: `grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`,
				children: [/* @__PURE__ */ jsx("div", {
					className: "overflow-hidden rounded-3xl border border-border",
					children: /* @__PURE__ */ jsx("img", {
						src: s.image,
						alt: s.title,
						className: "h-full w-full object-cover",
						loading: "lazy"
					})
				}), /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("div", {
						className: "flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground",
						children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-4 text-2xl font-bold sm:text-3xl",
						children: s.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 text-muted-foreground",
						children: s.summary
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "mt-5 space-y-2",
						children: s.bullets.map((b) => /* @__PURE__ */ jsxs("li", {
							className: "flex gap-2 text-sm",
							children: [
								/* @__PURE__ */ jsx(CheckCircle2, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
								" ",
								b
							]
						}, b))
					}),
					/* @__PURE__ */ jsxs(Link, {
						to: "/contact",
						className: "mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-indigo-glow",
						children: ["Discuss this service ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
					})
				] })]
			}, s.slug);
		})
	}) })] });
}
//#endregion
export { ServicesPage as component };
