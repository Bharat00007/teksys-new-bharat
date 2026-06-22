import { useEffect, useRef, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MessageCircle, Send, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
//#region src/styles.css?url
var styles_default = "/assets/styles-VojvQGrW.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/components/site/FloatingWhatsApp.tsx
function FloatingWhatsApp() {
	return /* @__PURE__ */ jsx("a", {
		href: `https://wa.me/${"+918600418168".replace(/\D/g, "")}?text=${encodeURIComponent("Hello! I'm interested in learning more about TEKSYS services.")}`,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Chat on WhatsApp",
		className: "fixed bottom-8 right-8 z-50 inline-flex items-center justify-center rounded-full bg-green-500 p-4 text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl",
		children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" })
	});
}
//#endregion
//#region src/components/site/ChatBot.tsx
var QUICK_REPLIES = [
	"What courses do you offer?",
	"How to enroll?",
	"Contact information",
	"About TEKSYS"
];
var BOT_RESPONSES = {
	"what courses": "We offer 8 semiconductor skill training programs:\n\n1. Semiconductor Foundations\n2. GaN Technology\n3. SiC Technology\n4. RF & Microwave\n5. Sensors & IoT\n6. Power Electronics\n7. Materials Science & Process Technology\n8. Advanced Semiconductor Systems\n\nEach course includes hands-on labs, projects, and global certification. Visit our Training Academy page for more details!",
	"how to enroll": "To enroll in any of our courses:\n\n1. Visit our Training Academy page\n2. Click 'ENROLL NOW' on your chosen course\n3. Fill out the enrollment form\n4. Our team will contact you shortly\n\nFor direct assistance, call us at +91 86004 18168 or email admin@teksys-services.com",
	"contact": "You can reach us at:\n📞 Phone: +91 86004 18168\n📧 Email: admin@teksys-services.com\n📍 Locations: India, Singapore, USA\n\nFor WhatsApp support, click the green WhatsApp icon in the bottom right corner.",
	"about": "TEKSYS is a semiconductor deep-tech company providing:\n• GaN device consulting\n• MMIC design & development\n• Fabless & OSAT partnerships\n• Semiconductor workforce training\n\nWe partner with industry leaders to deliver advanced technology solutions and training programs for engineering teams globally.",
	"default": "Hello! 👋 I'm the TEKSYS assistant. I can help you with:\n\n• Course information\n• Enrollment process\n• Contact details\n• Company information\n\nFeel free to ask me anything about TEKSYS services and training programs!"
};
function getBotResponse(userMessage) {
	const lowerMessage = userMessage.toLowerCase();
	if (lowerMessage.includes("course") || lowerMessage.includes("training") || lowerMessage.includes("program")) return BOT_RESPONSES["what courses"];
	if (lowerMessage.includes("enroll")) return BOT_RESPONSES["how to enroll"];
	if (lowerMessage.includes("contact") || lowerMessage.includes("phone") || lowerMessage.includes("email")) return BOT_RESPONSES["contact"];
	if (lowerMessage.includes("about") || lowerMessage.includes("company") || lowerMessage.includes("who")) return BOT_RESPONSES["about"];
	return BOT_RESPONSES["default"];
}
function ChatBot() {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState([{
		id: "1",
		text: BOT_RESPONSES["default"],
		sender: "bot",
		timestamp: /* @__PURE__ */ new Date()
	}]);
	const [inputValue, setInputValue] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const messagesEndRef = useRef(null);
	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	useEffect(() => {
		scrollToBottom();
	}, [messages]);
	const handleSendMessage = (text = inputValue) => {
		if (!text.trim()) return;
		const userMessage = {
			id: Date.now().toString(),
			text,
			sender: "user",
			timestamp: /* @__PURE__ */ new Date()
		};
		setMessages((prev) => [...prev, userMessage]);
		setInputValue("");
		setIsLoading(true);
		setTimeout(() => {
			const botResponse = getBotResponse(text);
			const botMessage = {
				id: (Date.now() + 1).toString(),
				text: botResponse,
				sender: "bot",
				timestamp: /* @__PURE__ */ new Date()
			};
			setMessages((prev) => [...prev, botMessage]);
			setIsLoading(false);
		}, 600);
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(motion.button, {
		whileHover: { scale: 1.1 },
		whileTap: { scale: .95 },
		onClick: () => setIsOpen(!isOpen),
		className: "fixed bottom-24 right-8 z-40 inline-flex items-center justify-center rounded-full bg-indigo-600 p-4 text-white shadow-lg transition-all hover:bg-indigo-700 hover:shadow-xl",
		"aria-label": "Open chat",
		children: isOpen ? /* @__PURE__ */ jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" })
	}), /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(motion.div, {
		initial: {
			opacity: 0,
			y: 20,
			scale: .9
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: 20,
			scale: .9
		},
		transition: { duration: .2 },
		className: "fixed bottom-40 right-8 z-40 w-96 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-border bg-background shadow-2xl",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4 text-white",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "font-semibold",
					children: "TEKSYS Assistant"
				}), /* @__PURE__ */ jsx("p", {
					className: "text-xs text-white/80",
					children: "Always here to help"
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex h-96 flex-col overflow-y-auto bg-white p-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-4",
					children: [
						messages.map((message) => /* @__PURE__ */ jsx(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							className: `flex ${message.sender === "user" ? "justify-end" : "justify-start"}`,
							children: /* @__PURE__ */ jsx("div", {
								className: `max-w-xs rounded-lg px-4 py-2 text-sm ${message.sender === "user" ? "bg-indigo-600 text-white" : "bg-gray-100 text-foreground"}`,
								children: /* @__PURE__ */ jsx("p", {
									className: "whitespace-pre-wrap",
									children: message.text
								})
							})
						}, message.id)),
						isLoading && /* @__PURE__ */ jsx(motion.div, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							className: "flex justify-start",
							children: /* @__PURE__ */ jsx("div", {
								className: "rounded-lg bg-gray-100 px-4 py-2",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex gap-1",
									children: [
										/* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-gray-400 animate-bounce" }),
										/* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-gray-400 animate-bounce delay-100" }),
										/* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-gray-400 animate-bounce delay-200" })
									]
								})
							})
						}),
						/* @__PURE__ */ jsx("div", { ref: messagesEndRef })
					]
				})
			}),
			messages.length <= 1 && /* @__PURE__ */ jsxs("div", {
				className: "border-t border-border bg-gray-50 px-4 py-3",
				children: [/* @__PURE__ */ jsx("p", {
					className: "mb-2 text-xs font-semibold text-foreground/70",
					children: "Quick replies:"
				}), /* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap gap-2",
					children: QUICK_REPLIES.map((reply) => /* @__PURE__ */ jsx("button", {
						onClick: () => handleSendMessage(reply),
						className: "rounded-full border border-border bg-white px-3 py-1 text-xs hover:bg-gray-100 transition",
						children: reply
					}, reply))
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "border-t border-border bg-white p-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ jsx("input", {
						type: "text",
						value: inputValue,
						onChange: (e) => setInputValue(e.target.value),
						onKeyPress: (e) => {
							if (e.key === "Enter") handleSendMessage();
						},
						placeholder: "Ask a question...",
						className: "flex-1 rounded-lg border border-border bg-background px-4 py-2 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-600",
						disabled: isLoading
					}), /* @__PURE__ */ jsx("button", {
						onClick: () => handleSendMessage(),
						disabled: isLoading || !inputValue.trim(),
						className: "inline-flex items-center justify-center rounded-lg bg-indigo-600 p-2 text-white hover:bg-indigo-700 disabled:opacity-50",
						"aria-label": "Send message",
						children: /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" })
					})]
				})
			})
		]
	}) })] });
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Lovable App" },
			{
				name: "description",
				content: "TEKSYS Genesis builds a professional, responsive corporate website for TEKSYS, mirroring a provided PDF design."
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "Lovable App"
			},
			{
				property: "og:description",
				content: "TEKSYS Genesis builds a professional, responsive corporate website for TEKSYS, mirroring a provided PDF design."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			},
			{
				name: "twitter:title",
				content: "Lovable App"
			},
			{
				name: "twitter:description",
				content: "TEKSYS Genesis builds a professional, responsive corporate website for TEKSYS, mirroring a provided PDF design."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a389ad0d-c027-4d04-babf-f38783053f4e/id-preview-776c092b--73f6ff1c-78ba-4dde-8e2f-e5975a69ef77.lovable.app-1781761071500.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a389ad0d-c027-4d04-babf-f38783053f4e/id-preview-776c092b--73f6ff1c-78ba-4dde-8e2f-e5975a69ef77.lovable.app-1781761071500.png"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ jsxs(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ jsx(Outlet, {}),
			/* @__PURE__ */ jsx(FloatingWhatsApp, {}),
			/* @__PURE__ */ jsx(ChatBot, {})
		]
	});
}
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "";
var Route$7 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[
		{
			path: "/",
			priority: "1.0",
			changefreq: "weekly"
		},
		{
			path: "/about",
			priority: "0.8",
			changefreq: "monthly"
		},
		{
			path: "/services",
			priority: "0.9",
			changefreq: "monthly"
		},
		{
			path: "/training",
			priority: "0.9",
			changefreq: "weekly"
		},
		{
			path: "/contact",
			priority: "0.7",
			changefreq: "monthly"
		}
	].map((e) => `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`).join("\n")}
