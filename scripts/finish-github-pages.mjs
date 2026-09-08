import { copyFile, readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = join(process.cwd(), "dist/client");

async function htmlFiles(dir) {
  const out = [];
  for (const name of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, name.name);
    if (name.isDirectory()) out.push(...(await htmlFiles(p)));
    else if (name.name.endsWith(".html")) out.push(p);
  }
  return out;
}

const css = (await readdir(join(root, "assets"))).find((f) => f.endsWith(".css"));
if (!css) throw new Error("No CSS file in dist/client/assets");

for (const file of await htmlFiles(root)) {
  let html = await readFile(file, "utf8");
  html = html.replace(/\/never\/assets\/styles-[^"]+\.css/g, `/never/assets/${css}`);
  html = html.replaceAll("/never/never/", "/never/");
  await writeFile(file, html);
}

await copyFile(join(root, "index.html"), join(root, "404.html"));
await writeFile(join(root, ".nojekyll"), "");
console.log(`GitHub Pages ready: CSS ${css}, 404.html copied`);
