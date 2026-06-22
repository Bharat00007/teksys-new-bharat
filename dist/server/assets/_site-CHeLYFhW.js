import { a as SITE, i as SERVICES, n as COURSES, o as service_rf_default, s as service_gan_default } from "./utils-CW_M51bF.js";
import { t as dr_kumud_ranjan_default } from "./dr-kumud-ranjan-D-VTKWuw.js";
import { n as SectionEyebrow, r as SectionTitle, t as Section } from "./Section-DnuYYV5j.js";
import { t as training_classroom_default } from "./training-classroom-CMYo-9cA.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, CheckCircle2, ClipboardList, Cpu, Factory, Globe2, GraduationCap, Handshake, Hexagon, Layers, Microscope, MonitorPlay, Network, Radio, ShieldCheck, Wrench, Zap } from "lucide-react";
import { motion } from "framer-motion";
//#region src/assets/hero-semiconductor.jpg
var hero_semiconductor_default = "/assets/hero-semiconductor-CD8BXxgj.jpg";
//#endregion
//#region src/assets/partner-techdatax.jpg
var partner_techdatax_default = "/assets/partner-techdatax-QLzUCeTu.jpg";
//#endregion
//#region src/assets/partner-aligned-test.jpg
var partner_aligned_test_default = "/assets/partner-aligned-test-Bb4Tl1tN.jpg";
//#endregion
//#region src/assets/partner-semicom.jpg
var partner_semicom_default = "/assets/partner-semicom-TSeYeHe3.jpg";
//#endregion
//#region src/routes/_site/index.tsx?tsr-split=component
var ICONS = {
	Cpu,
	Zap,
	Layers,
	GraduationCap,
	Wrench,
	Microscope
};
function Home() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Hero, {}),
		/* @__PURE__ */ jsx(PillarGrid, {}),
		/* @__PURE__ */ jsx(ServicesPreview, {}),
		/* @__PURE__ */ jsx(TrainingPreview, {}),
		/* @__PURE__ */ jsx(AdvisorBlock, {}),
		/* @__PURE__ */ jsx(Partners, {}),
		/* @__PURE__ */ jsx(CTA, {})
	] });
}
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative bg-background",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-20 lg:pt-20",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col justify-center",
				children: [/* @__PURE__ */ jsx(motion.h1, {
					initial: {
						opacity: 0,
						y: 14
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .6 },
					className: "text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem]",
					children: "Semiconductor, Defence & Advance Technology Solutions"
				}), /* @__PURE__ */ jsxs(motion.p, {
					initial: {
						opacity: 0,
						y: 14
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						delay: .1
					},
					className: "mt-8 max-w-xl text-base leading-relaxed text-primary",
					children: [
						"Supporting Industry, Academic, Startup & Government Organization Through Technology",
						/* @__PURE__ */ jsx("br", {}),
						"Computing, Engineering Services & Semiconductor Workforce Development"
					]
				})]
			}), /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					scale: .97
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: {
					duration: .7,
					delay: .15
				},
				className: "grid grid-cols-2 gap-4",
				children: [
					/* @__PURE__ */ jsx(HeroCard, {
						img: service_gan_default,
						eyebrow: "GaN Technology",
						title: "Consulting",
						position: "top",
						className: "aspect-[4/3]"
					}),
					/* @__PURE__ */ jsx(HeroCard, {
						img: service_rf_default,
						title: "fabless & MMIC design and Development",
						caption: "Semiconductor Fabless & MMIC Design and Development",
						className: "aspect-[4/3]"
					}),
					/* @__PURE__ */ jsx(HeroCard, {
						img: training_classroom_default,
						title: "semiconductor skill training on GaN and SiC +",
						className: "col-span-2 aspect-[16/7]"
					})
				]
			})]
		}), /* @__PURE__ */ jsx("img", {
			src: hero_semiconductor_default,
			alt: "",
			className: "hidden",
			"aria-hidden": true
		})]
	});
}
function HeroCard({ img, eyebrow, title, caption, position = "bottom", className = "" }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `group relative overflow-hidden rounded-md shadow-md ${className}`,
		children: [
			/* @__PURE__ */ jsx("img", {
				src: img,
				alt: title,
				className: "absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" }),
			/* @__PURE__ */ jsxs("div", {
				className: `absolute inset-x-0 ${position === "top" ? "top-0 p-4" : "bottom-0 p-4"} text-white`,
				children: [
					eyebrow && /* @__PURE__ */ jsx("p", {
						className: "text-lg font-bold leading-tight",
						children: eyebrow
					}),
					/* @__PURE__ */ jsx("p", {
						className: `${eyebrow ? "text-sm" : "text-lg font-bold leading-tight"}`,
						children: title
					}),
					caption && /* @__PURE__ */ jsx("p", {
						className: "mt-1 text-[11px] leading-snug text-white/80",
						children: caption
					})
				]
			})
		]
	});
}
var PILL_ITEMS = [
	{
		n: "01",
		label: "Semiconductor Fundamentals",
		icon: Cpu,
		color: "bg-amber-200 text-amber-900",
		num: "bg-amber-500"
	},
	{
		n: "02",
		label: "GaN & SiC Technologies",
		icon: Hexagon,
		color: "bg-emerald-200 text-emerald-900",
		num: "bg-emerald-600"
	},
	{
		n: "03",
		label: "Device Simulation",
		icon: MonitorPlay,
		color: "bg-cyan-200 text-cyan-900",
		num: "bg-cyan-600"
	},
	{
		n: "04",
		label: "RF & GaN Applications",
		icon: Radio,
		color: "bg-blue-200 text-blue-900",
		num: "bg-blue-600"
	},
	{
		n: "05",
		label: "SiC / GaN Power Electronics",
		icon: Network,
		color: "bg-fuchsia-200 text-fuchsia-900",
		num: "bg-fuchsia-500"
	},
	{
		n: "06",
		label: "Fabless Design Flow",
		icon: Layers,
		color: "bg-orange-200 text-orange-900",
		num: "bg-orange-500"
	},
	{
		n: "07",
		label: "Mini Project & Presentation",
		icon: ClipboardList,
		color: "bg-pink-200 text-pink-900",
		num: "bg-pink-500"
	},
	{
		n: "08",
		label: "Fabless GaN MMIC",
		icon: Cpu,
		color: "bg-teal-200 text-teal-900",
		num: "bg-teal-600"
	},
	{
		n: "09",
		label: "GaN Technology Partner",
		icon: Handshake,
		color: "bg-lime-200 text-lime-900",
		num: "bg-lime-600"
	},
	{
		n: "10",
		label: "OSAT Lab and Process Lab",
		icon: Factory,
		color: "bg-violet-200 text-violet-900",
		num: "bg-violet-600"
	}
];
function PillarGrid() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-background pb-16",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 lg:gap-2",
				children: PILL_ITEMS.map((p, i) => {
					const Icon = p.icon;
					return /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .4,
							delay: i * .04
						},
						className: `relative flex flex-col items-center rounded-2xl px-2 pb-3 pt-5 text-center ${p.color}`,
						children: [
							/* @__PURE__ */ jsx("span", {
								className: `absolute -top-3 grid h-7 w-7 place-items-center rounded-full text-xs font-bold text-white ${p.num}`,
								children: p.n
							}),
							/* @__PURE__ */ jsx("div", {
								className: "my-2 grid h-12 w-12 place-items-center rounded-lg bg-white/70",
								children: /* @__PURE__ */ jsx(Icon, {
									className: "h-6 w-6",
									strokeWidth: 1.8
								})
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-[11px] font-semibold leading-tight",
								children: p.label
							})
						]
					}, p.n);
				})
			})
		})
	});
}
function ServicesPreview() {
	return /* @__PURE__ */ jsxs(Section, { children: [/* @__PURE__ */ jsx(SectionTitle, {
		eyebrow: "What we do",
		title: /* @__PURE__ */ jsxs(Fragment, { children: [
			"End-to-end semiconductor &",
			/* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
			" deep-tech engineering"
		] }),
		description: "From GaN device consulting to MMIC tape-out and workforce training — we partner with engineering teams to deliver advanced technology programs."
	}), /* @__PURE__ */ jsx("div", {
		className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
		children: SERVICES.map((s, i) => {
			const Icon = ICONS[s.icon];
			return /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 24
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-60px"
				},
				transition: {
					duration: .45,
					delay: i * .05
				},
				className: "group card-elevated rounded-2xl p-6",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground",
						children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "mt-5 text-lg font-semibold",
						children: s.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: s.summary
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "mt-4 space-y-1.5",
						children: s.bullets.map((b) => /* @__PURE__ */ jsxs("li", {
							className: "flex gap-2 text-sm text-foreground/80",
							children: [
								/* @__PURE__ */ jsx(CheckCircle2, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
								" ",
								b
							]
						}, b))
					}),
					/* @__PURE__ */ jsxs(Link, {
						to: "/services",
						hash: s.slug,
						className: "mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary",
						children: ["Learn more ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-0.5" })]
					})
				]
			}, s.slug);
		})
	})] });
}
function TrainingPreview() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-ink text-white",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid items-end gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx(SectionEyebrow, { children: "Training Academy" }),
					/* @__PURE__ */ jsxs("h2", {
						className: "mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
						children: ["Semiconductor Skill ", /* @__PURE__ */ jsx("span", {
							className: "text-gradient-brand",
							children: "Training Academy"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 max-w-2xl text-white/70",
						children: "Eight industry-led programs covering the full semiconductor value chain — taught by experienced practitioners with hands-on labs, projects and global certification."
					})
				] }), /* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap gap-3 lg:justify-end",
					children: [
						{
							icon: ShieldCheck,
							label: "Industry Expert Faculty"
						},
						{
							icon: Globe2,
							label: "Global Certification with TechDataX"
						},
						{
							icon: GraduationCap,
							label: "Placement Assistance"
						}
					].map((b) => /* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs",
						children: [
							/* @__PURE__ */ jsx(b.icon, { className: "h-3.5 w-3.5 text-indigo-glow" }),
							" ",
							b.label
						]
					}, b.label))
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
				children: COURSES.slice(0, 8).map((course) => {
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
					return /* @__PURE__ */ jsxs(Link, {
						to: "/training",
						hash: course.slug,
						className: "flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:shadow-lg hover:border-primary/50",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: `mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full font-bold ${color.bg} ${color.text}`,
								children: course.number
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mb-3 text-lg font-semibold text-black",
								children: course.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mb-4 flex-grow text-sm text-muted-foreground",
								children: course.overview
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mb-6",
								children: [/* @__PURE__ */ jsx("h4", {
									className: "mb-2 text-xs font-semibold uppercase tracking-widest text-primary",
									children: "Key Learning Areas"
								}), /* @__PURE__ */ jsx("ul", {
									className: "space-y-1.5",
									children: course.keyLearningAreas.map((area) => /* @__PURE__ */ jsxs("li", {
										className: "flex gap-2 text-xs text-muted-foreground",
										children: [/* @__PURE__ */ jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), area]
									}, area))
								})]
							}),
							/* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => {
									window.open("https://docs.google.com/forms/d/e/1FAIpQLSfoZY580yp_rCbRtd73i_NRfD5PcstWpMFEWJTTbthPJt27mg/viewform", "_blank");
								},
								className: "w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-indigo-glow",
								children: "ENROLL NOW"
							})
						]
					}, course.slug);
				})
			})]
		})
	});
}
function AdvisorBlock() {
	return /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", {
		className: "grid items-center gap-10 lg:grid-cols-2",
		children: [/* @__PURE__ */ jsxs(motion.div, {
			initial: {
				opacity: 0,
				x: -20
			},
			whileInView: {
				opacity: 1,
				x: 0
			},
			viewport: { once: true },
			transition: { duration: .6 },
			className: "relative",
			children: [/* @__PURE__ */ jsx("div", {
				className: "relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-secondary",
				children: /* @__PURE__ */ jsx("img", {
					src: dr_kumud_ranjan_default,
					alt: "Dr. Kumud Ranjan, Director, Teksys Services",
					width: 400,
					height: 500,
					className: "h-full w-full object-cover",
					loading: "lazy"
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "absolute -bottom-6 left-1/2 hidden -translate-x-1/2 rounded-2xl border border-border bg-card px-5 py-3 shadow-xl sm:block",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-xs uppercase tracking-widest text-muted-foreground",
					children: "20+ years experience"
				}), /* @__PURE__ */ jsx("p", {
					className: "text-sm font-semibold",
					children: "Defence Electronics · Semiconductor"
				})]
			})]
		}), /* @__PURE__ */ jsxs("div", { children: [
			/* @__PURE__ */ jsx(SectionEyebrow, { children: "Lead Technical Advisor & Mentor" }),
			/* @__PURE__ */ jsx("h2", {
				className: "mt-4 text-3xl font-bold sm:text-4xl",
				children: "Dr. Kumud Ranjan"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Cofounder & Director, Teksys Services Pvt. Ltd."
			}),
			/* @__PURE__ */ jsx("ul", {
				className: "mt-6 space-y-3 text-sm",
				children: [
					"Former Scientist, DRDO",
					"GaN Technologist & RF / MMIC Expert",
					"20+ years in Defence Electronics and Semiconductor Technologies",
					"Mentor, Consultant and Technology Strategist"
				].map((b) => /* @__PURE__ */ jsxs("li", {
					className: "flex gap-2",
					children: [
						/* @__PURE__ */ jsx(CheckCircle2, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
						" ",
						b
					]
				}, b))
			}),
			/* @__PURE__ */ jsxs(Link, {
				to: "/about",
				className: "mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-indigo-glow",
				children: ["Know more ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
			})
		] })]
	}) });
}
function Partners() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-y border-border bg-secondary/40",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground",
				children: "Global Partners & Certifications"
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-8 grid grid-cols-1 items-center justify-items-center gap-8 sm:grid-cols-3",
				children: [
					{
						name: "TechDataX Singapore",
						img: partner_techdatax_default
					},
					{
						name: "Aligned Test",
						img: partner_aligned_test_default
					},
					{
						name: "Semicom Consultancy Services",
						img: partner_semicom_default
					}
				].map((p) => /* @__PURE__ */ jsx("div", {
					className: "flex h-20 w-full max-w-[260px] items-center justify-center rounded-xl bg-white p-4 shadow-sm ring-1 ring-border",
					children: /* @__PURE__ */ jsx("img", {
						src: p.img,
						alt: p.name,
						className: "max-h-14 w-auto object-contain",
						loading: "lazy"
					})
				}, p.name))
			})]
		})
	});
}
function CTA() {
	return /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", {
		className: "relative overflow-hidden rounded-3xl bg-ink p-10 text-white sm:p-14",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 bg-grid opacity-20",
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-glow/40 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative grid gap-8 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-3xl font-bold tracking-tight sm:text-4xl",
					children: "Have a semiconductor program in mind?"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-3 max-w-xl text-white/75",
					children: "Whether it's a GaN MMIC, SiC power module or a workforce training rollout — talk to our engineering team."
				})] }), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap items-center gap-3 lg:justify-end",
					children: [/* @__PURE__ */ jsxs(Link, {
						to: "/contact",
						className: "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5",
						children: ["Get in touch ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
					}), /* @__PURE__ */ jsx("a", {
						href: SITE.phoneHref,
						className: "inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10",
						children: SITE.phone
					})]
				})]
			})
		]
	}) });
}
//#endregion
export { Home as component };
