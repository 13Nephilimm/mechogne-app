import React from "react";
import "./CardsSection.css";
import { useTranslation } from "react-i18next";
import Card from "../../../components/Card/Card";

const CardsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="cards-section">
      <h1 className="cards-heading">{t("cardsHeading")}</h1>
      <div className="cards-container">
        <Card heading={t("cardHeading1")} />
        <Card heading={t("cardHeading2")} />
        <Card heading={t("cardHeading3")} />
        <Card heading={t("cardHeading4")} />
      </div>
    </section>
  );
};

export default CardsSection;
