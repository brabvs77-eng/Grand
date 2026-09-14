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

  "how-to-download-pppoker": {
    intro:
      "PPPoker funciona en iOS, Android y Windows, pero la instalación es distinta en cada uno y la app no está disponible en todas las tiendas regionales. Esta guía cubre los tres casos y qué hacer cuando la búsqueda en la tienda no devuelve nada.",
    sections: [
      {
        heading: "iPhone y iPad",
        paragraphs: [
          "Busca PPPoker en la App Store e instálala como cualquier otra app. La publica PPPoker Ltd y la descarga pesa unos 200 MB, así que usa Wi-Fi si tu plan de datos es limitado.",
          "Si la app no aparece en los resultados, tu región de tienda no la distribuye. Cambiar la región del Apple ID es posible, pero desvincula tus compras y suscripciones, por lo que la mayoría de jugadores en regiones restringidas usa un dispositivo Android.",
        ],
      },
      {
        heading: "Android",
        paragraphs: [
          "Google Play es la vía más simple donde la app está listada. Donde no lo está, PPPoker publica un APK firmado en su propio sitio, y para instalarlo hay que permitir instalaciones desde el navegador en Ajustes, Aplicaciones, Acceso especial.",
          "Descarga el APK solo del dominio oficial o del enlace de nuestra página de descargas. Las versiones reempaquetadas que circulan en foros y canales de Telegram suelen incluir robo de credenciales.",
        ],
        bullets: [
          "Comprueba que el nombre del paquete sea com.pppoker.android antes de instalar",
          "Mantén Play Protect activo — también analiza apps instaladas por fuera",
          "Las actualizaciones de un APK son manuales, así que revisa cada mes",
        ],
      },
      {
        heading: "Windows",
        paragraphs: [
          "El cliente de Windows es una descarga aparte desde el sitio de PPPoker y es la opción correcta si piensas jugar más de dos mesas a la vez. Permite redimensionar y ordenar mesas, algo que la app móvil no hace.",
          "El cliente de escritorio y la app móvil comparten una sola cuenta, así que puedes empezar una sesión en el teléfono y continuarla en el ordenador sin ningún paso de transferencia.",
        ],
      },
      {
        heading: "Primer arranque",
        paragraphs: [
          "Regístrate con usuario y contraseña — no hace falta verificar correo ni teléfono. Después solicita entrar a Grand Club con nuestro Club ID e introduce el Referral ID para que tu cuenta quede vinculada al agente que paga tu rakeback.",
          "Introducir el Referral ID en el registro es el único paso incómodo de corregir después, así que hazlo antes de sentarte en tu primera mesa.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Es seguro instalar el APK?",
        a: "El publicado en el sitio oficial de PPPoker sí. Los de espejos de terceros no, y son la causa más común de cuentas de club robadas.",
      },
      {
        q: "¿Se puede jugar en Mac?",
        a: "No hay cliente nativo para Mac. Quien usa macOS juega con la app de iOS en un iPhone o ejecuta el cliente de Windows mediante Parallels o CrossOver.",
      },
      {
        q: "¿Cuántos datos consume una sesión?",
        a: "Entre 20 y 40 MB por hora de juego. El peso está en la descarga inicial, no en las partidas.",
      },
    ],
  },

  "club-id-explained": {
    intro:
      "Todo jugador de PPPoker maneja dos números, y confundirlos es la razón más común por la que un jugador nuevo se queda sin rakeback. El Club ID te mete en las partidas; el Referral ID decide quién te paga.",
    sections: [
      {
        heading: "Qué hace el Club ID",
        paragraphs: [
          "El Club ID es la dirección pública de un club dentro de la app. Lo escribes en Club, Unirse al club, y eso envía una solicitud a los gestores de ese club. Nada relacionado con tu dinero va asociado a él.",
          "Como PPPoker no tiene un lobby global, el Club ID es la única forma de encontrar una sala concreta. Los clubes publican el suyo abiertamente, por eso aparece en el sitio de todo club serio, incluido el nuestro.",
        ],
      },
      {
        heading: "Qué hace el Referral ID",
        paragraphs: [
          "El Referral ID identifica al agente al que pertenece tu cuenta. Es el campo que determina quién procesa tus depósitos y retiros y qué tabla de rakeback se aplica a tu volumen.",
          "Un agente puede atender jugadores de varios clubes, y un club puede tener jugadores de muchos agentes. Por eso los dos IDs están separados y estar en el club correcto no significa automáticamente estar con el agente correcto.",
        ],
      },
      {
        heading: "Por qué ambos importan para tu rakeback",
        paragraphs: [
          "El rakeback se calcula sobre el rake que generan los jugadores de un Referral ID determinado. Si el campo quedó vacío, tu rake sigue yendo al club, pero ningún agente queda registrado como responsable de devolverte una parte.",
          "No es un fallo ni una estafa: así funciona la contabilidad. También significa que un agente no puede acreditarte de forma retroactiva el volumen generado antes de que existiera el vínculo.",
        ],
      },
      {
        heading: "Arreglar un referral ausente o equivocado",
        paragraphs: [
          "Si te registraste sin Referral ID, escribe a la caja antes de jugar. La reasignación suele ser posible en una cuenta nueva, aunque requiere que un gestor del club la ejecute y puede tardar un día.",
          "Si ya jugaste volumen importante con otro agente, el traspaso normalmente exige su conformidad. Resolverlo en el registro lleva treinta segundos; resolverlo después puede llevar una semana.",
        ],
        bullets: [
          "Club ID — dónde juegas",
          "Referral ID — quién te paga",
          "Ambos se introducen en la app, no en ninguna web",
        ],
      },
    ],
    faq: [
      {
        q: "¿Puedo estar en dos clubes a la vez?",
        a: "Sí. PPPoker permite unirse a varios clubes desde una cuenta, y el Referral ID queda ligado a tu cuenta, no a un club concreto.",
      },
      {
        q: "¿Alguien más ve mi Referral ID?",
        a: "Solo tu agente y los gestores del club. No se muestra en la mesa y otros jugadores no pueden consultarlo.",
      },
      {
        q: "¿Y si el club rechaza mi solicitud?",
        a: "Escribe a la caja con tu nick de PPPoker. Las solicitudes sin un referral conocido a veces quedan en revisión en lugar de rechazarse.",
      },
    ],
  },

  "welcome-bonus-terms": {
    intro:
      "El bono de bienvenida de Grand iguala tu primer depósito al 100%. El titular es simple, pero lo que conviene leer es cómo se libera el bono, porque se convierte en saldo retirable a medida que juegas y no llega como efectivo.",
    sections: [
      {
        heading: "Cómo funciona la igualación",
        paragraphs: [
          "Deposita cualquier cantidad desde el mínimo y se acredita la misma cantidad como bono, hasta el tope publicado en la página de bonos. Un depósito de 200 se convierte en 200 en fichas más 200 en bono pendiente.",
          "Tu depósito está disponible de inmediato y puedes retirarlo cuando quieras. Solo la parte del bono lleva una condición de liberación.",
        ],
      },
      {
        heading: "Cómo se libera el bono",
        paragraphs: [
          "El bono se desbloquea por tramos según generas rake, es decir, lo paga el juego en lugar de regalarse por adelantado. Cada tramo liberado se suma a tu saldo retirable en la liquidación semanal, junto al rakeback.",
          "No hace falta ganar: las sesiones perdedoras también generan rake, así que el bono sigue liberándose sin importar el resultado. Lo único que lo detiene es dejar de jugar.",
        ],
      },
      {
        heading: "El plazo de liberación",
        paragraphs: [
          "El periodo de desbloqueo dura un número fijo de días desde el depósito. Lo que siga bloqueado al terminar ese plazo caduca, así que conviene depositar una cantidad acorde al volumen que realmente esperas jugar.",
          "Si juegas pocas horas por semana, un depósito menor que se libera por completo vale más que uno grande que caduca a medias. La caja te dice el rake necesario para cada cantidad antes de depositar.",
        ],
        bullets: [
          "El depósito es retirable desde el principio",
          "El bono se libera contra rake, con liquidación semanal",
          "El bono no liberado caduca al terminar el plazo",
        ],
      },
      {
        heading: "Qué anula el bono",
        paragraphs: [
          "Las transferencias de fichas entre cuentas, sentarse de forma coordinada con un compañero y cualquier forma de colusión anulan el bono y normalmente la cuenta. Los clubes revisan historiales de manos y esos patrones se ven en los datos.",
          "Retirar antes de que cierre el plazo cancela lo que siga bloqueado. Los retiros parciales no son problema: solo afecta al resto no liberado.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Se puede combinar con el rakeback?",
        a: "Sí. El rakeback corre según tu nivel habitual y el bono se libera por encima. Ambos se liquidan en el mismo pago semanal.",
      },
      {
        q: "¿Hay depósito mínimo?",
        a: "Sí, y varía según el método. Los métodos locales tienen un mínimo más bajo que USDT. La caja confirma las cifras actuales antes de que envíes nada.",
      },
      {
        q: "¿Puedo recibirlo dos veces?",
        a: "El bono de bienvenida es uno por jugador. Los bonos de recarga son el equivalente recurrente, con un porcentaje menor.",
      },
    ],
  },

  "vip-program-guide": {
    intro:
      "El programa VIP de Grand tiene cinco niveles, y lo único que te mueve entre ellos es el rake mensual. No hay puntos que comprar, ni suscripción, ni solicitud manual: el nivel se recalcula con tu volumen cada mes.",
    sections: [
      {
        heading: "Los cinco niveles",
        paragraphs: [
          "Bronce arranca en 45% de rakeback sin requisito de volumen. Plata empieza en 200 de rake mensual y paga 50%. Oro empieza en 1.000 y paga 55%. Platino empieza en 3.000 y paga 58%. Diamante empieza en 10.000 y paga 60%.",
          "Los umbrales se miden en rake generado, no en dinero depositado o ganado. Un mes perdedor con volumen alto alcanza un nivel más alto que un mes ganador con volumen bajo.",
        ],
        bullets: [
          "Bronce — sin mínimo, 45%",
          "Plata — 200 de rake, 50%",
          "Oro — 1.000 de rake, 55%",
          "Platino — 3.000 de rake, 58%",
          "Diamante — 10.000 de rake, 60%",
        ],
      },
      {
        heading: "Cómo cuenta el rake para el nivel",
        paragraphs: [
          "El rake de cash se cuenta por el método contributed: se te cobra una parte del bote solo cuando has puesto dinero en él, y retirarse en preflop no suma nada al total de rake.",
          "Las comisiones de torneo también cuentan, por su valor nominal. El rake generado en todas las mesas y formatos del club se suma en una sola cifra mensual, así que repartir tu tiempo entre cash y MTT no divide tu progreso.",
        ],
      },
      {
        heading: "Qué añade cada nivel más allá del porcentaje",
        paragraphs: [
          "Los niveles altos acortan el ciclo de pago y suben los límites de retiro, algo que pesa más que los puntos porcentuales extra cuando ya juegas con regularidad. De Oro en adelante, la caja atiende con prioridad.",
          "Platino y Diamante añaden acceso a freerolls, posición inicial en clasificaciones y un gestor dedicado en lugar de la cola común. A los jugadores Diamante se les consulta sobre cambios de límites y formatos en el club.",
        ],
      },
      {
        heading: "Mantener tu nivel",
        paragraphs: [
          "Los niveles se evalúan cada mes, y una caída de volumen te baja un escalón en lugar de devolverte a Bronce. Es decir, un mes tranquilo cuesta unos puntos porcentuales, no toda tu posición.",
          "La página de rakeback tiene una calculadora que convierte tus límites y horas en un rake mensual estimado, que es la forma más rápida de ver qué nivel es realista para tu rutina.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuándo se paga el rakeback?",
        a: "Semanalmente, en un día fijo, por el rake generado la semana anterior. El porcentaje de tu nivel del mes se aplica a cada uno de esos pagos.",
      },
      {
        q: "¿Se reinicia el nivel si me salto un mes?",
        a: "Bajas un escalón, no vuelves al fondo. Al recuperar el volumen anterior, el nivel se restablece al mes siguiente.",
      },
      {
        q: "¿Cuentan los torneos?",
        a: "Sí. Las comisiones de torneo se suman a tu rake mensual por su valor nominal, junto al rake de cash.",
      },
    ],
  },

  "diamonds-guide": {
    intro:
      "Los diamantes son la moneda interna de PPPoker. No son fichas y no se puede jugar con ellos, pero pagan lo que rodea al juego: inscripciones de torneo en algunos clubes, creación de club, regalos y la tarjeta VIP. Esto es lo que cuestan y cómo no pagar de más.",
    sections: [
      {
        heading: "Para qué sirven realmente los diamantes",
        paragraphs: [
          "Los diamantes compran la tarjeta VIP, que quita la publicidad y desbloquea estadísticas y funciones de perfil dentro de la app. También cubren la tarifa de creación de club y, en algunas uniones, se usan para buy-ins de torneo y eventos paralelos.",
          "La app no los convierte en fichas, y ningún agente serio dice lo contrario. Quien ofrece un tipo de cambio directo de diamantes a fichas dentro de PPPoker está describiendo algo que la plataforma no soporta.",
        ],
      },
      {
        heading: "Paquetes y precios",
        paragraphs: [
          "Los paquetes estándar son 780 diamantes por 12,99, 3.900 por 59,99, 7.800 por 109,99 y 48.000 por 649. Los paquetes grandes tienen mejor precio por diamante, y en eso se basa toda la estructura de descuentos.",
          "Comprar por la caja de Grand aplica un descuento adicional en los tres paquetes grandes — 5% en el de 3.900, 10% en el de 7.800 y 15% en el de dueño de club — porque la compra pasa por el club y no por la tienda de aplicaciones.",
        ],
        bullets: [
          "780 — 12,99, sin descuento",
          "3.900 — 59,99, 5% menos por la caja",
          "7.800 — 109,99, 10% menos por la caja",
          "48.000 — 649, 15% menos por la caja",
        ],
      },
      {
        heading: "Comprar por la caja en lugar de la tienda",
        paragraphs: [
          "La compra dentro de la app pasa por Apple o Google y lleva su comisión de plataforma, por eso el mismo paquete cuesta más allí. Pedirlo por la caja se liquida con los mismos medios de pago que ya usas para depositar, incluidos USDT y transferencias locales.",
          "La entrega es manual y suele llegar en menos de una hora en horario laboral. Envías el tamaño del paquete y tu ID de PPPoker, y los diamantes aparecen en tu cuenta.",
        ],
      },
      {
        heading: "Vender diamantes de vuelta",
        paragraphs: [
          "Grand recompra diamantes sin usar a una tarifa publicada, lo cual sirve si compraste el paquete de dueño de club y ya no llevas uno. La tarifa de recompra es menor que la de venta: ese diferencial es lo que sostiene el servicio.",
          "La recompra se acredita en tu saldo de fichas o se paga con la liquidación semanal, como prefieras. Hay una cantidad mínima, así que no compensa con sobras pequeñas.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Los diamantes se convierten en dinero real?",
        a: "Solo mediante la recompra del club a una tarifa publicada. La app no tiene conversión, y las ofertas de intercambio interno son un montaje habitual de estafa.",
      },
      {
        q: "¿Necesito diamantes para jugar?",
        a: "No. Las mesas de cash y la mayoría de torneos funcionan solo con fichas. Los diamantes son opcionales salvo que tu unión cobre eventos concretos en ellos.",
      },
      {
        q: "¿Merece la pena la tarjeta VIP?",
        a: "Sale a cuenta si juegas a diario y quieres las estadísticas de la app. Para juego ocasional, quitar la publicidad rara vez justifica el coste.",
      },
    ],
  },
};

export default articles;
