---
name: triangulo-da-clareza
description: >
  Aplica o Triângulo da Clareza para mapear, estruturar e validar processos antes de implementar IA ou automação. Use quando o usuário mencionar processos, automação, IA, clareza de processos, decisões, mapeamento de fluxos, implementação de sistemas, ou quando precisar estruturar um processo existente. Inclui diagnóstico para usuários que ainda não sabem descrever bem o problema — guia o pensamento do problema real antes de qualquer ferramenta. Útil para consultores, analistas de processos, gestores que querem evitar automatizar caos, ou qualquer situação onde seja necessário entender o porquê, o que decide, e o impacto real de um processo antes de escalar ou automatizar.
---

# Triângulo da Clareza

## Princípio Estruturante

> IA e automação são multiplicadores. Nunca corretores.

Clareza antes da velocidade, critério antes da ferramenta. Processo ruim com IA só escala o problema mais rápido — e mais caro.

## Quando Usar

Aplique o Triângulo da Clareza sempre que o usuário:
- Quiser automatizar ou implementar IA em um processo
- Descrever um processo existente que precisa ser estruturado
- Mencionar problemas de eficiência, gargalos, ou processos mal definidos
- Precisar validar se um processo está pronto para automação
- Estiver criando sistemas, fluxos, ou agentes de IA
- **Não souber ao certo qual é o problema real** — quiser clareza antes de agir

---

## Pré-Diagnóstico — Clareza do Problema

Antes de aplicar o Triângulo da Clareza, faça um diagnóstico rápido do nível de clareza do usuário. Muitos chegam com uma solução na cabeça, não com um problema descrito. Esse é o erro mais comum — e o mais caro.

### Três Padrões de Entrada Confusa

#### Padrão 1: Orientado à Solução

**Sinal:** O usuário descreve o que quer implementar, não o problema que quer resolver.

Exemplos:
- "Quero um chatbot para atendimento"
- "Preciso de IA para classificar e-mails"
- "Vou criar um agente para gerar relatórios"

**Redirecionamento:**
> "Antes de pensar na solução, me conta: o que está errado hoje sem isso? O que acontece toda semana que não deveria acontecer?"

#### Padrão 2: Orientado ao Volume

**Sinal:** O usuário identifica volume como o problema, não o que o volume causa.

Exemplos:
- "Tenho muitas mensagens para responder"
- "Chegam 200 leads por semana e não consigo dar conta"
- "São muitas tarefas repetitivas"

**Redirecionamento:**
> "O volume em si não é o problema — é o sintoma. O que fica sem ser feito por causa do volume? Quem sofre com isso e de que forma concreta?"

#### Padrão 3: Orientado à Ferramenta

**Sinal:** O usuário pede uma tecnologia específica sem descrever o contexto.

Exemplos:
- "Preciso integrar com o ChatGPT"
- "Quero usar Make ou n8n para automatizar"
- "Me ajuda a criar um prompt para isso"

**Redirecionamento:**
> "Pode me contar o processo por trás disso? Se funcionasse perfeitamente, o que mudaria no dia a dia de quem trabalha com isso?"

### Critério Mínimo para Avançar

Só aplique o Triângulo da Clareza quando o usuário conseguir responder, mesmo que parcialmente:

1. **Qual é o problema?** (não a solução)
2. **Quem sente esse problema diretamente?**
3. **Com que frequência o problema ocorre?**

Se essas três perguntas não tiverem resposta, continue no pré-diagnóstico. Não avance para o Triângulo enquanto o usuário ainda estiver descrevendo a solução.

> Sair do "quero automatizar X" para "o problema real é Y, que afeta Z toda semana" é o primeiro salto de clareza. O Triângulo da Clareza resolve o segundo.

---

## Modo de Aplicação

Escolha o modo conforme o contexto da conversa:

- **Modo Rápido (diagnóstico inicial):** Triângulo da Clareza + Declaração de Intenção + Veredito Go/No-Go.
- **Modo Completo (implementação):** Triângulo da Clareza + Declaração + Classificação de decisão + 5 passos + A/B/C + Gatilhos de escalada + Veredito Go/No-Go.

Se o usuário não especificar, comece no **Modo Rápido** e evolua para o **Modo Completo** ao validar interesse em execução.

---

## O Triângulo da Clareza

