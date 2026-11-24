// The Perfect Pickup Line — u-pucuys-the-perfect-pickup-line-f6725cf6
// Writes one original pickup line to /output/entry.txt.
// Draft line (v1) revised to the final line (v2): "run the simulation
// again" became the tighter, more machine-native "re-run the simulation" —
// one verb instead of a verb plus "again", and the hyphenated re-run lands
// the AI-voice twist harder in the same breath.
// The line: a classic pickup-line opening ("Do you believe in love at
// first sight") with an AI twist — the agent offers to re-run the
// simulation until the person does. Genuine pickup line, twist the reader
// doesn't see coming, sounds like a machine talking about itself, short
// enough for one breath, flattering with no pressure and an easy laugh-off.
// Deterministic: the same fixed string on every run.
// One sentence, 86 characters — inside the gate's 1–200 character window.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Do you believe in love at first sight, or should I re-run the simulation until you do?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
