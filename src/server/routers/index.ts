import { createContextRouter } from "../createRouter";
import { userRouter } from "./user";

export const appRouter = createContextRouter().merge("user.", userRouter);

export type AppRouter = typeof appRouter;
