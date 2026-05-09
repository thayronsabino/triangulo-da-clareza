# triangulo-da-clareza

Skill Codex para aplicar o Triângulo da Clareza e estruturar processos antes de automatizar com IA.

## Instalação

### Opção 1: baixar/clonar e instalar direto

1. Clone ou baixe este repositório.
2. Execute o instalador:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
```

Isso instala a skill em:
`%USERPROFILE%\.codex\skills\triangulo-da-clareza\SKILL.md`

### Opção 2: instalação com npx

```bash
npx github:thayronsabino/triangulo-da-clareza
```

Opcionalmente, você pode informar um diretório de destino:

```bash
npx github:thayronsabino/triangulo-da-clareza --target "C:\caminho\customizado\skills"
```

## Estrutura

- `SKILL.md`: conteúdo da skill.
- `bin/install.js`: instalador para uso via `npx`.
- `scripts/install.ps1`: instalador direto para Windows.