</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/_site.tsx
var $$splitComponentImporter$6 = () => import("./_site-M0CmeC-P.js");
var Route$6 = createFileRoute("/_site")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
//#endregion
//#region src/routes/_site/index.tsx
var $$splitComponentImporter$5 = () => import("./_site-CHeLYFhW.js");
var Route$5 = createFileRoute("/_site/")({
	head: () => ({ meta: [
		{ title: "TEKSYS · Semiconductor, Defence & Advanced Technology Solutions" },
		{
			name: "description",
			content: "TEKSYS delivers GaN/SiC consulting, fabless MMIC design and semiconductor skill training for industry, defence, academia and government — across India, Singapore and the USA."
		},
		{
			property: "og:title",
			content: "TEKSYS · Semiconductor & Advanced Technology Solutions"
		},
		{
			property: "og:description",
			content: "GaN/SiC technology consulting, fabless MMIC design, and a global semiconductor skill training academy."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/_site/training.tsx
var $$splitComponentImporter$4 = () => import("./training-B9oXsL04.js");
var Route$4 = createFileRoute("/_site/training")({
	head: () => ({ meta: [
		{ title: "Semiconductor Skill Training Academy · TEKSYS" },
		{
			name: "description",
			content: "Eight industry-led semiconductor programs — GaN, SiC, RF, sensors, power electronics and more — with hands-on labs, global certification and placement assistance."
		},
		{
			property: "og:title",
			content: "TEKSYS Semiconductor Training Academy"
		},
		{
			property: "og:description",
			content: "Industry expert faculty, hands-on labs, global certification with TechDataX, placement assistance and flexible learning."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/_site/services.tsx
var $$splitComponentImporter$3 = () => import("./services-CFfn6Jhu.js");
var Route$3 = createFileRoute("/_site/services")({
	head: () => ({ meta: [
		{ title: "Services · TEKSYS" },
		{
			name: "description",
			content: "GaN consulting, SiC power, fabless MMIC design, semiconductor training and OSAT lab partnerships — full-stack engineering services from TEKSYS."
		},
		{
			property: "og:title",
			content: "TEKSYS Services"
		},
		{
			property: "og:description",
			content: "End-to-end semiconductor engineering: GaN, SiC, MMIC design, training and process labs."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/_site/legal.tsx
var $$splitComponentImporter$2 = () => import("./legal-CKJqSScq.js");
var Route$2 = createFileRoute("/_site/legal")({
	head: () => ({ meta: [{ title: "Legal · Privacy, Terms & Cookies · TEKSYS" }, {
		name: "description",
		content: "Privacy Policy, Terms of Service and Cookie Policy for TEKSYS Services."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/_site/contact.tsx
var $$splitComponentImporter$1 = () => import("./contact-ChSGoEpZ.js");
var Route$1 = createFileRoute("/_site/contact")({
	head: () => ({ meta: [
		{ title: "Contact TEKSYS · Get in touch" },
		{
			name: "description",
			content: "Talk to TEKSYS about GaN/SiC consulting, MMIC design, semiconductor training and engineering programs. Offices across India, Singapore and the USA."
		},
		{
			property: "og:title",
			content: "Contact TEKSYS"
		},
		{
			property: "og:description",
			content: "Reach our engineering team for semiconductor consulting, MMIC design and training programs."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/_site/about.tsx
var $$splitComponentImporter = () => import("./about-DzPIgQQL.js");
var Route = createFileRoute("/_site/about")({
	head: () => ({ meta: [
		{ title: "About TEKSYS · Semiconductor & Defence Technology" },
		{
			name: "description",
			content: "TEKSYS supports industry, academia, startups and government with semiconductor consulting, MMIC design and workforce development across India, Singapore and the USA."
		},
		{
			property: "og:title",
			content: "About TEKSYS"
		},
		{
			property: "og:description",
			content: "Founded by experienced defence and semiconductor technologists — combining engineering services with skill development."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var SitemapDotxmlRoute = Route$7.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$8
});
var SiteRoute = Route$6.update({
	id: "/_site",
	getParentRoute: () => Route$8
});
var SiteIndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => SiteRoute
});
var SiteTrainingRoute = Route$4.update({
	id: "/training",
	path: "/training",
	getParentRoute: () => SiteRoute
});
var SiteServicesRoute = Route$3.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => SiteRoute
});
var SiteLegalRoute = Route$2.update({
	id: "/legal",
	path: "/legal",
	getParentRoute: () => SiteRoute
});
var SiteContactRoute = Route$1.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => SiteRoute
});
var SiteRouteChildren = {
	SiteAboutRoute: Route.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => SiteRoute
	}),
	SiteContactRoute,
	SiteLegalRoute,
	SiteServicesRoute,
	SiteTrainingRoute,
	SiteIndexRoute
};
var rootRouteChildren = {
	SiteRoute: SiteRoute._addFileChildren(SiteRouteChildren),
	SitemapDotxmlRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
