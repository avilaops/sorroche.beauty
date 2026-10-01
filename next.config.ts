import type { NextConfig } from "next";

// Site 100% estático: `next build` gera a pasta `out/`, servida direto pelo
// Caddy (file_server). Sem servidor Node em produção.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    // A otimização de imagem do Next depende de servidor; no export as
    // imagens saem como estão em public/.
    unoptimized: true,
  },
};

export default nextConfig;
