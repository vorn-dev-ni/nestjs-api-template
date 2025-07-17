import { z } from 'zod';

export const configSchema = z.object({
  PORT: z
    .string()
    .transform(Number)
    .refine((val) => !isNaN(val), {
      message: 'PORT must be a number',
    }),
  DATABASE_URL: z.string(),
});
