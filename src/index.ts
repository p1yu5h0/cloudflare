
export interface Env {

}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		console.log(request.method);
		var uri = request.url.replace(/^https:\/\/.*?\//gi, "/");
		console.log(uri);
		
		return Response.json({
			message: `you send a ${request.method} request`,
			message2: `${uri}`
		});
	},
};
