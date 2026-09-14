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

  "how-to-download-pppoker": {
    intro:
      "O PPPoker roda em iOS, Android e Windows, mas o caminho de instalação é diferente em cada um e o app não está disponível em todas as lojas regionais. Este guia cobre os três casos e o que fazer quando a busca na loja não retorna nada.",
    sections: [
      {
        heading: "iPhone e iPad",
        paragraphs: [
          "Procure por PPPoker na App Store e instale como qualquer outro app. A publicação é da PPPoker Ltd e o download tem cerca de 200 MB, então use Wi-Fi se o seu plano de dados for limitado.",
          "Se o app não aparecer na busca, a região da sua loja não distribui ele. Trocar a região do Apple ID é possível, mas desvincula compras e assinaturas existentes, por isso a maioria dos jogadores em regiões restritas prefere usar um aparelho Android.",
        ],
      },
      {
        heading: "Android",
        paragraphs: [
          "A Google Play é o caminho mais simples onde o app está listado. Onde não está, o PPPoker publica um APK assinado no próprio site, e instalar exige liberar instalações pelo navegador em Configurações, Apps, Acesso especial.",
          "Baixe o APK apenas do domínio oficial ou pelo link da nossa página de download. Versões reempacotadas que circulam em fóruns e canais do Telegram costumam vir com ladrões de credenciais.",
        ],
        bullets: [
          "Confira se o nome do pacote é com.pppoker.android antes de instalar",
          "Mantenha o Play Protect ativo — ele analisa apps instalados por fora também",
          "Atualizações de APK são manuais, então revise todo mês",
        ],
      },
      {
        heading: "Windows",
        paragraphs: [
          "O cliente para Windows é um download separado no site do PPPoker e é a escolha certa se você pretende jogar mais de duas mesas ao mesmo tempo. Ele permite redimensionar e organizar as mesas, o que o app do celular não faz.",
          "O cliente de desktop e o app móvel usam a mesma conta, então dá para começar a sessão no celular e continuar no computador sem nenhuma etapa de transferência.",
        ],
      },
      {
        heading: "Primeira abertura",
        paragraphs: [
          "Registre-se com usuário e senha — não é preciso confirmar e-mail nem telefone. Depois candidate-se ao Grand Club com o nosso Club ID e informe o Referral ID para que sua conta fique vinculada ao agente que paga o seu rakeback.",
          "Informar o Referral ID no cadastro é o único passo que dá trabalho corrigir depois, então faça isso antes de sentar na primeira mesa.",
        ],
      },
    ],
    faq: [
      {
        q: "O APK é seguro?",
        a: "O publicado no site oficial do PPPoker é. Versões de espelhos de terceiros não são, e são a causa mais comum de contas de clube roubadas.",
      },
      {
        q: "Dá para jogar no Mac?",
        a: "Não existe cliente nativo para Mac. Quem usa macOS joga pelo app iOS no iPhone ou roda o cliente Windows via Parallels ou CrossOver.",
      },
      {
        q: "Quanto de dados uma sessão consome?",
        a: "Entre 20 e 40 MB por hora de jogo. O peso está no download inicial, não nas partidas.",
      },
    ],
  },

  "club-id-explained": {
    intro:
      "Todo jogador de PPPoker lida com dois números, e confundi-los é o motivo mais comum de um jogador novo ficar sem rakeback. O Club ID te coloca nos jogos; o Referral ID define quem te paga.",
    sections: [
      {
        heading: "Para que serve o Club ID",
        paragraphs: [
          "O Club ID é o endereço público de um clube dentro do app. Você digita em Clube, Entrar no Clube, e isso envia uma solicitação aos gestores daquele clube. Nada relacionado ao seu dinheiro está ligado a ele.",
          "Como o PPPoker não tem lobby global, o Club ID é a única forma de achar uma sala específica. Os clubes divulgam o deles abertamente, por isso ele aparece no site de todo clube sério, incluindo o nosso.",
        ],
      },
      {
        heading: "Para que serve o Referral ID",
        paragraphs: [
          "O Referral ID identifica o agente a que sua conta pertence. É o campo que determina quem processa seus depósitos e saques e qual tabela de rakeback se aplica ao seu volume.",
          "Um agente pode atender jogadores de vários clubes, e um clube pode ter jogadores de muitos agentes. Por isso os dois IDs são separados e estar no clube certo não significa automaticamente estar com o agente certo.",
        ],
      },
      {
        heading: "Por que os dois importam para o rakeback",
        paragraphs: [
          "O rakeback é calculado sobre o rake gerado pelos jogadores de um determinado Referral ID. Se o campo ficou vazio, seu rake continua indo para o clube, mas nenhum agente está registrado como devedor da sua parte.",
          "Isso não é falha nem golpe — é simplesmente como a contabilidade funciona. Também significa que um agente não consegue creditar retroativamente o volume gerado antes do vínculo existir.",
        ],
      },
      {
        heading: "Corrigindo um referral ausente ou errado",
        paragraphs: [
          "Se você se cadastrou sem Referral ID, fale com o caixa antes de jogar. A reatribuição costuma ser possível em conta nova, mas depende de um gestor do clube executar e pode levar um dia.",
          "Se você já jogou volume relevante sob outro agente, a transferência normalmente exige a concordância dele. Resolver isso no cadastro leva trinta segundos; resolver depois pode levar uma semana.",
        ],
        bullets: [
          "Club ID — onde você joga",
          "Referral ID — quem te paga",
          "Os dois são informados no app, não em nenhum site",
        ],
      },
    ],
    faq: [
      {
        q: "Posso estar em dois clubes ao mesmo tempo?",
        a: "Sim. O PPPoker permite entrar em vários clubes com uma conta, e o Referral ID fica na sua conta, não em um clube específico.",
      },
      {
        q: "Alguém mais vê meu Referral ID?",
        a: "Só o seu agente e os gestores do clube. Ele não aparece na mesa e outros jogadores não conseguem consultá-lo.",
      },
      {
        q: "E se o clube recusar minha solicitação?",
        a: "Mande seu nick do PPPoker para o caixa. Solicitações sem referral conhecido às vezes ficam em análise em vez de serem recusadas.",
      },
    ],
  },

  "welcome-bonus-terms": {
    intro:
      "O bônus de boas-vindas do Grand dobra o seu primeiro depósito em 100%. A manchete é simples, mas o que vale ler é como o bônus é liberado, porque ele vira saldo sacável conforme você joga, e não como dinheiro na hora.",
    sections: [
      {
        heading: "Como funciona o dobro",
        paragraphs: [
          "Deposite qualquer valor a partir do mínimo e o mesmo valor é creditado como bônus, até o teto publicado na página de bônus. Um depósito de 200 vira 200 em fichas mais 200 em bônus pendente.",
          "Seu depósito fica disponível na hora e é seu para sacar quando quiser. Só a parte do bônus tem condição de liberação.",
        ],
      },
      {
        heading: "Como o bônus é liberado",
        paragraphs: [
          "O bônus destrava em parcelas conforme você gera rake, ou seja, ele é pago pelo jogo e não presenteado adiantado. Cada parcela liberada entra no seu saldo sacável no acerto semanal, junto do rakeback.",
          "Não é preciso ganhar: sessões perdedoras também geram rake, então o bônus continua liberando independente do resultado. A única coisa que trava tudo é parar de jogar.",
        ],
      },
      {
        heading: "O prazo de liberação",
        paragraphs: [
          "O período de destrave dura um número fixo de dias a partir do depósito. O que sobrar bloqueado no fim desse prazo expira, então vale depositar um valor compatível com o volume que você realmente pretende jogar.",
          "Se você joga poucas horas por semana, um depósito menor que libera por inteiro vale mais que um grande que expira pela metade. O caixa informa o rake necessário para cada valor antes de você depositar.",
        ],
        bullets: [
          "O depósito é sacável desde o início",
          "O bônus libera contra rake, com acerto semanal",
          "O bônus não liberado expira no fim do prazo",
        ],
      },
      {
        heading: "O que anula o bônus",
        paragraphs: [
          "Transferência de fichas entre contas, combinação de assentos com um parceiro e qualquer forma de conluio anulam o bônus e normalmente a conta. Os clubes revisam históricos de mãos, e esses padrões aparecem nos dados.",
          "Sacar antes do fim do prazo cancela o que ainda estiver bloqueado. Saques parciais não são problema — só o restante não liberado é afetado.",
        ],
      },
    ],
    faq: [
      {
        q: "Dá para acumular com o rakeback?",
        a: "Sim. O rakeback segue a sua faixa normal e o bônus libera por cima. Os dois entram no mesmo pagamento semanal.",
      },
      {
        q: "Existe depósito mínimo?",
        a: "Sim, e varia por método. Pix e outros meios locais têm piso menor que USDT. O caixa confirma os números atuais antes de você enviar qualquer coisa.",
      },
      {
        q: "Posso pegar duas vezes?",
        a: "O bônus de boas-vindas é uma vez por jogador. Os bônus de recarga são o equivalente recorrente, com percentual menor.",
      },
    ],
  },

  "vip-program-guide": {
    intro:
      "O programa VIP do Grand tem cinco faixas, e a única coisa que te move entre elas é o rake mensal. Não há pontos para comprar, assinatura nem inscrição manual — a faixa é recalculada a partir do seu volume todo mês.",
    sections: [
      {
        heading: "As cinco faixas",
        paragraphs: [
          "Bronze começa em 45% de rakeback sem exigência de volume. Prata começa em 200 de rake mensal e paga 50%. Ouro começa em 1.000 e paga 55%. Platina começa em 3.000 e paga 58%. Diamante começa em 10.000 e paga 60%.",
          "Os limites são medidos em rake gerado, não em dinheiro depositado ou ganho. Um mês perdedor com volume alto alcança faixa maior que um mês vencedor com volume baixo.",
        ],
        bullets: [
          "Bronze — sem mínimo, 45%",
          "Prata — 200 de rake, 50%",
          "Ouro — 1.000 de rake, 55%",
          "Platina — 3.000 de rake, 58%",
          "Diamante — 10.000 de rake, 60%",
        ],
      },
      {
        heading: "Como o rake conta para a faixa",
        paragraphs: [
          "O rake de cash game é contado pelo método contributed: você paga uma parcela do pote só quando colocou dinheiro nele, e dar fold no pré-flop não soma nada ao total de rake.",
          "As taxas de torneio também contam, pelo valor cheio. O rake gerado em todas as mesas e formatos do clube soma em um único número mensal, então dividir o tempo entre cash e MTT não divide o seu progresso.",
        ],
      },
      {
        heading: "O que cada faixa acrescenta além do percentual",
        paragraphs: [
          "Faixas mais altas encurtam o ciclo de pagamento e aumentam os limites de saque, o que pesa mais que os pontos percentuais extras quando você já joga com regularidade. Do Ouro para cima, o atendimento do caixa é prioritário.",
          "Platina e Diamante ainda dão acesso a freerolls, posição inicial em leaderboards e um gerente dedicado em vez da fila comum do caixa. Jogadores Diamante são consultados sobre mudanças de limites e formatos no clube.",
        ],
      },
      {
        heading: "Mantendo a sua faixa",
        paragraphs: [
          "As faixas são avaliadas mensalmente, e uma queda de volume te move um nível para baixo em vez de te zerar no Bronze. Ou seja, um mês parado custa alguns pontos percentuais, não a sua posição inteira.",
          "A página de rakeback tem uma calculadora que converte seus limites e horas em um rake mensal estimado, que é a forma mais rápida de ver qual faixa é realista para a sua rotina.",
        ],
      },
    ],
    faq: [
      {
        q: "Quando o rakeback é pago?",
        a: "Semanalmente, em dia fixo, referente ao rake gerado na semana anterior. O percentual da sua faixa no mês se aplica a cada um desses pagamentos.",
      },
      {
        q: "A faixa zera se eu ficar um mês fora?",
        a: "Você desce um nível, não vai para o fundo. Voltando ao volume anterior, a faixa é restaurada no mês seguinte.",
      },
      {
        q: "Torneios contam?",
        a: "Sim. As taxas de torneio entram no total mensal de rake pelo valor cheio, junto com o rake de cash game.",
      },
    ],
  },

  "diamonds-guide": {
    intro:
      "Diamantes são a moeda interna do PPPoker. Eles não são fichas e não dá para jogar com eles, mas pagam o que está em volta do jogo — inscrições de torneio em alguns clubes, criação de clube, presentes e o cartão VIP. Veja quanto custam e como não pagar a mais.",
    sections: [
      {
        heading: "Para que os diamantes servem de fato",
        paragraphs: [
          "Diamantes compram o cartão VIP, que remove anúncios e libera estatísticas e recursos de perfil dentro do app. Também cobrem a taxa de criação de clube e, em algumas uniões, são usados em buy-ins de torneio e eventos paralelos.",
          "Eles não podem ser convertidos em fichas pelo app, e nenhum agente sério afirma o contrário. Quem oferece uma taxa direta de troca de diamante por ficha dentro do PPPoker está descrevendo algo que a plataforma não suporta.",
        ],
      },
      {
        heading: "Pacotes e preços",
        paragraphs: [
          "Os pacotes padrão são 780 diamantes por 12,99, 3.900 por 59,99, 7.800 por 109,99 e 48.000 por 649. Os pacotes maiores têm melhor preço por diamante, e é nisso que a estrutura de desconto se baseia.",
          "Comprar pelo caixa do Grand aplica um desconto adicional nos três pacotes maiores — 5% no de 3.900, 10% no de 7.800 e 15% no pacote de dono de clube — porque a compra passa pelo clube e não pela loja de aplicativos.",
        ],
        bullets: [
          "780 — 12,99, sem desconto",
          "3.900 — 59,99, 5% off pelo caixa",
          "7.800 — 109,99, 10% off pelo caixa",
          "48.000 — 649, 15% off pelo caixa",
        ],
      },
      {
        heading: "Comprar pelo caixa em vez da loja",
        paragraphs: [
          "A compra dentro do app passa pela Apple ou Google e carrega a taxa da plataforma, e é por isso que o mesmo pacote custa mais lá. Pedir pelo caixa usa os mesmos meios de pagamento que você já usa para depositar, incluindo Pix e USDT.",
          "A entrega é manual e costuma sair em até uma hora no horário comercial. Você envia o tamanho do pacote e o seu ID do PPPoker, e os diamantes chegam na conta.",
        ],
      },
      {
        heading: "Vendendo diamantes de volta",
        paragraphs: [
          "O Grand recompra diamantes não usados a uma taxa publicada, o que ajuda se você comprou o pacote de dono de clube e não administra mais um clube. A taxa de recompra é menor que a de venda — esse spread é o que sustenta o serviço.",
          "A recompra é creditada no seu saldo de fichas ou paga no acerto semanal, como você preferir. Existe quantidade mínima, então não compensa para sobras pequenas.",
        ],
      },
    ],
    faq: [
      {
        q: "Diamantes viram dinheiro de verdade?",
        a: "Só pela recompra do clube, a uma taxa publicada. O app em si não tem conversão, e ofertas de troca interna são um golpe comum.",
      },
      {
        q: "Preciso de diamantes para jogar?",
        a: "Não. Cash games e a maior parte dos torneios rodam só com fichas. Diamantes são opcionais, a menos que a sua união precifique eventos específicos neles.",
      },
      {
        q: "Vale comprar o cartão VIP?",
        a: "Compensa se você joga diariamente e quer as estatísticas no app. Para jogo ocasional, só a remoção de anúncios raramente justifica o custo.",
      },
    ],
  },
};

export default articles;
