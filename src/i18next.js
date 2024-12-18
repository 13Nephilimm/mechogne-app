import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // HEADER
      home: "Home",
      about: "About Us",
      contact: "Contact Us",
      leaderboard: "Leaderboard",
      players: "Players",

      // HERO SECTION
      heroHeading: "Serve Up the Passion,",
      heroHeading2: "Smash the Competition!",
      learnMore: "Learn More",

      // CARDS SECTION
      cardsHeading: "Why Mechogne?",
      cardHeading1: "Amateur Leagues",
      cardHeading2: "Amateur Championships",
      cardHeading3: "Friendly Environment",
      cardHeading4: "Cheapest Membership",

      // GALLERY SECTION
      galleryheading1: "Once You Try,",
      galleryheading2: "You Can't Go Back",

      // WHO ARE WE SECTION
      whoAreWeHeading: "Who Are We?",
      whoAreWeText: `'Mechogne' is run by two people. We both started playing table tennis at the same time and soon we had the desire 
        to test our skills with different players. Then we soon had the idea to create our own group where people with 
        common interests could come together. Soon we wanted to organize amateur leagues and championships, and today we 
        are the ones who take care of a pleasant environment and good quality championships. Are you interested 
        in ping-pong? Then become Mechogne, join us and become part of a team that never afraid of challenges!`,
    },
  },
  ge: {
    translation: {
      // HEADER
      home: "მთავარი",
      about: "ჩვენ შესახებ",
      contact: "კონტაქტი",
      leaderboard: "ლიდერბორდი",
      players: "მოთამაშეები",

      // HERO SECTION
      heroHeading: "ბურთი ააგდე,",
      heroHeading2: "თამაში დაიწყე!",
      learnMore: "გაიგე მეტი",

      // CARDS SECTION
      cardsHeading: "რატომ მეჩოგნე?",
      cardHeading1: "სამოყვარულო ლიგები",
      cardHeading2: "სამოყვარულო ტურნირები",
      cardHeading3: "მეგობრული გარემო",
      cardHeading4: "იაფი საწევრო",

      // GALLERY SECTION
      galleryheading1: "ერთხელ თუ სცადე,",
      galleryheading2: "ვეღარ შეეშვები",

      // WHO ARE WE SECTION
      whoAreWeHeading: "ვინ ვართ ჩვენ?",
      whoAreWeText: `'მეჩოგნე'-ს სათავეში ორი ადამიანი უდგას. მაგიდის ჩოგბურთის თამაში ორივემ ერთდროულად დავიწყეთ და მალევე 
        გაგვიჩნდა ის სურვილი, რომ საკუთარი ძალები სხვადსხვა მოთამაშეებთან გამოგვეცადა. მერე მალევე გაგვიჩნდა იდეა, 
        რომ შეგვექმნა საკუთარი ჯგუფი სადაც საერთო ინტერესის მქონე ხალხი გავერთიანებოდით. მალევე მოგვინდა სამოყვარულო 
        ლიგებისა და ჩემპიონატების მოწყობა და დღეს სწორედ ჩვენ ვიზრუნებთ სასიამოვნო გარემოსა და კარგი ხარისხის 
        ჩემპიონატებზე. დაინტერესებული ხარ პინგ-პონგით? მაშინ გახდი მეჩოგნე, შემოგვიერთდი და გახდი იმ გუნდის ნაწილი, 
        რომელიც გამოწვევებს არასოდეს გაურბის!`,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
