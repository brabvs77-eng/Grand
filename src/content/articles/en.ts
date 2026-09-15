import type { ArticleCollection } from "../types";

const articles: ArticleCollection = {
  "pppoker-guide-2026": {
    intro:
      "PPPoker is not a classic poker room with one shared lobby. It is a platform for private clubs, where every club sets its own games, stakes and rules, and where money moves through an agent rather than a built-in cashier. This guide explains how that model works and what it means for you as a player.",
    sections: [
      {
        heading: "How the private club model works",
        paragraphs: [
          "The app itself only handles cards and chips. A club owner creates the room, chooses the game types, sets the rake and decides who gets in, which is why you always need a Club ID to find a table and a Referral ID to be linked to an agent.",
          "Clubs often group into unions so that players from several rooms sit at the same tables. That is how a mid-size club like Grand can offer action around the clock instead of only at local peak hours.",
          "Inside a union each club still settles separately with its own players. The union supplies the shared player pool and the rules every member club agrees to follow, such as how many accounts one agent may seat at the same table.",
        ],
      },
      {
        heading: "Games and stakes you will find",
        paragraphs: [
          "No-Limit Hold'em and Pot-Limit Omaha carry most of the traffic, with PLO4 and PLO5 especially popular in Brazilian and Asian unions. Short Deck, Open Face Chinese and All-In or Fold fill the rest of the schedule.",
          "Stakes run from micro tables that cost a few dollars to enter up to high-stakes games that require an invitation. Tournaments range from daily low buy-ins to series with large guaranteed prize pools.",
        ],
      },
      {
        heading: "Why the agent matters more than the app",
        paragraphs: [
          "Because PPPoker does not process real money, your deposits, withdrawals and rakeback all depend on the agent you join through. A good agent pays on schedule, states the rake and rakeback in writing before you load chips, and resolves disputes with the club on your behalf.",
          "This is also the main risk of the format. Choosing an agent with a public reputation matters more than chasing the highest advertised rakeback percentage.",
        ],
      },
      {
        heading: "What rake and rakeback look like in practice",
        paragraphs: [
          "The typical structure is up to 5% of the pot with a cap around 3 big blinds, though each club sets its own numbers. Rakeback is what the agent returns to you, usually weekly.",
          "Realistic rates run from 25% to 60% depending on your monthly volume. Anything advertised far above that range deserves careful checking before you deposit.",
          "You can read the exact structure at the table itself. The table info panel shows the percentage and the cap for that specific game, which is worth checking before you sit rather than assuming the club default applies at every stake.",
        ],
      },
      {
        heading: "What the app does and does not do",
        paragraphs: [
          "PPPoker Ltd builds and runs the software. Its side of the arrangement is the deal engine, chip accounting, hand histories, table and stake limits, and the anti-collusion tools that flag shared addresses, chip dumping and repeated seating patterns across a union.",
          "What the company does not do is hold money. There is no cashier inside the app, no balance denominated in a currency, no withdrawal button and no approval process for players. Rake is set by the club, chips are issued by the club, and every real-money question belongs to the club and the agent you joined through.",
          "That split explains most of the confusion around the format. When a player says PPPoker did not pay them, what actually happened is that an agent did not pay them, because the app has no mechanism to pay, refund or arbitrate anything.",
        ],
      },
      {
        heading: "Choosing between clubs and unions",
        paragraphs: [
          "Compare rooms on traffic at the hours you actually play rather than on a screenshot of a busy lobby. A union that fills up at midnight in Brazil is of little use if you play weekday evenings in Tashkent, so open the lobby at your own hours for a few days before you commit a bankroll.",
          "After traffic, the numbers that decide your win rate are the rake percentage and the cap, then the size of the union and the strength of the field. Ask which union the club belongs to and which stakes are shared with it, because that determines who you will actually be playing against.",
          "A larger union is not automatically better. More traffic usually also means more regulars playing four or more tables, faster seating and fewer soft games. A mid-size union with a recreational base can be a better place to build a win rate than the biggest room you can find.",
        ],
        bullets: [
          "Traffic at your own playing hours, checked across several days",
          "Rake percentage and the cap in big blinds at your stake",
          "Union size and which stakes are shared inside it",
          "Field strength — how many opponents are multi-tabling regulars",
          "Whether the club publishes a settlement day and keeps to it",
        ],
      },
      {
        heading: "Bankroll in the club format",
        paragraphs: [
          "Buy-in sizing follows the usual logic: a roll that absorbs normal variance without forcing a stake change, with a wider margin in Pot-Limit Omaha than in Hold'em because the swings are larger. What differs in club poker is where that roll is kept.",
          "Keep only the part you are actively playing with in chips on the app. Chips are a claim on the club rather than a regulated balance, so an idle stack carries a risk an idle bank balance does not. Loading a session bankroll and settling the rest weekly leaves you exposed for days instead of months.",
          "The weekly settlement rhythm also shapes planning. Rakeback and released bonus arrive on a fixed day, so it is simpler to time withdrawals to that day than to request small amounts continuously, and to keep enough in chips to cover the sessions you intend to play before the next cycle.",
        ],
      },
      {
        heading: "Common mistakes new players make",
        paragraphs: [
          "Almost every problem a new club player runs into comes from a short list of avoidable choices. None of them are subtle, and each is cheaper to avoid than to fix afterwards.",
          "The one that cannot be undone is registering without a Referral ID. Rake generated before the link exists belongs to the club, and no agent can credit it retroactively, so a first session played unlinked is volume given away.",
        ],
        bullets: [
          "Registering without entering a Referral ID",
          "Picking a club by the highest advertised rakeback instead of the cap and the payout record",
          "Depositing a large amount before completing one full withdrawal cycle",
          "Playing above the roll because the chips are already loaded",
          "Ignoring club activity requirements and losing access to the better games",
          "Leaving the whole bankroll in chips between sessions",
        ],
      },
      {
        heading: "NLH, PLO, OFC and Short Deck on one platform",
        paragraphs: [
          "PPPoker carries the full spread of club poker formats inside a single client. No-Limit Hold'em and Pot-Limit Omaha — including four- and five-card PLO — still carry most of the traffic, but Open Face Chinese, Short Deck (6+) and All-In or Fold fill the schedule at different hours depending on the union.",
          "Each format has its own lobby filters, so you can search by stakes, table size and game type without scrolling through unrelated tables. OFC runs as Pineapple or Progressive with fantasyland rules set by the club, while Short Deck uses a reduced deck and different hand rankings that reward connected broadway cards.",
          "If you are new to club poker, start with NLH at your usual stake before branching into PLO or OFC. The rake structure and timebank behave the same across formats, but variance and optimal strategy differ enough that mixing formats on day one usually costs more than it teaches.",
        ],
      },
      {
        heading: "Fair play, RNG certification and platform integrity",
        paragraphs: [
          "PPPoker's card distribution runs on a certified random number generator audited by independent testing labs. The shuffle is server-side, meaning no player or club host can influence which cards appear, and hand histories are stored for review if a dispute arises.",
          "Beyond the RNG, the platform monitors seating patterns, shared IP addresses, chip transfers between linked accounts and repeated soft-play behaviour. Clubs receive automated flags when two accounts consistently sit together or when chips move in ways that suggest dumping.",
          "Fair play at the table is only half the picture in club poker. The other half is choosing an agent who settles honestly, because the app guarantees card randomness but cannot guarantee that your agent pays what you are owed.",
        ],
      },
    ],
    faq: [
      {
        q: "Is PPPoker a real-money poker room?",
        a: "Formally no. The app uses play chips, and real-money settlement happens between you and your club agent.",
      },
      {
        q: "Do I need to pass KYC?",
        a: "Registration in the app requires no documents. Individual agents may ask for verification on larger withdrawals.",
      },
      {
        q: "Can I play on a computer?",
        a: "Yes. PPPoker has a Windows client alongside the iOS and Android apps, and it supports multi-tabling.",
      },
      {
        q: "How is PPPoker different from PokerBros or ClubGG?",
        a: "The model is the same in all three: private clubs, unions and money handled by an agent outside the app. They differ in client quality, union geography and which games draw traffic. In practice the agent you join through affects your results more than the choice of app.",
      },
      {
        q: "Can I play several tables at once?",
        a: "On the Windows client yes, with resizing and tiling. On mobile you are effectively limited to two, because the app displays one table at a time and swaps between them.",
      },
      {
        q: "What happens if a club closes?",
        a: "Settlement runs through your agent, who holds the record of your balance and rake. It is another reason the agent's history matters more than the club's logo: a room can close and a reliable agent will still settle and seat you elsewhere.",
      },
    ],
  },

  "join-grand-club": {
    intro:
      "Joining Grand Club takes about ten minutes: install the app, create an account, apply with our two IDs and message the cashier. Here is each step in detail, including the parts that trip people up.",
    sections: [
      {
        heading: "Step 1 — Install the app",
        paragraphs: [
          "Download PPPoker from the App Store, Google Play, or as a direct APK if your store does not carry it. A Windows client is available too if you plan to multi-table.",
          "Install only from the official sources listed on our download page. Modified builds circulating on forums can compromise your account.",
        ],
      },
      {
        heading: "Step 2 — Create your account",
        paragraphs: [
          "Open the app, tap Register, and choose a username and password. No documents, email confirmation or phone verification are required at this stage.",
          "Pick a nickname you are happy to keep, because your agent and the club managers will identify you by it in every payout record.",
          "Since there is no email or phone step, there is also nothing to recover a forgotten password with by default. Store the credentials somewhere durable, and note the numeric PPPoker ID the app assigns you in the profile screen — the cashier uses it rather than the nickname.",
        ],
      },
      {
        heading: "Step 3 — Apply with both IDs",
        paragraphs: [
          "Tap Join Club and enter the Grand Club ID, then enter the Referral ID in the field below it. The Club ID points the app at our room; the Referral ID links your account to our cashier.",
          "Skipping the Referral ID is the single most common mistake. Without it, nobody can load your chips, you earn no rakeback, and support cannot help if something goes wrong.",
        ],
      },
      {
        heading: "Step 4 — Fund your seat",
        paragraphs: [
          "Open @grandppuzbot in Telegram for automatic deposits (1 chip = $1) or message @Grand_Poker_Reception player support with your nickname and the amount you want to load. We confirm the rake structure and your rakeback rate before any money moves.",
          "Chips normally appear on your balance within 15 minutes. Start with a small test deposit on your first session so you can see the full deposit and withdrawal cycle before committing a bankroll.",
          "Local-currency deposits are quoted at a rate that holds for a short window, so send the payment while the quote is live. If it expires nothing is lost; the cashier issues a new quote at the current rate.",
        ],
      },
      {
        heading: "Step 5 — Set up your table filters",
        paragraphs: [
          "PPPoker has no global lobby, so every game you play is found inside the club list. Open the club and use the filter row above the tables to narrow by game type, stake and table size; unfiltered, the list mixes Hold'em, Omaha and Short Deck at every limit running in the union.",
          "Mark the games you play as favourites so they sit at the top next session, and use the waiting list instead of refreshing. A reservation holds your place while you sit at another table, which is how most regulars keep two games going on a phone.",
          "Build the filter set before your first session rather than during it. In a shared union the softer tables fill within a minute or two of opening, and a player still scrolling the full list is usually too late for them.",
        ],
      },
      {
        heading: "What your first week looks like",
        paragraphs: [
          "Rake counts from the first hand you are dealt into, with no activation step. The Bronze rate of 45% applies immediately and carries no volume requirement, so there is nothing to qualify for before your rakeback starts accruing.",
          "The first payment lands on the club's weekly settlement day and covers the rake generated in the preceding week rather than seven days from your deposit. Join mid-week and your first payout covers a short period, with the next one running a full cycle.",
          "Tiers are assigned from monthly rake, so early weeks are usually paid at the base rate while the month's total builds. Contact with the cashier settles into a routine quickly: a message when you want chips, a message when you want a payout, and the weekly statement in between.",
        ],
      },
      {
        heading: "If your application is not approved right away",
        paragraphs: [
          "An application left pending is normally a record-keeping question rather than a rejection. Message the cashier with your nickname, your numeric PPPoker ID and the Referral ID you entered, and it can usually be matched up in minutes.",
          "Nothing is lost while the application waits, because no rake can be generated until you are inside the club. Resolving a missing referral at this stage takes one message; doing it after several sessions requires the club manager and, sometimes, the previous agent to agree.",
        ],
        bullets: [
          "No referral on file — the application arrives unattached to any agent",
          "Nickname mismatch between the app and the one you sent the cashier",
          "Submitted outside working hours, so approval waits for the next shift",
          "A duplicate application from an account that already has one pending",
        ],
      },
      {
        heading: "Keeping your account in good standing",
        paragraphs: [
          "Club poker runs on a shared pool, so the rules that protect the games are enforced across the union rather than by a single club. They are short, and reviews look at hand histories and seating data rather than at accusations.",
          "The practical consequence is that accidental breaches are rare and deliberate ones are visible. Two accounts from one household at the same table look the same in the data as a deliberate soft-play arrangement, which is why the rule is written as a prohibition rather than left to judgement.",
        ],
        bullets: [
          "One account per player, and no second account opened to restart a bonus",
          "No chip transfers between accounts",
          "No two players from one household at the same table",
          "No account sharing and nobody else playing your session",
          "Some regular activity — dormant accounts lose club access over time",
        ],
      },
      {
        heading: "How club hosting shapes games and settlement",
        paragraphs: [
          "When you join Grand Club, you enter a hosted environment where the club owner sets the game schedule, rake caps, table limits and union membership. Hosting means the club runs the tables, manages chip issuance and enforces the rules that keep the union fair for every member room.",
          "The host also decides which formats appear at which hours. A well-run club balances NLH, PLO and tournament traffic so that peak times have full tables without flooding the lobby with empty ones at off-peak. Grand's union partnerships extend that reach beyond what a single room could fill alone.",
          "Settlement still flows through your agent, not the host directly, but the host's reputation affects whether the union stays active and whether disputes get resolved quickly. A club that hosts reliably attracts more players, which in turn keeps the games softer and the withdrawal cycle predictable.",
        ],
      },
      {
        heading: "Community forums and player-to-player support",
        paragraphs: [
          "PPPoker maintains an official community forum where players discuss strategy, report client bugs and share club recommendations. The forum is moderated and separates technical support threads from club-specific discussions, which keeps signal high and spam low.",
          "Grand Club also runs its own Telegram channels for members. These are where the cashier posts settlement schedules, where table requests get answered and where new players ask the questions that the FAQ does not cover. Joining the channel after your application is approved is worth doing before your first session.",
          "Community channels are not a substitute for your agent on money matters, but they are the fastest way to learn which tables are running, whether a tournament series is coming up and what other members think of a new format the club has added.",
        ],
      },
    ],
    faq: [
      {
        q: "How long does approval take?",
        a: "Applications are usually approved within a few minutes during business hours.",
      },
      {
        q: "Can I be in more than one club?",
        a: "Yes, one PPPoker account can belong to several clubs at the same time.",
      },
      {
        q: "What is the minimum first deposit?",
        a: "From $10 equivalent, depending on the payment method you choose.",
      },
      {
        q: "Do I pay anything to join?",
        a: "No. Joining is free, the app is free, and there is no seat fee or subscription. The only money you send is the amount you want loaded as chips.",
      },
      {
        q: "Can I change my nickname later?",
        a: "Changes are limited in the app, and every payout record is kept against the nickname you registered with, so any change has to be flagged to the cashier. It is easier to pick one you will keep.",
      },
      {
        q: "Can I look around before depositing?",
        a: "Yes. Once the application is approved you can open the lobby, watch tables and check the stakes and traffic without loading any chips.",
      },
    ],
  },

  "deposit-methods": {
    intro:
      "Grand Club runs an agent cashier with automatic deposits and withdrawals through @grandppuzbot in Telegram (club GrandPoker, ID 1074072, 1 chip = $1), which means payments go through local rails rather than a card form on a website. That sounds unusual at first but it is what makes fast payments in Brazilian reais, Philippine pesos, roubles and som possible.",
    sections: [
      {
        heading: "Methods by region",
        paragraphs: [
          "We keep separate rails for each market so you are not forced through currency conversion you did not ask for.",
        ],
        bullets: [
          "Brazil — Pix, instant, from R$50",
          "Philippines — GCash and Maya, 5 to 30 minutes, from ₱500",
          "Russia and CIS — SBP and bank cards, 5 to 15 minutes, from ₽1,000",
          "Uzbekistan — Uzcard, Humo and Payme, 10 to 30 minutes, from $10",
          "Worldwide — USDT TRC20, 5 to 15 minutes, from $10",
        ],
      },
      {
        heading: "How a deposit actually runs",
        paragraphs: [
          "Open @grandppuzbot in Telegram or message the cashier with your PPPoker nickname, the amount and your preferred method. The bot credits chips automatically at 1 chip = $1. The cashier replies with payment details and a short validity window, usually 15 minutes, so the exchange rate stays fixed.",
          "Once you send the payment and confirm it, chips are credited to your club balance and you get a confirmation message. Keep the receipt until the chips appear.",
          "Send the request in a single message — nickname, numeric PPPoker ID, amount and method. It removes the most common source of error in a busy club, which is chips loaded to a similar nickname belonging to another player.",
        ],
      },
      {
        heading: "Fees, rates and limits",
        paragraphs: [
          "Grand does not add a commission on top of local methods; the rate you are quoted is the rate you pay. Network fees on crypto transfers are the only external cost, and they are charged by the blockchain rather than by us.",
          "Minimums are low on purpose so new players can run a small test transaction. Maximum single deposits scale with your VIP tier.",
        ],
      },
      {
        heading: "Practical safety habits",
        paragraphs: [
          "Only ever send funds to details issued by the cashier in your current conversation, and never to an address forwarded by another player. Impersonation accounts are the most common attack in club poker.",
          "Confirm your rake and rakeback terms in writing before your first deposit. A legitimate agent will give you those numbers upfront without being pushed.",
        ],
      },
      {
        heading: "USDT in practice",
        paragraphs: [
          "USDT is the default where no local rail covers your country, and the network matters more than the amount. TRC-20 settles on Tron with a low flat fee; ERC-20 settles on Ethereum and costs several times more when the network is busy. Send only on the network the cashier quotes, because a transfer pushed onto the wrong chain cannot be recovered by us.",
          "Check the address by comparing the first and last characters against the message you were sent, and make sure you copied it from the current conversation rather than from an older one. Clipboard-replacing malware and impersonation accounts both rely on nobody checking.",
          "Chips are released once the transfer has the confirmations the network requires, which on TRC-20 is usually a minute or two. Sending the transaction hash after you pay lets the cashier follow it instead of waiting for it to appear, and it is the record you want if anything ever needs tracing.",
        ],
      },
      {
        heading: "Local rails, region by region",
        paragraphs: [
          "Local methods exist so you are not paying a conversion spread on the way in and again on the way out. The rails differ mostly in operating hours and confirmation speed rather than in cost, since Grand adds nothing on top of any of them.",
          "Pix in Brazil and GCash or Maya in the Philippines are the closest to instant and run at any hour, weekends included. Cards and instant bank transfer across the CIS are quick during the day but can queue during overnight bank maintenance. Humo and Uzcard in Uzbekistan clear in minutes, with Payme as an alternative. Elsewhere in Latin America deposits go by bank transfer and follow local banking hours.",
        ],
        bullets: [
          "Brazil — Pix, any hour including weekends",
          "Philippines — GCash and Maya, minutes, subject to e-wallet balance limits",
          "Russia and the CIS — instant bank transfer and cards, slower in overnight maintenance windows",
          "Uzbekistan — Humo, Uzcard and Payme, minutes",
          "Rest of Latin America — bank transfer inside local banking hours",
          "Anywhere else — USDT on TRC-20",
        ],
      },
      {
        heading: "How the exchange rate is set",
        paragraphs: [
          "Local-currency deposits are converted at a rate taken from the market at the moment you ask for a quote rather than from a figure published once a day. The cashier states the amount to send and what it buys in chips in the same message, so there is nothing to calculate afterwards.",
          "That quote holds for a short window, usually around 15 minutes. The window exists because the club carries the currency risk while your transfer is in flight; without it, a rate given at the start of a volatile hour would be wrong by the time the money landed.",
          "If the window lapses before you pay, ask for a new quote instead of sending against the old one. A payment that arrives against an expired quote is credited at the rate current when it lands, which can go either way.",
        ],
      },
      {
        heading: "If a deposit does not arrive",
        paragraphs: [
          "Keep the receipt on local rails and the transaction hash on crypto. With either in hand, a missing deposit is a lookup rather than a dispute, and it can normally be traced without involving anyone above the cashier.",
          "Wait out the normal window for your method before escalating. Most reports of a missing deposit turn out to be a transfer still moving inside its own rail, particularly with bank transfers sent late in the day.",
          "Once the window has passed, send the cashier the receipt or hash, the exact amount and the time you sent it. If that does not resolve it, the next step is club or union management, which is why it is worth asking an agent about the escalation path before you deposit rather than after.",
        ],
        bullets: [
          "Pix, GCash, Maya, Humo, Uzcard — minutes",
          "Cards and instant bank transfer in the CIS — up to about an hour",
          "USDT TRC-20 — minutes once confirmed on chain",
          "Standard bank transfer — up to one business day",
        ],
      },
      {
        heading: "Anti-cheating systems that protect your deposit",
        paragraphs: [
          "Before your first deposit reaches the table, PPPoker's anti-cheating layer is already running. The platform flags accounts that share IP addresses, sit at the same tables repeatedly, transfer chips between linked accounts or show soft-play patterns where two players avoid confronting each other.",
          "Clubs review these flags and can freeze accounts pending investigation. A reputable club acts on automated alerts quickly, which protects your deposit from collusion rings that would otherwise drain recreational players over weeks of coordinated play.",
          "Anti-cheating is platform-level, not agent-level. Your agent cannot disable it or override a freeze. What the agent can do is explain the club's policy, help you appeal a false flag and confirm that the room you are joining takes collusion reports seriously.",
        ],
      },
      {
        heading: "Club hosting structure and where your chips live",
        paragraphs: [
          "When you deposit through an agent, the chips that appear in your PPPoker wallet are issued by the club host, not by PPPoker Ltd. The host maintains a chip float with the union and credits your account when the agent confirms payment. Your balance is a claim on the club, not a regulated bank balance.",
          "This matters for deposit timing. A well-hosted club with adequate float credits chips within minutes of agent confirmation. A club running thin on float may delay crediting until the next settlement cycle, which is worth asking about before your first large deposit.",
          "The hosting structure also determines which games you can access. Clubs in larger unions share table pools, so your chips work across every room in the union. A standalone club with no union membership offers only the tables that club itself hosts, which can mean thin traffic at off-peak hours.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I deposit in my local currency?",
        a: "Yes, in the six markets listed above. Elsewhere, USDT is the fastest route.",
      },
      {
        q: "How quickly do chips arrive?",
        a: "Usually within 15 minutes. Bank transfers can take up to 24 hours.",
      },
      {
        q: "Is there a deposit fee?",
        a: "No fee from Grand. Crypto transfers carry the usual network fee.",
      },
      {
        q: "Which USDT network should I use?",
        a: "TRC-20 in almost every case, because the fee is low and flat. ERC-20 is accepted but costs more when Ethereum is busy. Confirm the network in the same message as the address — the two have to match.",
      },
      {
        q: "Can someone else pay for me?",
        a: "Better avoided. A payment from a name that does not match your account triggers a verification step and can complicate a later withdrawal, since payouts go to a method in your own name.",
      },
      {
        q: "Is there a maximum deposit?",
        a: "Yes, set per method rather than globally, because each rail has its own ceiling. The cashier confirms the current limit with the quote; larger amounts are usually handled by splitting them or by moving to USDT.",
      },
    ],
  },

  "rakeback-explained": {
    intro:
      "Rakeback is the part of the house commission that comes back to you. In club poker it is not a marketing extra but the main way a serious player stays profitable, so it is worth understanding exactly how it is calculated.",
    sections: [
      {
        heading: "What rake is",
        paragraphs: [
          "Rake is the commission taken from each pot, typically up to 5% capped at around 3 big blinds. Nothing is taken before the flop, and tournaments use an entry fee on top of the buy-in instead.",
          "Over a month of steady play the rake you generate adds up to far more than most players expect, which is why the percentage returned to you matters so much.",
          "Because the charge is a percentage of the pot up to a fixed ceiling, the cap only binds in larger pots: at 5% a pot has to reach twenty times the cap before the percentage stops being the limiting factor. Small and medium pots are therefore raked at close to the full percentage.",
        ],
      },
      {
        heading: "How rakeback is calculated at Grand",
        paragraphs: [
          "We use the contributed method: your share of the rake is counted from the pots you actually put money into. The club reports weekly totals, and your percentage is applied to that figure.",
          "Base rate is 45% for every member. VIP tiers raise it to 50%, 55%, 58% and 60% as your monthly rake grows, and the tier is recalculated on the first day of each month.",
          "Two separate figures are involved. The weekly rake total is what each payment is calculated from; the monthly total is what sets the percentage applied to it. A heavy week does not raise your rate mid-month, and a quiet week does not lower it.",
        ],
      },
      {
        heading: "A concrete example",
        paragraphs: [
          "Suppose you generate $1,200 of rake in a month. At the Gold tier that is 55%, so $660 comes back to you, paid out weekly rather than held until month end.",
          "The same volume at a 30% deal elsewhere would return $360. That $300 monthly difference is usually larger than the edge most mid-stakes players have over their field.",
        ],
      },
      {
        heading: "When you get paid",
        paragraphs: [
          "Club statistics update weekly, and we pay rakeback on that cycle rather than monthly. Payouts go to the same method you use for withdrawals.",
          "You can request a breakdown of hands and rake at any time. If the numbers ever look wrong, we escalate to the club rather than asking you to absorb it.",
        ],
      },
      {
        heading: "Dealt versus contributed rake",
        paragraphs: [
          "Clubs attribute the rake in a pot to players in one of two ways. Dealt rakeback divides it equally between everyone dealt into the hand, whether or not they put a chip in. Contributed rakeback assigns it in proportion to what each player actually paid into the pot.",
          "The same session produces different totals under the two methods. Dealt credits a player who folds preflop for pots they never entered, while contributed ties every unit of credit to a pot you helped build. A loose-aggressive player accumulates more under contributed; a player who folds most hands accumulates more under dealt.",
          "Grand uses contributed because it can be reconciled. Your own hand history shows which pots you put money into, so the figure in the weekly statement is something you can check rather than take on trust, and nobody in the club is credited with rake from a hand they had no stake in.",
        ],
      },
      {
        heading: "Why the rake cap matters more than the percentage",
        paragraphs: [
          "A percentage on its own says very little, because the cap decides where it stops applying. Up to 5% of the pot capped at around 3 big blinds means the percentage governs small pots and the cap governs large ones, and most of a session's rake comes from the large multiway pots.",
          "The cap is quoted in big blinds, so its real cost scales with the stake in a way the percentage does not. Two clubs both charging 5% but capping at different numbers of big blinds take the same amount from a small pot and noticeably different amounts from a big one.",
          "This is why a high rakeback percentage on a loose cap can be worse than a lower percentage on a tight one. The comparison worth making is the rake you expect to pay per hundred hands after rakeback, not the two headline percentages side by side.",
        ],
      },
      {
        heading: "Rakeback on tournaments",
        paragraphs: [
          "Tournament rake is the entry fee charged on top of the buy-in, and it counts toward your monthly total at face value. There is no pot to divide and no cap involved, so the contribution is simply the fee on every tournament you enter.",
          "That makes tournament volume easier to plan than cash game volume. A known number of registrations at a known fee is a known contribution to the monthly figure, while the same time in cash games depends on how many hands reach the flop and how big those pots become.",
          "Late registration, re-entries, rebuys and add-ons each carry their own fee, and each counts the same way as the original entry. Only the fee component counts; the part of your money that goes into the prize pool is not rake.",
        ],
      },
      {
        heading: "Raising your effective rakeback",
        paragraphs: [
          "The tier is set by monthly rake, so the lever with the largest effect is hours played at a stake you are comfortable with rather than the stake itself. Moving up raises the rake you pay faster than it raises your tier, because the cap scales with the big blind while the thresholds are fixed amounts.",
          "Format and session length are the next levers. Games that see more hands per hour and more multiway pots generate more rake for the same time seated, and a second table adds volume without adding hours. Very short sessions are the weakest use of the time, since a large share of any session goes on waiting for a seat.",
        ],
        bullets: [
          "Play a steady number of hours rather than long gaps and one heavy week",
          "Add a second table before adding a stake level",
          "Prefer formats with more hands per hour and more multiway pots",
          "Avoid very short sessions — seat waiting eats into the volume",
          "Keep all play under one Referral ID so it sums into a single monthly total",
        ],
      },
      {
        heading: "SpinUp tournaments and rake volume",
        paragraphs: [
          "SpinUp is PPPoker's lottery-style sit-and-go format where the prize pool is multiplied by a random spinner before cards are dealt. Buy-ins range from micro stakes to mid levels, and each entry generates rake that counts toward your weekly rakeback total the same way cash game rake does.",
          "SpinUps run around the clock in most unions, which makes them a useful tool for hitting volume targets on days when cash tables are short. A session of twenty SpinUps at a one-dollar buy-in can add meaningful rake to your monthly total without requiring a four-table cash setup.",
          "The variance is high — most spins pay the minimum multiplier — so treat SpinUp rake as a volume supplement rather than a profit centre. Your agent's rakeback percentage applies to SpinUp rake identically to cash, and the weekly statement itemises both separately.",
        ],
      },
      {
        heading: "SEKA and specialty formats in your rake total",
        paragraphs: [
          "SEKA is a three-card poker variant popular in several Asian unions, played heads-up or three-handed with a simplified ranking system. It generates rake at a fixed rate per hand and appears as a separate line in your weekly statement alongside NLH and PLO.",
          "Other specialty formats — All-In or Fold, Short Deck and OFC — each contribute rake differently. OFC rake is typically per point rather than per pot, which means a single long fantasyland hand can generate more rake than an hour of micro NLH. Understanding which formats your club runs helps you plan volume efficiently.",
          "Not every agent counts specialty rake at the same tier rate as cash NLH. Before focusing on SEKA or OFC for volume, confirm with your agent that those formats qualify for your full rakeback percentage rather than a reduced rate.",
        ],
      },
    ],
    faq: [
      {
        q: "Does rakeback count tournament fees?",
        a: "Yes, the tournament entry fee counts toward your monthly rake total.",
      },
      {
        q: "Do I lose my tier after a quiet month?",
        a: "Tiers are recalculated monthly, but we hold your level for one grace month after a drop in volume.",
      },
      {
        q: "Is 60% the real maximum?",
        a: "It is our standard top rate. Diamond-tier players with very high volume can negotiate a custom deal.",
      },
      {
        q: "Is rakeback taxable?",
        a: "That depends entirely on the jurisdiction you live in, and it is not something we can answer for you. The treatment of poker income and of rebates differs from country to country, so ask a local professional if the amounts are material.",
      },
      {
        q: "Do losing sessions generate rakeback?",
        a: "Yes. Rake is charged on pots rather than on winnings, so a losing session generates rake exactly as a winning one does and the rakeback on it is paid in the same weekly settlement.",
      },
      {
        q: "Can rakeback alone make a losing player profitable?",
        a: "Rarely, and it is worth being honest about it. Rakeback lowers the rate at which a losing player loses, and it can turn a roughly break-even player into a winning one. A player clearly behind the field stays behind; the rebate only makes the gap smaller.",
      },
    ],
  },

  "withdraw-guide": {
    intro:
      "A club is only as good as its cashout. This guide covers how withdrawals work at Grand, what the realistic timings are, and what you can do to make every payout go through without friction.",
    sections: [
      {
        heading: "Making a request",
        paragraphs: [
          "Open @grandppuzbot in Telegram or message the cashier with your nickname, the amount and the method you want to receive funds on. The bot pays out at 1 chip = $1. The minimum is $20 equivalent; the maximum per request depends on your VIP tier.",
          "Chips are deducted from your club balance first, then the transfer is sent. You will get a confirmation with the transaction reference once it is out.",
          "Requests are handled in the order they arrive, so sending the same one twice gains nothing and can produce two transfers to reconcile. If you need the money on a particular rail or at a particular time, say so in the first message.",
        ],
      },
      {
        heading: "Realistic timings",
        paragraphs: [
          "Most requests are processed within 30 minutes during business hours and within about two hours overnight. Pix, GCash and USDT are the fastest rails.",
          "Bank transfers depend on the receiving bank and can take a full business day. If a payout is going to be slow, we tell you before you confirm rather than after.",
          "Weekends and public holidays affect bank rails only. Pix, e-wallets and USDT run on the same schedule every day of the week, which is why they are the default suggestion for players whose sessions end late at night.",
        ],
      },
      {
        heading: "Verification on larger amounts",
        paragraphs: [
          "For first withdrawals above $500 we run a light verification step, usually a document photo. This protects your balance against account takeover rather than serving as regulatory KYC.",
          "Once verified, subsequent payouts on the same method go through without repeating the check.",
          "The check is normally satisfied by the document you already use with that payment method, matched against the name on the receiving account. Where the name genuinely differs — a joint account, or a wallet held elsewhere — mention it before requesting the payout rather than after it has been paused.",
        ],
      },
      {
        heading: "How to avoid delays",
        paragraphs: [
          "Withdraw to a method registered in your own name and keep it consistent between deposits and withdrawals. Mismatched accounts are the most common reason a payout is paused.",
          "If you are planning a large cashout, tell the cashier a few hours ahead so liquidity is ready on the right rail.",
        ],
      },
      {
        heading: "Planning your cashout rhythm",
        paragraphs: [
          "Rakeback and any released bonus arrive on the weekly settlement day, which gives cashouts a natural cadence. Requesting a payout on or just after that day lets one transfer cover the week's rebate together with whatever you want to take off your playing balance, instead of several small transfers that each wait in the queue.",
          "Decide in advance how much stays in chips. A working bankroll is the number of buy-ins you need for the sessions you actually plan before the next settlement; anything past that is sitting on the app for no reason. Chips are there to play with, not to store value.",
          "Players who move a fixed share off the app each week rarely have difficult conversations about withdrawals, because they never ask for an unusual amount. A request matching your normal pattern is routine; a first request for an entire balance after months of play is the one that needs liquidity arranged in advance.",
        ],
      },
      {
        heading: "Limits and speed by tier",
        paragraphs: [
          "Every tier can withdraw, and there is no minimum volume to unlock payouts. What the tier changes is the ceiling on a single request and where you sit in the queue when several payouts are being processed at once.",
          "Bronze and Silver limits are set around the amounts those players typically hold. Gold and above get a larger single-request ceiling and priority handling, and Platinum and Diamond members deal with a dedicated manager instead of the shared queue, which matters most for large or awkwardly timed requests.",
          "The actual figures come from the cashier rather than from this page, because they move with the payment rail and with available liquidity in each currency. Ask for the current number for your method before planning a large cashout; a request above the ceiling is normally split into parts rather than refused.",
        ],
        bullets: [
          "Bronze and Silver — standard ceiling, shared cashier queue",
          "Gold — larger single-request ceiling and priority handling",
          "Platinum and Diamond — highest ceilings and a dedicated manager",
          "Above your ceiling — arranged in advance and paid in parts",
        ],
      },
      {
        heading: "What is deducted on the way out",
        paragraphs: [
          "Grand charges no withdrawal fee, but two external costs can make the amount that lands differ slightly from the amount requested. On crypto it is the network fee, charged by the blockchain and taken out of the transfer. On local rails it is the exchange spread between a chip balance held in dollars and the currency you receive.",
          "The spread is set when the cashier quotes the payout, in the same way a deposit quote is fixed for a short window. That is why a payout quoted in the morning and confirmed late in the evening can be re-quoted: the rate underneath it has moved in the meantime.",
          "Receiving banks and wallets occasionally add a charge of their own, most often on international bank transfers. The cashier can tell you the expected arrival amount before sending, and it is worth asking on a first payout to a new method so you know what normal looks like.",
        ],
      },
      {
        heading: "Crypto versus local rails for withdrawals",
        paragraphs: [
          "For most players the local rail is the obvious choice. Pix, GCash, Maya, Humo and instant bank transfer all pay into an account held in the currency you spend, with nothing to convert afterwards and no wallet to look after.",
          "Crypto is the better option in three situations: the local rail is slow or closed, the amount is above the ceiling on that rail, or you want to hold the balance without currency risk. A stablecoin removes the exchange movement between the moment you request a payout and the moment it arrives, which matters where the local currency moves quickly.",
        ],
        bullets: [
          "Local rails — your own currency, no conversion afterwards, banking hours apply",
          "USDT TRC-20 — flat network fee, available at any hour, no exchange spread",
          "Crypto suits larger amounts and volatile local currencies",
          "Local rails suit routine weekly cashouts you intend to spend",
        ],
      },
      {
        heading: "RNG fairness and why it matters for payouts",
        paragraphs: [
          "Withdrawals depend on the chips you won at the table, and those results depend on the RNG dealing cards fairly. PPPoker's shuffle is server-side and certified by independent labs, which means neither the club host nor your agent can influence outcomes to reduce your balance before you cash out.",
          "If you suspect a hand was unfair, the hand history is stored and reviewable. Clubs can pull the log for any disputed hand and compare it against the RNG audit trail. A legitimate dispute about card distribution goes to the club manager, not to your agent — though a good agent will escalate it on your behalf.",
          "RNG fairness does not protect you from agent non-payment. The cards were fair, but if the agent refuses to process your withdrawal, that is a settlement dispute, not a game integrity issue. Keep hand histories and weekly statements as evidence for both types of problem.",
        ],
      },
      {
        heading: "Anti-collusion tools behind safe withdrawals",
        paragraphs: [
          "PPPoker's anti-collusion system monitors seating, chip movement and play patterns across the union. When two accounts consistently avoid each other or transfer chips in suspicious sequences, the platform generates an alert that the club host reviews before the next settlement cycle.",
          "For you as a withdrawer, this means your winnings came from legitimate play against unrelated opponents. Clubs that enforce anti-collusion rules actively protect the player pool, which keeps games beatable and withdrawals sustainable over time.",
          "If your account is flagged during a withdrawal request, do not panic — flags are often triggered by shared household IP addresses or playing with a friend at the same table. Contact your agent with the flag details and ask the club to review the log. Most false flags clear within one settlement cycle.",
        ],
      },
    ],
    faq: [
      {
        q: "Is there a withdrawal fee?",
        a: "No fee from Grand. Blockchain network fees apply on crypto withdrawals.",
      },
      {
        q: "Can I withdraw to a different method than I deposited with?",
        a: "Usually yes, but the first payout on a new method may trigger verification.",
      },
      {
        q: "How many withdrawals can I make?",
        a: "There is no limit on the number of requests.",
      },
      {
        q: "Can I withdraw part of my balance?",
        a: "Yes, partial withdrawals are the normal case. Most players take off the week's rakeback and anything above their working bankroll, and leave the rest in chips to play with.",
      },
      {
        q: "What if I withdraw while the welcome bonus is still unlocking?",
        a: "Whatever has already released is yours and is unaffected. The locked remainder is cancelled, so check how much is still pending before sending the request.",
      },
      {
        q: "Do I need documents?",
        a: "Only on larger amounts, and it varies by method. A light check applies to a first large payout on a given rail, and later payouts on the same method go through without repeating it.",
      },
    ],
  },

  "choose-reliable-agent": {
    intro:
      "In club poker your agent holds the money, so picking one is a bigger decision than picking a club. These are the checks worth doing before you send a first deposit anywhere, including to us.",
    sections: [
      {
        heading: "Check the public track record",
        paragraphs: [
          "Look for an agent with history on independent poker portals and forums rather than only a Telegram channel. Reputation that exists outside the agent's own channels is much harder to fake.",
          "Ask other players in the club directly. A long-running club will have regulars who have been through several payout cycles and will say plainly whether the cashier is reliable.",
          "Time in operation is the cheapest signal available. An agent who has settled every week for a couple of years has already been through the months where the players won and the payment still had to be made, which is the situation that breaks the fragile operations.",
        ],
      },
      {
        heading: "Get the terms in writing first",
        paragraphs: [
          "Before any chips are loaded you should have the rake structure, the rake cap, your rakeback percentage and the payout schedule in a message you can scroll back to.",
          "An agent who avoids writing those numbers down, or who changes them after you deposit, has told you everything you need to know.",
        ],
      },
      {
        heading: "Treat extreme offers as a warning",
        paragraphs: [
          "Rakeback advertised well above 60% is usually either a short promotional period presented as permanent, or a sign the operation is funding payouts from new deposits.",
          "The same applies to guaranteed win rates, bonus offers with no wagering conditions, or pressure to deposit a large amount immediately.",
          "The reason to be sceptical is arithmetic rather than suspicion. Rakeback is paid out of the agent's share of the rake, and the agent still has to cover its own costs from what is left. An offer that leaves nothing behind is either a short promotion or funded by something other than rake.",
        ],
      },
      {
        heading: "Start small and test the full cycle",
        paragraphs: [
          "Make a minimum deposit, play a short session, request a withdrawal and collect one rakeback payment. Only scale up after you have seen money move in both directions.",
          "This costs you a little time and nothing else, and it is the single most effective protection available in an unlicensed format.",
          "Run the test when you can watch it — a weekday inside working hours — because you are testing the normal case first. How an agent behaves late on a Sunday is worth knowing too, but it is a separate question rather than the one to start with.",
        ],
      },
      {
        heading: "Questions to ask before you deposit",
        paragraphs: [
          "The list below takes one message to send, and the answers tell you most of what you need. What matters is not only the content but the manner of the reply: specific numbers written plainly, or general reassurance and a change of subject.",
          "An agent who has answered these a hundred times will send the whole set back quickly, because it is already written down somewhere. Hesitation over the payout day or the dispute process is itself the answer to the question you asked.",
        ],
        bullets: [
          "What is the rakeback percentage, and what tiers exist above it?",
          "What is the rake percentage and the cap in big blinds at my stake?",
          "Which day is rakeback paid, and for which period?",
          "What are the deposit and withdrawal limits on my payment method?",
          "Are there any fees beyond the network fee on crypto?",
          "What happens if the club and I disagree about a hand or a balance?",
          "How long have you operated, and in which club and union?",
          "Which players or portals can vouch for you?",
        ],
      },
      {
        heading: "How to read a rakeback offer",
        paragraphs: [
          "The headline percentage is the least informative number in any offer. It is a share of a rake figure, and on its own it has not told you how that figure is produced. The same 55% can be worth very different amounts depending on the cap, the counting method and what the club treats as rake.",
          "Four things make a percentage comparable: the cap at your stake, whether rake is counted dealt or contributed, how often payment is made, and what conditions are attached. A rate that only applies above a volume you will not reach, or only during the first month, is a different product from a standing rate.",
          "Compare offers as the rake you keep per hundred hands at your stake rather than as percentages. Two clubs can quote 50% and 60% and leave you with the same amount, and the lower one can leave you with more.",
        ],
      },
      {
        heading: "What a normal payout cycle looks like",
        paragraphs: [
          "A healthy cycle is dull. Rake accumulates through the week, the club publishes the totals, the agent applies your percentage and pays on the same day every week, and a statement you can check arrives with it. Questions get answered in hours, and the numbers match what you were told before you deposited.",
          "The abnormal version has a recognisable shape. The payment slips by a day, then two. There is a reason each week and it is always external: the club is late, a provider is down, the manager is travelling. Amounts start arriving in parts, and statements either stop or come without a breakdown.",
          "One late payment with a clear reason and a firm new date is not a warning sign. A pattern of late payments with fresh reasons is, and the right response is to stop adding money and withdraw the balance while the conversation is still cordial.",
        ],
      },
      {
        heading: "If something goes wrong",
        paragraphs: [
          "Keep your own records from the first deposit: the terms you were quoted, receipts, transaction hashes, the weekly statements and the date each payout landed. The point is not to prepare for a dispute but to make one cheap to settle if it ever arrives.",
          "Escalate inside the structure first. The club manager sits above the agent and the union sits above the club, and both would rather resolve a complaint than have it aired. Approach them with dates and amounts rather than with an accusation, and ask what they need from you to look into it.",
          "Public reporting is the last step and only with evidence. A post with screenshots of the terms and the statements gets read; one without them is treated as noise, and it also spends the leverage you had, because there is nothing left for the other side to gain by settling.",
        ],
      },
      {
        heading: "Anti-cheating signals a reliable agent verifies",
        paragraphs: [
          "A reliable agent does more than process deposits — they verify that the club you are joining enforces anti-cheating rules. Ask whether the club reviews automated collusion flags, how quickly frozen accounts are investigated and whether chip-dumping reports are acted on within a settlement cycle.",
          "Red flags on the agent side include dismissing collusion concerns, refusing to escalate a freeze to the club manager or claiming that anti-cheating is purely the platform's problem. In club poker, the agent is your first line of defence, and a passive agent leaves you exposed.",
          "You can also check the PPPoker community forum for reports about specific clubs and unions. Patterns of unresolved collusion complaints are a stronger signal than any agent's marketing copy.",
        ],
      },
      {
        heading: "Fair play, RNG transparency and agent accountability",
        paragraphs: [
          "PPPoker publishes RNG certification details and audit summaries that any agent should be able to reference when you ask about game fairness. A reliable agent knows where to find these documents and can explain how hand-history disputes are escalated to the club level.",
          "Accountability goes beyond fairness. Your agent should provide weekly statements that itemise rake, rakeback, bonus release and any adjustments. Statements that arrive on the same day each week, with numbers that match what you see in the app, are the strongest trust signal in club poker.",
          "If an agent cannot explain the RNG audit process, does not provide itemised statements or changes settlement day without notice, those are reasons to look elsewhere before your first deposit — regardless of how high the advertised rakeback percentage is.",
        ],
      },
    ],
    faq: [
      {
        q: "What is the safest first deposit size?",
        a: "Keep it at the minimum, typically $10 to $50, until you have completed a full withdrawal.",
      },
      {
        q: "Does the club or the agent hold my money?",
        a: "The agent. The club runs the games; the agent settles with the club and with you.",
      },
      {
        q: "What if the agent stops responding?",
        a: "Escalate to the club or union management. This is why choosing a club with known management matters.",
      },
      {
        q: "Is an agent with only a Telegram channel safe?",
        a: "A channel is marketing rather than a record: it takes a minute to create and its subscriber count can be bought. Look for history somewhere the agent does not control the moderation, and for players who have been through several payout cycles and will say so under their own name.",
      },
      {
        q: "Is a bigger agent always safer?",
        a: "Size helps with liquidity, so large payouts and unusual hours are easier to handle. It says nothing about terms or record keeping. A smaller agent with two years of payments on time and everything in writing is a better risk than a large one with neither.",
      },
      {
        q: "Can I work with two agents at once?",
        a: "Not on one account, since an account carries a single Referral ID, and opening a second account to hold another referral breaks the one-account rule in most clubs. Even where two agents are possible across separate unions, splitting your volume puts both monthly totals in lower tiers and you keep less overall.",
      },
    ],
  },

  "how-to-download-pppoker": {
    intro:
      "PPPoker runs on iOS, Android and Windows, but the install route differs on each and the app is not available in every regional store. This guide covers all three, plus what to do when the store search comes up empty.",
    sections: [
      {
        heading: "iPhone and iPad",
        paragraphs: [
          "Search the App Store for PPPoker and install it as you would any app. The listing is published by PPPoker Ltd and the download is around 200 MB, so use Wi-Fi if you are on a metered plan.",
          "If the app does not appear in your search results, your store region does not carry it. Switching your Apple ID region is possible but it detaches your existing purchases and subscriptions, so most players in restricted regions use an Android device instead.",
          "Updates arrive through the store, so the client stays current with no action needed as long as automatic updates are on. The same account opens on an iPad, and the larger screen makes two tables comfortable in a way a phone does not.",
        ],
      },
      {
        heading: "Android",
        paragraphs: [
          "Google Play is the simplest route where the listing is available. Where it is not, PPPoker publishes a signed APK on its own site, and installing it requires allowing installs from your browser under Settings, Apps, Special access.",
          "Only take the APK from the official domain or the link on our download page. Repackaged builds circulating on forums and Telegram channels frequently carry credential stealers.",
        ],
        bullets: [
          "Check the package name is com.pppoker.android before installing",
          "Keep Play Protect enabled — it will still scan a sideloaded app",
          "Updates for a sideloaded APK are manual, so recheck monthly",
        ],
      },
      {
        heading: "Windows",
        paragraphs: [
          "The Windows client is a separate download from the PPPoker site and is the right choice if you plan to play more than two tables at once. It supports resizing and tiling that the phone app cannot.",
          "The desktop client and the mobile app share one account, so you can start a session on your phone and continue on a computer without any transfer step.",
          "One caveat: the desktop client updates through its own installer rather than a store, and clubs can require a minimum version. If the build is behind, you will be able to log in but not to take a seat until you reinstall from the site.",
        ],
      },
      {
        heading: "First launch",
        paragraphs: [
          "Register with a username and password — no email or phone verification is required. Then apply to Grand Club with our Club ID and enter the Referral ID so your account is linked to the agent who pays your rakeback.",
          "Entering the Referral ID at registration is the one step that is awkward to fix afterwards, so do it before you sit at your first table.",
          "While you are in the profile screen, note the numeric PPPoker ID the app has assigned you. The cashier identifies you by that number rather than by your nickname for deposits, payouts and diamond delivery.",
        ],
      },
      {
        heading: "Keeping the app updated",
        paragraphs: [
          "On iOS, and on Android where the Play listing is available, updates arrive through the store and need nothing beyond leaving automatic updates enabled. A sideloaded APK is different: nothing announces a new build, so check the official site about once a month or whenever the app starts behaving oddly.",
          "Clubs and unions can require a minimum client version, usually after a change to the game engine or the anti-collusion tooling. When your build is behind that minimum you can still log in, but the app will not seat you and shows an update prompt rather than an explanation.",
          "Update in place instead of uninstalling first. Removing the app does not delete your account, but it clears local settings, table filters and favourites, and on a sideloaded build you have to grant install permission to your browser again.",
        ],
      },
      {
        heading: "Troubleshooting install and login problems",
        paragraphs: [
          "Most failures come down to a short list of causes, each with a visible symptom. Storage is the first thing to check, because the download and the unpacked install together need roughly twice the listed size while the install is running.",
          "The message that the app is not compatible with your device almost always means the store region rather than the hardware, and the same phone installs the official APK without complaint. A login that hangs on a spinner points at the network instead of the account, so mobile data makes a useful test: some office and campus networks block the ports the client uses.",
        ],
        bullets: [
          "Not enough storage — free about twice the download size, then retry",
          "App missing from search — a store region restriction, not a device problem",
          "\"Not compatible\" on Android — same cause, use the official APK",
          "Installs but crashes on launch — a corrupted download, reinstall from the source",
          "Login spinner that never resolves — try mobile data, then another network",
          "Password rejected — there is no email reset, so message the cashier rather than opening a second account",
        ],
      },
      {
        heading: "Battery, data and connection",
        paragraphs: [
          "A session costs roughly 20 to 40 MB an hour, so mobile data is perfectly usable and the initial 200 MB download is the part worth doing on Wi-Fi. Battery is the tighter constraint, because the table view holds the screen on, and a long session on a phone will want a charger.",
          "Stability matters more than speed. The client only sends your actions and receives the table state, so a slow but steady connection plays better than a fast one that drops for a few seconds at a time. Switching between Wi-Fi and mobile data mid-hand forces a reconnect, which is worth avoiding while you have money in a pot.",
          "A VPN that changes your apparent country creates friction rather than protection. Location data is part of the club's anti-collusion checks, and an account that appears from a different country each session gets flagged for review. If you genuinely need one, tell the cashier which country you play from so the pattern is on record.",
          "Disconnect handling is a club setting rather than a fixed rule of the app. Some clubs enable protection that treats your hand as all-in for the chips already committed; where it is off, the hand folds when the timer expires. Check which applies in your club before relying on it.",
        ],
      },
      {
        heading: "Setting up the Windows client for multi-tabling",
        paragraphs: [
          "The desktop client earns its install as soon as you play more than two tables. Tables can be resized and positioned freely, so a tiled layout on a 1920 by 1080 screen holds four comfortably and six at a squeeze, with the action visible on each rather than swapped in and out.",
          "Arrange the layout before the session rather than during it. Put the tables where you will look for them, keep the same positions every session so the habit transfers, and leave room for the club lobby if you are working waiting lists.",
          "Because the desktop client and the phone share one account, a common setup is the computer for the session and the phone for the lobby and the cashier conversation. The one thing to avoid is opening the same table on both, since an account holds a single seat and the second login takes it over.",
        ],
      },
      {
        heading: "The Windows PC client for serious volume",
        paragraphs: [
          "The PPPoker Windows client is the tool regulars use once they move past casual mobile play. It supports four to six tables on a single 1080p screen with free resizing and tiling, and the action on every table stays visible instead of being swapped in and out like on a phone.",
          "Installation is a direct download from the official PPPoker site rather than the Microsoft Store. Run the installer, log in with the same account you use on mobile, and your club memberships, chip balances and hand histories sync immediately.",
          "The desktop client shares one login with mobile, so a common setup is the PC for the session and the phone for the lobby and cashier chat. Avoid opening the same table on both devices — the second login takes over the seat and can time you out on the first.",
        ],
      },
      {
        heading: "Recent visual upgrades across mobile and desktop",
        paragraphs: [
          "PPPoker has rolled out a series of visual refreshes that modernise the table layout, card animations and lobby navigation without changing how the underlying club model works. Tables now render with cleaner chip stacks, smoother dealing animations and optional 3D card squeeze on supported devices.",
          "The lobby received a redesign that groups games by format and stake range, making it faster to find an open PLO5 table at your level instead of scrolling through every active room in the club. Filter presets let you save a favourite search — for example NLH 1/2 with a full table — and reopen it in one tap.",
          "Theme packs purchased with diamonds let you customise felt colour, card backs and table frames. These are cosmetic only and do not affect gameplay, but they make long sessions easier on the eyes and help you distinguish tables quickly when multi-tabling.",
        ],
      },
    ],
    faq: [
      {
        q: "Is the APK safe to install?",
        a: "The one published on the official PPPoker site is. Builds from third-party mirrors are not, and are the most common source of stolen club accounts.",
      },
      {
        q: "Can I play on Mac?",
        a: "There is no native Mac client. Players on macOS either use the iOS app on an iPhone or run the Windows client through Parallels or CrossOver.",
      },
      {
        q: "How much data does a session use?",
        a: "Roughly 20-40 MB per hour of play. The initial download is the heavy part, not the games themselves.",
      },
      {
        q: "Can I use one account on two devices?",
        a: "Yes, the account opens on any device you log into and switching mid-session is supported. What you cannot do is sit at the same table from two devices, because the account holds one seat and the second login takes over.",
      },
      {
        q: "Does a VPN risk my account?",
        a: "A VPN is not prohibited, but a location that changes between sessions looks like a shared account to the club's checks and draws a review. That means questions, and possibly a payout held until they are answered, so tell the cashier in advance if you need one.",
      },
      {
        q: "The app says the version is outdated — what now?",
        a: "Update through the store on iOS and on Android where the Play listing exists. On a sideloaded install, download the current APK from the official site and install it over the old one. On Windows, run the installer from the PPPoker site again.",
      },
    ],
  },

  "club-id-explained": {
    intro:
      "Every PPPoker player deals with two numbers, and mixing them up is the most common reason a new player ends up without rakeback. The Club ID gets you into the games; the Referral ID decides who pays you.",
    sections: [
      {
        heading: "What the Club ID does",
        paragraphs: [
          "The Club ID is the public address of a club inside the app. You enter it under Club, Join Club, and it sends an application to that club's managers. Nothing about your money is attached to it.",
          "Because PPPoker has no global lobby, the Club ID is the only way to find a specific room. Clubs publish theirs openly, which is why you see it on every legitimate club's site, including ours.",
          "A Club ID is not sensitive and cannot be used against you. It identifies a room rather than an account, which is why publishing it is how clubs recruit in the first place, and why a room that will not give you its ID before you deposit is one you have no way to check.",
        ],
      },
      {
        heading: "What the Referral ID does",
        paragraphs: [
          "The Referral ID identifies the agent your account belongs to. It is the field that determines who processes your deposits and withdrawals and whose rakeback table applies to your volume.",
          "One agent can serve players across several clubs, and one club can contain players from many agents. That is why the two IDs are separate and why being in the right club does not automatically mean being under the right agent.",
          "The field is only shown while you are applying to a club. Once the application is sent, the referral is stored against your account and is not displayed again anywhere in the app, so it is worth asking the cashier to confirm you were recorded under the right one.",
        ],
      },
      {
        heading: "Why both matter for your rakeback",
        paragraphs: [
          "Rakeback is calculated from the rake generated by players under a given Referral ID. If the field was left blank, your rake still goes to the club, but no agent is on record as owing you a share of it.",
          "This is not a bug or a scam — it is simply how the accounting works. It also means that an agent cannot credit you retroactively for volume generated before the link existed.",
          "The tier calculation runs on the same link. Monthly rake is summed across the accounts under one Referral ID, so volume played elsewhere sits in a separate record and can leave both totals below a threshold that the combined figure would have cleared.",
        ],
      },
      {
        heading: "Fixing a missing or wrong referral",
        paragraphs: [
          "If you registered without a Referral ID, message the cashier before you play. Reassignment is usually possible on a fresh account, though it requires the club manager to action it and can take a day.",
          "If you have already played significant volume under another agent, a transfer normally requires that agent's agreement. Sorting this out at registration takes thirty seconds; sorting it out later can take a week.",
        ],
        bullets: [
          "Club ID — where you play",
          "Referral ID — who pays you",
          "Both are entered in the app, not on any website",
        ],
      },
      {
        heading: "Where to find both IDs in the app",
        paragraphs: [
          "Both are entered on the same screen. Open the Club tab, choose Join Club, and the form asks for the Club ID first, with the Referral ID field directly beneath it. Nothing is typed into a website, and any page that asks you to enter either ID into a web form is not part of the process.",
          "There are in fact three numbers in play rather than two. The Club ID belongs to a room and is published openly. The Referral ID belongs to an agent and is given to you by that agent. Your own profile ID belongs to your account and is shown beside your nickname in the profile screen.",
        ],
        bullets: [
          "Club ID — published by the club, entered under Club, Join Club",
          "Referral ID — supplied by the agent, entered below the Club ID on the same screen",
          "PPPoker ID — your own account number, found in the profile screen",
        ],
      },
      {
        heading: "Your PPPoker ID and why the cashier asks for it",
        paragraphs: [
          "The PPPoker ID identifies you rather than the room or the agent. It is assigned at registration, it does not change, and it is what the cashier works from when loading chips, sending a payout or delivering diamonds to the right account.",
          "Nicknames are the reason the ID matters. Two players in a large union can register very similar names, and a nickname can be written half a dozen ways in a chat message, whereas a mistyped number matches nobody at all while a mistyped nickname often matches somebody.",
          "It is safe to share with the cashier and the club, and opponents see it at the table in any case. It is not a password and it gives nobody access to your account, so there is no reason to hold it back when it is asked for during a deposit.",
        ],
      },
      {
        heading: "What your agent can and cannot see",
        paragraphs: [
          "An agent sees the reports the club produces: rake generated per player, hands played, the period each figure falls into and the balance owed at settlement. That is the data the whole rakeback calculation runs on, and you can ask for your own copy of it at any time.",
          "What an agent does not see is the game. Hole cards, table chat and your hand-by-hand results are not in those reports, and no agent has a live view of a table beyond what any observer has. Club managers hold wider access for anti-collusion review, and it is used on hand histories after the fact rather than during play.",
          "The distinction matters when someone offers information as a service. An agent claiming to know how a particular opponent plays, or which tables are soft at this moment, is describing access that the reporting does not include.",
        ],
      },
      {
        heading: "Joining a second club without losing your agent",
        paragraphs: [
          "The referral is stored against your account rather than against a club, so joining a second room under the same agent does not start a second relationship. Enter the new Club ID, leave the referral as it is, and both clubs report into one record.",
          "The benefit is a single monthly rake total instead of two. Volume from every club under that referral is added together, which keeps you at the tier your total earns rather than splitting it between two smaller figures, and settlement still arrives as one weekly payment.",
          "Joining a club that requires its own referral is the case to think about. An account carries one Referral ID, so either the new club's rake reports to your existing agent or you would need a second account, which most clubs do not permit.",
        ],
      },
      {
        heading: "Multi-tabling once you are inside a club",
        paragraphs: [
          "A Club ID gets you into the lobby, but multi-tabling is what lets you use that access efficiently. On the Windows client you can run four to six cash tables simultaneously with each table visible at once, which is how regulars generate the volume that earns higher rakeback tiers.",
          "Mobile supports up to two tables in practice: the app displays one table at a time and lets you swap between them with a tap. That is enough for recreational play but not for players who need thirty or more hours a week to hit a volume target.",
          "Before adding tables, confirm the club allows the number you plan to open. Some rooms cap multi-tabling at four, and a few high-stakes games require a single-table seat. The table info panel shows any restriction before you sit down.",
        ],
      },
      {
        heading: "Table themes and personalising your interface",
        paragraphs: [
          "Once you are seated, PPPoker lets you change how the table looks without affecting the game itself. Theme packs — purchased with diamonds or earned through promotions — swap the felt colour, card back design and table frame to match your preference.",
          "Themes matter most when you multi-table. Assigning a distinct colour to each stake level or format helps you spot which table needs action at a glance instead of reading the title bar on every tile. Many regulars use a bright felt on their main stake and a muted one on secondary tables.",
          "The 3D Card Squeeze option, available on supported devices, adds a tactile reveal animation when you look at hole cards. It is purely cosmetic but popular among players who want a live-poker feel on a screen. You can toggle it in table settings without leaving your seat.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I be in two clubs at once?",
        a: "Yes. PPPoker lets you join several clubs from one account, and your Referral ID stays with your account rather than with any single club.",
      },
      {
        q: "Does anyone else see my Referral ID?",
        a: "Only your agent and the club managers. It is not shown at the table and other players cannot look it up.",
      },
      {
        q: "What if the club rejects my application?",
        a: "Message the cashier with your PPPoker nickname. Applications without a known referral are sometimes held for review rather than rejected outright.",
      },
      {
        q: "Can I change my Referral ID later?",
        a: "On a fresh account with no volume, yes — the club manager can reassign it, usually within a day. Once you have played meaningfully under one agent it needs that agent's agreement and is handled as a transfer rather than a correction.",
      },
      {
        q: "Is my PPPoker ID the same as my nickname?",
        a: "No. The nickname is text you chose; the ID is a fixed number assigned at registration. The cashier works from the ID because a wrong number matches nobody, while a wrong nickname can match another player.",
      },
      {
        q: "Do I need the Club ID every time I log in?",
        a: "No. It is used once, when you apply to join. After approval the club sits in your club list and you open it from there.",
      },
    ],
  },

  "welcome-bonus-terms": {
    intro:
      "Grand's welcome bonus matches your first deposit 100%. That headline is simple, but the part worth reading is how the bonus is released, because it converts to withdrawable balance as you play rather than landing as cash.",
    sections: [
      {
        heading: "How the match works",
        paragraphs: [
          "Deposit any amount from the minimum upward and the same amount is credited as bonus, up to the cap published on the bonuses page. A 200 deposit becomes 200 in chips plus 200 in pending bonus.",
          "Your deposit is available immediately and is yours to withdraw at any time. Only the bonus portion carries a release condition.",
          "The cap applies to the bonus rather than to the deposit. Send more than the cap and the whole amount still arrives as chips; only the matched part stops growing. The cashier confirms the current cap and the length of the release window before you transfer anything.",
        ],
      },
      {
        heading: "How the bonus is released",
        paragraphs: [
          "The bonus unlocks in increments as you generate rake, which means it is paid for by play rather than gifted upfront. Each portion that unlocks is added to your withdrawable balance in the weekly settlement alongside your rakeback.",
          "There is no requirement to win, and losing sessions still generate rake, so the bonus continues to release regardless of results. The only thing that stops it is not playing.",
          "Cash games and tournaments both count, measured the same way as they are for your tier: contributed rake on cash pots and the entry fee at face value on tournaments. Splitting your time between formats does not slow the release down.",
        ],
      },
      {
        heading: "The release window",
        paragraphs: [
          "The unlock period runs for a fixed number of days from the deposit. Anything still locked at the end of that window expires, so the bonus is worth taking at a deposit size that matches the volume you actually expect to play.",
          "If you play a few hours a week, a smaller deposit that releases fully is better value than a large one that expires half-unlocked. The cashier will tell you the rake needed for a given amount before you deposit.",
        ],
        bullets: [
          "Deposit is withdrawable from the start",
          "Bonus releases against rake, settled weekly",
          "Unreleased bonus expires at the end of the window",
        ],
      },
      {
        heading: "What voids the bonus",
        paragraphs: [
          "Chip transfers between accounts, seating arrangements with a partner and any form of collusion void the bonus and typically the account. Clubs review hand histories, and these patterns are visible in the data.",
          "Withdrawing before the window closes cancels whatever is still locked. Partial withdrawals are fine — only the unreleased remainder is affected.",
        ],
      },
      {
        heading: "Choosing the right deposit size",
        paragraphs: [
          "Because the bonus releases against rake, the right deposit is decided by the volume you will actually play inside the window rather than by the amount you can afford to send. A deposit that releases in full is worth more than a larger one that expires half-unlocked.",
          "Work it out instead of guessing. Ask the cashier what rake is needed to release the amount you are considering, then estimate your own rake over the window from the stake you play and the hours you genuinely put in each week. If your estimate sits comfortably above the requirement, the size is right; if the two are close, take less.",
          "The tier thresholds make a quick calibration. A player whose monthly rake reaches the Silver threshold of 200 has a known rate of generation, and one who reaches Gold at 1,000 produces five times as much in the same month. Placing yourself on that scale is faster than counting hands per hour.",
        ],
        bullets: [
          "Ask the cashier what rake releases the amount you are considering",
          "Estimate your rake in the window from your stake and the hours you really play",
          "Choose the deposit where the estimate is comfortably above the requirement",
        ],
      },
      {
        heading: "Tracking your progress",
        paragraphs: [
          "Two records show where you stand. The cashier's report gives your rake for the period on request, and the weekly statement shows what was released and paid alongside your rakeback. Between them you can see both the input and the output rather than inferring one from the other.",
          "Check in the first week rather than at the end. If your rake is running below the pace needed to release the whole bonus, the useful responses — more hours, a different format, or accepting a partial release — are all still available with most of the window left.",
          "The app's own statistics are a different thing. The client shows hands and results; the rake attributed to you for settlement comes from the club's reporting, and that is the figure the release is calculated from.",
        ],
      },
      {
        heading: "Reload bonuses after the welcome",
        paragraphs: [
          "Reloads are the recurring version of the same mechanism. The match percentage is lower than the welcome bonus, the release still runs against rake and the window still applies, so everything you worked out for a first deposit size carries over unchanged.",
          "They are announced on the bonuses page and by the cashier rather than being permanently available. A reload is worth taking when it lands on a stretch where you were going to play the volume anyway, and worth skipping when it would pull a deposit forward into a quiet month.",
          "If a welcome bonus is still unlocking, ask the cashier how a reload interacts with it before depositing, since the two release windows would otherwise overlap.",
        ],
      },
      {
        heading: "How the bonus stacks with rakeback and your tier",
        paragraphs: [
          "Three separate streams can run at the same time, and none of them reduces the others. Rakeback returns a percentage of your rake at your tier rate. Bonus release converts pending bonus into withdrawable balance as rake accumulates. Tier benefits such as freerolls and leaderboard seeding sit on top of both.",
          "All of it settles in one weekly payment, which is why the statement itemises the lines separately. The bonus line ends when the window closes; the rakeback line continues for as long as you keep playing.",
          "What the bonus does not do is move your tier. Tiers are set by rake alone, so a large deposit with a large matched bonus leaves you exactly where a small deposit would, and volume remains the only route upward.",
        ],
        bullets: [
          "Rakeback — a percentage of your rake at your tier rate, weekly",
          "Bonus release — pending bonus converted to withdrawable balance as rake accrues",
          "Tier benefits — limits, priority handling and freeroll access where the tier includes them",
          "All three paid together each week and itemised in the statement",
        ],
      },
      {
        heading: "SpinUp play and bonus contribution",
        paragraphs: [
          "Most welcome bonus structures count rake from every format toward the release requirement, and SpinUp tournaments are no exception. Each SpinUp buy-in generates rake that converts pending bonus into withdrawable balance at the rate specified in your offer terms.",
          "SpinUps are efficient for bonus clearing because they complete quickly — a twenty-minute session of ten one-dollar SpinUps can generate as much releasable rake as an hour of single-table NLH at the same total buy-in. The trade-off is variance: you may bust every spin and still have cleared meaningful bonus volume.",
          "Check whether your specific offer weights SpinUp rake at 100% or a reduced rate. Some promotions count only cash game rake toward release, which makes SpinUp play irrelevant for clearing even though it still earns standard rakeback.",
        ],
      },
      {
        heading: "Multi-table volume and clearing your welcome offer",
        paragraphs: [
          "Welcome bonus release is tied to rake generated, and rake is tied to hands played. Multi-tabling on the Windows client is the most efficient way to generate the volume a typical welcome offer requires without spending months at a single table.",
          "A practical target for clearing a standard welcome bonus is four NLH tables at your regular stake for two to three hours a day, five days a week. That pace typically clears a mid-range offer within three to four weeks, depending on the release ratio in your terms.",
          "Mobile play counts toward release but at a fraction of the speed. If your offer has a time limit — common on first-deposit bonuses — plan to use the desktop client for the clearing period even if you normally play on your phone.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I combine it with rakeback?",
        a: "Yes. Rakeback runs on your normal tier schedule and the bonus releases on top of it. They are settled in the same weekly payout.",
      },
      {
        q: "Is there a minimum deposit?",
        a: "Yes, and it varies by payment method. Local rails have a lower floor than USDT. The cashier confirms the current numbers before you send anything.",
      },
      {
        q: "Can I get it twice?",
        a: "The welcome bonus is once per player. Reload bonuses are the recurring equivalent and run at a lower match percentage.",
      },
      {
        q: "Does tournament rake release the bonus too?",
        a: "Yes. Tournament fees count at face value, exactly as they do toward your tier, so a schedule built around tournaments releases a bonus as effectively as cash game volume.",
      },
      {
        q: "What happens to the bonus if I change agent?",
        a: "Release stops with the referral the bonus was granted under. Anything already released stays in your balance, but the pending remainder does not follow you to a new agent, which is a good reason to finish a window before arranging a transfer.",
      },
      {
        q: "Can I claim it on a second account?",
        a: "No. It is one welcome bonus per player, and a second account voids the bonus on both and usually the accounts with it. Clubs match accounts on device and payment details, so it is not a risk worth taking.",
      },
    ],
  },

  "vip-program-guide": {
    intro:
      "Grand's VIP program has five tiers, and the only thing that moves you between them is monthly rake. There are no points to buy, no subscription and no manual application — the tier is recalculated from your volume each month.",
    sections: [
      {
        heading: "The five tiers",
        paragraphs: [
          "Bronze starts at 45% rakeback with no volume requirement. Silver begins at 200 in monthly rake and pays 50%. Gold begins at 1,000 and pays 55%. Platinum begins at 3,000 and pays 58%. Diamond begins at 10,000 and pays 60%.",
          "The thresholds are measured in rake you generate, not in money deposited or won. A losing month at high volume reaches a higher tier than a winning month at low volume.",
          "The gaps between those thresholds are not even. Silver is a modest month, Gold at 1,000 is five times Silver, and Platinum at 3,000 is three times Gold. Diamond at 10,000 is a different scale of play — serious hours, often across several tables. The rate you are paid this month was set by last month's total; this month's rake is what next month's rate is calculated from.",
        ],
        bullets: [
          "Bronze — no minimum, 45%",
          "Silver — 200 rake, 50%",
          "Gold — 1,000 rake, 55%",
          "Platinum — 3,000 rake, 58%",
          "Diamond — 10,000 rake, 60%",
        ],
      },
      {
        heading: "How rake is counted toward a tier",
        paragraphs: [
          "Cash game rake is counted by the contributed method: you are charged a share of the pot only when you have put money in it, and folding preflop costs you nothing toward the rake total.",
          "Tournament fees count too, at their face value. Rake generated across every table and format in the club adds into one monthly figure, so splitting your time between cash and MTTs does not split your progress.",
          "Deposits, bonuses, diamond purchases and results do not enter the figure at all. The monthly total is the sum of the weekly rake reports the club already produces for settlement, so the number you can ask the cashier for is the number the tier is read from.",
        ],
      },
      {
        heading: "What each tier adds beyond the percentage",
        paragraphs: [
          "Higher tiers shorten the payout cycle and raise withdrawal limits, which matters more than the extra percentage points once you are playing regularly. Gold and above get priority handling from the cashier.",
          "Platinum and Diamond also come with freeroll access, leaderboard seeding and a dedicated manager rather than the shared cashier queue. Diamond players are consulted on stake and format changes in the club.",
          "None of those extras requires an application. When the monthly calculation places you in Gold, priority handling is already in place; when it places you in Platinum, the dedicated manager is assigned. The percentage remains the largest cash effect at every tier. The operational extras start to matter once you are moving real volume and the gap between adjacent rates is two or three points rather than ten.",
        ],
      },
      {
        heading: "Keeping your tier",
        paragraphs: [
          "Tiers are evaluated monthly, and a drop in volume moves you down one level rather than resetting you to Bronze. That means a quiet month costs you a few percentage points, not your whole standing.",
          "The rakeback page has a calculator that converts your stake and hours into an expected monthly rake figure, which is the fastest way to see which tier is realistic for your schedule.",
          "Crossing a threshold does not consume the rake that got you there. A month that has already cleared Gold at 1,000 keeps accumulating toward Platinum at 3,000, and the same is true of every other boundary. The useful habit is to know which threshold you are actually near, so extra hours are spent on a tier you can reach rather than on one that is still several times your current volume.",
        ],
      },
      {
        heading: "A month, worked through",
        paragraphs: [
          "A month of VIP accounting has four steps, and they always run in the same order. The stake you play and the hours you sit determine how much rake you generate. That monthly total is read against the published thresholds. The threshold you have cleared sets the percentage. That percentage is then applied to each week's rake and paid on the weekly settlement day.",
          "Work it from a published number rather than from a guess. A month that produces 1,000 of rake is Gold, so 55% applies — 550 returned across the weekly settlements rather than as a lump at month end. A month that produces 200 is Silver at 50%. A month that produces 3,000 is Platinum at 58%. The same arithmetic applies at Diamond: 10,000 of rake, 60% of each week's figure.",
          "The calculator on the rakeback page is how you put your own schedule into that chain. It takes the games you play and the hours you actually sit, and returns an expected monthly rake you can read against 200, 1,000, 3,000 and 10,000. The output is a tier you can plan the next month around, not a surprise when the first settlement of the new month arrives.",
        ],
        bullets: [
          "Stake and hours determine the monthly rake",
          "Monthly rake is read against 200, 1,000, 3,000 and 10,000",
          "The threshold you clear sets the percentage for the following month",
          "That percentage is applied to each week's rake and paid on settlement day",
        ],
      },
      {
        heading: "How the tier interacts with bonuses and freerolls",
        paragraphs: [
          "The VIP tier has one job: it sets the rakeback percentage applied to your rake. Everything else that arrives in the weekly settlement — a welcome or reload bonus releasing against that same rake, a freeroll win, a leaderboard prize — sits in a separate line and does not feed back into the tier calculation.",
          "That separation works in both directions. A large matched bonus on a first deposit does not move you to Gold; only the rake you generate while playing those chips does. Clearing Gold does not increase the bonus match or shorten the release window. Freeroll seats and leaderboard seeding are attached to Platinum and Diamond as extras, and they are credited as winnings or as tournament entries, not as rake.",
          "All of it still lands in one weekly payment, itemised. The rakeback line uses the tier rate; the bonus line uses the release rules; a freeroll cashout is just a tournament result. Mixing them together in your head makes the next month's tier look more mysterious than it is.",
        ],
      },
      {
        heading: "Moving up without moving up in stakes",
        paragraphs: [
          "Jumping limits raises the rake you pay, because the cap is quoted in big blinds and therefore scales with the stake. It does not raise the tier thresholds, which are fixed amounts. The result is that a move up in stakes can produce more rake while leaving you in the same tier, and it does so at the cost of a larger swing relative to your roll.",
          "Volume at a stake you already handle is the more reliable route. Hours, a second table, and formats that see more hands per hour all increase the monthly total without changing the big blind. Session length matters more than most players expect: a large share of any sitting is spent waiting for a seat, so three short sessions produce less rake than one continuous block of the same total time.",
        ],
        bullets: [
          "Add hours at your current stake before adding a stake level",
          "Add a second table rather than a higher limit",
          "Prefer formats with more hands per hour and more multiway pots",
          "Prefer fewer, longer sessions over many short ones",
          "Keep all volume under one Referral ID so it sums to a single monthly total",
        ],
      },
      {
        heading: "What the dedicated manager actually does",
        paragraphs: [
          "Platinum and Diamond replace the shared cashier queue with a named manager. The job is operational rather than ceremonial, and it is most visible on the three things that otherwise wait in a queue: payouts, table requests, and disputes.",
          "Payout scheduling is the everyday use. A large or awkwardly timed withdrawal is arranged in advance instead of sitting behind the standard ceiling, and the manager already knows the rail you use. Table and stake requests go the same way: if a limit is short of a seat or a format is missing from the schedule, the manager takes it to the club rather than leaving you to post in a group chat.",
          "The third function is dispute handling. When a hand, a balance or a rake figure needs to be raised with the club, the manager already has the account on file and the weekly reports in hand, so the question arrives as a specific case rather than as a new conversation. That is also why the manager is assigned by the monthly calculation rather than by request — the relationship only works if it is continuous.",
        ],
      },
      {
        heading: "VIP table themes and cosmetic rewards",
        paragraphs: [
          "Higher VIP tiers in PPPoker clubs often unlock exclusive table themes — custom felts, card backs and avatar frames that are not available in the standard diamond shop. These are cosmetic rewards tied to your monthly volume rather than purchases, which makes them a visible marker of tier status at the table.",
          "Themes do not change gameplay, but they serve a practical purpose when you multi-table. Assigning a tier-exclusive felt to your main stake tables lets you spot which tiles need attention without reading every title bar. Several Grand Club VIPs use gold felt on primary tables and the default green on secondary ones.",
          "If your tier includes a theme reward, it is usually delivered automatically at the start of each qualifying month. Check the promotions tab in the app rather than the diamond shop, because tier themes are account-bound and cannot be transferred or gifted.",
        ],
      },
      {
        heading: "Visual upgrades reserved for high-volume players",
        paragraphs: [
          "PPPoker periodically releases visual upgrades — redesigned lobbies, smoother animations, new card squeeze effects — that are available to all players but optimised for the multi-table desktop experience that VIPs use daily. Recent updates include cleaner chip stack rendering and faster table-switching on the Windows client.",
          "VIP tiers sometimes get early access to new visual features before they roll out globally. A new theme pack or animation style may appear in the promotions tab for Platinum and Diamond members a week before it hits the general diamond shop.",
          "These upgrades are worth noticing because they affect session comfort rather than edge. A player running six tables for four hours benefits more from a smoother interface than a casual mobile player, which is why visual improvements tend to land on desktop first.",
        ],
      },
    ],
    faq: [
      {
        q: "When is rakeback paid?",
        a: "Weekly, on a fixed day, for the rake generated in the preceding week. Your tier percentage for the month applies to each of those payments.",
      },
      {
        q: "Does the tier reset if I skip a month?",
        a: "You move down one tier, not to the bottom. Returning to the previous volume restores the tier the following month.",
      },
      {
        q: "Do tournaments count?",
        a: "Yes. Tournament fees are added to your monthly rake total at face value, alongside cash game rake.",
      },
      {
        q: "Can I see my current monthly rake?",
        a: "Yes. Ask the cashier for the report — it is the same weekly and monthly totals the tier is calculated from, and it can be sent at any point in the month rather than only at settlement.",
      },
      {
        q: "Is the tier per club or per agent?",
        a: "Per agent. Monthly rake is summed across every club you play in under the same Referral ID, so volume in a second club counts toward the same tier rather than starting a separate total.",
      },
      {
        q: "Do bonuses count toward the tier?",
        a: "No. Only rake counts — contributed cash-game rake and tournament fees at face value. A matched bonus, a reload and a diamond purchase do not move the monthly figure at all.",
      },
    ],
  },

  "diamonds-guide": {
    intro:
      "Diamonds are PPPoker's in-app currency. They are not chips and cannot be played with, but they pay for the things around the game — tournament entries in some clubs, club creation, gifts and the VIP card. Here is what they cost and how to avoid overpaying.",
    sections: [
      {
        heading: "What diamonds are actually for",
        paragraphs: [
          "Diamonds buy the VIP card, which removes ads and unlocks statistics and profile features inside the app. They also cover the fee for creating a club, and in some unions they are used for tournament buy-ins and side events.",
          "They cannot be converted into chips by the app, and no legitimate agent claims otherwise. Anyone offering a direct diamond-to-chip exchange rate inside PPPoker is describing something the platform does not support.",
          "The balance lives on your PPPoker account, not in the club. Diamonds bought for a VIP card or a union event stay with you if you later join a second club on the same account, and they cannot be withdrawn as chips through the cashier the way a club balance can.",
        ],
      },
      {
        heading: "Pack sizes and pricing",
        paragraphs: [
          "The standard packs run 780 diamonds at 12.99, 3,900 at 59.99, 7,800 at 109.99 and 48,000 at 649. The larger packs carry a better per-diamond rate, which is the whole basis of the discount structure.",
          "Buying through the Grand cashier applies a further discount on the three larger packs — 5% on the 3,900, 10% on the 7,800 and 15% on the club owner pack — because the purchase goes through the club rather than the app store.",
          "The 780 pack is the one a player buys for a VIP card or a small in-app purchase, and it is also the one with no cashier discount. The 48,000 pack is sized for club creation; a player who only needs the VIP card has no use for it. The two middle packs, 3,900 and 7,800, are the ones that make sense if you are covering repeated in-app costs rather than a one-off card, because the cashier discount only starts at 3,900.",
        ],
        bullets: [
          "780 — 12.99, no discount",
          "3,900 — 59.99, 5% off through the cashier",
          "7,800 — 109.99, 10% off through the cashier",
          "48,000 — 649, 15% off through the cashier",
        ],
      },
      {
        heading: "Buying through the cashier rather than the store",
        paragraphs: [
          "An in-app purchase goes through Apple or Google and carries their platform fee, which is why the same pack costs more there. Ordering through the cashier settles in the same payment rails you already use for deposits, including USDT and local transfers.",
          "Delivery is manual and usually lands within the hour during working hours. You send the pack size and your PPPoker ID, and the diamonds arrive on your account.",
          "Send the numeric PPPoker ID, not your nickname — delivery is attached to the account number, and a nickname that has been changed or duplicated will delay it. Outside working hours the order waits until the cashier is next open; there is no automated drop from a store receipt. If you are buying ahead of a specific event, order during the day rather than the evening before.",
        ],
      },
      {
        heading: "Selling diamonds back",
        paragraphs: [
          "Grand buys back unused diamonds at a published rate, which is useful if you bought the club owner pack and no longer run a club. The buyback rate is below the purchase rate — that spread is how the service pays for itself.",
          "Buyback is credited to your chip balance or paid out with your weekly settlement, whichever you prefer. There is a minimum quantity, so it is not worth doing with small leftovers.",
          "Buyback is a Grand service, not a PPPoker feature, which is why the rate is published by the cashier rather than shown in the app. Confirm the current rate and the minimum quantity before you send anything, because both can move, and because diamonds sitting on the account are not automatically in a buyback queue — you still have to request it.",
        ],
      },
      {
        heading: "The VIP card in detail",
        paragraphs: [
          "The VIP card is an in-app purchase paid in diamonds. It removes the advertisements that otherwise sit between tables, and it unlocks the statistics and profile features the free client leaves out: longer history, more detailed leak-finding stats, and the cosmetic profile options that some regulars care about and others never open.",
          "It runs for a fixed period and then lapses, rather than remaining on the account until you turn it off. When it expires the ads return and the extra statistics drop back to the free set; the diamonds you spent are gone, and a new card is a new purchase. The period is visible on the purchase screen in the app before you confirm.",
          "Whether it is worth the diamonds depends on how often you open the client. A daily player who actually reads the statistics gets the value back in information and in not seeing ads between every table. A player who sits a few sessions a week is paying mostly for ad removal, which on its own rarely covers the cost of even the smallest pack.",
        ],
        bullets: [
          "Ad removal between tables",
          "Extended statistics and hand history the free client hides",
          "Profile features that are otherwise locked",
          "Lasts a fixed period, then must be renewed",
        ],
      },
      {
        heading: "Diamonds for club owners",
        paragraphs: [
          "Creating a club on PPPoker is paid in diamonds, and so are some of the running costs of keeping it open — table slots, union fees where they apply, and the decorations and notices owners put in the lobby. That is a different use from anything a player buys, and it is the reason the 48,000 pack exists.",
          "Owners are the main buyers of that pack because the creation fee alone is a large diamond figure, and because a club that stays open keeps spending. The 15% cashier discount on 48,000 is aimed at that purchase; it is not a player promotion. A player who is not opening a room should not buy it in the hope of a better per-diamond rate they cannot use.",
          "If you are an owner buying through Grand, the cashier already has the club on file and can deliver the pack to the account that holds it. Buying the same quantity through the store costs the platform fee on top of 649, which on a pack this size is a noticeable difference.",
        ],
      },
      {
        heading: "Gifting and transfers",
        paragraphs: [
          "The app lets you send diamonds from your account to another PPPoker ID as a gift. That is a platform feature, not a club one: the diamonds leave your balance and arrive on theirs, and the club cashier is not involved. It is the legitimate way to cover someone else's VIP card or a diamond-priced tournament entry.",
          "What the app does not permit is converting those diamonds into chips, moving them onto a second account you control, or exchanging them with a stranger for money inside the client. Chip transfers between player accounts are a club-level rule and are prohibited at Grand; diamonds are not a workaround for that rule.",
          "If you are sending a gift, confirm the recipient's numeric ID in the app before you tap send. Diamonds delivered to the wrong account are not reversed by PPPoker, and the cashier cannot pull them back either.",
        ],
      },
      {
        heading: "Avoiding diamond scams",
        paragraphs: [
          "Diamonds attract a specific set of scams because they sit outside the club's chip ledger and because new players do not yet know what the app cannot do. The pattern is almost always the same: an offer that the platform does not support, a request for payment outside the cashier, and pressure to send first.",
          "The club cashier is the only legitimate route for buying or selling diamonds at Grand. Anyone else quoting a rate — in the app's chat, in a Telegram group, or in a direct message after you sit down — is not part of that route.",
        ],
        bullets: [
          "Fake exchangers offering diamond-to-chip or diamond-to-cash rates inside the app",
          "A request to prepay to a personal wallet or to an account you have not withdrawn to before",
          "\"Double your diamonds\" promotions that require you to send first",
          "Support impersonators asking for your password or for diamonds to \"verify\" the account",
          "Store links that are not Apple, Google or the official PPPoker domain",
        ],
      },
      {
        heading: "3D Card Squeeze and what diamonds unlock",
        paragraphs: [
          "3D Card Squeeze is PPPoker's premium card-reveal animation, available on supported iOS and Android devices and purchasable with diamonds. Instead of cards flipping instantly, you peel them back with a touch gesture, mimicking the live poker habit of slowly checking hole cards.",
          "The feature costs diamonds to activate for a set period — typically seven or thirty days — and can be renewed from the table settings menu without leaving your seat. It does not reveal cards any faster or slower than the standard animation; the only difference is the visual experience.",
          "Diamonds for Card Squeeze come from the in-app store or from promotional grants tied to deposits and VIP milestones. Before spending diamonds on cosmetics, confirm your agent's rakeback tier, because the return on volume usually exceeds the value of any table theme.",
        ],
      },
      {
        heading: "SEKA buy-ins and spending diamonds wisely",
        paragraphs: [
          "SEKA is a three-card poker variant that runs in select unions and charges a small diamond fee to create private tables in some club configurations. The game itself uses chips for buy-ins and rake, but the table-creation cost is where diamonds enter the picture for SEKA hosts.",
          "As a player rather than a host, your diamond spending on SEKA is limited to optional cosmetics and the standard Card Squeeze feature. The buy-in and rebuy are chip-based, so diamonds are not required to play — only to customise the experience.",
          "The general rule for diamond spending in club poker applies here too: rakeback from volume returns more value than any cosmetic purchase. If you are deciding between buying a theme pack and playing an extra session at your regular stake, the session wins every time.",
        ],
      },
    ],
    faq: [
      {
        q: "Can diamonds be turned into real money?",
        a: "Only through the club's buyback at a published rate. The app itself has no conversion, and offers of in-app exchange are a common scam setup.",
      },
      {
        q: "Do I need diamonds to play?",
        a: "No. Cash games and most tournaments run entirely on chips. Diamonds are optional unless your union prices specific events in them.",
      },
      {
        q: "Is the VIP card worth buying?",
        a: "It pays off if you play daily and want the in-app statistics. For occasional play the ad removal alone rarely justifies the cost.",
      },
      {
        q: "Do diamonds expire?",
        a: "No. The balance stays on the account until you spend it or sell it back. The VIP card is what lapses after a fixed period, not the diamonds used to buy it.",
      },
      {
        q: "Can I pay for diamonds with a local method?",
        a: "Yes. Through the cashier the same rails you use for chip deposits — including USDT and local transfers — can settle a pack, and the diamonds are then delivered to your PPPoker ID.",
      },
      {
        q: "How long does the VIP card last?",
        a: "A fixed period, shown on the purchase screen in the app before you confirm, and renewable by buying another card when it lapses. The diamonds you paid are spent at purchase; they do not come back when the period ends.",
      },
    ],
  },
  "pppoker-interface-guide": {
    intro:
      "The PPPoker interface looks busy at first, but most of what you need sits in three places: the club lobby, the table screen and your profile. This guide walks through each area in the order a new Grand Club member (Club ID 1074072) actually uses them, including how to switch the app language to Russian, Portuguese, Spanish, Uzbek, English or Filipino.",
    sections: [
      {
        heading: "Changing the app language",
        paragraphs: [
          "PPPoker ships with a full interface translation for Russian, Portuguese, Spanish, Uzbek, English and Filipino. Open the main menu from the home screen — the three-line icon in the top corner — and tap Settings, then Language. The change applies immediately to menus, lobby labels and table prompts without restarting the app.",
          "If you installed the app in a language you do not read, the path is the same: the gear icon is always in Settings regardless of locale. On Android you can also override the app language in system settings, but changing it inside PPPoker is faster and does not affect other apps on your phone.",
          "Grand Club publishes guides in all six languages, so matching the app to your preferred reading language makes cashier messages and in-app labels easier to follow. Your username and chat at the table stay whatever you typed; only the interface chrome changes.",
        ],
        bullets: [
            "Home screen → menu (☰) → Settings → Language",
            "Supported: English, Russian, Portuguese, Spanish, Uzbek, Filipino",
            "Change takes effect instantly — no restart required",
            "Table chat and nicknames are not translated",
        ]
      },
      {
        heading: "Club lobby and finding tables",
        paragraphs: [
          "After your Grand Club application is approved, tap the club name on the home screen to open the lobby. The top tabs separate Cash Games, MTT, SNG and specialty formats. Each tab has filter buttons for stakes, table size and game type so you can narrow NLH 6-max at your level without scrolling every open room.",
          "The search bar at the top accepts stake notation like 1/2 or 0.5/1. Tap a table row to see the current players, average pot size and whether the game is running Straddle or Bomb Pot. A green seat icon means an open chair; tap it to join the waiting list or sit directly if a seat is free.",
          "If the lobby looks empty, check that you opened Grand Club (1074072) and not a different room, and confirm your membership status is Active in the club info panel. Union traffic peaks at different hours — Brazilian evenings and CIS late nights often fill faster than midday in other regions.",
        ]
      },
      {
        heading: "Table interface and action buttons",
        paragraphs: [
          "Once seated, your hole cards appear at the bottom with chip stacks arranged around the felt. Action buttons — Fold, Call, Raise and the bet slider — sit along the bottom edge. Drag the slider or tap preset bet sizes (half pot, pot, all-in) to size your raise; the numeric field accepts exact amounts if you prefer typing.",
          "The dealer button, blinds and current pot display in the centre. A timer ring around your avatar shows remaining timebank; tap the clock icon in table settings to see how much reserve you have left for the session. Auto-check/fold and sit-out-next-hand toggles are in the same menu.",
          "Multi-tabling on mobile swaps between active tables with a tab bar at the top. On Windows each table opens in its own resizable window. Avoid opening the same seat on two devices — the second login takes over and can time you out on the first.",
        ]
      },
      {
        heading: "Table settings and display options",
        paragraphs: [
          "Tap the gear icon at the table to open display and behaviour settings. Here you adjust card size, felt colour, whether to show chips in big blinds or absolute values, and sound effects for bets and alerts. Four-colour deck and rabbit hunting (showing undealt cards after a fold) are optional and club-dependent.",
          "Betting preferences include pre-action buttons (check/fold, call any, raise any) and whether the slider defaults to pot-sized bets. Straddle and run-it-twice prompts can be set to auto-decline if you prefer not to see the popup every hand.",
          "Theme packs purchased with diamonds change card backs and table frames. These are cosmetic only and do not affect gameplay, but they help distinguish tables when you run several at once on the desktop client.",
        ],
        bullets: [
            "Gear icon at the table → Display, Sound, Betting preferences",
            "Toggle chips in BB vs absolute values",
            "Pre-action buttons speed up multi-tabling",
            "Four-colour deck and custom themes available",
        ]
      },
      {
        heading: "Profile, hand history and getting help",
        paragraphs: [
          "Your profile lives under the avatar icon on the home screen. It shows your numeric PPPoker ID, nickname, diamond balance and club memberships. The hand history tab stores recent sessions with expandable streets — useful for reviewing a disputed pot or studying a hand you played at Grand.",
          "Club-level statistics (VPIP, hands played, winnings in chips) appear in the club member panel. These numbers are what managers see when checking activity requirements; they are separate from the agent-side rake records used for rakeback.",
          "For deposits, withdrawals and account questions, message @grandppuzbot on Telegram. For player support outside the bot, contact @Grand_Poker_Reception. The in-app report button on a hand history entry flags a specific hand to club admins if you believe there was a technical error.",
        ]
      }
    ],
    faq: [
      {
        q: "Can I use PPPoker in Uzbek?",
        a: "Yes. Select Uzbek in Settings → Language. Menus and lobby labels translate; table chat stays in whatever language players type.",
      },
      {
        q: "Why do I not see any tables in the lobby?",
        a: "Confirm you joined Grand Club (1074072) and your status is Active. Empty lobbies usually mean off-peak hours — try evenings in your region or check the MTT schedule.",
      },
      {
        q: "How do I view past hands?",
        a: "Profile → Hand History. Tap a hand to expand each street. Hands stay available for several weeks depending on club settings.",
      },
      {
        q: "Does changing language affect my account?",
        a: "No. Language is a display setting only. Your ID, chip balance and club memberships are unchanged.",
      }
    ],
  },
  "usdt-deposits-guide": {
    intro:
      "USDT is the default settlement currency at Grand Club because it clears in minutes, crosses borders without bank friction and pairs cleanly with the 1 chip = $1 rate. This guide covers TRC20 and ERC20 deposits and withdrawals through @grandppuzbot, what fees to expect, how long each network takes and how to avoid the mistakes that delay payouts.",
    sections: [
      {
        heading: "Why Grand uses USDT as the primary rail",
        paragraphs: [
          "Club poker does not process fiat inside the PPPoker app — every real-money movement runs through your agent. At Grand, @grandppuzbot automates that layer: you send USDT, the bot credits chips at 1 chip = $1, and withdrawals reverse the flow on the same rate without a spread.",
          "USDT fits the model because settlement is fast, auditable on-chain and available to players in Brazil (Pix as an alternative), the Philippines (GCash), Russia (SBP) and Uzbekistan (Uzcard/Humo). When you already hold stablecoins, USDT is usually the cheapest path in and out.",
          "Your 60% rakeback and any referral earnings also settle through the same cashier, so keeping one primary wallet simplifies weekly accounting.",
        ]
      },
      {
        heading: "TRC20 vs ERC20 — which network to pick",
        paragraphs: [
          "Grand accepts USDT on Tron (TRC20) and Ethereum (ERC20). TRC20 is the default recommendation: typical network fees stay under one dollar and confirmations arrive in one to three minutes under normal conditions.",
          "ERC20 makes sense if your funds already sit on Ethereum or you withdraw to an exchange that only lists the ERC20 contract. Gas fees vary with network congestion and can exceed the transfer amount on small deposits, so check the fee estimate in your wallet before sending.",
          "Sending USDT on the wrong network — for example TRC20 tokens to an ERC20 address — results in a lost transfer that cannot be recovered by the bot. Always copy the address and network label directly from @grandppuzbot rather than reusing an old message.",
        ],
        bullets: [
            "TRC20: lower fees, faster — recommended for most players",
            "ERC20: use when your wallet or exchange requires it",
            "Never mix networks — wrong chain means lost funds",
            "Copy address fresh from the bot each deposit",
        ]
      },
      {
        heading: "Making a USDT deposit step by step",
        paragraphs: [
          "Open @grandppuzbot in Telegram and tap Deposit. Select USDT, then TRC20 or ERC20. The bot returns a wallet address and the network name — send only USDT on that network to that address.",
          "Enter the amount in your external wallet and confirm. Most TRC20 deposits credit within five minutes after one on-chain confirmation. ERC20 may take longer during peak gas periods. The bot messages you when chips are loaded; open PPPoker and refresh your club balance if the table still shows the old stack.",
          "Minimum deposits and rounding rules are stated in the bot before you confirm. If a deposit has not credited after thirty minutes, message the bot with your transaction hash (TxID) — do not send a second transfer until the first is traced.",
        ]
      },
      {
        heading: "USDT withdrawals — timing and limits",
        paragraphs: [
          "Tap Withdraw in @grandppuzbot, enter the amount in chips you want cashed out and paste your USDT address. Double-check the network matches your wallet — TRC20 withdrawals must go to a Tron USDT address, not an Ethereum one.",
          "Standard withdrawals process within a few hours around the clock. Large first-time cashouts or address changes may trigger a short manual review; that is normal and faster than rushing to a second agent.",
          "Weekly rakeback lands on the same settlement cycle and can be withdrawn in the same request or left in chips for the next session. There is no extra fee from Grand on rakeback payouts beyond the blockchain network cost on withdrawal.",
        ]
      },
      {
        heading: "Safety practices and common errors",
        paragraphs: [
          "Only use @grandppuzbot linked from Grand Club official channels. Scam bots copy the name with one character changed. Pin the real bot after the first chat and never share your PPPoker password or SMS codes with anyone claiming to be support.",
          "The most expensive mistakes are wrong-network sends, sending to an expired deposit address and omitting the memo tag on exchanges that require it for USDT. Screenshot the bot deposit screen before you send so you have the exact address and network on record.",
          "For players who prefer local rails, Grand also supports Pix, GCash, SBP, Uzcard and Humo through the same bot — useful when you do not already hold USDT. The rate and settlement day are the same; only the payment rail changes.",
        ],
        bullets: [
            "Verify the bot handle: @grandppuzbot",
            "Match network on send and receive",
            "Keep TxID until chips credit",
            "Local methods available if you do not use crypto",
        ]
      }
    ],
    faq: [
      {
        q: "What is the chip-to-USDT rate?",
        a: "1 chip = $1 USDT at Grand. Deposits and withdrawals use the same rate with no hidden spread in the bot.",
      },
      {
        q: "How long do TRC20 deposits take?",
        a: "Usually one to five minutes after on-chain confirmation. Delays beyond thirty minutes need the transaction hash sent to the bot.",
      },
      {
        q: "Does Grand charge a deposit fee?",
        a: "Grand does not add a deposit markup. You pay only the blockchain network fee charged by your wallet or exchange.",
      },
      {
        q: "Can I withdraw to a different wallet than I deposited from?",
        a: "Yes. Paste any valid USDT address on the correct network at withdrawal. A new address may trigger a brief manual check on the first use.",
      }
    ],
  },
  "referral-program-guide": {
    intro:
      "Grand Club pays referrers 30% of the rake their invited players generate — on top of the 60% rakeback those players receive on their own volume. This guide explains how to get your referral link, what counts toward the 30%, how tracking works in @grandppuzbot and the rules that keep the program fair for everyone.",
    sections: [
      {
        heading: "How the 30% referral share works",
        paragraphs: [
          "When a player joins Grand through your Referral ID, every dollar of club rake they pay is recorded against your agent account. You receive 30% of that rake as a separate weekly payment, independent of your own play and independent of the 60% rakeback they get on their own volume.",
          "The 30% is calculated on gross rake attributed to the referred player, not on their winnings or losses. A losing month still generates referral income if the player puts in volume; a winning month with little action generates little.",
          "Referral earnings settle on the same weekly cycle as rakeback. You can withdraw them through @grandppuzbot in USDT, Pix, GCash, SBP, Uzcard or Humo using the same methods as your own cashouts.",
        ]
      },
      {
        heading: "Getting your referral link and inviting players",
        paragraphs: [
          "Your Referral ID is assigned when you join Grand and appears in the club credentials on our website and in the welcome message from @grandppuzbot. New players enter this ID in the Referral field when applying to Club ID 1074072 — without it, the application is not linked to you.",
          "Share the ID together with Club ID 1074072 and a link to our join guide. The cleanest invite is: install PPPoker, register, tap Join Club, enter both IDs, message the bot for a deposit. Players who register first and apply later still link correctly if they have not yet generated rake under another agent.",
          "Telegram groups, poker communities and personal introductions work better than mass cold messages. Players who understand club poker before they deposit tend to stay longer and generate more consistent rake.",
        ],
        bullets: [
            "Share Club ID 1074072 + your Referral ID together",
            "Player enters Referral ID at Join Club — before first session",
            "Point new players to @grandppuzbot for deposits",
            "Personal invites outperform spam links",
        ]
      },
      {
        heading: "Tracking referrals and weekly statements",
        paragraphs: [
          "Message @grandppuzbot and open the Referral or Stats section to see active referred players, rake attributed this week and your accrued 30% share. Names appear as PPPoker nicknames — the same identifiers the club uses in payout records.",
          "Weekly statements itemise each referred player's rake contribution and your cut. If a number looks wrong, request a hand-level breakdown before the settlement day; corrections are easier before the payout is sent than after.",
          "Inactive players remain on your referral list but generate zero until they play again. There is no expiry on the link as long as the player stays under your Referral ID and remains a member of Grand Club.",
        ]
      },
      {
        heading: "Program rules and what does not count",
        paragraphs: [
          "Self-referral — creating a second account under your own Referral ID — is prohibited and results in forfeiture of referral earnings and possible removal from the program. The platform flags shared devices and IP patterns automatically.",
          "Rake from players who switch agents mid-month is attributed from the date the new Referral ID is active. Retroactive credit for rake generated before the switch is not available, which is why players should enter the correct ID before their first hand.",
          "Collusion, chip dumping between referred accounts and artificial volume created solely to farm referral payouts are treated as serious violations. Grand reserves the right to withhold referral payments pending investigation when patterns suggest abuse.",
        ]
      },
      {
        heading: "Growing referral income responsibly",
        paragraphs: [
          "Referral income scales with the quality of players you bring, not just the count. One regular at sensible stakes who plays weekly is worth more than ten depositors who try one session and leave.",
          "Help referrals understand rakeback: they already receive 60% back on their own rake, which is a strong retention hook. Pair that with a quick walkthrough of the interface and deposit path and you reduce early churn.",
          "If you run a community or channel, disclose that you earn from referrals. Transparent agents keep players longer than ones who hide the arrangement and get exposed later.",
        ]
      }
    ],
    faq: [
      {
        q: "Do referred players get less rakeback because I earn 30%?",
        a: "No. They receive the full 60% rakeback on their own volume. Your 30% is a separate agent-side payment from Grand, not a deduction from their rebate.",
      },
      {
        q: "When is referral income paid?",
        a: "Weekly, on the same settlement cycle as rakeback. Withdraw through @grandppuzbot once the statement posts.",
      },
      {
        q: "Can I refer players in other countries?",
        a: "Yes. Grand accepts players globally. Deposits in USDT, Pix, GCash, SBP, Uzcard and Humo cover most regions your referrals will come from.",
      },
      {
        q: "What if a player forgot my Referral ID?",
        a: "If they have not yet generated rake, contact @Grand_Poker_Reception with their PPPoker ID before their first session. After rake is recorded under another ID, it cannot be moved retroactively.",
      }
    ],
  },
  "nlh-cash-basics": {
    intro:
      "No-Limit Hold'em cash games are where most club poker players start and where Grand Club carries the steadiest traffic through the day. This guide covers how stakes are labelled in PPPoker, how to pick a table, and the preflop and postflop habits that keep beginners from bleeding chips in the first few sessions.",
    sections: [
      {
        heading: "How NLH cash games work in club poker",
        paragraphs: [
          "A cash game has no fixed end time — you buy in for chips, play as long as you want and leave when you choose. Blinds stay constant (for example 1/2 means a small blind of one chip and a big blind of two) rather than increasing like in a tournament.",
          "PPPoker clubs run 6-max and full-ring (up to nine players) tables inside unions, so a Grand Club table may include players from partner rooms. Rake is taken from each pot according to the table info panel — typically up to 5% with a cap around three big blinds.",
          "Your 60% rakeback at Grand applies to every dollar of that rake, settled weekly through @grandppuzbot. Understanding rake cost is part of table selection: a loose, multiway game generates more rake per hour than a tight one at the same stake.",
        ]
      },
      {
        heading: "Reading stakes and sizing your buy-in",
        paragraphs: [
          "Stakes are written as small blind / big blind in chips, where one chip equals one dollar at Grand. A 0.5/1 table has a one-chip big blind; a 5/10 table has a ten-chip big blind. The number after the slash is what defines pot geometry and the rake cap.",
          "Standard buy-in is 100 big blinds — 200 chips at 1/2, 1000 chips at 5/10. PPPoker allows rebuys from the table menu while seated, but loading far above your bankroll because chips are already in the app is a common beginner mistake.",
          "Start at the stake where 100 big blinds is a comfortable session loss, not a meaningful fraction of your monthly roll. Moving up because the lobby looks soft rarely works if the bigger stake is outside your bankroll plan.",
        ],
        bullets: [
            "1 chip = $1 at Grand Club",
            "Default buy-in: 100 big blinds",
            "Check rake % and cap in the table info panel",
            "Rebuy from the table menu — do not over-load the app balance",
        ]
      },
      {
        heading: "Choosing the right table",
        paragraphs: [
          "Open the Cash Games tab, filter by NLH and your stake range, then sort by players seated. A full table with an average pot above five big blinds usually means more recreational action than an empty six-max waiting for a fifth player.",
          "Watch one orbit before sitting if the lobby allows spectating. Count how many players see the flop voluntarily (VPIP) and whether raises get multiple callers. A table where every hand is raised and three-bet is a regular table; one with limps and multiway pots is softer for a learning player.",
          "Time of day matters in union poker. Grand's traffic mixes Brazilian evening peaks, CIS late-night volume and Asian morning games. Open the lobby at the hours you plan to play before committing a bankroll to a stake.",
        ]
      },
      {
        heading: "Preflop fundamentals for beginners",
        paragraphs: [
          "Position is the first concept worth learning. Play tighter from early positions (under the gun) and wider from the button and cutoff, because you act last on later streets and control pot size more easily.",
          "Open-raise rather than limping when you enter a pot first. A standard open is two and a half to three big blinds in an unopened pot. Limping invites multiway pots where marginal hands lose value and rake eats a larger share of small pots.",
          "Defend your big blind against steals, but not with every hand. Against a late-position raise, continue with pairs, suited connectors and broadway cards that flop well; fold weak offsuit trash. Three-betting as a beginner should stay limited to strong pairs and AK — fancy light three-bets can wait until postflop basics are solid.",
        ]
      },
      {
        heading: "Postflop basics — one street at a time",
        paragraphs: [
          "On the flop, ask two questions: did I hit the board, and who has range advantage? When you raised preflop and the flop is high-card heavy, you can bet small as the aggressor even without a strong hand — called a continuation bet. When you called preflop out of position, check more and fold to sustained pressure unless you have a pair or strong draw.",
          "Pot odds matter on draws. If the pot is 100 chips and your opponent bets 50, you need to win roughly one time in three to break even on a call. Count outs (cards that complete your flush or straight) and compare them to the price before calling with a draw.",
          "Do not bluff three streets as a beginner. One well-chosen bet on the flop or turn is enough; firing into calling stations who never fold costs more than it wins. When unsure on the river, checking behind often saves half a buy-in over a year of sessions.",
        ]
      }
    ],
    faq: [
      {
        q: "What is the difference between 6-max and full ring?",
        a: "6-max seats six players and plays looser with more hands per hour. Full ring seats up to nine and is tighter. Both exist at Grand; pick the format you studied.",
      },
      {
        q: "Can I leave a cash table anytime?",
        a: "Yes. Use the stand-up button or close the table. There is no payout penalty for leaving, though some clubs track very short sessions for activity stats.",
      },
      {
        q: "Does rakeback change which stakes I should play?",
        a: "Rakeback lowers your effective cost but does not change relative skill between stakes. Play the stake your bankroll supports; the 60% rebate helps at every level.",
      },
      {
        q: "Where do I practise without real money?",
        a: "Club poker is real-money by design. Start at the lowest stake where 100 BB is affordable and treat the first hundred hands as tuition, not profit.",
      }
    ],
  },
  "pppoker-uzbekistan": {
    intro:
      "Uzbekistan has a growing club poker community, and PPPoker is the app most local players use to reach international unions. Grand Club (ID 1074072) supports Uzbek players with Humo and Uzcard deposits, USDT, Russian interface, 60% rakeback and a cashier bot that runs on Tashkent-friendly hours.",
    sections: [
      {
        heading: "PPPoker access and setup for Uzbek players",
        paragraphs: [
          "PPPoker is available in Uzbekistan through the App Store, Google Play and direct APK download. Registration requires no documents — a username and password are enough to create an account and apply to Grand Club with Club ID 1074072 and your Referral ID.",
          "Switch the interface to Russian in Settings → Language if that is your preferred reading language. Uzbek is also available in the language list. Table chat mixes Russian, Uzbek and English depending on who is seated, which is typical for CIS-facing union tables.",
          "A stable internet connection matters more than which mobile operator you use. Wi-Fi at home is fine for single-table play; if you multi-table on Windows, a wired connection reduces disconnect risk during big pots.",
        ]
      },
      {
        heading: "Local payments: Humo, Uzcard and USDT",
        paragraphs: [
          "Grand accepts Humo and Uzcard transfers for players in Uzbekistan, processed through @grandppuzbot on Telegram. Message the bot, select the local payment option and follow the amount and card details it provides. Settlement is at 1 chip = $1 with no spread between deposit and withdrawal.",
          "USDT on TRC20 is the fastest cross-border option if you already use a crypto wallet or an exchange that supports Tron withdrawals. Fees stay low and chips usually credit within minutes — useful when you want to play during peak union hours without waiting for bank processing.",
          "For your first deposit, start with a small test amount and complete one full withdrawal cycle before loading a larger session bankroll. That confirms the payment path works on your card or wallet before you commit more.",
        ],
        bullets: [
            "Humo and Uzcard via @grandppuzbot",
            "USDT TRC20 for fastest crypto deposits",
            "Rate: 1 chip = $1, same on deposit and cashout",
            "Test with a small amount before a large load",
        ]
      },
      {
        heading: "Peak hours and table traffic from Tashkent",
        paragraphs: [
          "Union poker traffic follows several time zones. From Tashkent (UTC+5), local evening hours overlap with CIS late-night games and early Asian morning tables. Brazilian peak hours land in the early hours of the morning Uzbek time — worth knowing if you prefer softer NLH action.",
          "Open the Grand lobby at the times you actually plan to play for a few days before choosing a regular stake. A screenshot of a busy lobby at someone else's peak hour is not a reliable guide to your own schedule.",
          "Weekend evenings in Uzbekistan often see more local players online in Russian-language chat, while weekday afternoons lean toward international regulars. Both are playable; the difference is table texture, not whether games exist.",
        ]
      },
      {
        heading: "Grand Club benefits for Uzbek players",
        paragraphs: [
          "Grand offers 60% rakeback on contributed rake, settled weekly through @grandppuzbot. That rate is stated upfront — not a teaser that drops after the first month — and applies to cash games and tournament fees alike.",
          "The Telegram cashier @grandppuzbot handles deposits and withdrawals around the clock without waiting for a human reply on routine requests. @Grand_Poker_Reception is available for account issues, Referral ID corrections and disputes that need a person.",
          "Grand sits in an international union, so you are not limited to playing only other Uzbek players. You get access to the broader player pool while settling in a currency and payment method that works locally.",
        ]
      },
      {
        heading: "Practical tips for your first sessions",
        paragraphs: [
          "Enter both Club ID 1074072 and your Referral ID when you apply. Rake generated before the link exists cannot be credited retroactively, so the ID should be in place before your first hand.",
          "Keep only your active session bankroll in chips on the app. Withdraw the rest on the weekly settlement day together with rakeback — chips are a claim on the club, not a regulated bank balance.",
          "If you run a local poker chat or community, Grand's referral program pays 30% of referred rake on top of the 60% rakeback your referrals receive. That is optional income, but the same rules apply: no self-referrals and no artificial volume.",
        ]
      }
    ],
    faq: [
      {
        q: "Is PPPoker legal in Uzbekistan?",
        a: "Club poker operates outside licensed local gambling frameworks. Players are responsible for understanding regulations in their jurisdiction. Grand provides the agent layer; we do not offer legal advice.",
      },
      {
        q: "Can I deposit in Uzbek soums?",
        a: "Settlement runs in USD equivalent at 1 chip = $1. Humo and Uzcard transfers are converted at the rate shown in @grandppuzbot at the time of deposit.",
      },
      {
        q: "Which language should I set in the app?",
        a: "Russian and Uzbek are both supported. Pick whichever you read more comfortably; table chat will still mix languages.",
      },
      {
        q: "How fast are Uzcard withdrawals?",
        a: "Routine withdrawals process within a few hours through @grandppuzbot. First-time or large cashouts may need a short manual check.",
      }
    ],
  },
  "pppoker-brazil": {
    intro:
      "Brazil is one of the largest PPPoker markets in the world, with thousands of players searching for reliable clubs, Pix-friendly cashiers and tables that run during BRT evening hours. Grand Club (ID 1074072) is built for that audience — Portuguese interface support, Pix deposits through @grandppuzbot, 60% rakeback and access to international union traffic without leaving the app you already use.",
    sections: [
      {
        heading: "Why Brazilian players choose PPPoker clubs",
        paragraphs: [
          "Regulated online poker is limited in Brazil, so club poker on PPPoker fills the gap for players who want NLH cash, MTTs and private games with familiar stakes. Clubs operate inside unions that share table liquidity across regions, which means a Brazilian evening session can include action from Europe, the CIS and Asia in the same lobby.",
          "Choosing the right club matters more than downloading the app. A good agent offers transparent chip rates, fast Pix settlement and rakeback that actually posts every week. Weak clubs promise big bonuses but delay cashouts or change terms after your first deposit.",
          "Grand Club targets serious recreational and semi-pro players who want predictable economics: 1 chip = $1, 60% rakeback on contributed rake and a referral program that pays 30% of referred rake. That structure is easier to plan around than rotating promotional rates.",
        ]
      },
      {
        heading: "Pix deposits and withdrawals through Grand cashier",
        paragraphs: [
          "Grand processes Pix for Brazilian players through @grandppuzbot on Telegram. Open the bot, choose the Brazil / Pix option and follow the displayed amount in BRL with the destination key shown in the chat. Chips credit after the transfer confirms — usually within minutes during cashier hours.",
          "Withdrawals use the same path in reverse: request a cashout in the bot, confirm your Pix key and receive BRL at the rate locked at 1 chip = $1 equivalent. There is no hidden spread between buying and selling chips when you use the official Grand cashier.",
          "For your first transaction, send a small test deposit and complete one withdrawal before loading a full session bankroll. That verifies your Pix key, bank and Telegram account are linked correctly. @Grand_Poker_Reception handles edge cases that need a human, such as wrong Referral ID or a stuck transfer.",
        ],
        bullets: [
            "Pix in and out via @grandppuzbot — official Grand cashier only",
            "Settlement at 1 chip = $1 with no deposit/withdrawal spread",
            "Test with a small Pix transfer before a large load",
            "Human support at @Grand_Poker_Reception for account issues",
        ]
      },
      {
        heading: "Portuguese interface and lobby setup",
        paragraphs: [
          "PPPoker includes a full Portuguese translation. Open the menu on the home screen, tap Settings → Language and select Português. Menus, lobby filters and table prompts switch immediately; your username and table chat stay as you typed them.",
          "When applying to Grand Club, enter Club ID 1074072 and your Referral ID before playing your first hand. Rake generated without the correct link cannot be credited retroactively, and rakeback calculations depend on that connection from day one.",
          "The club lobby separates Cash Games, MTT and SNG tabs. Use stake filters to find NLH at your level — common Brazilian-friendly limits include micro and low stakes that run well during BRT prime time.",
        ]
      },
      {
        heading: "Brazilian peak hours and table traffic",
        paragraphs: [
          "Most Brazilian regulars play between roughly 19:00 and 01:00 BRT on weekdays, with wider volume on Friday and Saturday nights. Those hours overlap with European afternoon and CIS late-night traffic, which keeps mid-stakes NLH tables populated.",
          "If you prefer softer pools, try earlier afternoon sessions on weekends or tables labelled with lower average pot sizes in the lobby preview. Peak hour does not always mean the best win rate — it means the most volume.",
          "Multi-tabling is popular among Brazilian grinders on the Windows client. Keep one Telegram chat open with @grandppuzbot if you plan mid-session deposits so you do not miss a confirmation message during a big hand.",
        ],
        bullets: [
            "Peak BRT: roughly 19:00–01:00 on weekdays",
            "Weekend nights carry the widest MTT and cash volume",
            "Lobby filters help find stakes that match your bankroll",
            "Windows client supports multi-table during Brazilian prime time",
        ]
      },
      {
        heading: "Grand Club advantages for Brazil",
        paragraphs: [
          "Grand sits in an international union, so you are not limited to a small local player pool. You get Brazilian-friendly payments and Portuguese support while competing at tables that include global traffic.",
          "The 60% rakeback rate is stated upfront and settled weekly through @grandppuzbot together with any cashout you request. That beats most generic clubs that advertise high rakeback but cap payouts or exclude tournament fees.",
          "If you run a poker community or stream, the 30% referral share on referred rake stacks on top of what your invites earn. Same rules apply everywhere: no self-referrals, no chip dumping and no artificial volume.",
        ]
      }
    ],
    faq: [
      {
        q: "Does Grand Club accept Pix?",
        a: "Yes. Brazilian players deposit and withdraw via Pix through @grandppuzbot at 1 chip = $1 equivalent.",
      },
      {
        q: "Can I use the app in Portuguese?",
        a: "Yes. PPPoker supports Portuguese in Settings → Language. Grand publishes guides in Portuguese as well.",
      },
      {
        q: "What are the best hours to play from Brazil?",
        a: "Evening BRT, especially 19:00–01:00, usually has the most cash and MTT traffic in the union.",
      },
      {
        q: "How do I join Grand Club?",
        a: "Apply with Club ID 1074072 and your Referral ID in the PPPoker app, then fund via @grandppuzbot once approved.",
      }
    ],
  },
  "pppoker-latam": {
    intro:
      "Latin America spans multiple time zones and payment systems, but PPPoker gives Mexican, Argentine and Colombian players one app to reach international union tables. Grand Club (ID 1074072) supports the region with Spanish guides, local transfer options through @grandppuzbot, 60% rakeback and a cashier that settles at 1 chip = $1.",
    sections: [
      {
        heading: "PPPoker across Mexico, Argentina and Colombia",
        paragraphs: [
          "Players in Mexico City, Buenos Aires and Bogotá use PPPoker for the same reason as elsewhere: club poker offers NLH cash, MTTs and private games when regulated sites are unavailable or limited. Each country has different banking habits, but the app and club structure are identical once you join Grand.",
          "Search quality varies by agent. Some LatAm-facing clubs advertise huge bonuses but route cashouts through informal channels. Grand uses a single verified Telegram cashier — @grandppuzbot — plus human support at @Grand_Poker_Reception for disputes.",
          "Apply with Club ID 1074072 and your Referral ID before your first hand. Rakeback and referral tracking only work from the moment that link is active.",
        ]
      },
      {
        heading: "Spanish interface and regional setup",
        paragraphs: [
          "PPPoker ships with a complete Spanish translation. Open Settings → Language and select Español. Lobby tabs, table buttons and tournament info switch immediately without restarting the app.",
          "Grand publishes onboarding material in Spanish as well as Portuguese, Russian, English, Uzbek and Filipino, which helps if you share club info with mixed-language communities across LatAm and Brazil.",
          "Table chat will still mix Spanish, English and Portuguese depending on who is seated — typical for international union tables during evening hours in the Americas.",
        ],
        bullets: [
            "Settings → Language → Español for full UI translation",
            "Grand guides available in six languages including Spanish",
            "Enter Club ID 1074072 and Referral ID before first hand",
            "Table chat stays multilingual — only menus translate",
        ]
      },
      {
        heading: "Local payment options in LatAm",
        paragraphs: [
          "Grand routes LatAm deposits and withdrawals through @grandppuzbot based on your country. Message the bot, select your region and follow the bank or wallet instructions shown in chat. Settlement is always at 1 chip = $1 equivalent without a hidden spread.",
          "USDT on TRC20 remains the fastest cross-border option if local bank rails are slow or unavailable in your province. Crypto deposits usually credit within minutes once the chain confirms.",
          "Start with a small test deposit and one completed withdrawal before loading a full bankroll. That confirms your payment path works under your local banking rules.",
        ]
      },
      {
        heading: "LatAm unions and peak traffic",
        paragraphs: [
          "Grand participates in international unions, so LatAm evenings overlap with Brazilian, European and US traffic depending on the table. Mexico City (CST) peaks roughly 20:00–02:00 local; Argentina (ART) runs slightly later; Colombia (COT) aligns with both.",
          "Weekend MTT schedules attract the widest field from across the Americas. Cash games fill fastest on Friday and Saturday when multiple time zones share a session window.",
          "Use lobby filters to sort by stakes and average pot size rather than joining the first open table. Higher average pots often mean tougher regulars even at the same blind level.",
        ],
        bullets: [
            "Peak local evenings: roughly 20:00–02:00 in major LatAm cities",
            "Weekend MTTs draw the broadest Americas field",
            "Union traffic mixes LatAm, Brazil, Europe and US players",
            "Filter by stakes and average pot before sitting",
        ]
      },
      {
        heading: "Why Grand Club fits LatAm players",
        paragraphs: [
          "Grand combines international table volume with a transparent agent layer: 60% rakeback on contributed rake, weekly settlement through @grandppuzbot and a 30% referral share on invited players.",
          "You are not locked into a tiny local club pool. You keep access to union liquidity while cashing out through methods coordinated for your country.",
          "If something goes wrong — wrong Referral ID, delayed transfer, account flag — @Grand_Poker_Reception escalates cases that the bot cannot resolve automatically.",
        ]
      }
    ],
    faq: [
      {
        q: "Can I play from Mexico, Argentina or Colombia?",
        a: "Yes. PPPoker club poker is available in all three countries through Grand Club ID 1074072 with regional payment support via @grandppuzbot.",
      },
      {
        q: "Is the app available in Spanish?",
        a: "Yes. Select Español in Settings → Language. Grand also publishes Spanish-language guides.",
      },
      {
        q: "What chip rate does Grand use?",
        a: "1 chip = $1 on both deposits and withdrawals through the official cashier.",
      },
      {
        q: "How does the referral program work?",
        a: "You earn 30% of the rake generated by players who join with your Referral ID, on top of their 60% rakeback.",
      }
    ],
  },
  "pppoker-russia-cis": {
    intro:
      "Russia and the broader CIS remain core markets for PPPoker club poker, with heavy traffic through unions such as Yamal and Crazy Union. Grand Club (ID 1074072) serves the region with Russian interface support, SBP payments through @grandppuzbot, 60% rakeback and settlement at 1 chip = $1.",
    sections: [
      {
        heading: "PPPoker access for Russia and CIS players",
        paragraphs: [
          "PPPoker is widely used across Russia, Kazakhstan, Belarus and neighbouring countries where players want NLH cash and MTTs outside licensed local sites. The app is available on mobile stores and as a desktop client for multi-table grinders.",
          "Club membership is how you access union liquidity. Applying to Grand with Club ID 1074072 and your Referral ID links your account to a verified agent layer with published rakeback terms instead of informal middlemen.",
          "Keep your PPPoker username consistent when contacting @grandppuzbot or @Grand_Poker_Reception so support can match deposits to the correct club balance.",
        ]
      },
      {
        heading: "SBP and local payment rails",
        paragraphs: [
          "Grand accepts SBP (Fast Payment System) transfers for Russian players through @grandppuzbot. Open the bot, select the Russia / SBP option and send the exact amount to the phone or bank details displayed. Chips credit after the transfer confirms.",
          "Players in other CIS countries can use bank transfers, USDT TRC20 or methods shown for their region in the bot menu. All routes settle at 1 chip = $1 with no spread between deposit and withdrawal.",
          "Complete a small test deposit and withdrawal cycle before loading a large bankroll. That validates your bank limits, SBP caps and Telegram link in one pass.",
        ],
        bullets: [
            "SBP deposits and withdrawals via @grandppuzbot",
            "USDT TRC20 for fast cross-border CIS transfers",
            "Rate locked at 1 chip = $1 on both sides",
            "Test with a small amount before a large load",
        ]
      },
      {
        heading: "Russian interface and union context",
        paragraphs: [
          "PPPoker includes a full Russian translation — Settings → Language → Русский. Menus, lobby labels and tournament info switch instantly; table chat remains whatever languages players type.",
          "Grand sits inside international unions where Yamal and Crazy Union traffic is common. That means CIS evening sessions overlap with European afternoon and Asian morning tables, keeping mid-stakes NLH populated.",
          "Union names describe shared liquidity pools, not separate apps. You still enter through Grand Club ID 1074072 and use the same cashier for all tables in the lobby.",
        ]
      },
      {
        heading: "Peak hours across CIS time zones",
        paragraphs: [
          "Moscow evening roughly 19:00–02:00 MSK is the busiest window for Russian regulars. Kazakhstan and Belarus follow similar patterns offset by one to two hours.",
          "Late-night grinders in the CIS often meet Brazilian morning tables and European late sessions in the same union — useful if you hunt softer pools at off-peak local times.",
          "Weekend MTTs draw the largest fields when multiple regions share a schedule window. Check the club MTT tab filtered by buy-in rather than assuming every listed event fits your bankroll.",
        ],
        bullets: [
            "Peak MSK: roughly 19:00–02:00 for Russian regulars",
            "CIS late night overlaps Brazil morning and EU tables",
            "Weekend MTTs — widest multi-region fields",
            "Filter MTTs by buy-in before registering",
        ]
      },
      {
        heading: "Why Grand over informal CIS agents",
        paragraphs: [
          "Informal agents sometimes offer higher advertised rakeback but change terms, delay payouts or route chips through unrelated clubs. Grand publishes 60% rakeback on contributed rake, pays weekly through @grandppuzbot and documents 1 chip = $1 upfront.",
          "The 30% referral program lets community leaders earn on invited players without hiding terms in private chats. Same anti-fraud rules apply: no self-referrals, chip dumping or artificial volume.",
          "@Grand_Poker_Reception handles disputes, Referral ID fixes and edge cases the bot cannot close automatically — a safety layer many grey-market agents skip.",
        ]
      }
    ],
    faq: [
      {
        q: "Does Grand accept SBP?",
        a: "Yes. Russian players deposit and withdraw via SBP through @grandppuzbot at 1 chip = $1.",
      },
      {
        q: "Can I set the app to Russian?",
        a: "Yes. Full Russian UI is available in Settings → Language.",
      },
      {
        q: "What are Yamal and Crazy Union?",
        a: "They are union liquidity pools inside PPPoker. Grand Club participates in international unions that include that traffic.",
      },
      {
        q: "How fast are CIS withdrawals?",
        a: "Routine SBP and USDT cashouts usually process within hours via @grandppuzbot. Large first-time withdrawals may need a short manual check.",
      }
    ],
  },
  "local-payments-guide": {
    intro:
      "Grand Club settles every transaction at 1 chip = $1 through a single verified Telegram cashier — @grandppuzbot — with human backup at @Grand_Poker_Reception. This guide explains how local payment rails work for Brazil (Pix), the Philippines (GCash), Russia (SBP), Uzbekistan (Uzcard and Humo) and generic bank transfers, so you know what to expect before your first deposit.",
    sections: [
      {
        heading: "How the Grand cashier works",
        paragraphs: [
          "All official Grand deposits and withdrawals run through @grandppuzbot. Open Telegram, start the bot and choose your country or payment type from the menu. The bot displays the exact amount, destination details and any reference code you must include in the transfer memo.",
          "Chips credit after the payment confirms on Grand's side — not when you press send on your banking app. Keep the transfer receipt screenshot until chips appear in your PPPoker club balance under Grand Club ID 1074072.",
          "If the bot does not recognize a transfer within the stated window, contact @Grand_Poker_Reception with your PPPoker username, amount, timestamp and receipt. Do not send money to personal accounts offered in random club chats.",
        ],
        bullets: [
            "Official cashier: @grandppuzbot only",
            "Human escalation: @Grand_Poker_Reception",
            "Rate: 1 chip = $1 on deposits and withdrawals",
            "Never pay unverified agents in private chats",
        ]
      },
      {
        heading: "Pix for Brazilian players",
        paragraphs: [
          "Pix is the default rail for Brazilian players. Select Brazil / Pix in @grandppuzbot, copy the displayed Pix key and send the exact BRL amount shown. Partial sends or wrong keys delay crediting until support manually matches the transfer.",
          "Withdrawals reverse the flow: request a cashout in the bot, confirm your Pix key and receive BRL at the same 1 chip = $1 equivalent used on deposit. Grand does not add a buy/sell spread on Pix.",
          "Brazilian banks sometimes flag first transfers to new recipients. If Pix blocks the payment, try a smaller test amount or contact your bank, then retry through the bot with fresh instructions.",
        ]
      },
      {
        heading: "GCash and Philippine rails",
        paragraphs: [
          "Filipino players can fund through GCash and related local options listed in @grandppuzbot under the Philippines menu. Follow the phone number or account details exactly as displayed — GCash transfers with missing references take longer to reconcile.",
          "USDT TRC20 is popular among Filipino grinders who already use crypto exchanges with peso off-ramps. It credits quickly and avoids some bank hours restrictions on weekends.",
          "Whichever rail you choose, complete one small deposit and withdrawal cycle before loading a full session bankroll. That confirms your GCash or bank account matches the name Grand expects.",
        ],
        bullets: [
            "GCash via Philippines menu in @grandppuzbot",
            "USDT TRC20 for fast weekend deposits",
            "Include all reference codes from the bot",
            "Test small before a large session load",
        ]
      },
      {
        heading: "SBP for Russia and the CIS",
        paragraphs: [
          "Russian players use SBP (Fast Payment System) through the Russia / SBP option in @grandppuzbot. The bot shows a phone number or bank link and the exact RUB amount. SBP usually confirms within minutes during daytime banking hours.",
          "Players in Kazakhstan, Belarus and other CIS countries may see bank transfer or USDT options instead of SBP. Select your country in the bot rather than sending to Russia SBP details if the menu lists a local route.",
          "SBP daily limits vary by bank. If your transfer fails, check your remaining limit or split into two bot-generated requests rather than sending one oversized payment.",
        ]
      },
      {
        heading: "Uzcard, Humo and bank transfers",
        paragraphs: [
          "Uzbek players fund through Humo and Uzcard transfers coordinated in @grandppuzbot. The bot converts soum to the USD chip equivalent at the rate shown at deposit time — still anchored at 1 chip = $1 on the club side.",
          "Generic bank transfers are available for regions where Pix, GCash or SBP are not listed. Always initiate transfers from inside the bot flow so amounts and references match what the cashier expects.",
          "Weekly rakeback at 60% of contributed rake settles through the same @grandppuzbot wallet together with routine cashouts. Referral earnings at 30% of referred rake follow the same payment rails once calculated.",
        ],
        bullets: [
            "Humo and Uzcard for Uzbekistan via @grandppuzbot",
            "Bank transfers only through bot-generated instructions",
            "USDT TRC20 available globally as backup rail",
            "Rakeback and referrals paid through same cashier",
        ]
      }
    ],
    faq: [
      {
        q: "Is 1 chip really equal to $1?",
        a: "Yes. Grand uses 1 chip = $1 on both deposits and withdrawals through @grandppuzbot with no hidden spread.",
      },
      {
        q: "Which cashier is official?",
        a: "Only @grandppuzbot on Telegram. @Grand_Poker_Reception supports accounts but does not replace the bot for routine transfers.",
      },
      {
        q: "Can I mix payment methods?",
        a: "Yes. Deposit via Pix and withdraw via USDT, for example, as long as each transaction follows the bot flow for that rail.",
      },
      {
        q: "How long do local transfers take?",
        a: "Pix, SBP and GCash usually confirm within minutes to a few hours. First-time or large withdrawals may need a short manual review.",
      }
    ],
  },
  "scam-red-flags": {
    intro:
      "Club poker attracts honest agents and scammers alike. Grand Club publishes one official cashier — @grandppuzbot — and support at @Grand_Poker_Reception because fake agents cost players money every week. This article lists seven red flags, explains chip dumping and payout-delay scams, and shows what legitimate Grand Club handling looks like at Club ID 1074072.",
    sections: [
      {
        heading: "Seven warning signs at a glance",
        paragraphs: [
          "Red flag one: an agent asks you to deposit to a personal bank account or crypto wallet not shown inside @grandppuzbot. Red flag two: promised rakeback above published terms with no written weekly settlement record.",
          "Red flag three: pressure to join quickly before verifying Club ID 1074072 in the official PPPoker search. Red flag four: refusal to process a small test withdrawal. Red flag five: instructions to share your PPPoker password or SMS codes.",
          "Red flag six: tables that exist only in private messages, not in the club lobby. Red flag seven: payout delays blamed on vague union issues while the agent still accepts new deposits.",
        ],
        bullets: [
            "1. Payments outside @grandppuzbot",
            "2. Rakeback promises with no weekly proof",
            "3. Wrong or unverified Club ID",
            "4. No small test cashout allowed",
            "5. Password or OTP requests",
            "6. Tables only in DMs, not lobby",
            "7. Deposits open while withdrawals stall",
        ]
      },
      {
        heading: "Fake agents and impersonation",
        paragraphs: [
          "Scammers copy Grand branding in Telegram usernames that differ by one character from @grandppuzbot or @Grand_Poker_Reception. Always open links from the official Grand site or saved contacts — never from a stranger who cold-messages you after a big win.",
          "Fake agents sometimes show screenshots of chip balances they do not control. Verify membership yourself: search Club ID 1074072 inside PPPoker, apply through the app and wait for in-app approval before sending money.",
          "If someone claims to be Grand staff but routes payments to a personal Pix key, SBP number or USDT address, stop. Grand never substitutes private accounts for the bot flow on routine deposits.",
        ]
      },
      {
        heading: "Chip dumping and collusion scams",
        paragraphs: [
          "Chip dumping is when players transfer value through intentional losses to bypass cashier limits or launder stolen chips. Clubs and unions monitor for unusual loss patterns between linked accounts.",
          "Scammers may ask you to soft-play or dump chips to a partner account in exchange for fake rakeback bonuses. That puts your Grand membership at risk and can freeze withdrawals while security reviews hands.",
          "Grand enforces anti-collusion rules like other serious clubs. Play each hand for maximum expected value and report suspicious soft-play to @Grand_Poker_Reception with hand histories when possible.",
        ]
      },
      {
        heading: "Payout delay and exit scams",
        paragraphs: [
          "The classic exit scam accepts deposits until a large balance accumulates, then delays withdrawals with excuses while the agent disappears. Warning signs include sudden new payment details and cashouts paused for all players except insiders.",
          "Legitimate Grand cashouts through @grandppuzbot process routine requests within hours, not weeks. First-time large withdrawals may need a short manual check — that is different from indefinite stalling with no timeline.",
          "If your withdrawal is delayed, message @Grand_Poker_Reception with username, request time and receipt. Escalation through official channels beats negotiating with an agent who only replies in disappearing Telegram accounts.",
        ],
        bullets: [
            "Routine Grand cashouts: hours, not weeks",
            "Sudden new payment details = stop and verify",
            "Escalate delays to @Grand_Poker_Reception",
            "Keep screenshots of bot requests and receipts",
        ]
      },
      {
        heading: "How Grand Club protects players",
        paragraphs: [
          "Grand centralizes money flow in @grandppuzbot at 1 chip = $1 with published 60% rakeback and 30% referral terms. Transparent economics leave less room for bait-and-switch schemes common with grey-market agents.",
          "Human support at @Grand_Poker_Reception backs the bot on disputes, Referral ID fixes and fraud reports. You always have a second contact point that is not tied to a single individual wallet.",
          "Before your first deposit, confirm Club ID 1074072 inside PPPoker, run a small test cycle and bookmark official Telegram contacts. Those three steps filter most scams before chips leave your bank.",
        ]
      }
    ],
    faq: [
      {
        q: "What is the only official Grand cashier?",
        a: "@grandppuzbot on Telegram. Any other account asking for deposits is a red flag unless Grand explicitly directs you to @Grand_Poker_Reception for a special case.",
      },
      {
        q: "Is chip dumping illegal?",
        a: "It violates club rules and can lead to frozen balances and bans. Never agree to intentional losses for someone else.",
      },
      {
        q: "How long should a normal cashout take?",
        a: "Routine Pix, SBP, GCash and USDT cashouts usually complete within hours via @grandppuzbot.",
      },
      {
        q: "Someone copied Grand branding — what do I do?",
        a: "Do not pay. Verify Club ID 1074072 in the PPPoker app and contact only @grandppuzbot or @Grand_Poker_Reception from saved official links.",
      }
    ],
  },
  "pppoker-philippines": {
    intro:
      "The Philippines is one of the fastest-growing PPPoker regions, with Pinoy players looking for GCash-friendly cashiers, tables that run during evening PHT hours and clubs that pay rakeback on schedule. Grand Club (ID 1074072) serves that audience with GCash settlement through @grandppuzbot, 60% rakeback, a 30% referral program and access to international union traffic at a fixed rate of 1 chip = $1.",
    sections: [
      {
        heading: "Why Pinoy players choose PPPoker clubs",
        paragraphs: [
          "Regulated online poker options are limited for many Filipino players, so club poker on PPPoker fills the gap for NLH cash, MTTs, PLO and private games with familiar stakes. Clubs sit inside unions that share table liquidity across Asia, Europe and the Americas, which means a Manila evening session can include action from multiple regions in the same lobby.",
          "Choosing the right club matters more than installing the app. A reliable agent offers transparent chip rates, fast GCash settlement and rakeback that posts every week without excuses. Weak clubs advertise big bonuses but delay cashouts or change terms after your first deposit.",
          "Grand Club targets serious recreational and semi-pro players who want predictable economics: 1 chip = $1, 60% rakeback on contributed rake and referral income at 30% of referred rake. That structure is easier to plan around than rotating promotional rates that disappear after a month.",
        ]
      },
      {
        heading: "GCash deposits and withdrawals through Grand cashier",
        paragraphs: [
          "Grand processes GCash for Filipino players through @grandppuzbot on Telegram. Open the bot, choose the Philippines / GCash option and follow the amount in PHP with the phone number or account details shown in the chat. Chips credit after the transfer confirms — usually within minutes during cashier hours.",
          "Withdrawals use the same path in reverse: request a cashout in the bot, confirm your GCash number and receive PHP at the rate locked at 1 chip = $1 equivalent. There is no hidden spread between buying and selling chips when you use the official Grand cashier.",
          "For your first transaction, send a small test deposit and complete one withdrawal before loading a full session bankroll. That verifies your GCash account, name match and Telegram link are correct. @Grand_Poker_Reception handles edge cases that need a human, such as a wrong Referral ID or a transfer stuck in reconciliation.",
        ],
        bullets: [
            "GCash in and out via @grandppuzbot — official Grand cashier only",
            "Settlement at 1 chip = $1 with no deposit/withdrawal spread",
            "Test with a small GCash transfer before a large load",
            "Human support at @Grand_Poker_Reception for account issues",
        ]
      },
      {
        heading: "Filipino interface and joining Grand Club",
        paragraphs: [
          "PPPoker includes a full Filipino translation. Open the menu on the home screen, tap Settings → Language and select Filipino. Menus, lobby filters and table prompts switch immediately; your username and table chat stay as you typed them.",
          "When applying to Grand Club, enter Club ID 1074072 and your Referral ID before playing your first hand. Rake generated without the correct link cannot be credited retroactively, and rakeback calculations depend on that connection from day one.",
          "The club lobby separates Cash Games, MTT and SNG tabs. Use stake filters to find NLH or PLO at your level — micro and low stakes often run well during PHT prime time when Pinoy regulars finish work.",
        ]
      },
      {
        heading: "Philippine peak hours and table traffic",
        paragraphs: [
          "Most Filipino regulars play between roughly 19:00 and 01:00 PHT on weekdays, with wider volume on Friday and Saturday nights. Those hours overlap with European morning and CIS afternoon traffic, which keeps mid-stakes NLH and PLO tables populated.",
          "If you prefer softer pools, try earlier afternoon sessions on weekends or tables with lower average pot sizes in the lobby preview. Peak hour does not always mean the best win rate — it means the most volume and the widest game selection.",
          "Multi-tabling is popular among Pinoy grinders on the Windows client. Keep Telegram open with @grandppuzbot if you plan mid-session deposits so you do not miss a confirmation message during a big pot.",
        ],
        bullets: [
            "Peak PHT: roughly 19:00–01:00 on weekdays",
            "Weekend nights carry the widest MTT and cash volume",
            "Lobby filters help find stakes that match your bankroll",
            "Windows client supports multi-table during Filipino prime time",
        ]
      },
      {
        heading: "Grand Club advantages for the Philippines",
        paragraphs: [
          "Grand sits in an international union, so you are not limited to a small local player pool. You get GCash-friendly payments and Filipino-language support while competing at tables that include global traffic.",
          "The 60% rakeback rate is stated upfront and settled weekly through @grandppuzbot together with any cashout you request. That beats most generic clubs that advertise high rakeback but cap payouts or exclude tournament fees.",
          "If you run a poker community or stream, the 30% referral share on referred rake stacks on top of what your invites earn. Same rules apply everywhere: no self-referrals, no chip dumping and no artificial volume.",
        ]
      }
    ],
    faq: [
      {
        q: "Does Grand Club accept GCash?",
        a: "Yes. Filipino players deposit and withdraw via GCash through @grandppuzbot at 1 chip = $1 equivalent.",
      },
      {
        q: "Can I use the app in Filipino?",
        a: "Yes. PPPoker supports Filipino in Settings → Language. Grand publishes guides in Filipino as well.",
      },
      {
        q: "What are the best hours to play from the Philippines?",
        a: "Evening PHT, especially 19:00–01:00, usually has the most cash and MTT traffic in the union.",
      },
      {
        q: "How do I join Grand Club?",
        a: "Apply with Club ID 1074072 and your Referral ID in the PPPoker app, then fund via @grandppuzbot once approved.",
      }
    ],
  },
  "plo5-guide": {
    intro:
      "PLO5 — Pot-Limit Omaha with five hole cards — is one of the most popular formats in PPPoker club lobbies after NLH. The extra card increases action, pot sizes and variance compared to four-card PLO. This guide explains the rules, where to find PLO5 tables in Grand Club (ID 1074072) and practical tips for beginners who already know Hold'em basics.",
    sections: [
      {
        heading: "What PLO5 is and how it differs from PLO4",
        paragraphs: [
          "In PLO5 each player receives five private cards and must use exactly two of them together with exactly three board cards to make a hand. That is the same core rule as PLO4, but the fifth hole card creates more draws, more nut changes on later streets and larger pots on average.",
          "Pot-limit betting means the maximum raise equals the current pot size including the call amount. You cannot shove over the pot limit in a single raise, which keeps stacks deeper relative to the pot and rewards position and draw equity more than NLH.",
          "Many PPPoker unions run PLO5 alongside PLO4 and NLH. Grand Club shares union liquidity, so PLO5 tables appear in the same lobby tabs as other cash games once your membership is active.",
        ]
      },
      {
        heading: "Basic PLO5 rules every beginner needs",
        paragraphs: [
          "Hand rankings match standard poker: royal flush down to high card. The critical difference from Hold'em is that you must use two hole cards — a single ace on board does not make your one ace in hand an ace pair unless paired with another hole card.",
          "Preflop, strong starting hands contain coordinated suits and ranks: double-suited aces with kings and queens, broadway wraps and hands that flop multiple nut draws. Trash hands with four low cards and one disconnected high card lose money fast in multiway pots.",
          "Postflop, count your outs carefully and respect pot geometry. With four or five opponents seeing a flop, top pair weak kicker is rarely enough. The goal is to draw to the nuts or fold when dominated.",
        ],
        bullets: [
            "Must use exactly two of five hole cards with three board cards",
            "Pot-limit: max raise = pot size including call",
            "Coordinated, double-suited aces are premium preflop holdings",
            "Multiway pots punish one-pair hands without redraws",
        ]
      },
      {
        heading: "Finding PLO5 tables in PPPoker and Grand Club",
        paragraphs: [
          "Open Grand Club (1074072) from the PPPoker home screen and tap Cash Games. Use the game-type filter to select PLO or Omaha variants — PLO5 tables are labelled separately from PLO4 in most union lobbies. Stake filters accept notation like 1/2 or 0.5/1 in big-blind terms.",
          "If no PLO5 table is running, check peak union hours: evenings in Europe, CIS late night and Asian prime time often spawn new PLO5 rooms. You can also join a waiting list on a full table rather than opening a new one at micro stakes.",
          "MTT and SNG schedules occasionally include PLO5 events under the MTT tab. Filter by Omaha or check the daily Grand Club announcement channel for featured PLO5 tournaments.",
        ]
      },
      {
        heading: "Preflop and postflop tips for new PLO5 players",
        paragraphs: [
          "Play tight from early position and widen slightly on the button. Five-card Omaha rewards hands that can flop multiple strong draws — bare aces with low side cards are traps in multiway pots.",
          "On the flop, prioritize nut potential. Wrap straight draws, flush draws with the nut suit and combo draws that can freeroll opponents are where PLO5 profit comes from. Folding second-nut flush draws on paired boards is often correct.",
          "Avoid bloating pots with dominated draws. If you have a non-nut flush draw and face a pot-sized raise from two opponents, the price may look right but reverse implied odds hurt when you make the second-best hand.",
        ],
        bullets: [
            "Tight EP, wider BTN — position matters more than in NLH",
            "Flop nut potential beats bare high pairs in multiway pots",
            "Fold dominated draws when facing heat from multiple players",
            "Use hand history in profile to review big pots after sessions",
        ]
      },
      {
        heading: "Bankroll and rakeback considerations at Grand",
        paragraphs: [
          "PLO5 variance runs higher than NLH at the same stake. A common guideline is three to five times the NLH buy-in depth for the same comfort level — if you play 1/2 NLH with 200 big blinds, consider 400–600 BB for PLO5 until you know the pool.",
          "Grand Club returns 60% rakeback on contributed rake at 1 chip = $1. PLO5 pots generate more rake per hand than comparable NLH, so rakeback forms a larger share of your expected value at the same hourly volume.",
          "Fund through @grandppuzbot and keep @Grand_Poker_Reception handy for stake questions. Apply with Club ID 1074072 and your Referral ID before your first PLO5 session so rake counts from hand one.",
        ]
      }
    ],
    faq: [
      {
        q: "What is the difference between PLO4 and PLO5?",
        a: "PLO5 deals five hole cards instead of four. You still use exactly two hole cards with three board cards, but pots and variance are typically larger.",
      },
      {
        q: "Where do I find PLO5 in Grand Club?",
        a: "Open Club ID 1074072, go to Cash Games and filter for PLO/Omaha variants. PLO5 tables are listed separately from PLO4 in the lobby.",
      },
      {
        q: "How much bankroll do I need for PLO5?",
        a: "Most players use three to five times their NLH buy-in depth at the same stake because PLO5 variance is higher.",
      },
      {
        q: "Does PLO5 rake qualify for 60% rakeback?",
        a: "Yes. All contributed rake in Grand Club counts toward the 60% weekly rakeback settlement through @grandppuzbot.",
      }
    ],
  },
  "grand-payout-guarantee": {
    intro:
      "Trust in a PPPoker club starts with whether your chips cash out at the rate you were promised. Grand Club guarantees settlement at 1 chip = $1 through a single verified Telegram cashier — @grandppuzbot — backed by human support at @Grand_Poker_Reception. This guide explains what that guarantee covers, how we protect player bankrolls and the step-by-step settlement process from deposit to weekly rakeback payout.",
    sections: [
      {
        heading: "What the Grand payout guarantee covers",
        paragraphs: [
          "The guarantee has three parts: a fixed chip rate, a single official cashier channel and scheduled settlement of rakeback together with withdrawals. Every chip you buy or sell through @grandppuzbot converts at 1 chip = $1 equivalent in your local currency — PHP via GCash, BRL via Pix, RUB via SBP and other rails listed in the bot.",
          "Grand does not operate parallel cashiers in private chats or alternate Telegram accounts. If someone messages you offering a better rate or faster payout outside @grandppuzbot, that is not Grand Club and is not covered by this guarantee.",
          "Rakeback at 60% of contributed rake posts on the same weekly cycle as chip cashouts you request. There is no separate manual negotiation for standard members — the rate is published and applied consistently.",
        ]
      },
      {
        heading: "How we protect your bankroll",
        paragraphs: [
          "Player funds are segregated from club operating accounts at the chip ledger level. When you deposit, chips credit to your PPPoker club balance under Club ID 1074072; when you withdraw, the cashier debits that balance only after confirming your identity and payout destination in the bot flow.",
          "Grand monitors for chip dumping, collusion and artificial volume that could threaten club solvency. Those rules protect legitimate players — your bankroll is not used to subsidize fraud rings or self-referral schemes.",
          "First-time and large withdrawals may pass a short manual review at @Grand_Poker_Reception. That check confirms your GCash, Pix, SBP or bank details match the name on your account and prevents stolen-wallet payouts.",
        ],
        bullets: [
            "Single official cashier: @grandppuzbot only",
            "Fixed rate 1 chip = $1 on deposits and withdrawals",
            "Anti-fraud rules protect solvency for honest players",
            "Manual review only for verification — not indefinite delays",
        ]
      },
      {
        heading: "The settlement process step by step",
        paragraphs: [
          "Step one: apply to Grand Club with Club ID 1074072 and your Referral ID in the PPPoker app. Wait for approval before sending money — chips cannot credit to a pending application.",
          "Step two: open @grandppuzbot, select your region and payment rail, and follow the exact amount and reference shown. Do not round or alter the transfer — mismatched references slow reconciliation.",
          "Step three: chips appear in your club balance after the cashier confirms the incoming payment. Play as normal; contributed rake accumulates toward your 60% rakeback. Step four: request withdrawal or rakeback settlement in the same bot. Grand processes eligible requests on the weekly cycle together with any cashout you file.",
        ]
      },
      {
        heading: "Withdrawals, timing and verification",
        paragraphs: [
          "Most local rails — Pix, GCash, SBP — confirm within minutes to a few hours during cashier hours. Generic bank transfers may take longer depending on your bank and time zone.",
          "Withdrawals deduct from your in-app chip balance first. If you request more than your balance, the bot will reject the request rather than create a partial IOU. Rakeback credits add to the same balance before you cash out or can be withdrawn separately on schedule.",
          "Keep your Telegram username stable and respond if @Grand_Poker_Reception asks for a one-time verification screenshot. That step is rare after your first successful withdrawal but protects both you and the club from account takeover.",
        ]
      },
      {
        heading: "What to do if something goes wrong",
        paragraphs: [
          "If a deposit does not credit within the expected window, reopen @grandppuzbot and check the transaction status before sending a duplicate transfer. Duplicates require manual matching and delay both payments.",
          "For stuck withdrawals, missing rakeback or a suspected impersonator, contact @Grand_Poker_Reception with your PPPoker ID, transfer receipt and timestamp. Do not send money to any account not displayed inside the official bot flow.",
          "Grand resolves standard payout disputes against the ledger and bank records — not chat promises from unofficial agents. That is the core of the payout guarantee: one rate, one cashier, documented settlement.",
        ],
        bullets: [
            "Never send funds outside @grandppuzbot displayed instructions",
            "Contact @Grand_Poker_Reception with ID + receipt for disputes",
            "Do not duplicate deposits without cashier confirmation",
            "Report impersonators — they are not covered by the guarantee",
        ]
      }
    ],
    faq: [
      {
        q: "What chip rate does Grand guarantee?",
        a: "1 chip = $1 equivalent on both deposits and withdrawals through @grandppuzbot, with no hidden spread.",
      },
      {
        q: "How fast are withdrawals processed?",
        a: "Most local rails confirm within minutes to a few hours. First-time or large cashouts may need a short manual review.",
      },
      {
        q: "Is rakeback included in the guarantee?",
        a: "Yes. 60% rakeback on contributed rake settles weekly through the same official cashier as chip cashouts.",
      },
      {
        q: "Who do I contact for payout problems?",
        a: "Message @Grand_Poker_Reception with your PPPoker ID and transfer receipt. Use only @grandppuzbot for deposits and withdrawals.",
      }
    ],
  },
  "rakeback-comparison": {
    intro:
      "Rakeback is the main economic difference between PPPoker clubs — two clubs at the same stakes can cost you hundreds of dollars per month apart once rake adds up. Grand Club publishes 60% rakeback on contributed rake at 1 chip = $1 with a 30% referral program. This guide compares that structure with typical club offers and lists what to verify before you deposit anywhere else.",
    sections: [
      {
        heading: "Why rakeback math matters in club poker",
        paragraphs: [
          "Every pot with rake reduces your win rate. In club poker the house take is often higher as a percentage of pots than on regulated sites, which makes rakeback a direct refund on volume rather than a cosmetic bonus.",
          "Contributed rake — the method Grand uses — returns a share based on how much rake you personally put into pots. That aligns incentives: the more you play legitimately, the more you get back. Some clubs advertise dealt rake or flat VIP tiers that look higher on paper but pay less to average players.",
          "Compare offers on monthly dollars, not headline percentages. A player generating $500 in contributed rake per month keeps $300 back at Grand's 60% rate versus $200 at 40% — before counting chip rate spreads on cashouts.",
        ]
      },
      {
        heading: "Grand Club structure: 60% rakeback explained",
        paragraphs: [
          "Grand returns 60% of your contributed rake weekly through @grandppuzbot, settled together with chip withdrawals if you request both in the same cycle. The rate applies to cash games and tournaments that generate club rake under Club ID 1074072.",
          "There is no tier ladder to unlock — new approved members and long-time regulars receive the same published percentage. Referral income is separate: you earn 30% of rake from players who join with your Referral ID, on top of their own 60%.",
          "Chip purchases and sales stay at 1 chip = $1 through the official cashier. Rakeback is calculated on rake, not on deposit volume, so promotional deposit bonuses at other clubs rarely beat a straight 60% if you play regularly.",
        ],
        bullets: [
            "60% on contributed rake — published rate, no hidden cap",
            "Weekly settlement via @grandppuzbot",
            "30% referral on referred rake — stacks for agents",
            "1 chip = $1 — no spread between buy-in and cashout",
        ]
      },
      {
        heading: "Common offers from other clubs and hidden caps",
        paragraphs: [
          "Many clubs advertise 70–80% rakeback in recruitment posts but cap weekly payouts, exclude MTT fees or reset your rate if volume drops. Read the fine print before switching — headline numbers without settlement history are marketing, not economics.",
          "Some agents quote different chip rates on deposit versus withdrawal — buying at 1 chip = $0.95 and cashing at $0.90 effectively taxes your bankroll even if rakeback looks high. Grand's single rate removes that leak.",
          "Delayed rakeback is another red flag. Clubs that pay every two weeks or only on request through unofficial chats create float they may not honor during disputes. Grand's weekly cycle through one bot is auditable.",
        ]
      },
      {
        heading: "What to check before you switch clubs",
        paragraphs: [
          "Ask for the rakeback formula in writing: contributed, dealt or hybrid. Confirm whether tournament rake counts and whether there is a weekly maximum in chips or dollars.",
          "Verify the cashier: one Telegram bot or multiple personal accounts is a trust signal. Grand uses only @grandppuzbot with @Grand_Poker_Reception for disputes — not random usernames in DMs.",
          "Run a small test cycle: deposit, play one session, request rakeback and a partial withdrawal. If any step requires unofficial channels or vague timelines, compare that friction to Grand's published process before moving a full bankroll.",
        ]
      },
      {
        heading: "Referral stacking and long-term value at Grand",
        paragraphs: [
          "Players who invite friends earn 30% of referred rake while invites keep 60% on their own volume. For a community leader that can exceed what a flat high rakeback club pays a single grinder, without cap tricks on the base rate.",
          "Long-term value also depends on union traffic and payout reliability. Grand's international union keeps tables running across time zones, and the payout guarantee at 1 chip = $1 means rakeback dollars you earn are dollars you can withdraw.",
          "Apply with Club ID 1074072 and the correct Referral ID before your first hand — rake credited to the wrong club or agent cannot be moved retroactively when you compare clubs later.",
        ],
        bullets: [
            "Referral 30% + member 60% — transparent split",
            "Union liquidity + reliable cashier = full package",
            "Wrong Referral ID loses historical rake credit",
            "Compare total economics, not headline rakeback alone",
        ]
      }
    ],
    faq: [
      {
        q: "What rakeback rate does Grand Club offer?",
        a: "60% on contributed rake, settled weekly through @grandppuzbot at Club ID 1074072.",
      },
      {
        q: "How is Grand different from 80% rakeback clubs?",
        a: "Many high advertised rates have caps, exclusions or delayed payouts. Grand publishes 60% without tier games and settles at 1 chip = $1.",
      },
      {
        q: "Does tournament rake count for rakeback?",
        a: "Yes. Rake generated under Grand Club ID 1074072 counts toward the 60% weekly settlement unless club rules state otherwise for a specific promo.",
      },
      {
        q: "Can I earn referral rakeback on top of my own?",
        a: "Yes. You keep 60% on your rake and earn 30% of rake from players who join with your Referral ID.",
      }
    ],
  },
  "hud-in-pppoker": {
    intro:
      "Statistics help club poker players spot tendencies, but PPPoker handles HUD data differently from desktop sites like PokerStars. The app includes built-in hand history and optional VIP stat overlays, while external trackers face platform limits. This guide explains what is available in PPPoker, how Grand Club (ID 1074072) treats stat tools at the table and how to use information responsibly without violating club rules.",
    sections: [
      {
        heading: "What a HUD is and why players use one",
        paragraphs: [
          "A HUD — heads-up display — shows opponent statistics such as VPIP, PFR, aggression frequency and fold-to-cbet next to their avatar. Regulars use these numbers to classify unknowns quickly: a 45/35 player gets wider calls; a 12/8 nit gets more steals.",
          "On traditional poker clients, third-party software reads hand histories from disk and paints stats in real time. PPPoker is mobile-first and club-based, so the ecosystem works differently — most analysis happens inside the app or through exported histories after sessions.",
          "Stats do not replace reading board texture and bet sizing. They narrow ranges when sample sizes are large enough. At micro stakes in Grand Club, many opponents have small samples, so treat early numbers as hints, not facts.",
        ]
      },
      {
        heading: "Built-in stats in PPPoker",
        paragraphs: [
          "PPPoker stores hand history in your profile. Open Profile → Hand History to review past pots, replay streets and check your own VPIP and win rate over recent sessions. Filters separate club games, stakes and formats including NLH and PLO.",
          "At the table, tap an opponent avatar to see limited session stats when the club enables the feature — hands played together, recent showdown results and basic tendencies. These are not full HM/PT databases but enough for quick adjustments during a single session.",
          "The replay tool lets you step through big pots frame by frame. Many Grand regulars review coolers and bluff spots after sessions instead of relying on external trackers during play.",
        ]
      },
      {
        heading: "External trackers and club policy",
        paragraphs: [
          "PPPoker does not support third-party HUD overlays the way desktop clients did in the 2010s. External tools that scrape the screen or inject overlays risk account warnings because they violate fair-play rules and are hard to verify for collusion.",
          "Grand Club follows union fair-play standards: play from the official PPPoker app on phone or Windows client without unauthorized assistants. Chip dumping, botting and realtime solver feeds are prohibited — the same category as banned HUD injectors.",
          "If you export hand histories manually for study in Hold'em Manager or similar tools off-table, that is personal review — not live overlay. Keep analysis offline and do not share realtime stat feeds with players seated at your table.",
        ],
        bullets: [
            "No authorized third-party live HUD overlay in PPPoker",
            "Profile hand history and replay for post-session review",
            "Realtime assistants and bots are prohibited in Grand Club",
            "Offline study from exported notes is personal use — not table overlay",
        ]
      },
      {
        heading: "VIP card and advanced stat features",
        paragraphs: [
          "PPPoker sells optional VIP packages with diamonds that unlock cosmetic items and enhanced stat cards. The VIP card can display richer lifetime stats on your profile and expanded opponent notes when the club enables VIP features.",
          "Purchasing VIP does not bypass fair-play rules — it adds convenience and depth to stats PPPoker already collects. Check the shop in-app for current VIP tiers; benefits vary by app version and region.",
          "Grand members still earn 60% rakeback on contributed rake regardless of VIP purchase. VIP is a personal tool expense, not a club fee — fund chips through @grandppuzbot at 1 chip = $1 separately from diamond purchases.",
        ]
      },
      {
        heading: "Using stats responsibly at Grand Club tables",
        paragraphs: [
          "Focus on bet sizing and position first; add stats when you have at least 50–100 hands on an opponent in the same stake. Small samples exaggerate random swings — a 80% VPIP over ten hands is noise, not a calling station label.",
          "Use @Grand_Poker_Reception if you suspect someone uses banned realtime tools. Report the PPPoker ID and table name; union security reviews hand patterns — repeated identical timing and perfect exploit lines are stronger signals than one bad beat.",
          "Apply to Grand with Club ID 1074072 and your Referral ID so your volume counts toward rakeback while you build a history database in the app. Weekly 60% settlement through @grandppuzbot rewards the hours you spend studying opponents the legitimate way.",
        ],
        bullets: [
            "Wait for meaningful sample sizes before major exploits",
            "Report suspected bots or banned tools to @Grand_Poker_Reception",
            "VIP stats supplement — do not replace hand reading",
            "Rakeback at 60% applies whether or not you buy VIP",
        ]
      }
    ],
    faq: [
      {
        q: "Can I use PokerTracker or Hold'em Manager live in PPPoker?",
        a: "No live third-party HUD overlay is supported. Use in-app hand history and replay, or offline study after sessions.",
      },
      {
        q: "What stats does PPPoker show at the table?",
        a: "Tap an opponent avatar for session stats when enabled. Full history lives under Profile → Hand History.",
      },
      {
        q: "What does the VIP card add?",
        a: "Richer profile stats and optional enhanced opponent notes via in-app VIP packages purchased with diamonds.",
      },
      {
        q: "Does Grand Club allow realtime solvers or bots?",
        a: "No. Realtime assistants, bots and unauthorized overlays violate fair-play rules. Report suspects to @Grand_Poker_Reception.",
      }
    ],
  },
  "first-session-checklist": {
    intro:
      "Your first PPPoker session at Grand Club should be smooth, not stressful. This checklist walks you from downloading the app through your first seated hand at Club ID 1074072 — including registration, club approval, a test deposit through @grandppuzbot and basic table etiquette. Follow it in order and you will avoid the most common first-day mistakes that delay rakeback or chip credits.",
    sections: [
      {
        heading: "Download and install PPPoker",
        paragraphs: [
          "PPPoker runs on iOS, Android and Windows. Download only from the official App Store, Google Play or the verified PPPoker website — third-party APK mirrors sometimes bundle outdated builds or modified clients that clubs cannot support.",
          "After install, allow notifications if you want table alerts and club messages. The Windows client is optional but useful for multi-tabling once you are comfortable. Create a stable username you plan to keep; frequent renames confuse agents and referral tracking.",
          "Update the app before your first session. Grand Club tables run current union software, and older builds occasionally fail to load new tournament lobbies or payment confirmations in Telegram-linked workflows.",
        ]
      },
      {
        heading: "Register your PPPoker account",
        paragraphs: [
          "Open PPPoker and complete registration with a valid phone number or email. Choose a strong password and enable any optional security the app offers. Your PPPoker ID is permanent — write it down before applying to clubs.",
          "Set your display language in Settings if you prefer Russian, Spanish, Portuguese, Uzbek or Filipino. Interface language does not affect chip settlement; Grand still prices chips at 1 chip = $1 regardless of locale.",
          "Do not play real hands in a random public club before joining Grand. Rake generated outside Club ID 1074072 does not count toward your Grand rakeback or referral link. Finish registration first, then apply to the correct club.",
        ]
      },
      {
        heading: "Join Grand Club with the correct IDs",
        paragraphs: [
          "In PPPoker, tap the search icon and enter Club ID 1074072. Submit your join request with the Referral ID your agent or invite link provided. Approval is usually fast during cashier hours; pending requests can be nudged through @Grand_Poker_Reception on Telegram.",
          "Wait for approval before depositing. Chips sent to an unlinked account or wrong club require manual reconciliation and can delay your first session by hours. Screenshot your approved membership screen for your records.",
          "Once inside, explore the club lobby: Cash Games, MTT, SNG and private tables are listed separately. Filter by stake and game type before sitting — Grand runs NLH, PLO, PLO5 and tournament formats across union traffic.",
        ],
        bullets: [
            "Club ID: 1074072 — verify digits before submitting",
            "Referral ID required — ask your inviter or @Grand_Poker_Reception",
            "Wait for approval before funding your account",
            "Confirm you see Grand Club name in the club home screen",
        ]
      },
      {
        heading: "Make your first deposit through Grand cashier",
        paragraphs: [
          "Grand processes deposits and withdrawals through @grandppuzbot on Telegram. Open the bot, select your payment method (USDT, GCash, Humo, Uzcard and other regional options) and follow the amount at 1 chip = $1. Chips credit after the transfer confirms.",
          "For your first load, send a small test deposit — enough for one or two buy-ins at your target stake. Confirm chips appear in the PPPoker wallet inside Club ID 1074072, then optionally run a small test withdrawal before loading your full session bankroll.",
          "Keep Telegram open during the transfer. The bot sends confirmation messages; @Grand_Poker_Reception handles stuck payments, wrong networks on USDT or name mismatches on local bank rails.",
        ],
        bullets: [
            "Official cashier only: @grandppuzbot — no third-party chip sellers",
            "Rate locked at 1 chip = $1 on Grand settlement",
            "Test deposit and one withdrawal before a large load",
            "Support: @Grand_Poker_Reception for payment issues",
        ]
      },
      {
        heading: "First-hand etiquette and session habits",
        paragraphs: [
          "Buy in for a comfortable amount at a stake that matches your bankroll — typically 50–100 big blinds for cash or the listed minimum for MTTs. Use the pre-action buttons responsibly; intentional time-wasting is flagged in club reviews.",
          "Chat at the table should stay respectful. Disputes about hands belong in the hand-history review, not public berating. Grand enforces standard union rules against collusion, chip dumping and multi-accounting.",
          "When you finish, note your session length and results. Rakeback at 60% posts weekly through the same @grandppuzbot cashier together with any withdrawal you request. Your first week establishes the rake baseline for ongoing rebates.",
        ]
      }
    ],
    faq: [
      {
        q: "What Club ID do I enter for Grand?",
        a: "Enter 1074072 in the PPPoker club search and include your Referral ID in the join request.",
      },
      {
        q: "How do I deposit before my first hand?",
        a: "Use @grandppuzbot on Telegram after club approval. Chips settle at 1 chip = $1.",
      },
      {
        q: "Can I play while my join request is pending?",
        a: "You can open the app, but fund and play only after Grand Club approves your membership under ID 1074072.",
      },
      {
        q: "Who helps if my deposit does not credit?",
        a: "Message @Grand_Poker_Reception with your PPPoker ID, transfer proof and the amount sent.",
      }
    ],
  },
  "rake-structure-explained": {
    intro:
      "Rake is the fee clubs collect from pots or tournament entries to fund tables, unions and operations. In PPPoker club poker you do not pay a separate hourly seat charge — rake is embedded in every hand or buy-in. Understanding percentage, cap and whether your club uses contributed or dealt rake helps you estimate costs and verify that Grand Club's 60% rakeback on Club ID 1074072 matches what you actually generate.",
    sections: [
      {
        heading: "What rake is in PPPoker club poker",
        paragraphs: [
          "In cash games, the house takes a small slice of each pot that reaches a minimum threshold — usually after a flop is dealt or once action goes past preflop, depending on table rules. Tournament rake is built into the buy-in: a 10+1 event means 10 chips go to the prize pool and 1 chip is rake.",
          "Clubs do not set rake in isolation. They operate inside unions that publish rake schedules for NLH, PLO and MTT formats. Grand Club passes through standard union rake and returns 60% of your contributed rake weekly via @grandppuzbot at the fixed chip rate of 1 chip = $1.",
          "Rake is not the same as tips or jackpot drops. Some tables add a bad-beat jackpot contribution on top of base rake. Your rakeback statement should separate base rake from optional jackpot fees — ask @Grand_Poker_Reception if a line item looks unclear.",
        ]
      },
      {
        heading: "Percentage and cap explained",
        paragraphs: [
          "Rake percentage tells you what fraction of the pot the club keeps. A common NLH schedule is 5% of the pot with a cap of 3–5 big blinds at micro and low stakes, and higher caps at mid stakes. The cap prevents rake from scaling without limit in enormous pots.",
          "Example: at 1/2 with a 5% rake and 3 BB cap, a 40-chip pot might generate 2 chips rake (5% of 40), but a 200-chip pot generates only 6 chips rake (capped at 3 BB) instead of 10 chips.",
          "MTT rake is quoted as a flat fee per entry — for instance 10% of the buy-in on a 100+10 tournament. SNG and spin formats have their own published schedules in the tournament lobby before you register.",
        ],
        bullets: [
            "Cash rake = percentage of pot, limited by a per-hand cap",
            "Cap is usually expressed in big blinds, not chips",
            "MTT rake is a fixed fee added to the advertised buy-in",
            "Check the table info icon for the exact schedule on your stake",
        ]
      },
      {
        heading: "Contributed rake vs dealt rake",
        paragraphs: [
          "Contributed rake counts only the rake attributed to money you put into the pot. If you fold preflop before contributing, you may generate zero contributed rake on that hand even if rake was collected from others.",
          "Dealt rake divides total table rake equally among all players dealt into the hand, whether they folded preflop or not. Players who fold early still 'earn' dealt rake credit under that model, which inflates apparent volume for tight players.",
          "Grand Club calculates player rakeback on contributed rake — the industry-fair standard for rebate programs. That means your 60% rakeback reflects rake from pots you actually funded, not passive seat time in folded hands.",
        ]
      },
      {
        heading: "Worked examples at Grand Club stakes",
        paragraphs: [
          "Cash example: you play 1/2 NLH and contribute to a 50-chip pot where 2.5 chips rake is taken. Your contributed share might be 1.5 chips if you put in 30 of the 50 chips. Weekly rakeback at 60% returns 0.9 chips on that single hand — small per hand, meaningful over hundreds of hands.",
          "MTT example: you enter a 50+5 tournament (5 chips rake). Your contributed rake for that event is 5 chips. Rakeback at 60% credits 3 chips back on settlement week, independent of whether you cash.",
          "Multi-table session: if you play four tables for two hours and generate 40 chips total contributed rake, Grand returns 24 chips rakeback that week through @grandppuzbot. Verify totals against the in-app rake summary and contact @Grand_Poker_Reception if numbers diverge.",
        ],
        bullets: [
            "1/2 pot, 2.5 rake, 60% back → up to 1.5 chips returned on your share",
            "50+5 MTT → 3 chips rakeback at 60% regardless of finish",
            "Weekly settlement combines cash and MTT contributed rake",
            "All figures at 1 chip = $1 Grand settlement rate",
        ]
      },
      {
        heading: "How rake connects to Grand rakeback and referrals",
        paragraphs: [
          "Every chip of contributed rake you generate in Club ID 1074072 feeds two programs: your personal 60% rakeback and, if you referred the player, the referrer's 30% share. Both use the same underlying rake ledger — no double counting, no hidden haircuts on posted rebates.",
          "Rakeback settles weekly through @grandppuzbot together with withdrawals. You do not need a separate claim form; the bot statement lists gross rake, rebate rate and net credit. Referral income for agents follows the same cycle.",
          "Transparent rake math is why Grand publishes these guides. Compare your weekly rakeback to contributed rake in the app. Consistent clubs welcome the audit; clubs that dodge questions about rake methodology are clubs to leave.",
        ]
      }
    ],
    faq: [
      {
        q: "Does Grand use contributed or dealt rake?",
        a: "Contributed rake. Your 60% rakeback is based on rake from pots you funded, not dealt-hand allocation.",
      },
      {
        q: "Is MTT rake included in rakeback?",
        a: "Yes. Tournament fees in Club ID 1074072 count toward contributed rake and qualify for 60% weekly rakeback.",
      },
      {
        q: "Where do I see my rake totals?",
        a: "Check PPPoker club statistics and compare with the weekly statement from @grandppuzbot. Contact @Grand_Poker_Reception for discrepancies.",
      },
      {
        q: "What is the chip value for rakeback?",
        a: "Grand settles rakeback at 1 chip = $1 through the official cashier.",
      }
    ],
  },
  "mtt-strategy-grand": {
    intro:
      "Multi-table tournaments at Grand Club combine union-wide fields with club-level rakeback and reliable chip settlement at 1 chip = $1. Whether you are firing your first nightly MTT or building a semi-pro schedule, this guide covers Grand's tournament calendar, stage-by-stage strategy and bankroll rules that keep variance manageable inside Club ID 1074072.",
    sections: [
      {
        heading: "MTT schedule and formats at Grand Club",
        paragraphs: [
          "Grand Club posts MTTs in the PPPoker tournament lobby under Club ID 1074072. Expect daily freezeouts, rebuy events, PKO bounties and occasional high-guarantee series shared across the union. Start times follow UTC in the app — convert to your local zone before setting alarms.",
          "Buy-in structures are listed as prize pool plus rake — for example 20+2 means 20 chips to the pool and 2 chips rake. Your 60% rakeback applies to the rake portion, settled weekly through @grandppuzbot alongside any withdrawal.",
          "Weekend schedules carry the largest guarantees and deepest fields. Weekday dailies suit players who want smaller fields and faster structures. Check the club notice board and @Grand_Poker_Reception announcements for seasonal series and satellite paths into bigger events.",
        ],
        bullets: [
            "Daily MTTs plus weekend higher-guarantee events in union lobby",
            "Buy-in shown as prize + rake — rake qualifies for 60% rakeback",
            "PKO, rebuy and turbo formats rotate through the weekly calendar",
            "Club notices and @Grand_Poker_Reception post schedule updates",
        ]
      },
      {
        heading: "Early, middle and late stage strategy",
        paragraphs: [
          "Early stage: play tight relative to stack depth. Deep stacks invite speculative hands, but unnecessary flips thin your tournament equity before antes rise. Focus on position, suited connectors and dominating weaker opens from late position.",
          "Middle stage: antes and blinds force action. Open wider in late position, defend blinds selectively and look for reshove spots against short stacks who panic. Pay attention to average stack versus yours — being below average means you need aggression, not passivity.",
          "Late stage and final table: ICM pressure dominates. Short stacks shove wider; big stacks apply pressure without risking elimination. Pay jumps matter — sometimes folding a marginal call is correct even with decent pot odds because survival secures a higher minimum cash.",
        ]
      },
      {
        heading: "Bankroll management for MTTs",
        paragraphs: [
          "Tournament variance is higher than cash. A common rule is 100 buy-ins for the stake you regularly play — if you fire 20+2 events, keep at least 2,200 chips dedicated to MTTs at 1 chip = $1. Drop down a level after a downswing instead of chasing losses at the same buy-in.",
          "Satellites and step tournaments stretch bankroll by winning seats into bigger events at reduced cost. Grand union lobbies often list cheap satellites into nightly majors — use them when your core bankroll cannot support direct buy-ins yet.",
          "Separate your MTT roll from cash game funds. Mixing wallets makes it hard to see true ROI. Track entries, cashes and rake paid; your weekly @grandppuzbot rakeback statement helps offset fees over time.",
        ],
        bullets: [
            "Target 100 buy-ins at your regular MTT stake (1 chip = $1)",
            "Move down after sustained losses — do not shot-take above bankroll",
            "Use satellites to enter bigger events at lower upfront cost",
            "Keep MTT and cash bankrolls separate for clear tracking",
        ]
      },
      {
        heading: "Table selection and multi-tabling MTTs",
        paragraphs: [
          "Within a single MTT you cannot choose opponents, but you can choose which events to enter. Softer fields often appear in smaller nightly dailies; tougher regulars cluster in high-guarantee Sunday majors. Start where your skill edge is highest relative to field strength.",
          "Multi-tabling MTTs is possible on the Windows client but demands discipline. Two to four tables is a practical cap for most players until post-flop decisions become automatic. Disable non-essential animations and use bet presets to save time on late-position opens.",
          "When a table breaks, note new seat assignments and stack sizes before acting. Union MTTs reseat players across the field — blind position changes every hand after breaks, so adjust open ranges accordingly.",
        ]
      },
      {
        heading: "Grand Club advantages for tournament players",
        paragraphs: [
          "Grand returns 60% of MTT rake through contributed rake accounting, which lowers effective buy-in cost over volume. A player firing ten 20+2 events per week pays 20 chips rake but receives 12 chips back on settlement — material for grinders.",
          "Chip settlement at 1 chip = $1 through @grandppuzbot means prize pool values in the lobby map directly to real money without hidden FX spreads. Withdrawals process through the same cashier with support from @Grand_Poker_Reception.",
          "Union liquidity brings international fields without leaving Club ID 1074072. You compete at scale while keeping Grand rakeback, referral credit if you invited teammates and a single Telegram cashier for all bankroll movements.",
        ]
      }
    ],
    faq: [
      {
        q: "Where do I find Grand Club MTTs?",
        a: "Open Club ID 1074072 in PPPoker and tap the MTT tab in the club lobby.",
      },
      {
        q: "Does MTT rake count for 60% rakeback?",
        a: "Yes. Tournament fees are contributed rake and rebate weekly via @grandppuzbot.",
      },
      {
        q: "How many buy-ins should I keep for MTTs?",
        a: "Most players use at least 100 buy-ins at their regular stake, valued at 1 chip = $1.",
      },
      {
        q: "Can I play MTTs on mobile?",
        a: "Yes on iOS and Android. Windows is better for multi-tabling several MTTs at once.",
      }
    ],
  },
  "pppoker-vs-pokerbros-vs-clubgg": {
    intro:
      "PPPoker, PokerBros and ClubGG are the three dominant club-poker apps in 2026, each with millions of installs and overlapping but distinct ecosystems. Players choose based on app quality, union liquidity, agent reliability and payment rails — not marketing slogans. This comparison explains where each platform fits and why Grand Club on PPPoker (ID 1074072) remains a strong home for players who want 60% rakeback, 30% referrals and settlement at 1 chip = $1.",
    sections: [
      {
        heading: "App experience and platform features",
        paragraphs: [
          "PPPoker offers mature iOS, Android and Windows clients with broad language support, in-app hand history and a long track record in Asian and CIS markets. Table animations, multi-tabling and club management tools are polished after years of iteration.",
          "PokerBros targets a similar club model with its own UI and union network. Some regions report strong local agent communities, but app updates and regional availability vary — always verify you download the official build for your country.",
          "ClubGG entered later with a leaner interface and aggressive marketing in select markets. It runs club poker on a separate backend from PPPoker, meaning your Grand Club chips and rakeback do not transfer — you choose one primary ecosystem per bankroll.",
        ]
      },
      {
        heading: "Unions, liquidity and game selection",
        paragraphs: [
          "Liquidity comes from unions — groups of clubs that share table pools. PPPoker unions remain among the largest globally, with NLH, PLO, PLO5, MTT and OFC running around the clock across time zones.",
          "PokerBros unions are substantial in Latin America and parts of Asia but differ in stake spreads and peak hours. ClubGG unions are growing but smaller in many regions outside their focus markets.",
          "Grand Club sits in a PPPoker international union, so members access global traffic without leaving Club ID 1074072. That matters if you play evenings in Europe, CIS or the Philippines and want populated mid-stakes tables.",
        ],
        bullets: [
            "PPPoker: largest union network, widest format selection",
            "PokerBros: strong in select regions, separate union pools",
            "ClubGG: growing but smaller liquidity in many markets",
            "Grand Club on PPPoker shares international union traffic",
        ]
      },
      {
        heading: "Agent model and club economics",
        paragraphs: [
          "All three apps use agents or club managers to onboard players, move chips and settle rakeback. The agent layer is not optional — it is how club poker replaces traditional cashier licenses.",
          "Economics differ by club, not just app. Grand Club publishes 60% rakeback on contributed rake, 30% referral share and 1 chip = $1 through @grandppuzbot. Other clubs on any app may advertise higher numbers with hidden caps or delayed payouts.",
          "Switching apps means new club IDs, new referral links and rebuilding trust with a new cashier. Evaluate the specific club and agent team, not only the app logo on the home screen.",
        ]
      },
      {
        heading: "Payments, rakeback and player protection",
        paragraphs: [
          "Grand processes deposits and withdrawals through @grandppuzbot with USDT, GCash, Humo, Uzcard and other regional methods at 1 chip = $1. @Grand_Poker_Reception handles disputes and verification — a human layer weak agents skip.",
          "PokerBros and ClubGG clubs use their own Telegram bots or third-party cashiers with varying response times. Before joining any club on any app, complete a small test deposit and withdrawal cycle.",
          "Rakeback transparency is the best filter. Clubs willing to explain contributed rake, weekly settlement and sample statements — as Grand does — earn long-term players. Clubs that dodge questions usually underpay.",
        ],
        bullets: [
            "Grand: @grandppuzbot cashier, 60% rakeback, 1 chip = $1",
            "Test deposit + withdrawal on any new club before scaling",
            "Compare contributed rake methodology, not headline percentages",
            "Human support @Grand_Poker_Reception for payment issues",
        ]
      },
      {
        heading: "Which platform to choose in 2026",
        paragraphs: [
          "Choose PPPoker with Grand Club if you want maximum union liquidity, proven clients, published rakeback and a cashier you can audit weekly. Club ID 1074072 is built for players who treat poker as a serious hobby or side income.",
          "Consider PokerBros or ClubGG only if you have a trusted local club with verified payouts and your peer group already plays there. App choice follows community and cashier reliability, not app store ranking alone.",
          "You can install multiple apps, but splitting bankroll across ecosystems increases counterparty risk. Most winning regulars pick one primary club with transparent economics — for Grand players, that means PPPoker, @grandppuzbot and the 60/30 rake structure.",
        ]
      }
    ],
    faq: [
      {
        q: "Can I use my Grand chips on PokerBros or ClubGG?",
        a: "No. Each app has separate club ecosystems. Grand chips and rakeback apply only in PPPoker Club ID 1074072.",
      },
      {
        q: "Which app has the most traffic in 2026?",
        a: "PPPoker still leads in global union liquidity. Peak hours vary by region across all three apps.",
      },
      {
        q: "Does Grand work only on PPPoker?",
        a: "Yes. Grand Club is a PPPoker club. Join with ID 1074072 and fund via @grandppuzbot.",
      },
      {
        q: "How do I verify a club before switching apps?",
        a: "Run a small test deposit and withdrawal, confirm rakeback math and check response time from @Grand_Poker_Reception or the club cashier.",
      }
    ],
  },
  "become-grand-agent": {
    intro:
      "Grand Club agents recruit players, support chip transfers and earn 30% of referred rake on top of what their players receive in 60% rakeback. The role suits poker community leaders, streamers and experienced regulars who already explain club poker to friends. This guide covers requirements, income structure, referral hierarchy and how to apply through @Grand_Poker_Reception.",
    sections: [
      {
        heading: "What a Grand Club agent does",
        paragraphs: [
          "Agents onboard new players into Club ID 1074072 with correct Referral IDs, answer questions about stakes and formats, and escalate payment issues to the official cashier at @grandppuzbot. You are the first contact — not the chip custodian running a shadow cashier.",
          "Day-to-day work includes sharing invite links, helping players set PPPoker language and lobby filters, and reminding members that settlement is always 1 chip = $1 through Grand channels. Strong agents educate rather than pressure volume.",
          "Grand provides marketing assets, multilingual blog content and Telegram support backup. Agents focus on community trust; Grand operations handle reconciliation, anti-fraud review and weekly rakeback settlement.",
        ]
      },
      {
        heading: "Requirements to become an agent",
        paragraphs: [
          "You must already be an approved Grand Club member with a clean record — no chip dumping, collusion or multi-account history. Most applicants have referred at least a few players informally before applying for an official agent tag.",
          "Expect to demonstrate reach: a Telegram group, poker stream, regional forum or stable player network. Grand prioritizes quality referrals over raw signup counts from incentivized spam.",
          "Agents need reliable Telegram availability during cashier hours and basic literacy in poker economics — rake, rakeback and referral math — so you can answer questions accurately without inventing terms.",
        ],
        bullets: [
            "Active Grand Club member in good standing under ID 1074072",
            "Demonstrated community reach — group, stream or player network",
            "Clean compliance record: no dumping, collusion or multi-accounts",
            "Responsive Telegram presence and accurate poker economics knowledge",
        ]
      },
      {
        heading: "Income structure: 30% referral on referred rake",
        paragraphs: [
          "Grand pays agents 30% of the contributed rake generated by players who joined with their Referral ID. This is separate from the player's own 60% rakeback — both come from the same rake ledger without reducing the player's rebate.",
          "Example: your referred player generates 100 chips rake in a week. They receive 60 chips rakeback; you receive 30 chips referral income. Settlement runs weekly through @grandppuzbot alongside player withdrawals.",
          "Income scales with active volume, not one-time signups. A small group of regular cash and MTT players often outearns a large list of inactive accounts. Track who plays weekly and support those relationships.",
        ],
        bullets: [
            "30% of referred contributed rake — weekly settlement",
            "Player keeps full 60% rakeback — no haircut for referral",
            "Paid via @grandppuzbot on the same cycle as player rakeback",
            "Active regulars beat inactive signup lists for agent income",
        ]
      },
      {
        heading: "Referral hierarchy and tracking",
        paragraphs: [
          "Each agent receives a unique Referral ID tied to Club ID 1074072. Players must enter it when applying to the club; rake before correct linking cannot be credited retroactively.",
          "Grand uses a flat referral model — you earn 30% on players you directly refer. Sub-agent structures, if offered, are assigned explicitly by Grand management rather than self-declared chains that confuse payouts.",
          "Track your players through PPPoker club reports and weekly @grandppuzbot statements. Discrepancies go to @Grand_Poker_Reception with PPPoker IDs and dates — keep screenshots of join approvals for new members.",
        ]
      },
      {
        heading: "How to apply and get started",
        paragraphs: [
          "Message @Grand_Poker_Reception on Telegram with your PPPoker ID, a short description of your community or outreach channel, and how many active players you expect to refer monthly. Include links to public groups or streams if available.",
          "After approval, you receive your official Referral ID and agent guidelines. Publish Club ID 1074072 with that ID in all invite materials — never ask players to join without it.",
          "Start with a small inner circle, verify deposit and withdrawal flows through @grandppuzbot together, then expand. Agents who prove reliable compliance and support quality unlock higher-trust placement in Grand marketing.",
        ]
      }
    ],
    faq: [
      {
        q: "How much do Grand agents earn?",
        a: "30% of contributed rake from players who join with your Referral ID, settled weekly via @grandppuzbot.",
      },
      {
        q: "Does referral income reduce player rakeback?",
        a: "No. Players keep 60% rakeback; your 30% is a separate line on the same rake ledger.",
      },
      {
        q: "How do I apply to become an agent?",
        a: "Contact @Grand_Poker_Reception with your PPPoker ID, community details and expected referral volume.",
      },
      {
        q: "What Club ID do my referrals use?",
        a: "Always Club ID 1074072 with your assigned Referral ID at join time.",
      }
    ],
  },
  "sng-and-spins": {
    intro:
      "Sit-and-go tournaments and Spin & Go jackpots are among the fastest formats in PPPoker club poker. At Grand Club (Club ID 1074072), SNGs fill from the club and union lobby while Spin & Go tables offer lottery-style multipliers on a fixed buy-in. This guide covers formats, typical stakes, basic strategy and how 60% rakeback on tournament fees reduces your long-term cost at 1 chip = $1 settlement through @grandppuzbot.",
    sections: [
      {
        heading: "What SNG and Spin & Go are in PPPoker",
        paragraphs: [
          "A sit-and-go (SNG) starts when the required number of players register — usually six, nine or eighteen seats. There is no scheduled start time; the tournament begins as soon as the table fills. Payouts follow a fixed structure based on field size, and play continues until one player holds all chips.",
          "Spin & Go is a three-handed hyper-turbo SNG with a random prize multiplier displayed before the first hand. Buy-ins are fixed; the top prize can be many times the entry, though most spins pay the minimum multiplier. PPPoker runs both formats inside club lobbies alongside MTTs and cash games.",
          "Grand Club lists SNG and Spin & Go under the tournament tabs in Club ID 1074072. Union traffic adds volume at peak hours across Russia, Brazil, Uzbekistan, the Philippines and Latin America time zones.",
        ]
      },
      {
        heading: "Formats and stake levels at Grand Club",
        paragraphs: [
          "Standard SNGs at Grand include six-max and nine-max NLH, with occasional PLO or turbo variants. Buy-ins typically range from micro stakes suitable for beginners to mid stakes for regular grinders. Check the fee line in the lobby — the displayed buy-in plus rake is what leaves your chip balance.",
          "Spin & Go buy-ins are tiered: low, medium and high multiplier pools with separate lobbies. The app shows the multiplier wheel before cards are dealt. Higher buy-in spins offer larger maximum prizes but the same high variance profile.",
          "All tournament chips settle through Grand at 1 chip = $1. Deposits and withdrawals run through @grandppuzbot; tournament winnings credit to your PPPoker wallet inside the club after the result is recorded.",
        ],
        bullets: [
            "SNG: 6-max and 9-max NLH most common in Club ID 1074072",
            "Spin & Go: 3-max hyper-turbo with random multipliers",
            "Check buy-in plus fee in the lobby before registering",
            "Settlement at 1 chip = $1 via @grandppuzbot",
        ]
      },
      {
        heading: "Basic SNG strategy: early, middle and bubble",
        paragraphs: [
          "Early in an SNG, play tighter than in cash — survival matters because only the top two or three spots pay. Open-raise premium hands and suited connectors in position; avoid marginal offsuit hands from early seats unless the table is passive.",
          "Middle stage strategy shifts as antes appear and stacks shrink relative to blinds. Steal from late position when folded to you; defend the big blind selectively against wide opens. Stack preservation becomes critical when you are in the bottom third of chips.",
          "On the bubble — one elimination from the money — tighten significantly if you are medium stack, and apply pressure if you are the chip leader. Short stacks should look for spots to shove before blinds consume their equity. ICM awareness separates break-even from winning SNG players.",
        ]
      },
      {
        heading: "Spin & Go basics and variance management",
        paragraphs: [
          "Spin & Go strategy resembles a three-handed hyper-turbo: push/fold and short-stack math dominate within minutes. With shallow stacks, premium hands and suited aces are shove-or-fold candidates; slow-playing strong hands often wastes fold equity.",
          "Variance is extreme. Even solid players experience long stretches of minimum multipliers. Track results over hundreds of spins, not dozens. A 2x or 3x multiplier is the most common outcome; treat big multipliers as bonuses, not expectations.",
          "Use the in-app hand history to review critical shove spots. Grand enforces standard union rules against collusion — never chip-dump or soft-play to help friends in Spin & Go fields.",
        ],
        bullets: [
            "Treat Spin & Go as high-variance — plan for long downswings",
            "Review push/fold spots with shallow effective stacks",
            "Most spins pay minimum multiplier — big wins are rare",
            "Report suspected collusion to @Grand_Poker_Reception",
        ]
      },
      {
        heading: "Bankroll, rakeback and session habits",
        paragraphs: [
          "Separate your SNG and Spin bankroll from cash-game funds. A common rule is at least 100 buy-ins for standard SNGs and 200 or more for Spin & Go because of multiplier variance. At Grand, value each buy-in at 1 chip = $1 when sizing your roll.",
          "Tournament fees in Club ID 1074072 count as contributed rake. Grand returns 60% weekly through @grandppuzbot together with any withdrawal you request. Factor rakeback into your effective cost — a $10 SNG with 10% fee nets lower long-term expense after rebate.",
          "Set stop rules: number of games or time limit per session. Spin & Go in particular tempts rapid-fire registration after a loss. Message @Grand_Poker_Reception if lobby errors or missing payouts occur after a tournament ends.",
        ]
      }
    ],
    faq: [
      {
        q: "Where do I find SNG and Spin & Go at Grand?",
        a: "Open Club ID 1074072 in PPPoker and tap the SNG or Spin & Go tabs in the club tournament lobby.",
      },
      {
        q: "Does SNG rake count for 60% rakeback?",
        a: "Yes. Tournament fees in Grand Club are contributed rake and rebate weekly via @grandppuzbot at 1 chip = $1.",
      },
      {
        q: "How many buy-ins should I keep for Spin & Go?",
        a: "Most regulars use at least 200 buy-ins at their Spin stake because of multiplier variance.",
      },
      {
        q: "Who helps with a missing SNG payout?",
        a: "Contact @Grand_Poker_Reception with your PPPoker ID, tournament ID and finish time.",
      }
    ],
  },
  "short-deck-guide": {
    intro:
      "Short Deck Hold'em — also called Six Plus or 6+ — removes cards below six from the deck, which changes both probabilities and hand rankings. Grand Club runs Short Deck tables in Club ID 1074072 alongside standard NLH and PLO. This guide explains the rules, ranking differences, where to find 6+ in the PPPoker lobby and starter strategy tips for club players settling chips at 1 chip = $1 through @grandppuzbot.",
    sections: [
      {
        heading: "What Short Deck (6+) is",
        paragraphs: [
          "Short Deck uses a 36-card deck: twos through fives are removed, leaving sixes through aces in four suits. Fewer cards mean more connected boards, more straights and flushes relative to full-deck Hold'em, and different preflop equities between hands you know from NLH.",
          "The format is popular in high-stakes live games and has spread to online club apps including PPPoker. Tables may be listed as SDH, 6+ or Short Deck in the lobby filter. Blinds and antes structures vary — many Short Deck games use antes plus a button blind instead of traditional small and big blinds only.",
          "Grand Club offers Short Deck through union traffic at Club ID 1074072. Peak volume often aligns with evening hours in Asia and Eastern Europe, with additional tables on weekends when the union runs mixed-game promotions.",
        ]
      },
      {
        heading: "Rule differences from standard Hold'em",
        paragraphs: [
          "Because the deck is shorter, starting hands contain fewer low cards. Pocket pairs and broadway combinations connect with boards more often. Preflop three-bet pots become common; players adjust ranges upward compared to full-deck NLH at similar stack depths.",
          "Many Short Deck rule sets allow only one raise preflop in some clubs, or cap raises differently — always read the table rules popup before sitting. Postflop play is pot-limit or no-limit depending on table settings; Grand union tables typically follow standard PPPoker Short Deck rules.",
          "Position matters even more than in full-deck NLH. With antes in play, stealing and defending wide from late position is profitable when opponents overfold. Stack sizes of 50–100 antes are typical buy-ins at club stakes.",
        ],
        bullets: [
            "36-card deck: sixes through aces only",
            "Antes plus button blind common instead of SB/BB only",
            "Read table rules popup before your first hand",
            "Listed as SDH, 6+ or Short Deck in PPPoker filters",
        ]
      },
      {
        heading: "Hand rankings in Short Deck",
        paragraphs: [
          "The critical change: a flush beats a full house in most Short Deck rule sets, including PPPoker. Trips can beat a straight in some house rules — PPPoker Short Deck follows the flush-over-full-house ranking that matches mainstream 6+ conventions.",
          "Straights become easier to make with fewer gaps in the deck. Aces still play high; wheel straights do not exist because twos through fives are gone. Adjust hand reading accordingly — a board of 7-8-9-T-J is a straight, not a draw-heavy texture you might treat as semi-connected in NLH.",
          "Two pair and single pair hands lose value relative to draws and made straights/flushes. Top pair top kicker is weaker on many runouts. Study equity charts for Short Deck specifically rather than importing NLH instincts unchanged.",
        ]
      },
      {
        heading: "Where to find Short Deck in Grand Club",
        paragraphs: [
          "Open PPPoker, enter Club ID 1074072 and navigate to Cash Games. Use the game-type filter and select Short Deck, SDH or 6+. If no table is running, check back during peak union hours or message @Grand_Poker_Reception for the current Short Deck schedule.",
          "Grand agents sometimes post Short Deck table openings in Telegram communities when union liquidity spikes. Private club tables can be created for groups — contact @Grand_Poker_Reception if your regular group wants a dedicated 6+ table at agreed stakes.",
          "Buy in through your club chip balance funded via @grandppuzbot. All Short Deck chips settle at 1 chip = $1 with 60% rakeback on contributed rake like standard cash games.",
        ],
        bullets: [
            "Cash Games tab in Club ID 1074072 — filter Short Deck or 6+",
            "Peak tables often evenings Asia and Eastern Europe time",
            "Private 6+ tables available via @Grand_Poker_Reception request",
            "Same 60% rakeback and 1 chip = $1 settlement as NLH cash",
        ]
      },
      {
        heading: "Strategy basics for 6+ at club stakes",
        paragraphs: [
          "Tighten early-position opens slightly less than NLH but respect aggression — dominated broadway hands run into straights and flushes more often. Suited connectors and pocket pairs gain value; rag aces lose relative strength.",
          "Draw aggressively when stack-to-pot ratios favor it. With flush-over-full-house rankings, chasing flushes is higher EV than in NLH when you hold suited cards. Do not overvalue two pair on wet boards.",
          "Track results separately from NLH. Short Deck variance is distinct; a winning NLH regular can lose at 6+ without adjusting rankings and range charts. Use PPPoker hand history to review spots where flush-vs-full-house ranking changed your outcome.",
        ]
      }
    ],
    faq: [
      {
        q: "Does a flush beat a full house in PPPoker Short Deck?",
        a: "Yes. Standard PPPoker 6+ ranking places flush above full house.",
      },
      {
        q: "Where is the Short Deck lobby at Grand?",
        a: "Club ID 1074072 → Cash Games → filter Short Deck, SDH or 6+.",
      },
      {
        q: "Does Short Deck rake qualify for 60% rakeback?",
        a: "Yes. Contributed rake on 6+ cash tables counts like NLH at Grand Club.",
      },
      {
        q: "How do I fund a Short Deck session?",
        a: "Deposit via @grandppuzbot at 1 chip = $1, then buy in at the table from your club wallet.",
      }
    ],
  },
  "ofc-chinese-poker": {
    intro:
      "Open Face Chinese (OFC) poker is a card-placement game where players set three rows — front, middle and back — from cards dealt one at a time face up. PPPoker supports Standard, Pineapple and Progressive OFC variants in club lobbies. Grand Club hosts OFC tables in Club ID 1074072 for players who want a break from Hold'em variance or a side game with friends. This guide covers rules, variant differences, fantasyland and where to find tables, with chips settling at 1 chip = $1 through @grandppuzbot.",
    sections: [
      {
        heading: "Introduction to OFC in PPPoker",
        paragraphs: [
          "Unlike Hold'em, OFC has no betting rounds during the hand. Each player receives cards sequentially and must place every card into one of three rows before the next card arrives. The front row holds three cards, the middle five and the back five — and the back row must rank strongest, middle second and front weakest, or the hand fouls.",
          "Scoring is point-based head-to-head against each opponent at the table. Royalties for strong made hands in each row add bonus points. Fouled hands lose all three rows automatically. OFC tables in PPPoker seat two to three players typically.",
          "Grand Club lists OFC under specialty or other games in the Club ID 1074072 lobby. Union tables add liquidity for Pineapple and Progressive stakes during Asian evening peaks.",
        ]
      },
      {
        heading: "Standard OFC rules",
        paragraphs: [
          "The hand begins with five cards dealt face up simultaneously — you set all five before anyone receives more. Then each player gets one card at a time until rows are complete: three front, five middle, five back. Once placed, a card cannot move.",
          "After all rows are set, hands are compared row by row. Winning two of three rows against an opponent wins the overall match against that player. Points accumulate across hands in a session; players settle chip transfers at session end based on point totals times the stake per point.",
          "Standard OFC uses no discard until Pineapple variant. Read the stake line carefully — Grand tables show point value per unit and minimum buy-in in chips at 1 chip = $1.",
        ],
        bullets: [
            "Three rows: front 3 cards, middle 5, back 5 — back must be strongest",
            "Five cards set first, then one card at a time until complete",
            "Fouled hand loses all rows; royalties add bonus scoring",
            "Head-to-head points multiplied by stake per point at settlement",
        ]
      },
      {
        heading: "Pineapple and Progressive variants",
        paragraphs: [
          "Pineapple OFC deals three cards per round after the initial five instead of one. You set two cards and discard one face down each round until rows complete. More information per round increases fantasyland frequency and strategic complexity.",
          "Progressive OFC increases royalty values as hands get stronger — larger bonuses for big hands in the back row especially. Some Progressive tables also escalate point multipliers when players enter fantasyland repeatedly.",
          "Choose variant based on session length and skill edge. Standard is simplest for newcomers; Pineapple rewards players who track discards and dead cards; Progressive suits aggressive royalty hunters who understand foul risk.",
        ]
      },
      {
        heading: "Fantasyland and scoring depth",
        paragraphs: [
          "Fantasyland is a reward state: qualify by making a valid front row of queens or better (QQ+), and next hand you receive all cards at once face down, setting a complete hand without incremental placement. Fantasyland hands score heavily when royalties hit.",
          "Staying in fantasyland requires meeting the qualification threshold again — typically trips in front or better depending on table rules. PPPoker displays fantasyland status on the table UI. Defending against fantasyland players requires tighter fouls avoidance and royalty blocking in the front row.",
          "Track opponent discards in Pineapple — dead queens affect fantasyland odds. Session bankroll for OFC should cover swingy point runs; a single fantasyland hand can shift stacks dramatically at higher point values.",
        ],
        bullets: [
            "Qualify fantasyland with QQ+ valid front row (table rules may vary)",
            "Fantasyland next hand: all cards dealt face down at once",
            "Re-qualify to stay in fantasyland next round",
            "Pineapple discards affect fantasyland probability tracking",
        ]
      },
      {
        heading: "Finding OFC tables at Grand Club",
        paragraphs: [
          "In PPPoker, open Club ID 1074072 and browse Other Games or the OFC filter if available. Stakes list as point value — for example 1 chip per point with 500-chip minimum buy-in. Deposit via @grandppuzbot before joining.",
          "If no public table runs, ask @Grand_Poker_Reception to open a private OFC table for your group at agreed stakes. Grand agents sometimes organize Pineapple nights in Telegram communities when union liquidity allows.",
          "OFC rake follows club contributed rake rules; your 60% rakeback applies to OFC fees the same as cash games. Settle session transfers through the in-app chip movement, then withdraw profits via @grandppuzbot at 1 chip = $1.",
        ]
      }
    ],
    faq: [
      {
        q: "What is a fouled hand in OFC?",
        a: "When back, middle and front rows are not in descending strength order, the hand fouls and loses all three rows.",
      },
      {
        q: "How do I qualify for fantasyland?",
        a: "Typically by setting a valid front row of QQ or better without fouling. Check table rules in PPPoker.",
      },
      {
        q: "Where are OFC tables in Grand Club?",
        a: "Club ID 1074072 → Other Games or OFC filter in the club lobby.",
      },
      {
        q: "Does OFC rake count for 60% rakeback?",
        a: "Yes. OFC table fees are contributed rake and rebate weekly via @grandppuzbot.",
      }
    ],
  },
  "bankroll-management": {
    intro:
      "Bankroll management is the discipline that keeps club cash players solvent through variance. At Grand Club, chips map directly to dollars at 1 chip = $1, which simplifies math but does not remove downswings. This guide covers buy-in sizing, when to move up or down stakes, how 60% rakeback affects your effective cushion and practical habits for players in Club ID 1074072 funding sessions through @grandppuzbot.",
    sections: [
      {
        heading: "Why bankroll rules matter in club poker",
        paragraphs: [
          "Cash game variance can produce multi-buy-in swings even for winning players. Without adequate reserves, a normal downswing forces you to play scared money — tightening incorrectly, avoiding +EV spots or chasing losses at higher stakes.",
          "Club poker adds settlement discipline: your roll lives partly in PPPoker chips and partly in withdrawal buffers through @grandppuzbot. Treat both as one bankroll denominated at 1 chip = $1. Never play with rent money or funds you cannot replace within your planned horizon.",
          "Grand returns 60% of contributed rake weekly, which softens effective cost but is not a substitute for proper buy-in rules. Rakeback helps over volume; it does not erase a single bad session.",
        ]
      },
      {
        heading: "Buy-in rules for cash games",
        paragraphs: [
          "The standard guideline for NLH cash is 50–100 big blinds per buy-in at your stake, with a total roll of 30–50 buy-ins before playing that level regularly. At NL100 (1/2 chips with $1 chip value), one buy-in of 100 chips equals $100; your roll should be $3,000–$5,000 for comfortable play.",
          "Reload rules matter as much as initial buy-in. Many players cap reloads at one full buy-in per session unless stack drops below 40 big blinds through normal play — not through punting. Leave the table and reassess if you hit a session stop-loss of three buy-ins.",
          "PLO and Short Deck require larger rolls relative to stakes because variance is higher. Add 30–50% more buy-ins to your requirement before sitting PLO5 or 6+ at the same chip denomination.",
        ],
        bullets: [
            "NLH cash: 50–100 BB buy-in, 30–50 buy-ins total roll at stake",
            "Session stop-loss: commonly 3 buy-ins before mandatory break",
            "Reload cap: one buy-in per session unless stack below 40 BB",
            "PLO and Short Deck: increase roll 30–50% vs NLH at same stake",
        ]
      },
      {
        heading: "Moving up and down stakes",
        paragraphs: [
          "Move up when your roll reaches 40–50 buy-ins at the next stake and you have sustained win rate or breakeven results over a meaningful sample — typically 20,000+ hands tracked in PPPoker stats or external notes.",
          "Move down immediately when your roll drops below 25–30 buy-ins at current stake. Shot-taking one level up with one buy-in is acceptable occasionally, but sustained play above bankroll is how players go broke despite positive win rates.",
          "Grand Club offers stakes from micro to mid within Club ID 1074072. Use the lobby filter to stay at your assigned level; temptation to jump into bigger union tables during hot streaks is a common bankroll leak.",
        ]
      },
      {
        heading: "MTT, SNG and separate rolls",
        paragraphs: [
          "Keep tournament funds separate from cash. MTT bankroll rules often use 100+ buy-ins at regular entry stakes because payout structures are top-heavy. SNGs need fewer buy-ins; Spin & Go needs the most because of multiplier variance.",
          "Do not cross-subsidize: losing your cash roll then firing MTTs to recover is reverse discipline. Deposit separately through @grandppuzbot and label mentally which chips serve which purpose inside Club ID 1074072.",
          "Referral income at 30% for agents is separate from player bankroll — do not mix agent settlements with personal session funds without clear accounting.",
        ],
        bullets: [
            "MTT roll: 100+ buy-ins at regular stake separate from cash",
            "Spin & Go: 200+ buy-ins recommended due to variance",
            "Never use tournament winnings as excuse to overshoot cash stakes",
            "Agent referral income tracked separately from playing roll",
        ]
      },
      {
        heading: "How rakeback affects your effective bankroll",
        paragraphs: [
          "Grand 60% rakeback on contributed rake returns real chips weekly via @grandppuzbot. If you generate 500 chips rake in a month, 300 chips return — equivalent to three NL100 buy-ins. Factor this into long-term roll growth but not session-by-session decisions.",
          "Effective rake cost at 60% rakeback means a 5% rake table costs 2% net long term. That extends how far your roll stretches but does not reduce per-session variance from all-in outcomes.",
          "Track rake paid in PPPoker club stats and compare with @grandppuzbot weekly statements. Discrepancies go to @Grand_Poker_Reception. Accurate rake tracking helps you size how much rakeback cushions your annual volume.",
        ]
      }
    ],
    faq: [
      {
        q: "How many buy-ins for NLH cash at Grand?",
        a: "Most players keep 30–50 buy-ins at their regular stake, with 50–100 BB per table buy-in at 1 chip = $1.",
      },
      {
        q: "When should I move down stakes?",
        a: "When your roll falls below 25–30 buy-ins at current stake — do not wait until broke.",
      },
      {
        q: "Does rakeback count as bankroll?",
        a: "Factor 60% rakeback into long-term roll growth via @grandppuzbot, not same-session reload decisions.",
      },
      {
        q: "How do I deposit for a separate MTT roll?",
        a: "Fund via @grandppuzbot at 1 chip = $1 and mentally segregate MTT chips from cash in Club ID 1074072.",
      }
    ],
  },
  "legality-by-country": {
    intro:
      "Online poker legality varies sharply by country. Club apps like PPPoker operate through private clubs rather than licensed public sites, which creates a gray zone in many jurisdictions. This article offers a high-level overview for Grand Club players — not legal advice. Consult a qualified professional in your country before playing. Grand Club ID 1074072 serves international members who deposit and withdraw at 1 chip = $1 through @grandppuzbot and contact @Grand_Poker_Reception for account support.",
    sections: [
      {
        heading: "How to read this overview",
        paragraphs: [
          "Laws change frequently. This summary reflects common understanding as of 2026 for regions where Grand Club has significant player bases: Russia, Brazil, Uzbekistan, the Philippines and broader Latin America. It describes typical player access patterns, not guarantees.",
          "PPPoker club poker is not the same as regulated online casino poker in markets like New Jersey or the UK. Clubs use agent networks, private chip settlement and app-based play. Legal risk depends on local gambling definitions, payment rules and enforcement priorities.",
          "Grand Club does not provide legal counsel. Players are responsible for compliance with local law. The club focuses on fair settlement, 60% rakeback transparency and reliable cashier service through official Telegram channels only.",
        ]
      },
      {
        heading: "Russia",
        paragraphs: [
          "Russia restricts licensed online gambling to designated zones; most online poker outside those frameworks operates in a legally ambiguous space. Many Russian-speaking players use club apps through private clubs with offshore settlement.",
          "Payment rails matter: Grand supports methods accessible to Russian players where available, with chips settled at 1 chip = $1 through @grandppuzbot. Players should use only official Grand cashier channels — not third-party chip sellers who create fraud and compliance risk.",
          "Practical habit: keep records of deposits and withdrawals through @grandppuzbot for personal accounting. Message @Grand_Poker_Reception for payment issues rather than unofficial intermediaries.",
        ],
        bullets: [
            "Online club poker generally outside licensed Russian gambling zones",
            "Use only @grandppuzbot and @Grand_Poker_Reception — no third-party chips",
            "Settlement at 1 chip = $1 through official Grand cashier",
            "Consult local counsel for current Russian gambling law",
        ]
      },
      {
        heading: "Brazil and Latin America",
        paragraphs: [
          "Brazil passed significant gambling regulation reforms in recent years; implementation continues through licensing bodies. Club poker apps remain widely used while the regulated market develops. Brazilian players often access PPPoker clubs via agents with PIX or USDT settlement.",
          "Grand Club supports Portuguese-language content and Brazilian peak-hour traffic in Club ID 1074072. Deposits through @grandppuzbot may include regional methods where configured. Agents earning 30% referral income must also respect local tax and business rules in their jurisdiction.",
          "Broader LatAm — Mexico, Argentina, Colombia and others — has mixed regimes from prohibition to partial regulation. Club poker fills liquidity gaps where licensed sites are limited. Players should verify whether winnings or agent income trigger local tax reporting obligations.",
        ]
      },
      {
        heading: "Uzbekistan",
        paragraphs: [
          "Uzbekistan has tightened and loosened gambling rules over time; online access often depends on current telecommunications and banking policy. Many Uzbek players use PPPoker clubs with Humo, Uzcard or USDT through Telegram cashiers.",
          "Grand Club actively serves Uzbek-speaking members with localized blog content and @grandppuzbot payment support. Club ID 1074072 accepts join requests with Referral ID like other regions. Settlement remains 1 chip = $1 with 60% rakeback on contributed rake.",
          "Use official channels only. Unofficial chip transfers violate club policy and may conflict with local financial regulations. @Grand_Poker_Reception handles verification and stuck payments for Uzbek members.",
        ],
        bullets: [
            "Online gambling rules in Uzbekistan change — verify current law locally",
            "Grand cashier: @grandppuzbot with Humo, Uzcard, USDT where available",
            "Club ID 1074072 with Referral ID for Uzbek members",
            "Official Telegram support: @Grand_Poker_Reception",
        ]
      },
      {
        heading: "Philippines and regional summary",
        paragraphs: [
          "The Philippines regulates online gaming through PAGCOR for licensed operators; club apps operate outside that framework for most recreational players. Filipino players commonly use GCash and other local rails with PPPoker clubs.",
          "Grand Club supports GCash deposits through @grandppuzbot and Filipino-language guides. Peak play aligns with PHT evenings in Club ID 1074072. The 60% rakeback program applies equally to Filipino members on contributed rake.",
          "Across all regions: one constant is Grand operational policy — no third-party chip sales, transparent 1 chip = $1 settlement, weekly rakeback via @grandppuzbot and support through @Grand_Poker_Reception. Legal compliance in your jurisdiction remains your responsibility as a player or agent.",
        ]
      }
    ],
    faq: [
      {
        q: "Is Grand Club legal in my country?",
        a: "Grand cannot provide legal advice. Review local gambling law or consult a qualified professional before playing.",
      },
      {
        q: "How do Russian and Uzbek players deposit?",
        a: "Through official @grandppuzbot with supported regional methods. Avoid third-party chip sellers.",
      },
      {
        q: "Do Filipino players use GCash at Grand?",
        a: "Yes where configured. Deposit via @grandppuzbot at 1 chip = $1 after joining Club ID 1074072.",
      },
      {
        q: "Where do I report payment issues?",
        a: "Contact @Grand_Poker_Reception with PPPoker ID and transfer proof — not unofficial agents.",
      }
    ],
  },
  "union-vs-club": {
    intro:
      "PPPoker organizes play through clubs and unions — two layers that confuse new players. A club is your home table list and cashier relationship; a union is the shared pool of tables across many clubs. Grand Club (Club ID 1074072) operates inside an international union so members see global traffic while settling chips at 1 chip = $1 through @grandppuzbot with 60% rakeback on contributed rake.",
    sections: [
      {
        heading: "What a PPPoker club is",
        paragraphs: [
          "A club is a private poker room inside the PPPoker app. Each club has a numeric Club ID, an owner or agent team, member approval rules and its own chip ledger. Players join by entering the Club ID and often a Referral ID tied to their agent.",
          "Grand Club ID 1074072 is your entry point. Inside the club lobby you see cash games, MTTs, SNGs and specialty formats filtered from both club-only tables and union-shared tables. Deposits and withdrawals run through @grandppuzbot at the fixed rate of 1 chip = $1 — not through PPPoker's public store.",
          "Club agents handle support, rakeback accounting and payment verification. @Grand_Poker_Reception assists with join issues, table disputes and payout delays. The club layer is where your membership, rakeback tier and referral relationship live.",
        ]
      },
      {
        heading: "What a union is and why it matters",
        paragraphs: [
          "A union groups multiple clubs into one shared table network. When you open a cash game in Grand Club, you may sit with players whose home club is different but whose chips flow through the same union settlement system.",
          "Unions publish rake schedules, game-type availability and anti-collusion policies. Without union traffic, a single club would struggle to fill mid-stakes NLH or nightly MTTs. Grand's international union adds volume across Russia, Brazil, Uzbekistan, the Philippines and Latin America time zones.",
          "Union membership does not change your cashier. You still deposit to Grand via @grandppuzbot and receive 60% rakeback on your personal contributed rake — the union only expands who sits across from you.",
        ],
        bullets: [
            "Club: your membership home — Club ID 1074072 for Grand",
            "Union: shared table pool across many clubs",
            "Settlement stays with Grand at 1 chip = $1 via @grandppuzbot",
            "60% rakeback applies to your contributed rake, not union-wide totals",
        ]
      },
      {
        heading: "Traffic: club-only vs union tables",
        paragraphs: [
          "Some tables in the lobby are club-exclusive — only Grand members can register. Most high-volume cash and tournament traffic comes from union tables where multiple clubs contribute players.",
          "Peak hours shift by region. Evening in Moscow and Tashkent overlaps with morning in Brazil; Filipino night sessions add PLO and NLH volume. Use lobby filters for stake and game type rather than trying to identify opponent home clubs.",
          "If a stake is empty, check back during the next regional peak or message @Grand_Poker_Reception. Union promotions and weekend series often spike liquidity temporarily.",
        ]
      },
      {
        heading: "Rake flow and settlement",
        paragraphs: [
          "Rake is collected per hand or tournament entry according to the union schedule. Grand passes through standard union rake percentages and caps, then rebates 60% of what you personally contribute each week through @grandppuzbot.",
          "Contributed rake counts only hands where you put money in the pot — not dealt rake where everyone at the table shares the fee equally. Tournament fees in Club ID 1074072 count toward rakeback the same way cash-game rake does.",
          "Chips on the table are union chips during play; real-money settlement happens when you deposit or withdraw through Grand. Never buy chips from third-party sellers — only @grandppuzbot and @Grand_Poker_Reception are official channels.",
        ],
        bullets: [
            "Union sets rake % and cap; Grand returns 60% of your contributed rake",
            "MTT and SNG fees count toward weekly rakeback",
            "Withdraw rakeback together with chip cashouts at 1 chip = $1",
            "Avoid unofficial chip transfers — fraud and policy violations",
        ]
      },
      {
        heading: "Choosing Grand Club inside a union",
        paragraphs: [
          "Players pick clubs for cashier reliability, rakeback percentage, language support and agent responsiveness — not because unions differ in card-dealing software. Grand offers 60% rakeback, 30% referral income for agents and published settlement at 1 chip = $1.",
          "Union access means you compete in larger fields without leaving Club ID 1074072. Your hand history, balance and rakeback reports stay under Grand's agent team.",
          "If you are comparing clubs inside the same union, verify rakeback math with a weekly statement from @grandppuzbot. Transparent accounting is the main reason serious players anchor at Grand rather than anonymous club IDs with vague rebate promises.",
        ]
      }
    ],
    faq: [
      {
        q: "Do I need a separate union ID to play at Grand?",
        a: "No. Join Club ID 1074072 only. Union tables appear automatically inside the Grand lobby.",
      },
      {
        q: "Does union rakeback differ from club rakeback?",
        a: "Grand pays 60% of your contributed rake regardless of whether the table is club-only or union-shared.",
      },
      {
        q: "Who settles chips when I win on a union table?",
        a: "Winnings stay in your PPPoker wallet inside Grand Club. Cash out at 1 chip = $1 through @grandppuzbot.",
      },
      {
        q: "Where do I report suspected collusion on union tables?",
        a: "Message @Grand_Poker_Reception with hand IDs, player nicknames and timestamps.",
      }
    ],
  },
  "common-join-errors": {
    intro:
      "Joining Grand Club should take minutes, but small mistakes block access or delay approval. Wrong Club ID digits, missing Referral ID, outdated app builds and duplicate accounts cause most support tickets at Club ID 1074072. This guide walks through each error, how to fix it and when to contact @Grand_Poker_Reception or @grandppuzbot after you are approved with 60% rakeback at 1 chip = $1.",
    sections: [
      {
        heading: "Wrong Club ID or typo in search",
        paragraphs: [
          "PPPoker requires the exact numeric Club ID. Grand Club is 1074072 — transposing digits (1074720, 1074071) opens a different club or returns no result. Copy the ID from official Grand channels instead of typing from memory.",
          "On iOS and Android, open PPPoker → Clubs → Join Club → enter 1074072. If the club name does not show Grand Club branding, stop and verify the number before sending a join request.",
          "Scammers sometimes publish fake Club IDs with similar numbers. Only use IDs from @grandppuzbot, @Grand_Poker_Reception or the official Grand website. Never send deposits to a club you found in random Telegram ads without verifying 1074072.",
        ],
        bullets: [
            "Correct Grand Club ID: 1074072 — verify before applying",
            "Copy from official Telegram, not from screenshots in unknown groups",
            "Wrong ID may land you in an unrelated or fraudulent club",
            "Deposits only through @grandppuzbot after joining the real Grand Club",
        ]
      },
      {
        heading: "Missing or incorrect Referral ID",
        paragraphs: [
          "Many clubs require a Referral ID during signup so the agent can approve your application and attach rakeback. Grand may ask for a referral code linked to your inviter or the default Grand agent code published in official channels.",
          "If you skip Referral ID, your request sits in pending limbo or auto-rejects. Re-apply with the correct code from the person who invited you or message @Grand_Poker_Reception with your PPPoker player ID.",
          "Referral ID does not replace Club ID — you need both. Wrong referral codes route your account to a different agent tree, which can delay 60% rakeback crediting until support reassigns you.",
        ]
      },
      {
        heading: "Pending approval and rejected applications",
        paragraphs: [
          "Club owners or agents manually approve join requests in PPPoker. Approval usually completes within hours during business times; weekends and regional holidays may slow response.",
          "Rejections happen for duplicate accounts, prior bans in the union, incomplete profile info or suspicious device fingerprints flagged by PPPoker anti-fraud. If rejected without explanation, contact @Grand_Poker_Reception with your PPPoker ID and a screenshot of the rejection notice.",
          "Do not create multiple PPPoker accounts to bypass rejection — multi-accounting violates union rules and risks permanent bans across clubs. One verified account per person is the standard.",
        ],
        bullets: [
            "Pending status: wait 24 hours, then message @Grand_Poker_Reception",
            "Rejections: send PPPoker ID and rejection screenshot for review",
            "Never open alt accounts to re-apply — union ban risk",
            "Keep profile nickname clean and unique to speed approval",
        ]
      },
      {
        heading: "App version, region and device issues",
        paragraphs: [
          "Outdated PPPoker builds fail to load club lobbies or drop join requests silently. Update from the official app store or APK channel linked on the Grand site before applying.",
          "Some regions restrict app distribution. If PPPoker is unavailable in your store, use the official download path Grand publishes — not third-party modded APKs that steal credentials.",
          "VPN use can trigger security holds. If join fails after VPN, disconnect, restart the app and retry on a stable connection. Persistent device blocks need @Grand_Poker_Reception escalation with device model and OS version.",
        ]
      },
      {
        heading: "After you join: first deposit and rakeback setup",
        paragraphs: [
          "Once approved, open Club ID 1074072 and confirm your chip balance shows zero or a welcome allocation if applicable. First deposit runs through @grandppuzbot at 1 chip = $1 — send only to wallet addresses the bot provides inside an active chat.",
          "Rakeback at 60% on contributed rake starts accumulating from your first raked hand or tournament fee. Weekly payouts combine with withdrawals through the same bot. Save chat receipts for accounting.",
          "If chips do not appear after a confirmed deposit, message @grandppuzbot with transaction hash and @Grand_Poker_Reception if unresolved after one hour. Never pay a human agent outside the official bot for chip delivery.",
        ]
      }
    ],
    faq: [
      {
        q: "What is the exact Grand Club ID?",
        a: "1074072. Double-check digits before submitting a join request in PPPoker.",
      },
      {
        q: "My application is pending for two days — what now?",
        a: "Message @Grand_Poker_Reception with your PPPoker player ID and referral code used.",
      },
      {
        q: "Can I join without a Referral ID?",
        a: "Use the default Grand referral from official channels or ask @Grand_Poker_Reception for the current code.",
      },
      {
        q: "I joined the wrong club by mistake — how do I fix it?",
        a: "Leave the wrong club in PPPoker settings and re-apply to 1074072. Do not deposit until you are inside Grand Club.",
      }
    ],
  },
  "all-in-or-fold": {
    intro:
      "All-In or Fold (AOF) is a hyper-turbo cash format where every decision is binary: shove your stack or fold. No postflop play, no slow decisions — hands resolve in seconds. Grand Club (Club ID 1074072) lists AOF tables in the union lobby at micro to mid stakes with standard rake that qualifies for 60% rakeback at 1 chip = $1 through @grandppuzbot.",
    sections: [
      {
        heading: "AOF rules in PPPoker",
        paragraphs: [
          "All-In or Fold tables use short stacks — typically four to eight big blinds effective. Each player posts blinds or antes, receives hole cards and acts only once: all-in or fold. If multiple players shove, a runout determines the winner.",
          "There is no flop betting round unless at least two players are all-in. Some AOF variants add antes every hand to increase action. Table info popups show exact blind structure before you sit.",
          "AOF runs in NLH and occasionally PLO side pools in union lobbies. Grand Club shares union AOF traffic so tables fill faster during peak hours across CIS, Brazil and Asia.",
        ]
      },
      {
        heading: "Stakes and table selection at Grand Club",
        paragraphs: [
          "Open Club ID 1074072 → Cash Games → filter by All-In or Fold or AOF. Stakes range from micro buy-ins for learning push/fold math to mid stakes for experienced grinders.",
          "Check rake line in the lobby — AOF rake is often a fixed percentage per pot with a low cap because pots are small and fast. Contributed rake from AOF sessions counts toward weekly 60% rebate via @grandppuzbot.",
          "Table-hopping is common in AOF because seat turnover is high. If a table runs too tight or too loose compared to your strategy, switch lobbies rather than forcing marginal spots.",
        ],
        bullets: [
            "Filter lobby: All-In or Fold / AOF under Cash Games",
            "Stacks usually 4–8 BB — read table rules popup",
            "AOF rake counts toward 60% rakeback at Grand",
            "Settlement remains 1 chip = $1 via @grandppuzbot",
        ]
      },
      {
        heading: "Basic AOF strategy",
        paragraphs: [
          "With four to six big blinds, push ranges are wide from late position — any ace, most kings, suited connectors and pocket pairs. From early position tighten significantly; dominated hands lose huge equity when called.",
          "Fold equity matters more than in deep-stack poker. If blinds are tight, shove wider; if callers are loose, narrow to hands that perform well against calling ranges.",
          "Avoid slow habits from cash games. The timer is short; pre-set mental ranges by position before sitting. Use PPPoker hand history after sessions to review spots where you folded too tight or shoved too wide.",
        ]
      },
      {
        heading: "Bankroll and variance",
        paragraphs: [
          "AOF variance is extreme — hundreds of all-ins per hour. Use at least 50 buy-ins for your stake, preferably 80 or more if you multi-table. At Grand, value each buy-in at 1 chip = $1 when sizing your roll.",
          "Short sessions with stop-loss rules prevent tilt spirals. AOF punishes emotional play because the next hand arrives instantly after a bad beat.",
          "60% rakeback reduces effective rake cost but does not shrink swing size. Track net results weekly, not per session.",
        ],
        bullets: [
            "Minimum 50–80 buy-ins for AOF at your stake",
            "Set stop-loss in chips or time per session",
            "Rakeback via @grandppuzbot — keep weekly records",
            "Report collusion to @Grand_Poker_Reception immediately",
        ]
      },
      {
        heading: "AOF vs other fast formats",
        paragraphs: [
          "Compared to Spin & Go or hyper-turbo SNG, AOF is cash with constant rebuys — no payout structure or ICM. Compared to regular cash, there is zero postflop edge from position or sizing tells.",
          "AOF suits players who want volume and clear decisions without multi-street planning. It is a poor fit if you rely on deep-stack exploits.",
          "Grand Club offers AOF alongside NLH cash, MTTs and Spin & Go in Club ID 1074072. Message @Grand_Poker_Reception if you want a private AOF table for your study group at agreed stakes.",
        ]
      }
    ],
    faq: [
      {
        q: "Where do I find AOF tables at Grand?",
        a: "Club ID 1074072 → Cash Games → filter All-In or Fold in the lobby.",
      },
      {
        q: "Does AOF rake qualify for 60% rakeback?",
        a: "Yes. Contributed rake from AOF cash counts weekly via @grandppuzbot at 1 chip = $1.",
      },
      {
        q: "How many big blinds are typical in AOF?",
        a: "Most Grand union AOF tables use 4–8 BB effective stacks — confirm in the table rules popup.",
      },
      {
        q: "Can I play AOF on mobile?",
        a: "Yes. PPPoker AOF works on iOS and Android; update the app for stable union lobby loading.",
      }
    ],
  },
  "poker-calculators": {
    intro:
      "Club poker rewards players who understand the math behind decisions. You do not need a PhD — five calculator types cover most situations at Grand Club (Club ID 1074072): bankroll sizing at 1 chip = $1, pot odds, implied odds, push/fold charts and basic ICM for MTTs. Combined with 60% rakeback via @grandppuzbot, accurate math lowers long-term cost and variance stress.",
    sections: [
      {
        heading: "1. Bankroll calculator",
        paragraphs: [
          "A bankroll calculator estimates how many buy-ins you need for a stake and game type. Input your total chip balance converted at 1 chip = $1, target stake and format (cash, MTT, AOF).",
          "Conservative cash rules: 30–50 buy-ins for NLH at your regular stake. MTTs need 100+ buy-ins because of payout structures. AOF and Spin & Go need 80–200 buy-ins due to high variance.",
          "Grand's 60% rakeback effectively stretches your roll — a 5% rake table costs ~2% net long term. Factor rebate into buy-in rules but never use rakeback as an excuse to play above your true bankroll.",
        ],
        bullets: [
            "Cash NLH: 30–50 buy-ins at stake (1 chip = $1)",
            "MTT: 100+ buy-ins for regular schedule",
            "AOF / Spin: 80–200 buy-ins for variance",
            "Include 60% rakeback in effective cost, not stake selection",
        ]
      },
      {
        heading: "2. Pot odds calculator",
        paragraphs: [
          "Pot odds compare the size of the call to the total pot. If the pot is 100 chips and you must call 25, you need 20% equity to break even (25 / 125).",
          "Use pot odds on flop and turn decisions in Grand Club cash games. PPPoker shows pot size on screen — divide your call amount by pot plus call to get required equity quickly.",
          "Pot odds alone ignore future streets. Pair with implied odds when you expect to win a large pot on later streets if you hit your draw.",
        ]
      },
      {
        heading: "3. Implied odds and reverse implied odds",
        paragraphs: [
          "Implied odds add expected future winnings when you complete a draw. If you need 20% equity by pot odds but expect to stack an opponent when you hit, calling can be correct with only 15% raw equity.",
          "Reverse implied odds warn against chasing draws that make second-best hands — common in PLO at Grand union tables. A flush draw on a paired board may lose to a full house.",
          "Track opponent tendencies in PPPoker hand history. Loose callers increase implied odds; tight folders reduce them.",
        ]
      },
      {
        heading: "4. Push/fold and equity calculators",
        paragraphs: [
          "Short-stack formats — AOF, hyper SNG, Spin & Go — rely on push/fold charts. Enter stack size in big blinds, position and number of players to see shove-or-fold ranges.",
          "Equity calculators compare hand vs hand or hand vs range preflop. Essential for reviewing whether your AOF shove was +EV against likely calling ranges at Club ID 1074072 stakes.",
          "Free tools like Equilab, Holdem Resources Calculator or mobile push/fold apps work offline. Run spots after sessions; do not slow live play with mid-hand calculations.",
        ],
        bullets: [
            "Push/fold charts: stack in BB + position + players left",
            "Equity tools: review AOF and Spin spots post-session",
            "Do not use calculators during timed decisions at table",
            "Grand AOF rake counts toward 60% rakeback weekly",
        ]
      },
      {
        heading: "5. ICM calculator for tournaments",
        paragraphs: [
          "Independent Chip Model (ICM) converts tournament chips into dollar equity based on payout structure. Critical on bubbles and final tables in Grand Club MTTs.",
          "ICM says folding AA can be correct if a call risks elimination while shorter stacks cover you — rare but real in satellite bubbles. Use ICM calculators when deciding between call, fold or shove near payouts.",
          "Simpler rule for beginners: on the bubble with a medium stack, avoid marginal confrontations against big stacks unless you have clear fold equity. Grand MTT fees count toward rakeback at 1 chip = $1 via @grandppuzbot.",
        ]
      }
    ],
    faq: [
      {
        q: "Do I need paid poker software for Grand Club?",
        a: "Free bankroll, pot odds and push/fold tools are enough for most club stakes. Paid solvers are optional.",
      },
      {
        q: "How does rakeback affect bankroll math?",
        a: "60% rakeback lowers effective rake cost but does not reduce per-session variance. Keep full buy-in rules.",
      },
      {
        q: "Which calculator matters most for AOF?",
        a: "Push/fold charts and preflop equity vs calling ranges — review with hand history after sessions.",
      },
      {
        q: "Does ICM apply to Grand cash games?",
        a: "No. ICM is for tournaments only. Cash uses chip EV at 1 chip = $1.",
      }
    ],
  },
  "rng-fair-play": {
    intro:
      "Fair play in PPPoker rests on certified random card dealing and enforced table rules. Gaming Laboratories International (GLI) tests and certifies the random number generator (RNG) that shuffles virtual decks. Grand Club (Club ID 1074072) operates inside standard union anti-collusion policy while offering 60% rakeback and settlement at 1 chip = $1 through @grandppuzbot — trust in the system plus trust in your cashier.",
    sections: [
      {
        heading: "What GLI RNG certification means",
        paragraphs: [
          "GLI is an independent testing lab that audits gaming software for randomness, security and compliance. PPPoker's shuffle engine has been evaluated against statistical randomness standards — billions of simulated hands must pass chi-square and run tests.",
          "Certification does not mean you win evenly every session. It means card distribution over millions of hands matches mathematical expectation — aces arrive at correct frequency, boards are not rigged against individual players.",
          "RNG applies uniformly across club and union tables. Whether you play NLH cash, MTT or AOF in Club ID 1074072, the same certified engine deals cards.",
        ]
      },
      {
        heading: "How shuffling works in PPPoker club poker",
        paragraphs: [
          "Each hand begins with a new shuffle seed from the certified RNG. Hole cards and board cards are dealt from a standard 52-card deck (or variant deck for Short Deck, PLO, etc.) without replacement until the hand ends.",
          "The server — not your device — controls dealing. Clients display results; they cannot influence which card appears next. This architecture prevents local cheating tools from changing outcomes.",
          "Hand history in PPPoker stores complete deal records. Disputes about whether a card was 'due' are mathematical misunderstandings, not evidence of rigging. Long-term results follow skill and variance, not dealer bias.",
        ],
        bullets: [
            "Server-side dealing — clients cannot alter cards",
            "New shuffle seed every hand from certified RNG",
            "Hand history available for review after each session",
            "Bad beats are variance, not proof of unfair decks",
        ]
      },
      {
        heading: "Fair play rules beyond the RNG",
        paragraphs: [
          "Random cards are only half of fair play. Unions ban collusion — soft-playing friends, chip dumping, signaling and multi-accounting. Grand Club enforces these rules in Club ID 1074072 and reports violations to union security.",
          "Table chat monitoring and pattern detection flag suspicious chip flows between regular seat partners. Repeated abnormal losses transferred between linked accounts trigger investigations.",
          "Players should report suspected collusion to @Grand_Poker_Reception with hand IDs, timestamps and player nicknames. Grand cooperates with union reviews; confirmed cheaters are removed and chips confiscated per policy.",
        ]
      },
      {
        heading: "Grand Club safety practices",
        paragraphs: [
          "Financial fair play matters as much as card fairness. Grand publishes fixed settlement at 1 chip = $1 and processes all deposits and withdrawals only through @grandppuzbot. Third-party chip sellers are banned — they are the main source of player fraud in club poker.",
          "60% rakeback is calculated on transparent contributed rake reports, not discretionary 'comps.' Weekly statements let you verify that your rebate matches hands played.",
          "Pair RNG trust with account security: enable app PIN, do not share PPPoker login, and never give remote access to your device. Phishing Telegram bots impersonating @grandppuzbot are common — only use the official bot link from Grand channels.",
        ],
        bullets: [
            "Official cashier only: @grandppuzbot at 1 chip = $1",
            "No third-party chip purchases — scam and policy violation",
            "Weekly rakeback reports verify 60% contributed rake rebate",
            "Report impersonation bots to @Grand_Poker_Reception",
        ]
      },
      {
        heading: "RNG, legality and the safety block",
        paragraphs: [
          "This article completes Grand's safety content alongside the legality overview: certified dealing addresses 'is the app rigged?' while regional legality articles address 'is playing allowed where I live?' Different questions, both important before depositing.",
          "No certification eliminates gambling risk. You can still lose your bankroll through variance or poor decisions. RNG fairness means the game is not structurally biased against you — not that profit is guaranteed.",
          "Grand Club combines GLI-backed dealing, union anti-collusion enforcement, transparent rakeback and official Telegram settlement. That stack is why players across Russia, Brazil, Uzbekistan, the Philippines and Latin America anchor volume at Club ID 1074072.",
        ]
      }
    ],
    faq: [
      {
        q: "Is PPPoker rigged against losing players?",
        a: "GLI-certified RNG meets statistical randomness standards. Short-term losses are variance, not rigged decks.",
      },
      {
        q: "How do I report collusion at Grand?",
        a: "Message @Grand_Poker_Reception with hand IDs, nicknames and timestamps from PPPoker hand history.",
      },
      {
        q: "Can agents change which cards I get?",
        a: "No. Dealing is server-side. Agents handle chips and rakeback, not card distribution.",
      },
      {
        q: "Does RNG certification apply to MTTs in Club ID 1074072?",
        a: "Yes. The same certified engine deals all formats — cash, MTT, SNG and AOF.",
      }
    ],
  },
};

export default articles;
