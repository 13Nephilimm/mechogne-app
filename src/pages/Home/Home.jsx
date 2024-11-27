import React from "react";
import "./Home.css";
import Layout from "../../components/Layout/Layout";
import HeroSection from "../../sections/Home/Hero-Section/HeroSection";
import CardsSection from "../../sections/Home/Cards-Section/CardsSection";
import GallerySection from "../../sections/Home/GallerySection/GallerySection";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <CardsSection />
      <GallerySection />
      <Footer />
    </Layout>
  );
};

export default Home;