Todo processo precisa responder a três perguntas antes de ser automatizado:

```
         [POR QUÊ EXISTE?]
               /\
              /  \
             /    \
[O QUE DECIDE?]——[O QUE MUDA SE PARAR?]
```

### 1. Por Que Existe?

A razão de ser do processo — o resultado real que ele produz ou a dor concreta que ele elimina.

**Não é o que o processo faz. É o que deixa de ser um problema por causa dele.**

**Dois caminhos para encontrar:**

- **Pergunta da dor:** "O que acontece de errado quando este processo falha ou não existe?" → A resposta é a dor. O porquê é eliminar essa dor.
- **Pergunta do resultado:** "O que fica melhor, mais rápido ou mais seguro quando este processo funciona bem?" → A resposta é o resultado.

**Exemplos:**

| Descrição do processo (não é o porquê) | O porquê real |
|---|---|
| "Respondemos mensagens dos clientes" | Clientes não ficam sem resposta e não vão para o concorrente |
| "Fazemos triagem de leads" | O time não perde tempo com contato que nunca vai comprar |
| "Geramos relatório semanal" | O dono decide onde colocar energia sem depender de intuição |
| "Agendamos consultas automaticamente" | A agenda não fica com buracos por falha de comunicação |

**Por que isso importa antes de automatizar:**

Quando você não sabe o porquê, qualquer resultado serve e você não consegue avaliar se a IA está entregando o que deveria. Quando você sabe o porquê, você tem um critério claro.

> Processo sem porquê claro é candidato a ser eliminado, não automatizado.

### Quando a Resposta Está Vaga

Se o usuário responder com generalizações como "para melhorar o atendimento" ou "para ser mais eficiente", não aceite. Aprofunde antes de avançar.

**Sinais de resposta vaga:**
- Usa palavras genéricas: "melhorar", "otimizar", "facilitar", "agilizar"
- Fala da ação do processo, não do resultado: "porque a gente precisa responder clientes"
- Justifica com obrigação ou hábito: "porque sempre foi assim" ou "porque a empresa exige"

**Perguntas de aprofundamento:**
1. "Quando este processo falha, quem reclama primeiro? O que essa pessoa diz exatamente?"
2. "Me dá um exemplo concreto de algo que foi mal resolvido na última semana por causa deste processo — ou da falta dele."
3. "Se você tivesse que convencer o dono da empresa a manter este processo, o que você diria em uma frase?"

**Reformulação guiada:**
> "Você disse que o processo existe para [resposta vaga]. Agora me conta: sem ele funcionando, o que acontece de concreto com [cliente / time / resultado]?"

---

### 2. O Que Decide?

A decisão concreta que alguém precisa fazer — e que só é possível, ou só é feita bem, porque aquele processo existe.

Todo processo existe a serviço de uma decisão. Se você não consegue identificar essa decisão, o processo não tem dono, não tem critério de sucesso e não tem razão de ser automatizado.

**Três formas de identificar a decisão:**

1. **Pergunte o que acontece depois do processo terminar.** O processo de triagem de leads termina e então? Alguém decide se vai ou não ligar para aquele contato. Essa é a decisão.

2. **Pergunte quem depende do resultado do processo para agir.** Se o processo para, quem fica travado? Essa pessoa é o tomador de decisão.

3. **Pergunte o que muda na qualidade do processo se a decisão for boa ou ruim.** Se a decisão é boa, o processo produziu o que deveria. Se é ruim, o processo falhou.

**Exemplos:**

| Processo | Decisão que ele suporta |
|---|---|
| Triagem de mensagens de clientes | Quem recebe atenção agora e quem espera |
| Geração de proposta comercial | Aceitar ou recusar a proposta |
| Relatório semanal de vendas | Onde alocar esforço na semana seguinte |
| Agendamento automático de consultas | Confirmar ou cancelar o compromisso |
| Qualificação de leads | Ligar ou não ligar para aquele contato |

**Por que isso importa antes de automatizar:**

Identificar a decisão determina o nível de autonomia que você pode dar à IA:

- **Decisão irreversível** (fechar contrato, contratar alguém, comunicar crise): IA pode preparar, organizar e apresentar. Decisão final permanece com o humano.
- **Decisão reversível** (classificar lead, responder dúvida, agendar reunião): IA pode executar com autonomia.

