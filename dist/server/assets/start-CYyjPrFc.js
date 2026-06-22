import { t as renderErrorPage } from "../server.js";
import { n as createCsrfMiddleware, r as createMiddleware, t as createStart } from "./createStart-DwZhSttb.js";
//#region src/start.ts
var errorMiddleware = createMiddleware().server(async ({ next }) => {
	try {
		return await next();
	} catch (error) {
		if (error != null && typeof error === "object" && "statusCode" in error) throw error;
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
});
var csrfMiddleware = createCsrfMiddleware({ filter: (ctx) => ctx.handlerType === "serverFn" });
var startInstance = createStart(() => ({ requestMiddleware: [csrfMiddleware, errorMiddleware] }));
//#endregion
export { startInstance };
