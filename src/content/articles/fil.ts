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

  "how-to-download-pppoker": {
    intro:
      "Tumatakbo ang PPPoker sa iOS, Android at Windows, pero magkaiba ang paraan ng pag-install sa bawat isa at hindi available ang app sa lahat ng regional store. Sasakupin ng gabay na ito ang tatlo, kasama ang dapat gawin kapag walang lumalabas sa paghahanap.",
    sections: [
      {
        heading: "iPhone at iPad",
        paragraphs: [
          "Hanapin ang PPPoker sa App Store at i-install gaya ng kahit anong app. Ang publisher ay PPPoker Ltd at humigit-kumulang 200 MB ang download, kaya gamitin ang Wi-Fi kung limitado ang iyong data.",
          "Kung hindi lumalabas ang app sa search, hindi ito dala ng region ng iyong store. Puwedeng palitan ang region ng Apple ID, pero nadidiskonekta nito ang mga dati mong binili at subscription, kaya karamihan ng manlalaro sa restricted na rehiyon ay Android na lang ang ginagamit.",
        ],
      },
      {
        heading: "Android",
        paragraphs: [
          "Ang Google Play ang pinakasimpleng ruta kung nakalista doon ang app. Kung wala, may pirmadong APK ang PPPoker sa sarili nitong site, at kailangang payagan ang pag-install mula sa browser sa Settings, Apps, Special access.",
          "Kunin lang ang APK sa opisyal na domain o sa link sa aming download page. Ang mga repackaged na build na kumakalat sa mga forum at Telegram channel ay madalas may kasamang magnanakaw ng password.",
        ],
        bullets: [
          "Tiyaking com.pppoker.android ang package name bago mag-install",
          "Huwag patayin ang Play Protect — sini-scan nito pati sideloaded na app",
          "Manu-mano ang update ng APK, kaya suriin buwan-buwan",
        ],
      },
      {
        heading: "Windows",
        paragraphs: [
          "Hiwalay na download ang Windows client mula sa site ng PPPoker at ito ang tamang pili kung balak mong maglaro ng higit sa dalawang mesa nang sabay. Kaya nitong i-resize at ayusin ang mga mesa, na hindi magagawa ng phone app.",
          "Iisang account lang ang gamit ng desktop client at ng mobile app, kaya puwedeng simulan ang session sa telepono at ituloy sa computer nang walang anumang paglilipat.",
        ],
      },
      {
        heading: "Unang pagbukas",
        paragraphs: [
          "Magrehistro gamit ang username at password — walang kailangang email o phone verification. Pagkatapos ay mag-apply sa Grand Club gamit ang aming Club ID at ilagay ang Referral ID para maiugnay ang account mo sa agent na nagbabayad ng rakeback.",
          "Ang paglalagay ng Referral ID sa pagrehistro ang tanging hakbang na mahirap ayusin pagkatapos, kaya gawin ito bago ka umupo sa unang mesa.",
        ],
      },
    ],
    faq: [
      {
        q: "Ligtas ba ang APK?",
        a: "Ang nasa opisyal na site ng PPPoker, oo. Ang galing sa third-party mirror, hindi, at ito ang pinakakaraniwang sanhi ng nanakaw na club account.",
      },
      {
        q: "Puwede bang maglaro sa Mac?",
        a: "Walang native na client para sa Mac. Ang mga nasa macOS ay gumagamit ng iOS app sa iPhone o pinapatakbo ang Windows client sa Parallels o CrossOver.",
      },
      {
        q: "Gaano karaming data ang kinakain ng isang session?",
        a: "Mga 20-40 MB kada oras ng laro. Ang bigat ay nasa unang download, hindi sa mismong mga laro.",
      },
    ],
  },

  "club-id-explained": {
    intro:
      "Dalawang numero ang hinahawakan ng bawat manlalaro ng PPPoker, at ang pagkalito sa mga ito ang pinakakaraniwang dahilan kung bakit walang rakeback ang bagong manlalaro. Ang Club ID ang nagpapapasok sa iyo sa laro; ang Referral ID ang nagtatakda kung sino ang magbabayad sa iyo.",
    sections: [
      {
        heading: "Ano ang ginagawa ng Club ID",
        paragraphs: [
          "Ang Club ID ay ang pampublikong address ng isang club sa loob ng app. Inilalagay mo ito sa Club, Join Club, at nagpapadala ito ng aplikasyon sa mga manager ng club na iyon. Walang anumang may kinalaman sa pera mo ang nakakabit dito.",
          "Dahil walang global lobby ang PPPoker, ang Club ID lang ang paraan para makita ang isang partikular na room. Hayagang inilalathala ng mga club ang kanila, kaya nakikita mo ito sa site ng bawat seryosong club, pati sa amin.",
        ],
      },
      {
        heading: "Ano ang ginagawa ng Referral ID",
        paragraphs: [
          "Tinutukoy ng Referral ID kung kaninong agent nabibilang ang account mo. Ito ang field na nagpapasya kung sino ang magpoproseso ng iyong deposit at withdrawal at kung aling rakeback table ang gagamitin sa volume mo.",
          "Kayang pagsilbihan ng isang agent ang mga manlalaro sa iba't ibang club, at kayang maglaman ng isang club ng mga manlalaro mula sa maraming agent. Kaya magkahiwalay ang dalawang ID, at ang pagiging nasa tamang club ay hindi awtomatikong nangangahulugang nasa tamang agent ka.",
        ],
      },
      {
        heading: "Bakit mahalaga pareho para sa rakeback",
        paragraphs: [
          "Kinakalkula ang rakeback mula sa rake na nilikha ng mga manlalaro sa ilalim ng isang Referral ID. Kung naiwang blangko ang field, napupunta pa rin sa club ang rake mo, pero walang agent na nakatala na may utang na bahagi sa iyo.",
          "Hindi ito bug o scam — ganoon lang talaga gumagana ang accounting. Ibig din sabihin nito, hindi maaaring i-credit nang paatras ng agent ang volume na nalaro bago pa umiral ang ugnayan.",
        ],
      },
      {
        heading: "Pag-aayos ng nawawala o maling referral",
        paragraphs: [
          "Kung nakapagrehistro ka nang walang Referral ID, mag-message sa cashier bago maglaro. Karaniwang posible ang muling pag-uugnay sa bagong account, pero kailangang aksyunan ito ng club manager at puwedeng umabot ng isang araw.",
          "Kung malaki na ang nalaro mong volume sa ilalim ng ibang agent, kadalasang kailangan ang pagsang-ayon niya. Tatlumpung segundo lang ito ayusin sa pagrehistro; isang linggo kung pagkatapos na.",
        ],
        bullets: [
          "Club ID — kung saan ka naglalaro",
          "Referral ID — kung sino ang nagbabayad sa iyo",
          "Pareho silang inilalagay sa app, hindi sa kahit anong website",
        ],
      },
    ],
    faq: [
      {
        q: "Puwede bang nasa dalawang club nang sabay?",
        a: "Oo. Pinapayagan ng PPPoker na sumali sa ilang club mula sa isang account, at nananatili ang Referral ID sa account mo, hindi sa iisang club.",
      },
      {
        q: "May iba pa bang nakakakita ng Referral ID ko?",
        a: "Ang agent mo at ang mga manager ng club lang. Hindi ito lumalabas sa mesa at hindi ito makikita ng ibang manlalaro.",
      },
      {
        q: "Paano kung tanggihan ng club ang aplikasyon ko?",
        a: "Mag-message sa cashier kasama ang PPPoker nickname mo. Minsan ay isinasailalim sa review ang mga aplikasyong walang kilalang referral sa halip na basta tanggihan.",
      },
    ],
  },

  "welcome-bonus-terms": {
    intro:
      "Tinutumbasan ng welcome bonus ng Grand ang unang deposit mo nang 100%. Simple ang headline, pero ang dapat basahin ay kung paano ito nire-release, dahil nagiging withdrawable na balanse ito habang naglalaro ka at hindi dumarating bilang cash.",
    sections: [
      {
        heading: "Paano gumagana ang pagtutumbas",
        paragraphs: [
          "Mag-deposit ng kahit anong halaga mula sa minimum at ikre-credit ang parehong halaga bilang bonus, hanggang sa cap na nakalathala sa bonuses page. Ang 200 na deposit ay nagiging 200 sa chips kasama ang 200 na nakabinbing bonus.",
          "Available agad ang deposit mo at puwede mong i-withdraw anumang oras. Ang bahagi lang ng bonus ang may kondisyon sa pag-release.",
        ],
      },
      {
        heading: "Paano nire-release ang bonus",
        paragraphs: [
          "Unti-unting nabubuksan ang bonus habang gumagawa ka ng rake, ibig sabihin binabayaran ito ng paglalaro at hindi ibinibigay nang maaga. Ang bawat bahaging nabubuksan ay idinadagdag sa withdrawable mong balanse sa lingguhang settlement kasabay ng rakeback.",
          "Hindi kailangang manalo: gumagawa rin ng rake ang mga talong session, kaya patuloy ang pag-release anuman ang resulta. Ang tanging pumipigil dito ay ang hindi paglalaro.",
        ],
      },
      {
        heading: "Ang palugit sa pag-release",
        paragraphs: [
          "Tumatakbo ang unlock period sa nakatakdang bilang ng araw mula sa deposit. Nawawala ang anumang naka-lock pa sa katapusan ng palugit, kaya mas mabuting itugma ang laki ng deposit sa volume na talagang balak mong laruin.",
          "Kung ilang oras lang ang laro mo kada linggo, mas sulit ang maliit na deposit na ganap na nare-release kaysa sa malaking kalahati lang ang nabubuksan. Sasabihin ng cashier ang kailangang rake para sa isang halaga bago ka magpadala.",
        ],
        bullets: [
          "Withdrawable ang deposit mula sa simula",
          "Nire-release ang bonus kapalit ng rake, lingguhan ang settlement",
          "Nawawala sa katapusan ng palugit ang hindi pa nare-release",
        ],
      },
      {
        heading: "Ano ang nagpapawalang-bisa sa bonus",
        paragraphs: [
          "Ang paglilipat ng chips sa pagitan ng account, sabwatan sa upuan kasama ang kapareha, at anumang anyo ng collusion ay nagpapawalang-bisa sa bonus at kadalasan sa account. Sinusuri ng mga club ang hand history, at kitang-kita sa data ang ganitong pattern.",
          "Ang pag-withdraw bago matapos ang palugit ay nagkakansela sa anumang naka-lock pa. Ayos lang ang partial withdrawal — ang hindi pa nare-release na natitira lang ang apektado.",
        ],
      },
    ],
    faq: [
      {
        q: "Puwede bang isabay sa rakeback?",
        a: "Oo. Tumatakbo ang rakeback sa normal mong tier at nire-release ang bonus sa ibabaw nito. Iisang lingguhang bayad ang parehong dumarating.",
      },
      {
        q: "May minimum na deposit ba?",
        a: "Oo, at nag-iiba ito ayon sa paraan. Mas mababa ang minimum ng mga lokal na channel kaysa USDT. Kinukumpirma ng cashier ang kasalukuyang halaga bago ka magpadala.",
      },
      {
        q: "Puwede ba itong dalawang beses?",
        a: "Isang beses lang kada manlalaro ang welcome bonus. Ang reload bonus ang paulit-ulit na katumbas nito, sa mas mababang porsyento.",
      },
    ],
  },

  "vip-program-guide": {
    intro:
      "May limang tier ang VIP program ng Grand, at ang tanging naglilipat sa iyo sa pagitan nila ay ang buwanang rake. Walang puntos na bibilhin, walang subscription at walang manu-manong aplikasyon — muling kinakalkula ang tier mula sa volume mo kada buwan.",
    sections: [
      {
        heading: "Ang limang tier",
        paragraphs: [
          "Nagsisimula ang Bronze sa 45% rakeback nang walang kinakailangang volume. Nagsisimula ang Silver sa 200 na buwanang rake at nagbabayad ng 50%. Ang Gold ay sa 1,000 at nagbabayad ng 55%. Ang Platinum ay sa 3,000 at 58%. Ang Diamond ay sa 10,000 at 60%.",
          "Sinusukat ang mga threshold sa rake na nalikha, hindi sa perang idineposito o napanalunan. Mas mataas ang naaabot ng talong buwan na may malaking volume kaysa sa panalong buwan na maliit ang volume.",
        ],
        bullets: [
          "Bronze — walang minimum, 45%",
          "Silver — 200 rake, 50%",
          "Gold — 1,000 rake, 55%",
          "Platinum — 3,000 rake, 58%",
          "Diamond — 10,000 rake, 60%",
        ],
      },
      {
        heading: "Paano binibilang ang rake para sa tier",
        paragraphs: [
          "Binibilang ang rake sa cash game sa contributed method: sinisingil ka ng bahagi ng pot kapag naglagay ka lang ng pera dito, at walang naidadagdag sa kabuuang rake ang pag-fold sa preflop.",
          "Bilang din ang tournament fee, sa buong halaga nito. Ang rake mula sa lahat ng mesa at format sa club ay pinagsasama sa iisang buwanang bilang, kaya hindi hinahati ang progreso mo kapag hinati mo ang oras sa cash at MTT.",
        ],
      },
      {
        heading: "Ano ang dagdag ng bawat tier bukod sa porsyento",
        paragraphs: [
          "Pinaikli ng mas mataas na tier ang siklo ng bayad at itinataas ang limitasyon sa withdrawal, na mas mahalaga kaysa dagdag na porsyento kapag regular ka nang naglalaro. Mula Gold pataas, priyoridad ang pagproseso ng cashier.",
          "Ang Platinum at Diamond ay may dagdag na access sa freeroll, panimulang puwesto sa leaderboard at nakalaang manager sa halip na pila ng cashier. Kinukonsulta ang mga Diamond na manlalaro sa pagbabago ng stake at format sa club.",
        ],
      },
      {
        heading: "Pagpapanatili ng tier mo",
        paragraphs: [
          "Sinusuri ang tier kada buwan, at ang pagbaba ng volume ay naglilipat sa iyo pababa ng isang antas sa halip na ibalik ka sa Bronze. Ibig sabihin, ilang porsyento lang ang halaga ng tahimik na buwan, hindi ang buong katayuan mo.",
          "May calculator sa rakeback page na nagko-convert ng stake at oras mo sa inaasahang buwanang rake, at ito ang pinakamabilis na paraan para makita kung aling tier ang makatotohanan sa iskedyul mo.",
        ],
      },
    ],
    faq: [
      {
        q: "Kailan binabayaran ang rakeback?",
        a: "Lingguhan, sa nakatakdang araw, para sa rake ng nakaraang linggo. Ang porsyento ng tier mo sa buwang iyon ang ginagamit sa bawat bayad.",
      },
      {
        q: "Nare-reset ba ang tier kapag lumaktaw ako ng isang buwan?",
        a: "Bumababa ka ng isang antas, hindi sa pinakamababa. Kapag bumalik ka sa dating volume, bumabalik ang tier sa susunod na buwan.",
      },
      {
        q: "Bilang ba ang mga torneo?",
        a: "Oo. Idinadagdag ang tournament fee sa buwanang rake mo sa buong halaga, kasama ang rake sa cash game.",
      },
    ],
  },

  "diamonds-guide": {
    intro:
      "Ang diamonds ang in-app na pera ng PPPoker. Hindi ito chips at hindi puwedeng ipanlaro, pero binabayaran nito ang mga bagay sa paligid ng laro — entry sa torneo sa ilang club, paggawa ng club, regalo at ang VIP card. Narito ang halaga nito at kung paano hindi mag-sobra sa bayad.",
    sections: [
      {
        heading: "Para saan talaga ang diamonds",
        paragraphs: [
          "Binibili ng diamonds ang VIP card, na nag-aalis ng ads at nagbubukas ng estadistika at mga feature sa profile sa loob ng app. Sinasagot din nito ang bayad sa paggawa ng club, at sa ilang union ay ginagamit ito sa buy-in ng torneo at side event.",
          "Hindi ito kayang gawing chips ng app, at walang seryosong agent na nagsasabi ng kabaligtaran. Ang sinumang nag-aalok ng direktang palitan ng diamond sa chips sa loob ng PPPoker ay naglalarawan ng bagay na hindi sinusuportahan ng platform.",
        ],
      },
      {
        heading: "Mga pack at presyo",
        paragraphs: [
          "Ang karaniwang pack ay 780 diamonds sa 12.99, 3,900 sa 59.99, 7,800 sa 109.99 at 48,000 sa 649. Mas mura kada diamond ang malalaking pack, at doon nakasalalay ang buong istruktura ng diskuwento.",
          "Ang pagbili sa cashier ng Grand ay nagdadagdag ng diskuwento sa tatlong malalaking pack — 5% sa 3,900, 10% sa 7,800 at 15% sa club owner pack — dahil dumadaan ang bili sa club at hindi sa app store.",
        ],
        bullets: [
          "780 — 12.99, walang diskuwento",
          "3,900 — 59.99, 5% off sa cashier",
          "7,800 — 109.99, 10% off sa cashier",
          "48,000 — 649, 15% off sa cashier",
        ],
      },
      {
        heading: "Bumili sa cashier sa halip na sa store",
        paragraphs: [
          "Dumadaan ang in-app purchase sa Apple o Google at may kasamang platform fee nila, kaya mas mahal doon ang parehong pack. Ang pag-order sa cashier ay binabayaran sa parehong paraan na ginagamit mo na sa deposit, kabilang ang USDT at lokal na transfer.",
          "Manu-mano ang paghahatid at karaniwang dumarating sa loob ng isang oras sa oras ng trabaho. Ipapadala mo ang laki ng pack at ang PPPoker ID mo, at darating ang diamonds sa account mo.",
        ],
      },
      {
        heading: "Pagbebenta pabalik ng diamonds",
        paragraphs: [
          "Binibili pabalik ng Grand ang hindi nagamit na diamonds sa nakalathalang rate, na kapaki-pakinabang kung bumili ka ng club owner pack at wala ka nang pinapatakbong club. Mas mababa ang buyback rate kaysa sa bilihan — ang agwat na iyon ang nagpapatakbo sa serbisyo.",
          "Ikinakredit ang buyback sa chip balance mo o ibinabayad kasama ang lingguhang settlement, alinman ang gusto mo. May minimum na dami, kaya hindi sulit gawin ito sa maliliit na natira.",
        ],
      },
    ],
    faq: [
      {
        q: "Puwede bang gawing totoong pera ang diamonds?",
        a: "Sa pamamagitan lang ng buyback ng club sa nakalathalang rate. Walang conversion ang app mismo, at karaniwang setup ng scam ang alok na palitan sa loob ng app.",
      },
      {
        q: "Kailangan ko ba ng diamonds para makalaro?",
        a: "Hindi. Chips lang ang gamit ng cash game at ng karamihan sa torneo. Opsyonal ang diamonds maliban kung may partikular na event ang union mo na naka-presyo dito.",
      },
      {
        q: "Sulit ba ang VIP card?",
        a: "Sulit kung araw-araw kang naglalaro at gusto mo ang estadistika sa app. Para sa paminsan-minsang laro, bihirang sapat ang pag-alis ng ads para bayaran ang presyo.",
      },
    ],
  },
};

export default articles;
