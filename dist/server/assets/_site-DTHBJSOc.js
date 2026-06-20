import { a as SITE, i as SERVICES, r as NAV, t as cn } from "./utils-CW_M51bF.js";
import { useEffect, useState } from "react";
import { Link, Outlet } from "@tanstack/react-router";
import { ChevronDown, Linkedin, Mail, MapPin, Menu, Phone, Twitter, X, Youtube } from "lucide-react";
import { jsxDEV } from "react/jsx-dev-runtime";
import { AnimatePresence, motion } from "framer-motion";
//#region src/assets/teksys-logo.png
var teksys_logo_default = "/assets/teksys-logo-iaMggPkv.png";
//#endregion
//#region src/components/site/Navbar.tsx
var _jsxFileName$3 = "D:/SCS projects/teksys-vision-craft/src/components/site/Navbar.tsx";
function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxDEV("header", {
		className: cn("sticky top-0 z-50 w-full transition-all duration-300", scrolled ? "border-b border-border bg-background/95 shadow-sm backdrop-blur-xl" : "bg-background"),
		children: [/* @__PURE__ */ jsxDEV("div", {
			className: "mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxDEV(Link, {
					to: "/",
					className: "flex flex-col leading-none",
					"aria-label": SITE.name,
					children: [
						/* @__PURE__ */ jsxDEV("span", {
							className: "font-display text-3xl font-extrabold tracking-tight text-primary",
							children: ["TEKSYS", /* @__PURE__ */ jsxDEV("sup", {
								className: "ml-0.5 text-[10px] font-bold",
								children: "®"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 32,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 31,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("span", {
							className: "mt-1 text-[10px] font-semibold tracking-[0.18em] text-primary/80",
							children: "INNOVATE | TRAIN | TRANSFORM"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 34,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("img", {
							src: teksys_logo_default,
							alt: "",
							className: "hidden",
							width: 1,
							height: 1,
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 37,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 30,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("nav", {
					className: "hidden items-center gap-8 md:flex",
					"aria-label": "Primary",
					children: NAV.map((item) => {
						const isServices = item.label === "Services";
						return /* @__PURE__ */ jsxDEV(Link, {
							to: item.to,
							className: "group relative inline-flex items-center gap-1 py-2 text-[15px] font-medium text-foreground/80 transition-colors hover:text-primary",
							activeProps: { className: "!text-primary" },
							activeOptions: { exact: item.to === "/" },
							children: [
								item.label,
								isServices && /* @__PURE__ */ jsxDEV(ChevronDown, { className: "h-3.5 w-3.5" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 52,
									columnNumber: 32
								}, this),
								/* @__PURE__ */ jsxDEV("span", { className: "absolute -bottom-0.5 left-0 h-0.5 w-full origin-center scale-x-0 bg-primary transition-transform group-[.active]:scale-x-100 group-aria-[current=page]:scale-x-100" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 53,
									columnNumber: 17
								}, this)
							]
						}, item.to, true, {
							fileName: _jsxFileName$3,
							lineNumber: 44,
							columnNumber: 15
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 40,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", {
					className: "hidden md:block",
					children: /* @__PURE__ */ jsxDEV(Link, {
						to: "/contact",
						className: "inline-flex items-center gap-1.5 rounded-md bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-indigo-glow",
						children: "Get In Touch"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 60,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 59,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("button", {
					type: "button",
					className: "inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden",
					onClick: () => setOpen((v) => !v),
					"aria-label": "Toggle menu",
					"aria-expanded": open,
					children: open ? /* @__PURE__ */ jsxDEV(X, { className: "h-5 w-5" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 75,
						columnNumber: 19
					}, this) : /* @__PURE__ */ jsxDEV(Menu, { className: "h-5 w-5" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 75,
						columnNumber: 47
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 68,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 29,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV(AnimatePresence, { children: open && /* @__PURE__ */ jsxDEV(motion.div, {
			initial: {
				height: 0,
				opacity: 0
			},
			animate: {
				height: "auto",
				opacity: 1
			},
			exit: {
				height: 0,
				opacity: 0
			},
			className: "overflow-hidden border-t border-border/60 bg-background md:hidden",
			children: /* @__PURE__ */ jsxDEV("div", {
				className: "space-y-1 px-4 py-3",
				children: [NAV.map((item) => /* @__PURE__ */ jsxDEV(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					className: "block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent",
					children: item.label
				}, item.to, false, {
					fileName: _jsxFileName$3,
					lineNumber: 89,
					columnNumber: 17
				}, this)), /* @__PURE__ */ jsxDEV(Link, {
					to: "/contact",
					onClick: () => setOpen(false),
					className: "mt-2 block rounded-md bg-primary px-3 py-2 text-center text-base font-semibold text-primary-foreground",
					children: "Get in touch"
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 98,
					columnNumber: 15
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 87,
				columnNumber: 13
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 81,
			columnNumber: 11
		}, this) }, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 79,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 21,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/components/site/Footer.tsx
var _jsxFileName$2 = "D:/SCS projects/teksys-vision-craft/src/components/site/Footer.tsx";
function Footer() {
	return /* @__PURE__ */ jsxDEV("footer", {
		className: "mt-24 border-t border-border bg-ink text-white",
		children: [/* @__PURE__ */ jsxDEV("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8",
			children: [
				/* @__PURE__ */ jsxDEV("div", { children: [
					/* @__PURE__ */ jsxDEV("div", {
						className: "inline-flex items-center rounded-lg bg-white px-3 py-2",
						children: /* @__PURE__ */ jsxDEV("img", {
							src: teksys_logo_default,
							alt: "TEKSYS",
							className: "h-7 w-auto",
							width: 120,
							height: 28
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 13,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 12,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "mt-4 text-sm text-white/70",
						children: "Supporting industry, academia, startups and government through technology computing, engineering services and semiconductor workforce development."
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 15,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("div", {
						className: "mt-5 flex gap-3",
						children: [
							/* @__PURE__ */ jsxDEV("a", {
								href: "https://www.linkedin.com/company/teksys-services-pvt-ltd/",
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": "LinkedIn",
								className: "rounded-md border border-white/15 p-2 text-white/80 hover:bg-white/10",
								children: /* @__PURE__ */ jsxDEV(Linkedin, { className: "h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 21,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 20,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("a", {
								href: "#",
								"aria-label": "X / Twitter",
								className: "rounded-md border border-white/15 p-2 text-white/80 hover:bg-white/10",
								children: /* @__PURE__ */ jsxDEV(Twitter, { className: "h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 24,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 23,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("a", {
								href: "https://www.youtube.com/channel/UCtvoylxWlf-_TsyQ41x7psA",
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": "YouTube",
								className: "rounded-md border border-white/15 p-2 text-white/80 hover:bg-white/10",
								children: /* @__PURE__ */ jsxDEV(Youtube, { className: "h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 27,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 26,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 19,
						columnNumber: 11
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 11,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("h3", {
					className: "text-sm font-semibold uppercase tracking-wider text-white",
					children: "Quick Links"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 33,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: NAV.map((n) => /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, {
						to: n.to,
						className: "text-white/70 hover:text-white",
						children: n.label
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 37,
						columnNumber: 17
					}, this) }, n.to, false, {
						fileName: _jsxFileName$2,
						lineNumber: 36,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 34,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 32,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("h3", {
					className: "text-sm font-semibold uppercase tracking-wider text-white",
					children: "Services"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 46,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: SERVICES.slice(0, 6).map((s) => /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, {
						to: "/services",
						hash: s.slug,
						className: "text-white/70 hover:text-white",
						children: s.title
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 50,
						columnNumber: 17
					}, this) }, s.slug, false, {
						fileName: _jsxFileName$2,
						lineNumber: 49,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 47,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 45,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("h3", {
					className: "text-sm font-semibold uppercase tracking-wider text-white",
					children: "Get in touch"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 59,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("ul", {
					className: "mt-4 space-y-3 text-sm text-white/70",
					children: [
						/* @__PURE__ */ jsxDEV("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ jsxDEV(Phone, { className: "mt-0.5 h-4 w-4 text-indigo-glow" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 62,
								columnNumber: 15
							}, this), /* @__PURE__ */ jsxDEV("a", {
								href: SITE.phoneHref,
								className: "hover:text-white",
								children: SITE.phone
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 63,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 61,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ jsxDEV(Mail, { className: "mt-0.5 h-4 w-4 text-indigo-glow" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 66,
								columnNumber: 15
							}, this), /* @__PURE__ */ jsxDEV("a", {
								href: `mailto:${SITE.email}`,
								className: "hover:text-white",
								children: SITE.email
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 67,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 65,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ jsxDEV(MapPin, { className: "mt-0.5 h-4 w-4 text-indigo-glow" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 70,
								columnNumber: 15
							}, this), /* @__PURE__ */ jsxDEV("span", { children: [
								"India · Singapore · USA",
								/* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 71,
									columnNumber: 44
								}, this),
								/* @__PURE__ */ jsxDEV("span", {
									className: "text-white/50",
									children: "Serving clients globally"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 71,
									columnNumber: 50
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 71,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 69,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 60,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 58,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 10,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ jsxDEV("div", {
				className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ jsxDEV("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					SITE.legalName,
					" All rights reserved."
				] }, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 79,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("div", {
					className: "flex gap-5",
					children: [
						/* @__PURE__ */ jsxDEV(Link, {
							to: "/legal",
							hash: "privacy",
							className: "hover:text-white",
							children: "Privacy Policy"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 81,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV(Link, {
							to: "/legal",
							hash: "terms",
							className: "hover:text-white",
							children: "Terms of Service"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 82,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV(Link, {
							to: "/legal",
							hash: "cookies",
							className: "hover:text-white",
							children: "Cookie Policy"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 83,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 80,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 78,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 77,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/components/site/TopBar.tsx
var _jsxFileName$1 = "D:/SCS projects/teksys-vision-craft/src/components/site/TopBar.tsx";
function TopBar() {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "hidden w-full bg-ink text-white md:block",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "mx-auto flex h-10 max-w-7xl items-center justify-between px-4 text-xs sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxDEV("div", {
				className: "flex items-center gap-6",
				children: [
					/* @__PURE__ */ jsxDEV("a", {
						href: SITE.phoneHref,
						className: "inline-flex items-center gap-2 hover:text-indigo-glow",
						children: [
							/* @__PURE__ */ jsxDEV(Phone, { className: "h-3.5 w-3.5" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 10,
								columnNumber: 13
							}, this),
							" ",
							SITE.phone
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 9,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("a", {
						href: `mailto:${SITE.email}`,
						className: "inline-flex items-center gap-2 hover:text-indigo-glow",
						children: [
							/* @__PURE__ */ jsxDEV(Mail, { className: "h-3.5 w-3.5" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 13,
								columnNumber: 13
							}, this),
							" ",
							SITE.email
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 12,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ jsxDEV(MapPin, { className: "h-3.5 w-3.5" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 16,
							columnNumber: 13
						}, this), " India | Singapore"]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 15,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 8,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ jsxDEV("a", {
					href: "https://www.linkedin.com/company/teksys-services-pvt-ltd/",
					target: "_blank",
					rel: "noopener noreferrer",
					"aria-label": "LinkedIn",
					className: "grid h-6 w-6 place-items-center rounded-sm bg-primary text-white hover:bg-indigo-glow",
					children: /* @__PURE__ */ jsxDEV(Linkedin, { className: "h-3.5 w-3.5" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 27,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 20,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("a", {
					href: "https://www.youtube.com/channel/UCtvoylxWlf-_TsyQ41x7psA",
					target: "_blank",
					rel: "noopener noreferrer",
					"aria-label": "YouTube",
					className: "grid h-6 w-6 place-items-center rounded-sm bg-primary text-white hover:bg-indigo-glow",
					children: /* @__PURE__ */ jsxDEV(Youtube, { className: "h-3.5 w-3.5" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 36,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 29,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 19,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 7,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/routes/_site.tsx?tsr-split=component
var _jsxFileName = "D:/SCS projects/teksys-vision-craft/src/routes/_site.tsx?tsr-split=component";
function SiteLayout() {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ jsxDEV(TopBar, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 7,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV(Navbar, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 8,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("main", {
				className: "flex-1",
				children: /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 10,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 9,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 6,
		columnNumber: 10
	}, this);
}
//#endregion
export { SiteLayout as component };
