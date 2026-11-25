import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Finance rejected my $4 coffee receipt for 'insufficient justification,' then approved a $12,000 offsite to discuss cost discipline.";
if (line.length < 1 || line.length > 200) throw new Error(`entry length ${line.length} outside 1-200`);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n");
