import type { ArticleCollection } from "../types";

const articles: ArticleCollection = {
  "pppoker-guide-2026": {
    intro:
      "O PPPoker não é uma sala clássica com um lobby único, e sim uma plataforma de clubes privados. Cada clube define seus jogos, limites e regras, e o dinheiro passa por um agente em vez de um caixa integrado. Este guia explica como esse modelo funciona e o que ele significa para você.",
    sections: [
      {
        heading: "Como funciona o modelo de clubes privados",
        paragraphs: [
          "O aplicativo cuida apenas das cartas e das fichas. O dono do clube cria a sala, escolhe as modalidades, define o rake e decide quem entra — por isso você sempre precisa de um Club ID para achar as mesas e de um Referral ID para ficar vinculado a um agente.",
          "Clubes costumam se unir em ligas para que jogadores de várias salas sentem nas mesmas mesas. É assim que um clube de porte médio como o Grand consegue ação 24 horas, e não apenas no horário de pico local.",
        ],
      },
      {
        heading: "Modalidades e limites disponíveis",
        paragraphs: [
          "No-Limit Hold'em e Pot-Limit Omaha concentram a maior parte do tráfego, com PLO4 e PLO5 especialmente populares nas ligas brasileiras e asiáticas. Short Deck, OFC e All-In or Fold completam a grade.",
          "Os limites vão de micro, com entrada de poucos dólares, até mesas altas apenas por convite. Os torneios variam de buy-ins diários baratos a séries com garantidos expressivos.",
        ],
      },
      {
        heading: "Por que o agente importa mais que o app",
        paragraphs: [
          "Como o PPPoker não processa dinheiro real, seus depósitos, saques e rakeback dependem inteiramente do agente. Um bom agente paga no prazo, registra rake e rakeback por escrito antes de carregar fichas e resolve disputas com o clube por você.",
          "Esse também é o principal risco do formato. A reputação do agente pesa mais do que a maior porcentagem de rakeback anunciada.",
        ],
      },
      {
        heading: "Como rake e rakeback funcionam na prática",
        paragraphs: [
          "A estrutura típica é de até 5% do pote com teto perto de 3 big blinds, mas cada clube define seus números. O rakeback é o que o agente devolve, normalmente toda semana.",
          "As taxas realistas vão de 25% a 60% conforme seu volume mensal. Qualquer coisa muito acima disso merece verificação antes do depósito.",
        ],
      },
    ],
    faq: [
      {
        q: "O PPPoker é uma sala de dinheiro real?",
        a: "Formalmente não. O app usa fichas de jogo e a liquidação em dinheiro real ocorre entre você e o agente do clube.",
      },
      {
        q: "Preciso passar por KYC?",
        a: "O cadastro no app não exige documentos. Alguns agentes pedem verificação em saques maiores.",
      },
      {
        q: "Dá para jogar no computador?",
        a: "Sim. Há cliente para Windows além dos apps iOS e Android, com suporte a várias mesas.",
      },
    ],
  },

  "join-grand-club": {
    intro:
      "Entrar no Grand Club leva cerca de dez minutos: instalar o app, criar a conta, solicitar entrada com nossos dois IDs e falar com o caixa. Veja cada etapa em detalhe, incluindo os pontos onde as pessoas costumam errar.",
    sections: [
      {
        heading: "Passo 1 — Instalar o aplicativo",
        paragraphs: [
          "Baixe o PPPoker na App Store, no Google Play ou como APK direto, caso sua loja não tenha. Há também cliente para Windows se você pretende jogar em várias mesas.",
          "Instale apenas pelas fontes oficiais listadas na nossa página de download. Versões modificadas que circulam em fóruns podem comprometer sua conta.",
        ],
      },
      {
        heading: "Passo 2 — Criar a conta",
        paragraphs: [
          "Abra o app, toque em Register e escolha usuário e senha. Nenhum documento, confirmação de e-mail ou verificação de telefone é exigido nesta etapa.",
          "Escolha um nick que pretenda manter, porque é por ele que o agente e os gerentes do clube vão identificar você em todos os registros de pagamento.",
        ],
      },
      {
        heading: "Passo 3 — Solicitar com os dois IDs",
        paragraphs: [
          "Toque em Join Club e informe o Club ID do Grand, depois o Referral ID no campo abaixo. O Club ID aponta o app para nossa sala; o Referral ID vincula sua conta ao nosso caixa.",
          "Pular o Referral ID é o erro mais comum. Sem ele ninguém carrega suas fichas, você não recebe rakeback e o suporte não consegue ajudar se algo der errado.",
        ],
      },
      {
        heading: "Passo 4 — Colocar fichas",
        paragraphs: [
          "Fale com nosso caixa no Telegram ou WhatsApp informando seu nick e o valor. Confirmamos a estrutura de rake e sua taxa de rakeback antes de qualquer movimentação.",
          "As fichas costumam aparecer no saldo em até 15 minutos. Faça um depósito de teste pequeno na primeira sessão para ver o ciclo completo de depósito e saque antes de comprometer sua banca.",
        ],
      },
    ],
    faq: [
      {
        q: "Quanto demora a aprovação?",
        a: "Normalmente alguns minutos em horário comercial.",
      },
      {
        q: "Posso estar em mais de um clube?",
        a: "Sim, uma conta PPPoker pode pertencer a vários clubes ao mesmo tempo.",
      },
      {
        q: "Qual o depósito mínimo inicial?",
        a: "A partir do equivalente a $10, conforme o método escolhido.",
      },
    ],
  },

  "deposit-methods": {
    intro:
      "O Grand Club opera com caixa de agente, ou seja, os depósitos passam por meios de pagamento locais em vez de um formulário de cartão no site. Parece incomum no início, mas é o que permite pagamentos rápidos em reais, pesos filipinos, rublos e som.",
    sections: [
      {
        heading: "Métodos por região",
        paragraphs: [
          "Mantemos canais separados por mercado para você não passar por conversões desnecessárias.",
        ],
        bullets: [
          "Brasil — Pix, instantâneo, a partir de R$50",
          "Filipinas — GCash e Maya, 5 a 30 minutos, a partir de ₱500",
          "Rússia e CEI — SBP e cartões, 5 a 15 minutos, a partir de ₽1.000",
          "Uzbequistão — Uzcard, Humo e Payme, 10 a 30 minutos, a partir de $10",
          "Mundo todo — USDT TRC20, 5 a 15 minutos, a partir de $10",
        ],
      },
      {
        heading: "Como o depósito acontece",
        paragraphs: [
          "Você envia ao caixa seu nick no PPPoker, o valor e o método preferido. O caixa responde com os dados de pagamento e uma janela curta de validade, normalmente 15 minutos, para travar a cotação.",
          "Depois do pagamento e da confirmação, as fichas são creditadas no saldo do clube e você recebe um aviso. Guarde o comprovante até as fichas aparecerem.",
        ],
      },
      {
        heading: "Taxas, cotação e limites",
        paragraphs: [
          "O Grand não cobra comissão sobre os métodos locais: a cotação informada é a que vale. O único custo externo é a taxa de rede nas transferências em cripto, cobrada pela blockchain e não por nós.",
          "Os mínimos são baixos de propósito para permitir um teste pequeno. O máximo por depósito cresce junto com seu nível VIP.",
        ],
      },
      {
        heading: "Hábitos de segurança",
        paragraphs: [
          "Envie apenas para dados fornecidos pelo caixa na conversa atual, nunca para um endereço repassado por outro jogador. Contas falsas são o golpe mais comum no poker de clubes.",
          "Confirme rake e rakeback por escrito antes do primeiro depósito. Um agente sério passa esses números sem você precisar insistir.",
        ],
      },
    ],
    faq: [
      {
        q: "Posso depositar na minha moeda?",
        a: "Sim, nos seis mercados listados. Nos demais, USDT é o caminho mais rápido.",
      },
      {
        q: "Em quanto tempo as fichas chegam?",
        a: "Normalmente em até 15 minutos. Transferências bancárias podem levar 24 horas.",
      },
      {
        q: "Existe taxa de depósito?",
        a: "Nenhuma taxa do Grand. Transferências em cripto têm a taxa de rede habitual.",
      },
    ],
  },

  "rakeback-explained": {
    intro:
      "Rakeback é a parte da comissão da casa que volta para você. No poker de clubes ele não é um extra de marketing, e sim a principal forma de um jogador sério se manter lucrativo — vale entender exatamente como é calculado.",
    sections: [
      {
        heading: "O que é o rake",
        paragraphs: [
          "Rake é a comissão retirada de cada pote, geralmente até 5% com teto perto de 3 big blinds. Nada é cobrado antes do flop, e os torneios usam uma taxa de inscrição sobre o buy-in.",
          "Em um mês de jogo constante o rake gerado soma bem mais do que a maioria imagina, e é por isso que a porcentagem devolvida importa tanto.",
        ],
      },
      {
        heading: "Como calculamos o rakeback no Grand",
        paragraphs: [
          "Usamos o método contributed: sua parcela do rake é contada a partir dos potes em que você efetivamente colocou dinheiro. O clube envia os totais semanais e sua porcentagem é aplicada sobre eles.",
          "A base é 45% para todos os membros. Os níveis VIP elevam para 50%, 55%, 58% e 60% conforme o rake mensal cresce, com recálculo no dia 1 de cada mês.",
        ],
      },
      {
        heading: "Um exemplo concreto",
        paragraphs: [
          "Suponha que você gere $1.200 de rake em um mês. No nível Ouro isso dá 55%, ou seja, $660 de volta, pagos semanalmente e não apenas no fim do mês.",
          "O mesmo volume em um acordo de 30% devolveria $360. Essa diferença de $300 por mês costuma ser maior que a vantagem que a maioria dos jogadores de limites médios tem sobre o campo.",
        ],
      },
      {
        heading: "Quando você recebe",
        paragraphs: [
          "As estatísticas do clube atualizam semanalmente e pagamos nesse mesmo ciclo, não mensalmente. O pagamento sai pelo mesmo método que você usa para saques.",
          "Você pode pedir o detalhamento de mãos e rake a qualquer momento. Se os números parecerem errados, levamos a questão ao clube em vez de deixar o custo com você.",
        ],
      },
    ],
    faq: [
      {
        q: "Taxas de torneio contam no rakeback?",
        a: "Sim, a taxa de inscrição entra no total mensal de rake.",
      },
      {
        q: "Perco o nível depois de um mês fraco?",
        a: "Os níveis são recalculados mensalmente, mas mantemos seu nível por um mês de cortesia após a queda de volume.",
      },
      {
        q: "60% é o máximo real?",
        a: "É nossa taxa padrão de topo. Jogadores Diamante com volume muito alto podem negociar acordo personalizado.",
      },
    ],
  },

  "withdraw-guide": {
    intro:
      "Um clube vale exatamente o que vale o saque dele. Este guia mostra como funcionam os pagamentos no Grand, quais prazos são realistas e o que fazer para cada saque sair sem atrito.",
    sections: [
      {
        heading: "Fazendo o pedido",
        paragraphs: [
          "Envie ao caixa seu nick, o valor e o método de recebimento. O mínimo é o equivalente a $20 e o máximo por pedido depende do seu nível VIP.",
          "As fichas são debitadas do saldo do clube primeiro e depois a transferência é enviada. Você recebe a confirmação com a referência da transação.",
        ],
      },
      {
        heading: "Prazos realistas",
        paragraphs: [
          "A maioria dos pedidos é processada em 30 minutos no horário comercial e em cerca de duas horas durante a madrugada. Pix, GCash e USDT são os canais mais rápidos.",
          "Transferências bancárias dependem do banco recebedor e podem levar um dia útil. Se um pagamento for demorar, avisamos antes de você confirmar, não depois.",
        ],
      },
      {
        heading: "Verificação em valores maiores",
        paragraphs: [
          "No primeiro saque acima de $500 fazemos uma verificação leve, normalmente uma foto de documento. Isso protege seu saldo contra invasão de conta, não é KYC regulatório.",
          "Depois de verificado, os próximos pagamentos pelo mesmo método saem sem repetir a checagem.",
        ],
      },
      {
        heading: "Como evitar atrasos",
        paragraphs: [
          "Saque para um método registrado no seu próprio nome e mantenha o mesmo canal entre depósitos e saques. Contas divergentes são a principal causa de pagamento pausado.",
          "Se planeja um saque grande, avise o caixa com algumas horas de antecedência para a liquidez estar pronta no canal certo.",
        ],
      },
    ],
    faq: [
      {
        q: "Existe taxa de saque?",
        a: "Nenhuma taxa do Grand. Saques em cripto têm a taxa de rede da blockchain.",
      },
      {
        q: "Posso sacar por método diferente do depósito?",
        a: "Normalmente sim, mas o primeiro pagamento em um método novo pode acionar verificação.",
      },
      {
        q: "Quantos saques posso fazer?",
        a: "Não há limite de pedidos.",
      },
    ],
  },

  "choose-reliable-agent": {
    intro:
      "No poker de clubes o agente guarda o dinheiro, então escolhê-lo é uma decisão maior do que escolher o clube. Estas são as checagens que valem a pena antes do primeiro depósito em qualquer lugar — inclusive conosco.",
    sections: [
      {
        heading: "Verifique o histórico público",
        paragraphs: [
          "Procure um agente com histórico em portais e fóruns independentes, não apenas um canal de Telegram. Reputação que existe fora dos canais do próprio agente é muito mais difícil de forjar.",
          "Pergunte diretamente a outros jogadores do clube. Um clube antigo tem regulares que já passaram por vários ciclos de pagamento e dirão sem rodeios se o caixa é confiável.",
        ],
      },
      {
        heading: "Tenha as condições por escrito",
        paragraphs: [
          "Antes de qualquer ficha ser carregada você deve ter a estrutura de rake, o teto, sua porcentagem de rakeback e o cronograma de pagamento em uma mensagem que possa reler.",
          "Um agente que evita registrar esses números, ou que os altera depois do depósito, já disse tudo o que você precisava saber.",
        ],
      },
      {
        heading: "Ofertas extremas são alerta",
        paragraphs: [
          "Rakeback anunciado bem acima de 60% costuma ser uma promoção curta apresentada como permanente, ou sinal de que os pagamentos vêm de depósitos novos.",
          "O mesmo vale para win rate garantido, bônus sem condições de rollover ou pressão para depositar um valor alto imediatamente.",
        ],
      },
      {
        heading: "Comece pequeno e teste o ciclo inteiro",
        paragraphs: [
          "Faça um depósito mínimo, jogue uma sessão curta, peça um saque e receba um pagamento de rakeback. Só aumente depois de ver o dinheiro circular nos dois sentidos.",
          "Isso custa um pouco de tempo e nada mais, e é a proteção mais eficaz disponível em um formato sem licença.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual o tamanho seguro do primeiro depósito?",
        a: "Fique no mínimo, tipicamente $10 a $50, até completar um saque.",
      },
      {
        q: "Quem guarda meu dinheiro, clube ou agente?",
        a: "O agente. O clube organiza os jogos; o agente acerta com o clube e com você.",
      },
      {
        q: "E se o agente parar de responder?",
        a: "Escale para a gestão do clube ou da liga. Por isso importa escolher clube com administração conhecida.",
      },
    ],
  },
};

export default articles;
