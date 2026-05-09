---
name: triangulo-da-clareza
description: >
  Aplica o Triângulo da Clareza para mapear, estruturar e validar processos antes de implementar IA ou automação. Use quando o usuário mencionar processos, automação, IA, clareza de processos, decisões, mapeamento de fluxos, implementação de sistemas, ou quando precisar estruturar um processo existente. Também útil para consultores, analistas de processos, gestores que querem evitar automatizar caos, ou qualquer situação onde seja necessário entender o porquê, o que decide, e o impacto real de um processo antes de escalar ou automatizar.
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

## Modo de Aplicação

Escolha o modo conforme o contexto da conversa:

- **Modo Rápido (diagnóstico inicial):** Triângulo da Clareza + Declaração de Intenção + Veredito Go/No-Go.
- **Modo Completo (implementação):** Triângulo da Clareza + Declaração + Classificação de decisão + 5 passos + A/B/C + Gatilhos de escalada + Veredito Go/No-Go.

Se o usuário não especificar, comece no **Modo Rápido** e evolua para o **Modo Completo** ao validar interesse em execução.

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

### Quando não houver dado real disponível

Se o usuário não tiver histórico real, **não invente precisão**. Estruture assim:

- **Hipótese de impacto:** o que provavelmente ocorre se o processo parar
- **Evidência necessária:** dado objetivo que confirmará/refutará a hipótese
- **Plano de coleta (7 dias):** como medir, quem mede, quando revisar

Formato:

> "Hoje ainda não há evidência histórica suficiente. Hipótese: [impacto provável]. Evidência necessária: [métrica/registro]. Plano de coleta: [ação], responsável [nome/papel], revisão em [data]."

**O que as respostas revelam:**

- **Impacto imediato e mensurável**: processo é crítico. Automatizar com critério e gatilho de escalada obrigatório.
- **Impacto aparece em dias ou semanas**: processo é importante, mas há margem para implementação gradual. Automatizar com revisão periódica.
- **Ninguém consegue descrever o impacto com clareza**: processo provavelmente existe por hábito. Antes de automatizar, questionar se ele deveria continuar existindo.

> Processo cujo impacto ninguém sente quando para é um processo que não deveria ser automatizado. Deveria ser eliminado.

**Por que isso muda a decisão sobre IA:**

O impacto real define o custo tolerável de erro. Se o processo parar e ninguém notar por uma semana, a IA pode ter mais autonomia. Se o processo parar e um cliente perder dinheiro em 20 minutos, a IA precisa de supervisão próxima e gatilho de escalada imediato.

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

## Workflow de Aplicação

Quando o usuário descrever um processo:

1. **Aplique o Triângulo da Clareza** - faça as três perguntas e ajude o usuário a responder com clareza e especificidade
2. **Formule a Declaração de Intenção** - sintetize as respostas em uma frase clara
3. **Classifique a Decisão** - reversível ou irreversível?
4. **Documente os 5 Passos** - entrada, ação, saída, responsável
5. **Classifique cada Passo** - A (automação), B (IA), ou C (humano)
6. **Defina Gatilhos de Escalada** - para todos os passos B (IA)
7. **Emita Veredito Go/No-Go** - com score de clareza e próxima ação recomendada

## Veredito Go/No-Go para Automação

Ao final, pontue o processo de **0 a 10**:

- **0-3:** processo indefinido
- **4-6:** processo parcialmente claro
- **7-8:** processo claro e automatizável com controle
- **9-10:** processo claro, medido e pronto para escalar

Regras de decisão:

- **Score < 7:** **NO-GO** (não automatizar ainda)
- **Score >= 7:** **GO condicionado** (automatizar com gatilhos e revisão)
- **Score >= 9:** **GO para escala** (automatização com monitoramento contínuo)

Critérios mínimos de pontuação:

1. Porquê claro e mensurável
2. Decisão explícita e com dono
3. Impacto de parada real (ou plano de coleta objetivo)
4. Processo em até 5 passos
5. Gatilhos de escalada definidos para passos com IA

## Contrato de Saída Obrigatória

Sempre responda com esta estrutura final:

1. **Triângulo da Clareza**
2. **Declaração de Intenção**
3. **Classificação da Decisão (Reversível/Irreversível)**
4. **Processo em até 5 Passos**
5. **Classificação A/B/C por passo**
6. **Gatilhos de Escalada**
7. **Veredito Go/No-Go + Score (0-10)**
8. **Próxima ação recomendada (1 passo prático)**

Se faltar dado crítico, incluir:
- **Lacuna de evidência**
- **Plano de coleta em 7 dias**

## Sinais de Alerta

Se o usuário:
- Consegue descrever a solução, mas não consegue descrever o problema → **Erro de Problema**
- A métrica de sucesso é vaga ("ficar melhor", "ser mais eficiente") → **Falta de Clareza**
- O processo existe por inércia, ninguém sabe por que ele foi criado → **Candidato a Eliminação**
- Mais de 5 passos → **Processo não está pronto para automação, precisa refinamento**

Nesses casos, volte ao Triângulo da Clareza e refine antes de avançar.

## Apêndice: Exemplo Completo (referência)

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

## Princípios de Aplicação

- **Clareza antes da velocidade** - Nunca automatize um processo mal compreendido
- **Critério antes da ferramenta** - A decisão de automatizar vem depois de entender o porquê
- **Real, não hipotético** - Impactos devem ser mensuráveis e verificáveis
- **Decisão humana em irreversíveis** - IA prepara, humano decide
- **Gatilho de escalada obrigatório** - Toda IA precisa saber quando parar e chamar humano
- **5 passos ou menos** - Se não cabe em 5 passos, o processo não está pronto
