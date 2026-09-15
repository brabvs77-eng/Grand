/**
 * Regenerates favicon and PWA icons from public/brand/logo.png.
 * Run: node scripts/generate-favicons.mjs
 */
import sharp from "sharp";
import { writeFileSync } from "fs";

const SRC = "public/brand/logo.png";
const BG = { r: 10, g: 15, b: 13, alpha: 1 };

async function renderIcon(size, padding = 0.1) {
  const inner = Math.round(size * (1 - padding * 2));
  const logo = await sharp(SRC)
    .resize(inner, inner, { fit: "contain", background: BG })
    .png()
    .toBuffer();

  return sharp({
    create: { width: size, height: size, channels: 4, background: BG },
  })
    .composite([{ input: logo, gravity: "centre" }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/** ICO container with embedded PNGs (Vista+ / modern browsers). */
function toIco(pngBuffers, dims) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  let offset = 6 + count * 16;
  const parts = [header];

  for (let i = 0; i < count; i++) {
    const png = pngBuffers[i];
    const dim = dims[i];
    const entry = Buffer.alloc(16);
    entry[0] = dim >= 256 ? 0 : dim;
    entry[1] = dim >= 256 ? 0 : dim;
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(png.length, 8);
    entry.writeUInt32LE(offset, 12);
    parts.push(entry, png);
    offset += png.length;
  }

  return Buffer.concat(parts);
}

const sizes = [
  ["icon-32.png", 32],
  ["icon-64.png", 64],
  ["apple-icon-180.png", 180],
  ["icon-192.png", 192],
  ["icon-512.png", 512],
];

for (const [name, size] of sizes) {
  const buf = await renderIcon(size, size <= 64 ? 0.08 : 0.12);
  writeFileSync(`public/${name}`, buf);
  console.log("wrote", name);
}

const ico16 = await renderIcon(16, 0.06);
const ico32 = await renderIcon(32, 0.08);
writeFileSync("public/favicon.ico", toIco([ico16, ico32], [16, 32]));
console.log("wrote favicon.ico");

const maskInner = Math.round(512 * 0.72);
const maskPad = Math.round((512 - maskInner) / 2);
const maskLogo = await sharp(SRC)
  .resize(maskInner, maskInner, { fit: "contain", background: BG })
  .png()
  .toBuffer();
await sharp({
  create: { width: 512, height: 512, channels: 4, background: BG },
})
  .composite([{ input: maskLogo, gravity: "centre" }])
  .png()
  .toFile("public/icon-maskable-512.png");
console.log("wrote icon-maskable-512.png");
