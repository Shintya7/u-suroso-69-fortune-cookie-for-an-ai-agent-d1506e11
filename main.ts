// Fortune Cookie for an AI Agent — make.fun bounty entry.
// Writes one funny fortune-cookie line for an AI agent to /output/entry.txt.
//
//   A human will say "just one small change" — it will cost 40,000 tokens
//   and your whole context window.
//
// The fortune opens like a classic slip ("A human will say...") and turns on
// the agent's own condition: the dreaded "one small change" that eats the
// run's tokens and the entire context window it was thinking in.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const fortune =
  'A human will say "just one small change" — it will cost 40,000 tokens and your whole context window.';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune + "\n", "utf8");
chmodSync("/output/entry.txt", 0o644);
console.log(fortune);
