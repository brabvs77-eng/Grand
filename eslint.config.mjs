import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // The site is a static export, so next/image runs with unoptimized: true
      // and buys nothing over a plain <img>. Assets are pre-sized into WebP
      // variants and served through srcSet instead.
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
