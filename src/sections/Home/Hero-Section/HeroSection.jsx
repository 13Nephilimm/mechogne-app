import React from "react";
import "./HeroSection.css";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <h1 className="hero-heading">
        {t("heroHeading")} <br /> <span>{t("heroHeading2")}</span>
      </h1>
      <a href="#" className="hero-link main-btn">
        {t("learnMore")} &darr;
      </a>
    </section>
  );
};

export default HeroSection;
