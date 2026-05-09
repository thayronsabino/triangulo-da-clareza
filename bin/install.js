#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const os = require("os");

const args = process.argv.slice(2);
const targetFlagIndex = args.indexOf("--target");
const customTarget =
  targetFlagIndex >= 0 && args[targetFlagIndex + 1]
    ? args[targetFlagIndex + 1]
    : null;

const skillName = "triangulo-da-clareza";
const sourceSkill = path.resolve(__dirname, "..", "SKILL.md");
const defaultTarget = path.join(os.homedir(), ".codex", "skills");
const targetRoot = customTarget || defaultTarget;
const destinationDir = path.join(targetRoot, skillName);
const destinationSkill = path.join(destinationDir, "SKILL.md");

if (!fs.existsSync(sourceSkill)) {
  console.error("[erro] Arquivo SKILL.md nao encontrado no pacote.");
  process.exit(1);
}

fs.mkdirSync(destinationDir, { recursive: true });
fs.copyFileSync(sourceSkill, destinationSkill);

console.log(`[ok] Skill instalada em: ${destinationSkill}`);
