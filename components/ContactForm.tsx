"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { contactSchema, interests, type ContactValues } from "@/lib/validation";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

const field =
  "w-full rounded-[4px] border border-white/15 bg-surface-2 px-4 py-3.5 text-ink placeholder:text-white/35 transition focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/40";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { interest: "Planos e valores" },
  });

  const onSubmit = (v: ContactValues) => {
    const text = [
      "Olá! Vim pelo site da Center Fitness.",
      `Nome: ${v.name}`,
      `Telefone: ${v.phone}`,
      `Interesse: ${v.interest}`,
      v.message ? `Mensagem: ${v.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const err = (id: string, msg?: string) =>
    msg ? (
      <p id={`${id}-erro`} role="alert" className="mt-1.5 text-sm text-red-400">
        {msg}
      </p>
    ) : null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold">
          Seu nome
        </label>
        <input
          id="name"
          autoComplete="name"
          className={cn(field, errors.name && "border-red-400")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-erro" : undefined}
          {...register("name")}
        />
        {err("name", errors.name?.message)}
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
          WhatsApp / telefone
        </label>
        <input
          id="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="(44) 99999-9999"
          className={cn(field, errors.phone && "border-red-400")}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-erro" : undefined}
          {...register("phone")}
        />
        {err("phone", errors.phone?.message)}
      </div>

      <div>
        <label htmlFor="interest" className="mb-2 block text-sm font-semibold">
          Tenho interesse em
        </label>
        <select
          id="interest"
          className={cn(field, "appearance-none")}
          aria-invalid={!!errors.interest}
          {...register("interest")}
        >
          {interests.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
        {err("interest", errors.interest?.message)}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold">
          Mensagem <span className="font-normal text-muted">(opcional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          className={cn(field, errors.message && "border-red-400")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-erro" : undefined}
          {...register("message")}
        />
        {err("message", errors.message?.message)}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-[4px] bg-brand-yellow px-6 font-display text-xl font-bold uppercase tracking-wide text-black transition hover:bg-white disabled:opacity-60"
      >
        <Send aria-hidden="true" className="h-5 w-5" />
        Enviar pelo WhatsApp
      </button>

      <p className="text-sm text-muted" aria-live="polite">
        {sent
          ? "Pronto! O WhatsApp foi aberto com a sua mensagem. Se não abriu, toque no botão novamente."
          : "Ao enviar, o WhatsApp abre com sua mensagem pronta. Nenhum dado é armazenado neste site."}
      </p>
    </form>
  );
}
