# Center Fitness Academia — Site Institucional

Site institucional premium da **Center Fitness Academia** (Sarandi-PR), desenvolvido pela **LDT Negócios & Soluções** seguindo o Framework LDT.

- **Tipo:** Site Institucional — 5 páginas comerciais + 2 páginas legais
- **Stack:** Next.js 15 (App Router, exportação estática), React 19, TypeScript, Tailwind CSS 3, Framer Motion, Lucide React, React Hook Form + Zod
- **Hospedagem alvo:** Cloudflare Pages (saída estática em `out/`)

## Páginas

| Rota | Conteúdo |
| --- | --- |
| `/` | Início: hero, modalidades, diferenciais, planos, Instagram, FAQ, CTA |
| `/sobre/` | Apresentação e valores |
| `/modalidades/` | Musculação, Fitness e Treinamentos |
| `/planos/` | Plano mensal (a partir de R$ 89,90), Gympass, como começar, FAQ |
| `/contato/` | WhatsApp, formulário, horários, mapa |
| `/politica-de-privacidade/` | Página legal (LGPD) |
| `/termos-de-uso/` | Página legal |

## Requisitos

- Node.js 18.18 ou superior (recomendado 20+)
- npm

## Instalação e execução local

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # gera a pasta out/ (site estático)
npm run start      # serve out/ localmente (usa npx serve)
npm run typecheck  # verificação de tipos
```

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

| Variável | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL final do site (canonical, sitemap, Open Graph, Schema.org). **Obrigatória em produção.** |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 (opcional). Ativa o banner de cookies; o GA só carrega após aceite. |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Código de verificação do Search Console (opcional). |
| `NEXT_PUBLIC_LEGAL_NAME` / `NEXT_PUBLIC_LEGAL_CNPJ` | Razão social e CNPJ exibidos nas páginas legais (opcional). |

> As variáveis `NEXT_PUBLIC_*` são lidas **no momento do build**. Ao alterá-las, gere um novo deploy.

## Onde editar o conteúdo

- `lib/site.ts`: endereço, telefone, Instagram, link do Maps, galeria
- `lib/content.ts`: modalidades, diferenciais e FAQ
- `components/OpenStatus.tsx` + `lib/schedule.ts`: status "Aberto agora" (horários fixos no código)
- `public/images/`: logo, foto do hero e imagem de compartilhamento (`og.jpg`)

### Galeria de fotos

Coloque as fotos (preferencialmente `.webp`) em `public/galeria/` e liste em `lib/site.ts`:

```ts
gallery: [
  { src: "/galeria/treino-1.webp", alt: "Área de musculação da Center Fitness" },
],
```

A seção de galeria aparece automaticamente na página **Sobre** quando houver fotos.

## SEO

Implementado: title e description por página, canonical, Open Graph e Twitter Cards, `sitemap.xml`, `robots.txt`, Schema.org (`ExerciseGym`, `FAQPage`, `BreadcrumbList`), estrutura H1–H3 e SEO local (NAP consistente, Sarandi-PR).

**Pendente (depende de conta/acesso externo):** cadastrar o domínio no Google Search Console, enviar o sitemap e revisar o Perfil da Empresa no Google.

## Deploy manual (GitHub + Cloudflare Pages)

### 1. Enviar para o GitHub

```bash
git init
git add .
git commit -m "feat: site institucional Center Fitness"
git branch -M main
git remote add origin https://github.com/Lucas12es/Center-fitness-academia.git
git push -u origin main
```

### 2. Publicar no Cloudflare Pages

1. Cloudflare → **Workers & Pages** → **Create** → **Pages** → conectar ao repositório.
2. Configurações de build:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** variável `NODE_VERSION` = `20`
3. Adicione `NEXT_PUBLIC_SITE_URL` (e demais variáveis desejadas).
4. Após o primeiro deploy, configure o domínio próprio e atualize `NEXT_PUBLIC_SITE_URL`.

O arquivo `public/_headers` aplica cabeçalhos de segurança e cache no Cloudflare Pages.

## Pendências e pontos a validar com o cliente

- Fotos reais da academia (a foto do hero foi recortada de um story do Instagram, em baixa resolução; substitua por foto original em alta).
- Revisar os textos institucionais (página Sobre e descrições das modalidades) e confirmar se há outros planos/valores para divulgar.
- Informar razão social e CNPJ (páginas legais) e revisar as páginas legais com um profissional jurídico.
- Confirmar funcionamento aos domingos (não consta nos horários divulgados) e regras de feriados.
- Medir Lighthouse após o deploy (metas do Framework: Performance > 95, SEO/Acessibilidade/Boas práticas 100).

## Estrutura

```
app/            rotas (App Router), sitemap, robots, ícones
components/     componentes reutilizáveis (Header, Footer, Button, Faq, ContactForm…)
sections/       seções de página (Hero, Modalidades, Planos, FAQ, CTA…)
lib/            dados do negócio, SEO, validação, horário, WhatsApp
public/         imagens e _headers
```