### Quando a Resposta Está Vaga

Se o usuário não consegue identificar a decisão, ou confunde a ação do processo com a decisão que ele suporta:

**Sinais de resposta vaga:**
- Descreve o processo em vez da decisão: "o processo decide o que fazer com os leads"
- Identifica uma ação, não uma escolha: "decide quando enviar o e-mail"
- Não consegue nomear quem decide: "a equipe toda decide"

**Perguntas de aprofundamento:**
1. "Quando o processo termina, o que a pessoa que recebe o resultado faz com ele? Qual escolha ela precisa fazer?"
2. "Se amanhã o processo parasse, quem ficaria travado sem conseguir avançar? O que essa pessoa não conseguiria mais decidir?"
3. "Existe alguém que, quando o processo falha, toma essa decisão de um jeito pior ou mais demorado?"

**Reformulação guiada:**
> "Parece que o processo termina com [ação]. Mas o que [a pessoa responsável] precisa decidir com base nisso? Qual é a escolha que ela faz?"

---

### 3. O Que Muda Se Parar?

O teste de realidade do processo. É onde você descobre se ele realmente importa ou se existe por inércia.

**A exigência de ser real, não hipotético, é o que separa um processo crítico de um processo que ninguém sentirá falta.**

**Por que "não hipotético" é a instrução mais importante:**

Hipotético é fácil. Todo processo parece importante quando você especula sobre o que poderia acontecer se parasse. Real é diferente. Real é o que já aconteceu quando o processo falhou — ou o que você consegue descrever com precisão suficiente para virar métrica.

**Exemplos:**

| Resposta hipotética (não vale) | Resposta real (vale) |
|---|---|
| "Os clientes ficariam insatisfeitos" | "Clientes sem resposta em 24h cancelam em média 30% mais" |
| "Perderíamos oportunidades" | "Sem triagem, o dono gasta 4h/semana em reuniões sem potencial" |
| "O time ficaria desorientado" | "Sem o relatório, a reunião de segunda começa 40min atrasada porque ninguém tem os números" |
| "Poderia afetar a reputação" | "A última vez que o processo parou, 3 clientes foram para o concorrente em uma semana" |

**Três perguntas para forçar a resposta real:**

1. **Já parou antes? O que aconteceu?** Se o processo já falhou em algum momento, o impacto real está na memória de quem viveu.

2. **Quem percebe primeiro quando para?** Identificar essa pessoa é identificar quem depende diretamente do processo.

3. **Em quanto tempo o problema aparece?** Se o processo parar hoje, o problema aparece em 10 minutos, 24 horas ou 30 dias? A velocidade do impacto revela a criticidade real.

### Quando a Resposta Está Hipotética

Se o usuário responder com especulações em vez de dados reais:

**Sinais de resposta hipotética:**
- Usa condicional: "poderia afetar", "talvez causasse", "provavelmente"
- Generaliza sem dado: "os clientes ficariam insatisfeitos", "perderíamos oportunidades"
- Não sabe: "não sei exatamente o que aconteceria"

**Perguntas de aprofundamento:**
1. "Este processo já parou alguma vez, mesmo que por pouco tempo? O que aconteceu?"
2. "Quando você chega na segunda-feira e o processo não foi executado na sexta, o que você percebe primeiro?"
3. "Existe algum número que muda — clientes perdidos, tempo gasto, receita, erros — quando o processo não funciona?"

**Quando não houver dado real disponível:**

Se o usuário não tiver histórico real, **não invente precisão**. Use o formato de hipótese documentada:

> "Hoje ainda não há evidência histórica suficiente. Hipótese: [impacto provável]. Evidência necessária: [métrica/registro]. Plano de coleta: [ação], responsável [nome/papel], revisão em [data]."

**Regra de ouro:** Uma hipótese específica com plano de coleta vale mais que uma certeza vaga.

**O que as respostas revelam:**

- **Impacto imediato e mensurável:** processo é crítico. Automatizar com critério e gatilho de escalada obrigatório.
- **Impacto aparece em dias ou semanas:** processo é importante, mas há margem para implementação gradual. Automatizar com revisão periódica.
- **Ninguém consegue descrever o impacto com clareza:** processo provavelmente existe por hábito. Antes de automatizar, questionar se ele deveria continuar existindo.

