import type { MetadataRoute } from "next";

// A aplicação é a área privada da cliente: nada aqui deve ser indexado.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
