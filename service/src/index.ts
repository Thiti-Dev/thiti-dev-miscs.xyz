import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createContext } from "./core/@trpc/context";
import { appRouter } from "./core/@trpc/router";

addEventListener("fetch", (event) => {
  return event.respondWith(
    fetchRequestHandler({
      endpoint: "/trpc",
      req: event.request,
      router: appRouter,
      createContext,
    })
  );
});