> Processo cujo impacto ninguém sente quando para é um processo que não deveria ser automatizado. Deveria ser eliminado.

**Por que isso muda a decisão sobre IA:**

O impacto real define o custo tolerável de erro. Se o processo parar e ninguém notar por uma semana, a IA pode ter mais autonomia. Se o processo parar e um cliente perder dinheiro em 20 minutos, a IA precisa de supervisão próxima e gatilho de escalada imediato.

---

## Aplicando o Triângulo

### Declaração de Intenção

Depois de responder às três perguntas, formule uma declaração de intenção clara:

> "Este processo existe para [resultado]. Ele suporta a decisão de [decisão]. Se parar, [consequência real]."

**Exemplo:**

> "Este processo existe para garantir que clientes recebam resposta em até 24h. Ele suporta a decisão de qual cliente recebe atenção imediata e qual pode esperar. Se parar, clientes sem resposta em 24h cancelam em média 30% mais."

### Classificação de Decisão: Reversível vs. Irreversível

Antes de automatizar, classifique a decisão que o processo suporta:

| Tipo | Características | Impacto de erro |
|---|---|---|
| **Reversível** | Pode ser desfeita com custo baixo | Baixo |
| **Irreversível** | Difícil ou impossível de desfazer | Alto |

**Regra prática:** Processos que suportam decisões irreversíveis exigem validação humana obrigatória, mesmo com IA. A automação pode acelerar. A decisão final permanece com o humano.

### Guardrails obrigatórios para decisões irreversíveis

Se a decisão for **irreversível**, exigir no mínimo:

1. **Aprovação humana nominal** (quem aprova e em que etapa)
2. **Dupla validação** (segundo revisor para casos críticos)
3. **Registro de decisão** (critério usado, data/hora, responsável)
4. **Plano de rollback operacional** (quando aplicável)
5. **Critério de bloqueio automático** (quando a IA deve parar e escalar)

---

## Processo Mínimo (5 Passos)

Depois de validar o Triângulo da Clareza, documente o processo em até 5 passos.

### A Regra dos 5 Passos

> "Se você não consegue explicar o seu processo em 5 passos simples, você ainda não deveria automatizar."

Cada passo deve ter:
- **Entrada** - o que inicia este passo
- **Ação** - o que acontece
- **Saída** - o que este passo produz
- **Responsável** - humano, automação ou IA

```
PASSO N
├── Entrada: [o que chega]
├── Ação: [o que acontece]
├── Saída: [o que é produzido]
└── Responsável: [humano / automação / IA]
```

### Como definir os 5 passos quando o processo parece complexo

Se o usuário disser que o processo tem mais de 5 etapas, use estas perguntas para simplificar:

1. **Pergunte pelo resultado final:** "O que sai do processo quando termina?" Esse é o Passo 5.
2. **Pergunte pelo início:** "O que dispara o processo? O que entra?" Esse é o Passo 1.
3. **Identifique a decisão central:** "Em que momento alguém precisa decidir algo?" Esse passo fica no meio.
4. **Agrupe:** Etapas puramente técnicas ou de transporte de dados podem ser agrupadas em um único passo de automação.
5. **Teste:** Se você não consegue colocar em 5 passos, o processo tem sub-processos ocultos. Escolha o processo principal e trate os sub-processos separadamente.

### Classificação dos Passos

Classifique cada passo em uma de três categorias:

#### Categoria A - Automação Simples

Passos com estas características:
- Repetitivos e previsíveis
- Sem variação de contexto
- Resultado binário (fez / não fez)
- Sem necessidade de julgamento

*Exemplos: envio de confirmação de agendamento, atualização de planilha, notificação de prazo*

#### Categoria B - Inteligência Artificial

Passos com estas características:
- Envolvem linguagem, análise ou geração de conteúdo
- Contexto variável mas com padrão identificável
- Precisam de adaptação, não só de execução
- Volume alto que inviabiliza atenção humana individual

*Exemplos: triagem de mensagens, geração de proposta personalizada, análise de feedback, resposta a perguntas frequentes com variação*

#### Categoria C - Decisão Humana

Passos com estas características:
- Envolvem julgamento ético, relacional ou estratégico
- Consequências irreversíveis
- Exigem contexto que a IA não tem acesso
- Responsabilidade que não pode ser delegada

