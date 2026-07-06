import { defineConfig } from "astro/config";

const base = process.env.ASTRO_BASE ?? "/boxifu-portfolio";
const site = process.env.ASTRO_SITE ?? "https://boxifu.github.io";

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "always",
});
