# triangulo-da-clareza

> IA e automação são multiplicadores. Nunca corretores.

Skill de IA para validar processos antes de automatizar. Funciona com Claude Code, Codex e qualquer agente que suporte arquivos de skill em Markdown.

---

## O problema

Automação falha quando escala execução sem entender a decisão por trás. O resultado é fluxo bonito para o problema errado — mais rápido, mais caro, mesmo resultado ruim.

A causa quase sempre é a mesma: ninguém respondeu três perguntas antes de começar.

---

## O Triângulo da Clareza

```
         [POR QUÊ EXISTE?]
               /\
              /  \
             /    \
[O QUE DECIDE?]——[O QUE MUDA SE PARAR?]
```

Três perguntas que separam processo pronto para automação de processo pronto para causar problema.

Antes da skill:
> "Vamos automatizar a triagem de leads."

Depois da skill:
> "Este processo existe para proteger o tempo do time comercial. Ele suporta a decisão de qual lead recebe contato imediato. Se parar, o dono gasta 4h/semana em reuniões sem potencial — dado real de quando o processo parou por 2 semanas."

Essa diferença determina se a automação vai funcionar ou vai amplificar o problema.

---

## Como funciona

A skill opera em sequência:

**1. Pré-diagnóstico**
Antes de qualquer triângulo, identifica se o usuário está descrevendo uma solução ou um problema real. Se necessário, usa perguntas socráticas para chegar ao problema.

**2. Triângulo da Clareza**
Aplica as três perguntas com guias de aprofundamento para cada resposta vaga.

**3. Estruturação**
Transforma as respostas em: declaração de intenção, processo em até 5 passos classificados (A: automação / B: IA / C: humano), gatilhos de escalada e veredito Go/No-Go com score 0–10.

**4. Saída padronizada**
Entrega um documento Markdown preenchido, pronto para usar como base de implementação.

---

## O que a skill entrega

```markdown
# Triângulo da Clareza — Triagem de Leads

| Pergunta           | Resposta                                                              |
|--------------------|-----------------------------------------------------------------------|
| Por que existe?    | Proteger o tempo do time comercial de contatos sem potencial          |
| O que decide?      | Se o comercial vai ou não entrar em contato com aquele lead           |
| O que muda se parar? | Dono gasta 4h/semana em reuniões sem potencial (dado real, 2 semanas) |

> "Este processo existe para proteger o tempo do time comercial..."

**Classificação:** Reversível

| Passo | Ação                        | Categoria |
|-------|-----------------------------|-----------|
| 1     | Captura no CRM              | A         |
| 2     | Classificação por IA        | B         |
| 3     | Roteamento por score        | A         |
| 4     | Primeiro contato            | C         |
| 5     | Atualização do CRM          | A         |

**Gatilho:** Se lead mencionar concorrente ou orçamento acima de R$ 50k, escalar para o comercial.

**Score:** 10/10 — GO para Escala
```

---

## Para quem é

- Consultores e analistas de processos
- Gestores que querem automatizar sem perder controle
- Times de produto e operações
- **Quem não sabe ao certo qual é o problema** que precisa resolver antes de automatizar

---

## Instalação

### Codex

```bash
npx github:thayronsabino/triangulo-da-clareza
```

Instala em `~/.codex/skills/triangulo-da-clareza/SKILL.md`.

### Claude Code

Copie o `SKILL.md` para a pasta de skills do seu projeto ou para o diretório de plugins do Claude Code:

```bash
git clone https://github.com/thayronsabino/triangulo-da-clareza.git
cp triangulo-da-clareza/SKILL.md .claude/skills/triangulo-da-clareza.md
```

### Outros agentes

Use `--target` com o caminho de skills da sua plataforma:

```bash
npx github:thayronsabino/triangulo-da-clareza --target "/caminho/da/sua/plataforma/skills"
```

### Windows (PowerShell)

```powershell
# Caminho padrão (Codex)
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1

# Caminho customizado (outras plataformas)
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1 -Target "C:\caminho\skills"
```

---

## Como usar

Depois de instalar, peça ao seu agente:

- `"Aplique o Triângulo da Clareza neste processo"`
- `"Quero automatizar meu atendimento — use o Triângulo da Clareza"`
- `"Não sei exatamente qual é o meu problema, me ajude a entender antes de pensar em automação"`

---

## Compatibilidade

| Plataforma | Status |
|---|---|
| Codex | instalação via `npx` |
| Claude Code | instalação manual do `SKILL.md` |
| Outros agentes com suporte a skills | via `--target` |

---

## Licença

MIT
