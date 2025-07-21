import z from "zod";

export const schema = z.object({
  url: z
    .string()
    .min(1, { message: "The URL is required" })
    .url()
    .refine(
      (val) => {
        try {
          new URL(val);
          return true;
        } catch {
          return false;
        }
      },
      { message: "Please enter a valid URL" }
    ),
});

export type FormData = z.infer<typeof schema>;
