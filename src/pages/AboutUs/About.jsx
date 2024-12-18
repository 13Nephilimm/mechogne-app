import React from "react";
import "./About.css";
import Layout from "../../components/Layout/Layout";
import WhoAreWeSection from "../../sections/About/WhoAreWeSection/WhoAreWeSection";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <Layout>
      <WhoAreWeSection />
      <Footer />
    </Layout>
  );
};

export default About;
