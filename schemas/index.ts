import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required" // add more descriptive error messages
  }),
  password: z.string() // don't have minimum length on login, validate on account creation instead
});