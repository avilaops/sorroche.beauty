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
