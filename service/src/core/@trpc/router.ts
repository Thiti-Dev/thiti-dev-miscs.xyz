import { initTRPC } from "@trpc/server";
import { Context } from "./context";
import { getMutationProcedures } from "./mutations";
import { getQueryProcedures } from "./queries";

export const t = initTRPC.context<Context>().create();
export const appRouter = t.router({
  ...getQueryProcedures(),
  ...getMutationProcedures(),
});

// export type definition of API
export type AppRouter = typeof appRouter;
