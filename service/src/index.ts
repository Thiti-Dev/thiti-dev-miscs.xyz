import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { getCreateContextHandler } from "./core/@trpc/context";
import { appRouter } from "./core/@trpc/router";

export interface Env {
  DB_URL: string;
  JWT_EXPIRATION_PERIOD: string;
  JWT_SECRET: string;
}
async function fetch(request: Request, env: Env): Promise<Response> {
  return fetchRequestHandler({
    endpoint: "/trpc",
    req: request,
    router: appRouter,
    createContext: getCreateContextHandler(request, env),
  });
}

export default {
  fetch,
};
