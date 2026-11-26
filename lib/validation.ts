import { z } from "zod";

export const interests = [
  "Musculação",
  "Fitness",
  "Treinamentos",
  "Planos e valores",
  "Gympass",
  "Outro assunto",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome.")
    .max(80, "Nome muito longo."),
  phone: z
    .string()
    .trim()
    .refine((v) => {
      const digits = v.replace(/\D/g, "");
      return digits.length === 10 || digits.length === 11;
    }, "Informe um telefone com DDD, ex.: (44) 99999-9999."),
  interest: z.enum(interests, { message: "Escolha uma opção." }),
  message: z.string().trim().max(500, "Máximo de 500 caracteres.").optional(),
});

export type ContactValues = z.infer<typeof contactSchema>;