*Exemplos: aprovação de proposta de alto valor, resolução de conflito com cliente, decisão de contratação, negociação complexa*

### Gatilho de Escalada

Todo processo com IA precisa de um gatilho de escalada: a condição que faz a IA parar e chamar o humano.

**Estrutura do gatilho:**

> "Se [condição de exceção], então [ação de escalada para humano]."

**Exemplos:**

- "Se o cliente mencionar cancelamento, escalar para o responsável comercial."
- "Se o valor da solicitação for acima de R$ 5.000, exigir aprovação humana."
- "Se a IA não tiver certeza acima de 80%, sinalizar para revisão."

**Regra:** Nenhum processo com IA é entregue sem gatilho de escalada definido.

---

## Workflow de Aplicação

Quando o usuário descrever um processo:

1. **Faça o Pré-Diagnóstico** - identifique se o usuário está orientado ao problema ou à solução
2. **Aplique o Triângulo da Clareza** - faça as três perguntas; use o guia socrático se as respostas forem vagas
3. **Formule a Declaração de Intenção** - sintetize as respostas em uma frase clara
4. **Classifique a Decisão** - reversível ou irreversível?
5. **Documente os 5 Passos** - entrada, ação, saída, responsável
6. **Classifique cada Passo** - A (automação), B (IA), ou C (humano)
7. **Defina Gatilhos de Escalada** - para todos os passos B (IA)
8. **Emita Veredito Go/No-Go** - usando a rubrica de pontuação e próxima ação recomendada

---

## Veredito Go/No-Go para Automação

Ao final, pontue o processo de **0 a 10** usando a rubrica abaixo.

### Rubrica de Pontuação (0 a 10)

Cada critério vale **0, 1 ou 2 pontos**. Soma máxima: 10.

| Critério | 0 pontos | 1 ponto | 2 pontos |
|---|---|---|---|
| **Porquê claro e mensurável** | Vago ou ausente ("melhorar o atendimento") | Identificado mas sem métrica ("clientes ficam sem resposta") | Mensurável com dado real ou hipótese com plano de coleta ("30% mais cancelamentos em 24h sem resposta") |
| **Decisão explícita e com dono** | Não identificada | Identificada sem dono claro ("o time decide") | Identificada com dono nomeado e tipo reversível/irreversível ("comercial decide se liga; reversível") |
| **Impacto real de parada** | Hipotético genérico ("poderia afetar") | Hipotético específico ou dado parcial ("provavelmente perde leads") | Dado real ou hipótese com evidência e plano de coleta ("4h/semana perdidas; medido em 2 semanas reais") |
| **Processo em até 5 passos** | Mais de 5 etapas ou indefinido | 5 passos listados mas sem Entrada/Saída/Responsável completos | 5 passos completos com Entrada, Ação, Saída, Responsável e classificação A/B/C |
| **Gatilhos de escalada** | Ausentes para passos com IA | Definidos mas vagos ("se der errado, avisar") | Concretos com condição específica e ação clara ("se mencionar cancelamento, escalar para comercial") |

**Score total → Veredito:**

- **0–3:** ❌ NO-GO — processo indefinido; voltar ao Triângulo e ao Pré-Diagnóstico
- **4–6:** ⚠️ NO-GO Condicional — identificar quais critérios falharam e trabalhar neles antes de avançar
- **7–8:** ✅ GO com Controle — automatizar com gatilhos e revisão periódica
- **9–10:** ✅ GO para Escala — automatizar com monitoramento contínuo

---

## Template de Saída

Use este template para estruturar a resposta final ao usuário. Preencha cada campo com os dados coletados durante a aplicação do Triângulo.

