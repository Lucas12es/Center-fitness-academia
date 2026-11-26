/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportação estática: compatível com Cloudflare Pages (saída em /out)
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
