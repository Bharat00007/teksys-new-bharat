import { a as SITE } from "./utils-CW_M51bF.js";
import { t as Section } from "./Section-DnuYYV5j.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/_site/legal.tsx?tsr-split=component
function LegalPage() {
	return /* @__PURE__ */ jsxs(Section, {
		className: "prose-headings:scroll-mt-24",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "text-4xl font-bold tracking-tight",
				children: "Legal"
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "mt-3 max-w-2xl text-muted-foreground",
				children: [
					"Summary policies for ",
					SITE.legalName,
					". For specific questions, contact",
					" ",
					/* @__PURE__ */ jsx("a", {
						className: "text-primary underline",
						href: `mailto:${SITE.email}`,
						children: SITE.email
					}),
					"."
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-10 space-y-12",
				children: [
					/* @__PURE__ */ jsxs("section", {
						id: "privacy",
						className: "scroll-mt-24",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-bold",
							children: "Privacy Policy"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-3 text-muted-foreground",
							children: "We collect only the information you provide via our forms (name, email, phone, company and message) to respond to your enquiry, deliver requested services and improve our communications. We do not sell your information. Submissions are stored securely and retained only as long as needed for the stated purpose."
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "terms",
						className: "scroll-mt-24",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-bold",
							children: "Terms of Service"
						}), /* @__PURE__ */ jsxs("p", {
							className: "mt-3 text-muted-foreground",
							children: [
								"Content on this site is provided for general information about TEKSYS services and training programs. Engagement terms for consulting, MMIC design or training are governed by individual agreements signed between ",
								SITE.legalName,
								" and its clients."
							]
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "cookies",
						className: "scroll-mt-24",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-bold",
							children: "Cookie Policy"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-3 text-muted-foreground",
							children: "This website uses only essential cookies required to operate the site. We do not use third-party advertising cookies. Embedded maps may set cookies governed by their respective providers."
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { LegalPage as component };
