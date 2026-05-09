# triangulo-da-clareza

Uma skill para Codex que evita o erro mais caro da automação: escalar processo confuso.

Antes de pensar em IA, prompts, agentes ou integrações, essa skill força clareza sobre o processo.

## O que é esta skill

`triangulo-da-clareza` é uma skill em Markdown (`SKILL.md`) que orienta o Codex a conduzir uma análise estruturada de processos com 3 perguntas essenciais:

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

Depois do triângulo, ela organiza o processo em uma sequência prática:

1. Declaração de intenção do processo
2. Classificação da decisão (reversível vs irreversível)
3. Processo mínimo em até 5 passos
4. Classificação de cada passo:
   - A: automação simples
   - B: IA
   - C: decisão humana
5. Definição de gatilhos de escalada para passos com IA

Resultado: você ganha um plano implementável, com limites claros de autonomia e risco.

## Para quem é

- Consultores e analistas de processos
- Gestores que querem automatizar sem perder controle
- Times de operações e produto
- Empresas que já usam IA e querem melhorar qualidade de decisão

## Exemplo de ganho imediato

Sem clareza:
> "Vamos automatizar a triagem de leads."

Com a skill:
> "Este processo existe para proteger tempo comercial; decide prioridade de contato; se parar, o dono perde 4h/semana com leads sem potencial."

Esse nível de clareza reduz erro de implementação e aumenta ROI da automação.

## Instalação

### Opção 1: baixar/clonar e instalar direto

1. Clone ou baixe este repositório.
2. Execute:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
```

Instala em:
`%USERPROFILE%\.codex\skills\triangulo-da-clareza\SKILL.md`

### Opção 2: instalação com npx

```bash
npx github:thayronsabino/triangulo-da-clareza
```

Opcional (destino customizado):

```bash
npx github:thayronsabino/triangulo-da-clareza --target "C:\caminho\customizado\skills"
```

## Como usar no Codex

Depois de instalar, peça algo como:

- "Aplique o Triângulo da Clareza neste processo"
- "Quero automatizar meu atendimento, use esta skill"
- "Mapeie meu processo em 5 passos e classifique A/B/C"

## Estrutura do repositório

- `SKILL.md`: instruções completas da skill.
- `bin/install.js`: instalador para `npx`.
- `scripts/install.ps1`: instalador direto no Windows.

## Princípio central

> IA e automação são multiplicadores. Nunca corretores.

Se o processo está confuso, a automação só acelera confusão.  
Se o processo está claro, a automação vira vantagem competitiva.
