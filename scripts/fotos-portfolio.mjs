/**
 * Prepara fotos para public/portfolio/: recorte 4:5 com o rosto no terço
 * superior, 1440x1800, JPEG otimizado e SEM metadados (EXIF carrega
 * localização e modelo do celular da cliente).
 *
 * Uso: node scripts/fotos-portfolio.mjs <origem> <nome> [top=0..1]
 *   top = fração da altura onde começa o recorte (0 = topo).
 */
import sharp from "sharp";
import { statSync } from "node:fs";

const [origem, nome, topArg = "0"] = process.argv.slice(2);
if (!origem || !nome) {
  console.error("uso: node scripts/fotos-portfolio.mjs <origem> <nome> [top]");
  process.exit(1);
}

const img = sharp(origem).rotate(); // aplica orientação EXIF; toFile sem withMetadata descarta o resto
const { width: w, height: h } = await img.metadata();

let cw = w, ch = Math.round((w * 5) / 4);
if (ch > h) { ch = h; cw = Math.round((h * 4) / 5); }
const left = Math.round((w - cw) / 2);
const top = Math.min(Math.round(h * Number(topArg)), h - ch);

const destino = `public/portfolio/${nome}.jpg`;
await img
  .extract({ left, top, width: cw, height: ch })
  .resize({ width: 1440, height: 1800, fit: "cover" })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(destino);

console.log(`${nome.padEnd(18)} ${w}x${h} -> 1440x1800  ${Math.round(statSync(destino).size / 1024)}KB`);
