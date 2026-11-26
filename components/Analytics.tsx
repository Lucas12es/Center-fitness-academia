"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const KEY = "cf-cookie-consent";

/**
 * Google Analytics 4 com consentimento.
 * Sem NEXT_PUBLIC_GA_ID não carrega nada e o banner não é exibido.
 */
export function Analytics() {
  const [consent, setConsent] = useState<"granted" | "denied" | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(KEY);
      if (saved === "granted" || saved === "denied") setConsent(saved);
    } catch {
      /* storage indisponível */
    }
    setReady(true);
  }, []);

  if (!GA_ID) return null;

  const choose = (v: "granted" | "denied") => {
    setConsent(v);
    try {
      window.localStorage.setItem(KEY, v);
    } catch {
      /* ignora */
    }
  };

  return (
    <>
      {consent === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      )}
      {ready && consent === null && (
        <div
          role="dialog"
          aria-label="Aviso de cookies"
          className="fixed inset-x-4 bottom-24 z-50 mx-auto max-w-xl rounded-lg border border-line bg-surface-2 p-5 shadow-2xl sm:bottom-6 sm:left-6 sm:right-auto"
        >
          <p className="text-sm text-muted">
            Usamos cookies de análise (Google Analytics) para entender como o site é usado. Você
            pode aceitar ou recusar. Saiba mais na{" "}
            <a className="text-brand-yellow underline" href="/politica-de-privacidade/">
              Política de Privacidade
            </a>
            .
          </p>
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={() => choose("granted")}
              className="min-h-11 rounded-[4px] bg-brand-yellow px-5 font-display text-lg font-bold uppercase text-black"
            >
              Aceitar
            </button>
            <button
              type="button"
              onClick={() => choose("denied")}
              className="min-h-11 rounded-[4px] border border-white/25 px-5 font-display text-lg font-bold uppercase"
            >
              Recusar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
