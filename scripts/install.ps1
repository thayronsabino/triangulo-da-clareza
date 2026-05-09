param(
  [string]$Target = ""
)

$ErrorActionPreference = "Stop"

$skillName = "triangulo-da-clareza"
$repoRoot = Split-Path -Parent $PSScriptRoot
$sourceSkill = Join-Path $repoRoot "SKILL.md"

if (-not (Test-Path -LiteralPath $sourceSkill)) {
  throw "SKILL.md nao encontrado em $sourceSkill"
}

# Caminho padrao para Codex. Use -Target para outras plataformas (Claude Code, etc).
if ($Target -ne "") {
  $targetDir = Join-Path $Target $skillName
} else {
  $targetDir = Join-Path $HOME ".codex\skills\$skillName"
}

New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
Copy-Item -LiteralPath $sourceSkill -Destination (Join-Path $targetDir "SKILL.md") -Force

Write-Output "[ok] Skill instalada em: $targetDir\SKILL.md"
