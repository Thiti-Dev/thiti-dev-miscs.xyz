import { PrismaClient } from "@prisma/client/edge";
import { inferAsyncReturnType } from "@trpc/server";
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { Env } from "../..";
import PrismaInstance from "../@prisma";
export function createContext({ req }: FetchCreateContextFnOptions, env: Env) {
  const prismaInstance = new PrismaInstance(
    new PrismaClient({
      datasources: {
        db: {
          url: env.DB_URL,
        },
      },
    })
  );

  const user = { name: req.headers.get("username") ?? "anonymous" };
  return { req, user, prisma: prismaInstance };
}

export function getCreateContextHandler(req: Request, env: Env) {
  return createContext.bind(null, { req }, env);
}

export type Context = inferAsyncReturnType<typeof createContext>;
