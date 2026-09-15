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
          "No existe un lobby común donde busques partidas por precio. Tu lista de mesas es la suma de lo que abre tu club más lo que aporta su unión, y dos jugadores con la misma app pueden ver programaciones completamente distintas según a qué club pertenecen.",
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
          "El tope es la parte que más cambia tu coste real. Con un tope de 3 ciegas grandes, los botes grandes pagan proporcionalmente menos que los pequeños, así que el porcentaje nominal del 5% casi nunca es lo que acabas pagando por mano.",
        ],
      },
      {
        heading: "Qué hace la app y qué no hace",
        paragraphs: [
          "PPPoker Ltd desarrolla el software y nada más. Reparte las cartas, lleva la contabilidad de fichas, guarda el historial de manos, aplica los límites de cada mesa y ejecuta las herramientas de detección de colusión que revisan patrones de juego entre cuentas.",
          "Lo que la app no hace es tener dinero. No hay caja integrada, no fija el rake, no aprueba jugadores y no interviene en un conflicto de pagos. Esas funciones pertenecen al club y al agente, sin excepción.",
          "La consecuencia práctica aparece cuando algo sale mal. El soporte de PPPoker puede ayudarte con un error de la aplicación o una cuenta bloqueada, pero no con un depósito que no llegó ni con un rakeback pendiente: eso se resuelve en el chat de tu cajero.",
        ],
      },
      {
        heading: "Cómo comparar clubes y uniones",
        paragraphs: [
          "Lo primero que conviene medir es el tráfico en el horario en que realmente juegas. Un club puede mostrar treinta mesas durante la noche brasileña y cuatro a media mañana, y el promedio diario que anuncia no te sirve si tus sesiones caen en la franja vacía.",
          "Después vienen el tope de rake, el tamaño de la unión y la dureza del campo. Una unión más grande no es automáticamente mejor: con el tráfico llegan también más regulares con estudio y más jugadores a varias mesas, así que ganas selección de partidas y pierdes margen.",
          "Un club mediano con horario coincidente y tope bajo suele rendir más que una unión enorme donde solo puedes jugar cuando están los mejores. Antes de mover tu bankroll, siéntate una semana en límites bajos y observa quién ocupa las mesas a tu hora.",
        ],
        bullets: [
          "Mesas activas en tu franja horaria, no el promedio del día",
          "Tope de rake en ciegas grandes y método de conteo",
          "Tamaño de la unión y cuántos clubes la componen",
          "Proporción de regulares frente a jugadores recreativos",
          "Día fijo de liquidación y límites de retiro",
        ],
      },
      {
        heading: "El bankroll en el formato de clubes",
        paragraphs: [
          "Las referencias habituales siguen valiendo: unas 30 entradas completas para cash sin límite y bastante más para PLO, que tiene varianza mayor. Lo que cambia es que aquí el rake alto en micros acelera la caída, así que conviene ser algo más conservador que en una sala con licencia.",
          "No tengas todo el bankroll en fichas dentro de la app. Las fichas son un saldo registrado en un club privado, no un depósito protegido, y la cantidad razonable a mantener es la que necesitas para jugar la semana en curso.",
          "El ritmo de liquidación semanal también cambia la planificación. Como el rakeback y los retiros se agrupan en un día fijo, es más ordenado retirar el excedente en ese mismo ciclo que pedir transferencias sueltas cada vez que ganas una sesión.",
        ],
      },
      {
        heading: "Errores frecuentes de los jugadores nuevos",
        paragraphs: [
          "Casi todos los problemas de una primera semana en un club privado vienen de cinco decisiones, y ninguna tiene que ver con el juego. Se toman en el registro y en el primer depósito, cuando todavía no sabes cómo funciona el ciclo.",
          "Lo caro no es equivocarse, sino equivocarse con volumen ya jugado. Un Referral ID mal puesto se arregla en minutos en una cuenta nueva y puede tardar una semana cuando ya generaste rake.",
        ],
        bullets: [
          "Registrarse sin introducir el Referral ID, con lo que nadie queda obligado a pagarte rakeback",
          "Elegir club por el rakeback más alto anunciado, sin revisar el tope ni el día de pago",
          "Depositar una suma grande el primer día, antes de haber completado un retiro",
          "Sentarse en límites que el bankroll no sostiene porque hay mesa libre",
          "Ignorar los requisitos de actividad del club y perder el nivel o el acceso a ciertas mesas",
        ],
      },
      {
        heading: "NLH, PLO, OFC y Short Deck en una sola plataforma",
        paragraphs: [
          "PPPoker concentra todos los formatos principales del póker de clubes en un solo cliente. No-Limit Hold'em y Pot-Limit Omaha — incluidos PLO4 y PLO5 — siguen llevando la mayor parte del tráfico, pero Open Face Chinese, Short Deck (6+) y All-In or Fold completan el calendario en distintos horarios según la unión.",
          "Cada formato tiene sus propios filtros en el lobby, así puedes buscar por stakes, tamaño de mesa y tipo de juego sin recorrer mesas que no te interesan. El OFC se juega en Pineapple o Progressive con reglas de fantasyland fijadas por el club, mientras que Short Deck usa un mazo reducido y jerarquías de manos diferentes.",
          "Si eres nuevo en el póker de clubes, empieza con NLH en tu stake habitual antes de pasar a PLO u OFC. La estructura de rake y el timebank se comportan igual en todos los formatos, pero la varianza y la estrategia óptima difieren lo bastante como para que mezclar formatos el primer día cueste más de lo que enseña.",
        ],
      },
      {
        heading: "Juego limpio, certificación RNG e integridad de la plataforma",
        paragraphs: [
          "La distribución de cartas en PPPoker funciona con un generador de números aleatorios certificado, auditado por laboratorios independientes. El barajado es del lado del servidor: ningún jugador ni anfitrión de club puede influir en las cartas, y el historial de manos se guarda para revisión en caso de disputa.",
          "Más allá del RNG, la plataforma monitoriza patrones de asientos, direcciones IP compartidas, transferencias de fichas entre cuentas vinculadas y comportamiento de soft-play repetido. Los clubes reciben alertas automáticas cuando dos cuentas se sientan juntas de forma constante o cuando las fichas se mueven de manera sospechosa.",
          "El juego limpio en la mesa es solo la mitad del panorama en el póker de clubes. La otra mitad es elegir un agente que liquide con honestidad, porque la app garantiza la aleatoriedad de las cartas pero no puede garantizar que el agente pague lo que te corresponde.",
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
      {
        q: "¿En qué se diferencia PPPoker de PokerBros o ClubGG?",
        a: "En el modelo, en muy poco: las tres son apps de clubes privados con uniones y agentes. Cambian la interfaz, el tamaño de las uniones y el reparto del tráfico por región. Quién te atiende como agente influye más en tu resultado que cuál de las tres apps uses.",
      },
      {
        q: "¿Puedo jugar varias mesas a la vez?",
        a: "En el cliente de Windows sí, con mesas redimensionables que puedes acomodar en mosaico. En el teléfono el límite es práctico: a partir de dos mesas pasas más tiempo cambiando de pantalla que decidiendo manos.",
      },
      {
        q: "¿Qué pasa si un club cierra?",
        a: "La liquidación se hace a través de tu agente, que conserva el registro de tu saldo y de tu rake pendiente. Es otra razón por la que el historial del agente pesa más que el logo del club.",
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
          "Como no hay correo obligatorio, tampoco hay recuperación automática de contraseña. Guarda las credenciales fuera del teléfono y, si tu versión del cliente lo permite, vincula un correo en los ajustes de perfil: es lo único que devuelve el acceso sin pasar por soporte.",
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
          "Abre @grandppuzbot en Telegram para depósito automático (1 ficha = 1 $) o escribe a @Grand_Poker_Reception con tu nick y el importe. Confirmamos la estructura de rake y tu tasa de rakeback antes de mover dinero.",
          "Las fichas suelen aparecer en el saldo en 15 minutos. Haz un depósito de prueba pequeño en la primera sesión para ver el ciclo completo de depósito y retiro antes de comprometer tu bankroll.",
          "El cajero necesita tres datos y ninguno más: el nick exacto, el importe y el método. Con eso te devuelve los datos de pago y una ventana corta de validez para fijar el tipo de cambio, así que conviene escribir cuando ya tengas el dinero listo y no varias horas antes.",
        ],
      },
      {
        heading: "Paso 5 — Configurar los filtros de mesa",
        paragraphs: [
          "Con las fichas cargadas, el último paso es dejar de buscar mesa a mano. La lista del club se filtra por modalidad, por rango de ciegas y por número de asientos, y las mesas donde juegas habitualmente se pueden marcar como favoritas para que aparezcan arriba.",
          "Las listas de espera completan el trabajo. Te anotas en dos o tres mesas del límite que te interesa y la app avisa cuando se libera un asiento, en lugar de tenerte refrescando la lista entre manos.",
          "Los filtros pesan más aquí que en una sala con lobby global, porque tu lista mezcla mesas de todos los clubes de la unión y cambia a lo largo del día. Sin filtros terminas sentándote donde hay hueco y no en el formato y el límite que habías elegido.",
        ],
        bullets: [
          "Filtra por modalidad antes que por límite: PLO y Hold'em comparten lista",
          "Guarda favoritas las mesas de tu límite habitual",
          "Anótate en varias listas de espera a la vez en horas cargadas",
          "Revisa el promedio de bote y de jugadores por mano antes de sentarte",
        ],
      },
      {
        heading: "Cómo es tu primera semana",
        paragraphs: [
          "El rake empieza a contar desde la primera mano jugada: no hay que activar nada ni inscribirse en ninguna promoción. Todo jugador entra en Bronce, con 45% de rakeback y sin requisito de volumen.",
          "La primera liquidación llega en el día fijo del ciclo semanal e incluye el rakeback de los días jugados, aunque hayan sido dos. Tu nivel se asigna con el rake acumulado del mes, así que una semana inicial corta no te encierra en Bronce.",
          "El contacto normal con la caja en esos días es breve: un mensaje al depositar, otro al retirar y el resumen semanal si lo pides. Si necesitas ver tu rake antes de la liquidación, el cajero puede enviarte el reporte del club en cualquier momento.",
        ],
      },
      {
        heading: "Si tu solicitud no se aprueba de inmediato",
        paragraphs: [
          "Escribe a la caja con tu nick exacto tal como aparece en el perfil, el momento en que enviaste la solicitud y una captura de la pantalla de ingreso si la tienes. Con esos datos un gestor localiza la solicitud en la lista del club en un par de minutos.",
          "Las causas habituales son tres: la solicitud llegó sin Referral ID registrado, el nick que diste por chat no coincide con el de la app, o la enviaste fuera del horario de atención y aún no la ha revisado nadie.",
          "Mientras el estado quede pendiente no pierdes nada y no hace falta crear otra cuenta. Una segunda cuenta es justamente lo que complica el caso, porque el club ve dos solicitudes desde el mismo dispositivo.",
        ],
      },
      {
        heading: "Cómo mantener la cuenta en regla",
        paragraphs: [
          "Las reglas del club son pocas y todas apuntan a lo mismo: que cada asiento corresponda a una persona distinta con su propio dinero. Los clubes revisan historiales de manos y patrones de transferencia, y esos comportamientos se ven en los datos con facilidad.",
          "También hay una expectativa de actividad. Una cuenta que carga fichas y no juega durante semanas puede quedar fuera de las mesas restringidas o perder el nivel, porque el club reparte los asientos entre miembros activos.",
        ],
        bullets: [
          "Una sola cuenta por jugador, sin excepciones",
          "Sin transferencias de fichas entre cuentas: los movimientos quedan registrados",
          "Dos personas del mismo domicilio no se sientan en la misma mesa",
          "Un dispositivo y una conexión por cuenta durante la sesión",
          "Actividad regular para conservar el nivel y el acceso a mesas cerradas",
        ],
      },
      {
        heading: "Cómo el hosting del club define juegos y liquidación",
        paragraphs: [
          "Al unirte a Grand Club, entras en un entorno gestionado donde el propietario del club fija el calendario de juegos, los caps de rake, los límites de mesa y la membresía en la unión. El hosting significa que el club opera las mesas, gestiona la emisión de fichas y aplica las reglas que mantienen la unión justa para cada sala.",
          "El anfitrión también decide qué formatos aparecen en qué horarios. Un club bien gestionado equilibra el tráfico de NLH, PLO y torneos para que las horas punta tengan mesas llenas sin inundar el lobby con mesas vacías fuera de pico. Las alianzas de unión de Grand extienden ese alcance más allá de lo que una sola sala podría llenar.",
          "La liquidación sigue pasando por tu agente, no directamente por el anfitrión, pero la reputación del anfitrión afecta si la unión permanece activa y si las disputas se resuelven rápido. Un club que hospeda de forma fiable atrae más jugadores, lo que mantiene los juegos más suaves y el ciclo de retiros predecible.",
        ],
      },
      {
        heading: "Foros de la comunidad y apoyo entre jugadores",
        paragraphs: [
          "PPPoker mantiene un foro oficial de la comunidad donde los jugadores discuten estrategia, reportan bugs del cliente y comparten recomendaciones de clubes. El foro está moderado y separa hilos de soporte técnico de discusiones específicas de clubes, manteniendo señal alta y spam bajo.",
          "Grand Club también tiene sus propios canales de Telegram para miembros. Ahí el cajero publica horarios de liquidación, se responden solicitudes de mesa y los nuevos jugadores hacen preguntas que el FAQ no cubre. Vale la pena unirse al canal tras la aprobación de la solicitud, antes de la primera sesión.",
          "Los canales de la comunidad no sustituyen al agente en temas de dinero, pero son la forma más rápida de saber qué mesas están corriendo, si viene una serie de torneos y qué piensan otros miembros de un nuevo formato que el club ha añadido.",
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
      {
        q: "¿Cuesta algo entrar al club?",
        a: "No. La entrada es gratuita y no hay cuota de inscripción ni mensualidad. El único dinero que mueves es el que cargas en fichas, y ese saldo sigue siendo tuyo y retirable.",
      },
      {
        q: "¿Puedo cambiar mi nick más adelante?",
        a: "La app lo permite de forma muy limitada, y los registros de pago del club usan el nick con el que te uniste. Si lo cambias, avisa a la caja el mismo día para que la liquidación siga cuadrando.",
      },
      {
        q: "¿Puedo mirar el club antes de depositar?",
        a: "Sí. Una vez aprobada la solicitud puedes entrar, abrir mesas como espectador y comprobar límites y tráfico real en tu horario sin cargar una sola ficha.",
      },
    ],
  },

  "deposit-methods": {
    intro:
      "Grand Club opera con cajero de agente y depósitos automáticos por @grandppuzbot en Telegram (club GrandPoker, ID 1074072, 1 ficha = 1 $), pasando por vías locales en vez de un formulario de tarjeta en la web. Al principio resulta poco habitual, pero es lo que permite pagos rápidos en reales, pesos filipinos, rublos y sumes.",
    sections: [
      {
        heading: "Métodos por región",
        paragraphs: [
          "Mantenemos canales separados por mercado para que no pases por conversiones que no pediste.",
          "Cada canal tiene su propio horario y su propia velocidad, y el cajero te indica el mínimo vigente antes de que envíes nada. Si tu país no aparece en la lista, USDT cubre el resto del mundo sin depender de un banco intermediario.",
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
          "Abre @grandppuzbot en Telegram o escribe al cajero con tu nick de PPPoker, el importe y el método preferido. El bot acredita fichas automáticamente a 1 ficha = 1 $. El cajero responde con los datos de pago y una ventana corta de validez, normalmente 15 minutos, para fijar el tipo de cambio.",
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
          "Desconfía de cualquier mensaje privado que diga venir del club y pida un pago urgente a datos nuevos. Los cajeros no cambian de cuenta a mitad de una conversación y no escriben primero para ofrecerte un tipo de cambio mejor.",
        ],
      },
      {
        heading: "USDT en la práctica",
        paragraphs: [
          "Las dos redes que se usan son TRC-20 y ERC-20. TRC-20 cuesta centavos por transferencia y confirma en pocos minutos; ERC-20 corre sobre Ethereum y su comisión puede ser varias veces la de Tron cuando la red está cargada. Para importes de club, TRC-20 es la opción sensata.",
          "La red del envío y la de la dirección tienen que coincidir. Un USDT mandado por ERC-20 a una dirección TRC-20 no llega y en muchos casos no se recupera, así que copia la dirección del mensaje del cajero, pega y compara los primeros y últimos caracteres antes de firmar.",
          "Las fichas se acreditan cuando la transferencia tiene confirmaciones en la cadena, no en el momento en que tu exchange muestra el envío como completado. Entre una cosa y otra suelen pasar unos minutos, y en horas de congestión algo más.",
        ],
      },
      {
        heading: "Vías locales, región por región",
        paragraphs: [
          "Cada mercado tiene una vía que la gente ya usa a diario, y esa es la que conviene elegir: menos pasos, menos conversiones y menos motivos de revisión. Lo que cambia entre ellas no es tanto la comisión como el horario y el comportamiento en días festivos.",
          "En América Latina fuera de Brasil trabajamos con transferencia bancaria y USDT. La transferencia depende del horario de compensación de cada país, así que un envío de viernes por la tarde puede acreditarse el lunes, mientras que USDT no distingue entre días hábiles y fines de semana.",
        ],
        bullets: [
          "Brasil — Pix, disponible las 24 horas y acreditado casi al instante",
          "Filipinas — GCash y Maya, rápidos, con límites por billetera según tu nivel de verificación",
          "Rusia y CEI — SBP y tarjetas, minutos en horario bancario",
          "Uzbekistán — Humo y Uzcard, con ventanas de procesamiento algo más largas",
          "Resto de América Latina — transferencia bancaria en horario de compensación, o USDT sin horario",
        ],
      },
      {
        heading: "Cómo se fija el tipo de cambio",
        paragraphs: [
          "El tipo parte de la referencia del mercado interbancario para tu moneda y se ajusta con el coste real de mover ese dinero: la comisión de la vía local y el diferencial que cobra el proveedor de liquidez. No hay margen añadido por el club sobre los métodos locales.",
          "La cotización queda fija en el momento en que el cajero te la envía, y vale durante una ventana corta, normalmente 15 minutos. Ese plazo existe porque el mercado se mueve: si la cotización no caducara, cualquier variación la pagaría una de las dos partes.",
          "Si la ventana expira antes de que pagues, pide una nueva cotización en lugar de enviar con la anterior. Un pago que entra con un tipo vencido obliga a recalcular el importe en fichas y es la causa más frecuente de discusiones evitables.",
        ],
      },
      {
        heading: "Si un depósito no llega",
        paragraphs: [
          "Guarda siempre el comprobante hasta ver las fichas en el saldo. En cripto eso significa el TXID; en Pix, el identificador de la operación; en una transferencia bancaria, el comprobante con fecha y hora. Con ese dato el rastreo toma minutos; sin él, depende de que el banco responda.",
          "Antes de escribir, compara el tiempo transcurrido con el plazo normal del método: minutos en Pix, GCash y USDT, y hasta un día hábil en transferencia bancaria. La mayoría de los supuestos depósitos perdidos son pagos que aún están dentro de su ventana.",
          "Si el plazo se pasó, escribe al cajero con el comprobante y el importe exacto. Cuando el problema está del lado de la vía de pago, el club abre el reclamo con el proveedor y te mantiene informado; lo que no conviene es repetir el envío para ver si esta vez entra.",
        ],
      },
      {
        heading: "Sistemas anti-trampas que protegen tu depósito",
        paragraphs: [
          "Antes de que tu primer depósito llegue a la mesa, la capa anti-trampas de PPPoker ya está activa. La plataforma marca cuentas que comparten direcciones IP, se sientan en las mismas mesas repetidamente, transfieren fichas entre cuentas vinculadas o muestran patrones de soft-play.",
          "Los clubes revisan estas alertas y pueden congelar cuentas pendientes de investigación. Un club de confianza actúa rápido en las alertas automáticas, protegiendo tu depósito de redes de colusión que drenarían jugadores recreativos durante semanas.",
          "El anti-trampas es a nivel de plataforma, no de agente. Tu agente no puede desactivarlo ni anular una congelación. Lo que puede hacer es explicar la política del club, ayudarte a apelar una alerta falsa y confirmar que la sala toma en serio las denuncias de colusión.",
        ],
      },
      {
        heading: "Estructura de hosting del club y dónde viven tus fichas",
        paragraphs: [
          "Cuando depositas a través de un agente, las fichas que aparecen en tu wallet de PPPoker son emitidas por el anfitrión del club, no por PPPoker Ltd. El anfitrión mantiene un float de fichas en la unión y acredita tu cuenta cuando el agente confirma el pago. Tu saldo es un crédito sobre el club, no un saldo bancario regulado.",
          "Esto importa para el timing del depósito. Un club bien gestionado con float adecuado acredita fichas en minutos tras la confirmación del agente. Un club con float escaso puede retrasar el crédito hasta el próximo ciclo de liquidación — conviene preguntar antes del primer depósito grande.",
          "La estructura de hosting también determina a qué juegos accedes. Los clubes en uniones grandes comparten pools de mesas, así que tus fichas funcionan en todas las salas de la unión. Un club independiente sin membresía en unión ofrece solo las mesas que el propio club hospeda.",
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
      {
        q: "¿Qué red de USDT conviene usar?",
        a: "TRC-20, porque la comisión es mínima y confirma rápido. Confirma la red con el cajero antes de enviar: la dirección y la red tienen que coincidir o el envío se pierde.",
      },
      {
        q: "¿Puede pagar otra persona por mí?",
        a: "Es posible, pero los pagos de terceros generan verificación y retrasan la acreditación. Lo más simple es depositar desde una cuenta a tu nombre, que además es la que necesitarás para retirar.",
      },
      {
        q: "¿Hay depósito máximo?",
        a: "Cada método tiene su propio límite por operación, y el tope crece con tu nivel VIP. Si piensas cargar una suma alta, avisa al cajero antes para que confirme el límite vigente de esa vía.",
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
          "Conviene verlo como un coste fijo por hora jugada, no como un descuento sobre las ganancias. El rake sale del bote antes de que se decida quién gana la mano, así que lo paga igual el jugador que cierra el mes en positivo y el que cierra en negativo.",
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
          "El ciclo semanal tiene una ventaja concreta sobre el mensual: el dinero vuelve a tu bankroll mientras sigues jugando, en lugar de quedarse inmovilizado hasta fin de mes. Con volumen alto, esa diferencia de calendario reduce cuánto capital necesitas tener cargado en fichas.",
        ],
      },
      {
        heading: "Rake repartido y rake contribuido",
        paragraphs: [
          "Hay dos formas de repartir el rake de un bote entre los jugadores de la mesa. El método repartido, o dealt, lo divide entre todos los que recibieron cartas, hayas jugado la mano o no. El contribuido te asigna solo la porción proporcional al dinero que realmente pusiste en el bote.",
          "La diferencia se nota según tu estilo. Un jugador selectivo que se retira mucho preflop paga bastante menos con el método contribuido, porque las manos que abandona no le generan coste; con el método repartido, en cambio, cada bote de la mesa le cuesta una fracción aunque no haya participado.",
          "Un porcentaje de rakeback solo se puede comparar si sabes qué método hay debajo. Un 50% contribuido y un 50% repartido no devuelven lo mismo al final del mes, así que esa pregunta pertenece a la conversación previa al depósito.",
        ],
        bullets: [
          "Contribuido — pagas por lo que pusiste en el bote; retirarse preflop no cuesta",
          "Repartido — pagas una fracción de cada bote de la mesa, hayas jugado o no",
          "Estilo selectivo — el contribuido deja un rake menor con el mismo tiempo jugado",
          "Estilo de muchas manos — la diferencia entre ambos métodos se reduce",
        ],
      },
      {
        heading: "Por qué el tope importa más que el porcentaje",
        paragraphs: [
          "El tope se expresa en ciegas grandes, y eso hace que el coste real dependa del tamaño de los botes. Con 5% y un tope de 3 ciegas grandes, el tope se alcanza justo cuando el bote llega a 60 ciegas grandes, porque a partir de ahí el 5% superaría el límite.",
          "Por encima de ese punto, cada ficha adicional en el bote reduce tu porcentaje efectivo. Un bote de 120 ciegas grandes con el mismo tope paga la mitad en términos relativos, así que el 5% nominal es una cifra que casi nunca pagas del todo.",
          "De ahí sale una conclusión poco intuitiva: las modalidades de botes grandes, como PLO, dejan un rake relativo menor que un Hold'em de botes pequeños y muchas manos resueltas preflop o en el flop. Un tope alto en micros daña más el resultado que un porcentaje alto en límites medios.",
        ],
      },
      {
        heading: "Rakeback en torneos",
        paragraphs: [
          "En un torneo no hay bote del que retirar comisión. Pagas una cuota al inscribirte, separada de la parte del buy-in que va al fondo de premios, y esa cuota entra en tu rake mensual por su valor nominal.",
          "El conteo es más directo que en cash: no depende de cuántas manos juegues ni de si llegas a la mesa final. Te inscribes, la cuota se registra y ya cuenta para tu nivel, aunque caigas en la primera órbita.",
          "Rebuys, add-ons y reentradas generan cuota cada vez, así que un día de series con varios torneos puede aportar más rake que una sesión larga de cash en límites bajos. Repartir el tiempo entre cash y torneos no divide tu progreso: todo se suma en una sola cifra mensual.",
        ],
      },
      {
        heading: "Cómo subir tu rakeback efectivo",
        paragraphs: [
          "El rakeback efectivo es lo que recibes dividido por el rake que generas. Se mejora de dos maneras: alcanzando un nivel superior, o generando el mismo volumen a un coste de rake menor por mano jugada.",
          "Hay una advertencia importante en el segundo punto. Subir de límites aumenta el rake más rápido de lo que aumenta tu nivel, porque el rake crece proporcional a las ciegas mientras que los tramos de nivel son fijos. Una tasa del 60% sobre un rake inflado no es mejor que un 55% sobre un rake controlado.",
        ],
        bullets: [
          "Planifica el volumen del mes con un objetivo de rake, no de horas sueltas",
          "Elige formatos con más manos por hora si tu ventaja se sostiene en ellos",
          "Evita sesiones de veinte minutos: el tiempo de espera de asiento no genera rake",
          "Concentra todo tu juego en un solo referral para que el rake sume en una cifra",
          "Sube de límites por lectura del campo, no para alcanzar un nivel antes",
        ],
      },
      {
        heading: "Torneos SpinUp y volumen de rake",
        paragraphs: [
          "SpinUp es el formato sit-and-go estilo lotería de PPPoker donde el prize pool se multiplica por un spinner aleatorio antes de repartir cartas. Los buy-ins van de micro stakes a niveles medios, y cada entrada genera rake que cuenta para tu total semanal de rakeback igual que el rake de cash game.",
          "Los SpinUp corren las 24 horas en la mayoría de uniones, lo que los hace útiles para alcanzar objetivos de volumen en días en que las mesas cash están cortas. Una sesión de veinte SpinUps a un dólar puede añadir rake significativo al total mensual sin requerir un setup de cuatro mesas cash.",
          "La varianza es alta — la mayoría de spins pagan el multiplicador mínimo — así que trata el rake de SpinUp como suplemento de volumen y no como centro de beneficio. El porcentaje de rakeback del agente se aplica al rake de SpinUp de forma idéntica al cash, y el extracto semanal los detalla por separado.",
        ],
      },
      {
        heading: "SEKA y formatos especiales en tu total de rake",
        paragraphs: [
          "SEKA es una variante de póker de tres cartas popular en varias uniones asiáticas, jugada heads-up o a tres con un sistema de ranking simplificado. Genera rake a una tasa fija por mano y aparece como línea separada en el extracto semanal junto a NLH y PLO.",
          "Otros formatos especiales — All-In or Fold, Short Deck y OFC — contribuyen rake de formas distintas. El rake de OFC suele ser por punto y no por bote, lo que significa que una mano larga de fantasyland puede generar más rake que una hora de micro NLH. Entender qué formatos ofrece el club ayuda a planificar el volumen.",
          "No todos los agentes cuentan el rake de formatos especiales a la misma tasa de tier que el cash NLH. Antes de centrarte en SEKA u OFC para volumen, confirma con tu agente que esos formatos califican para tu porcentaje completo de rakeback.",
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
      {
        q: "¿El rakeback paga impuestos?",
        a: "Depende por completo de tu jurisdicción: cada país trata de forma distinta los ingresos de juego y las devoluciones de comisión. Esto no es asesoría fiscal, así que si el importe es relevante consulta con un contador de tu país.",
      },
      {
        q: "¿Las sesiones perdedoras generan rakeback?",
        a: "Sí. El rake se cobra sobre el bote y no sobre tus ganancias, de modo que una sesión en pérdida genera el mismo rake que una ganadora con botes del mismo tamaño, y devuelve el mismo porcentaje.",
      },
      {
        q: "¿El rakeback por sí solo puede volver rentable a un jugador perdedor?",
        a: "Casi nunca. Lo que hace es reducir la tasa de pérdida. Quien pierde muy poco y juega mucho volumen puede acercarse al punto de equilibrio o cruzarlo, pero una desventaja clara frente al campo no se compensa con una devolución. El rakeback amplía el margen de quien ya juega bien.",
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
          "Abre @grandppuzbot en Telegram o escribe al cajero con tu nick, el importe y el método de cobro. El bot paga a 1 ficha = 1 $. El mínimo es el equivalente a $20 y el máximo por solicitud depende de tu nivel VIP.",
          "Primero se descuentan las fichas del saldo del club y después se envía la transferencia. Recibirás confirmación con la referencia de la transacción.",
        ],
      },
      {
        heading: "Plazos realistas",
        paragraphs: [
          "La mayoría de solicitudes se procesa en 30 minutos en horario laboral y en unas dos horas de madrugada. Pix, GCash y USDT son los canales más rápidos.",
          "Las transferencias bancarias dependen del banco receptor y pueden tardar un día hábil. Si un pago va a ser lento, te avisamos antes de confirmar, no después.",
          "Los fines de semana y los días festivos locales afectan solo a las vías bancarias. Pix y las billeteras funcionan igual un domingo, y USDT no distingue entre días hábiles y feriados, así que es la opción previsible si retiras fuera de horario.",
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
          "Revisa los datos antes de enviarlos, sobre todo en cripto. Una dirección con un carácter cambiado o una red distinta a la del pago no se corrige después, y es el único error del proceso que ni el club ni tú pueden revertir.",
        ],
      },
      {
        heading: "Planificar el ritmo de retiros",
        paragraphs: [
          "La liquidación semanal le da al mes un ritmo claro: cada semana entra el rakeback, y ese mismo día es el momento natural para sacar el excedente. Retirar en el ciclo evita solicitudes sueltas y hace que tus registros coincidan con los del club.",
          "Una regla práctica es mantener en fichas lo necesario para jugar la semana en curso en tu límite habitual, y dejar el resto fuera de la app. Las fichas son un saldo dentro de un club privado, no un depósito protegido, y no hay ventaja en tener ahí el bankroll completo.",
          "Si estás subiendo de límites, el cálculo cambia: necesitas más entradas cargadas y conviene retirar menos durante unas semanas. Lo que no cambia es la idea de fondo, que el saldo en la app corresponda a un plan de juego concreto y no a acumulación por inercia.",
        ],
      },
      {
        heading: "Límites y velocidad según el nivel",
        paragraphs: [
          "El mínimo por solicitud es el equivalente a $20 y el máximo depende de tu nivel VIP. No publicamos una tabla fija porque el tope también varía según la vía de pago y su liquidez, así que el cajero te confirma tu límite vigente cuando lo preguntas.",
          "La velocidad de atención sigue el mismo orden. De Oro en adelante las solicitudes entran con prioridad en la cola, y Platino y Diamante tienen gestor dedicado, lo que en la práctica significa que no esperas a que se libere el turno general.",
          "Para quien mueve importes altos, el límite por solicitud suele importar más que el porcentaje de rakeback. Vale la pena preguntarlo antes de depositar, porque un tope bajo obliga a fraccionar cada cobro en varias operaciones.",
        ],
      },
      {
        heading: "Qué se descuenta en el camino",
        paragraphs: [
          "Grand no cobra comisión por retirar. Lo que puede reducir el importe recibido son costes externos, y son solo dos: la comisión de red en cripto y el diferencial del tipo de cambio cuando cobras en moneda local.",
          "Por eso el importe final puede diferir ligeramente del que calculaste. El tipo de cambio se aplica en el momento de ejecutar el pago, y en monedas con decimales pequeños también hay redondeo. Son diferencias de céntimos o de unidades, no de porcentajes.",
        ],
        bullets: [
          "Comisión de red en cripto, cobrada por la blockchain y no por el club",
          "Diferencial del tipo de cambio en vías locales, aplicado al ejecutar el pago",
          "Redondeo a la unidad mínima de tu moneda",
          "Ninguna comisión propia del club en ninguno de los métodos",
        ],
      },
      {
        heading: "Cripto o vías locales para retirar",
        paragraphs: [
          "Las vías locales llegan directo a tu banco o billetera y no exigen ningún paso extra, pero funcionan en horario de compensación y convierten a tu moneda al tipo del momento. Para importes pequeños y cobros frecuentes son la opción más cómoda.",
          "Una stablecoin como USDT elimina el riesgo de moneda entre la solicitud y la llegada: el valor que pides es el que recibes, sin depender de cómo se mueva tu divisa ese día. A cambio necesitas una billetera propia y, si al final quieres moneda local, harás la conversión tú mismo.",
        ],
        bullets: [
          "Cripto — sin horario, coste fijo de red, sin riesgo de tipo de cambio",
          "Vías locales — llegada directa a tu cuenta, sujetas a horario y al tipo del día",
          "Importes altos — cripto suele tener topes por operación más holgados",
          "Cobros frecuentes y pequeños — Pix y billeteras salen mejor en costes",
        ],
      },
      {
        heading: "Equidad del RNG y por qué importa para los pagos",
        paragraphs: [
          "Los retiros dependen de las fichas que ganaste en la mesa, y esos resultados dependen de que el RNG reparta cartas de forma justa. El barajado de PPPoker es del lado del servidor y certificado por laboratorios independientes — ni el anfitrión del club ni el agente puede influir en los resultados para reducir tu saldo antes del cashout.",
          "Si sospechas de una mano injusta, el historial de la mano se guarda y es revisable. Los clubes pueden extraer el log de cualquier mano disputada y compararlo con la auditoría del RNG. Una disputa legítima sobre distribución de cartas va al gestor del club, no al agente — aunque un buen agente la escalará por ti.",
          "La equidad del RNG no te protege del impago del agente. Las cartas fueron justas, pero si el agente se niega a procesar tu retiro, es una disputa de liquidación, no de integridad del juego. Guarda historiales de manos y extractos semanales como evidencia para ambos tipos de problema.",
        ],
      },
      {
        heading: "Herramientas anti-colusión detrás de retiros seguros",
        paragraphs: [
          "El sistema anti-colusión de PPPoker monitoriza asientos, movimiento de fichas y patrones de juego en toda la unión. Cuando dos cuentas se evitan consistentemente o transfieren fichas en secuencias sospechosas, la plataforma genera una alerta que el anfitrión del club revisa antes del próximo ciclo de liquidación.",
          "Para ti como jugador que retira, esto significa que tus ganancias provienen de juego legítimo contra oponentes no relacionados. Los clubes que aplican reglas anti-colusión protegen activamente el pool de jugadores, manteniendo los juegos ganables y los retiros sostenibles.",
          "Si tu cuenta es marcada durante una solicitud de retiro, no entres en pánico — las alertas se disparan a menudo por direcciones IP domésticas compartidas o jugar con un amigo en la misma mesa. Contacta a tu agente con los detalles de la alerta y pide al club revisar el log. La mayoría de alertas falsas se resuelven en un ciclo de liquidación.",
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
      {
        q: "¿Puedo retirar solo una parte del saldo?",
        a: "Sí, los retiros parciales son lo habitual. Retiras el excedente y dejas cargado lo que vas a jugar, sin que eso afecte a tu nivel ni a tu rakeback acumulado.",
      },
      {
        q: "¿Qué pasa si retiro mientras el bono de bienvenida se está liberando?",
        a: "La parte del bono que ya se liberó es saldo normal y no se toca. Lo que siga bloqueado se cancela al retirar antes del cierre del plazo, así que conviene revisar cuánto queda pendiente antes de pedir el pago.",
      },
      {
        q: "¿Necesito documentos para retirar?",
        a: "Solo en importes altos, a partir del primer retiro por encima de $500, y el requisito cambia según el método. En pagos pequeños no se pide nada más que los datos de cobro.",
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
          "Mira también la antigüedad: cuántos años lleva operando, en qué uniones ha trabajado y si el nombre aparece asociado al mismo proyecto o cambia de marca cada temporada. Un historial que empieza hace tres meses no es necesariamente malo, pero no ofrece nada que verificar.",
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
          "Guarda esa primera conversación completa. El mensaje donde te confirmaron rake, tope, porcentaje y día de pago es el documento al que vas a recurrir si más adelante alguien recuerda las condiciones de otra manera.",
        ],
      },
      {
        heading: "Preguntas que hacer antes de depositar",
        paragraphs: [
          "No se trata de interrogar a nadie. Son ocho datos concretos y un agente que trabaja en serio los responde en un solo mensaje, porque los tiene a mano y los repite todos los días.",
          "Tan informativa como la respuesta es la forma de responder. Cifras claras y directas indican una operación ordenada; evasivas, cambios de tema o un “eso lo vemos después del depósito” son la respuesta que necesitabas, aunque no sea la que pediste.",
        ],
        bullets: [
          "Porcentaje de rakeback y método de conteo, repartido o contribuido",
          "Tope de rake en ciegas grandes y porcentaje sobre el bote",
          "Día fijo de pago y frecuencia del ciclo",
          "Mínimo y máximo por retiro, y si el tope cambia con el nivel",
          "Comisiones propias del agente, si existe alguna",
          "Cómo se resuelve una disputa y quién decide por encima del cajero",
          "Cuánto tiempo llevan operando y en qué uniones",
          "Qué jugadores o administradores pueden responder por ellos",
        ],
      },
      {
        heading: "Cómo leer una oferta de rakeback",
        paragraphs: [
          "El porcentaje del titular dice poco por sí solo. Un 60% con un tope de rake alto puede devolver menos dinero real que un 50% con un tope bajo, porque lo primero que determina tu coste es cuánto rake se cobra, no cuánto te devuelven de él.",
          "Después vienen el método de conteo y la frecuencia de pago. Contribuido favorece al jugador selectivo; repartido reparte el coste entre toda la mesa. Y un pago semanal devuelve capital a tu bankroll cuatro veces más seguido que uno mensual, con el mismo porcentaje nominal.",
          "Por último, revisa las condiciones adjuntas. Un porcentaje válido solo el primer mes, o solo por encima de un volumen que no vas a alcanzar, es una cifra de escaparate. Pregunta cuál sería tu tasa con el volumen que juegas de verdad.",
        ],
      },
      {
        heading: "Cómo se ve un ciclo de pago normal",
        paragraphs: [
          "Un ciclo sano es aburrido: un día fijo de la semana, un resumen con el rake generado y el importe devuelto, y el pago por el canal acordado sin que tengas que recordarlo. Si pides el desglose, llega sin fricción.",
          "Lo anormal también tiene un patrón reconocible. Pagos que se corren “un par de días” cada semana, importes parciales sin explicación, la sugerencia de que juegues más volumen antes de cobrar, o un cajero que solo responde cuando hay depósitos entrando.",
          "Un retraso aislado y avisado por adelantado no es señal de nada: los proveedores de pago fallan. La diferencia está en si el aviso llega antes del día de pago o después de que preguntes por tercera vez.",
        ],
        bullets: [
          "Normal — día fijo, resumen con rake e importe, pago sin recordatorios",
          "Normal — un retraso puntual avisado antes de la fecha, con nueva fecha concreta",
          "Anormal — pagos parciales sin explicación o importes que cambian sin desglose",
          "Anormal — condicionar el cobro a que juegues más volumen",
          "Anormal — respuestas rápidas para depósitos y lentas para retiros",
        ],
      },
      {
        heading: "Si algo sale mal",
        paragraphs: [
          "Tu mejor herramienta son tus propios registros. Anota depósitos, retiros y pagos de rakeback con fecha e importe, y conserva los comprobantes. Un reclamo con fechas y cifras se resuelve; uno basado en la memoria se discute.",
          "El siguiente nivel es la administración del club y, por encima, la de la unión. Las uniones tienen interés directo en expulsar a un agente que no paga, porque un caso público les cuesta jugadores en todos sus clubes.",
          "La denuncia pública funciona solo con pruebas. Capturas completas, no recortadas, y una cronología ordenada tienen efecto real en los foros del sector; una acusación sin material se descarta en un día y debilita tu posición si el caso sigue abierto.",
        ],
      },
      {
        heading: "Señales anti-trampas que verifica un agente fiable",
        paragraphs: [
          "Un agente fiable hace más que procesar depósitos — verifica que el club al que te unes aplique reglas anti-trampas. Pregunta si el club revisa alertas automáticas de colusión, con qué rapidez se investigan cuentas congeladas y si las denuncias de chip-dumping se actúan en un ciclo de liquidación.",
          "Señales rojas del lado del agente incluyen desestimar preocupaciones de colusión, negarse a escalar una congelación al gestor del club o afirmar que el anti-trampas es puramente problema de la plataforma. En el póker de clubes, el agente es tu primera línea de defensa, y un agente pasivo te deja expuesto.",
          "También puedes revisar el foro de la comunidad PPPoker por denuncias sobre clubes y uniones específicos. Patrones de quejas de colusión sin resolver son una señal más fuerte que cualquier texto de marketing del agente.",
        ],
      },
      {
        heading: "Juego limpio, transparencia RNG y responsabilidad del agente",
        paragraphs: [
          "PPPoker publica detalles de certificación RNG y resúmenes de auditoría que cualquier agente debería poder referenciar cuando preguntas sobre la equidad del juego. Un agente fiable sabe dónde encontrar estos documentos y puede explicar cómo las disputas de historial de manos se escalan al nivel del club.",
          "La responsabilidad va más allá de la equidad. Tu agente debe proporcionar extractos semanales que detallen rake, rakeback, liberación de bono y ajustes. Extractos que llegan el mismo día cada semana, con números que coinciden con lo que ves en la app, son la señal de confianza más fuerte en el póker de clubes.",
          "Si un agente no puede explicar el proceso de auditoría RNG, no proporciona extractos detallados o cambia el día de liquidación sin aviso, son razones para buscar otro antes del primer depósito — independientemente del porcentaje de rakeback anunciado.",
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
      {
        q: "¿Es seguro un agente que solo tiene un canal de Telegram?",
        a: "Un canal no es un historial: lo administra el propio agente y se puede borrar en un minuto. Busca antigüedad comprobable, menciones en foros que no controle él y jugadores dispuestos a dar una referencia con su nombre.",
      },
      {
        q: "¿Un agente más grande es siempre más seguro?",
        a: "El tamaño ayuda con la liquidez y con los topes de retiro, pero el historial de pagos y la claridad de las condiciones pesan más. Hay agentes pequeños con años de pagos puntuales y estructuras grandes que cerraron dejando saldos sin liquidar.",
      },
      {
        q: "¿Puedo trabajar con dos agentes a la vez?",
        a: "Técnicamente son cuentas separadas y nada lo impide, pero divides tu volumen y bajas de nivel en las dos tablas. Concentrar el rake en un solo referral suele dejar un rakeback efectivo mayor que repartirlo.",
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
          "En iOS no existe instalación por fuera de la tienda, así que cualquier enlace que prometa un archivo de PPPoker para iPhone es falso. La única alternativa legítima si tu región no la ofrece es el Android o el cliente de Windows.",
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
          "Los requisitos son modestos: cualquier equipo capaz de ejecutar un navegador moderno con soltura mueve el cliente sin problema. Lo que sí conviene es una conexión por cable, porque una caída de Wi-Fi a mitad de mano cuesta fichas aunque el equipo vaya sobrado.",
        ],
      },
      {
        heading: "Primer arranque",
        paragraphs: [
          "Regístrate con usuario y contraseña — no hace falta verificar correo ni teléfono. Después solicita entrar a Grand Club con nuestro Club ID e introduce el Referral ID para que tu cuenta quede vinculada al agente que paga tu rakeback.",
          "Introducir el Referral ID en el registro es el único paso incómodo de corregir después, así que hazlo antes de sentarte en tu primera mesa.",
          "Antes de jugar, dedica un minuto a los ajustes: activa la confirmación de acciones para no pulsar all-in por error en pantalla táctil, y revisa el sonido y las animaciones si vas a llevar más de una mesa.",
        ],
      },
      {
        heading: "Mantener la app actualizada",
        paragraphs: [
          "Si instalaste desde App Store o Google Play, la actualización automática se encarga de todo y solo tienes que abrir la app con conexión de vez en cuando. Con un APK no hay ese mecanismo: cada versión nueva se descarga e instala a mano desde el sitio oficial, encima de la anterior y sin desinstalar nada.",
          "Cuando tu cliente se queda por detrás de la versión que usa el club, lo primero que notas es que faltan mesas en la lista o que no puedes sentarte en formatos nuevos. En versiones muy atrasadas la app directamente no deja entrar y muestra un aviso de versión.",
          "Revisa la versión instalada en el perfil y actualiza antes de una sesión, no en medio. Una actualización a mitad de mesa te saca de los asientos que tengas ocupados y la ficha en juego queda expuesta al temporizador.",
        ],
      },
      {
        heading: "Problemas de instalación e inicio de sesión",
        paragraphs: [
          "Casi todos los fallos de instalación tienen una causa mecánica y se resuelven en pocos minutos. Antes de escribir a soporte vale la pena descartar las cinco habituales, porque ninguna tiene que ver con tu cuenta del club.",
          "Si tras revisarlas el problema persiste, describe al cajero el modelo del teléfono, la versión del sistema y el texto exacto del mensaje de error. Con esos tres datos se identifica de inmediato si es un tema de compatibilidad o de red.",
        ],
        bullets: [
          "Almacenamiento libre insuficiente: la descarga pesa alrededor de 200 MB y la instalación necesita margen adicional",
          "Región de la tienda sin la app listada: en ese caso la vía es el APK oficial en Android",
          "Instalación corrupta: desinstala por completo y vuelve a instalar en lugar de reparar",
          "Red que bloquea la conexión: prueba con datos móviles antes de concluir que la app falla",
          "Aviso de aplicación no compatible: suele ser una versión de Android demasiado antigua para el paquete actual",
        ],
      },
      {
        heading: "Batería, datos y conexión",
        paragraphs: [
          "El consumo de datos de una sesión es bajo, entre 20 y 40 MB por hora, así que jugar con datos móviles es viable. El gasto real está en la batería y en las funciones de ahorro de energía: si el sistema suspende la app en segundo plano, pierdes el asiento sin darte cuenta, y conviene excluir PPPoker de esas restricciones.",
          "Una VPN que cambia tu país aparente genera fricción con el club. Los sistemas antifraude comparan ubicación y dispositivo entre sesiones, y un jugador que aparece en tres países en una semana levanta el mismo patrón que una cuenta compartida. Si usas VPN por estabilidad de red, mantén siempre la misma salida y avísalo al cajero.",
          "Ante una desconexión a mitad de mano, la acción queda en manos del temporizador: si se agota sin respuesta, la mano se retira y las fichas que ya pusiste en el bote se quedan ahí. Ninguna configuración protege una apuesta hecha, de modo que la única defensa real es no abrir mesas con una conexión inestable.",
        ],
      },
      {
        heading: "Configurar el cliente de Windows para varias mesas",
        paragraphs: [
          "El cliente de escritorio permite redimensionar las mesas y acomodarlas en mosaico, que es la disposición que funciona si juegas tres o cuatro a la vez. En una pantalla de 1080p caben cuatro mesas reducidas sin superposición; por encima de esa cantidad conviene una resolución mayor o un segundo monitor.",
          "Deja cada mesa en una posición fija y no las muevas durante la sesión. La mayoría de los errores de multimesa no son de decisión, sino de actuar en la mesa equivocada porque una ventana cambió de sitio al abrirse otra.",
          "Puedes tener el cliente de escritorio abierto y el teléfono a mano con la misma cuenta, útil para revisar el saldo o escribir al cajero sin salir de las mesas. Lo que no está permitido es ocupar dos asientos de la misma mesa desde dos dispositivos.",
        ],
      },
      {
        heading: "El cliente Windows para volumen serio",
        paragraphs: [
          "El cliente Windows de PPPoker es la herramienta de los regulares cuando el juego casual en móvil ya no basta. Soporta de cuatro a seis mesas en una pantalla 1080p con redimensionado y disposición libres, y la acción en cada mesa permanece visible en lugar de alternarse como en el teléfono.",
          "La instalación es una descarga directa desde el sitio oficial de PPPoker, no desde Microsoft Store. Ejecuta el instalador, inicia sesión con la misma cuenta del móvil y tus membresías de club, saldos de fichas e historiales de manos se sincronizan al instante.",
          "El cliente de escritorio comparte un login con el móvil, así que un setup habitual es el PC para la sesión y el teléfono para el lobby y el chat con el cajero. Evita abrir la misma mesa en ambos dispositivos: el segundo login toma el asiento y puede expulsarte del primero.",
        ],
      },
      {
        heading: "Actualizaciones visuales recientes en móvil y escritorio",
        paragraphs: [
          "PPPoker ha lanzado una serie de renovaciones visuales que modernizan el diseño de la mesa, las animaciones de cartas y la navegación del lobby sin cambiar el modelo de clubes. Las mesas ahora se renderizan con pilas de fichas más limpias, animaciones de reparto más suaves y 3D Card Squeeze opcional en dispositivos compatibles.",
          "El lobby recibió un rediseño que agrupa juegos por formato y rango de stakes, facilitando encontrar una mesa PLO5 abierta en tu nivel en lugar de recorrer todas las salas activas del club. Los presets de filtro permiten guardar una búsqueda favorita — por ejemplo NLH 1/2 con mesa llena — y reabrirla con un toque.",
          "Los paquetes de temas comprados con diamantes permiten personalizar el color del tapete, el reverso de las cartas y los marcos de la mesa. Son solo cosméticos y no afectan el juego, pero hacen las sesiones largas más cómodas y ayudan a distinguir mesas rápidamente al multi-tabling.",
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
      {
        q: "¿Puedo usar una cuenta en dos dispositivos?",
        a: "Sí. La cuenta es la misma en el teléfono y en el cliente de Windows, y puedes alternar sin transferir nada. Lo que no se permite es ocupar dos asientos de la misma mesa, aunque sea desde dispositivos distintos.",
      },
      {
        q: "¿Una VPN pone en riesgo mi cuenta?",
        a: "El riesgo no está en la VPN, sino en la incoherencia de ubicación. Si tu país aparente cambia entre sesiones, el club lo marca para revisión porque es el patrón que dejan las cuentas compartidas. Si la necesitas por estabilidad de red, usa siempre la misma salida y avísale al cajero.",
      },
      {
        q: "La app dice que la versión está desactualizada, ¿qué hago?",
        a: "En iOS y Android con tienda, actualiza desde App Store o Google Play. Si instalaste por APK, descarga el nuevo del sitio oficial e instálalo encima, sin desinstalar. En Windows, el cliente ofrece la actualización al abrirlo.",
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
      {
        heading: "Dónde encontrar cada ID en la app",
        paragraphs: [
          "El Club ID no está en tu perfil, porque no es tuyo: pertenece al club y lo publica el club en su sitio o en su canal. Se escribe en Club, Unirse al club, en el campo superior, y el Referral ID va en el campo inferior de esa misma pantalla.",
          "Una vez dentro, el Club ID vuelve a aparecer en la ficha del club, junto al nombre y al número de miembros. El Referral ID, en cambio, no se muestra más: queda registrado en tu cuenta y solo lo consultan tu agente y los gestores del club.",
          "Tu propio número, el ID de PPPoker, está en el perfil debajo del nick. Los tres conviven y cumplen funciones distintas, y confundirlos en un mensaje a la caja es lo que alarga cualquier gestión sencilla.",
        ],
        bullets: [
          "Club ID — identifica al club, público, se usa una sola vez al entrar",
          "Referral ID — identifica al agente, se introduce al solicitar el ingreso",
          "ID de PPPoker — te identifica a ti, numérico y fijo, visible en tu perfil",
        ],
      },
      {
        heading: "Tu ID de PPPoker y por qué la caja lo pide",
        paragraphs: [
          "Es el número que identifica tu cuenta en toda la aplicación, no dentro de un club concreto. Se asigna al registrarte y no cambia nunca, ni al cambiar de nick ni al salir de todos los clubes.",
          "La caja lo pide porque es el único dato sin ambigüedad. Hay nicks parecidos, nicks con espacios y nicks que se escriben distinto de como suenan, y una carga de fichas al jugador equivocado es un problema que cuesta horas deshacer. Para depósitos, retiros y entrega de diamantes se trabaja con el ID.",
          "Anótalo fuera de la app, junto a tu nick exacto. Si alguna vez pierdes el acceso al dispositivo, es el dato con el que el club localiza tu historial de rake y tu saldo sin depender de que recuerdes cómo escribiste el nombre.",
        ],
      },
      {
        heading: "Qué puede y qué no puede ver tu agente",
        paragraphs: [
          "El agente recibe del club reportes de volumen: manos jugadas, rake generado por periodo y los límites y formatos en los que juegas. Esos datos son exactamente los necesarios para calcular el rakeback y asignar tu nivel, y nada más.",
          "No ve tus cartas, ni el chat de la mesa, ni tus resultados mano a mano mientras juegas. El historial de manos pertenece al club y a la plataforma, y no forma parte de ningún reporte de agente.",
          "Esa separación tiene una consecuencia práctica: un reclamo sobre una mano concreta no lo resuelve el agente, sino el club, que es quien puede abrir el historial. El agente lo escala, pero no puede revisar la mano por su cuenta.",
        ],
        bullets: [
          "Sí ve — rake generado, manos jugadas, límites, periodo y nivel",
          "No ve — cartas, historial de manos, chat de mesa ni resultados en vivo",
          "No puede — mover fichas de tu saldo sin tu solicitud",
        ],
      },
      {
        heading: "Entrar a un segundo club sin perder tu agente",
        paragraphs: [
          "El Referral ID vive en tu cuenta y no en el club, así que al unirte a un segundo club del mismo agente el vínculo se mantiene y no hay que volver a introducir nada. El nuevo club ya te reconoce como jugador de ese referral.",
          "La ventaja es contable. El rake de todos esos clubes se suma en una sola cifra mensual, de modo que repartir tu juego no parte tu nivel: dos clubes con 600 de rake cada uno te sitúan en Oro, mientras que por separado ninguno de los dos llegaría al umbral de 1.000.",
          "Si el segundo club pertenece a otro agente, la situación cambia: ese club reportará tu rake a su propio referral y ese volumen no se suma al tuyo. Antes de unirte a un club ajeno a tu agente, pregunta cómo queda el cálculo.",
        ],
      },
      {
        heading: "Multi-tabling una vez dentro de un club",
        paragraphs: [
          "Un Club ID te da acceso al lobby, pero el multi-tabling es lo que permite usar ese acceso con eficiencia. En el cliente Windows puedes correr de cuatro a seis mesas cash simultáneamente con cada mesa visible — así los regulares generan el volumen que gana tiers de rakeback más altos.",
          "En móvil, en la práctica hasta dos mesas: la app muestra una mesa a la vez y permite alternar con un toque. Basta para juego recreativo, pero no para quien necesita treinta o más horas semanales para alcanzar un objetivo de volumen.",
          "Antes de añadir mesas, confirma cuántas permite el club. Algunas salas limitan el multi-tabling a cuatro, y algunos juegos de stakes altos exigen asiento en una sola mesa. El panel de información de la mesa muestra cualquier restricción antes de sentarte.",
        ],
      },
      {
        heading: "Temas de mesa y personalización de la interfaz",
        paragraphs: [
          "Una vez sentado, PPPoker te permite cambiar el aspecto de la mesa sin afectar el juego. Los paquetes de temas — comprados con diamantes o ganados en promociones — cambian el color del tapete, el diseño del reverso de las cartas y el marco de la mesa.",
          "Los temas importan más al multi-tabling. Asignar un color distinto a cada nivel de stake o formato ayuda a ver de un vistazo qué mesa necesita acción, en lugar de leer el título en cada tile. Muchos regulares usan un tapete brillante en su stake principal y uno apagado en mesas secundarias.",
          "La opción 3D Card Squeeze, en dispositivos compatibles, añade una animación de revelación al ver las hole cards. Es puramente cosmética pero popular entre quienes quieren sensación de póker en vivo en pantalla. Se activa en los ajustes de la mesa sin levantarse.",
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
      {
        q: "¿Puedo cambiar mi Referral ID más adelante?",
        a: "En una cuenta nueva y sin volumen jugado suele ser posible: lo ejecuta un gestor del club y puede tardar un día. Cuando ya generaste rake con otro agente, el traspaso normalmente requiere su conformidad y se complica.",
      },
      {
        q: "¿Mi ID de PPPoker es lo mismo que mi nick?",
        a: "No. El nick es el nombre visible en la mesa y admite cambios limitados; el ID es numérico, se asigna al registrarte y no cambia nunca. La caja trabaja con el ID precisamente por eso.",
      },
      {
        q: "¿Necesito el Club ID cada vez que entro?",
        a: "No. Se usa una sola vez, para enviar la solicitud de ingreso. Después el club queda guardado en tu lista y accedes con un toque.",
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
          "También queda fuera el juego artificial para generar rake: botes pactados entre dos cuentas, mesas abiertas solo entre conocidos o sesiones de fichas rotando sin intención de competir. Ese rake no cuenta para la liberación y su detección cancela el bono completo.",
        ],
      },
      {
        heading: "Elegir el tamaño del depósito",
        paragraphs: [
          "Una igualación del 100% invita a depositar mucho, pero el importe correcto no lo decide tu presupuesto: lo decide el rake que vas a generar dentro del plazo. El bono que no se libera a tiempo no es dinero tuyo en ningún momento.",
          "El cálculo es directo. Supón que tu ritmo habitual te sitúa en el nivel Oro, es decir, alrededor de 1.000 de rake mensual. Pide a la caja el rake necesario para liberar cada importe de bono y compáralo con esa cifra: si el requisito queda por debajo, el bono se libera completo; si lo supera, estás depositando por una parte que caducará.",
          "Dicho de otra forma, depositar la mitad y liberar el bono entero deja más dinero que depositar el doble y liberar la mitad. Si tu volumen crece más adelante, los bonos de recarga te dan otra oportunidad con el importe que ya sí corresponde a tu ritmo.",
        ],
        bullets: [
          "Cuántas horas juegas por semana, en promedio realista y no ideal",
          "En qué límite y modalidad, porque el rake por hora cambia mucho entre ambos",
          "El rake mensual que sale de esas dos cifras",
          "El plazo de liberación en días, contado desde el depósito",
          "El rake exigido por el importe de bono que estás considerando",
        ],
      },
      {
        heading: "Cómo seguir tu progreso",
        paragraphs: [
          "Hay dos lugares donde se ve el avance: el reporte del club, que la caja te envía cuando lo pides, y el extracto semanal, donde cada tramo liberado aparece como una línea junto al rakeback del ciclo.",
          "Conviene revisarlo a mitad del plazo y no al final. Si vas por debajo del ritmo necesario, todavía queda margen para ajustar horas o para hablar con la caja; el último día ya no hay nada que corregir.",
          "Lo que no vas a encontrar es un contador dentro de la app. PPPoker no gestiona bonos de club, así que todo el seguimiento pasa por los reportes del club y por tu propio registro de lo cobrado cada semana.",
        ],
      },
      {
        heading: "Bonos de recarga después del de bienvenida",
        paragraphs: [
          "El bono de bienvenida es uno por jugador y no se repite. Su equivalente recurrente es el bono de recarga, con un porcentaje de igualación menor y exactamente la misma mecánica: se libera por tramos contra el rake que generas dentro de un plazo.",
          "Las recargas suelen estar asociadas a periodos concretos en lugar de estar siempre activas. Pregunta qué promoción está vigente antes de cargar fichas, porque depositar el día anterior al inicio de una recarga es la pérdida más común y también la más evitable.",
          "El criterio para dimensionar el depósito es idéntico al del bono de bienvenida, con una ventaja: ya conoces tu rake real de los meses anteriores, así que la estimación deja de ser una suposición.",
        ],
      },
      {
        heading: "Cómo se combina con el rakeback y tu nivel",
        paragraphs: [
          "Son tres flujos independientes. El rakeback se calcula con el porcentaje de tu nivel, los tramos del bono se liberan según su propia tabla y las promociones vigentes corren aparte. Los tres se suman en un único pago semanal, que es lo que ves llegar.",
          "El bono no cambia tu nivel ni tu porcentaje de rakeback, y tampoco al revés. Y el rake que libera el bono es el mismo rake que cuenta para subir de nivel, así que no hay que elegir: una sola sesión alimenta las tres cosas a la vez.",
        ],
        bullets: [
          "Rakeback — porcentaje de tu nivel sobre el rake de la semana",
          "Bono — tramos liberados por el rake generado dentro del plazo",
          "Promociones — freerolls y clasificaciones, independientes de ambos",
          "Todo junto — un solo pago semanal por tu método de cobro habitual",
        ],
      },
      {
        heading: "Juego SpinUp y contribución al bono",
        paragraphs: [
          "La mayoría de estructuras de bono de bienvenida cuentan el rake de todos los formatos para el requisito de liberación, y los torneos SpinUp no son excepción. Cada buy-in SpinUp genera rake que convierte el bono pendiente en saldo retirable a la tasa especificada en los términos de tu oferta.",
          "Los SpinUp son eficientes para liberar bono porque terminan rápido — una sesión de veinte minutos con diez SpinUps de un dólar puede generar tanto rake liberable como una hora de NLH en una mesa al mismo buy-in total. El trade-off es la varianza: puedes bustear cada spin y aún haber liberado volumen significativo de bono.",
          "Comprueba si tu oferta específica cuenta el rake SpinUp al 100% o a una tasa reducida. Algunas promociones cuentan solo el rake de cash game para la liberación, haciendo el SpinUp irrelevante para el clearing aunque siga ganando rakeback estándar.",
        ],
      },
      {
        heading: "Volumen multi-mesa y liberación de tu oferta de bienvenida",
        paragraphs: [
          "La liberación del bono de bienvenida está ligada al rake generado, y el rake está ligado a las manos jugadas. El multi-tabling en el cliente Windows es la forma más eficiente de generar el volumen que una oferta típica requiere sin pasar meses en una sola mesa.",
          "Un objetivo práctico para liberar un bono estándar es cuatro mesas NLH en tu stake habitual durante dos o tres horas al día, cinco días a la semana. Ese ritmo suele liberar una oferta de rango medio en tres o cuatro semanas, según la ratio de liberación en tus términos.",
          "El juego en móvil cuenta para la liberación pero a una fracción de la velocidad. Si tu oferta tiene límite de tiempo — común en bonos de primer depósito — planifica usar el cliente de escritorio durante el período de liberación aunque juegues normalmente en el teléfono.",
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
      {
        q: "¿El rake de torneos también libera el bono?",
        a: "Sí. Las cuotas de inscripción cuentan por su valor nominal, igual que para el nivel VIP, así que una semana de torneos avanza la liberación tanto como una de cash con el mismo rake.",
      },
      {
        q: "¿Qué pasa con el bono si cambio de agente?",
        a: "La liberación se detiene con el referral bajo el que se concedió. La parte ya liberada es saldo tuyo y no se toca; la pendiente no se traslada al agente nuevo.",
      },
      {
        q: "¿Puedo reclamarlo en una segunda cuenta?",
        a: "No. Es uno por jugador, y el multicuenta anula el bono en ambas cuentas y normalmente las cierra. Los clubes cruzan dispositivo, red y patrones de juego, y esos cruces son fáciles de ver.",
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
          "El contador se reinicia el día 1 y cada mano se registra en la fecha en que se jugó, no en la del pago. Una sesión de la madrugada del día 1 cuenta para el mes nuevo aunque la cobres en una liquidación que incluye días del mes anterior.",
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
          "Si sabes de antemano que vas a estar fuera unas semanas, dilo en la caja. No cambia el cálculo automático, pero queda registrado, y en casos de ausencia justificada el club suele mantener el nivel un ciclo más en lugar de aplicar el descenso.",
        ],
      },
      {
        heading: "Un mes, paso a paso",
        paragraphs: [
          "Conviene recorrer el cálculo completo una vez, porque los umbrales cobran sentido cuando se traducen a pagos. Toma el nivel Oro, que empieza en 1.000 de rake mensual: repartido en cuatro semanas son 250 de rake por semana.",
          "Con la tasa de Oro, 55%, esos 250 semanales devuelven 137,50 en cada liquidación y el mes cierra en 550 de rakeback. El mismo volumen en Bronce, al 45%, dejaría 450, así que los dos escalones de diferencia valen 100 al mes con idéntico esfuerzo en la mesa.",
          "Cuántas horas hacen falta para generar esos 1.000 depende del límite, de la modalidad y de cuántas mesas lleves a la vez, y para eso la calculadora de la página de rakeback sirve más que cualquier promedio general. La estructura, en cambio, es siempre la misma: las horas dan rake, el rake da nivel y el nivel fija el porcentaje que cobras cada semana.",
        ],
      },
      {
        heading: "Cómo interactúa el nivel con bonos y freerolls",
        paragraphs: [
          "El nivel hace una sola cosa: fijar tu porcentaje de rakeback. Todo lo demás, bono de bienvenida, recargas, freerolls y clasificaciones, se suma por encima sin modificar ese porcentaje ni depender de él.",
          "La relación no funciona en sentido inverso. Los importes de bono y los premios no cuentan como rake y no acercan ningún umbral: un depósito grande con bono no te aproxima a Platino, solo lo hace el rake que generas jugando.",
          "Hay, eso sí, una conexión indirecta. Los freerolls y algunos eventos están reservados a Platino y Diamante, de modo que subir de nivel amplía el calendario al que puedes entrar, aunque jugarlos no cambie por sí mismo tu posición en la tabla.",
        ],
      },
      {
        heading: "Subir de nivel sin subir de límites",
        paragraphs: [
          "La vía intuitiva para generar más rake es subir de límites, y suele ser la peor. El rake crece en proporción a las ciegas, mientras que tu ventaja frente a un campo más duro se reduce: alcanzas el umbral antes, pero con un resultado peor en la mesa.",
          "Las palancas seguras son tres y ninguna toca tu límite habitual: cuánto juegas, en qué formato y cómo distribuyes las sesiones. Un jugador que ordena esas tres cosas puede duplicar su rake mensual sin cambiar una sola ciega.",
        ],
        bullets: [
          "Sesiones más largas y menos frecuentes: el tiempo de espera de asiento no genera rake",
          "Varias mesas en el cliente de Windows, subiendo de a una para no perder calidad de decisión",
          "Formatos con más manos por hora, siempre que tu ventaja se sostenga en ellos",
          "Evitar las sesiones de veinte minutos, que aportan poco rake y mucha varianza",
          "Concentrar todo el volumen en un solo referral para que el rake sume en una cifra",
        ],
      },
      {
        heading: "Qué hace realmente el gestor dedicado",
        paragraphs: [
          "Lo primero es la programación de pagos. En lugar de entrar en la cola general, tienes un interlocutor que ya conoce tu método de cobro, tu límite de retiro y el día en que sueles pedir la liquidación, de modo que el trámite se reduce a confirmar el importe.",
          "Lo segundo son las solicitudes de mesa y de límite. Si necesitas un formato concreto o un nivel de ciegas que no está abierto, el gestor lo plantea a la administración del club y te dice si hay demanda suficiente para abrirlo.",
          "Lo tercero son las disputas. Cuando hay un reclamo sobre una mano, un cobro o un cálculo de rake, el gestor lo escala al club y te mantiene informado del estado. No decide él, pero acorta el recorrido y evita que el caso se pierda en la cola.",
        ],
      },
      {
        heading: "Temas VIP de mesa y recompensas cosméticas",
        paragraphs: [
          "Los tiers VIP más altos en clubes PPPoker suelen desbloquear temas de mesa exclusivos — tapetes personalizados, reversos de cartas y marcos de avatar no disponibles en la tienda estándar de diamantes. Son recompensas cosméticas ligadas a tu volumen mensual y no a compras, lo que las convierte en un marcador visible de estatus en la mesa.",
          "Los temas no cambian el juego, pero cumplen un propósito práctico al multi-tabling. Asignar un tapete exclusivo del tier a tus mesas de stake principal te permite ver qué tiles necesitan atención sin leer cada barra de título. Varios VIPs de Grand Club usan tapete dorado en mesas principales y verde por defecto en secundarias.",
          "Si tu tier incluye una recompensa de tema, suele entregarse automáticamente al inicio de cada mes calificante. Revisa la pestaña de promociones en la app en lugar de la tienda de diamantes — los temas de tier están vinculados a la cuenta y no se pueden transferir.",
        ],
      },
      {
        heading: "Actualizaciones visuales reservadas para jugadores de alto volumen",
        paragraphs: [
          "PPPoker lanza periódicamente actualizaciones visuales — lobbies rediseñados, animaciones más suaves, nuevos efectos squeeze — disponibles para todos pero optimizadas para la experiencia multi-mesa de escritorio que los VIPs usan a diario. Actualizaciones recientes incluyen renderizado más limpio de pilas de fichas y cambio de mesa más rápido en el cliente Windows.",
          "Los tiers VIP a veces obtienen acceso anticipado a nuevas funciones visuales antes del lanzamiento global. Un nuevo paquete de temas o estilo de animación puede aparecer en la pestaña de promociones para miembros Platinum y Diamond una semana antes de la tienda general de diamantes.",
          "Estas actualizaciones merecen atención porque afectan la comodidad de la sesión y no la ventaja. Un jugador corriendo seis mesas durante cuatro horas se beneficia más de una interfaz más fluida que un jugador casual en móvil — por eso las mejoras visuales suelen llegar primero al escritorio.",
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
      {
        q: "¿Puedo ver mi rake mensual actual?",
        a: "Sí. Pide el reporte a la caja cuando quieras: incluye el rake acumulado del mes y el desglose por semana, que es la base con la que se asigna tu nivel.",
      },
      {
        q: "¿El nivel es por club o por agente?",
        a: "Por agente. El rake de todos los clubes a los que perteneces bajo el mismo Referral ID se suma en una sola cifra mensual, así que repartir tu juego entre clubes del mismo agente no divide tu progreso.",
      },
      {
        q: "¿Los bonos cuentan para el nivel?",
        a: "No. Solo cuenta el rake: el de cash por el método contribuido y las cuotas de torneo por su valor nominal. Bonos, premios y depósitos quedan fuera del cálculo.",
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
          "Antes de elegir, compara el precio por diamante y no el precio del paquete. Si sabes que vas a renovar la tarjeta VIP varias veces, un paquete mediano sale mejor que repetir el pequeño; si es una compra única y puntual, el de 780 evita inmovilizar saldo que no vas a usar.",
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
          "Por ese diferencial, comprar diamantes con la idea de revenderlos no tiene sentido económico. La compra se justifica por su uso dentro de la app, y la recompra existe para cerrar un saldo sobrante, no para operar con él.",
        ],
      },
      {
        heading: "La tarjeta VIP en detalle",
        paragraphs: [
          "La tarjeta VIP quita la publicidad de la interfaz y abre funciones de perfil que la versión gratuita no muestra: estadísticas propias más detalladas, opciones de personalización y algunos datos de sesión adicionales. Todo ocurre dentro de la app y nada de eso afecta al juego ni a las mesas.",
          "No es una compra permanente. Corre por un periodo fijo y hay que renovarla al vencimiento; si no la renuevas, la app vuelve a su estado gratuito y los diamantes que te queden siguen en la cuenta, disponibles para cualquier otro uso.",
          "El cálculo de si conviene es sencillo: divide el coste del periodo entre las sesiones que vas a jugar en él. Quien juega a diario y consulta sus estadísticas la amortiza sin discusión; quien abre la app dos veces por semana está pagando sobre todo por no ver anuncios.",
        ],
      },
      {
        heading: "Diamantes para dueños de club",
        paragraphs: [
          "Crear un club tiene una tarifa en diamantes que se paga una vez, y a partir de ahí aparecen los costes corrientes: ampliar el límite de miembros, sostener más mesas abiertas y mantener funciones del club dentro de la app. Es un gasto recurrente, no una inversión inicial.",
          "Ahí está la explicación del paquete de 48.000 por 649: los dueños son sus compradores principales, porque a ese volumen el 15% de descuento por la caja representa la mayor diferencia absoluta de toda la tabla de precios.",
          "Para un jugador sin club, ese paquete no tiene ninguna utilidad. Si alguien te lo ofrece presentándolo como una inversión o como una forma de acceder a mejores condiciones en las mesas, la oferta no está pensada para tu situación.",
        ],
      },
      {
        heading: "Regalos y transferencias",
        paragraphs: [
          "La app permite enviar regalos entre jugadores en la mesa. Son objetos decorativos que se compran con diamantes, se usan como gesto social y no tienen valor recuperable: quien los recibe no obtiene diamantes ni fichas, solo la animación.",
          "Lo que no existe es la transferencia libre de un saldo de diamantes entre cuentas, como si fuera una billetera. La plataforma no lo contempla y tampoco convierte diamantes en fichas de juego en ninguna dirección.",
          "En consecuencia, cualquier servicio que ofrezca “transferir diamantes” de una cuenta a otra está describiendo algo que ocurre fuera de la app, con la confianza como única garantía. Si necesitas diamantes, el camino es comprarlos por la caja de tu club.",
        ],
      },
      {
        heading: "Cómo evitar estafas con diamantes",
        paragraphs: [
          "Los diamantes son el objetivo preferido de las estafas en el entorno PPPoker, por dos razones mecánicas: la entrega es manual y el envío de un pago no se revierte. El estafador solo necesita que pagues una vez.",
          "La regla que cubre casi todos los casos es comprar únicamente por la caja del club donde juegas, en la conversación que ya tienes abierta, y con los precios y descuentos publicados como referencia. Cualquier desviación de eso merece una pausa.",
        ],
        bullets: [
          "Falsos exchangers que aparecen por mensaje privado ofreciendo mejor tipo",
          "Pedidos de pago por adelantado a una cuenta que no emitió el cajero",
          "Ofertas de “duplica tus diamantes” o de conversión directa a fichas",
          "Descuentos muy por encima de los publicados, usados como cebo",
          "Perfiles que imitan el nombre del club con una letra cambiada",
        ],
      },
      {
        heading: "3D Card Squeeze y qué desbloquean los diamantes",
        paragraphs: [
          "3D Card Squeeze es la animación premium de revelación de cartas de PPPoker, disponible en dispositivos iOS y Android compatibles y comprable con diamantes. En lugar de que las cartas se volteen al instante, se descubren con un gesto táctil, imitando el hábito del póker en vivo de revisar lentamente las hole cards.",
          "La función cuesta diamantes por un período definido — típicamente siete o treinta días — y puede renovarse desde el menú de ajustes de la mesa sin levantarse. No revela cartas más rápido ni más lento que la animación estándar; la única diferencia es la experiencia visual.",
          "Los diamantes para Card Squeeze vienen de la tienda in-app o de concesiones promocionales ligadas a depósitos e hitos VIP. Antes de gastar diamantes en cosméticos, confirma el tier de rakeback de tu agente — el retorno del volumen suele superar el valor de cualquier tema de mesa.",
        ],
      },
      {
        heading: "Buy-ins SEKA y gastar diamantes con inteligencia",
        paragraphs: [
          "SEKA es una variante de póker de tres cartas que corre en uniones seleccionadas y cobra una pequeña tarifa en diamantes para crear mesas privadas en algunas configuraciones de clubes. El juego usa fichas para buy-ins y rake, pero el coste de creación de mesa es donde los diamantes entran en juego para anfitriones SEKA.",
          "Como jugador y no anfitrión, tu gasto de diamantes en SEKA se limita a cosméticos opcionales y la función Card Squeeze estándar. El buy-in y rebuy son con fichas — los diamantes no son necesarios para jugar, solo para personalizar la experiencia.",
          "La regla general para gastar diamantes en póker de clubes aplica aquí también: el rakeback del volumen devuelve más valor que cualquier compra cosmética. Si estás decidiendo entre comprar un paquete de temas y jugar una sesión extra en tu stake habitual, la sesión gana siempre.",
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
      {
        q: "¿Los diamantes caducan?",
        a: "No. El saldo permanece en la cuenta sin fecha límite, aunque pases meses sin jugar. Lo que vence es la tarjeta VIP, que es un periodo de uso y no un saldo.",
      },
      {
        q: "¿Puedo pagar los diamantes con un método local?",
        a: "Sí. Por la caja se liquidan con las mismas vías que usas para depositar, incluidos Pix, GCash, tarjeta, Humo y USDT, y se aplica el descuento que la tienda de aplicaciones no tiene.",
      },
      {
        q: "¿Cuánto dura la tarjeta VIP?",
        a: "Un periodo fijo, renovable al vencimiento. La caja te confirma la duración vigente y el coste en diamantes antes de que compres.",
      },
    ],
  },
  "pppoker-interface-guide": {
    intro:
      "La interfaz de PPPoker parece cargada al principio, pero casi todo lo que necesitas está en tres sitios: el lobby del club, la mesa y tu perfil. Esta guía recorre cada zona en el orden en que un nuevo miembro de Grand Club (Club ID 1074072) las usa, incluyendo cómo cambiar el idioma a ruso, portugués, español, uzbeko, inglés o filipino.",
    sections: [
      {
        heading: "Cambiar el idioma de la app",
        paragraphs: [
          "PPPoker ofrece traducción completa de la interfaz en ruso, portugués, español, uzbeko, inglés y filipino. Abre el menú principal desde la pantalla de inicio — icono de tres líneas en la esquina — y toca Ajustes, luego Idioma. El cambio se aplica al instante a menús, etiquetas del lobby y avisos en la mesa sin reiniciar.",
          "Si instalaste la app en un idioma que no lees, la ruta es la misma: el icono de engranaje siempre está en Ajustes. En Android puedes forzar el idioma en ajustes del sistema, pero cambiarlo dentro de PPPoker es más rápido y no afecta otras apps.",
          "Grand Club publica guías en los seis idiomas, así que alinear la app con tu idioma de lectura facilita los mensajes del cajero y las etiquetas internas. Tu nickname y el chat en la mesa quedan como los escribiste; solo cambia la interfaz.",
        ],
        bullets: [
            "Inicio → menú (☰) → Ajustes → Idioma",
            "Disponibles: inglés, ruso, portugués, español, uzbeko, filipino",
            "Cambio instantáneo — sin reiniciar",
            "El chat en la mesa y los nicknames no se traducen",
        ]
      },
      {
        heading: "Lobby del club y buscar mesas",
        paragraphs: [
          "Tras la aprobación en Grand Club, toca el nombre del club en inicio para abrir el lobby. Las pestañas superiores separan Cash Games, MTT, SNG y formatos especiales. Cada pestaña tiene filtros de stakes, tamaño de mesa y tipo de juego para encontrar NLH 6-max en tu nivel sin recorrer todas las salas.",
          "La barra de búsqueda acepta notación como 1/2 o 0.5/1. Toca una fila de mesa para ver jugadores, bote medio y si hay Straddle o Bomb Pot. Un icono verde de asiento significa silla libre; toca para entrar en lista de espera o sentarte directamente.",
          "Si el lobby parece vacío, confirma que abriste Grand Club (1074072) y que tu estado es Active en el panel del club. El tráfico de la unión varía por horario — tardes brasileñas y madrugadas de la CEI suelen llenarse más rápido que el mediodía en otras regiones.",
        ]
      },
      {
        heading: "Interfaz de mesa y botones de acción",
        paragraphs: [
          "Sentado, tus cartas aparecen abajo con stacks alrededor del tapete. Los botones Fold, Call, Raise y el deslizador de apuesta están en el borde inferior. Arrastra el slider o usa presets (medio bote, bote, all-in); el campo numérico acepta cantidades exactas.",
          "El botón del dealer, ciegas y bote actual se muestran en el centro. Un anillo de temporizador en tu avatar muestra el timebank restante; el icono del reloj en ajustes de mesa muestra la reserva de la sesión. Auto-check/fold y sit-out en la siguiente mano están en el mismo menú.",
          "El multi-tabling en móvil cambia mesas con una barra de pestañas arriba. En Windows cada mesa abre en una ventana redimensionable. Evita abrir el mismo asiento en dos dispositivos — el segundo login toma el puesto y puede expulsarte del primero.",
        ]
      },
      {
        heading: "Ajustes de mesa y visualización",
        paragraphs: [
          "Toca el engranaje en la mesa para opciones de visualización y comportamiento. Ajusta tamaño de cartas, color del tapete, fichas en big blinds o valores absolutos y efectos de sonido. Baraja de cuatro colores y rabbit hunting son opcionales y dependen del club.",
          "Las preferencias de apuesta incluyen botones de pre-acción (check/fold, call any, raise any) y tamaño predeterminado del slider. Straddle y run-it-twice pueden auto-rechazarse si no quieres el popup en cada mano.",
          "Los paquetes de tema comprados con diamantes cambian el dorso de las cartas y los marcos. Son solo cosméticos, pero ayudan a distinguir mesas al hacer multi-tabling en escritorio.",
        ],
        bullets: [
            "Engranaje en la mesa → Visualización, Sonido, Apuestas",
            "Alternar fichas en BB vs valores absolutos",
            "Botones de pre-acción aceleran el multi-tabling",
            "Baraja de cuatro colores y temas personalizados",
        ]
      },
      {
        heading: "Perfil, historial de manos y ayuda",
        paragraphs: [
          "Tu perfil está bajo el icono del avatar en inicio. Muestra tu PPPoker ID numérico, nickname, saldo de diamantes y membresías de club. El historial de manos guarda sesiones recientes con calles expandibles — útil para revisar un bote disputado en Grand.",
          "Las estadísticas del club (VPIP, manos jugadas, ganancias en fichas) aparecen en el panel de miembro. Los gestores usan esos números para requisitos de actividad; son independientes de los registros de rake del agente para rakeback.",
          "Para depósitos, retiros y preguntas de cuenta, escribe a @grandppuzbot en Telegram. Para soporte fuera del bot, contacta @Grand_Poker_Reception. El botón Report en el historial señala una mano específica a los admins del club.",
        ]
      }
    ],
    faq: [
      {
        q: "¿Puedo usar PPPoker en uzbeko?",
        a: "Sí. Selecciona uzbeko en Ajustes → Idioma. Menús y lobby se traducen; el chat en la mesa queda en el idioma de los jugadores.",
      },
      {
        q: "¿Por qué no veo mesas en el lobby?",
        a: "Confirma que entraste a Grand Club (1074072) con estado Active. Un lobby vacío suele ser horario fuera de pico — prueba la tarde en tu región o el calendario de MTT.",
      },
      {
        q: "¿Cómo ver manos pasadas?",
        a: "Perfil → Historial de manos. Toca una mano para expandir las calles. Las manos quedan disponibles varias semanas según la configuración del club.",
      },
      {
        q: "¿Cambiar idioma afecta la cuenta?",
        a: "No. El idioma es solo visualización. ID, saldo de fichas y membresías no cambian.",
      }
    ],
  },
  "usdt-deposits-guide": {
    intro:
      "USDT es la moneda de liquidación por defecto en Grand Club: acredita en minutos, cruza fronteras sin fricción bancaria y encaja con la tasa 1 ficha = 1 $. Esta guía cubre depósitos y retiros USDT TRC20 y ERC20 vía @grandppuzbot — comisiones, plazos y errores que retrasan pagos.",
    sections: [
      {
        heading: "Por qué Grand usa USDT como vía principal",
        paragraphs: [
          "El póker de clubes no procesa fiat dentro de PPPoker — todo movimiento real pasa por el agente. En Grand, @grandppuzbot automatiza esa capa: envías USDT, el bot acredita fichas a 1 ficha = 1 $, y los retiros invierten el flujo al mismo cambio sin spread.",
          "USDT encaja porque la liquidación es rápida, auditable on-chain y disponible para jugadores en Brasil (Pix como alternativa), Filipinas (GCash), Rusia (SBP) y Uzbekistán (Uzcard/Humo). Si ya tienes stablecoins, USDT suele ser la ruta más barata.",
          "Tu rakeback del 60% y ganancias por referidos liquidan por la misma caja — una wallet principal simplifica la contabilidad semanal.",
        ]
      },
      {
        heading: "TRC20 vs ERC20 — qué red elegir",
        paragraphs: [
          "Grand acepta USDT en Tron (TRC20) y Ethereum (ERC20). TRC20 es la recomendación por defecto: comisiones de red generalmente bajo un dólar y confirmaciones en uno a tres minutos.",
          "ERC20 tiene sentido si los fondos ya están en Ethereum o el exchange solo lista ese contrato. El gas varía con la congestión y en depósitos pequeños puede superar el monto — revisa la estimación en tu wallet.",
          "Enviar USDT en red incorrecta — TRC20 a dirección ERC20 — resulta en pérdida irreversible. Copia dirección y red directamente de @grandppuzbot, no reutilices mensajes antiguos.",
        ],
        bullets: [
            "TRC20: comisiones menores, más rápido — recomendado para la mayoría",
            "ERC20: cuando wallet o exchange lo exigen",
            "Nunca mezcles redes — red incorrecta = fondos perdidos",
            "Copia dirección nueva del bot en cada depósito",
        ]
      },
      {
        heading: "Depósito USDT paso a paso",
        paragraphs: [
          "Abre @grandppuzbot en Telegram y toca Deposit. Selecciona USDT, luego TRC20 o ERC20. El bot devuelve dirección y nombre de red — envía solo USDT en esa red a esa dirección.",
          "Confirma el monto en tu wallet externa. La mayoría de TRC20 acredita en cinco minutos tras una confirmación on-chain. ERC20 puede tardar más en horas de gas alto. El bot avisa cuando entran las fichas; actualiza el saldo en PPPoker si la mesa muestra stack antiguo.",
          "Mínimos y reglas de redondeo aparecen en el bot antes de confirmar. Si no acredita en treinta minutos, envía el hash de transacción (TxID) — no hagas segundo envío hasta rastrear el primero.",
        ]
      },
      {
        heading: "Retiros USDT — plazos y límites",
        paragraphs: [
          "Toca Withdraw en @grandppuzbot, indica el monto en fichas y pega la dirección USDT. Verifica la red — retiro TRC20 solo a dirección Tron USDT, no Ethereum.",
          "Retiros estándar procesan en pocas horas, 24/7. Primer cashout grande o dirección nueva puede activar revisión manual breve — es normal.",
          "El rakeback semanal entra en el mismo ciclo y puede retirarse en la misma solicitud o quedarse en fichas. Grand no cobra comisión extra en rakeback más allá del costo de red del blockchain.",
        ]
      },
      {
        heading: "Seguridad y errores comunes",
        paragraphs: [
          "Usa solo @grandppuzbot de canales oficiales de Grand Club. Bots falsos copian el nombre con un carácter distinto. Fija el bot real y nunca compartas contraseña de PPPoker o códigos SMS con supuesto soporte.",
          "Los errores más caros son red incorrecta, envío a dirección expirada y omitir memo en exchanges que lo exigen para USDT. Captura la pantalla de depósito del bot antes de enviar.",
          "Para quien prefiera vías locales, Grand también acepta Pix, GCash, SBP, Uzcard y Humo por el mismo bot — útil sin USDT. Tasa y día de liquidación iguales; solo cambia el rail de pago.",
        ],
        bullets: [
            "Verifica el bot: @grandppuzbot",
            "La red debe coincidir al enviar y recibir",
            "Guarda TxID hasta acreditar fichas",
            "Métodos locales si no usas crypto",
        ]
      }
    ],
    faq: [
      {
        q: "¿Cuál es la tasa ficha a USDT?",
        a: "1 ficha = 1 $ USDT en Grand. Depósitos y retiros al mismo cambio sin spread oculto en el bot.",
      },
      {
        q: "¿Cuánto tarda un depósito TRC20?",
        a: "Generalmente uno a cinco minutos tras confirmación on-chain. Retraso mayor a treinta minutos — envía el hash al bot.",
      },
      {
        q: "¿Grand cobra comisión de depósito?",
        a: "Grand no añade markup. Pagas solo la comisión de red de tu wallet o exchange.",
      },
      {
        q: "¿Puedo retirar a wallet distinta del depósito?",
        a: "Sí. Pega cualquier dirección USDT válida en la red correcta. Dirección nueva puede activar verificación breve la primera vez.",
      }
    ],
  },
  "referral-program-guide": {
    intro:
      "Grand Club paga a los referidores 30% del rake de los jugadores invitados — además del 60% de rakeback que esos jugadores reciben en su propio volumen. Esta guía explica cómo obtener tu enlace de referido, qué cuenta en el 30%, el seguimiento en @grandppuzbot y las reglas del programa.",
    sections: [
      {
        heading: "Cómo funciona la cuota del 30% de referido",
        paragraphs: [
          "Cuando un jugador entra a Grand con tu Referral ID, cada dólar de rake del club se registra en tu cuenta de agente. Recibes 30% de ese rake como pago semanal separado — independiente de tu juego y del 60% de rakeback del invitado.",
          "El 30% se calcula sobre el rake bruto del referido, no sobre ganancias o pérdidas. Un mes perdedor con volumen aún genera ingreso de referido; un mes ganador sin acción genera poco.",
          "Las ganancias de referido liquidan en el mismo ciclo semanal que el rakeback. Retira vía @grandppuzbot en USDT, Pix, GCash, SBP, Uzcard o Humo con los mismos métodos que tus cashouts.",
        ]
      },
      {
        heading: "Enlace de referido e invitar jugadores",
        paragraphs: [
          "Tu Referral ID se asigna al unirte a Grand y aparece en las credenciales del club en el sitio y en el mensaje de bienvenida de @grandppuzbot. Los nuevos jugadores lo ingresan en el campo Referral al aplicar al Club ID 1074072 — sin eso, la solicitud no se vincula a ti.",
          "Comparte el ID junto con Club ID 1074072 y enlace a la guía de ingreso. Invitación limpia: instalar PPPoker, registrarse, Join Club, ambos IDs, mensaje al bot para depósito. Jugadores que se registraron antes aún vinculan correctamente si no generaron rake con otro agente.",
          "Grupos de Telegram, comunidades de póker y presentaciones personales funcionan mejor que mensajes fríos masivos. Jugadores que entienden el póker de clubes antes del depósito se quedan más tiempo y generan rake consistente.",
        ],
        bullets: [
            "Comparte Club ID 1074072 + tu Referral ID juntos",
            "El jugador ingresa Referral ID en Join Club — antes de la primera sesión",
            "Dirige novatos a @grandppuzbot para depósito",
            "Invitaciones personales superan enlaces spam",
        ]
      },
      {
        heading: "Seguimiento y estados semanales",
        paragraphs: [
          "Escribe a @grandppuzbot y abre Referral o Stats — referidos activos, rake de la semana y tu parte del 30%. Los nombres aparecen como nicknames PPPoker — los mismos identificadores de los registros de pago del club.",
          "Los estados semanales detallan el rake de cada referido y tu corte. Si un número parece incorrecto, solicita desglose por mano antes del día de liquidación — las correcciones son más fáciles antes del envío.",
          "Jugadores inactivos permanecen en la lista pero generan cero hasta volver. No hay expiración del vínculo mientras el jugador esté bajo tu Referral ID y sea miembro de Grand Club.",
        ]
      },
      {
        heading: "Reglas del programa y qué no cuenta",
        paragraphs: [
          "Auto-referido — segunda cuenta bajo tu propio Referral ID — está prohibido y resulta en pérdida de ganancias y posible expulsión. La plataforma marca dispositivos e IPs compartidos automáticamente.",
          "El rake de un jugador que cambia de agente a mitad de mes cuenta desde la fecha del nuevo Referral ID activo. No hay crédito retroactivo antes del cambio — por eso el ID correcto debe ingresarse antes de la primera mano.",
          "Colusión, dump de fichas entre cuentas referidas y volumen artificial para farmear referidos son violaciones graves. Grand puede retener pagos de referido durante investigación de abuso.",
        ]
      },
      {
        heading: "Crecer ingresos de referido con responsabilidad",
        paragraphs: [
          "El ingreso escala con la calidad de los referidos, no solo el conteo. Un regular en stakes sensatos que juega semanalmente vale más que diez depositantes con una sesión.",
          "Ayuda a los referidos a entender rakeback: ya reciben 60% de su propio rake — fuerte gancho de retención. Un recorrido rápido de la interfaz y del depósito reduce el churn inicial.",
          "Si administras comunidad o canal, divulga que ganas con referidos. Agentes transparentes retienen jugadores más que los que ocultan el acuerdo.",
        ]
      }
    ],
    faq: [
      {
        q: "¿Los referidos reciben menos rakeback por mis 30%?",
        a: "No. Reciben el 60% completo en su volumen. Tu 30% es pago separado del agente, no deducción de su rebate.",
      },
      {
        q: "¿Cuándo se paga el ingreso de referido?",
        a: "Semanalmente, en el mismo ciclo que el rakeback. Retira vía @grandppuzbot tras el estado.",
      },
      {
        q: "¿Puedo referir jugadores de otros países?",
        a: "Sí. Grand acepta jugadores globalmente. USDT, Pix, GCash, SBP, Uzcard y Humo cubren la mayoría de regiones.",
      },
      {
        q: "¿Qué si el jugador olvidó mi Referral ID?",
        a: "Si aún no generó rake, contacta @Grand_Poker_Reception con el PPPoker ID antes de la primera sesión. Tras rake bajo otro ID, no hay transferencia retroactiva.",
      }
    ],
  },
  "nlh-cash-basics": {
    intro:
      "Los cash games de No-Limit Hold'em son donde empieza la mayoría de jugadores de clubes y donde Grand Club mantiene el tráfico más estable durante el día. Esta guía cubre cómo se etiquetan los stakes en PPPoker, cómo elegir mesa y hábitos preflop/postflop que evitan sangrar fichas en las primeras sesiones.",
    sections: [
      {
        heading: "Cómo funcionan los cash NLH en clubes",
        paragraphs: [
          "Un cash game no tiene hora de fin fija — compras fichas, juegas lo que quieras y te vas cuando elijas. Las ciegas permanecen constantes (1/2 significa small blind de una ficha y big blind de dos) en lugar de subir como en torneo.",
          "Los clubes PPPoker corren mesas 6-max y full ring (hasta nueve jugadores) dentro de uniones — una mesa Grand puede incluir jugadores de salas asociadas. El rake se toma de cada bote según el panel de la mesa — típicamente hasta 5% con cap alrededor de tres big blinds.",
          "Tu rakeback del 60% en Grand aplica a cada dólar de ese rake, liquidado semanalmente vía @grandppuzbot. El costo del rake es parte de la selección de mesa: juego loose multiway genera más rake por hora que uno tight al mismo stake.",
        ]
      },
      {
        heading: "Leer stakes y dimensionar el buy-in",
        paragraphs: [
          "Los stakes se escriben como small blind / big blind en fichas, donde una ficha equivale a un dólar en Grand. Mesa 0.5/1 tiene big blind de una ficha; 5/10 tiene diez. El número tras la barra define la geometría del bote y el cap de rake.",
          "Buy-in estándar es 100 big blinds — 200 fichas en 1/2, 1000 en 5/10. PPPoker permite rebuys desde el menú de mesa, pero cargar muy por encima del bankroll porque las fichas ya están en la app es error común de principiante.",
          "Empieza en el stake donde 100 BB es pérdida cómoda de sesión, no fracción significativa del roll mensual. Subir porque el lobby parece soft rara vez funciona si el stake mayor está fuera del plan de bankroll.",
        ],
        bullets: [
            "1 ficha = 1 $ en Grand Club",
            "Buy-in estándar: 100 big blinds",
            "Rake % y cap en el panel de información de mesa",
            "Rebuy desde menú de mesa — no sobrecargues el saldo en la app",
        ]
      },
      {
        heading: "Elegir la mesa correcta",
        paragraphs: [
          "Abre la pestaña Cash Games, filtra NLH y tu rango de stakes, ordena por asientos ocupados. Mesa llena con bote medio sobre cinco BB suele significar más acción recreativa que 6-max vacío esperando al quinto jugador.",
          "Observa una órbita antes de sentarte si el lobby permite espectador. Cuenta cuántos jugadores ven el flop voluntariamente (VPIP) y si los raises reciben múltiples callers. Mesa donde cada mano se raisea y three-betea es de regulares; con limps y multiway es más soft para aprender.",
          "La hora importa en póker de unión. El tráfico Grand mezcla picos nocturnos brasileños, volumen tardío de la CEI y juegos matutinos asiáticos. Abre el lobby en las horas en que planeas jugar antes de comprometer bankroll.",
        ]
      },
      {
        heading: "Fundamentos preflop para principiantes",
        paragraphs: [
          "La posición es el primer concepto a aprender. Juega más tight en posiciones early (under the gun) y más wide en button y cutoff, porque actúas último en calles siguientes y controlas el tamaño del bote más fácilmente.",
          "Open-raise en lugar de limpear al entrar primero al bote. Open estándar es dos y medio a tres big blinds en bote sin abrir. Limpear invita multiway donde manos marginales pierden valor y el rake se come mayor parte de botes pequeños.",
          "Defiende el big blind contra steals, pero no con toda mano. Contra raise de posición late, continúa con pares, conectores suited y broadways que flopean bien; fold basura offsuit débil. Three-bet como principiante debe limitarse a pares fuertes y AK — light three-bets pueden esperar hasta que el postflop sea sólido.",
        ]
      },
      {
        heading: "Básico postflop — una calle a la vez",
        paragraphs: [
          "En el flop, haz dos preguntas: ¿pegué al board y quién tiene ventaja de rango? Cuando raiseaste preflop y el flop tiene cartas altas, puedes apostar pequeño como agresor incluso sin mano fuerte — continuation bet. Cuando callaste preflop sin posición, check más y fold a presión sostenida sin par o draw fuerte.",
          "Las pot odds importan en draws. Si el bote tiene 100 fichas y el oponente apuesta 50, necesitas ganar aproximadamente una de tres para empatar en el call. Cuenta outs (cartas que completan flush o straight) y compara con el precio antes de call con draw.",
          "No bluffees tres calles como principiante. Una apuesta bien elegida en flop o turn basta; disparar a calling stations que nunca foldean cuesta más de lo que gana. En duda en el river, check behind a menudo ahorra medio buy-in en un año de sesiones.",
        ]
      }
    ],
    faq: [
      {
        q: "¿Cuál es la diferencia entre 6-max y full ring?",
        a: "6-max tiene seis asientos y juega más loose con más manos por hora. Full ring hasta nueve y más tight. Ambos existen en Grand; elige el formato que estudiaste.",
      },
      {
        q: "¿Puedo salir de una mesa cash en cualquier momento?",
        a: "Sí. Botón stand-up o cerrar la mesa. Sin penalidad por irse, aunque algunos clubes rastrean sesiones muy cortas para stats de actividad.",
      },
      {
        q: "¿El rakeback cambia qué stakes debo jugar?",
        a: "El rakeback reduce el costo efectivo pero no cambia la skill relativa entre stakes. Juega el stake que tu bankroll soporte; el rebate del 60% ayuda en todo nivel.",
      },
      {
        q: "¿Dónde practicar sin dinero real?",
        a: "El póker de clubes es real-money por diseño. Empieza en el stake más bajo donde 100 BB sea asequible y trata las primeras cien manos como matrícula, no beneficio.",
      }
    ],
  },
  "pppoker-uzbekistan": {
    intro:
      "Uzbekistán tiene una comunidad creciente de póker de clubes, y PPPoker es la app que los jugadores locales usan para llegar a uniones internacionales. Grand Club (ID 1074072) apoya a jugadores uzbekos con depósitos Humo y Uzcard, USDT, interfaz en ruso, 60% rakeback y bot de caja en horarios compatibles con Taskent.",
    sections: [
      {
        heading: "Acceso a PPPoker y configuración para jugadores uzbekos",
        paragraphs: [
          "PPPoker está disponible en Uzbekistán por App Store, Google Play y descarga directa de APK. Registro sin documentos — usuario y contraseña bastan para crear cuenta y aplicar a Grand Club con Club ID 1074072 y tu Referral ID.",
          "Cambia la interfaz a ruso en Ajustes → Idioma si es tu lengua de lectura preferida. Uzbeko también está en la lista. El chat en mesa mezcla ruso, uzbeko e inglés — típico de mesas de unión orientadas a la CEI.",
          "Conexión estable importa más que la operadora. Wi-Fi en casa sirve para una mesa; en multi-tabling Windows, cable reduce riesgo de desconexión en botes grandes.",
        ]
      },
      {
        heading: "Pagos locales: Humo, Uzcard y USDT",
        paragraphs: [
          "Grand acepta transferencias Humo y Uzcard para jugadores en Uzbekistán vía @grandppuzbot en Telegram. Escribe al bot, selecciona pago local y sigue monto y datos de tarjeta. Liquidación a 1 ficha = 1 $ sin spread entre depósito y retiro.",
          "USDT en TRC20 es la opción transfronteriza más rápida si ya usas wallet crypto o exchange con retiro Tron. Comisiones bajas y fichas acreditan en minutos — útil para jugar en pico de unión sin esperar al banco.",
          "En el primer depósito, empieza con monto de prueba pequeño y completa un ciclo de retiro antes de cargar bankroll mayor. Confirma la vía de pago antes de comprometer más.",
        ],
        bullets: [
            "Humo y Uzcard vía @grandppuzbot",
            "USDT TRC20 para depósitos crypto más rápidos",
            "Tasa: 1 ficha = 1 $, igual en depósito y retiro",
            "Prueba con monto pequeño antes de carga grande",
        ]
      },
      {
        heading: "Horas pico y tráfico desde Taskent",
        paragraphs: [
          "El tráfico de la unión sigue varias zonas horarias. Desde Taskent (UTC+5), la tarde local cruza con juegos tardíos de la CEI y mañana asiática. El pico brasileño cae en las primeras horas de la mañana uzbeka — útil si prefieres NLH más soft.",
          "Abre el lobby Grand en las horas en que realmente jugarás varios días antes de elegir stake regular. Una captura de lobby lleno en el pico de otro huso no refleja tu horario.",
          "Las noches de fin de semana en Uzbekistán suelen tener más locales en chat en ruso; las tardes entre semana inclinan a regulares internacionales. Ambos son jugables; la diferencia es textura de mesa.",
        ]
      },
      {
        heading: "Beneficios de Grand Club para jugadores uzbekos",
        paragraphs: [
          "Grand ofrece 60% rakeback en contributed rake, liquidado semanalmente vía @grandppuzbot. Tasa declarada de antemano — no teaser que cae tras el primer mes — y aplica a cash y fees de torneo.",
          "La caja Telegram @grandppuzbot procesa depósitos y retiros 24 horas sin esperar humano en pedidos rutinarios. @Grand_Poker_Reception para cuentas, corrección de Referral ID y disputas que necesitan persona.",
          "Grand está en una unión internacional — no juegas solo con uzbekos. Acceso al pool amplio con liquidación en moneda y método que funcionan localmente.",
        ]
      },
      {
        heading: "Consejos prácticos para las primeras sesiones",
        paragraphs: [
          "Ingresa Club ID 1074072 y Referral ID al aplicar. El rake antes del vínculo no acredita retroactivamente — el ID debe estar antes de la primera mano.",
          "Mantén en fichas solo el bankroll activo de sesión. Retira el resto en el día de liquidación semanal con el rakeback — las fichas son crédito en el club, no saldo bancario regulado.",
          "Si administras chat local de póker, el programa de referidos Grand paga 30% del rake referido además del 60% rakeback de los referidos. Mismas reglas: sin auto-referido y volumen artificial.",
        ]
      }
    ],
    faq: [
      {
        q: "¿Es legal PPPoker en Uzbekistán?",
        a: "El póker de clubes opera fuera de marcos locales licenciados. Los jugadores evalúan la regulación en su jurisdicción. Grand provee la capa de agente; no damos asesoría legal.",
      },
      {
        q: "¿Puedo depositar en som uzbeko?",
        a: "Liquidación en equivalente USD a 1 ficha = 1 $. Transferencias Humo y Uzcard se convierten a la tasa de @grandppuzbot al momento del depósito.",
      },
      {
        q: "¿Qué idioma configurar en la app?",
        a: "Ruso y uzbeko están soportados. Elige el que leas mejor; el chat en mesa seguirá mezclado.",
      },
      {
        q: "¿Qué tan rápidos son retiros Uzcard?",
        a: "Retiros rutinarios en pocas horas vía @grandppuzbot. Primer o gran cashout puede necesitar verificación manual breve.",
      }
    ],
  },
};

export default articles;
