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
          "Message our cashier on Telegram or WhatsApp with your nickname and the amount you want to load. We confirm the rake structure and your rakeback rate before any money moves.",
          "Chips normally appear on your balance within 15 minutes. Start with a small test deposit on your first session so you can see the full deposit and withdrawal cycle before committing a bankroll.",
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
    ],
  },

  "deposit-methods": {
    intro:
      "Grand Club runs an agent cashier, which means deposits go through local payment rails rather than a card form on a website. That sounds unusual at first but it is what makes fast payments in Brazilian reais, Philippine pesos, roubles and som possible.",
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
          "You message the cashier with your PPPoker nickname, the amount and your preferred method. The cashier replies with payment details and a short validity window, usually 15 minutes, so the exchange rate stays fixed.",
          "Once you send the payment and confirm it, chips are credited to your club balance and you get a confirmation message. Keep the receipt until the chips appear.",
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
        ],
      },
      {
        heading: "How rakeback is calculated at Grand",
        paragraphs: [
          "We use the contributed method: your share of the rake is counted from the pots you actually put money into. The club reports weekly totals, and your percentage is applied to that figure.",
          "Base rate is 45% for every member. VIP tiers raise it to 50%, 55%, 58% and 60% as your monthly rake grows, and the tier is recalculated on the first day of each month.",
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
    ],
  },

  "withdraw-guide": {
    intro:
      "A club is only as good as its cashout. This guide covers how withdrawals work at Grand, what the realistic timings are, and what you can do to make every payout go through without friction.",
    sections: [
      {
        heading: "Making a request",
        paragraphs: [
          "Message the cashier with your nickname, the amount and the method you want to receive funds on. The minimum is $20 equivalent; the maximum per request depends on your VIP tier.",
          "Chips are deducted from your club balance first, then the transfer is sent. You will get a confirmation with the transaction reference once it is out.",
        ],
      },
      {
        heading: "Realistic timings",
        paragraphs: [
          "Most requests are processed within 30 minutes during business hours and within about two hours overnight. Pix, GCash and USDT are the fastest rails.",
          "Bank transfers depend on the receiving bank and can take a full business day. If a payout is going to be slow, we tell you before you confirm rather than after.",
        ],
      },
      {
        heading: "Verification on larger amounts",
        paragraphs: [
          "For first withdrawals above $500 we run a light verification step, usually a document photo. This protects your balance against account takeover rather than serving as regulatory KYC.",
          "Once verified, subsequent payouts on the same method go through without repeating the check.",
        ],
      },
      {
        heading: "How to avoid delays",
        paragraphs: [
          "Withdraw to a method registered in your own name and keep it consistent between deposits and withdrawals. Mismatched accounts are the most common reason a payout is paused.",
          "If you are planning a large cashout, tell the cashier a few hours ahead so liquidity is ready on the right rail.",
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
        ],
      },
      {
        heading: "Start small and test the full cycle",
        paragraphs: [
          "Make a minimum deposit, play a short session, request a withdrawal and collect one rakeback payment. Only scale up after you have seen money move in both directions.",
          "This costs you a little time and nothing else, and it is the single most effective protection available in an unlicensed format.",
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
    ],
  },
};

export default articles;
