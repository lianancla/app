import z from "zod";

export const userRules = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(), //validar si quieres q tenga mayusculas , numeros etc
  });
  