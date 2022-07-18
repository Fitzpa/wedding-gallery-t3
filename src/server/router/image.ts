import { createRouter } from './context';
import {
  createImageSchema,
  getSingleImageSchema,
  updateSingleImageSchema,
  seedImagesSchema,
} from '../../schema/image.schema';

export const imageRouter = createRouter()
  .query('get-images', {
    async resolve({ ctx }) {
      const images = await ctx.prisma.image.findMany();

      return images;
    },
  })
  .query('get-images-by-orientation', {
    async resolve({ ctx }) {
      const images = await ctx.prisma.image.findMany();
      const landscapes = await ctx.prisma.image.findMany({ where: { orientation: 'landscape' } });
      const portraits = await ctx.prisma.image.findMany({ where: { orientation: 'portrait' } });
      return { images, landscapes, portraits };
    },
  })
  .mutation('create-image', {
    input: createImageSchema,
    async resolve({ ctx, input }) {
      const image = await ctx.prisma.image.create({ data: { ...input, likes: 0 } });

      return image;
    },
  })
  .mutation('update-image', {
    input: updateSingleImageSchema,
    async resolve({ ctx, input }) {
      let data = await ctx.prisma.image.findUnique({
        where: { id: input.id },
        select: { likes: true },
      });
      let image;
      if (data) {
        image = await ctx.prisma.image.update({
          where: { id: input.id },
          data: { ...input, likes: data.likes + 1 },
        });
      } else {
        throw new Error('Image not found');
      }

      return image;
    },
  })
  .mutation('delete', {
    input: updateSingleImageSchema,
    async resolve({ ctx, input }) {
      await ctx.prisma.image.delete({ where: { id: input.id } });
      return input.id;
    },
  })
  .query('get-image', {
    input: getSingleImageSchema,
    resolve({ input, ctx }) {
      return ctx.prisma.image.findUnique({
        where: {
          id: input.id,
        },
      });
    },
  })
  .query('seed-images', {
    input: seedImagesSchema,
    resolve({ ctx, input }) {
      return ctx.prisma.image.createMany({ data: input });
    },
  });
