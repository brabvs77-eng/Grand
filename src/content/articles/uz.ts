import type { ArticleCollection } from "../types";

const articles: ArticleCollection = {
  "pppoker-guide-2026": {
    intro:
      "PPPoker — yagona lobbiga ega klassik rum emas, balki yopiq klublar platformasi. Har bir klub o'z o'yinlari, limitlari va qoidalarini belgilaydi, pul esa ichki kassa emas, agent orqali harakatlanadi. Ushbu qo'llanmada shu model qanday ishlashini ko'rib chiqamiz.",
    sections: [
      {
        heading: "Yopiq klub modeli qanday ishlaydi",
        paragraphs: [
          "Ilova faqat kartalar va fishalar bilan ishlaydi. Klub egasi xonani yaratadi, formatlarni tanlaydi, reykni belgilaydi va kimni qabul qilishni hal qiladi — shuning uchun sizga stollarni topish uchun Club ID, agentga biriktirilish uchun esa Referral ID kerak.",
          "Klublar ko'pincha ittifoqlarga birlashadi va turli xonalardan o'yinchilar bir stolda o'tiradi. Grand kabi o'rta klub aynan shu tufayli mahalliy praym-taym bilan cheklanmay, sutka bo'yi o'yin taklif qila oladi.",
        ],
      },
      {
        heading: "Mavjud formatlar va limitlar",
        paragraphs: [
          "Trafikning asosiy qismini No-Limit Hold'em va Pot-Limit Omaha ushlab turadi, PLO4 va PLO5 esa Braziliya va Osiyo ittifoqlarida ayniqsa mashhur. Qolgan jadvalni Short Deck, OFC va All-In or Fold to'ldiradi.",
          "Limitlar bir necha dollarlik mikro stollardan tortib, taklif asosidagi yuqori stollargacha. Turnirlar kundalik arzon bay-inlardan yirik kafolatli seriyalargacha.",
        ],
      },
      {
        heading: "Nega agent ilovadan muhimroq",
        paragraphs: [
          "PPPoker haqiqiy pul operatsiyalarini bajarmaydi, shuning uchun depozit, yechib olish va reyk-bek to'liq agentga bog'liq. Yaxshi agent jadval bo'yicha to'laydi, fisha yuklashdan oldin reyk va reyk-bekni yozma qayd etadi va klub bilan bahsli holatlarni siz uchun hal qiladi.",
          "Formatning asosiy xavfi ham shunda. Agentning obro'si e'lon qilingan eng yuqori reyk-bek foizidan muhimroq.",
        ],
      },
      {
        heading: "Amalda reyk va reyk-bek qanday hisoblanadi",
        paragraphs: [
          "Odatiy sxema — bankning 5% gacha, taxminan 3 katta blaynd chegarasi bilan, lekin har bir klub raqamlarni o'zi sozlaydi. Reyk-bek — agent sizga qaytaradigan qism, odatda haftada bir marta.",
          "Real diapazon oylik hajmga qarab 25% dan 60% gacha. Bundan sezilarli yuqori ko'rsatkichlarni pul kiritishdan oldin tekshirish kerak.",
        ],
      },
    ],
    faq: [
      {
        q: "PPPoker haqiqiy pulga o'ynaladimi?",
        a: "Rasman yo'q. Ilovada o'yin fishalari, haqiqiy pul hisob-kitobi siz va klub agenti o'rtasida bo'ladi.",
      },
      {
        q: "Verifikatsiyadan o'tish kerakmi?",
        a: "Ro'yxatdan o'tish uchun hujjat kerak emas. Ayrim agentlar yirik yechib olishda tekshiruv so'raydi.",
      },
      {
        q: "Kompyuterda o'ynash mumkinmi?",
        a: "Ha, iOS va Android'dan tashqari Windows uchun mijoz bor, u bir nechta stolni qo'llab-quvvatlaydi.",
      },
    ],
  },

  "join-grand-club": {
    intro:
      "Grand Clubga qo'shilish taxminan o'n daqiqa vaqt oladi: ilovani o'rnatish, hisob yaratish, ikkita ID bilan ariza berish va kassaga yozish. Har bir qadamni, shu jumladan ko'p xato qilinadigan joylarni ko'rib chiqamiz.",
    sections: [
      {
        heading: "1-qadam — ilovani o'rnatish",
        paragraphs: [
          "PPPoker ni App Store, Google Play yoki to'g'ridan-to'g'ri APK orqali yuklab oling. Bir nechta stolda o'ynash uchun Windows mijozi ham bor.",
          "Faqat yuklab olish sahifamizda ko'rsatilgan rasmiy manbalardan o'rnating. Forumlardagi o'zgartirilgan yig'malar hisobingizni xavf ostiga qo'yishi mumkin.",
        ],
      },
      {
        heading: "2-qadam — hisob yaratish",
        paragraphs: [
          "Ilovani oching, Register tugmasini bosing, login va parol tanlang. Bu bosqichda hujjat, pochta yoki telefon tasdiqlash talab qilinmaydi.",
          "Uzoq muddat saqlab qoladigan nik tanlang: agent va klub menejerlari barcha to'lov hisobotlarida sizni aynan shu nik orqali topadi.",
        ],
      },
      {
        heading: "3-qadam — ikkita ID bilan ariza",
        paragraphs: [
          "Join Club tugmasini bosing, Grand klubining Club ID sini kiriting, keyin pastdagi maydonga Referral ID ni. Birinchisi ilovani bizning xonaga yo'naltiradi, ikkinchisi hisobingizni kassamizga bog'laydi.",
          "Referral ID ni tashlab ketish — eng ko'p uchraydigan xato. Usiz fishalarni yuklaydigan odam bo'lmaydi, reyk-bek hisoblanmaydi va bahsli holatda qo'llab-quvvatlash yordam bera olmaydi.",
        ],
      },
      {
        heading: "4-qadam — hisobni to'ldirish",
        paragraphs: [
          "Telegram yoki WhatsApp orqali kassaga yozing, nik va summani ko'rsating. Pul harakatlanishidan oldin reyk tuzilmasi va reyk-bek foizingizni tasdiqlaymiz.",
          "Fishalar odatda 15 daqiqada balansda paydo bo'ladi. Birinchi sessiyada kichik test depozit qiling — bankroll kiritishdan oldin to'liq kirim-chiqim siklini ko'rib olasiz.",
        ],
      },
    ],
    faq: [
      {
        q: "Ariza qancha vaqtda tasdiqlanadi?",
        a: "Odatda ish vaqtida bir necha daqiqada.",
      },
      {
        q: "Bir nechta klubda bo'lish mumkinmi?",
        a: "Ha, bitta PPPoker hisobi bir vaqtda bir nechta klubga a'zo bo'lishi mumkin.",
      },
      {
        q: "Minimal birinchi depozit qancha?",
        a: "$10 ekvivalentidan, to'lov usuliga qarab.",
      },
    ],
  },

  "deposit-methods": {
    intro:
      "Grand Clubda agent kassasi ishlaydi: depozitlar saytdagi karta formasi orqali emas, mahalliy to'lov kanallari orqali o'tadi. Bu dastlab g'ayrioddiy tuyuladi, lekin aynan shu tufayli real, peso, rubl va so'mni tez qabul qilish mumkin.",
    sections: [
      {
        heading: "Mintaqalar bo'yicha usullar",
        paragraphs: [
          "Har bir bozor uchun alohida kanal saqlaymiz, shunda ortiqcha konvertatsiyaga majbur bo'lmaysiz.",
        ],
        bullets: [
          "Braziliya — Pix, darhol, R$50 dan",
          "Filippin — GCash va Maya, 5–30 daqiqa, ₱500 dan",
          "Rossiya va MDH — SBP va kartalar, 5–15 daqiqa, ₽1 000 dan",
          "O'zbekiston — Uzcard, Humo va Payme, 10–30 daqiqa, $10 dan",
          "Butun dunyo — USDT TRC20, 5–15 daqiqa, $10 dan",
        ],
      },
      {
        heading: "Depozit qanday o'tadi",
        paragraphs: [
          "Kassaga PPPoker nikingizni, summani va qulay usulni yozasiz. Kassa rekvizitlar va odatda 15 daqiqalik to'lov oynasini yuboradi — shu vaqtga kurs qotiriladi.",
          "To'lov va tasdiqdan so'ng fishalar klub balansiga tushadi va sizga xabar keladi. Chekni fishalar tushguncha saqlang.",
        ],
      },
      {
        heading: "Komissiya, kurs va limitlar",
        paragraphs: [
          "Grand mahalliy usullar ustiga komissiya qo'shmaydi: qaysi kurs aytilgan bo'lsa, shu bo'yicha hisoblashamiz. Yagona tashqi xarajat — kriptoda tarmoq komissiyasi, uni blokcheyn oladi, biz emas.",
          "Minimumlar ataylab past — yangi o'yinchi test tranzaksiya qila olsin. Bir martalik maksimal depozit VIP daraja bilan birga o'sadi.",
        ],
      },
      {
        heading: "Xavfsizlik qoidalari",
        paragraphs: [
          "Faqat joriy suhbatda kassa bergan rekvizitlarga o'tkazing, boshqa o'yinchi yuborgan manzilga hech qachon emas. Soxta hisoblar — klub pokerida eng ko'p uchraydigan hujum.",
          "Birinchi depozitdan oldin reyk va reyk-bek shartlarini yozma qayd eting. Jiddiy agent bu raqamlarni eslatmasdan o'zi aytadi.",
        ],
      },
    ],
    faq: [
      {
        q: "O'z valyutamda to'ldirsam bo'ladimi?",
        a: "Ha, sanab o'tilgan oltita mintaqada. Qolgan hollarda USDT eng tez yo'l.",
      },
      {
        q: "Fishalar qanchada keladi?",
        a: "Odatda 15 daqiqa ichida. Bank o'tkazmalari 24 soatgacha.",
      },
      {
        q: "Depozit uchun komissiya bormi?",
        a: "Grand tomonidan yo'q. Kriptoda odatiy tarmoq komissiyasi amal qiladi.",
      },
    ],
  },

  "rakeback-explained": {
    intro:
      "Reyk-bek — bu sizga qaytariladigan komissiya qismi. Klub pokerida u marketing qo'shimchasi emas, balki jiddiy o'yinchining plyusda qolishining asosiy yo'li, shuning uchun qanday hisoblanishini bilish muhim.",
    sections: [
      {
        heading: "Reyk nima",
        paragraphs: [
          "Reyk — har bir bankdan olinadigan komissiya, odatda 5% gacha, taxminan 3 katta blaynd chegarasi bilan. Flopgacha komissiya olinmaydi, turnirlarda esa bay-in ustiga qo'shimcha to'lov ishlaydi.",
          "Bir oylik barqaror o'yinda umumiy reyk ko'pchilik kutganidan ancha katta chiqadi — shuning uchun qaytarish foizi juda muhim.",
        ],
      },
      {
        heading: "Grandda reyk-bek qanday hisoblanadi",
        paragraphs: [
          "Biz contributed usulidan foydalanamiz: sizning reyk ulushingiz siz haqiqatan pul qo'ygan banklar bo'yicha hisoblanadi. Klub haftalik yakunlarni yuboradi, ularga sizning foizingiz qo'llaniladi.",
          "Asos — barcha a'zolar uchun 45%. VIP darajalar oylik reyk o'sishi bilan uni 50%, 55%, 58% va 60% gacha ko'taradi, qayta hisoblash har oyning 1-sanasida.",
        ],
      },
      {
        heading: "Raqamlar bilan misol",
        paragraphs: [
          "Aytaylik, oyiga $1 200 reyk yig'dingiz. Gold darajasida bu 55%, ya'ni $660 qaytadi, to'lovlar esa oy oxirida emas, har hafta.",
          "Xuddi shu hajm 30% lik bitimda $360 berardi. Oyiga $300 farq odatda o'rtacha o'yinchining maydon ustidagi ustunligidan kattaroq.",
        ],
      },
      {
        heading: "To'lovlar qachon keladi",
        paragraphs: [
          "Klub statistikasi haftada bir yangilanadi va biz reyk-bekni shu sikl bo'yicha to'laymiz, oyda bir emas. To'lov siz pul yechadigan usul bilan boradi.",
          "Qo'llar va reyk bo'yicha tafsilotni istalgan vaqtda so'rashingiz mumkin. Raqamlar noto'g'ri ko'rinsa, masalani klubga eskalatsiya qilamiz, o'yinchiga yuklamaymiz.",
        ],
      },
    ],
    faq: [
      {
        q: "Turnir to'lovlari hisobga olinadimi?",
        a: "Ha, turnir to'lovi oylik reyk hajmiga kiradi.",
      },
      {
        q: "Sokin oydan keyin daraja yo'qoladimi?",
        a: "Darajalar har oy qayta hisoblanadi, lekin hajm tushgach statusni yana bir oy saqlaymiz.",
      },
      {
        q: "60% haqiqiy maksimummi?",
        a: "Bu bizning standart yuqori stavkamiz. Diamond darajasida katta hajm bilan individual bitim mumkin.",
      },
    ],
  },

  "withdraw-guide": {
    intro:
      "Klub aynan o'z yechib olishi qadar qimmatli. Grandda to'lovlar qanday ishlashini, qanday muddatlar real ekanini va har bir yechib olish kechikishsiz o'tishi uchun nima qilish kerakligini ko'rib chiqamiz.",
    sections: [
      {
        heading: "So'rov berish",
        paragraphs: [
          "Kassaga nik, summa va olish usulini yozing. Minimum — $20 ekvivalenti, bitta so'rov bo'yicha maksimum VIP darajaga bog'liq.",
          "Avval fishalar klub balansidan yechiladi, keyin o'tkazma yuboriladi. Yuborilgach tranzaksiya rekvizitlari bilan tasdiq olasiz.",
        ],
      },
      {
        heading: "Real muddatlar",
        paragraphs: [
          "Ko'pchilik so'rovlar ish vaqtida 30 daqiqada, tunda esa taxminan ikki soatda bajariladi. Eng tez kanallar — Pix, GCash va USDT.",
          "Bank o'tkazmalari qabul qiluvchi bankka bog'liq va to'liq ish kunini olishi mumkin. To'lov sekin bo'ladigan bo'lsa, tasdiqdan oldin ogohlantiramiz.",
        ],
      },
      {
        heading: "Yirik summalarda tekshiruv",
        paragraphs: [
          "$500 dan yuqori birinchi yechib olishda yengil verifikatsiya o'tkazamiz, odatda hujjat surati. Bu regulyator KYC emas, balki balansni hisob o'g'irlanishidan himoya qilish.",
          "Tekshiruvdan so'ng xuddi shu usul bilan keyingi to'lovlar uni takrorlamasdan o'tadi.",
        ],
      },
      {
        heading: "Kechikishlardan qanday qochish",
        paragraphs: [
          "O'z nomingizga rasmiylashtirilgan rekvizitlarga yeching va kirim-chiqim uchun bir xil usulni saqlang. Hisoblar mos kelmasligi — to'lov to'xtashining eng ko'p sababi.",
          "Yirik yechib olish rejalashtirilsa, kassani bir necha soat oldin ogohlantiring, shunda kerakli kanalda likvidlik tayyor bo'ladi.",
        ],
      },
    ],
    faq: [
      {
        q: "Yechib olish uchun komissiya bormi?",
        a: "Grand tomonidan yo'q. Kriptoda blokcheyn tarmoq komissiyasi amal qiladi.",
      },
      {
        q: "To'ldirgan usuldan boshqasiga yechsam bo'ladimi?",
        a: "Odatda ha, lekin yangi usul bilan birinchi to'lov tekshiruv talab qilishi mumkin.",
      },
      {
        q: "Necha marta yechib olish mumkin?",
        a: "So'rovlar soni cheklanmagan.",
      },
    ],
  },

  "choose-reliable-agent": {
    intro:
      "Klub pokerida pulni agent ushlab turadi, shuning uchun uni tanlash klub tanlashdan muhimroq. Quyida istalgan joyga — shu jumladan bizga — birinchi depozitdan oldin o'tish kerak bo'lgan tekshiruvlar.",
    sections: [
      {
        heading: "Ommaviy tarixni tekshiring",
        paragraphs: [
          "Faqat Telegram kanali emas, mustaqil poker portallari va forumlarida tarixi bor agentni qidiring. O'z platformalaridan tashqaridagi obro'ni soxtalashtirish ancha qiyin.",
          "Klub o'yinchilaridan bevosita so'rang. Uzoq ishlayotgan klubda bir necha to'lov siklini ko'rgan regulyarlar bor va ular kassa ishonchli yoki yo'qligini ochiq aytadi.",
        ],
      },
      {
        heading: "Shartlarni yozma qayd eting",
        paragraphs: [
          "Fisha yuklashdan oldin sizda reyk tuzilmasi, chegara, reyk-bek foizi va to'lov jadvali qaytib ko'rish mumkin bo'lgan xabarda bo'lishi kerak.",
          "Raqamlarni yozma qayd etishdan qochadigan yoki depozitdan keyin ularni o'zgartiradigan agent o'zi haqida hamma narsani aytib bo'ldi.",
        ],
      },
      {
        heading: "Haddan tashqari takliflar — ogohlantirish",
        paragraphs: [
          "60% dan sezilarli yuqori reyk-bek odatda doimiy shart sifatida ko'rsatilgan qisqa aksiya yoki to'lovlar yangi depozitlardan moliyalanayotganining belgisi.",
          "Xuddi shu narsa kafolatlangan vinreyt, otborsiz bonuslar va darhol katta summa kiritishga bosimga ham tegishli.",
        ],
      },
      {
        heading: "Kichikdan boshlang va to'liq siklni sinang",
        paragraphs: [
          "Minimal depozit qiling, qisqa sessiya o'ynang, yechib olishga buyurtma bering va bitta reyk-bek to'lovini oling. Summalarni faqat pul ikki tomonga harakatlanganini ko'rgandan keyin oshiring.",
          "Bu ozgina vaqt turadi, boshqa hech narsa emas, lekin litsenziyasiz formatda eng samarali himoya shu.",
        ],
      },
    ],
    faq: [
      {
        q: "Birinchi depozit qanday bo'lishi kerak?",
        a: "To'liq yechib olishni o'tkazmaguningizcha minimal, odatda $10–50.",
      },
      {
        q: "Pulni kim ushlab turadi — klubmi yoki agentmi?",
        a: "Agent. Klub o'yinni tashkil qiladi, agent klub va siz bilan hisob-kitob qiladi.",
      },
      {
        q: "Agent javob bermay qolsa nima qilish kerak?",
        a: "Klub yoki ittifoq menejmentiga eskalatsiya qilish. Shuning uchun ham boshqaruvi ma'lum klubni tanlash muhim.",
      },
    ],
  },
};

export default articles;