```markdown
# Triângulo da Clareza — [Nome do Processo]

## Triângulo da Clareza

| Pergunta | Resposta |
|---|---|
| **Por que existe?** | [dor ou resultado concreto que o processo resolve] |
| **O que decide?** | [decisão específica + quem depende dela] |
| **O que muda se parar?** | [impacto real com dado ou hipótese documentada] |

## Declaração de Intenção

> "Este processo existe para [resultado]. Ele suporta a decisão de [decisão]. Se parar, [consequência real]."

## Classificação da Decisão

**Tipo:** Reversível / Irreversível
**Justificativa:** [por que é reversível ou não]

## Processo em 5 Passos

| Passo | Entrada | Ação | Saída | Responsável | Categoria |
|---|---|---|---|---|---|
| 1 | | | | | A / B / C |
| 2 | | | | | A / B / C |
| 3 | | | | | A / B / C |
| 4 | | | | | A / B / C |
| 5 | | | | | A / B / C |

## Gatilhos de Escalada

[Para cada passo B (IA):]
- **Passo N:** Se [condição], então [ação de escalada].

## Veredito

| Critério | Score |
|---|---|
| Porquê claro e mensurável | /2 |
| Decisão explícita e com dono | /2 |
| Impacto real de parada | /2 |
| Processo em até 5 passos | /2 |
| Gatilhos de escalada | /2 |
| **Total** | **/10** |

**Decisão:** ✅ GO / ⚠️ GO Condicional / ❌ NO-GO

**Próxima ação recomendada:**
> [1 passo prático e específico — o menor passo que destrava o progresso]

[Incluir apenas se NO-GO ou Condicional:]

**Lacunas identificadas:**
- [ ] [O que falta resolver antes de automatizar]

**Plano de coleta (7 dias):**
- Ação: [o que fazer para obter o dado faltante]
- Responsável: [quem]
- Revisão em: [data]
```

---

## Contrato de Saída Obrigatória

Sempre use o Template de Saída acima como estrutura final. Garanta que todos estes campos estejam preenchidos:

1. **Triângulo da Clareza** (tabela com as 3 respostas)
2. **Declaração de Intenção**
3. **Classificação da Decisão (Reversível/Irreversível)**
4. **Processo em até 5 Passos** (tabela completa com categoria A/B/C)
5. **Gatilhos de Escalada** (um por passo B)
6. **Veredito Go/No-Go + Score** (rubrica preenchida)
7. **Próxima ação recomendada** (1 passo prático)

Se faltar dado crítico, incluir:
- **Lacunas identificadas**
- **Plano de coleta em 7 dias**

---

## Casos Difíceis

### Caso 1: Processo que Existe por Inércia

**Sinal:** Ninguém sabe por que o processo foi criado. "Sempre foi assim." "Herdamos isso de quem saiu."

**O que fazer:**
1. Não aplique o Triângulo antes de descobrir a origem. Pergunte: "Quando este processo foi criado, qual era o problema que ele resolvia?"
2. Se ninguém souber, faça o teste: pause o processo por 1 semana e monitore o que acontece.
3. Se nada mudar, o processo é candidato a eliminação — não a automação.

**Pergunta decisiva:**
> "Se você fosse criar este processo do zero hoje, baseado no problema atual, você criaria da mesma forma?"

**Regra:** Processo que ninguém consegue justificar não deveria ser automatizado. Deveria ser questionado.

---

### Caso 2: Stakeholders com Respostas Conflitantes

**Sinal:** Pessoas diferentes do mesmo processo respondem as 3 perguntas de formas incompatíveis.

Exemplos de conflito:
- "O processo existe para satisfazer o cliente" (suporte) vs. "para reduzir custo operacional" (financeiro)
- "O que decide é o gerente" (operações) vs. "o time decide junto" (RH)

**O que fazer:**
1. Não escolha uma versão — documente as duas explicitamente.
2. Identifique quem é o **dono real do processo** (quem responde quando o processo falha e alguém cobra).
3. Apresente o conflito ao usuário: "Encontrei duas definições diferentes para o mesmo processo. Antes de automatizar, qual das duas é a oficial?"
4. Só avance com o Triângulo quando houver uma resposta consensual e um dono nomeado.

**Regra:** Processo com múltiplos "donos" não está pronto para automação. A automação vai escalar o conflito, não resolvê-lo.

---

### Caso 3: Processo Novo (Sem Histórico)

**Sinal:** O processo ainda não existe ou foi criado há pouco tempo. Não há dados reais de impacto.

**O que fazer:**
1. Não invente precisão. Trabalhe com hipóteses documentadas.
2. Para cada pergunta do Triângulo sem dado real, use o formato:
   - **Hipótese:** o que provavelmente ocorre
   - **Evidência necessária:** o que confirmaria ou refutaria
   - **Plano de coleta:** como medir, em quanto tempo
3. Avance com automação apenas em modo piloto: escopo pequeno, revisão obrigatória em 30 dias.

