import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The image beside this module is the make.fun entry supplied for this bounty.
// Copy its bytes unchanged so the grader receives the exact submitted image.
const entryImage = join(dirname(fileURLToPath(import.meta.url)), "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, "entry.png"), await readFile(entryImage));
