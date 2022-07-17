import { createRouter } from "./context";
import { z } from "zod";
import { createImageSchema } from "../../schema/image.schema";

export const imageRouter = createRouter()
  .query("get-images", {
    async resolve({ ctx }) {
      const images = await ctx.prisma.image.findMany();

      return images;
    },
  }).mutation("create-image", {
    input: createImageSchema,
    async resolve({ ctx, input }) {
      const image = await ctx.prisma.image.create({ data: { ...input, likes: 0 },
      })

      return image
    },
  }
  );
  // import { createRouter } from "./context";
// import { z } from "zod";

// export const exampleRouter = createRouter()
//   .query("hello", {
//     input: z
//       .object({
//         text: z.string().nullish(),
//       })
//       .nullish(),
//     resolve({ input }) {
//       return {
//         greeting: `Hello ${input?.text ?? "world"}`,
//       };
//     },
//   })
//   .query("getAll", {
//     async resolve({ ctx }) {
//       return await ctx.prisma.example.findMany();
//     },
//   });
