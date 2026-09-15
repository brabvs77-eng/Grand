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
};

export default articles;
