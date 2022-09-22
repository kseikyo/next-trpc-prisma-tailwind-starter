import { createContextRouter } from "../createRouter";

export const userRouter = createContextRouter().query("list", {
  resolve() {
    // ..
    return [];
  },
});
