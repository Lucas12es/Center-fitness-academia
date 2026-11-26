import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Política de Privacidade",
    description: "Como a Center Fitness Academia trata dados pessoais neste site.",
    path: "/politica-de-privacidade/",
  }),
};

const gaOn = Boolean(process.env.NEXT_PUBLIC_GA_ID);

export default function PrivacidadePage() {
  return (
    <>
      <PageHero
        crumb="Política de Privacidade"
        watermark="LGPD"
        eyebrow="Legal"
        title={<>Política de <span className="text-brand-yellow">Privacidade</span></>}
        lead="Transparência sobre como este site trata os seus dados."
      />
      <section className="section-y">
        <div className="container-x">
          <article className="prose-ldt max-w-3xl">
            <p>
              Esta Política explica como o site da <strong>{site.legalName || site.name}</strong>
              {site.cnpj ? ` (CNPJ ${site.cnpj})` : ""} trata dados pessoais, em conformidade com a
              Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
            </p>

            <h2>1. Quais dados tratamos</h2>
            <p>
              O formulário da página de Contato solicita nome, telefone, interesse e, opcionalmente,
              uma mensagem. Esses dados são usados apenas para montar a mensagem que você envia à
              academia pelo WhatsApp.
            </p>
            <p>
              <strong>Este site não possui banco de dados nem servidor próprio que armazene o
              conteúdo do formulário.</strong> As informações seguem diretamente para o WhatsApp, que
              possui sua própria política de privacidade.
            </p>

            <h2>2. Finalidade e base legal</h2>
            <p>
              Utilizamos os dados para responder à sua solicitação de contato, informações sobre
              planos e atendimento. A base legal é o seu consentimento e a execução de
              procedimentos preliminares a um contrato, a seu pedido (art. 7º, I e V, da LGPD).
            </p>

            <h2>3. Cookies e análise de acesso</h2>
            {gaOn ? (
              <p>
                Utilizamos o Google Analytics 4 para medir o uso do site. Ele só é carregado depois
                que você aceita no aviso de cookies. Você pode recusar, e o site continuará
                funcionando normalmente.
              </p>
            ) : (
              <p>
                No momento este site não utiliza cookies de análise ou marketing. Caso isso mude,
                solicitaremos o seu consentimento e atualizaremos esta página.
              </p>
            )}

            <h2>4. Serviços de terceiros</h2>
            <ul>
              <li>WhatsApp (Meta): canal de atendimento acionado por você.</li>
              <li>Google Maps: mapa incorporado na página de Contato.</li>
              <li>Google Fonts: fontes carregadas no momento da compilação do site.</li>
              <li>Instagram: links para o perfil {site.instagram.handle}.</li>
            </ul>
            <p>Esses serviços possuem políticas próprias, fora do nosso controle.</p>

            <h2>5. Compartilhamento</h2>
            <p>Não vendemos nem compartilhamos seus dados com terceiros para fins de marketing.</p>

            <h2>6. Seus direitos</h2>
            <p>
              Você pode solicitar confirmação de tratamento, acesso, correção, anonimização,
              exclusão de dados e revogação do consentimento, conforme o art. 18 da LGPD. Para isso,
              fale conosco pelo WhatsApp {site.phone.display} ou presencialmente em{" "}
              {site.address.full}.
            </p>

            <h2>7. Atualizações</h2>
            <p>Esta Política pode ser atualizada. A versão vigente é sempre a publicada nesta página.</p>
          </article>
        </div>
      </section>
    </>
  );
}
