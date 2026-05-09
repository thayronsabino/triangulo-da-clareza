# triangulo-da-clareza

Uma skill de IA que evita o erro mais caro da automação: escalar processo confuso.

Antes de pensar em IA, prompts, agentes ou integrações, essa skill força clareza sobre o processo.

## O que é esta skill

`triangulo-da-clareza` é uma skill em Markdown (`SKILL.md`) compatível com Claude Code, Codex, e qualquer agente de IA que suporte instruções via arquivo de skill. Ela conduz uma análise estruturada de processos em dois níveis:

**Para quem já sabe qual é o problema:** aplica 3 perguntas essenciais que validam se o processo está pronto para automação.

**Para quem ainda não sabe qual é o problema:** faz um pré-diagnóstico que guia o pensamento do usuário — da solução para o problema real — antes de qualquer ferramenta.

As 3 perguntas do Triângulo:

1. **Por que este processo existe?**
2. **O que este processo decide?**
3. **O que muda de verdade se ele parar?**

Com isso, o usuário sai de "quero automatizar" para "sei exatamente o que automatizar, com qual risco e com qual critério de sucesso".

## O problema que ela resolve

Muita automação falha por um motivo simples: automa-se uma execução sem entender a decisão por trás.

Isso gera:
- retrabalho com IA
- fluxo bonito, resultado fraco
- mais velocidade para o problema errado
- custo alto com pouco impacto real

Esta skill corrige isso na raiz: **clareza antes de velocidade**.

## O Triângulo da Clareza

```text
         [POR QUÊ EXISTE?]
               /\
              /  \
             /    \
[O QUE DECIDE?]——[O QUE MUDA SE PARAR?]
```

### 1) Por quê existe?
Define a dor que o processo elimina ou o resultado real que ele produz.

### 2) O que decide?
Define a decisão concreta suportada pelo processo (e quem depende dela).

### 3) O que muda se parar?
Valida o impacto real (mensurável), não hipótese genérica.

## Como a skill conduz o usuário

A skill opera em duas etapas antes do triângulo:

0. **Pré-diagnóstico:** identifica se o usuário está descrevendo uma solução ou um problema real. Se necessário, guia o raciocínio com perguntas socráticas até que o problema esteja claro.

Depois do triângulo, ela organiza o processo em uma sequência prática:

1. Declaração de intenção do processo
2. Classificação da decisão (reversível vs irreversível)
3. Processo mínimo em até 5 passos
4. Classificação de cada passo:
   - A: automação simples
   - B: IA
   - C: decisão humana
5. Definição de gatilhos de escalada para passos com IA
6. Veredito Go/No-Go com score 0-10 e rubrica explícita

Resultado: um plano implementável, com limites claros de autonomia e risco.

## Para quem é

- Consultores e analistas de processos
- Gestores que querem automatizar sem perder controle
- Times de operações e produto
- Empresas que já usam IA e querem melhorar qualidade de decisão
- **Quem ainda não sabe ao certo qual é o problema** que quer resolver

## Exemplo de ganho imediato

Sem clareza:
> "Vamos automatizar a triagem de leads."

Com a skill:
> "Este processo existe para proteger tempo comercial; decide prioridade de contato; se parar, o dono perde 4h/semana com leads sem potencial."

Esse nível de clareza reduz erro de implementação e aumenta ROI da automação.

## Compatibilidade

Esta skill é um arquivo Markdown com frontmatter padrão. Funciona em qualquer plataforma que suporte instruções via arquivo de skill:

| Plataforma | Caminho padrão de instalação |
|---|---|
| **Codex** | `~/.codex/skills/triangulo-da-clareza/SKILL.md` |
| **Claude Code** | veja instruções de instalação manual abaixo |
| **Outros agentes** | use `--target` com o caminho da sua plataforma |

## Instalação

### Opção 1: npx (recomendado)

Instala no caminho padrão do Codex:

```bash
npx github:thayronsabino/triangulo-da-clareza
```

Com destino customizado (para outras plataformas):

```bash
npx github:thayronsabino/triangulo-da-clareza --target "C:\caminho\da\sua\plataforma\skills"
```

### Opção 2: script PowerShell (Windows)

Instala no caminho padrão:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
```

Com destino customizado:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1 -Target "C:\caminho\customizado\skills"
```

Caminho padrão de instalação:
`%USERPROFILE%\.codex\skills\triangulo-da-clareza\SKILL.md`

### Opção 3: instalação manual

Clone o repositório e copie `SKILL.md` para o diretório de skills da sua plataforma.

```bash
git clone https://github.com/thayronsabino/triangulo-da-clareza.git
```

Depois copie `SKILL.md` para onde sua plataforma lê skills.

## Como usar

Depois de instalar, peça ao seu agente de IA algo como:

- "Aplique o Triângulo da Clareza neste processo"
- "Quero automatizar meu atendimento, use esta skill"
- "Mapeie meu processo em 5 passos e classifique A/B/C"
- "Não sei bem qual é meu problema, me ajude a entender antes de automatizar"

## Estrutura do repositório

- `SKILL.md`: instruções completas da skill — compatível com qualquer agente que leia arquivos de skill em Markdown.
- `bin/install.js`: instalador para `npx`.
- `scripts/install.ps1`: instalador direto no Windows.

## Princípio central

> IA e automação são multiplicadores. Nunca corretores.

Se o processo está confuso, a automação só acelera confusão.  
Se o processo está claro, a automação vira vantagem competitiva.
