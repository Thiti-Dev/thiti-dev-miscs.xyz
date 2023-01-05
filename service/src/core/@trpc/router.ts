import { initTRPC } from "@trpc/server";
import { Context } from "./context";

export const t = initTRPC.context<Context>().create();
export const appRouter = t.router({});

// export type definition of API
export type AppRouter = typeof appRouter;
