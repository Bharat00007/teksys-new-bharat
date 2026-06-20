import { t as getServerFnById } from "./__23tanstack-start-server-fn-resolver-Cp82Vtjo.js";
import { f as TSS_SERVER_FUNCTION, r as createServerFn } from "./esm-B50dUWcE.js";
import * as React from "react";
import { useRef, useState } from "react";
import { isRedirect, useRouter } from "@tanstack/react-router";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region node_modules/@tanstack/react-start/dist/esm/useServerFn.js
function useServerFn(serverFn) {
	const router = useRouter();
	return React.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/createSsrRpc.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
//#region src/lib/contact.functions.ts
var sendContact = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("477541d8a127a17e097220e080486dcdf7627a71b3b207de22820846bc8e528c"));
//#endregion
//#region src/components/site/ContactForm.tsx
var _jsxFileName = "D:/SCS projects/teksys-vision-craft/src/components/site/ContactForm.tsx";
function ContactForm({ source = "contact", topic, compact, title }) {
	const submit = useServerFn(sendContact);
	const formRef = useRef(null);
	const [status, setStatus] = useState("idle");
	const [error, setError] = useState(null);
	async function onSubmit(e) {
		e.preventDefault();
		setStatus("loading");
		setError(null);
		const fd = new FormData(e.currentTarget);
		const payload = {
			name: String(fd.get("name") || ""),
			email: String(fd.get("email") || ""),
			phone: String(fd.get("phone") || ""),
			company: String(fd.get("company") || ""),
			subject: String(fd.get("subject") || ""),
			topic: topic || String(fd.get("topic") || ""),
			message: String(fd.get("message") || ""),
			source
		};
		try {
			const result = await submit({ data: payload });
			if (!result.ok) {
				setStatus("error");
				setError(result.error);
				return;
			}
			setStatus("success");
			formRef.current?.reset();
		} catch (err) {
			setStatus("error");
			setError(prettifyError(err));
		}
	}
	function prettifyError(err) {
		const trimmed = (err instanceof Error ? err.message : String(err ?? "")).trim();
		if (trimmed.startsWith("[") || trimmed.startsWith("{")) try {
			const parsed = JSON.parse(trimmed);
			const issues = Array.isArray(parsed) ? parsed : parsed?.issues;
			if (Array.isArray(issues) && issues[0]?.message) return issues[0].message;
		} catch {}
		return trimmed || "Something went wrong. Please try again.";
	}
	if (status === "success") return /* @__PURE__ */ jsxDEV("div", {
		className: "rounded-2xl border border-border bg-card p-8 text-center",
		children: [
			/* @__PURE__ */ jsxDEV(CheckCircle2, { className: "mx-auto h-10 w-10 text-primary" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ jsxDEV("h3", {
				className: "mt-3 text-xl font-semibold",
				children: "Message sent"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ jsxDEV("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Thank you — we've emailed you a confirmation and our team will respond within 1–2 business days."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 70,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ jsxDEV("button", {
				type: "button",
				onClick: () => setStatus("idle"),
				className: "mt-5 rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-accent",
				children: "Send another message"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 67,
		columnNumber: 7
	}, this);
	const input = "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";
	return /* @__PURE__ */ jsxDEV("form", {
		ref: formRef,
		onSubmit,
		className: "space-y-4",
		noValidate: true,
		children: [
			title ? /* @__PURE__ */ jsxDEV("h3", {
				className: "text-lg font-semibold",
				children: title
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 89,
				columnNumber: 16
			}, this) : null,
			/* @__PURE__ */ jsxDEV("div", {
				className: compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
						className: "mb-1.5 block text-sm font-medium",
						htmlFor: "name",
						children: "Name *"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 92,
						columnNumber: 11
					}, this), /* @__PURE__ */ jsxDEV("input", {
						id: "name",
						name: "name",
						required: true,
						minLength: 2,
						maxLength: 120,
						className: input
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 93,
						columnNumber: 11
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 91,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
						className: "mb-1.5 block text-sm font-medium",
						htmlFor: "email",
						children: "Email *"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 96,
						columnNumber: 11
					}, this), /* @__PURE__ */ jsxDEV("input", {
						id: "email",
						name: "email",
						type: "email",
						required: true,
						maxLength: 200,
						className: input
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 97,
						columnNumber: 11
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
						className: "mb-1.5 block text-sm font-medium",
						htmlFor: "phone",
						children: "Phone"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 100,
						columnNumber: 11
					}, this), /* @__PURE__ */ jsxDEV("input", {
						id: "phone",
						name: "phone",
						type: "tel",
						maxLength: 40,
						className: input
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 101,
						columnNumber: 11
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 99,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
						className: "mb-1.5 block text-sm font-medium",
						htmlFor: "company",
						children: "Company / Institute"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 11
					}, this), /* @__PURE__ */ jsxDEV("input", {
						id: "company",
						name: "company",
						maxLength: 160,
						className: input
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 11
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 103,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 90,
				columnNumber: 7
			}, this),
			!topic && source !== "enroll" ? /* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
				className: "mb-1.5 block text-sm font-medium",
				htmlFor: "subject",
				children: "Subject"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 110,
				columnNumber: 11
			}, this), /* @__PURE__ */ jsxDEV("input", {
				id: "subject",
				name: "subject",
				maxLength: 160,
				className: input
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 111,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 109,
				columnNumber: 9
			}, this) : null,
			topic ? /* @__PURE__ */ jsxDEV("p", {
				className: "rounded-md bg-secondary px-3 py-2 text-xs text-secondary-foreground",
				children: ["Regarding: ", /* @__PURE__ */ jsxDEV("span", {
					className: "font-semibold",
					children: topic
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 116,
					columnNumber: 22
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 115,
				columnNumber: 9
			}, this) : null,
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
				className: "mb-1.5 block text-sm font-medium",
				htmlFor: "message",
				children: "Message *"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 120,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("textarea", {
				id: "message",
				name: "message",
				required: true,
				minLength: 2,
				maxLength: 4e3,
				rows: 5,
				className: input
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 121,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 119,
				columnNumber: 7
			}, this),
			status === "error" && /* @__PURE__ */ jsxDEV("div", {
				className: "flex items-start gap-2 rounded-md bg-destructive/10 p-3 text-sm text-destructive",
				children: [/* @__PURE__ */ jsxDEV(AlertCircle, { className: "mt-0.5 h-4 w-4 shrink-0" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 125,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("span", { children: error }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 126,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 124,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ jsxDEV("button", {
				type: "submit",
				disabled: status === "loading",
				className: "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-indigo-glow disabled:opacity-60",
				children: [status === "loading" ? /* @__PURE__ */ jsxDEV(Loader2, { className: "h-4 w-4 animate-spin" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 134,
					columnNumber: 33
				}, this) : null, status === "loading" ? "Sending…" : source === "enroll" ? "Request enrolment info" : "Send message"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 129,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("p", {
				className: "text-xs text-muted-foreground",
				children: "By submitting, you agree to be contacted about your enquiry. We never share your details."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 137,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 88,
		columnNumber: 5
	}, this);
}
//#endregion
export { ContactForm as t };
