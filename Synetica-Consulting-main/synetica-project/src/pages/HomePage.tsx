// Import styles and assets
import "../styles/HomePage.css";
import LogoImage from "../assets/Logo/LogoNameWhite.webp";

/**
 * HomePage Hero Section
 * Displays hero banner with logo, headline, and CTA button
 */
export default function HomePage() {
  return (
    <section className="homepage-hero">
      {/* Company logo */}
      <img
        src={LogoImage}
        alt="Synetica Consulting Logo"
        className="hero-logo"
      />

      {/* Headline text */}
      <h1 className="hero-title">
        Where AI, Data, and Strategy Drive Transformation
      </h1>

      {/* Call-to-action button */}
      <a href="/#contact-us-section" className="hero-button">
        Let's Talk
      </a>
    </section>
  );
}
