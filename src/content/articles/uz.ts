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

  "how-to-download-pppoker": {
    intro:
      "PPPoker iOS, Android va Windows'da ishlaydi, lekin har birida o'rnatish yo'li boshqacha va ilova hamma mintaqaviy do'konlarda ham mavjud emas. Bu qo'llanmada uchala yo'l va do'kondagi qidiruv hech narsa topmaganda nima qilish kerakligi ko'rib chiqiladi.",
    sections: [
      {
        heading: "iPhone va iPad",
        paragraphs: [
          "App Store'da PPPoker'ni qidiring va istalgan ilova kabi o'rnating. Nashriyotchi — PPPoker Ltd, yuklab olish hajmi taxminan 200 MB, shuning uchun trafik cheklangan bo'lsa Wi-Fi'dan foydalaning.",
          "Agar ilova qidiruvda chiqmasa, sizning do'kon mintaqangiz uni tarqatmaydi. Apple ID mintaqasini almashtirish mumkin, lekin bu mavjud xaridlar va obunalarni uzib qo'yadi, shuning uchun cheklangan mintaqalardagi ko'pchilik o'yinchilar Android qurilmasini tanlaydi.",
        ],
      },
      {
        heading: "Android",
        paragraphs: [
          "Ilova katalogda bor joylarda Google Play eng oddiy yo'l. Yo'q joylarda PPPoker o'z saytida imzolangan APK chiqaradi, uni o'rnatish uchun Sozlamalar, Ilovalar, Maxsus ruxsat bo'limida brauzerdan o'rnatishga ruxsat berish kerak.",
          "APK'ni faqat rasmiy domendan yoki bizning yuklab olish sahifamizdagi havoladan oling. Forumlar va Telegram kanallarida tarqaladigan qayta yig'ilgan versiyalar ko'pincha parol o'g'irlovchi kod bilan keladi.",
        ],
        bullets: [
          "O'rnatishdan oldin paket nomi com.pppoker.android ekanini tekshiring",
          "Play Protect'ni yoqilgan holda qoldiring — u tashqi ilovalarni ham tekshiradi",
          "APK yangilanishlari qo'lda bo'ladi, oyiga bir marta tekshirib turing",
        ],
      },
      {
        heading: "Windows",
        paragraphs: [
          "Windows mijozi PPPoker saytidan alohida yuklanadi va agar bir vaqtning o'zida ikkitadan ko'p stolda o'ynamoqchi bo'lsangiz, to'g'ri tanlov shu. U oynalar o'lchamini o'zgartirish va stollarni joylashtirishga imkon beradi, telefon ilovasi buni qila olmaydi.",
          "Desktop mijozi va mobil ilova bitta akkauntdan foydalanadi, shuning uchun sessiyani telefonda boshlab, kompyuterda hech qanday ko'chirishsiz davom ettirish mumkin.",
        ],
      },
      {
        heading: "Birinchi ishga tushirish",
        paragraphs: [
          "Login va parol bilan ro'yxatdan o'ting — pochta yoki telefonni tasdiqlash shart emas. Keyin bizning Club ID orqali Grand Club'ga ariza yuboring va Referral ID'ni kiriting, shunda akkauntingiz reykbek to'laydigan agentga bog'lanadi.",
          "Ro'yxatdan o'tishda Referral ID kiritish — keyinchalik tuzatish noqulay bo'lgan yagona qadam, shuning uchun buni birinchi stolga o'tirishdan oldin bajaring.",
        ],
      },
    ],
    faq: [
      {
        q: "APK xavfsizmi?",
        a: "PPPoker rasmiy saytida chop etilgani — ha. Uchinchi tomon oynalaridagi versiyalar — yo'q, va aynan ular klub akkauntlari o'g'irlanishining eng keng tarqalgan sababi.",
      },
      {
        q: "Mac'da o'ynash mumkinmi?",
        a: "Mac uchun alohida mijoz yo'q. macOS foydalanuvchilari iPhone'dagi iOS ilovasida o'ynaydi yoki Windows mijozini Parallels yoxud CrossOver orqali ishga tushiradi.",
      },
      {
        q: "Bitta sessiya qancha trafik sarflaydi?",
        a: "O'yin soatiga taxminan 20-40 MB. Asosiy hajm — dastlabki yuklab olishda, o'yinlarning o'zida emas.",
      },
    ],
  },

  "club-id-explained": {
    intro:
      "Har bir PPPoker o'yinchisi ikkita raqam bilan ishlaydi va ularni chalkashtirish — yangi o'yinchi reykbeksiz qolishining eng keng tarqalgan sababi. Club ID sizni o'yinlarga kiritadi; Referral ID esa kim to'lashini belgilaydi.",
    sections: [
      {
        heading: "Club ID nima uchun kerak",
        paragraphs: [
          "Club ID — bu ilova ichidagi klubning ochiq manzili. Uni Klub, Klubga qo'shilish bo'limida kiritasiz va bu o'sha klub menejerlariga ariza yuboradi. Sizning pulingizga aloqador hech narsa unga bog'lanmagan.",
          "PPPoker'da umumiy lobbi yo'q, shuning uchun aniq bir xonani topishning yagona yo'li — Club ID. Klublar uni ochiq e'lon qiladi, shuning uchun u har bir jiddiy klub saytida, jumladan bizda ham bor.",
        ],
      },
      {
        heading: "Referral ID nima uchun kerak",
        paragraphs: [
          "Referral ID akkauntingiz qaysi agentga tegishli ekanini belgilaydi. Aynan shu maydon depozit va yechib olishlaringizni kim qayta ishlashini hamda hajmingizga qaysi reykbek jadvali qo'llanishini hal qiladi.",
          "Bitta agent bir nechta klubdagi o'yinchilarga xizmat ko'rsatishi, bitta klubda esa ko'p agentning o'yinchilari bo'lishi mumkin. Shuning uchun ikkita ID ajratilgan va to'g'ri klubda bo'lish avtomatik ravishda to'g'ri agentda bo'lishni anglatmaydi.",
        ],
      },
      {
        heading: "Nega reykbek uchun ikkalasi ham muhim",
        paragraphs: [
          "Reykbek ma'lum bir Referral ID ostidagi o'yinchilar yaratgan reykdan hisoblanadi. Agar maydon bo'sh qolgan bo'lsa, reykingiz baribir klubga tushadi, lekin hech bir agent sizga ulush qarzdor sifatida qayd etilmaydi.",
          "Bu xato ham, firib ham emas — hisob shunday ishlaydi. Bundan kelib chiqib, agent bog'lanish paydo bo'lishidan oldin o'ynalgan hajmni orqaga qaytarib hisoblab bera olmaydi.",
        ],
      },
      {
        heading: "Yo'q yoki noto'g'ri referralni tuzatish",
        paragraphs: [
          "Agar Referral ID'siz ro'yxatdan o'tgan bo'lsangiz, o'yinni boshlashdan oldin kassaga yozing. Yangi akkauntda qayta biriktirish odatda mumkin, lekin buni klub menejeri bajarishi kerak va bir kun ketishi mumkin.",
          "Agar boshqa agent ostida sezilarli hajm o'ynab bo'lgan bo'lsangiz, o'tkazish odatda o'sha agentning roziligini talab qiladi. Ro'yxatdan o'tishda bu masala o'ttiz soniyada hal bo'ladi, keyinroq esa bir hafta ketishi mumkin.",
        ],
        bullets: [
          "Club ID — qayerda o'ynaysiz",
          "Referral ID — kim to'laydi",
          "Ikkalasi ham ilovada kiritiladi, hech qanday saytda emas",
        ],
      },
    ],
    faq: [
      {
        q: "Bir vaqtda ikkita klubda bo'lish mumkinmi?",
        a: "Ha. PPPoker bitta akkaunt bilan bir nechta klubga qo'shilishga ruxsat beradi, Referral ID esa alohida klubga emas, akkauntingizga bog'lanadi.",
      },
      {
        q: "Referral ID'mni boshqa kimdir ko'radimi?",
        a: "Faqat agentingiz va klub menejerlari. Stolda u ko'rinmaydi va boshqa o'yinchilar uni topa olmaydi.",
      },
      {
        q: "Klub arizamni rad etsa-chi?",
        a: "Kassaga PPPoker taxallusingizni yozing. Ma'lum referralsiz arizalar ba'zan butunlay rad etilmay, tekshiruvga qoldiriladi.",
      },
    ],
  },

  "welcome-bonus-terms": {
    intro:
      "Grand'ning xush kelibsiz bonusi birinchi depozitingizni 100% ga oshiradi. Sarlavha oddiy, lekin o'qishga arziydigan qismi — bonus qanday ochilishi, chunki u naqd pul sifatida emas, o'ynagan sari yechib olinadigan balansga aylanadi.",
    sections: [
      {
        heading: "Ikki barobar qanday ishlaydi",
        paragraphs: [
          "Minimaldan boshlab istalgan summani kiriting va bonuslar sahifasida e'lon qilingan shiftgacha bo'lgan o'sha miqdor bonus sifatida qo'shiladi. 200 lik depozit 200 fishka va 200 kutilayotgan bonusga aylanadi.",
          "Depozitingiz darhol mavjud bo'ladi va istalgan vaqtda yechib olinadi. Faqat bonus qismida ochilish sharti bor.",
        ],
      },
      {
        heading: "Bonus qanday ochiladi",
        paragraphs: [
          "Bonus reyk yaratgan sari qismlarga bo'linib ochiladi, ya'ni uni oldindan sovg'a emas, o'yinning o'zi to'laydi. Ochilgan har bir qism haftalik hisob-kitobda reykbek bilan birga yechib olinadigan balansga qo'shiladi.",
          "Yutish shart emas: yutqazgan sessiyalar ham reyk yaratadi, shuning uchun bonus natijadan qat'i nazar ochilishda davom etadi. Uni to'xtatadigan yagona narsa — o'ynamaslik.",
        ],
      },
      {
        heading: "Ochilish muddati",
        paragraphs: [
          "Ochilish davri depozitdan boshlab belgilangan kunlar davomida amal qiladi. Muddat oxirida bloklangan holda qolgan qism kuyadi, shuning uchun depozit hajmini haqiqatda o'ynashni rejalashtirgan hajmingizga moslash ma'qul.",
          "Haftasiga bir necha soat o'ynasangiz, to'liq ochiladigan kichik depozit yarmi kuyib ketadigan kattasidan foydaliroq. Kassa pul yuborishdan oldin har bir summa uchun kerakli reykni aytadi.",
        ],
        bullets: [
          "Depozit boshidanoq yechib olinadi",
          "Bonus reyk evaziga ochiladi, hisob-kitob haftalik",
          "Ochilmagan bonus muddat oxirida kuyadi",
        ],
      },
      {
        heading: "Bonusni nima bekor qiladi",
        paragraphs: [
          "Akkauntlar o'rtasida fishka o'tkazish, sherik bilan kelishib o'tirish va har qanday til biriktirish bonusni, odatda esa akkauntni ham bekor qiladi. Klublar qo'l tarixini tekshiradi va bunday naqshlar ma'lumotlarda ko'rinadi.",
          "Muddat tugashidan oldin yechib olish hali bloklangan qismni bekor qiladi. Qisman yechib olish muammo emas — faqat ochilmagan qoldiq ta'sirlanadi.",
        ],
      },
    ],
    faq: [
      {
        q: "Uni reykbek bilan birga olish mumkinmi?",
        a: "Ha. Reykbek odatdagi darajangiz bo'yicha ketadi, bonus esa ustiga ochiladi. Ikkalasi bitta haftalik to'lovda keladi.",
      },
      {
        q: "Minimal depozit bormi?",
        a: "Bor va u usulga qarab farq qiladi. Mahalliy usullarda chegara USDT'ga qaraganda pastroq. Kassa pul yuborishdan oldin joriy raqamlarni tasdiqlaydi.",
      },
      {
        q: "Uni ikki marta olsa bo'ladimi?",
        a: "Xush kelibsiz bonusi har bir o'yinchiga bir marta beriladi. Muntazam varianti — reload bonuslar, ular pastroq foizda ishlaydi.",
      },
    ],
  },

  "vip-program-guide": {
    intro:
      "Grand'ning VIP dasturida beshta daraja bor va ular orasida sizni faqat oylik reyk siljitadi. Sotib olinadigan ballar, obuna yoki qo'lda ariza yo'q — daraja har oy hajmingizdan qayta hisoblanadi.",
    sections: [
      {
        heading: "Beshta daraja",
        paragraphs: [
          "Bronze hajm talabisiz 45% reykbekdan boshlanadi. Silver oyiga 200 reykdan boshlanadi va 50% to'laydi. Gold 1 000 dan boshlanib 55% to'laydi. Platinum 3 000 dan boshlanib 58%, Diamond esa 10 000 dan boshlanib 60% to'laydi.",
          "Chegaralar kiritilgan yoki yutilgan pulda emas, yaratilgan reykda o'lchanadi. Yuqori hajmli zarar ko'rgan oy past hajmli yutuqli oyga qaraganda balandroq darajaga yetadi.",
        ],
        bullets: [
          "Bronze — minimumsiz, 45%",
          "Silver — 200 reyk, 50%",
          "Gold — 1 000 reyk, 55%",
          "Platinum — 3 000 reyk, 58%",
          "Diamond — 10 000 reyk, 60%",
        ],
      },
      {
        heading: "Reyk darajaga qanday hisoblanadi",
        paragraphs: [
          "Kesh o'yin reyki contributed usulida hisoblanadi: bankdan ulush faqat siz unga pul qo'shgan taqdirda olinadi, preflopda tashlab yuborish esa reyk summasiga hech narsa qo'shmaydi.",
          "Turnir to'lovlari ham nominal qiymatda hisobga olinadi. Klubdagi barcha stol va formatlardan yig'ilgan reyk bitta oylik raqamga qo'shiladi, shuning uchun vaqtni kesh va MTT orasida bo'lish taraqqiyotingizni bo'lmaydi.",
        ],
      },
      {
        heading: "Har bir daraja foizdan tashqari nima beradi",
        paragraphs: [
          "Yuqori darajalar to'lov siklini qisqartiradi va yechib olish limitlarini oshiradi — muntazam o'ynaganda bu qo'shimcha foiz punktlaridan muhimroq. Gold va undan yuqorida kassa arizalarni birinchi navbatda ko'radi.",
          "Platinum va Diamond bunga frirollarga kirish, liderbordlarda boshlang'ich o'rin va umumiy navbat o'rniga shaxsiy menejer qo'shadi. Diamond o'yinchilari bilan klubdagi limit va format o'zgarishlari kelishiladi.",
        ],
      },
      {
        heading: "Darajani saqlab qolish",
        paragraphs: [
          "Darajalar har oy qayta ko'rib chiqiladi va hajmning pasayishi sizni Bronze'ga tashlamay, bir pog'ona pastga tushiradi. Ya'ni tinch o'tgan oy bir necha foiz punktiga tushadi, butun maqomingizga emas.",
          "Reykbek sahifasida limit va soatlaringizni kutilayotgan oylik reykka aylantiradigan kalkulyator bor — bu grafigingizga qaysi daraja real ekanini bilishning eng tez yo'li.",
        ],
      },
    ],
    faq: [
      {
        q: "Reykbek qachon to'lanadi?",
        a: "Haftasiga bir marta, belgilangan kunda, oldingi hafta yaratilgan reyk uchun. Oy davomidagi daraja foizi har bir shunday to'lovga qo'llanadi.",
      },
      {
        q: "Bir oy o'ynamasam daraja nolga tushadimi?",
        a: "Bir pog'ona pastga tushasiz, eng pastga emas. Oldingi hajmga qaytsangiz, daraja keyingi oyda tiklanadi.",
      },
      {
        q: "Turnirlar hisobga olinadimi?",
        a: "Ha. Turnir to'lovlari kesh reyki bilan birga nominal qiymatda oylik reykka qo'shiladi.",
      },
    ],
  },

  "diamonds-guide": {
    intro:
      "Olmoslar — PPPoker'ning ichki valyutasi. Ular fishka emas va ular bilan o'ynab bo'lmaydi, lekin o'yin atrofidagi narsalarni to'laydi: ba'zi klublarda turnir kirishlari, shuningdek klub yaratish, sovg'alar va VIP karta. Narxlar va ortiqcha to'lamaslik yo'llari quyida.",
    sections: [
      {
        heading: "Olmoslar aslida nimaga kerak",
        paragraphs: [
          "Olmoslarga VIP karta olinadi — u reklamani olib tashlaydi hamda ilova ichidagi statistika va profil imkoniyatlarini ochadi. Ular klub yaratish to'lovini ham qoplaydi, ayrim ittifoqlarda esa turnir bay-inlari va yon tadbirlarda ishlatiladi.",
          "Ilova ularni fishkaga aylantirmaydi va hech bir jiddiy agent buning aksini aytmaydi. PPPoker ichida olmosni fishkaga to'g'ridan-to'g'ri almashtirish kursini taklif qilayotgan odam platforma qo'llab-quvvatlamaydigan narsani tasvirlayapti.",
        ],
      },
      {
        heading: "Paketlar va narxlar",
        paragraphs: [
          "Standart paketlar: 780 olmos 12,99 ga, 3 900 ta 59,99 ga, 7 800 ta 109,99 ga va 48 000 ta 649 ga. Kattaroq paketlarda bitta olmos narxi arzonroq — butun chegirma tuzilmasi shunga asoslangan.",
          "Grand kassasi orqali xarid uchta katta paketga qo'shimcha chegirma beradi — 3 900 ga 5%, 7 800 ga 10% va klub egasi paketiga 15% — chunki xarid ilova do'koni emas, klub orqali o'tadi.",
        ],
        bullets: [
          "780 — 12,99, chegirmasiz",
          "3 900 — 59,99, kassa orqali 5% arzon",
          "7 800 — 109,99, kassa orqali 10% arzon",
          "48 000 — 649, kassa orqali 15% arzon",
        ],
      },
      {
        heading: "Do'kon o'rniga kassa orqali xarid qilish",
        paragraphs: [
          "Ilova ichidagi xarid Apple yoki Google orqali o'tadi va ularning platforma komissiyasini o'z ichiga oladi — shuning uchun o'sha paket u yerda qimmatroq. Kassa orqali buyurtma siz depozit uchun allaqachon ishlatadigan usullar, jumladan USDT va mahalliy o'tkazmalar bilan to'lanadi.",
          "Yetkazish qo'lda amalga oshiriladi va ish vaqtida odatda bir soat ichida keladi. Siz paket hajmi va PPPoker ID'ingizni yuborasiz, olmoslar akkauntga tushadi.",
        ],
      },
      {
        heading: "Olmoslarni qaytarib sotish",
        paragraphs: [
          "Grand ishlatilmagan olmoslarni e'lon qilingan kurs bo'yicha qaytarib sotib oladi — bu klub egasi paketini olib, endi klub yuritmaydiganlarga qo'l keladi. Qaytarib sotib olish kursi sotuv kursidan past; aynan shu farq xizmatni qoplaydi.",
          "Qaytarib sotib olish summasi fishka balansingizga yoki xohishingizga ko'ra haftalik hisob-kitob bilan to'lanadi. Minimal miqdor bor, shuning uchun kichik qoldiqlar uchun buni qilish arzimaydi.",
        ],
      },
    ],
    faq: [
      {
        q: "Olmoslarni haqiqiy pulga aylantirsa bo'ladimi?",
        a: "Faqat klubning e'lon qilingan kurs bo'yicha qaytarib sotib olishi orqali. Ilovaning o'zida konvertatsiya yo'q, «o'yin ichida almashtirish» takliflari esa keng tarqalgan firib sxemasi.",
      },
      {
        q: "O'ynash uchun olmos kerakmi?",
        a: "Yo'q. Kesh o'yinlar va turnirlarning aksariyati faqat fishkada boradi. Ittifoqingiz alohida tadbirlarni olmosda narxlamasa, ular ixtiyoriy.",
      },
      {
        q: "VIP karta olishga arziydimi?",
        a: "Har kuni o'ynasangiz va ilova ichidagi statistika kerak bo'lsa, o'zini oqlaydi. Vaqti-vaqti bilan o'ynaganda faqat reklamani o'chirish kamdan-kam narxini oqlaydi.",
      },
    ],
  },
};

export default articles;
