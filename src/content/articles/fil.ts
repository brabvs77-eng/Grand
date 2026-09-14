import type { ArticleCollection } from "../types";

const articles: ArticleCollection = {
  "pppoker-guide-2026": {
    intro:
      "Ang PPPoker ay hindi klasikong poker room na may iisang lobby, kundi isang plataporma ng mga pribadong club. Bawat club ang nagtatakda ng sariling laro, stakes at panuntunan, at ang pera ay dumadaan sa agent imbes na sa built-in na cashier. Ipapaliwanag ng gabay na ito kung paano gumagana ang modelong ito.",
    sections: [
      {
        heading: "Paano gumagana ang private club model",
        paragraphs: [
          "Ang app mismo ay para lang sa baraha at chips. Ang may-ari ng club ang gumagawa ng room, pumipili ng mga laro, nagtatakda ng rake at nagdedesisyon kung sino ang papasok — kaya kailangan mo palagi ng Club ID para mahanap ang mesa at Referral ID para ma-link sa isang agent.",
          "Madalas na nagsasama-sama ang mga club sa union para magkasabay sa iisang mesa ang mga manlalaro mula sa iba't ibang room. Dahil dito, ang katamtamang laki na club tulad ng Grand ay may aksyon buong araw, hindi lang sa local peak hours.",
        ],
      },
      {
        heading: "Mga laro at stakes na available",
        paragraphs: [
          "Ang No-Limit Hold'em at Pot-Limit Omaha ang may pinakamalaking traffic, at sikat na sikat ang PLO4 at PLO5 sa mga Brazilian at Asian union. Pinupunan ng Short Deck, OFC at All-In or Fold ang natitirang schedule.",
          "Mula micro stakes na ilang dolyar lang ang entry hanggang high stakes na by invitation. Ang mga torneo ay mula sa murang daily buy-ins hanggang sa series na may malalaking guaranteed prize.",
        ],
      },
      {
        heading: "Bakit mas mahalaga ang agent kaysa sa app",
        paragraphs: [
          "Dahil hindi nagpo-proseso ng tunay na pera ang PPPoker, nakadepende sa agent ang deposit, withdrawal at rakeback mo. Ang magandang agent ay nagbabayad sa oras, isinusulat ang rake at rakeback bago mag-load ng chips, at inaayos ang mga disputa sa club para sa iyo.",
          "Ito rin ang pangunahing panganib ng format. Mas mabigat ang reputasyon ng agent kaysa sa pinakamataas na inaanunsyong rakeback.",
        ],
      },
      {
        heading: "Ang rake at rakeback sa totoong buhay",
        paragraphs: [
          "Karaniwang istruktura ay hanggang 5% ng pot na may cap na mga 3 big blinds, pero bawat club ang nagtatakda ng sariling numero. Ang rakeback ay ang ibinabalik sa iyo ng agent, kadalasan lingguhan.",
          "Realistiko ang 25% hanggang 60% depende sa buwanang volume mo. Ang anumang lampas doon ay dapat suriin bago ka mag-deposit.",
        ],
      },
    ],
    faq: [
      {
        q: "Real money poker room ba ang PPPoker?",
        a: "Sa teknikal na paraan, hindi. Play chips ang gamit ng app at ang real-money settlement ay sa pagitan mo at ng club agent.",
      },
      {
        q: "Kailangan ba ng KYC?",
        a: "Walang dokumentong kailangan sa pagrerehistro. May ilang agent na humihingi ng verification sa malalaking withdrawal.",
      },
      {
        q: "Pwede bang maglaro sa computer?",
        a: "Oo. May Windows client bukod sa iOS at Android apps, at sumusuporta ito sa multi-tabling.",
      },
    ],
  },

  "join-grand-club": {
    intro:
      "Mga sampung minuto lang ang pagsali sa Grand Club: i-install ang app, gumawa ng account, mag-apply gamit ang dalawang ID namin at mag-message sa cashier. Narito ang bawat hakbang, pati na ang mga bahaging madalas pagkamalian.",
    sections: [
      {
        heading: "Hakbang 1 — I-install ang app",
        paragraphs: [
          "I-download ang PPPoker sa App Store, Google Play, o bilang direktang APK kung wala ito sa store mo. May Windows client din kung balak mong mag-multi-table.",
          "Mag-install lang mula sa mga opisyal na source na nakalista sa download page namin. Delikado sa account mo ang mga binagong build na kumakalat sa forums.",
        ],
      },
      {
        heading: "Hakbang 2 — Gumawa ng account",
        paragraphs: [
          "Buksan ang app, i-tap ang Register, at pumili ng username at password. Walang dokumento, email confirmation o phone verification na kailangan sa yugtong ito.",
          "Pumili ng nickname na kaya mong panatilihin, dahil dito ka makikilala ng agent at ng mga club manager sa lahat ng payout record.",
        ],
      },
      {
        heading: "Hakbang 3 — Mag-apply gamit ang dalawang ID",
        paragraphs: [
          "I-tap ang Join Club at ilagay ang Grand Club ID, tapos ang Referral ID sa field sa ibaba. Ang Club ID ang magtuturo sa app papunta sa room namin; ang Referral ID ang mag-uugnay sa account mo sa cashier namin.",
          "Ang pinakakaraniwang pagkakamali ay ang paglaktaw sa Referral ID. Kung wala ito, walang mag-lo-load ng chips mo, walang rakeback, at hindi makakatulong ang support kapag may problema.",
        ],
      },
      {
        heading: "Hakbang 4 — Mag-load ng chips",
        paragraphs: [
          "Mag-message sa cashier namin sa Telegram o WhatsApp kasama ang nickname at halaga. Kinukumpirma namin ang rake structure at rakeback rate mo bago gumalaw ang pera.",
          "Karaniwang lumalabas ang chips sa balanse sa loob ng 15 minuto. Gumawa ng maliit na test deposit sa unang session para makita mo ang buong deposit at withdrawal cycle bago ilagay ang buong bankroll.",
        ],
      },
    ],
    faq: [
      {
        q: "Gaano katagal ang approval?",
        a: "Karaniwang ilang minuto lang sa business hours.",
      },
      {
        q: "Pwede ba akong sumali sa maraming club?",
        a: "Oo, ang isang PPPoker account ay pwedeng miyembro ng ilang club nang sabay.",
      },
      {
        q: "Magkano ang minimum na unang deposit?",
        a: "Mula sa katumbas ng $10, depende sa payment method.",
      },
    ],
  },

  "deposit-methods": {
    intro:
      "May agent cashier ang Grand Club, kaya dumadaan ang deposit sa mga local payment rail imbes na sa card form sa website. Kakaiba ito sa umpisa pero ito ang dahilan kung bakit mabilis ang bayaran sa Brazilian reais, Philippine pesos, rubles at som.",
    sections: [
      {
        heading: "Mga method kada rehiyon",
        paragraphs: [
          "May hiwalay kaming rail para sa bawat merkado para hindi ka mapilitang dumaan sa conversion na hindi mo naman hiningi.",
        ],
        bullets: [
          "Brazil — Pix, instant, mula R$50",
          "Pilipinas — GCash at Maya, 5 hanggang 30 minuto, mula ₱500",
          "Russia at CIS — SBP at cards, 5 hanggang 15 minuto, mula ₽1,000",
          "Uzbekistan — Uzcard, Humo at Payme, 10 hanggang 30 minuto, mula $10",
          "Buong mundo — USDT TRC20, 5 hanggang 15 minuto, mula $10",
        ],
      },
      {
        heading: "Paano tumatakbo ang deposit",
        paragraphs: [
          "Mag-message ka sa cashier kasama ang PPPoker nickname, halaga at preferred method. Sasagot ang cashier ng payment details at maikling validity window, karaniwan 15 minuto, para naka-lock ang palitan.",
          "Pagkatapos mong magbayad at kumpirmahin, makikredit ang chips sa club balance mo at makakatanggap ka ng confirmation. Itago ang resibo hanggang lumabas ang chips.",
        ],
      },
      {
        heading: "Bayad, palitan at limits",
        paragraphs: [
          "Walang dagdag na komisyon ang Grand sa mga local method: ang rate na sinabi sa iyo ang rate na babayaran mo. Ang network fee lang sa crypto ang panlabas na gastos, at blockchain ang naniningil nito, hindi kami.",
          "Sadyang mababa ang minimum para makagawa ng maliit na test transaction ang bagong player. Lumalaki ang maximum kada deposit kasabay ng VIP tier mo.",
        ],
      },
      {
        heading: "Mga safety habit",
        paragraphs: [
          "Magpadala lang sa details na galing sa cashier sa kasalukuyang usapan, huwag kailanman sa address na ipinasa ng ibang player. Ang impersonation accounts ang pinakakaraniwang atake sa club poker.",
          "Kumpirmahin ang rake at rakeback nang nakasulat bago ang unang deposit. Ibinibigay ng tunay na agent ang mga numerong ito nang hindi mo na kailangang pilitin.",
        ],
      },
    ],
    faq: [
      {
        q: "Pwede bang mag-deposit sa local currency ko?",
        a: "Oo, sa anim na merkadong nakalista. Sa iba, USDT ang pinakamabilis.",
      },
      {
        q: "Gaano kabilis dumating ang chips?",
        a: "Karaniwang sa loob ng 15 minuto. Ang bank transfer ay pwedeng umabot ng 24 oras.",
      },
      {
        q: "May deposit fee ba?",
        a: "Wala mula sa Grand. May karaniwang network fee ang crypto transfers.",
      },
    ],
  },

  "rakeback-explained": {
    intro:
      "Ang rakeback ay ang bahagi ng komisyon na bumabalik sa iyo. Sa club poker hindi ito marketing extra kundi ang pangunahing paraan para manatiling kumikita ang seryosong player, kaya sulit maintindihan kung paano ito kinakalkula.",
    sections: [
      {
        heading: "Ano ang rake",
        paragraphs: [
          "Ang rake ay komisyong kinukuha sa bawat pot, karaniwang hanggang 5% na may cap na mga 3 big blinds. Walang kinukuha bago ang flop, at sa torneo ay entry fee sa ibabaw ng buy-in ang ginagamit.",
          "Sa isang buwan ng tuloy-tuloy na laro, mas malaki ang naipong rake kaysa inaasahan ng karamihan, kaya napakahalaga ng porsyentong ibinabalik sa iyo.",
        ],
      },
      {
        heading: "Paano namin kinakalkula sa Grand",
        paragraphs: [
          "Ginagamit namin ang contributed method: binibilang ang share mo sa rake mula sa mga pot na talagang nilagyan mo ng pera. Nagbibigay ang club ng lingguhang total at doon inilalapat ang porsyento mo.",
          "Ang base ay 45% para sa lahat ng miyembro. Itinataas ito ng VIP tiers sa 50%, 55%, 58% at 60% habang lumalaki ang buwanang rake, at kinakalkula muli tuwing unang araw ng buwan.",
        ],
      },
      {
        heading: "Konkretong halimbawa",
        paragraphs: [
          "Sabihin nating may $1,200 kang rake sa isang buwan. Sa Gold tier, 55% iyon, kaya $660 ang bumabalik, binabayaran lingguhan at hindi lang sa katapusan ng buwan.",
          "Ang parehong volume sa 30% deal ay magbabalik ng $360. Ang $300 na diperensya kada buwan ay kadalasang mas malaki pa sa edge ng karamihan sa mid-stakes players laban sa field nila.",
        ],
      },
      {
        heading: "Kailan ka babayaran",
        paragraphs: [
          "Lingguhan ang update ng club statistics at doon din kami nagbabayad, hindi buwanan. Sa parehong method ng withdrawal mo lalabas ang bayad.",
          "Pwede kang humingi ng breakdown ng hands at rake anumang oras. Kung mukhang mali ang numero, kami ang mag-e-escalate sa club sa halip na ipasa sa iyo.",
        ],
      },
    ],
    faq: [
      {
        q: "Kasama ba ang tournament fees?",
        a: "Oo, pumapasok ang entry fee sa buwanang rake total mo.",
      },
      {
        q: "Mawawala ba ang tier ko pagkatapos ng tahimik na buwan?",
        a: "Buwanan ang recalculation, pero hinahawakan namin ang level mo ng isang grace month matapos bumaba ang volume.",
      },
      {
        q: "60% ba talaga ang maximum?",
        a: "Iyon ang standard top rate namin. Ang Diamond tier na may napakalaking volume ay pwedeng makipag-usap ng custom deal.",
      },
    ],
  },

  "withdraw-guide": {
    intro:
      "Kasing-ganda lang ng cashout nito ang isang club. Saklaw ng gabay na ito kung paano gumagana ang withdrawal sa Grand, ano ang realistikong timing, at ano ang magagawa mo para walang sagabal ang bawat payout.",
    sections: [
      {
        heading: "Paggawa ng request",
        paragraphs: [
          "Mag-message sa cashier kasama ang nickname, halaga at method na gusto mong tanggapan ng pera. Ang minimum ay katumbas ng $20; ang maximum kada request ay depende sa VIP tier mo.",
          "Ibabawas muna ang chips sa club balance, tapos ipapadala ang transfer. Makakatanggap ka ng confirmation na may transaction reference kapag naipadala na.",
        ],
      },
      {
        heading: "Realistikong timing",
        paragraphs: [
          "Karamihan ng request ay naproseso sa loob ng 30 minuto sa business hours at mga dalawang oras kapag madaling-araw. Ang Pix, GCash at USDT ang pinakamabilis.",
          "Ang bank transfer ay depende sa receiving bank at pwedeng umabot ng isang business day. Kung mabagal ang isang payout, sasabihin namin bago mo kumpirmahin, hindi pagkatapos.",
        ],
      },
      {
        heading: "Verification sa malalaking halaga",
        paragraphs: [
          "Sa unang withdrawal na lampas $500, may magaan kaming verification, karaniwan ay larawan ng dokumento. Proteksyon ito ng balanse mo laban sa account takeover, hindi regulatory KYC.",
          "Kapag na-verify na, hindi na uulitin ang check sa mga susunod na payout sa parehong method.",
        ],
      },
      {
        heading: "Paano iwasan ang delay",
        paragraphs: [
          "Mag-withdraw sa method na nakapangalan sa iyo at panatilihing pareho ang channel ng deposit at withdrawal. Ang hindi tugmang account ang pinakakaraniwang dahilan ng napa-pause na payout.",
          "Kung may balak kang malaking cashout, sabihan ang cashier ilang oras bago para handa ang liquidity sa tamang rail.",
        ],
      },
    ],
    faq: [
      {
        q: "May withdrawal fee ba?",
        a: "Wala mula sa Grand. May blockchain network fee ang crypto withdrawals.",
      },
      {
        q: "Pwede bang ibang method sa withdrawal kaysa sa deposit?",
        a: "Kadalasan oo, pero ang unang payout sa bagong method ay pwedeng mag-trigger ng verification.",
      },
      {
        q: "Ilang beses ako pwedeng mag-withdraw?",
        a: "Walang limitasyon sa bilang ng request.",
      },
    ],
  },

  "choose-reliable-agent": {
    intro:
      "Sa club poker, ang agent ang may hawak ng pera, kaya mas malaking desisyon ang pagpili ng agent kaysa sa pagpili ng club. Ito ang mga dapat suriin bago ang unang deposit kahit saan — pati sa amin.",
    sections: [
      {
        heading: "Suriin ang public track record",
        paragraphs: [
          "Maghanap ng agent na may kasaysayan sa mga independiyenteng poker portal at forum, hindi lang Telegram channel. Mas mahirap pekein ang reputasyong umiiral sa labas ng sariling channel ng agent.",
          "Magtanong nang direkta sa ibang players ng club. Ang matagal nang club ay may mga regular na dumaan na sa ilang payout cycle at diretsahang sasabihin kung maaasahan ang cashier.",
        ],
      },
      {
        heading: "Ipasulat ang mga tuntunin",
        paragraphs: [
          "Bago mag-load ng kahit anong chips, dapat nasa iyo na ang rake structure, rake cap, rakeback percentage at payout schedule sa mensaheng pwede mong balikan.",
          "Ang agent na umiiwas isulat ang mga numerong iyon, o nagbabago nito pagkatapos mong mag-deposit, ay sinabi na sa iyo ang lahat ng kailangan mong malaman.",
        ],
      },
      {
        heading: "Babala ang sobrang alok",
        paragraphs: [
          "Ang rakeback na inaanunsyong lampas 60% ay kadalasan maikling promo na ipinapakitang permanente, o senyales na galing sa bagong deposit ang pambayad.",
          "Ganoon din ang guaranteed win rate, bonus na walang wagering condition, o panggigipit na mag-deposit agad ng malaking halaga.",
        ],
      },
      {
        heading: "Magsimula sa maliit at subukan ang buong cycle",
        paragraphs: [
          "Mag-minimum deposit, maglaro ng maikling session, humiling ng withdrawal at kumuha ng isang rakeback payment. Magdagdag lang pagkatapos mong makita ang pera na gumagalaw sa magkabilang direksyon.",
          "Kaunting oras lang ang gagastusin mo at wala nang iba, at ito ang pinakaepektibong proteksyon sa isang unlicensed na format.",
        ],
      },
    ],
    faq: [
      {
        q: "Gaano kalaki ang ligtas na unang deposit?",
        a: "Manatili sa minimum, karaniwang $10 hanggang $50, hanggang makatapos ka ng isang withdrawal.",
      },
      {
        q: "Sino ang may hawak ng pera ko, club o agent?",
        a: "Ang agent. Ang club ang nagpapatakbo ng laro; ang agent ang nakikipag-ayos sa club at sa iyo.",
      },
      {
        q: "Paano kung hindi na sumasagot ang agent?",
        a: "I-escalate sa club o union management. Kaya mahalaga na piliin ang club na may kilalang pamunuan.",
      },
    ],
  },
};

export default articles;
