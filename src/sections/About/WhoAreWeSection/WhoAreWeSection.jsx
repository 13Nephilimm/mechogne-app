import React from "react";
import "./WhoAreWeSection.css";
import { useTranslation } from "react-i18next";
import tempIMG2 from "../../../assets/tempimg2.jpg";

const WhoAreWeSection = () => {
  const { t } = useTranslation();

  return (
    <section className="who-are-we-section">
      <h1 className="who-we-are-heading">{t("whoAreWeHeading")}</h1>
      <div className="who-are-we-container">
        <div className="wwa-text-box">
          <p className="wwa-text">{t("whoAreWeText")}</p>
        </div>
        <div className="wwa-img-box">
          <img className="wwa-image" src={tempIMG2} alt="who-are-we" />
        </div>
      </div>
    </section>
  );
};

export default WhoAreWeSection;
