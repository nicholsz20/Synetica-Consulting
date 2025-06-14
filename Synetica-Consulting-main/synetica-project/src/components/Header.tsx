import { useEffect, useState } from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  // State to track if the mobile menu is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State to track if the user has scrolled down the page
  const [isScrolled, setIsScrolled] = useState(false);

  // State to track which section is currently in view
  const [activeSection, setActiveSection] = useState("home");

  // Effect to handle scroll position and section tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Section IDs to track using IntersectionObserver
    const sectionIds = [
      "home-section",
      "services-section",
      "team-section",
      "about-us-section",
      "contact-us-section",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -49% 0px", threshold: 0 }
    );

    // Start observing each section if it exists
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Watch for page scroll
    window.addEventListener("scroll", handleScroll);

    // Close mobile menu when clicking outside of it
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        !(event.target as HTMLElement).closest(".mobile-menu") &&
        !(event.target as HTMLElement).closest(".mobile-menu-toggle")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
      observer.disconnect();
    };
  }, [isMobileMenuOpen]);

  // Effect to toggle body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  // Returns 'active' class if a section is currently active
  const isActive = (id: string): string =>
    activeSection === id ? "active" : "";

  // Closes the mobile menu when a link is clicked
  const handleMobileMenuClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    setIsMobileMenuOpen(false);
  };

  // Toggles the mobile menu open/closed
  const toggleMobileMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="header-content">
        {/* Desktop Navigation */}
        <nav className="desktop-menu full">
          <a href="#home" className={isActive("home")}>
            Home
          </a>
          <a href="#services-section" className={isActive("services-section")}>
            Services
          </a>
          <a href="#about-us-section" className={isActive("about-us-section")}>
            About Us
          </a>
          <a href="#team-section" className={isActive("team-section")}>
            Our Team
          </a>
          <a
            href="#contact-us-section"
            className={isActive("contact-us-section")}
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "white", fontSize: "24px" }}
          />
        </button>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <button
              className="mobile-menu-close"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <a
              href="#home"
              onClick={handleMobileMenuClick}
              className={isActive("home")}
            >
              Home
            </a>
            <a
              href="#services-section"
              onClick={handleMobileMenuClick}
              className={isActive("services-section")}
            >
              Services
            </a>
            <a
              href="#about-us-section"
              onClick={handleMobileMenuClick}
              className={isActive("about-us-section")}
            >
              About Us
            </a>
            <a
              href="#team-section"
              onClick={handleMobileMenuClick}
              className={isActive("team-section")}
            >
              Our Team
            </a>
            <a
              href="#contact-us-section"
              onClick={handleMobileMenuClick}
              className={isActive("contact-us-section")}
            >
              Contact Us
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
