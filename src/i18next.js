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
