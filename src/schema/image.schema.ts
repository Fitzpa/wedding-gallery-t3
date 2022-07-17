import z from 'zod';

export const createImageSchema = z.object({
  src: z.string(),
});

export type CreateImageInput = z.TypeOf<typeof createImageSchema>;

export const getSingleImageSchema = z.object({
  id: z.string().uuid(),
});

export const updateSingleImageSchema = z.object({
  id: z.string().uuid(),
});
