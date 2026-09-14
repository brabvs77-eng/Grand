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

  "how-to-download-pppoker": {
    intro:
      "PPPoker runs on iOS, Android and Windows, but the install route differs on each and the app is not available in every regional store. This guide covers all three, plus what to do when the store search comes up empty.",
    sections: [
      {
        heading: "iPhone and iPad",
        paragraphs: [
          "Search the App Store for PPPoker and install it as you would any app. The listing is published by PPPoker Ltd and the download is around 200 MB, so use Wi-Fi if you are on a metered plan.",
          "If the app does not appear in your search results, your store region does not carry it. Switching your Apple ID region is possible but it detaches your existing purchases and subscriptions, so most players in restricted regions use an Android device instead.",
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
        ],
      },
      {
        heading: "First launch",
        paragraphs: [
          "Register with a username and password — no email or phone verification is required. Then apply to Grand Club with our Club ID and enter the Referral ID so your account is linked to the agent who pays your rakeback.",
          "Entering the Referral ID at registration is the one step that is awkward to fix afterwards, so do it before you sit at your first table.",
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
        ],
      },
      {
        heading: "What the Referral ID does",
        paragraphs: [
          "The Referral ID identifies the agent your account belongs to. It is the field that determines who processes your deposits and withdrawals and whose rakeback table applies to your volume.",
          "One agent can serve players across several clubs, and one club can contain players from many agents. That is why the two IDs are separate and why being in the right club does not automatically mean being under the right agent.",
        ],
      },
      {
        heading: "Why both matter for your rakeback",
        paragraphs: [
          "Rakeback is calculated from the rake generated by players under a given Referral ID. If the field was left blank, your rake still goes to the club, but no agent is on record as owing you a share of it.",
          "This is not a bug or a scam — it is simply how the accounting works. It also means that an agent cannot credit you retroactively for volume generated before the link existed.",
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
        ],
      },
      {
        heading: "How the bonus is released",
        paragraphs: [
          "The bonus unlocks in increments as you generate rake, which means it is paid for by play rather than gifted upfront. Each portion that unlocks is added to your withdrawable balance in the weekly settlement alongside your rakeback.",
          "There is no requirement to win, and losing sessions still generate rake, so the bonus continues to release regardless of results. The only thing that stops it is not playing.",
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
        ],
      },
      {
        heading: "What each tier adds beyond the percentage",
        paragraphs: [
          "Higher tiers shorten the payout cycle and raise withdrawal limits, which matters more than the extra percentage points once you are playing regularly. Gold and above get priority handling from the cashier.",
          "Platinum and Diamond also come with freeroll access, leaderboard seeding and a dedicated manager rather than the shared cashier queue. Diamond players are consulted on stake and format changes in the club.",
        ],
      },
      {
        heading: "Keeping your tier",
        paragraphs: [
          "Tiers are evaluated monthly, and a drop in volume moves you down one level rather than resetting you to Bronze. That means a quiet month costs you a few percentage points, not your whole standing.",
          "The rakeback page has a calculator that converts your stake and hours into an expected monthly rake figure, which is the fastest way to see which tier is realistic for your schedule.",
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
        ],
      },
      {
        heading: "Pack sizes and pricing",
        paragraphs: [
          "The standard packs run 780 diamonds at 12.99, 3,900 at 59.99, 7,800 at 109.99 and 48,000 at 649. The larger packs carry a better per-diamond rate, which is the whole basis of the discount structure.",
          "Buying through the Grand cashier applies a further discount on the three larger packs — 5% on the 3,900, 10% on the 7,800 and 15% on the club owner pack — because the purchase goes through the club rather than the app store.",
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
        ],
      },
      {
        heading: "Selling diamonds back",
        paragraphs: [
          "Grand buys back unused diamonds at a published rate, which is useful if you bought the club owner pack and no longer run a club. The buyback rate is below the purchase rate — that spread is how the service pays for itself.",
          "Buyback is credited to your chip balance or paid out with your weekly settlement, whichever you prefer. There is a minimum quantity, so it is not worth doing with small leftovers.",
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
    ],
  },
};

export default articles;
