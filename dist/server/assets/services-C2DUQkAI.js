import { i as SERVICES } from "./utils-CW_M51bF.js";
import { t as Section } from "./Section-CfANjmWP.js";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Cpu, GraduationCap, Layers, Microscope, Wrench, Zap } from "lucide-react";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import { motion } from "framer-motion";
//#region src/routes/_site/services.tsx?tsr-split=component
var _jsxFileName = "D:/SCS projects/teksys-new-bharat/src/routes/_site/services.tsx?tsr-split=component";
var ICONS = {
	Cpu,
	Zap,
	Layers,
	GraduationCap,
	Wrench,
	Microscope
};
function ServicesPage() {
	return /* @__PURE__ */ jsxDEV(Fragment, { children: [/* @__PURE__ */ jsxDEV("section", {
		className: "bg-hero-radial text-white",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxDEV("h1", {
				className: "text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl",
				children: [
					"Engineering services for ",
					/* @__PURE__ */ jsxDEV("span", {
						className: "text-gradient-brand",
						children: "advanced semiconductor"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 19,
						columnNumber: 38
					}, this),
					" programs"
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 11
			}, this), /* @__PURE__ */ jsxDEV("p", {
				className: "mt-5 max-w-2xl text-white/75",
				children: "From device-level consulting to fabless MMIC tape-out and workforce development — TEKSYS provides the engineering depth your roadmap needs."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 21,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 17,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 7
	}, this), /* @__PURE__ */ jsxDEV(Section, { children: /* @__PURE__ */ jsxDEV("div", {
		className: "space-y-12",
		children: SERVICES.map((s, i) => {
			const Icon = ICONS[s.icon];
			const reverse = i % 2 === 1;
			return /* @__PURE__ */ jsxDEV(motion.div, {
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
				children: [/* @__PURE__ */ jsxDEV("div", {
					className: "overflow-hidden rounded-3xl border border-border",
					children: /* @__PURE__ */ jsxDEV("img", {
						src: s.image,
						alt: s.title,
						className: "h-full w-full object-cover",
						loading: "lazy"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 19
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 45,
					columnNumber: 17
				}, this), /* @__PURE__ */ jsxDEV("div", { children: [
					/* @__PURE__ */ jsxDEV("div", {
						className: "flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground",
						children: /* @__PURE__ */ jsxDEV(Icon, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 21
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 49,
						columnNumber: 19
					}, this),
					/* @__PURE__ */ jsxDEV("h2", {
						className: "mt-4 text-2xl font-bold sm:text-3xl",
						children: s.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 19
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "mt-3 text-muted-foreground",
						children: s.summary
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 19
					}, this),
					/* @__PURE__ */ jsxDEV("ul", {
						className: "mt-5 space-y-2",
						children: s.bullets.map((b) => /* @__PURE__ */ jsxDEV("li", {
							className: "flex gap-2 text-sm",
							children: [
								/* @__PURE__ */ jsxDEV(CheckCircle2, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 56,
									columnNumber: 25
								}, this),
								" ",
								b
							]
						}, b, true, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 41
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 19
					}, this),
					/* @__PURE__ */ jsxDEV(Link, {
						to: "/contact",
						className: "mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-indigo-glow",
						children: ["Discuss this service ", /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 42
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 19
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 17
				}, this)]
			}, s.slug, true, {
				fileName: _jsxFileName,
				lineNumber: 33,
				columnNumber: 18
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 29,
		columnNumber: 9
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 28,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 15,
		columnNumber: 10
	}, this);
}
//#endregion
export { ServicesPage as component };
