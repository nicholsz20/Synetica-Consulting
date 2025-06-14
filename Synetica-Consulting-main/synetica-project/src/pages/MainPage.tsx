import { useEffect } from "react";
import { useLocation } from "react-router-dom";


import AboutUs from "./AboutPage";
import Home from "./HomePage";
import Services from "./Services";
import ContactPage from "./ContactPage";
import TeamPage from "./TeamPage";

import '../styles/MainPage.css';

export default function MainPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <main>
      <section id="home-section">
        <Home />
      </section>
      <section id="services-section" className="section">
        <Services />
      </section>
      <section id="about-us-section" className="section">
        <AboutUs />
      </section>
      <section id="team-section" className="section">
        <TeamPage />
      </section>
      <section id="contact-us-section" className="section">
        <ContactPage />
      </section>
    </main>
  );
}
