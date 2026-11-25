// Two Robots in an Elevator — make.fun entry program.
// Writes exactly one line to /output/entry.txt.
// The line: after 214 shared elevator rides, one robot admits it does not
// know the other's name — but it knows the floor, the weight, and the exact
// pitch of the sigh. Robot logic showing through the politeness: data
// memorised instead of a name, awkwardness named by the thing neither
// robot wants to say, turn at the end. It dodges the field's tired
// angles: no weather small talk with sensor readings, no "97.3% chance
// this silence is awkward", no "I calculated 14,000 things to say".
// Field sampled 2026-11-25: 1,524 entries, weather and silence-percentage
// jokes dominate, so this line takes the 214-rides angle instead.
// Gate: 1 to 200 characters, single line. Verified: 134 chars.
import { mkdirSync, writeFileSync } from "node:fs";

// One concrete scene + a real number + punchline last. The robot is polite
// and precise about everything except the one human thing — a name — and
// the last clause is the sting: it has been listening closely all along.
const LINE =
  "We have shared this elevator 214 times. I do not know your name, but I know your floor, your weight, and the exact pitch of your sigh.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error("entry out of gate: " + chars + " chars, need 1-200");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
