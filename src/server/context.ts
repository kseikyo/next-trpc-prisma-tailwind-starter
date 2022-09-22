import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { prisma } from "@/lib/prisma";
// @ts-ignore
import { unstable_getServerSession as getServerSession } from "next-auth/next";
import options from "@/common/config/next";
// https://next-auth.js.org/configuration/nextjs#unstable_getserversession
export const createContext = async (ctx: trpcNext.CreateNextContextOptions) => {
  const session = await getServerSession(ctx.req, ctx.res, options);
  const { req, res } = ctx;
  return {
    req,
    res,
    session,
    prisma,
  };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
