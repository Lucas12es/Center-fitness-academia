# Center Fitness Academia — Site (HTML estático)

Site institucional em HTML/CSS/JS puro (sem build), Sarandi-PR. Desenvolvido pela LDT Negócios & Soluções.

> Desvio documentado do Framework LDT: stack em HTML estático (em vez de Next.js) por solicitação do cliente, para deploy direto na Cloudflare sem etapa de build.

## Páginas
Início, Sobre, Modalidades, Planos, Contato + Política de Privacidade e Termos de Uso.

## Estrutura
- Raiz do repositório — site completo (HTML, `css/`, `js/`, `images/`, `robots.txt`, `_headers`, `404.html`)
- `wrangler.jsonc` + `.assetsignore` — deploy de assets estáticos (arquivos de projeto não são publicados)
- `deploy.bat` — envia as alterações ao GitHub

## Deploy na Cloudflare
- **Build command:** deixar vazio
- **Deploy command:** `npx wrangler deploy`
- (Cloudflare Pages: output directory `/` (raiz), sem build command)

## Pendências
- Validar fotos reais, texto "Sobre", horário de domingo e revisão jurídica das páginas legais.
- Lighthouse ainda não medido.
