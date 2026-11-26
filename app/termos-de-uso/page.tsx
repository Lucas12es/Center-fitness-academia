import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Termos de Uso",
  description: "Condições de uso do site da Center Fitness Academia.",
  path: "/termos-de-uso/",
});

export default function TermosPage() {
  return (
    <>
      <PageHero
        crumb="Termos de Uso"
        watermark="Termos"
        eyebrow="Legal"
        title={<>Termos de <span className="text-brand-yellow">Uso</span></>}
        lead="Condições para navegar e utilizar este site."
      />
      <section className="section-y">
        <div className="container-x">
          <article className="prose-ldt max-w-3xl">
            <p>
              Ao acessar o site da <strong>{site.legalName || site.name}</strong>, você concorda com
              os termos abaixo.
            </p>

            <h2>1. Finalidade do site</h2>
            <p>
              O site apresenta a academia, suas modalidades, horários e canais de contato. Não é
              uma plataforma de venda online: a contratação de planos é combinada diretamente com a
              equipe, pelo WhatsApp ou presencialmente.
            </p>

            <h2>2. Informações e valores</h2>
            <p>
              Os valores, condições e horários exibidos são informativos e podem ser alterados sem
              aviso prévio. Confirme sempre as condições atuais com a equipe antes de contratar.
              O valor &ldquo;a partir de {site.priceFrom}&rdquo; refere-se ao plano mensal
              recorrente divulgado pela academia.
            </p>

            <h2>3. Gympass</h2>
            <p>
              A disponibilidade e as regras de uso do Gympass seguem as condições do próprio
              Gympass e do plano contratado por você. Confirme os detalhes com a equipe.
            </p>

            <h2>4. Uso adequado</h2>
            <p>
              Você se compromete a usar o site de forma lícita, sem tentar comprometer sua
              segurança ou disponibilidade, e a informar dados verdadeiros ao entrar em contato.
            </p>

            <h2>5. Propriedade intelectual</h2>
            <p>
              Marca, logotipo, textos e imagens pertencem à {site.name} ou a seus respectivos
              titulares e não podem ser reproduzidos sem autorização.
            </p>

            <h2>6. Saúde e atividade física</h2>
            <p>
              O conteúdo do site não substitui avaliação médica. Antes de iniciar qualquer
              atividade física, consulte um profissional de saúde.
            </p>

            <h2>7. Links externos</h2>
            <p>
              O site pode conter links para serviços de terceiros (WhatsApp, Instagram, Google
              Maps). Não nos responsabilizamos pelo conteúdo ou pelas práticas desses serviços.
            </p>

            <h2>8. Privacidade</h2>
            <p>
              O tratamento de dados pessoais é descrito na{" "}
              <a href="/politica-de-privacidade/">Política de Privacidade</a>.
            </p>

            <h2>9. Foro</h2>
            <p>
              Estes termos são regidos pela legislação brasileira. Em caso de dúvidas, fale conosco
              pelo WhatsApp {site.phone.display}.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
