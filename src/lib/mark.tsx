import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

/**
 * Monograma da marca.
 *
 * Um "V" em serifa editorial, a mesma família do wordmark do site, sobre
 * fundo tinta. Uma letra só porque, em 16px na aba do navegador, duas se
 * fecham e viram borrão — e "VS" no setor de beleza puxa leitura de
 * Victoria's Secret, que não é a associação que interessa.
 *
 * O filete champanhe repete o recurso de linha fina usado no site inteiro,
 * mas só aparece a partir de 64px: abaixo disso vira sujeira.
 */
export async function renderMark(size: number) {
  const font = await readFile(
    path.join(
      process.cwd(),
      "node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff"
    )
  ).catch(() => null);

  const showRule = size >= 64;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0c0b",
          color: "#faf8f5",
        }}
      >
        <div
          style={{
            display: "flex",
            // A altura de caixa da serifa é bem menor que o em, então a
            // letra precisa de um corpo grande para preencher o ladrilho.
            fontSize: size * (showRule ? 0.92 : 1.12),
            fontFamily: font ? "Editorial" : "serif",
            lineHeight: 1,
            // O vértice do V puxa o peso para baixo; sobe um pouco para
            // centrar opticamente.
            marginTop: -size * (showRule ? 0.1 : 0.06),
          }}
        >
          V
        </div>

        {showRule && (
          <div
            style={{
              width: size * 0.28,
              height: Math.max(1, size * 0.016),
              background: "#c8b39a",
              marginTop: -size * 0.04,
            }}
          />
        )}
      </div>
    ),
    {
      width: size,
      height: size,
      fonts: font
        ? [{ name: "Editorial", data: font, style: "normal", weight: 400 }]
        : [],
    }
  );
}

/**
 * O mesmo monograma empacotado no formato ICO.
 *
 * Os <link rel="icon"> da página apontam para os PNGs de /icon, e é isso
 * que navegador e Google leem. Mas muito coletor nem abre o HTML: chuta
 * /favicon.ico direto — agregadores, leitores de feed, o fetcher de
 * favicon do Google como fallback. Sem esse arquivo eles pegavam 404 e
 * ficavam com o que já tinham em cache, que era o favicon padrão do
 * template do Next.
 *
 * Carrega 16 e 32 para a aba e 48 porque é o tamanho que o Google pede
 * (ele quer múltiplo de 48px, e nenhum dos PNGs de /icon além do 192 é).
 */
export async function renderFaviconIco() {
  const sizes = [16, 32, 48];

  const pngs = await Promise.all(
    sizes.map(async (size) =>
      Buffer.from(await (await renderMark(size)).arrayBuffer())
    )
  );

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reservado
  header.writeUInt16LE(1, 2); // 1 = ícone, 2 = cursor
  header.writeUInt16LE(sizes.length, 4);

  // O diretório vem inteiro antes das imagens, então o primeiro offset já
  // considera todas as entradas.
  let offset = header.length + sizes.length * 16;

  const entries = pngs.map((png, index) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(sizes[index], 0); // largura
    entry.writeUInt8(sizes[index], 1); // altura
    entry.writeUInt8(0, 2); // sem paleta
    entry.writeUInt8(0, 3); // reservado
    entry.writeUInt16LE(1, 4); // planos de cor
    entry.writeUInt16LE(32, 6); // bits por pixel
    entry.writeUInt32LE(png.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += png.length;
    return entry;
  });

  return Buffer.concat([header, ...entries, ...pngs]);
}
