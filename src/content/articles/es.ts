import type { ArticleCollection } from "../types";

const articles: ArticleCollection = {
  "pppoker-guide-2026": {
    intro:
      "PPPoker no es una sala clásica con un lobby único, sino una plataforma de clubes privados. Cada club fija sus juegos, límites y reglas, y el dinero pasa por un agente en lugar de un cajero integrado. Esta guía explica cómo funciona ese modelo y qué significa para ti.",
    sections: [
      {
        heading: "Cómo funciona el modelo de clubes privados",
        paragraphs: [
          "La aplicación solo gestiona cartas y fichas. El dueño del club crea la sala, elige las modalidades, fija el rake y decide quién entra, por eso siempre necesitas un Club ID para encontrar las mesas y un Referral ID para quedar vinculado a un agente.",
          "Los clubes suelen agruparse en uniones para que jugadores de varias salas se sienten en las mismas mesas. Así un club mediano como Grand ofrece acción las 24 horas y no solo en el horario local de máxima actividad.",
        ],
      },
      {
        heading: "Modalidades y límites disponibles",
        paragraphs: [
          "No-Limit Hold'em y Pot-Limit Omaha concentran la mayor parte del tráfico, con PLO4 y PLO5 especialmente populares en uniones brasileñas y asiáticas. Short Deck, OFC y All-In or Fold completan la programación.",
          "Los límites van desde micro, con entrada de pocos dólares, hasta mesas altas solo por invitación. Los torneos van de buy-ins diarios económicos a series con garantizados importantes.",
        ],
      },
      {
        heading: "Por qué el agente importa más que la app",
        paragraphs: [
          "Como PPPoker no procesa dinero real, tus depósitos, retiros y rakeback dependen por completo del agente. Un buen agente paga puntual, deja por escrito el rake y el rakeback antes de cargar fichas y resuelve disputas con el club por ti.",
          "Ese es también el riesgo principal del formato. La reputación del agente pesa más que el porcentaje de rakeback más alto anunciado.",
        ],
      },
      {
        heading: "Cómo funcionan rake y rakeback en la práctica",
        paragraphs: [
          "La estructura típica es hasta 5% del bote con tope cercano a 3 ciegas grandes, aunque cada club define sus números. El rakeback es lo que el agente te devuelve, normalmente cada semana.",
          "Las tasas realistas van del 25% al 60% según tu volumen mensual. Todo lo que esté muy por encima merece verificación antes de depositar.",
        ],
      },
    ],
    faq: [
      {
        q: "¿PPPoker es una sala de dinero real?",
        a: "Formalmente no. La app usa fichas de juego y la liquidación en dinero real ocurre entre tú y el agente del club.",
      },
      {
        q: "¿Debo pasar KYC?",
        a: "El registro en la app no exige documentos. Algunos agentes piden verificación en retiros grandes.",
      },
      {
        q: "¿Puedo jugar en ordenador?",
        a: "Sí. Hay cliente para Windows además de las apps de iOS y Android, con soporte multimesa.",
      },
    ],
  },

  "join-grand-club": {
    intro:
      "Unirse a Grand Club toma unos diez minutos: instalar la app, crear la cuenta, solicitar ingreso con nuestros dos IDs y escribir al cajero. Aquí está cada paso en detalle, incluidos los puntos donde la gente suele equivocarse.",
    sections: [
      {
        heading: "Paso 1 — Instalar la aplicación",
        paragraphs: [
          "Descarga PPPoker desde App Store, Google Play o como APK directo si tu tienda no lo tiene. También hay cliente para Windows si piensas jugar varias mesas.",
          "Instala solo desde las fuentes oficiales listadas en nuestra página de descarga. Las versiones modificadas que circulan en foros pueden comprometer tu cuenta.",
        ],
      },
      {
        heading: "Paso 2 — Crear la cuenta",
        paragraphs: [
          "Abre la app, pulsa Register y elige usuario y contraseña. No se requieren documentos, confirmación de correo ni verificación de teléfono en esta etapa.",
          "Elige un nick que quieras conservar, porque con él te identificarán el agente y los gerentes del club en todos los registros de pago.",
        ],
      },
      {
        heading: "Paso 3 — Solicitar con ambos IDs",
        paragraphs: [
          "Pulsa Join Club e introduce el Club ID de Grand, luego el Referral ID en el campo de abajo. El Club ID lleva la app a nuestra sala; el Referral ID vincula tu cuenta con nuestro cajero.",
          "Omitir el Referral ID es el error más común. Sin él nadie puede cargar tus fichas, no acumulas rakeback y el soporte no puede ayudarte si algo sale mal.",
        ],
      },
      {
        heading: "Paso 4 — Cargar fichas",
        paragraphs: [
          "Escribe a nuestro cajero por Telegram o WhatsApp con tu nick y el importe. Confirmamos la estructura de rake y tu tasa de rakeback antes de mover dinero.",
          "Las fichas suelen aparecer en el saldo en 15 minutos. Haz un depósito de prueba pequeño en la primera sesión para ver el ciclo completo de depósito y retiro antes de comprometer tu bankroll.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuánto tarda la aprobación?",
        a: "Normalmente unos minutos en horario laboral.",
      },
      {
        q: "¿Puedo estar en más de un club?",
        a: "Sí, una cuenta de PPPoker puede pertenecer a varios clubes a la vez.",
      },
      {
        q: "¿Cuál es el depósito mínimo inicial?",
        a: "Desde el equivalente a $10, según el método elegido.",
      },
    ],
  },

  "deposit-methods": {
    intro:
      "Grand Club opera con cajero de agente, lo que significa que los depósitos pasan por vías de pago locales en vez de un formulario de tarjeta en la web. Al principio resulta poco habitual, pero es lo que permite pagos rápidos en reales, pesos filipinos, rublos y sumes.",
    sections: [
      {
        heading: "Métodos por región",
        paragraphs: [
          "Mantenemos canales separados por mercado para que no pases por conversiones que no pediste.",
        ],
        bullets: [
          "Brasil — Pix, instantáneo, desde R$50",
          "Filipinas — GCash y Maya, 5 a 30 minutos, desde ₱500",
          "Rusia y CEI — SBP y tarjetas, 5 a 15 minutos, desde ₽1.000",
          "Uzbekistán — Uzcard, Humo y Payme, 10 a 30 minutos, desde $10",
          "Todo el mundo — USDT TRC20, 5 a 15 minutos, desde $10",
        ],
      },
      {
        heading: "Cómo se ejecuta un depósito",
        paragraphs: [
          "Escribes al cajero con tu nick de PPPoker, el importe y el método preferido. El cajero responde con los datos de pago y una ventana corta de validez, normalmente 15 minutos, para fijar el tipo de cambio.",
          "Tras pagar y confirmar, las fichas se acreditan en tu saldo del club y recibes un aviso. Guarda el comprobante hasta que aparezcan las fichas.",
        ],
      },
      {
        heading: "Comisiones, tipo de cambio y límites",
        paragraphs: [
          "Grand no añade comisión sobre los métodos locales: el tipo que te indican es el que se aplica. El único coste externo es la comisión de red en transferencias cripto, que cobra la blockchain y no nosotros.",
          "Los mínimos son bajos a propósito para que puedas hacer una prueba pequeña. El máximo por depósito crece con tu nivel VIP.",
        ],
      },
      {
        heading: "Hábitos de seguridad",
        paragraphs: [
          "Envía fondos solo a datos emitidos por el cajero en la conversación actual, nunca a una dirección reenviada por otro jugador. Las cuentas falsas son el ataque más común en el poker de clubes.",
          "Confirma por escrito el rake y el rakeback antes del primer depósito. Un agente serio te da esas cifras sin que tengas que insistir.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Puedo depositar en mi moneda local?",
        a: "Sí, en los seis mercados listados. En el resto, USDT es la vía más rápida.",
      },
      {
        q: "¿Cuánto tardan en llegar las fichas?",
        a: "Normalmente 15 minutos. Las transferencias bancarias pueden tardar 24 horas.",
      },
      {
        q: "¿Hay comisión por depósito?",
        a: "Ninguna por parte de Grand. Las transferencias cripto llevan la comisión de red habitual.",
      },
    ],
  },

  "rakeback-explained": {
    intro:
      "El rakeback es la parte de la comisión de la casa que vuelve a ti. En el poker de clubes no es un extra de marketing, sino la vía principal para que un jugador serio siga siendo rentable, así que conviene entender exactamente cómo se calcula.",
    sections: [
      {
        heading: "Qué es el rake",
        paragraphs: [
          "El rake es la comisión que se retira de cada bote, normalmente hasta 5% con tope cercano a 3 ciegas grandes. No se cobra nada antes del flop, y los torneos usan una cuota de inscripción sobre el buy-in.",
          "En un mes de juego constante el rake generado suma mucho más de lo que la mayoría espera, y por eso el porcentaje devuelto importa tanto.",
        ],
      },
      {
        heading: "Cómo calculamos el rakeback en Grand",
        paragraphs: [
          "Usamos el método contributed: tu parte del rake se cuenta desde los botes en los que realmente pusiste dinero. El club reporta totales semanales y tu porcentaje se aplica sobre esa cifra.",
          "La base es 45% para todos los miembros. Los niveles VIP la elevan a 50%, 55%, 58% y 60% conforme crece tu rake mensual, con recálculo el día 1 de cada mes.",
        ],
      },
      {
        heading: "Un ejemplo concreto",
        paragraphs: [
          "Supón que generas $1.200 de rake en un mes. En el nivel Oro eso es 55%, es decir $660 de vuelta, pagados semanalmente y no al cierre del mes.",
          "El mismo volumen con un acuerdo del 30% devolvería $360. Esa diferencia de $300 mensuales suele ser mayor que la ventaja que tiene sobre su campo la mayoría de jugadores de límites medios.",
        ],
      },
      {
        heading: "Cuándo se cobra",
        paragraphs: [
          "Las estadísticas del club se actualizan semanalmente y pagamos en ese ciclo, no mensualmente. El pago sale por el mismo método que usas para retirar.",
          "Puedes pedir el desglose de manos y rake en cualquier momento. Si las cifras no cuadran, escalamos al club en lugar de dejarte asumir el coste.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuentan las cuotas de torneo?",
        a: "Sí, la cuota de inscripción entra en el total mensual de rake.",
      },
      {
        q: "¿Pierdo el nivel tras un mes flojo?",
        a: "Los niveles se recalculan cada mes, pero mantenemos tu nivel un mes de cortesía tras una caída de volumen.",
      },
      {
        q: "¿60% es el máximo real?",
        a: "Es nuestra tasa estándar más alta. Los jugadores Diamante con volumen muy alto pueden negociar un acuerdo a medida.",
      },
    ],
  },

  "withdraw-guide": {
    intro:
      "Un club vale exactamente lo que vale su retiro. Esta guía cubre cómo funcionan los pagos en Grand, qué plazos son realistas y qué hacer para que cada retiro salga sin fricción.",
    sections: [
      {
        heading: "Hacer la solicitud",
        paragraphs: [
          "Escribe al cajero con tu nick, el importe y el método de cobro. El mínimo es el equivalente a $20 y el máximo por solicitud depende de tu nivel VIP.",
          "Primero se descuentan las fichas del saldo del club y después se envía la transferencia. Recibirás confirmación con la referencia de la transacción.",
        ],
      },
      {
        heading: "Plazos realistas",
        paragraphs: [
          "La mayoría de solicitudes se procesa en 30 minutos en horario laboral y en unas dos horas de madrugada. Pix, GCash y USDT son los canales más rápidos.",
          "Las transferencias bancarias dependen del banco receptor y pueden tardar un día hábil. Si un pago va a ser lento, te avisamos antes de confirmar, no después.",
        ],
      },
      {
        heading: "Verificación en importes altos",
        paragraphs: [
          "En el primer retiro por encima de $500 hacemos una verificación ligera, normalmente una foto de documento. Protege tu saldo frente a robo de cuenta, no es KYC regulatorio.",
          "Una vez verificado, los siguientes pagos por el mismo método salen sin repetir la comprobación.",
        ],
      },
      {
        heading: "Cómo evitar retrasos",
        paragraphs: [
          "Retira a un método registrado a tu nombre y mantén el mismo canal entre depósitos y retiros. Las cuentas que no coinciden son la causa más común de un pago en pausa.",
          "Si planeas un retiro grande, avisa al cajero con unas horas de antelación para que la liquidez esté lista en el canal adecuado.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Hay comisión por retiro?",
        a: "Ninguna por parte de Grand. Los retiros cripto llevan la comisión de red de la blockchain.",
      },
      {
        q: "¿Puedo retirar por un método distinto al del depósito?",
        a: "Normalmente sí, pero el primer pago con un método nuevo puede activar verificación.",
      },
      {
        q: "¿Cuántos retiros puedo hacer?",
        a: "No hay límite de solicitudes.",
      },
    ],
  },

  "choose-reliable-agent": {
    intro:
      "En el poker de clubes el agente guarda el dinero, así que elegirlo es una decisión mayor que elegir el club. Estas son las comprobaciones que conviene hacer antes del primer depósito en cualquier sitio, incluido el nuestro.",
    sections: [
      {
        heading: "Revisa el historial público",
        paragraphs: [
          "Busca un agente con historial en portales y foros independientes, no solo un canal de Telegram. La reputación que existe fuera de sus propios canales es mucho más difícil de falsificar.",
          "Pregunta directamente a otros jugadores del club. Un club con recorrido tiene regulares que han pasado varios ciclos de pago y te dirán claramente si el cajero es fiable.",
        ],
      },
      {
        heading: "Pide las condiciones por escrito",
        paragraphs: [
          "Antes de cargar fichas debes tener la estructura de rake, el tope, tu porcentaje de rakeback y el calendario de pagos en un mensaje que puedas releer.",
          "Un agente que evita poner esos números por escrito, o que los cambia tras el depósito, ya te ha dicho todo lo que necesitas saber.",
        ],
      },
      {
        heading: "Las ofertas extremas son una alerta",
        paragraphs: [
          "Un rakeback anunciado muy por encima del 60% suele ser una promoción corta presentada como permanente, o señal de que los pagos se financian con depósitos nuevos.",
          "Lo mismo aplica a win rates garantizados, bonos sin condiciones de liberación o presión para depositar una suma grande de inmediato.",
        ],
      },
      {
        heading: "Empieza pequeño y prueba el ciclo completo",
        paragraphs: [
          "Haz un depósito mínimo, juega una sesión corta, pide un retiro y cobra un pago de rakeback. Sube el volumen solo después de ver el dinero moverse en ambos sentidos.",
          "Cuesta algo de tiempo y nada más, y es la protección más eficaz disponible en un formato sin licencia.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuál es un primer depósito seguro?",
        a: "Quédate en el mínimo, típicamente $10 a $50, hasta completar un retiro.",
      },
      {
        q: "¿Quién guarda mi dinero, el club o el agente?",
        a: "El agente. El club organiza las partidas; el agente liquida con el club y contigo.",
      },
      {
        q: "¿Y si el agente deja de responder?",
        a: "Escala a la dirección del club o de la unión. Por eso importa elegir un club con administración conocida.",
      },
    ],
  },
};

export default articles;
