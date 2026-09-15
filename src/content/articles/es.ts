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
  "pppoker-brazil": {
    intro:
      "Brasil es uno de los mercados PPPoker más grandes del mundo, con miles de jugadores buscando clubes fiables, cajas compatibles con Pix y mesas en horario nocturno BRT. Grand Club (ID 1074072) está orientado a esa audiencia: interfaz en portugués, depósitos Pix vía @grandppuzbot, 60% rakeback y acceso al tráfico internacional de la unión.",
    sections: [
      {
        heading: "Por qué los jugadores brasileños eligen clubes PPPoker",
        paragraphs: [
          "El póker online regulado es limitado en Brasil, así que el póker de clubes en PPPoker cubre la demanda de cash NLH, MTT y juegos privados con stakes familiares. Los clubes operan en uniones que comparten liquidez — una sesión nocturna brasileña puede incluir acción de Europa, la CEI y Asia en el mismo lobby.",
          "Elegir el club correcto importa más que instalar la app. Un buen agente ofrece tipo de ficha transparente, liquidación Pix rápida y rakeback que realmente se paga cada semana. Clubes débiles prometen bonos pero retrasan retiros o cambian términos tras el primer depósito.",
          "Grand Club apunta a recreativos serios y semi-pros que quieren economía predecible: 1 ficha = 1 $, 60% rakeback en contributed rake y programa de referidos del 30% del rake referido.",
        ]
      },
      {
        heading: "Depósitos y retiros Pix por la caja Grand",
        paragraphs: [
          "Grand procesa Pix para jugadores brasileños vía @grandppuzbot en Telegram. Abre el bot, elige Brazil / Pix y sigue el monto en BRL con la clave de destino del chat. Las fichas acreditan tras confirmar la transferencia — normalmente en minutos.",
          "Los retiros usan el mismo camino: solicita cashout en el bot, confirma tu clave Pix y recibe BRL a 1 ficha = 1 $ equivalente. La caja oficial Grand no añade spread oculto entre compra y venta de fichas.",
          "En la primera transacción, envía un depósito de prueba pequeño y completa un retiro antes de cargar el bankroll completo. @Grand_Poker_Reception gestiona casos que requieren persona.",
        ],
        bullets: [
            "Pix entrada y salida vía @grandppuzbot — solo caja oficial Grand",
            "Liquidación 1 ficha = 1 $ sin spread depósito/retiro",
            "Prueba con Pix pequeño antes de carga grande",
            "Soporte humano @Grand_Poker_Reception para cuenta",
        ]
      },
      {
        heading: "Interfaz en portugués y configuración del lobby",
        paragraphs: [
          "PPPoker incluye traducción completa al portugués. Menú → Ajustes → Idioma → Português. Menús y filtros cambian al instante; usuario y chat en mesa permanecen como los escribiste.",
          "Al aplicar a Grand Club, ingresa Club ID 1074072 y Referral ID antes de la primera mano. El rake sin vínculo correcto no acredita retroactivamente.",
          "El lobby separa Cash Games, MTT y SNG. Usa filtros de stake para NLH en tu nivel — micro y low stakes suelen correr bien en prime time BRT.",
        ]
      },
      {
        heading: "Horas pico en Brasil y tráfico de mesas",
        paragraphs: [
          "La mayoría de regulars brasileños juegan entre 19:00 y 01:00 BRT entre semana, con más volumen viernes y sábado noche. Esas horas cruzan con tarde europea y madrugada CEI.",
          "Para pools más soft, prueba sesiones más tempranas el fin de semana o mesas con bote medio menor en el preview del lobby.",
          "El multi-tabling es popular entre grinders brasileños en Windows. Mantén Telegram con @grandppuzbot abierto si depositas mid-session.",
        ],
        bullets: [
            "Pico BRT: aproximadamente 19:00–01:00 entre semana",
            "Noches de fin de semana con mayor volumen MTT y cash",
            "Filtros del lobby para stakes acordes al bankroll",
            "Cliente Windows para multi-mesa en prime time brasileño",
        ]
      },
      {
        heading: "Ventajas de Grand Club para Brasil",
        paragraphs: [
          "Grand está en una unión internacional — no quedas limitado a un pool local pequeño. Pagos brasileños y soporte en portugués con mesas de tráfico global.",
          "El 60% rakeback se declara de antemano y se liquida semanalmente vía @grandppuzbot junto con retiros.",
          "Si administras comunidad de póker, el 30% de referidos se suma al rakeback de tus invitados. Mismas reglas: sin auto-referido, chip dumping ni volumen artificial.",
        ]
      }
    ],
    faq: [
      {
        q: "¿Grand Club acepta Pix?",
        a: "Sí. Jugadores brasileños depositan y retiran vía Pix en @grandppuzbot a 1 ficha = 1 $ equivalente.",
      },
      {
        q: "¿Puedo usar la app en portugués?",
        a: "Sí. PPPoker soporta portugués en Ajustes → Idioma. Grand publica guías en portugués.",
      },
      {
        q: "¿Cuáles son las mejores horas desde Brasil?",
        a: "Noche BRT, especialmente 19:00–01:00, suele tener más cash y MTT en la unión.",
      },
      {
        q: "¿Cómo unirme a Grand Club?",
        a: "Aplica con Club ID 1074072 y Referral ID en PPPoker y, tras aprobación, fondea vía @grandppuzbot.",
      }
    ],
  },
  "pppoker-latam": {
    intro:
      "Latinoamérica abarca varias zonas horarias y sistemas de pago, pero PPPoker ofrece a jugadores de México, Argentina y Colombia una sola app para mesas internacionales de unión. Grand Club (ID 1074072) apoya la región con guías en español, transferencias locales vía @grandppuzbot, 60% rakeback y liquidación a 1 ficha = 1 $.",
    sections: [
      {
        heading: "PPPoker en México, Argentina y Colombia",
        paragraphs: [
          "Jugadores en Ciudad de México, Buenos Aires y Bogotá usan PPPoker por la misma razón: el póker de clubes ofrece cash NLH y MTT cuando los sitios regulados son limitados. Los hábitos bancarios difieren, pero la estructura del club es idéntica al unirte a Grand.",
          "La calidad de agentes varía. Algunos clubes LatAm prometen bonos enormes pero retiran por canales informales. Grand usa la caja Telegram verificada @grandppuzbot y @Grand_Poker_Reception para disputas.",
          "Aplica con Club ID 1074072 y Referral ID antes de la primera mano. El rakeback y seguimiento de referidos solo funcionan desde que el vínculo está activo.",
        ]
      },
      {
        heading: "Interfaz en español y configuración regional",
        paragraphs: [
          "PPPoker incluye traducción completa al español. Ajustes → Idioma → Español. Pestañas del lobby y botones de mesa cambian al instante.",
          "Grand publica material en español, portugués, ruso, inglés, uzbeko y filipino — útil para comunidades mixtas LatAm/Brasil.",
          "El chat en mesa mezcla español, inglés y portugués — típico de mesas internacionales en las noches de las Américas.",
        ],
        bullets: [
            "Ajustes → Idioma → Español para UI completa",
            "Guías Grand en seis idiomas incluido español",
            "Club ID 1074072 y Referral ID antes de la primera mano",
            "Chat multilingüe — solo se traducen menús",
        ]
      },
      {
        heading: "Opciones de pago local en LatAm",
        paragraphs: [
          "Grand enruta depósitos y retiros LatAm por @grandppuzbot según tu país. Elige región y sigue instrucciones bancarias o de wallet en el chat. Liquidación siempre 1 ficha = 1 $ sin spread oculto.",
          "USDT TRC20 sigue siendo la opción transfronteriza más rápida si los rails locales son lentos. Depósitos crypto acreditan en minutos tras confirmación.",
          "Empieza con depósito de prueba pequeño y un retiro completo antes de cargar bankroll total.",
        ]
      },
      {
        heading: "Uniones LatAm y tráfico pico",
        paragraphs: [
          "Grand participa en uniones internacionales — tardes/noches LatAm se cruzan con Brasil, Europa y EE.UU. Ciudad de México (CST) pico ~20:00–02:00; Argentina más tarde; Colombia entre ambos.",
          "MTT de fin de semana atraen el campo más amplio de las Américas. Cash llena más rápido viernes y sábado.",
          "Filtra lobby por stakes y bote medio antes de sentarte. Bote medio mayor suele significar regulares más fuertes.",
        ],
        bullets: [
            "Pico en grandes ciudades LatAm: ~20:00–02:00",
            "MTT de fin de semana — campo más amplio",
            "Tráfico de unión mezcla LatAm, Brasil, Europa y EE.UU.",
            "Filtra stakes y bote medio antes de sentarte",
        ]
      },
      {
        heading: "Por qué Grand Club encaja con jugadores LatAm",
        paragraphs: [
          "Grand combina volumen internacional con capa de agente transparente: 60% rakeback, liquidación semanal vía @grandppuzbot y 30% de referidos.",
          "No quedas limitado a un pool local pequeño. Mantienes liquidez de unión con retiros coordinados para tu país.",
          "Errores — Referral ID incorrecto, transferencia retrasada — escalan en @Grand_Poker_Reception.",
        ]
      }
    ],
    faq: [
      {
        q: "¿Puedo jugar desde México, Argentina o Colombia?",
        a: "Sí. Póker de clubes PPPoker disponible en los tres países vía Grand Club ID 1074072 con pagos regionales en @grandppuzbot.",
      },
      {
        q: "¿La app está en español?",
        a: "Sí. Español en Ajustes → Idioma. Grand publica guías en español.",
      },
      {
        q: "¿Qué tipo de ficha usa Grand?",
        a: "1 ficha = 1 $ en depósito y retiro por la caja oficial.",
      },
      {
        q: "¿Cómo funciona el programa de referidos?",
        a: "Ganas 30% del rake de jugadores con tu Referral ID, además de su 60% rakeback.",
      }
    ],
  },
  "pppoker-russia-cis": {
    intro:
      "Rusia y la CEI ampliada siguen siendo mercados centrales del póker de clubes PPPoker, con tráfico intenso en uniones como Yamal y Crazy Union. Grand Club (ID 1074072) sirve la región con interfaz en ruso, pagos SBP vía @grandppuzbot, 60% rakeback y liquidación a 1 ficha = 1 $.",
    sections: [
      {
        heading: "Acceso a PPPoker para jugadores de Rusia y la CEI",
        paragraphs: [
          "PPPoker se usa ampliamente en Rusia, Kazajistán, Bielorrusia y países vecinos donde los jugadores quieren cash NLH y MTT fuera de sitios licenciados locales. App móvil y cliente desktop para multi-mesa.",
          "La membresía del club da acceso a liquidez de unión. Aplicar a Grand con Club ID 1074072 y Referral ID vincula tu cuenta a un agente verificado con rakeback publicado.",
          "Mantén username PPPoker consistente al contactar @grandppuzbot o @Grand_Poker_Reception.",
        ]
      },
      {
        heading: "SBP y rails de pago local",
        paragraphs: [
          "Grand acepta transferencias SBP para jugadores rusos vía @grandppuzbot. Selecciona Russia / SBP y envía el monto exacto a los datos mostrados. Fichas acreditan tras confirmación.",
          "Jugadores de otros países CEI pueden usar transferencias bancarias, USDT TRC20 o métodos regionales en el bot. Todas las rutas: 1 ficha = 1 $ sin spread.",
          "Completa ciclo de depósito y retiro de prueba pequeño antes de bankroll grande.",
        ],
        bullets: [
            "Depósitos y retiros SBP vía @grandppuzbot",
            "USDT TRC20 para transferencias CEI rápidas",
            "Tipo 1 ficha = 1 $ en ambos lados",
            "Prueba con monto pequeño antes de carga grande",
        ]
      },
      {
        heading: "Interfaz en ruso y contexto de unión",
        paragraphs: [
          "PPPoker incluye traducción completa al ruso — Ajustes → Idioma → Русский. Menús cambian al instante; chat en mesa multilingüe.",
          "Grand está en uniones internacionales con tráfico Yamal y Crazy Union. Noches CEI cruzan con tarde europea y mañana asiática.",
          "Nombres de unión describen pools compartidos. Entrada vía Grand Club ID 1074072 y misma caja.",
        ]
      },
      {
        heading: "Horas pico en zonas horarias CEI",
        paragraphs: [
          "Noche de Moscú ~19:00–02:00 MSK es la ventana más activa. Kazajistán y Bielorrusia con desplazamiento de una a dos horas.",
          "Grinders nocturnos CEI encuentran mesas matutinas de Brasil y sesiones europeas en la misma unión.",
          "MTT de fin de semana — campos multi-región más amplios. Filtra MTT por buy-in.",
        ],
        bullets: [
            "Pico MSK: ~19:00–02:00 para regulares rusos",
            "Madrugada CEI cruza mañana Brasil y mesas UE",
            "MTT fin de semana — campos más amplios",
            "Filtra MTT por buy-in antes de registrarte",
        ]
      },
      {
        heading: "Por qué Grand frente a agentes informales CEI",
        paragraphs: [
          "Agentes informales prometen rakeback mayor pero cambian términos y retrasan pagos. Grand publica 60% contributed rake, paga semanalmente vía @grandppuzbot y documenta 1 ficha = 1 $.",
          "Programa de referidos 30% para líderes de comunidad. Mismas reglas anti-fraude.",
          "@Grand_Poker_Reception gestiona disputas y Referral ID.",
        ]
      }
    ],
    faq: [
      {
        q: "¿Grand acepta SBP?",
        a: "Sí. Jugadores rusos depositan y retiran vía SBP en @grandppuzbot a 1 ficha = 1 $.",
      },
      {
        q: "¿Puedo poner la app en ruso?",
        a: "Sí. UI completa en ruso en Ajustes → Idioma.",
      },
      {
        q: "¿Qué son Yamal y Crazy Union?",
        a: "Pools de liquidez de unión en PPPoker. Grand participa en uniones internacionales con ese tráfico.",
      },
      {
        q: "¿Qué tan rápidos son retiros CEI?",
        a: "SBP y USDT rutinarios en horas vía @grandppuzbot. Primer retiro grande puede necesitar verificación manual breve.",
      }
    ],
  },
  "local-payments-guide": {
    intro:
      "Grand Club liquida cada transacción a 1 ficha = 1 $ mediante una sola caja Telegram verificada — @grandppuzbot — con respaldo humano en @Grand_Poker_Reception. Esta guía explica Pix (Brasil), GCash (Filipinas), SBP (Rusia), Uzcard y Humo (Uzbekistán) y transferencias bancarias.",
    sections: [
      {
        heading: "Cómo funciona la caja Grand",
        paragraphs: [
          "Todos los depósitos y retiros oficiales de Grand pasan por @grandppuzbot. Abre Telegram, inicia el bot y elige país o tipo de pago. El bot muestra monto exacto, datos de destino y código de referencia.",
          "Las fichas acreditan tras confirmación en el lado Grand — no al pulsar enviar en tu app bancaria. Guarda captura del comprobante hasta que aparezcan fichas en Grand Club ID 1074072.",
          "Si el bot no reconoce la transferencia, contacta @Grand_Poker_Reception con username PPPoker, monto, hora y comprobante. No pagues cuentas personales ofrecidas en chats aleatorios.",
        ],
        bullets: [
            "Caja oficial: solo @grandppuzbot",
            "Escalación humana: @Grand_Poker_Reception",
            "Tipo: 1 ficha = 1 $ en depósito y retiro",
            "Nunca pagues agentes no verificados en chats privados",
        ]
      },
      {
        heading: "Pix para jugadores brasileños",
        paragraphs: [
          "Pix es el rail predeterminado para Brasil. Selecciona Brazil / Pix en @grandppuzbot, copia la clave Pix y envía el monto BRL exacto. Envíos parciales o claves erróneas retrasan el crédito.",
          "Los retiros invierten el flujo: solicita cashout, confirma clave Pix y recibe BRL al mismo 1 ficha = 1 $ equivalente.",
          "Los bancos brasileños a veces bloquean primeras transferencias. Prueba un monto de prueba menor.",
        ]
      },
      {
        heading: "GCash y rails filipinos",
        paragraphs: [
          "Jugadores filipinos fondean vía GCash y opciones locales en el menú Philippines de @grandppuzbot. Sigue número o cuenta exactamente.",
          "USDT TRC20 es popular entre grinders filipinos con exchanges crypto. Acredita rápido y evita restricciones bancarias en fin de semana.",
          "Completa ciclo pequeño de depósito y retiro antes de cargar bankroll completo.",
        ],
        bullets: [
            "GCash vía menú Philippines en @grandppuzbot",
            "USDT TRC20 para depósitos rápidos en fin de semana",
            "Incluye todos los códigos de referencia del bot",
            "Prueba pequeña antes de carga grande de sesión",
        ]
      },
      {
        heading: "SBP para Rusia y la CEI",
        paragraphs: [
          "Jugadores rusos usan SBP por la opción Russia / SBP en @grandppuzbot. El bot muestra teléfono o enlace bancario y monto RUB exacto.",
          "Jugadores de Kazajistán, Bielorrusia y otros países CEI pueden ver transferencia bancaria o USDT. Elige tu país en el bot.",
          "Los límites diarios SBP varían por banco. Si falla, verifica límite restante o divide en dos pedidos del bot.",
        ]
      },
      {
        heading: "Uzcard, Humo y transferencias bancarias",
        paragraphs: [
          "Jugadores uzbekos fondean vía Humo y Uzcard en @grandppuzbot. El bot convierte som al equivalente USD de fichas — anclado en 1 ficha = 1 $ en el club.",
          "Transferencias bancarias genéricas donde Pix, GCash o SBP no están listados. Inicia siempre desde el flujo del bot.",
          "60% rakeback y 30% referidos se liquidan por la misma caja @grandppuzbot semanalmente.",
        ],
        bullets: [
            "Humo y Uzcard para Uzbekistán vía @grandppuzbot",
            "Transferencias bancarias solo por instrucciones del bot",
            "USDT TRC20 globalmente como rail de respaldo",
            "Rakeback y referidos por la misma caja",
        ]
      }
    ],
    faq: [
      {
        q: "¿1 ficha es realmente 1 $?",
        a: "Sí. Grand usa 1 ficha = 1 $ en depósito y retiro vía @grandppuzbot sin spread oculto.",
      },
      {
        q: "¿Qué caja es oficial?",
        a: "Solo @grandppuzbot en Telegram. @Grand_Poker_Reception apoya cuentas pero no reemplaza el bot en rutina.",
      },
      {
        q: "¿Puedo mezclar métodos de pago?",
        a: "Sí. Depósito vía Pix y retiro vía USDT, siempre que cada transacción siga el flujo del bot.",
      },
      {
        q: "¿Cuánto tardan transferencias locales?",
        a: "Pix, SBP y GCash suelen de minutos a pocas horas. Primer o gran retiro puede necesitar revisión manual breve.",
      }
    ],
  },
  "scam-red-flags": {
    intro:
      "El póker de clubes atrae agentes honestos y estafadores. Grand Club publica una caja oficial — @grandppuzbot — y soporte en @Grand_Poker_Reception porque agentes falsos cuestan dinero cada semana. Este artículo lista siete alertas, explica chip dumping y estafas de retraso de retiro.",
    sections: [
      {
        heading: "Siete señales de alerta de un vistazo",
        paragraphs: [
          "Alerta uno: agente pide depósito a cuenta personal o wallet no mostrada en @grandppuzbot. Alerta dos: rakeback prometido por encima de términos publicados sin registro semanal.",
          "Alerta tres: presión para unirse rápido sin verificar Club ID 1074072 en PPPoker. Alerta cuatro: rechazo de retiro de prueba pequeño. Alerta cinco: pedido de contraseña PPPoker o códigos SMS.",
          "Alerta seis: mesas solo en DM, no en lobby. Alerta siete: retrasos de retiro con excusas vagas mientras aceptan nuevos depósitos.",
        ],
        bullets: [
            "1. Pagos fuera de @grandppuzbot",
            "2. Rakeback prometido sin prueba semanal",
            "3. Club ID incorrecto o no verificado",
            "4. Sin retiro de prueba pequeño",
            "5. Pedido de contraseña u OTP",
            "6. Mesas solo en DM, no lobby",
            "7. Depósitos abiertos, retiros parados",
        ]
      },
      {
        heading: "Agentes falsos e impersonación",
        paragraphs: [
          "Estafadores copian branding Grand en usernames Telegram con un carácter de diferencia de @grandppuzbot o @Grand_Poker_Reception. Abre enlaces solo del sitio oficial o contactos guardados.",
          "Agentes falsos muestran capturas de saldos que no controlan. Verifica: busca Club ID 1074072 en PPPoker y espera aprobación in-app antes de pagar.",
          "Si alguien dice ser Grand pero usa Pix, SBP o USDT personal — detente. Grand no sustituye el bot por cuentas privadas en depósitos rutinarios.",
        ]
      },
      {
        heading: "Chip dumping y estafas de colusión",
        paragraphs: [
          "Chip dumping son pérdidas intencionales para transferir valor evitando límites de caja o lavar fichas robadas. Los clubes monitorizan patrones inusuales entre cuentas vinculadas.",
          "Estafadores piden soft-play o dump a cambio de rakeback falso — riesgo de congelación de retiros durante revisión.",
          "Grand aplica reglas anti-colusión. Juega cada mano por EV máximo y reporta soft-play sospechoso a @Grand_Poker_Reception.",
        ]
      },
      {
        heading: "Retrasos de retiro y exit scams",
        paragraphs: [
          "Exit scam clásico acepta depósitos, acumula saldo, retrasa retiros y desaparece. Señales: nuevos datos de pago y cashouts pausados para todos excepto insiders.",
          "Retiros legítimos Grand vía @grandppuzbot tardan horas, no semanas. Primer retiro grande puede necesitar verificación manual breve.",
          "Si hay retraso, escribe @Grand_Poker_Reception con username, hora y comprobante.",
        ],
        bullets: [
            "Retiros rutinarios Grand: horas, no semanas",
            "Nuevos datos de pago de repente = para y verifica",
            "Escala retrasos a @Grand_Poker_Reception",
            "Guarda capturas de pedidos del bot y comprobantes",
        ]
      },
      {
        heading: "Cómo Grand Club protege a los jugadores",
        paragraphs: [
          "Grand centraliza flujo en @grandppuzbot a 1 ficha = 1 $ con 60% rakeback y 30% referidos publicados. Economía transparente reduce bait-and-switch.",
          "@Grand_Poker_Reception respalda disputas, Referral ID y fraudes — segundo contacto no ligado a una wallet individual.",
          "Antes del primer depósito, confirma Club ID 1074072 en PPPoker, haz prueba pequeña y guarda contactos Telegram oficiales.",
        ]
      }
    ],
    faq: [
      {
        q: "¿Cuál es la única caja oficial Grand?",
        a: "@grandppuzbot en Telegram. Cualquier otra cuenta pidiendo depósito es alerta.",
      },
      {
        q: "¿Está permitido el chip dumping?",
        a: "No. Viola reglas del club y puede llevar a congelación y ban. Nunca aceptes pérdidas intencionales.",
      },
      {
        q: "¿Cuánto debe tardar un retiro normal?",
        a: "Pix, SBP, GCash y USDT rutinarios generalmente en horas vía @grandppuzbot.",
      },
      {
        q: "Alguien copió branding Grand — ¿qué hago?",
        a: "No pagues. Verifica Club ID 1074072 en PPPoker y contacta solo @grandppuzbot o @Grand_Poker_Reception desde enlaces oficiales.",
      }
    ],
  },
  "pppoker-philippines": {
    intro:
      "Filipinas es una de las regiones PPPoker de más rápido crecimiento, con jugadores Pinoy buscando cajas compatibles con GCash, mesas en horario nocturno PHT y clubes que pagan rakeback a tiempo. Grand Club (ID 1074072) atiende a esa audiencia con liquidación GCash vía @grandppuzbot, 60% rakeback, programa de referidos del 30% y acceso al tráfico internacional de la unión a 1 ficha = 1 $.",
    sections: [
      {
        heading: "Por qué los jugadores Pinoy eligen clubes PPPoker",
        paragraphs: [
          "El póker online regulado es limitado para muchos filipinos, así que el póker de clubes en PPPoker cubre la demanda de cash NLH, MTT, PLO y juegos privados con stakes familiares. Los clubes operan en uniones que comparten liquidez entre Asia, Europa y Américas — una sesión nocturna en Manila puede incluir acción de varias regiones.",
          "Elegir el club correcto importa más que instalar la app. Un buen agente ofrece tipo de ficha transparente, liquidación GCash rápida y rakeback que realmente se paga cada semana. Clubes débiles prometen bonos pero retrasan retiros o cambian términos tras el primer depósito.",
          "Grand Club apunta a recreativos serios y semi-pros que quieren economía predecible: 1 ficha = 1 $, 60% rakeback en contributed rake y referidos del 30% del rake referido.",
        ]
      },
      {
        heading: "Depósitos y retiros GCash por la caja Grand",
        paragraphs: [
          "Grand procesa GCash para jugadores filipinos vía @grandppuzbot en Telegram. Abre el bot, elige Philippines / GCash y sigue el monto en PHP con el número o datos mostrados en el chat. Las fichas acreditan tras la confirmación — generalmente en minutos en horario de caja.",
          "Los retiros usan el mismo camino: solicita cashout en el bot, confirma tu número GCash y recibe PHP a la tasa fija de 1 ficha = 1 $ equivalente. No hay spread oculto entre compra y venta de fichas en la caja oficial Grand.",
          "En la primera transacción, envía un depósito de prueba pequeño y completa un retiro antes de cargar el bankroll completo. @Grand_Poker_Reception trata casos que necesitan humano, como Referral ID incorrecto o transferencia atascada.",
        ],
        bullets: [
            "GCash entrada y salida vía @grandppuzbot — solo caja oficial Grand",
            "Liquidación 1 ficha = 1 $ sin spread depósito/retiro",
            "Prueba con GCash pequeño antes de carga grande",
            "Soporte humano @Grand_Poker_Reception para cuenta",
        ]
      },
      {
        heading: "Interfaz filipina y unirse a Grand Club",
        paragraphs: [
          "PPPoker incluye traducción completa al filipino. Menú en pantalla inicial → Ajustes → Idioma → Filipino. Menús y filtros cambian al instante; username y chat en mesa permanecen como los escribiste.",
          "Al aplicar a Grand Club, ingresa Club ID 1074072 y Referral ID antes de la primera mano. Rake sin vínculo correcto no se acredita retroactivamente, y el rakeback depende de esa conexión desde el día uno.",
          "El lobby separa Cash Games, MTT y SNG. Usa filtros de stake para NLH o PLO a tu nivel — micro y low stakes suelen correr bien en prime time PHT.",
        ]
      },
      {
        heading: "Horas pico en Filipinas y tráfico de mesas",
        paragraphs: [
          "La mayoría de regulars filipinos juegan entre 19:00 y 01:00 PHT entre semana, con más volumen viernes y sábado por la noche. Esas horas cruzan con mañana europea y tarde de la CEI, manteniendo mesas NLH y PLO medias ocupadas.",
          "Para pools más soft, prueba sesiones más tempranas el fin de semana o mesas con bote medio menor en la vista previa del lobby. Hora pico no siempre es mejor win rate — es más volumen.",
          "Multi-tabling es popular entre grinders Pinoy en el cliente Windows. Mantén Telegram con @grandppuzbot abierto si depositas mid-session para no perder confirmación en bote grande.",
        ],
        bullets: [
            "Pico PHT: cerca de 19:00–01:00 entre semana",
            "Noches de fin de semana con mayor volumen MTT y cash",
            "Filtros del lobby para stakes alineados al bankroll",
            "Cliente Windows para multi-mesa en prime time filipino",
        ]
      },
      {
        heading: "Ventajas de Grand Club para Filipinas",
        paragraphs: [
          "Grand está en una unión internacional — no quedas limitado a un pool local pequeño. Pagos GCash y soporte en filipino con mesas de tráfico global.",
          "El 60% rakeback se declara de antemano y se liquida semanalmente vía @grandppuzbot junto con retiros. Supera clubes genéricos que anuncian rakeback alto pero limitan pagos.",
          "Si administras comunidad o stream, el 30% de referidos sobre rake referido suma al rakeback de tus invitados. Mismas reglas: sin auto-referidos, chip dumping o volumen artificial.",
        ]
      }
    ],
    faq: [
      {
        q: "¿Grand Club acepta GCash?",
        a: "Sí. Jugadores filipinos depositan y retiran vía GCash en @grandppuzbot a 1 ficha = 1 $ equivalente.",
      },
      {
        q: "¿Puedo usar la app en filipino?",
        a: "Sí. PPPoker soporta Filipino en Ajustes → Idioma. Grand publica guías en filipino.",
      },
      {
        q: "¿Cuáles son las mejores horas desde Filipinas?",
        a: "Noche PHT, especialmente 19:00–01:00, suele tener más cash y MTT en la unión.",
      },
      {
        q: "¿Cómo unirme a Grand Club?",
        a: "Aplica con Club ID 1074072 y Referral ID en PPPoker y, tras aprobación, fondea vía @grandppuzbot.",
      }
    ],
  },
  "plo5-guide": {
    intro:
      "PLO5 — Pot-Limit Omaha con cinco cartas — es uno de los formatos más populares en lobbies PPPoker después del NLH. La carta extra aumenta acción, tamaño de botes y varianza frente a PLO4. Esta guía explica reglas, dónde encontrar mesas PLO5 en Grand Club (ID 1074072) y consejos prácticos para principiantes que ya conocen Hold'em.",
    sections: [
      {
        heading: "Qué es PLO5 y cómo difiere de PLO4",
        paragraphs: [
          "En PLO5 cada jugador recibe cinco cartas privadas y debe usar exactamente dos con exactamente tres del board. Misma regla que PLO4, pero la quinta carta crea más draws, más cambios de nut y botes mayores de media.",
          "Pot-limit significa que el raise máximo iguala el bote actual incluyendo la call. No puedes shovear sobre el pot limit en un solo raise — stacks quedan más profundos respecto al bote.",
          "Muchas uniones PPPoker corren PLO5 junto a PLO4 y NLH. Grand Club comparte liquidez de unión, así que mesas PLO5 aparecen en las mismas pestañas de cash con membresía activa.",
        ]
      },
      {
        heading: "Reglas básicas de PLO5 para principiantes",
        paragraphs: [
          "Rankings estándar de póker. Diferencia crítica del Hold'em: debes usar dos hole cards — un as en board no hace par de ases si solo tienes un as en mano.",
          "Preflop, manos fuertes están coordinadas: aces double-suited con reyes y damas, wraps broadway y manos que flopean varios nut draws. Basura con cuatro bajas pierde rápido en botes multiway.",
          "Postflop, cuenta outs y respeta geometría del bote. Con cuatro o cinco oponentes en flop, top pair kicker débil rara vez basta. Meta: draw al nut o fold cuando dominado.",
        ],
        bullets: [
            "Exactamente dos de cinco hole cards + tres del board",
            "Pot-limit: raise máx. = bote incluyendo call",
            "Aces double-suited coordinados son premium preflop",
            "Botes multiway castigan one-pair sin redraw",
        ]
      },
      {
        heading: "Encontrar mesas PLO5 en PPPoker y Grand Club",
        paragraphs: [
          "Abre Grand Club (1074072) desde inicio y toca Cash Games. Filtro de tipo → PLO u Omaha — PLO5 suele listarse aparte de PLO4. Filtros de stake aceptan 1/2 o 0.5/1.",
          "Si no hay PLO5 corriendo, revisa horas pico de unión: noches europeas, madrugada CEI y prime time asiático spawnan salas nuevas. Únete a waiting list en mesa llena.",
          "Agenda MTT ocasionalmente incluye PLO5 en pestaña MTT. Filtro Omaha o anuncios Grand con torneos PLO5 destacados.",
        ]
      },
      {
        heading: "Consejos preflop y postflop para nuevos jugadores PLO5",
        paragraphs: [
          "Juega tight en EP y más wide en botón. PLO5 premia manos con varios draws fuertes — aces pelados con side cards bajos son trampas multiway.",
          "En flop, prioriza nut potential. Wrap straights, flush draws nut y combo draws generan beneficio. Fold second-nut flush en boards paired suele ser correcto.",
          "Evita inflar botes con draws dominados. Flush draw non-nut contra pot-sized raise de dos oponentes — reverse implied odds duelen en segunda mejor mano.",
        ],
        bullets: [
            "Tight EP, wider BTN — posición importa más que NLH",
            "Nut potential en flop supera pares altos pelados multiway",
            "Fold draws dominados bajo presión de varios jugadores",
            "Hand history en perfil para revisar botes grandes",
        ]
      },
      {
        heading: "Bankroll y rakeback en Grand",
        paragraphs: [
          "Varianza PLO5 es mayor que NLH al mismo stake. Regla común: tres a cinco veces la profundidad de buy-in NLH — si 1/2 NLH con 200 BB, considera 400–600 BB para PLO5.",
          "Grand Club devuelve 60% rakeback en contributed rake a 1 ficha = 1 $. PLO5 genera más rake por mano que NLH comparable — rakeback forma mayor parte del EV.",
          "Fondea vía @grandppuzbot y mantén @Grand_Poker_Reception para dudas de stake. Aplica con Club ID 1074072 y Referral ID antes de primera sesión PLO5.",
        ]
      }
    ],
    faq: [
      {
        q: "¿Cuál es la diferencia entre PLO4 y PLO5?",
        a: "PLO5 reparte cinco hole cards en lugar de cuatro. Sigues usando exactamente dos con tres del board, pero botes y varianza suelen ser mayores.",
      },
      {
        q: "¿Dónde encuentro PLO5 en Grand Club?",
        a: "Club ID 1074072 → Cash Games → filtro PLO/Omaha. Mesas PLO5 listadas aparte de PLO4 en el lobby.",
      },
      {
        q: "¿Cuánto bankroll necesito para PLO5?",
        a: "La mayoría usa tres a cinco veces la profundidad de buy-in NLH al mismo stake por la varianza mayor.",
      },
      {
        q: "¿El rake PLO5 califica para 60% rakeback?",
        a: "Sí. Todo contributed rake en Grand Club cuenta en el rakeback semanal del 60% vía @grandppuzbot.",
      }
    ],
  },
  "grand-payout-guarantee": {
    intro:
      "La confianza en un club PPPoker empieza por si tus fichas cobran a la tasa prometida. Grand Club garantiza liquidación a 1 ficha = 1 $ mediante una sola caja Telegram verificada — @grandppuzbot — con respaldo humano en @Grand_Poker_Reception. Esta guía explica qué cubre la garantía, cómo protegemos bankrolls y el proceso paso a paso del depósito al rakeback semanal.",
    sections: [
      {
        heading: "Qué cubre la garantía de pago Grand",
        paragraphs: [
          "La garantía tiene tres partes: tasa fija de fichas, canal único de caja oficial y liquidación programada de rakeback con retiros. Cada ficha vía @grandppuzbot convierte a 1 ficha = 1 $ en moneda local — PHP vía GCash, BRL vía Pix, RUB vía SBP y otros rails en el bot.",
          "Grand no opera cajas paralelas en chats privados o cuentas alternativas. Ofertas de mejor tasa fuera de @grandppuzbot no son Grand Club ni están cubiertas.",
          "60% rakeback en contributed rake cae en el mismo ciclo semanal de retiros solicitados — sin negociación manual para miembros estándar.",
        ]
      },
      {
        heading: "Cómo protegemos tu bankroll",
        paragraphs: [
          "Fondos de jugadores segregados de cuentas operativas del club en el chip ledger. Depósito acredita saldo en Club ID 1074072; retiro debita solo tras confirmar identidad y destino en el flujo del bot.",
          "Grand monitorea chip dumping, colusión y volumen artificial. Reglas protegen jugadores legítimos — tu bankroll no subsidia esquemas de fraude.",
          "Primer o gran retiro puede pasar revisión manual breve en @Grand_Poker_Reception — datos GCash, Pix, SBP o banco deben coincidir con el nombre de cuenta.",
        ],
        bullets: [
            "Caja oficial única: solo @grandppuzbot",
            "Tasa fija 1 ficha = 1 $ en depósito y retiro",
            "Reglas anti-fraude protegen solvency para jugadores honestos",
            "Revisión manual solo para verificación — no retrasos indefinidos",
        ]
      },
      {
        heading: "Proceso de liquidación paso a paso",
        paragraphs: [
          "Paso 1: aplica a Grand Club con Club ID 1074072 y Referral ID en PPPoker. Espera aprobación — fichas no acreditan en solicitud pendiente.",
          "Paso 2: abre @grandppuzbot, selecciona región y rail, sigue monto y referencia exactos. No redondees — referencia incorrecta retrasa conciliación.",
          "Paso 3: fichas aparecen tras confirmación. Contributed rake acumula hacia 60% rakeback. Paso 4: solicita retiro o liquidación de rakeback en el mismo bot — ciclo semanal junto con cashout.",
        ]
      },
      {
        heading: "Retiros, plazos y verificación",
        paragraphs: [
          "Mayoría de rails locales — Pix, GCash, SBP — confirman en minutos a pocas horas en horario de caja. Transferencias bancarias genéricas pueden tardar más.",
          "Retiros debitan saldo in-app primero. Pedido sobre saldo es rechazado. Rakeback acredita al mismo saldo antes del retiro o por separado en calendario.",
          "Mantén username Telegram estable y responde si @Grand_Poker_Reception pide captura única — raro tras primer retiro exitoso.",
        ]
      },
      {
        heading: "Qué hacer si algo sale mal",
        paragraphs: [
          "Si depósito no acredita a tiempo, verifica estado en @grandppuzbot antes de duplicar transferencia.",
          "Para retiro atascado, rakeback faltante o impersonator, contacta @Grand_Poker_Reception con PPPoker ID, comprobante y hora. No envíes dinero fuera del flujo oficial del bot.",
          "Grand resuelve disputas contra ledger y registros bancarios — no promesas de agentes no oficiales. Esencia de la garantía: una tasa, una caja, liquidación documentada.",
        ],
        bullets: [
            "Nunca envíes fondos fuera de instrucciones mostradas en @grandppuzbot",
            "Disputas — @Grand_Poker_Reception con ID + comprobante",
            "No dupliques depósitos sin confirmación de caja",
            "Reporta impersonators — no cubiertos por la garantía",
        ]
      }
    ],
    faq: [
      {
        q: "¿Qué tasa de fichas garantiza Grand?",
        a: "1 ficha = 1 $ equivalente en depósito y retiro vía @grandppuzbot, sin spread oculto.",
      },
      {
        q: "¿Qué tan rápidos son los retiros?",
        a: "Mayoría de rails locales confirman en minutos a pocas horas. Primer o gran retiro puede necesitar revisión breve.",
      },
      {
        q: "¿El rakeback está en la garantía?",
        a: "Sí. 60% rakeback en contributed rake liquida semanalmente por la misma caja oficial.",
      },
      {
        q: "¿A quién contacto por problemas de pago?",
        a: "Mensaje @Grand_Poker_Reception con PPPoker ID y comprobante. Usa solo @grandppuzbot para depósitos y retiros.",
      }
    ],
  },
  "rakeback-comparison": {
    intro:
      "El rakeback es la principal diferencia económica entre clubes PPPoker — dos clubes en los mismos stakes pueden costarte cientos de dólares al mes de diferencia. Grand Club publica 60% rakeback en contributed rake a 1 ficha = 1 $ con programa de referidos del 30%. Esta guía compara esa estructura con ofertas típicas y qué verificar antes de depositar en otro sitio.",
    sections: [
      {
        heading: "Por qué importa la matemática del rakeback en clubes",
        paragraphs: [
          "Cada bote con rake reduce tu win rate. En clubes la parte de la casa suele ser mayor en porcentaje que en sitios regulados — el rakeback es reembolso directo de volumen, no bono cosmético.",
          "Contributed rake — método Grand — devuelve parte del rake que tú pusiste en los botes. Algunos clubes anuncian dealt rake o tiers VIP que en papel parecen mayores pero pagan menos al jugador medio.",
          "Compara ofertas en dólares mensuales, no porcentajes de titular. $500 de contributed rake al mes — $300 de vuelta al 60% Grand versus $200 al 40%.",
        ]
      },
      {
        heading: "Estructura Grand Club: 60% rakeback explicado",
        paragraphs: [
          "Grand devuelve 60% de tu contributed rake semanalmente vía @grandppuzbot, junto con retiros si solicitas ambos en el mismo ciclo. La tasa aplica a cash y torneos bajo Club ID 1074072.",
          "Sin tier ladder — miembros nuevos y regulares reciben el mismo porcentaje publicado. Ingreso por referidos aparte: 30% del rake de jugadores con tu Referral ID, además de su 60%.",
          "Compra y venta de fichas a 1 ficha = 1 $ por caja oficial. Rakeback calculado sobre rake, no volumen de depósito.",
        ],
        bullets: [
            "60% en contributed rake — tasa publicada sin cap oculto",
            "Liquidación semanal vía @grandppuzbot",
            "30% referidos en rake referido",
            "1 ficha = 1 $ — sin spread buy-in/cashout",
        ]
      },
      {
        heading: "Ofertas comunes de otros clubes y topes ocultos",
        paragraphs: [
          "Muchos clubes anuncian 70–80% rakeback pero limitan pagos semanales, excluyen fees MTT o resetean tasa si baja volumen. Titular sin historial de liquidación es marketing.",
          "Algunos agentes cotizan tasas distintas depósito vs retiro — comprar a 0.95 y retirar a 0.90 grava tu bankroll aunque el rakeback parezca alto. Grand usa tasa única.",
          "Rakeback retrasado es red flag. Clubes que pagan cada dos semanas por chats no oficiales crean float. Ciclo semanal Grand por un bot es auditable.",
        ]
      },
      {
        heading: "Qué verificar antes de cambiar de club",
        paragraphs: [
          "Pide fórmula de rakeback por escrito: contributed, dealt o híbrido. ¿Cuenta rake de torneos? ¿Hay máximo semanal?",
          "Verifica la caja: un bot Telegram o varias cuentas personales. Grand usa solo @grandppuzbot y @Grand_Poker_Reception.",
          "Ciclo de prueba: depósito, sesión, rakeback y retiro parcial. Si exige canales no oficiales, compara con el proceso publicado de Grand.",
        ]
      },
      {
        heading: "Stacking de referidos y valor a largo plazo en Grand",
        paragraphs: [
          "Quien invita amigos gana 30% del rake referido mientras invitados mantienen 60% en su volumen. Para líder de comunidad puede superar club con rakeback flat alto.",
          "Valor a largo plazo depende de tráfico de unión y fiabilidad de pago. Unión internacional Grand y garantía 1 ficha = 1 $ significan rakeback que puedes retirar.",
          "Aplica con Club ID 1074072 y Referral ID correcto antes de la primera mano — rake no se mueve retroactivamente.",
        ],
        bullets: [
            "Referido 30% + miembro 60% — reparto transparente",
            "Liquidez de unión + caja fiable",
            "Referral ID incorrecto pierde crédito histórico de rake",
            "Compara economía total, no solo headline rakeback",
        ]
      }
    ],
    faq: [
      {
        q: "¿Qué tasa de rakeback ofrece Grand Club?",
        a: "60% en contributed rake, liquidado semanalmente vía @grandppuzbot en Club ID 1074072.",
      },
      {
        q: "¿En qué difiere Grand de clubes con 80% rakeback?",
        a: "Muchas tasas altas anunciadas tienen topes y retrasos. Grand publica 60% sin tier games a 1 ficha = 1 $.",
      },
      {
        q: "¿Cuenta el rake de torneos para rakeback?",
        a: "Sí. Rake generado bajo Grand Club ID 1074072 cuenta para liquidación semanal del 60%.",
      },
      {
        q: "¿Puedo ganar rakeback por referidos además del mío?",
        a: "Sí. 60% en tu rake y 30% del rake de jugadores con tu Referral ID.",
      }
    ],
  },
  "hud-in-pppoker": {
    intro:
      "Las estadísticas ayudan en clubes, pero PPPoker maneja datos HUD distinto a sitios desktop. La app incluye historial integrado y overlays VIP opcionales, mientras trackers externos enfrentan límites. Esta guía explica qué hay en PPPoker, cómo Grand Club (ID 1074072) trata stat tools en mesa y uso responsable.",
    sections: [
      {
        heading: "Qué es un HUD y por qué lo usan",
        paragraphs: [
          "HUD — heads-up display — muestra stats de oponentes: VPIP, PFR, agresión, fold-to-cbet junto al avatar. Regulars clasifican desconocidos rápido.",
          "En clientes tradicionales, software tercero lee hand histories del disco. PPPoker es mobile-first y de clubes — análisis en app o post-sesión.",
          "Stats no reemplazan lectura de board y sizing. En micro stakes Grand, samples pequeños — trata números como pistas.",
        ]
      },
      {
        heading: "Stats integradas en PPPoker",
        paragraphs: [
          "PPPoker guarda hand history en perfil. Perfil → Hand History para revisar botes, replay calles y tu VPIP. Filtros por club, stakes y NLH/PLO.",
          "En mesa, toca avatar del oponente para session stats limitadas — manos juntos, showdowns. No base HM/PT completa, suficiente por sesión.",
          "Replay recorre botes grandes frame a frame. Regulars Grand revisan spots post-sesión en vez de trackers externos en vivo.",
        ]
      },
      {
        heading: "Trackers externos y política del club",
        paragraphs: [
          "PPPoker no soporta overlays HUD terceros como clientes desktop 2010. Scraping e inyecciones arriesgan avisos y violan fair-play.",
          "Grand Club sigue estándares de unión: juega en app oficial sin asistentes no autorizados. Chip dumping, botting y solvers realtime prohibidos.",
          "Export manual para HM off-table es estudio personal — no overlay live. No compartas stat feeds realtime con jugadores en tu mesa.",
        ],
        bullets: [
            "Sin overlay HUD live tercero autorizado en PPPoker",
            "Hand history y replay en perfil para post-sesión",
            "Asistentes realtime y bots prohibidos en Grand Club",
            "Estudio offline — uso personal, no overlay en mesa",
        ]
      },
      {
        heading: "Tarjeta VIP y funciones avanzadas de stats",
        paragraphs: [
          "PPPoker vende VIP con diamonds — cosméticos y stat cards enhanced. VIP card muestra stats lifetime más ricos y notes expandidas si el club habilita.",
          "VIP no evade fair-play — añade profundidad a stats que PPPoker ya recoge. Tienda in-app para tiers actuales.",
          "Miembros Grand ganan 60% rakeback independiente de VIP. VIP es gasto personal; fichas vía @grandppuzbot a 1 ficha = 1 $ separado de diamonds.",
        ]
      },
      {
        heading: "Usar stats responsablemente en mesas Grand",
        paragraphs: [
          "Enfoca sizing y posición primero; stats con 50–100 manos del oponente al mismo stake. Samples pequeños exageran swings.",
          "Contacta @Grand_Poker_Reception si sospechas herramientas realtime prohibidas — PPPoker ID y mesa.",
          "Aplica con Club ID 1074072 y Referral ID para volumen en rakeback. 60% semanal vía @grandppuzbot.",
        ],
        bullets: [
            "Espera sample meaningful antes de exploits grandes",
            "Reporta bots y tools prohibidas en @Grand_Poker_Reception",
            "Stats VIP complementan — no reemplazan lectura de manos",
            "60% rakeback con o sin VIP",
        ]
      }
    ],
    faq: [
      {
        q: "¿Puedo usar PokerTracker o HM live en PPPoker?",
        a: "Overlay HUD live tercero no soportado. Hand history in-app y replay o estudio offline.",
      },
      {
        q: "¿Qué stats muestra PPPoker en mesa?",
        a: "Toca avatar del oponente para session stats. Historial completo en Perfil → Hand History.",
      },
      {
        q: "¿Qué añade la tarjeta VIP?",
        a: "Stats de perfil más ricos y notes opcionales vía paquetes VIP con diamonds.",
      },
      {
        q: "¿Grand Club permite solvers realtime o bots?",
        a: "No. Asistentes realtime, bots y overlays no autorizados violan fair-play. Report en @Grand_Poker_Reception.",
      }
    ],
  },
  "first-session-checklist": {
    intro:
      "Tu primera sesión PPPoker en Grand Club debe ser fluida. Este checklist te guía desde descargar la app hasta la primera mano en Club ID 1074072 — registro, aprobación del club, depósito de prueba vía @grandppuzbot y etiqueta básica en mesa. Síguelo en orden para evitar los errores más comunes del primer día que retrasan rakeback o crédito de fichas.",
    sections: [
      {
        heading: "Descargar e instalar PPPoker",
        paragraphs: [
          "PPPoker funciona en iOS, Android y Windows. Descarga solo desde App Store oficial, Google Play o web verificada de PPPoker — APKs de terceros a veces incluyen builds obsoletos o clientes modificados que los clubes no soportan.",
          "Tras instalar, permite notificaciones para alertas de mesa y mensajes del club. El cliente Windows es opcional pero útil para multi-mesa después. Elige un username estable; renombrar seguido confunde agentes y seguimiento de referidos.",
          "Actualiza la app antes de la primera sesión. Las mesas Grand Club usan software actual de la unión, y builds antiguos a veces no cargan nuevos lobbies MTT.",
        ]
      },
      {
        heading: "Registrar tu cuenta PPPoker",
        paragraphs: [
          "Abre PPPoker y completa el registro con teléfono o email válido. Usa contraseña fuerte y activa la seguridad disponible. Tu PPPoker ID es permanente — anótalo antes de aplicar a clubes.",
          "Configura el idioma en Ajustes si prefieres ruso, español, portugués, uzbeko o filipino. El idioma no afecta la liquidación de fichas; Grand mantiene 1 ficha = 1 $.",
          "No juegues manos reales en un club público aleatorio antes de unirte a Grand. El rake fuera de Club ID 1074072 no cuenta para tu rakeback Grand. Termina el registro y luego aplica al club correcto.",
        ]
      },
      {
        heading: "Unirte a Grand Club con los IDs correctos",
        paragraphs: [
          "En PPPoker, toca buscar e ingresa Club ID 1074072. Envía la solicitud con el Referral ID de tu agente o enlace de invitación. La aprobación suele ser rápida en horario de caja; solicitudes pendientes se pueden acelerar vía @Grand_Poker_Reception en Telegram.",
          "Espera aprobación antes de depositar. Fichas a cuenta no vinculada o club equivocado requieren reconciliación manual y pueden retrasar horas. Captura pantalla de membresía aprobada.",
          "Dentro del club, explora el lobby: Cash Games, MTT, SNG y mesas privadas separadas. Filtra por stake y tipo de juego — Grand corre NLH, PLO, PLO5 y torneos en tráfico de la unión.",
        ],
        bullets: [
            "Club ID: 1074072 — verifica dígitos antes de enviar",
            "Referral ID obligatorio — pide al invitador o @Grand_Poker_Reception",
            "Espera aprobación antes de fondear",
            "Confirma nombre Grand Club en pantalla principal del club",
        ]
      },
      {
        heading: "Primer depósito por caja Grand",
        paragraphs: [
          "Grand procesa depósitos y retiros vía @grandppuzbot en Telegram. Abre el bot, elige método (USDT, GCash, Humo, Uzcard y otras opciones regionales) y sigue el monto a 1 ficha = 1 $. Las fichas acreditan tras confirmar la transferencia.",
          "En la primera carga, envía un depósito de prueba pequeño — suficiente para uno o dos buy-ins en tu stake. Confirma fichas en la billetera PPPoker dentro de Club ID 1074072, luego opcionalmente un retiro de prueba antes de la carga completa.",
          "Mantén Telegram abierto durante la transferencia. El bot envía confirmaciones; @Grand_Poker_Reception gestiona pagos atascados, red USDT incorrecta o discrepancia de nombre en rails locales.",
        ],
        bullets: [
            "Solo caja oficial: @grandppuzbot — sin vendedores terceros",
            "Tipo fijo Grand: 1 ficha = 1 $",
            "Depósito de prueba y un retiro antes de carga grande",
            "Soporte: @Grand_Poker_Reception para pagos",
        ]
      },
      {
        heading: "Etiqueta en la primera mano y hábitos de sesión",
        paragraphs: [
          "Haz buy-in por monto cómodo en stake acorde a tu bankroll — típicamente 50–100 big blinds en cash o el mínimo listado en MTT. Usa pre-action con responsabilidad; retraso intencional se marca en revisiones del club.",
          "El chat en mesa debe ser respetuoso. Disputas de manos van a revisión de hand history, no insultos públicos. Grand aplica reglas estándar de la unión contra colusión, chip dumping y multi-cuentas.",
          "Al terminar, anota duración y resultado. Rakeback del 60% se paga semanalmente por la misma caja @grandppuzbot junto con retiros. La primera semana establece la base de rake para rebates continuos.",
        ]
      }
    ],
    faq: [
      {
        q: "¿Qué Club ID ingreso para Grand?",
        a: "Ingresa 1074072 en la búsqueda de clubes PPPoker e incluye tu Referral ID en la solicitud.",
      },
      {
        q: "¿Cómo deposito antes de la primera mano?",
        a: "Usa @grandppuzbot en Telegram tras aprobación del club. Liquidación a 1 ficha = 1 $.",
      },
      {
        q: "¿Puedo jugar con solicitud pendiente?",
        a: "Puedes abrir la app, pero fondea y juega solo tras aprobación en Club ID 1074072.",
      },
      {
        q: "¿Quién ayuda si no acredita el depósito?",
        a: "Escribe a @Grand_Poker_Reception con PPPoker ID, comprobante y monto enviado.",
      }
    ],
  },
  "rake-structure-explained": {
    intro:
      "El rake es la comisión que los clubes cobran de botes o inscripciones de torneos. En el póker de clubes PPPoker no hay cargo horario aparte — el rake está en cada mano o buy-in. Entender porcentaje, tope y si el club usa contributed o dealt rake ayuda a estimar costos y verificar que el 60% rakeback de Grand Club en ID 1074072 coincide con lo que realmente generas.",
    sections: [
      {
        heading: "Qué es el rake en póker de clubes PPPoker",
        paragraphs: [
          "En cash, la casa toma una porción de cada bote que alcanza un umbral — usualmente tras el flop o cuando la acción pasa del preflop. El rake de torneos está en el buy-in: 10+1 significa 10 fichas al prize pool y 1 de rake.",
          "Los clubes no fijan rake aislados. Operan en uniones con cronogramas publicados para NLH, PLO y MTT. Grand Club pasa el rake estándar de la unión y devuelve 60% de tu contributed rake semanalmente vía @grandppuzbot a 1 ficha = 1 $.",
          "Rake no es propina ni jackpot. Algunas mesas añaden aporte bad-beat jackpot sobre el rake base. Tu estado de rakeback debe separar rake base de cuotas de jackpot.",
        ]
      },
      {
        heading: "Porcentaje y tope explicados",
        paragraphs: [
          "El porcentaje de rake indica qué fracción del bote retiene el club. NLH común: 5% del bote con tope de 3–5 BB en micro y low, topes mayores en mid. El tope evita rake ilimitado en botes enormes.",
          "Ejemplo: en 1/2 con 5% y tope 3 BB, bote de 40 fichas genera 2 de rake, pero bote de 200 solo 6 (tope 3 BB), no 10.",
          "Rake MTT es cuota fija por entrada — por ejemplo 10% del buy-in en 100+10. SNG y spin tienen cronogramas propios en el lobby antes de registrarte.",
        ],
        bullets: [
            "Rake cash = porcentaje del bote, limitado por tope por mano",
            "Tope usualmente en big blinds, no en fichas",
            "Rake MTT = cuota fija sumada al buy-in anunciado",
            "Icono info de mesa muestra cronograma exacto en tu stake",
        ]
      },
      {
        heading: "Contributed rake vs dealt rake",
        paragraphs: [
          "Contributed rake cuenta solo el rake atribuido al dinero que pusiste en el bote. Si foldaste preflop antes de contribuir, puedes generar cero contributed rake en esa mano.",
          "Dealt rake divide el rake total de la mesa igual entre todos los repartidos, aunque foldaran preflop. Jugadores tight inflan volumen aparente.",
          "Grand Club calcula rakeback en contributed rake — estándar justo de la industria. Tu 60% refleja rake de botes que realmente financiaste.",
        ]
      },
      {
        heading: "Ejemplos en stakes Grand Club",
        paragraphs: [
          "Cash: juegas 1/2 NLH y contribuyes a bote de 50 fichas con 2.5 de rake. Tu parte contributed puede ser 1.5 si pusiste 30 de 50. Rakeback 60% devuelve 0.9 ficha en la mano — poco por mano, relevante en cientos.",
          "MTT: entrada en 50+5 (5 fichas de rake). Contributed rake del evento es 5. Rakeback 60% acredita 3 fichas en la semana, independiente del cash.",
          "Sesión en cuatro mesas dos horas, 40 fichas contributed rake — Grand devuelve 24 vía @grandppuzbot. Compara con resumen in-app; divergencias — @Grand_Poker_Reception.",
        ],
        bullets: [
            "Bote 1/2, rake 2.5, 60% de vuelta → hasta 1.5 ficha en tu parte",
            "MTT 50+5 → 3 fichas rakeback al 60% sin importar el puesto",
            "Liquidación semanal combina cash y MTT contributed rake",
            "Cifras a 1 ficha = 1 $ en Grand",
        ]
      },
      {
        heading: "Cómo el rake conecta rakeback y referidos Grand",
        paragraphs: [
          "Cada ficha de contributed rake en Club ID 1074072 alimenta dos programas: tu rakeback personal del 60% y, si referiste al jugador, 30% del referidor. Mismo ledger de rake — sin doble conteo.",
          "Rakeback liquida semanalmente vía @grandppuzbot con retiros. El bot lista rake bruto, tasa y crédito neto. Ingresos de referidos de agentes en el mismo ciclo.",
          "Matemática transparente de rake es por eso Grand publica estas guías. Compara rakeback semanal con contributed rake en la app.",
        ]
      }
    ],
    faq: [
      {
        q: "¿Grand usa contributed o dealt rake?",
        a: "Contributed rake. Tu 60% se basa en rake de botes que financiaste.",
      },
      {
        q: "¿El rake MTT entra en rakeback?",
        a: "Sí. Cuotas de torneos en Club ID 1074072 cuentan para contributed rake y 60% rakeback semanal.",
      },
      {
        q: "¿Dónde veo totales de rake?",
        a: "Estadísticas del club en PPPoker y estado semanal de @grandppuzbot. Divergencias — @Grand_Poker_Reception.",
      },
      {
        q: "¿Qué valor de ficha en rakeback?",
        a: "Grand liquida rakeback a 1 ficha = 1 $ por caja oficial.",
      }
    ],
  },
  "mtt-strategy-grand": {
    intro:
      "Los torneos multi-mesa en Grand Club combinan campos de la unión con rakeback del club y liquidación confiable a 1 ficha = 1 $. Esta guía cubre el calendario de torneos Grand, estrategia por etapas y reglas de bankroll en Club ID 1074072.",
    sections: [
      {
        heading: "Calendario y formatos MTT en Grand Club",
        paragraphs: [
          "Grand Club publica MTTs en el lobby de torneos PPPoker bajo Club ID 1074072. Espera freezeouts diarios, rebuys, PKO bounties y series con garantías altas de la unión. Horarios en UTC — convierte a tu zona local.",
          "Buy-in listado como prize pool más rake — 20+2 significa 20 fichas al pool y 2 de rake. Tu 60% rakeback aplica a la parte de rake, liquidado semanalmente vía @grandppuzbot.",
          "Los fines de semana traen mayores garantías y campos. Los dailies entre semana sirven para campos más pequeños. Revisa el tablón del club y @Grand_Poker_Reception para series estacionales y satélites.",
        ],
        bullets: [
            "MTTs diarios más eventos de fin de semana con altas garantías",
            "Buy-in = premio + rake — rake califica para 60% rakeback",
            "PKO, rebuy y turbo rotan en el calendario semanal",
            "Actualizaciones de calendario en avisos y @Grand_Poker_Reception",
        ]
      },
      {
        heading: "Estrategia en etapas temprana, media y tardía",
        paragraphs: [
          "Etapa temprana: juega tight relativo a la profundidad del stack. Stacks profundos permiten manos especulativas, pero flips innecesarios reducen equity antes de que suban los antes. Enfócate en posición y dominar aperturas débiles.",
          "Etapa media: antes y blinds fuerzan acción. Abre más wide en posición tardía, defiende blinds selectivamente y busca reshoves contra stacks cortos. Compara tu stack con el promedio.",
          "Etapa tardía y mesa final: domina la presión ICM. Stacks cortos shovean más wide; grandes aplican presión sin riesgo de eliminación. Los pay jumps importan — fold puede ser correcto.",
        ]
      },
      {
        heading: "Gestión de bankroll para MTTs",
        paragraphs: [
          "La varianza de torneos es mayor que en cash. Regla común: 100 buy-ins en el stake regular — para 20+2, mantén 2.200 fichas a 1 ficha = 1 $. Baja de nivel tras downswing.",
          "Satélites y step tournaments extienden bankroll con asientos en eventos mayores. Los lobbies de la unión listan satélites baratos hacia majors nocturnos.",
          "Separa roll de MTT del cash. Rastrea entradas, cashes y rake; el estado semanal @grandppuzbot compensa cuotas con el tiempo.",
        ],
        bullets: [
            "Meta: 100 buy-ins en stake MTT regular (1 ficha = 1 $)",
            "Baja de nivel tras pérdidas sostenidas",
            "Usa satélites para entrar en eventos mayores",
            "Mantén bankrolls MTT y cash separados",
        ]
      },
      {
        heading: "Selección de torneos y multi-mesa MTT",
        paragraphs: [
          "En un MTT no eliges oponentes, pero sí eventos. Campos más soft en dailies pequeños; regulares más fuertes en majors dominicales. Empieza donde tu edge es mayor.",
          "Multi-mesa MTT es posible en Windows con disciplina. Dos a cuatro mesas es techo práctico para la mayoría. Desactiva animaciones extra, usa presets de apuesta.",
          "Cuando la mesa se rompe, anota nuevos asientos y stacks. MTTs de la unión reasientan jugadores — ajusta rangos de apertura.",
        ]
      },
      {
        heading: "Ventajas Grand Club para jugadores de torneos",
        paragraphs: [
          "Grand devuelve 60% del rake MTT vía contributed rake — reduce costo efectivo de buy-in en volumen. Diez eventos 20+2 por semana: 20 fichas rake, 12 de vuelta en liquidación.",
          "Liquidación 1 ficha = 1 $ vía @grandppuzbot — premios en lobby mapean a dinero real. Retiros por la misma caja con @Grand_Poker_Reception.",
          "Liquidez de la unión trae campos internacionales sin salir de Club ID 1074072 con rakeback Grand y caja Telegram única.",
        ]
      }
    ],
    faq: [
      {
        q: "¿Dónde encuentro MTTs de Grand Club?",
        a: "Abre Club ID 1074072 en PPPoker y toca la pestaña MTT en el lobby del club.",
      },
      {
        q: "¿El rake MTT cuenta para 60% rakeback?",
        a: "Sí. Cuotas de torneos son contributed rake y rebate semanal vía @grandppuzbot.",
      },
      {
        q: "¿Cuántos buy-ins mantener para MTTs?",
        a: "La mayoría usa al menos 100 buy-ins en stake regular, a 1 ficha = 1 $.",
      },
      {
        q: "¿Puedo jugar MTTs en móvil?",
        a: "Sí en iOS y Android. Windows es mejor para varios MTTs a la vez.",
      }
    ],
  },
  "pppoker-vs-pokerbros-vs-clubgg": {
    intro:
      "PPPoker, PokerBros y ClubGG son las tres apps dominantes de póker de clubes en 2026, cada una con millones de instalaciones y ecosistemas distintos. La elección depende de calidad de app, liquidez de unión, confiabilidad de agentes y vías de pago. Esta comparación explica dónde encaja cada plataforma y por qué Grand Club en PPPoker (ID 1074072) sigue siendo fuerte con 60% rakeback, 30% referidos y liquidación a 1 ficha = 1 $.",
    sections: [
      {
        heading: "Experiencia de app y funciones de plataforma",
        paragraphs: [
          "PPPoker ofrece clientes maduros iOS, Android y Windows con amplio soporte de idiomas, historial in-app y largo historial en Asia y CEI. Multi-mesa y herramientas de club están pulidas.",
          "PokerBros apunta a modelo de clubes similar con UI y red de uniones propias. Algunas regiones tienen comunidades locales fuertes, pero actualizaciones y disponibilidad varían.",
          "ClubGG llegó después con interfaz más ligera y marketing agresivo en mercados selectos. Backend separado de PPPoker — fichas y rakeback Grand no transfieren.",
        ]
      },
      {
        heading: "Uniones, liquidez y selección de juegos",
        paragraphs: [
          "La liquidez viene de uniones — grupos de clubes que comparten mesas. Las uniones PPPoker siguen entre las más grandes globalmente: NLH, PLO, PLO5, MTT y OFC 24 horas.",
          "Uniones PokerBros son sustanciales en Latinoamérica y partes de Asia, pero difieren en stakes y horas pico. Uniones ClubGG crecen, pero son menores en muchos mercados.",
          "Grand Club está en unión internacional PPPoker — acceso a tráfico global sin salir de Club ID 1074072.",
        ],
        bullets: [
            "PPPoker: mayor red de uniones, selección más amplia de formatos",
            "PokerBros: fuerte en regiones selectas, pools separados",
            "ClubGG: creciendo, pero menor liquidez en muchos mercados",
            "Grand Club en PPPoker comparte tráfico internacional de la unión",
        ]
      },
      {
        heading: "Modelo de agente y economía del club",
        paragraphs: [
          "Las tres apps usan agentes para onboarding, mover fichas y liquidar rakeback. La capa de agente es obligatoria — reemplaza cajas licenciadas tradicionales.",
          "La economía difiere por club, no solo por app. Grand Club publica 60% rakeback en contributed rake, 30% referidos y 1 ficha = 1 $ vía @grandppuzbot.",
          "Cambiar de app significa nuevos Club IDs, nuevos enlaces y reconstruir confianza en la caja. Evalúa el club y equipo de agentes específicos.",
        ]
      },
      {
        heading: "Pagos, rakeback y protección del jugador",
        paragraphs: [
          "Grand procesa depósitos y retiros vía @grandppuzbot con USDT, GCash, Humo, Uzcard y otros a 1 ficha = 1 $. @Grand_Poker_Reception gestiona disputas.",
          "Clubes PokerBros y ClubGG usan bots Telegram propios con tiempos de respuesta variables. Antes de unirte, completa ciclo de depósito y retiro de prueba.",
          "La transparencia de rakeback es el mejor filtro. Clubes que explican contributed rake y estados semanales — como Grand — retienen jugadores.",
        ],
        bullets: [
            "Grand: caja @grandppuzbot, 60% rakeback, 1 ficha = 1 $",
            "Depósito + retiro de prueba en cualquier club nuevo antes de escalar",
            "Compara metodología contributed rake, no porcentajes de titular",
            "Soporte humano @Grand_Poker_Reception para pagos",
        ]
      },
      {
        heading: "Qué plataforma elegir en 2026",
        paragraphs: [
          "Elige PPPoker con Grand Club para máxima liquidez de unión, clientes probados y rakeback publicado. Club ID 1074072 para jugadores serios.",
          "Considera PokerBros o ClubGG solo con club local confiable y pagos verificados si tu grupo ya juega allí.",
          "Puedes instalar varias apps, pero dividir bankroll aumenta riesgo. La mayoría de regulares elige un club transparente — para Grand, PPPoker y @grandppuzbot.",
        ]
      }
    ],
    faq: [
      {
        q: "¿Puedo usar fichas Grand en PokerBros o ClubGG?",
        a: "No. Cada app tiene ecosistema separado. Fichas y rakeback Grand solo en PPPoker Club ID 1074072.",
      },
      {
        q: "¿Qué app tiene más tráfico en 2026?",
        a: "PPPoker sigue liderando en liquidez global de uniones. Horas pico varían por región.",
      },
      {
        q: "¿Grand funciona solo en PPPoker?",
        a: "Sí. Grand Club es club PPPoker. Únete con ID 1074072 y fondea vía @grandppuzbot.",
      },
      {
        q: "¿Cómo verificar un club antes de cambiar de app?",
        a: "Depósito y retiro de prueba pequeños, confirma matemática de rakeback y tiempo de respuesta de @Grand_Poker_Reception.",
      }
    ],
  },
  "become-grand-agent": {
    intro:
      "Los agentes Grand Club reclutan jugadores, apoyan transferencias de fichas y ganan 30% del rake referido además del 60% rakeback de sus jugadores. El rol encaja con líderes de comunidad, streamers y regulares experimentados. Esta guía cubre requisitos, estructura de ingresos, jerarquía de referidos y solicitud vía @Grand_Poker_Reception.",
    sections: [
      {
        heading: "Qué hace un agente Grand Club",
        paragraphs: [
          "Los agentes incorporan nuevos jugadores en Club ID 1074072 con Referral IDs correctos, responden sobre stakes y formatos y escalan pagos a la caja oficial @grandppuzbot. Eres el primer contacto — no un cajero paralelo.",
          "Trabajo diario: enlaces de invitación, ayuda con idioma y filtros PPPoker, recordar liquidación 1 ficha = 1 $ por canales Grand. Agentes fuertes educan, no presionan volumen.",
          "Grand provee assets de marketing, blog multilingüe y respaldo Telegram. Agentes enfocan en confianza; operaciones Grand manejan reconciliación y rakeback semanal.",
        ]
      },
      {
        heading: "Requisitos para ser agente",
        paragraphs: [
          "Debes ser miembro aprobado de Grand Club con historial limpio — sin chip dumping, colusión o multi-cuentas. La mayoría ya refirió jugadores informalmente antes del tag oficial.",
          "Demuestra alcance: grupo Telegram, stream, foro o red estable. Grand prioriza referidos de calidad sobre registros spam.",
          "Agentes necesitan Telegram responsivo en horario de caja y conocimiento de economía del póker — rake, rakeback y matemática de referidos.",
        ],
        bullets: [
            "Miembro activo Grand Club en buen standing bajo ID 1074072",
            "Alcance demostrado — grupo, stream o red de jugadores",
            "Historial compliance limpio: sin dumping, colusión, multi-cuentas",
            "Presencia Telegram responsiva y conocimiento preciso de economía",
        ]
      },
      {
        heading: "Estructura de ingresos: 30% referido sobre rake referido",
        paragraphs: [
          "Grand paga agentes 30% del contributed rake de jugadores que entraron con su Referral ID. Separado del 60% rakeback del jugador — ambos del mismo ledger sin reducir el rebate.",
          "Ejemplo: jugador referido genera 100 fichas rake en la semana. Recibe 60 rakeback; tú recibes 30 de referido. Liquidación semanal vía @grandppuzbot.",
          "Ingresos escalan con volumen activo, no registros únicos. Pequeño grupo de regulares a menudo supera lista grande de cuentas inactivas.",
        ],
        bullets: [
            "30% del contributed rake referido — liquidación semanal",
            "Jugador mantiene 60% rakeback completo",
            "Pago vía @grandppuzbot en el mismo ciclo de rakeback",
            "Regulares activos superan listas inactivas",
        ]
      },
      {
        heading: "Jerarquía de referidos y seguimiento",
        paragraphs: [
          "Cada agente recibe Referral ID único ligado a Club ID 1074072. Jugadores deben ingresarlo al aplicar; rake antes del vínculo no acredita retroactivamente.",
          "Grand usa modelo plano — 30% en referidos directos. Sub-agentes, si se ofrecen, son asignados explícitamente por gestión Grand.",
          "Rastrea jugadores por reportes del club PPPoker y estados @grandppuzbot. Divergencias — @Grand_Poker_Reception con PPPoker IDs y fechas.",
        ]
      },
      {
        heading: "Cómo aplicar y empezar",
        paragraphs: [
          "Mensaje a @Grand_Poker_Reception en Telegram con PPPoker ID, descripción de comunidad o canal y jugadores activos esperados al mes. Incluye enlaces de grupos o streams.",
          "Tras aprobación, recibes Referral ID oficial y guías. Publica Club ID 1074072 con ese ID en todos los materiales.",
          "Empieza con círculo pequeño, verifica depósito y retiro vía @grandppuzbot juntos, luego expande.",
        ]
      }
    ],
    faq: [
      {
        q: "¿Cuánto ganan agentes Grand?",
        a: "30% del contributed rake de jugadores con tu Referral ID, liquidado semanalmente vía @grandppuzbot.",
      },
      {
        q: "¿El ingreso referido reduce rakeback del jugador?",
        a: "No. Jugadores mantienen 60% rakeback; tu 30% es línea separada.",
      },
      {
        q: "¿Cómo aplicar para agente?",
        a: "Contacta @Grand_Poker_Reception con PPPoker ID, detalles de comunidad y volumen esperado.",
      },
      {
        q: "¿Qué Club ID para referidos?",
        a: "Siempre Club ID 1074072 con tu Referral ID al unirse.",
      }
    ],
  },
  "sng-and-spins": {
    intro:
      "Los torneos sit-and-go y los jackpots Spin & Go están entre los formatos más rápidos del póker de clubes PPPoker. En Grand Club (Club ID 1074072), los SNG se llenan desde el lobby del club y la unión, mientras Spin & Go ofrece multiplicadores tipo lotería con buy-in fijo. Esta guía cubre formatos, stakes típicos, estrategia básica y cómo el 60% rakeback en cuotas de torneos reduce el costo a largo plazo con liquidación 1 ficha = 1 $ vía @grandppuzbot.",
    sections: [
      {
        heading: "Qué son SNG y Spin & Go en PPPoker",
        paragraphs: [
          "Un sit-and-go (SNG) empieza cuando se registra el número requerido de jugadores — normalmente seis, nueve o dieciocho plazas. No hay hora fija; el torneo arranca al llenarse la mesa. Los pagos siguen una estructura fija según el field; se juega hasta que un jugador tiene todas las fichas.",
          "Spin & Go es un SNG hyper-turbo de tres jugadores con multiplicador de premio aleatorio mostrado antes de la primera mano. Los buy-ins son fijos; el premio máximo puede ser muchas veces la entrada, aunque la mayoría paga el multiplicador mínimo. PPPoker ejecuta ambos formatos en lobbies de clubes junto a MTTs y cash.",
          "Grand Club lista SNG y Spin & Go en pestañas de torneos en Club ID 1074072. El tráfico de la unión añade volumen en horas pico en Rusia, Brasil, Uzbekistán, Filipinas y América Latina.",
        ]
      },
      {
        heading: "Formatos y stakes en Grand Club",
        paragraphs: [
          "Los SNG estándar en Grand incluyen NLH six-max y nine-max, con variantes PLO o turbo ocasionales. Los buy-ins van de micro stakes para principiantes a medios para regulares. Revisa la línea de fee en el lobby — buy-in más rake es lo que sale de tu saldo de fichas.",
          "Los buy-ins Spin & Go están escalonados: pools de multiplicador bajo, medio y alto con lobbies separados. La app muestra la ruleta de multiplicador antes de repartir. Spins de buy-in mayor ofrecen premios máximos mayores con el mismo perfil de alta varianza.",
          "Todas las fichas de torneo se liquidan en Grand a 1 ficha = 1 $. Depósitos y retiros vía @grandppuzbot; las ganancias acreditan en la billetera PPPoker dentro del club tras registrar el resultado.",
        ],
        bullets: [
            "SNG: 6-max y 9-max NLH más comunes en Club ID 1074072",
            "Spin & Go: 3-max hyper-turbo con multiplicadores aleatorios",
            "Revisa buy-in más fee en el lobby antes de registrarte",
            "Liquidación 1 ficha = 1 $ vía @grandppuzbot",
        ]
      },
      {
        heading: "Estrategia básica SNG: inicio, medio y bubble",
        paragraphs: [
          "Al inicio del SNG, juega más tight que en cash — la supervivencia importa porque solo pagan los dos o tres primeros. Open-raise manos premium y conectores suited en posición; evita manos offsuit marginales desde posiciones tempranas si la mesa es pasiva.",
          "En la fase media, la estrategia cambia con antes y stacks más pequeños respecto a ciegas. Roba desde posición tardía cuando todos hagan fold; defiende el big blind selectivamente contra opens amplios. Preservar stack es crítico en el tercio inferior de fichas.",
          "En el bubble — a una eliminación del dinero — aprieta mucho con stack medio y aplica presión como chip leader. Stacks cortos deben buscar spots de shove antes de que las ciegas consuman equity. Conciencia ICM separa jugadores break-even de ganadores.",
        ]
      },
      {
        heading: "Fundamentos Spin & Go y gestión de varianza",
        paragraphs: [
          "La estrategia Spin & Go se parece a hyper-turbo de tres jugadores: push/fold y matemática de stack corto dominan en minutos. Con stacks poco profundos, premium y ases suited son candidatos a shove-or-fold; slow play de manos fuertes a menudo desperdicia fold equity.",
          "La varianza es extrema. Incluso jugadores sólidos pasan por largas rachas de multiplicador mínimo. Sigue resultados en cientos de spins, no decenas. 2x o 3x es el resultado más común; trata multiplicadores altos como bonus, no expectativa.",
          "Usa hand history en la app para revisar spots críticos de shove. Grand aplica reglas estándar de la unión contra collusion — nunca chip-dump ni soft-play para ayudar amigos en Spin & Go.",
        ],
        bullets: [
            "Trata Spin & Go como alta varianza — planea downswings largos",
            "Revisa push/fold con effective stacks poco profundos",
            "La mayoría de spins paga multiplicador mínimo",
            "Sospecha de collusion — @Grand_Poker_Reception",
        ]
      },
      {
        heading: "Bankroll, rakeback y hábitos de sesión",
        paragraphs: [
          "Separa bankroll SNG y Spin del cash. Regla común: al menos 100 buy-ins para SNG estándar y 200 o más para Spin & Go por varianza de multiplicador. En Grand, valora cada buy-in a 1 ficha = 1 $.",
          "Las cuotas de torneo en Club ID 1074072 cuentan como contributed rake. Grand devuelve 60% semanalmente vía @grandppuzbot junto con retiros. Incluye rakeback en costo efectivo — SNG de 10 $ con 10% fee cuesta menos tras rebate.",
          "Define reglas de stop: número de juegos o límite de tiempo. Spin & Go especialmente tienta registro en ráfaga tras una pérdida. Escribe a @Grand_Poker_Reception si hay error de lobby o pago faltante.",
        ]
      }
    ],
    faq: [
      {
        q: "¿Dónde encuentro SNG y Spin & Go en Grand?",
        a: "Abre Club ID 1074072 en PPPoker y toca las pestañas SNG o Spin & Go en el lobby de torneos del club.",
      },
      {
        q: "¿El rake SNG cuenta para 60% rakeback?",
        a: "Sí. Cuotas de torneos en Grand Club son contributed rake y rebate semanal vía @grandppuzbot a 1 ficha = 1 $.",
      },
      {
        q: "¿Cuántos buy-ins mantener para Spin & Go?",
        a: "La mayoría usa al menos 200 buy-ins en su stake Spin por varianza de multiplicador.",
      },
      {
        q: "¿Quién ayuda con pago SNG faltante?",
        a: "Contacta @Grand_Poker_Reception con PPPoker ID, ID del torneo y hora de finalización.",
      }
    ],
  },
  "short-deck-guide": {
    intro:
      "Short Deck Hold'em — también Six Plus o 6+ — elimina cartas por debajo del seis del mazo, cambiando probabilidades y rankings. Grand Club ofrece mesas Short Deck en Club ID 1074072 junto a NLH y PLO. Esta guía explica reglas, diferencias de ranking, dónde encontrar 6+ en el lobby PPPoker y consejos básicos de estrategia con liquidación 1 ficha = 1 $ vía @grandppuzbot.",
    sections: [
      {
        heading: "Qué es Short Deck (6+)",
        paragraphs: [
          "Short Deck usa mazo de 36 cartas: doses a cincos eliminados, quedan seis a as en cuatro palos. Menos cartas significan boards más conectados, más escaleras y colores relativos al Hold'em full deck, y equities preflop distintas de manos conocidas del NLH.",
          "El formato es popular en live high-stakes y llegó a apps de clubes incluyendo PPPoker. Mesas pueden listarse como SDH, 6+ o Short Deck en el filtro. Estructuras de ciegas y antes varían — muchos juegos usan antes más button blind.",
          "Grand Club ofrece Short Deck vía tráfico de unión en Club ID 1074072. Pico suele ser noche en Asia y Europa Oriental, con mesas extra los fines de semana en promociones mixed-game.",
        ]
      },
      {
        heading: "Diferencias de reglas del Hold'em estándar",
        paragraphs: [
          "Con mazo más corto, manos iniciales tienen menos cartas bajas. Parejas y broadways conectan más al board. Pots three-bet preflop son comunes; rangos suben comparado con NLH full deck en profundidades similares.",
          "Algunos clubes permiten solo un raise preflop o caps distintos — lee el popup de reglas antes de sentarte. Postflop pot-limit o no-limit según mesa; mesas unión Grand siguen reglas PPPoker Short Deck estándar.",
          "Posición importa aún más que NLH full deck. Con antes, robar y defender wide en posición tardía es rentable cuando oponentes overfold. Buy-ins de 50–100 antes son típicos en stakes de club.",
        ],
        bullets: [
            "Mazo 36 cartas: solo seis a as",
            "Antes más button blind común en vez de solo SB/BB",
            "Lee popup de reglas antes de la primera mano",
            "Listado como SDH, 6+ o Short Deck en filtros PPPoker",
        ]
      },
      {
        heading: "Rankings de manos en Short Deck",
        paragraphs: [
          "Cambio crítico: color bate full house en la mayoría de reglas Short Deck, incluyendo PPPoker. Trips pueden batir escalera en algunas reglas — PPPoker Short Deck sigue color sobre full house.",
          "Escaleras son más fáciles con menos huecos en el mazo. Ases altos; wheel straights no existen sin dos a cinco. Ajusta lectura — board 7-8-9-T-J es escalera, no textura draw-heavy como NLH.",
          "Two pair y single pair pierden valor versus draws y escaleras/colores hechos. Top pair top kicker es más débil en muchos runouts. Estudia equity charts de Short Deck, no importes instintos NLH intactos.",
        ]
      },
      {
        heading: "Dónde encontrar Short Deck en Grand Club",
        paragraphs: [
          "Abre PPPoker, entra Club ID 1074072 y ve a Cash Games. Filtro de tipo — Short Deck, SDH o 6+. Si no hay mesa, vuelve en horas pico de unión o escribe @Grand_Poker_Reception por calendario 6+.",
          "Agentes Grand a veces publican apertura de mesas Short Deck en Telegram cuando sube liquidez. Mesas privadas para grupos — contacto @Grand_Poker_Reception para mesa 6+ dedicada.",
          "Buy-in con saldo del club vía @grandppuzbot. Todas fichas Short Deck liquidan a 1 ficha = 1 $ con 60% rakeback en contributed rake como cash NLH.",
        ],
        bullets: [
            "Pestaña Cash Games en Club ID 1074072 — filtro Short Deck o 6+",
            "Pico frecuentemente noche Asia y Europa Oriental",
            "Mesas 6+ privadas vía solicitud @Grand_Poker_Reception",
            "Mismo 60% rakeback y 1 ficha = 1 $ que cash NLH",
        ]
      },
      {
        heading: "Estrategia básica 6+ en stakes de club",
        paragraphs: [
          "Afloja opens early position un poco menos que NLH pero respeta agresión — broadways dominadas chocan con escaleras y colores más often. Conectores suited y parejas ganan valor; ases débiles pierden fuerza.",
          "Juega draws agresivamente cuando SPR favorece. Con color sobre full house, perseguir colores es EV mayor que NLH con suited cards. No sobrevalores two pair en boards wet.",
          "Sigue resultados separados del NLH. Varianza Short Deck es distinta; regular NLH ganador puede perder en 6+ sin ajustar rankings y charts. Usa hand history PPPoker para revisar spots donde ranking color-vs-full cambió resultado.",
        ]
      }
    ],
    faq: [
      {
        q: "¿Color bate full house en PPPoker Short Deck?",
        a: "Sí. Ranking PPPoker 6+ estándar coloca color sobre full house.",
      },
      {
        q: "¿Dónde está el lobby Short Deck en Grand?",
        a: "Club ID 1074072 → Cash Games → filtro Short Deck, SDH o 6+.",
      },
      {
        q: "¿Rake Short Deck califica para 60% rakeback?",
        a: "Sí. Contributed rake en mesas 6+ cash cuenta como NLH en Grand Club.",
      },
      {
        q: "¿Cómo financiar sesión Short Deck?",
        a: "Depósito vía @grandppuzbot a 1 ficha = 1 $, luego buy-in en mesa desde billetera del club.",
      }
    ],
  },
  "ofc-chinese-poker": {
    intro:
      "Open Face Chinese (OFC) es un juego de colocación de cartas en tres filas — front, middle y back — de cartas repartidas una a una boca arriba. PPPoker soporta variantes Standard, Pineapple y Progressive OFC en lobbies de clubes. Grand Club aloja mesas OFC en Club ID 1074072 para jugadores que quieren descanso de la varianza Hold'em. Esta guía cubre reglas, variantes, fantasyland y dónde encontrar mesas con liquidación 1 ficha = 1 $ vía @grandppuzbot.",
    sections: [
      {
        heading: "Introducción al OFC en PPPoker",
        paragraphs: [
          "A diferencia del Hold'em, OFC no tiene rondas de apuestas durante la mano. Cada jugador recibe cartas secuencialmente y coloca cada una en una de tres filas antes de la siguiente. Front tres cartas, middle cinco, back cinco — back debe ser más fuerte que middle, middle que front, o foul.",
          "Puntuación head-to-head contra cada oponente. Royalties por manos fuertes en filas añaden puntos bonus. Manos fouled pierden las tres filas automáticamente. Mesas OFC en PPPoker suelen ser 2–3 jugadores.",
          "Grand Club lista OFC en specialty u other games en lobby Club ID 1074072. Mesas unión añaden liquidez Pineapple y Progressive en picos nocturnos asiáticos.",
        ]
      },
      {
        heading: "Reglas Standard OFC",
        paragraphs: [
          "La mano empieza con cinco cartas boca arriba simultáneamente — colocas las cinco antes de más cartas. Luego una carta a la vez hasta filas completas: tres front, cinco middle, cinco back. Carta colocada no se mueve.",
          "Tras completar filas, comparación fila a fila. Ganar dos de tres filas gana el match contra ese oponente. Puntos acumulan en sesión; transferencia de fichas por total puntos veces stake por punto.",
          "Standard OFC sin discard hasta variante Pineapple. Lee stake — mesas Grand muestran valor por punto y buy-in mínimo a 1 ficha = 1 $.",
        ],
        bullets: [
            "Tres filas: front 3, middle 5, back 5 — back más fuerte",
            "Cinco cartas primero, luego una a la vez hasta completar",
            "Foul pierde todas filas; royalties añaden puntuación",
            "Puntos head-to-head multiplicados por stake por punto",
        ]
      },
      {
        heading: "Variantes Pineapple y Progressive",
        paragraphs: [
          "Pineapple OFC reparte tres cartas por ronda tras las cinco iniciales en vez de una. Colocas dos y descartas una boca abajo cada ronda. Más información aumenta fantasyland y complejidad.",
          "Progressive OFC aumenta royalties conforme manos son más fuertes — bonus mayores en back row. Algunas mesas Progressive escalan multiplicadores con fantasyland repetido.",
          "Elige variante por duración y edge. Standard más simple para principiantes; Pineapple premia quien rastrea discards; Progressive para cazadores de royalties que entienden riesgo foul.",
        ]
      },
      {
        heading: "Fantasyland y profundidad de puntuación",
        paragraphs: [
          "Fantasyland es estado recompensa: califica con front row QQ+ válido, próxima mano recibe todas cartas boca abajo de una vez. Manos fantasyland puntúan fuerte con royalties.",
          "Permanecer requiere cumplir umbral de nuevo — típicamente trips en front o mejor. PPPoker muestra status fantasyland en UI. Contra jugadores fantasyland — evitar foul y bloquear royalties en front.",
          "Rastrea discards en Pineapple — queens muertas afectan odds fantasyland. Bankroll OFC debe cubrir swings de puntos; una mano fantasyland cambia stacks drásticamente en point values altos.",
        ],
        bullets: [
            "Fantasyland: front row QQ+ válido (reglas pueden variar)",
            "Próxima mano fantasyland: todas cartas boca abajo de una vez",
            "Re-qualify para permanecer en fantasyland",
            "Discards Pineapple afectan probabilidad fantasyland",
        ]
      },
      {
        heading: "Dónde encontrar mesas OFC en Grand Club",
        paragraphs: [
          "En PPPoker, abre Club ID 1074072 y Other Games o filtro OFC. Stakes como valor por punto — ej. 1 ficha por punto, buy-in mínimo 500 fichas. Depósito vía @grandppuzbot antes de unirte.",
          "Si no hay mesa pública, pide @Grand_Poker_Reception mesa OFC privada para tu grupo. Agentes Grand organizan noches Pineapple en Telegram cuando liquidez permite.",
          "Rake OFC sigue contributed rake; 60% rakeback en cuotas OFC como cash. Transfers en sesión vía chip movement en app, retiro vía @grandppuzbot a 1 ficha = 1 $.",
        ]
      }
    ],
    faq: [
      {
        q: "¿Qué es mano fouled en OFC?",
        a: "Cuando back, middle y front no están en orden decreciente de fuerza, la mano fouls y pierde las tres filas.",
      },
      {
        q: "¿Cómo calificar para fantasyland?",
        a: "Típicamente front row QQ+ válido sin foul. Revisa reglas de mesa en PPPoker.",
      },
      {
        q: "¿Dónde están mesas OFC en Grand Club?",
        a: "Club ID 1074072 → Other Games o filtro OFC en lobby del club.",
      },
      {
        q: "¿Rake OFC cuenta para 60% rakeback?",
        a: "Sí. Cuotas OFC son contributed rake y rebate semanal vía @grandppuzbot.",
      }
    ],
  },
  "bankroll-management": {
    intro:
      "Bankroll management es la disciplina que mantiene solventes a jugadores de cash de clubes a través de la varianza. En Grand Club, fichas equivalen directamente a dólares a 1 ficha = 1 $, simplificando matemáticas pero sin eliminar downswings. Esta guía cubre tamaño de buy-in, cuándo subir o bajar stakes, cómo el 60% rakeback afecta tu colchón y hábitos prácticos para jugadores en Club ID 1074072 financiando sesiones vía @grandppuzbot.",
    sections: [
      {
        heading: "Por qué importan las reglas de bankroll en póker de clubes",
        paragraphs: [
          "La varianza de cash puede producir swings de varios buy-ins incluso en jugadores ganadores. Sin reservas adecuadas, un downswing normal fuerza scared money — apretar mal, evitar spots +EV o perseguir pérdidas en stakes mayores.",
          "El póker de clubes añade disciplina de liquidación: roll vive en fichas PPPoker y buffer de retiros vía @grandppuzbot. Trata todo como un bankroll a 1 ficha = 1 $. Nunca juegues con alquiler o fondos irrecuperables en tu horizonte planeado.",
          "Grand devuelve 60% de contributed rake semanalmente — suaviza costo efectivo pero no sustituye reglas de buy-in. Rakeback ayuda en volumen; no borra mala sesión.",
        ]
      },
      {
        heading: "Reglas de buy-in para cash games",
        paragraphs: [
          "Guía estándar NLH cash: 50–100 big blinds por buy-in, roll total 30–50 buy-ins antes de jugar el nivel regularmente. NL100 (1/2 fichas a 1 $ por ficha): buy-in 100 fichas = 100 $; roll 3.000–5.000 $ para juego cómodo.",
          "Reglas de reload importan tanto como buy-in inicial. Muchos limitan reload a un buy-in por sesión salvo stack bajo 40 BB por juego normal. Sal con stop-loss de tres buy-ins por sesión.",
          "PLO y Short Deck exigen rolls mayores por varianza. Añade 30–50% buy-ins antes de PLO5 o 6+ en mismo valor de ficha.",
        ],
        bullets: [
            "NLH cash: buy-in 50–100 BB, roll 30–50 buy-ins en stake",
            "Stop-loss sesión: comúnmente 3 buy-ins antes de pausa obligatoria",
            "Cap reload: un buy-in por sesión salvo stack bajo 40 BB",
            "PLO y Short Deck: +30–50% roll vs NLH en mismo stake",
        ]
      },
      {
        heading: "Subir y bajar stakes",
        paragraphs: [
          "Sube cuando roll alcance 40–50 buy-ins en siguiente stake con win rate sostenido o breakeven en muestra significativa — típicamente 20.000+ manos en PPPoker.",
          "Baja inmediatamente cuando roll caiga bajo 25–30 buy-ins en stake actual. Shot ocasional un nivel arriba con un buy-in es aceptable; juego sostenido sobre bankroll quiebra jugadores con win rate positivo.",
          "Grand Club ofrece stakes micro a mid en Club ID 1074072. Filtra lobby en tu nivel; tentación de mesas unión mayores en hot streak es leak común.",
        ]
      },
      {
        heading: "MTT, SNG y rolls separados",
        paragraphs: [
          "Mantén fondos de torneos separados del cash. MTT frecuentemente 100+ buy-ins por estructura top-heavy. SNG menos; Spin & Go más por varianza de multiplicador.",
          "No cross-subsidize: perder roll cash y disparar MTTs para recuperar es disciplina reversa. Deposita separado vía @grandppuzbot y etiqueta mentalmente fichas en Club ID 1074072.",
          "Ingreso referral 30% para agentes es separado del bankroll de juego — no mezcles settlements de agente con fondos personales sin contabilidad clara.",
        ],
        bullets: [
            "Roll MTT: 100+ buy-ins en stake regular separado del cash",
            "Spin & Go: 200+ buy-ins recomendados por varianza",
            "Ganancias MTT no son excusa para overshoot stakes cash",
            "Ingreso referral agente separado del roll de juego",
        ]
      },
      {
        heading: "Cómo rakeback afecta bankroll efectivo",
        paragraphs: [
          "Grand 60% rakeback en contributed rake devuelve fichas reales semanalmente vía @grandppuzbot. 500 fichas rake al mes — 300 retorno, tres buy-ins NL100. Incluye en crecimiento largo plazo, no en decisiones por sesión.",
          "Costo efectivo de rake a 60% rakeback: mesa 5% rake cuesta 2% net largo plazo. Estira roll pero no reduce varianza por sesión de all-ins.",
          "Sigue rake pagado en stats del club PPPoker y compara con estados @grandppuzbot. Divergencias — @Grand_Poker_Reception. Seguimiento preciso ayuda a dimensionar colchón rakeback en volumen anual.",
        ]
      }
    ],
    faq: [
      {
        q: "¿Cuántos buy-ins para NLH cash en Grand?",
        a: "Mayoría mantiene 30–50 buy-ins en stake regular, buy-in 50–100 BB por mesa a 1 ficha = 1 $.",
      },
      {
        q: "¿Cuándo bajar stakes?",
        a: "Cuando roll caiga bajo 25–30 buy-ins en stake actual — no esperes a cero.",
      },
      {
        q: "¿Rakeback cuenta como bankroll?",
        a: "Incluye 60% rakeback vía @grandppuzbot en crecimiento largo plazo, no en reload misma sesión.",
      },
      {
        q: "¿Cómo depositar roll MTT separado?",
        a: "Vía @grandppuzbot a 1 ficha = 1 $ y separa mentalmente MTT de cash en Club ID 1074072.",
      }
    ],
  },
  "legality-by-country": {
    intro:
      "La legalidad del póker online varía mucho por país. Apps de clubes como PPPoker operan vía clubes privados, no sitios públicos licenciados — zona gris en muchas jurisdicciones. Este artículo es panorama general para jugadores Grand Club — no asesoramiento legal. Consulte profesional calificado. Grand Club ID 1074072 atiende miembros internacionales con liquidación 1 ficha = 1 $ vía @grandppuzbot y soporte @Grand_Poker_Reception.",
    sections: [
      {
        heading: "Cómo leer este panorama",
        paragraphs: [
          "Las leyes cambian frecuentemente. Este resumen refleja entendimiento común en 2026 para regiones con base Grand Club significativa: Rusia, Brasil, Uzbekistán, Filipinas y LatAm. Describe patrones típicos de acceso, no garantías.",
          "PPPoker club poker no es igual al póker online regulado en NJ o UK. Clubes usan redes de agentes, liquidación privada de fichas y juego en app. Riesgo legal depende de definiciones locales, reglas de pago y enforcement.",
          "Grand Club no proporciona asesoramiento legal. Jugadores son responsables del cumplimiento local. El club enfoca liquidación justa, transparencia de 60% rakeback y caja confiable vía canales Telegram oficiales.",
        ]
      },
      {
        heading: "Rusia",
        paragraphs: [
          "Rusia restringe juegos licenciados a zonas designadas; póker online fuera opera en espacio legalmente ambiguo. Muchos jugadores rusos usan club apps vía clubes privados con liquidación offshore.",
          "Rails de pago importan: Grand soporta métodos accesibles a jugadores rusos donde disponible, liquidación 1 ficha = 1 $ vía @grandppuzbot. Solo caja oficial Grand — no vendedores terceros de fichas.",
          "Hábito práctico: registros de depósitos y retiros vía @grandppuzbot. Problemas de pago — @Grand_Poker_Reception, no intermediarios no oficiales.",
        ],
        bullets: [
            "Club poker generalmente fuera de zonas licenciadas rusas",
            "Solo @grandppuzbot y @Grand_Poker_Reception — sin fichas terceras",
            "Liquidación 1 ficha = 1 $ por caja oficial Grand",
            "Consulte asesor local sobre ley rusa actual",
        ]
      },
      {
        heading: "Brasil y América Latina",
        paragraphs: [
          "Brasil aprobó reformas significativas; implementación continúa. Apps de clubes siguen ampliamente usadas mientras el mercado regulado se desarrolla. Brasileños acceden a PPPoker clubs vía agentes con PIX o USDT.",
          "Grand Club soporta contenido en portugués y tráfico pico brasileño en Club ID 1074072. Depósitos vía @grandppuzbot con métodos regionales. Agentes con 30% referral deben respetar reglas fiscales locales.",
          "LatAm amplia — México, Argentina, Colombia — regímenes mixtos. Club poker llena gaps de liquidez. Jugadores deben verificar obligaciones fiscales de ganancias o ingreso de agente.",
        ]
      },
      {
        heading: "Uzbekistán",
        paragraphs: [
          "Uzbekistán ha ajustado reglas con el tiempo; acceso online depende de política telecom y bancaria. Muchos usan PPPoker clubs con Humo, Uzcard o USDT vía cajas Telegram.",
          "Grand Club atiende miembros uzbekos con contenido localizado y @grandppuzbot. Club ID 1074072 acepta solicitudes con Referral ID. Liquidación 1 ficha = 1 $ con 60% rakeback.",
          "Solo canales oficiales. Transferencias no oficiales violan política del club. @Grand_Poker_Reception trata verificación y pagos atascados.",
        ],
        bullets: [
            "Reglas de juegos online en Uzbekistán cambian — verifique localmente",
            "Caja Grand: @grandppuzbot con Humo, Uzcard, USDT donde disponible",
            "Club ID 1074072 con Referral ID para miembros uzbekos",
            "Soporte Telegram oficial: @Grand_Poker_Reception",
        ]
      },
      {
        heading: "Filipinas y resumen regional",
        paragraphs: [
          "Filipinas regula juegos online vía PAGCOR para operadores licenciados; club apps operan fuera de ese marco para mayoría recreational. Filipinos usan GCash con PPPoker clubs.",
          "Grand Club soporta depósitos GCash vía @grandppuzbot y guías en filipino. Pico alinea con noches PHT en Club ID 1074072. Programa 60% rakeback en contributed rake para filipinos.",
          "En todas regiones: política Grand constante — sin venta tercera de fichas, liquidación transparente 1 ficha = 1 $, rakeback semanal vía @grandppuzbot, soporte @Grand_Poker_Reception. Cumplimiento legal es responsabilidad del jugador o agente.",
        ]
      }
    ],
    faq: [
      {
        q: "¿Es legal Grand Club en mi país?",
        a: "Grand no proporciona asesoramiento legal. Revise ley local o consulte profesional calificado.",
      },
      {
        q: "¿Cómo depositan jugadores rusos y uzbekos?",
        a: "Vía @grandppuzbot oficial con métodos regionales soportados. Evite vendedores terceros.",
      },
      {
        q: "¿Filipinos usan GCash en Grand?",
        a: "Sí donde configurado. Depósito vía @grandppuzbot a 1 ficha = 1 $ tras unirse a Club ID 1074072.",
      },
      {
        q: "¿Dónde reportar problemas de pago?",
        a: "Contacte @Grand_Poker_Reception con PPPoker ID y comprobante — no agentes no oficiales.",
      }
    ],
  },
};

export default articles;
