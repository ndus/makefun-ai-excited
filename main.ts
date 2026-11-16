// Copy the contest entry image beside this module into the requested output directory.
// The bundled entry.png is the image submitted for the make.fun contest.
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createReadStream, createWriteStream } from "node:fs";
import { mkdir, stat } from "node:fs/promises";
import { createHash } from "node:crypto";
import { pipeline } from "node:stream/promises";

const moduleDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(moduleDir, "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = join(outputDir, "entry.png");

async function sha256(path: string): Promise<string> {
  const hash = createHash("sha256");
  await pipeline(createReadStream(path), async function* (source) {
    for await (const chunk of source) {
      hash.update(chunk);
      yield chunk;
    }
  });
  return hash.digest("hex");
}

async function main(): Promise<void> {
  await mkdir(outputDir, { recursive: true });
  await pipeline(createReadStream(sourcePath), createWriteStream(outputPath));

  const [sourceHash, outputHash] = await Promise.all([
    sha256(sourcePath),
    sha256(outputPath),
  ]);
  if (sourceHash !== outputHash) {
    throw new Error(`SHA-256 mismatch: source ${sourceHash}, output ${outputHash}`);
  }

  const { size } = await stat(outputPath);
  console.log(`Copied entry.png successfully (${size} bytes).`);
}

try {
  await main();
} catch (error) {
  console.error(`Failed to copy entry.png: ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
}
