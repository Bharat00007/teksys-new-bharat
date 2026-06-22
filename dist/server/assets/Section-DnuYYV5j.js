import { t as cn } from "./utils-CW_M51bF.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
//#region src/components/site/Section.tsx
function Section({ children, className, id }) {
	return /* @__PURE__ */ jsx("section", {
		id,
		className: cn("mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", className),
		children
	});
}
function SectionEyebrow({ children }) {
	return /* @__PURE__ */ jsxs("span", {
		className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
		children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), children]
	});
}
function SectionTitle({ eyebrow, title, description, align = "left" }) {
	return /* @__PURE__ */ jsxs(motion.div, {
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
			eyebrow ? /* @__PURE__ */ jsx(SectionEyebrow, { children: eyebrow }) : null,
			/* @__PURE__ */ jsx("h2", {
				className: "mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl",
				children: title
			}),
			description ? /* @__PURE__ */ jsx("p", {
				className: "mt-4 text-base text-muted-foreground sm:text-lg",
				children: description
			}) : null
		]
	});
}
//#endregion
export { SectionEyebrow as n, SectionTitle as r, Section as t };