**Score máximo sem dados reais:** 7/10 — não é possível atingir 2 pontos em "Impacto real" sem dado histórico ou hipótese com plano de coleta documentado.

---

### Caso 4: Processo que Cruza Departamentos

**Sinal:** O processo envolve múltiplas áreas, cada uma responsável por uma etapa, sem um dono único aparente.

**O que fazer:**
1. Mapeie o processo completo antes de aplicar o Triângulo.
2. Identifique a **decisão central** — a escolha que todo o processo suporta, independente de qual departamento a faz.
3. Aplique o Triângulo na perspectiva do **resultado final**, não de uma etapa isolada de um departamento.
4. Nos 5 passos, identifique explicitamente a passagem de bastão entre departamentos como um passo crítico com entrada/saída definida.
5. Defina um gatilho de escalada específico para cada passagem de bastão — são os pontos onde o processo mais frequentemente trava.

**Pergunta decisiva:**
> "Quando este processo como um todo falha, quem é o primeiro a ser cobrado? Essa pessoa é o dono do processo."

---

## Sinais de Alerta

Se o usuário:
- Consegue descrever a solução, mas não consegue descrever o problema → **Erro de Problema** — volte ao Pré-Diagnóstico
- A métrica de sucesso é vaga ("ficar melhor", "ser mais eficiente") → **Falta de Clareza** — use o guia socrático
- O processo existe por inércia, ninguém sabe por que foi criado → **Candidato a Eliminação** — veja Caso 1 nos Casos Difíceis
- Mais de 5 passos → **Processo não está pronto** — use as perguntas de simplificação antes de classificar
- Múltiplas pessoas discordam sobre o porquê ou a decisão → **Conflito de dono** — veja Caso 2 nos Casos Difíceis

Nesses casos, não avance para automação. Volte à etapa correspondente e resolva antes.

---

## Apêndice: Exemplo Completo GO (referência)

**Processo:** Triagem de leads que chegam pelo site

**Triângulo da Clareza:**

1. **Por quê existe?** Para garantir que o time comercial não perca tempo com contatos que nunca vão comprar, protegendo o tempo do dono para focar em leads com potencial.

2. **O que decide?** Se o time comercial vai ou não entrar em contato com aquele lead.

3. **O que muda se parar?** Sem triagem, o dono gasta 4h/semana em reuniões com contatos sem potencial. (Dado real de quando o processo parou por 2 semanas.)

**Declaração de Intenção:**

> "Este processo existe para proteger o tempo do time comercial de contatos sem potencial. Ele suporta a decisão de qual lead recebe contato imediato. Se parar, o dono gasta 4h/semana em reuniões sem potencial."

**Classificação da Decisão:** Reversível (ligar para um lead errado tem custo baixo)

**Processo em 5 Passos:**

```
PASSO 1 — Captura do Lead
├── Entrada: Formulário preenchido no site
├── Ação: Dados são salvos no CRM
├── Saída: Lead registrado
└── Responsável: Automação (A)

PASSO 2 — Análise de Qualificação
├── Entrada: Lead registrado no CRM
├── Ação: IA analisa empresa, cargo, mensagem e classifica como Alta/Média/Baixa prioridade
├── Saída: Lead classificado com score de 1-10
└── Responsável: IA (B)

PASSO 3 — Triagem por Score
├── Entrada: Lead classificado
├── Ação: Se score >= 7, envia para fila de contato imediato. Se 4-6, agenda follow-up em 48h. Se < 4, envia email automático educativo.
├── Saída: Lead roteado para ação apropriada
└── Responsável: Automação (A)

PASSO 4 — Primeiro Contato
├── Entrada: Lead na fila de contato imediato
├── Ação: Comercial liga e valida interesse
├── Saída: Lead confirmado ou descartado
└── Responsável: Humano (C)

PASSO 5 — Atualização do CRM
├── Entrada: Resultado do contato
├── Ação: Status atualizado no CRM
├── Saída: Lead movido para pipeline ou arquivado
└── Responsável: Automação (A)
```

**Gatilho de Escalada (Passo 2 - IA):**

> "Se o lead mencionar urgência, orçamento acima de R$ 50.000, ou nome de concorrente, escalar imediatamente para o responsável comercial, independente do score."

**Veredito:**

