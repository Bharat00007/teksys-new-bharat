//#region \0%23tanstack-start-server-fn-resolver
var manifest = { "477541d8a127a17e097220e080486dcdf7627a71b3b207de22820846bc8e528c": {
	functionName: "sendContact_createServerFn_handler",
	importer: () => import("./contact.functions-Bf9sC4JH.js")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
