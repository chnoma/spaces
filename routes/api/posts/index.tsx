import { HandlerContext, Handlers } from "$fresh/server.ts";
import { ARANGO_ENDPOINT } from "../../../envs.ts";

export const handler: Handlers = {
  async GET(req: Request, _ctx: HandlerContext) {
    const resp = fetch(ARANGO_ENDPOINT+"/posts/all");
    const json = await (await resp).json();
    console.log(json)
    return new Response(JSON.stringify(json));
  },
};