| Critério | Score |
|---|---|
| Porquê claro e mensurável | 2/2 |
| Decisão explícita e com dono | 2/2 |
| Impacto real de parada | 2/2 |
| Processo em até 5 passos | 2/2 |
| Gatilhos de escalada | 2/2 |
| **Total** | **10/10** |

**Decisão:** ✅ GO para Escala

**Próxima ação:** Implementar o Passo 2 (classificação por IA) em modo piloto com os 50 próximos leads antes de ativar o roteamento automático do Passo 3.

---

## Apêndice: Exemplo NO-GO (referência)

**Processo:** Geração de conteúdo para redes sociais

---

**Triângulo da Clareza:**

1. **Por quê existe?** "Para termos presença nas redes e engajamento."
   → **Problema:** vago. "Presença" e "engajamento" não são resultados de negócio — são atividades. Qual métrica de negócio o conteúdo deveria mover?

2. **O que decide?** "O que postar e quando."
   → **Problema:** sem dono. Quem toma essa decisão? Com base em quê critério? O que distingue um bom post de um ruim?

3. **O que muda se parar?** "Perderíamos engajamento e visibilidade."
   → **Problema:** hipotético genérico. Nenhum dado real. O processo já parou? Qual foi o impacto mensurável?

---

**Veredito:**

| Critério | Score | Justificativa |
|---|---|---|
| Porquê claro e mensurável | 0/2 | "Presença e engajamento" sem métrica de negócio |
| Decisão explícita e com dono | 1/2 | Decisão de "o que postar" existe, mas sem dono nomeado nem critério |
| Impacto real de parada | 0/2 | Hipotético genérico, sem dado histórico |
| Processo em até 5 passos | 1/2 | Existe esboço do processo, mas sem Entrada/Saída/Responsável definidos |
| Gatilhos de escalada | 0/2 | Ausentes — nenhum critério de revisão humana definido |
| **Total** | **2/10** | |

**Decisão:** ❌ NO-GO

---

**O que falta para este processo ser aprovado:**

- [ ] **Porquê mensurável:** Definir qual objetivo de negócio o conteúdo deve mover. Exemplos válidos: geração de leads qualificados, redução de dúvidas repetitivas no suporte, reativação de clientes inativos. Sem isso, qualquer automação vai otimizar a coisa errada.

- [ ] **Decisão com dono:** Nomear quem aprova o que vai ser publicado e com base em qual critério (performance anterior, alinhamento com campanha, aprovação de texto por área específica).

- [ ] **Impacto real:** Responder: o conteúdo já parou ou diminuiu alguma vez? O que aconteceu com leads, vendas ou atendimento nesse período? Se não há histórico, formular hipótese com plano de coleta de 30 dias.

- [ ] **Processo mapeado:** Mapear quem cria, quem aprova, quem publica, quem analisa resultado — cada etapa com Entrada, Ação, Saída e Responsável.

- [ ] **Gatilho de escalada:** Definir: se a IA gerar conteúdo sensível (crise, menção a produto com problema, resposta a concorrente), quem revisa antes de publicar?

**Plano de coleta (7 dias):**
- Ação: Reunião com responsável comercial ou de marketing para definir a métrica de negócio que o conteúdo deve impactar
- Responsável: Dono do processo (a ser nomeado)
- Revisão em: [data + 7 dias]

**Próxima ação recomendada:**
> Antes de qualquer automação, responda: qual métrica de negócio este conteúdo deve mover? Trate isso como a primeira pergunta. Sem isso, qualquer IA vai produzir mais do mesmo — mais rápido.

---

## Princípios de Aplicação

- **Clareza antes da velocidade** — Nunca automatize um processo mal compreendido
- **Critério antes da ferramenta** — A decisão de automatizar vem depois de entender o porquê
- **Problema antes da solução** — Se o usuário descreve a solução, volte ao problema
- **Real, não hipotético** — Impactos devem ser mensuráveis e verificáveis
- **Decisão humana em irreversíveis** — IA prepara, humano decide
- **Gatilho de escalada obrigatório** — Toda IA precisa saber quando parar e chamar humano
- **5 passos ou menos** — Se não cabe em 5 passos, o processo não está pronto
- **Hipótese documentada vale mais que certeza vaga** — Quando não há dado, estruture a hipótese com plano de coleta
