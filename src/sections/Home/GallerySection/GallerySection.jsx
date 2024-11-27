import React from "react";
import "./GallerySection.css";
import tempIMG from "../../../assets/tempimg1.jpg";
import { useTranslation } from "react-i18next";

const GallerySection = () => {
  const { t } = useTranslation();

  return (
    <section class="section-iconic">
      <div class="iconic-container">
        <h1 class="gallery-heading">{t("galleryheading1")}</h1>
        <h2 class="gallery-subheading">{t("galleryheading2")}</h2>
      </div>
      <div class="gallery">
        <figure class="gallery-item">
          <img src={tempIMG} alt="Table tennis" />
        </figure>
        <figure class="gallery-item">
          <img src={tempIMG} alt="Table tennis" />
        </figure>
        <figure class="gallery-item">
          <img src={tempIMG} alt="Table tennis" />
        </figure>
        <figure class="gallery-item">
          <img src={tempIMG} alt="Table tennis" />
        </figure>
        <figure class="gallery-item">
          <img src={tempIMG} alt="Table tennis" />
        </figure>
        <figure class="gallery-item">
          <img src={tempIMG} alt="Table tennis" />
        </figure>
        <figure class="gallery-item">
          <img src={tempIMG} alt="Table tennis" />
        </figure>
        <figure class="gallery-item">
          <img src={tempIMG} alt="Table tennis" />
        </figure>
        <figure class="gallery-item">
          <img src={tempIMG} alt="Table tennis" />
        </figure>
        <figure class="gallery-item">
          <img src={tempIMG} alt="Table tennis" />
        </figure>
        <figure class="gallery-item">
          <img src={tempIMG} alt="Table tennis" />
        </figure>
        <figure class="gallery-item">
          <img src={tempIMG} alt="Table tennis" />
        </figure>
      </div>
    </section>
  );
};

export default GallerySection;
