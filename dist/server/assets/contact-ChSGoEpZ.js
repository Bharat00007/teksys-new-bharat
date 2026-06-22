import { t as ContactForm } from "./ContactForm-BsqcveEg.js";
import { a as SITE } from "./utils-CW_M51bF.js";
import { r as SectionTitle, t as Section } from "./Section-DnuYYV5j.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Globe2, Mail, MapPin, Phone } from "lucide-react";
//#region src/routes/_site/contact.tsx?tsr-split=component
function ContactPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("section", {
		className: "bg-hero-radial text-white",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("h1", {
				className: "text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl",
				children: ["Let's build your next ", /* @__PURE__ */ jsx("span", {
					className: "text-gradient-brand",
					children: "semiconductor program"
				})]
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-5 max-w-2xl text-white/75",
				children: "Reach our engineering team to discuss services, partnerships or training enrolments. We typically respond within 1–2 business days."
			})]
		})
	}), /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", {
		className: "grid gap-10 lg:grid-cols-5",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "lg:col-span-2",
			children: [
				/* @__PURE__ */ jsx(SectionTitle, {
					eyebrow: "Get in touch",
					title: "Talk to TEKSYS"
				}),
				/* @__PURE__ */ jsxs("ul", {
					className: "mt-8 space-y-5",
					children: [
						/* @__PURE__ */ jsxs("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground",
								children: /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-xs uppercase tracking-widest text-muted-foreground",
								children: "Phone"
							}), /* @__PURE__ */ jsx("a", {
								href: SITE.phoneHref,
								className: "text-base font-semibold hover:text-primary",
								children: SITE.phone
							})] })]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground",
								children: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-xs uppercase tracking-widest text-muted-foreground",
								children: "Email"
							}), /* @__PURE__ */ jsx("a", {
								href: `mailto:${SITE.email}`,
								className: "text-base font-semibold hover:text-primary",
								children: SITE.email
							})] })]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground",
								children: /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" })
							}), /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-xs uppercase tracking-widest text-muted-foreground",
									children: "Offices"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-base font-semibold",
									children: "India · Singapore · USA"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm text-muted-foreground",
									children: "Serving clients globally"
								})
							] })]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground",
								children: /* @__PURE__ */ jsx(Globe2, { className: "h-4 w-4" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-xs uppercase tracking-widest text-muted-foreground",
								children: "Online"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-base font-semibold",
								children: "Teksys Services"
							})] })]
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-8 overflow-hidden rounded-2xl border border-border bg-secondary/40",
					children: /* @__PURE__ */ jsx("div", {
						className: "relative h-64 w-full",
						children: /* @__PURE__ */ jsx("iframe", {
							title: "TEKSYS office location",
							src: "https://www.google.com/maps?q=Bengaluru%2C+India&output=embed",
							className: "absolute inset-0 h-full w-full",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						})
					})
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "lg:col-span-3",
			children: /* @__PURE__ */ jsx("div", {
				className: "rounded-3xl border border-border bg-card p-6 sm:p-8",
				children: /* @__PURE__ */ jsx(ContactForm, {
					source: "contact",
					title: "Send us a message"
				})
			})
		})]
	}) })] });
}
//#endregion
export { ContactPage as component };
