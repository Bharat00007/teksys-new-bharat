import { a as SITE, i as SERVICES, r as NAV, t as cn } from "./utils-CW_M51bF.js";
import { useEffect, useState } from "react";
import { Link, Outlet } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ChevronDown, Linkedin, Mail, MapPin, Menu, Phone, Twitter, X, Youtube } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
//#region src/assets/teksys-logo.png
var teksys_logo_default = "/assets/teksys-logo-iaMggPkv.png";
//#endregion
//#region src/components/site/Navbar.tsx
function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs("header", {
		className: cn("sticky top-0 z-50 w-full transition-all duration-300", scrolled ? "border-b border-border bg-background/95 shadow-sm backdrop-blur-xl" : "bg-background"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex flex-col leading-none",
					"aria-label": SITE.name,
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "font-display text-3xl font-extrabold tracking-tight text-primary",
							children: ["TEKSYS", /* @__PURE__ */ jsx("sup", {
								className: "ml-0.5 text-[10px] font-bold",
								children: "®"
							})]
						}),
						/* @__PURE__ */ jsx("span", {
							className: "mt-1 text-[10px] font-semibold tracking-[0.18em] text-primary/80",
							children: "INNOVATE | TRAIN | TRANSFORM"
						}),
						/* @__PURE__ */ jsx("img", {
							src: teksys_logo_default,
							alt: "",
							className: "hidden",
							width: 1,
							height: 1,
							"aria-hidden": true
						})
					]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden items-center gap-8 md:flex",
					"aria-label": "Primary",
					children: NAV.map((item) => {
						const isServices = item.label === "Services";
						return /* @__PURE__ */ jsxs(Link, {
							to: item.to,
							className: "group relative inline-flex items-center gap-1 py-2 text-[15px] font-medium text-foreground/80 transition-colors hover:text-primary",
							activeProps: { className: "!text-primary" },
							activeOptions: { exact: item.to === "/" },
							children: [
								item.label,
								isServices && /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5" }),
								/* @__PURE__ */ jsx("span", { className: "absolute -bottom-0.5 left-0 h-0.5 w-full origin-center scale-x-0 bg-primary transition-transform group-[.active]:scale-x-100 group-aria-[current=page]:scale-x-100" })
							]
						}, item.to);
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hidden md:block",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/contact",
						className: "inline-flex items-center gap-1.5 rounded-md bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-indigo-glow",
						children: "Get In Touch"
					})
				}),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					className: "inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden",
					onClick: () => setOpen((v) => !v),
					"aria-label": "Toggle menu",
					"aria-expanded": open,
					children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
				})
			]
		}), /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(motion.div, {
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
			children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-1 px-4 py-3",
				children: [NAV.map((item) => /* @__PURE__ */ jsx(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					className: "block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent",
					children: item.label
				}, item.to)), /* @__PURE__ */ jsx(Link, {
					to: "/contact",
					onClick: () => setOpen(false),
					className: "mt-2 block rounded-md bg-primary px-3 py-2 text-center text-base font-semibold text-primary-foreground",
					children: "Get in touch"
				})]
			})
		}) })]
	});
}
//#endregion
//#region src/components/site/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "mt-24 border-t border-border bg-ink text-white",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("div", {
						className: "inline-flex items-center rounded-lg bg-white px-3 py-2",
						children: /* @__PURE__ */ jsx("img", {
							src: teksys_logo_default,
							alt: "TEKSYS",
							className: "h-7 w-auto",
							width: 120,
							height: 28
						})
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-sm text-white/70",
						children: "Supporting industry, academia, startups and government through technology computing, engineering services and semiconductor workforce development."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-5 flex gap-3",
						children: [
							/* @__PURE__ */ jsx("a", {
								href: "https://www.linkedin.com/company/teksys-services-pvt-ltd/",
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": "LinkedIn",
								className: "rounded-md border border-white/15 p-2 text-white/80 hover:bg-white/10",
								children: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#",
								"aria-label": "X / Twitter",
								className: "rounded-md border border-white/15 p-2 text-white/80 hover:bg-white/10",
								children: /* @__PURE__ */ jsx(Twitter, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ jsx("a", {
								href: "https://www.youtube.com/channel/UCtvoylxWlf-_TsyQ41x7psA",
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": "YouTube",
								className: "rounded-md border border-white/15 p-2 text-white/80 hover:bg-white/10",
								children: /* @__PURE__ */ jsx(Youtube, { className: "h-4 w-4" })
							})
						]
					})
				] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
					className: "text-sm font-semibold uppercase tracking-wider text-white",
					children: "Quick Links"
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: NAV.map((n) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
						to: n.to,
						className: "text-white/70 hover:text-white",
						children: n.label
					}) }, n.to))
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
					className: "text-sm font-semibold uppercase tracking-wider text-white",
					children: "Services"
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: SERVICES.slice(0, 6).map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
						to: "/services",
						hash: s.slug,
						className: "text-white/70 hover:text-white",
						children: s.title
					}) }, s.slug))
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
					className: "text-sm font-semibold uppercase tracking-wider text-white",
					children: "Get in touch"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 space-y-3 text-sm text-white/70",
					children: [
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ jsx(Phone, { className: "mt-0.5 h-4 w-4 text-indigo-glow" }), /* @__PURE__ */ jsx("a", {
								href: SITE.phoneHref,
								className: "hover:text-white",
								children: SITE.phone
							})]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ jsx(Mail, { className: "mt-0.5 h-4 w-4 text-indigo-glow" }), /* @__PURE__ */ jsx("a", {
								href: `mailto:${SITE.email}`,
								className: "hover:text-white",
								children: SITE.email
							})]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ jsx(MapPin, { className: "mt-0.5 h-4 w-4 text-indigo-glow" }), /* @__PURE__ */ jsxs("span", { children: [
								"India · Singapore · USA",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "text-white/50",
									children: "Serving clients globally"
								})
							] })]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					SITE.legalName,
					" All rights reserved."
				] }), /* @__PURE__ */ jsxs("div", {
					className: "flex gap-5",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/legal",
							hash: "privacy",
							className: "hover:text-white",
							children: "Privacy Policy"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/legal",
							hash: "terms",
							className: "hover:text-white",
							children: "Terms of Service"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/legal",
							hash: "cookies",
							className: "hover:text-white",
							children: "Cookie Policy"
						})
					]
				})]
			})
		})]
	});
}
//#endregion
//#region src/components/site/TopBar.tsx
function TopBar() {
	return /* @__PURE__ */ jsx("div", {
		className: "hidden w-full bg-ink text-white md:block",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-10 max-w-7xl items-center justify-between px-4 text-xs sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-6",
				children: [
					/* @__PURE__ */ jsxs("a", {
						href: SITE.phoneHref,
						className: "inline-flex items-center gap-2 hover:text-indigo-glow",
						children: [
							/* @__PURE__ */ jsx(Phone, { className: "h-3.5 w-3.5" }),
							" ",
							SITE.phone
						]
					}),
					/* @__PURE__ */ jsxs("a", {
						href: `mailto:${SITE.email}`,
						className: "inline-flex items-center gap-2 hover:text-indigo-glow",
						children: [
							/* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5" }),
							" ",
							SITE.email
						]
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5" }), " India | Singapore"]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ jsx("a", {
					href: "https://www.linkedin.com/company/teksys-services-pvt-ltd/",
					target: "_blank",
					rel: "noopener noreferrer",
					"aria-label": "LinkedIn",
					className: "grid h-6 w-6 place-items-center rounded-sm bg-primary text-white hover:bg-indigo-glow",
					children: /* @__PURE__ */ jsx(Linkedin, { className: "h-3.5 w-3.5" })
				}), /* @__PURE__ */ jsx("a", {
					href: "https://www.youtube.com/channel/UCtvoylxWlf-_TsyQ41x7psA",
					target: "_blank",
					rel: "noopener noreferrer",
					"aria-label": "YouTube",
					className: "grid h-6 w-6 place-items-center rounded-sm bg-primary text-white hover:bg-indigo-glow",
					children: /* @__PURE__ */ jsx(Youtube, { className: "h-3.5 w-3.5" })
				})]
			})]
		})
	});
}
//#endregion
//#region src/routes/_site.tsx?tsr-split=component
function SiteLayout() {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ jsx(TopBar, {}),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx("main", {
				className: "flex-1",
				children: /* @__PURE__ */ jsx(Outlet, {})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { SiteLayout as component };
