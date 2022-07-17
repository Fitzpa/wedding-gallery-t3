// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { imageRouter } from "./image";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("image.", imageRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
