import { t as cn } from "./utils-CW_M51bF.js";
import { jsxDEV } from "react/jsx-dev-runtime";
import { motion } from "framer-motion";
//#region src/components/site/Section.tsx
var _jsxFileName = "D:/SCS projects/teksys-new-bharat/src/components/site/Section.tsx";
function Section({ children, className, id }) {
	return /* @__PURE__ */ jsxDEV("section", {
		id,
		className: cn("mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", className),
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 15,
		columnNumber: 5
	}, this);
}
function SectionEyebrow({ children }) {
	return /* @__PURE__ */ jsxDEV("span", {
		className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
		children: [/* @__PURE__ */ jsxDEV("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 24,
			columnNumber: 7
		}, this), children]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 23,
		columnNumber: 5
	}, this);
}
function SectionTitle({ eyebrow, title, description, align = "left" }) {
	return /* @__PURE__ */ jsxDEV(motion.div, {
		initial: {
			opacity: 0,
			y: 16
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
		className: cn("max-w-3xl", align === "center" && "mx-auto text-center"),
		children: [
			eyebrow ? /* @__PURE__ */ jsxDEV(SectionEyebrow, { children: eyebrow }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 18
			}, this) : null,
			/* @__PURE__ */ jsxDEV("h2", {
				className: "mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl",
				children: title
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 7
			}, this),
			description ? /* @__PURE__ */ jsxDEV("p", {
				className: "mt-4 text-base text-muted-foreground sm:text-lg",
				children: description
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 9
			}, this) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 42,
		columnNumber: 5
	}, this);
}
//#endregion
export { SectionEyebrow as n, SectionTitle as r, Section as t };
