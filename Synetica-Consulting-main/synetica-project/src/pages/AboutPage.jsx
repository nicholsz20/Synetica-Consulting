import { useEffect, useRef } from "react";
import "../styles/AboutPage.css";

const aboutData = [
  {
    title: "Our Mission",
    text: "To empower businesses through intelligent, data-driven solutions that simplify complexity, optimize performance, and fuel long-term growth.",
  },
  {
    title: "Our Approach",
    text: "We partner closely with our clients to understand their goals, pain points, and vision. Every engagement is approached with curiosity, clarity, and a commitment to delivering practical solutions. From concept to deployment, we provide hands-on execution and strategic guidance at every step.",
  },
  {
    title: "Why Choose Us",
    bullets: [
      {
        title: "Proven Expertise, Fresh Perspective",
        description:
          "We bring enterprise-level experience with the agility of a boutique firm—delivering smart, scalable solutions.",
      },
      {
        title: "Tailored Solutions, Real Impact",
        description:
          "We design every engagement around your goals—no templates, just outcomes that matter.",
      },
      {
        title: "Business-First, Tech-Smart",
        description:
          "We translate complex analytics into clear, strategic insight for decision-makers.",
      },
      {
        title: "Hands-On Partnership",
        description:
          "Our lean structure means you work directly with experts—ensuring focus, accountability, and exceptional execution.",
      },
    ],
  },
];

export default function AboutPage() {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    itemRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () =>
      itemRefs.current.forEach((ref) => ref && observer.unobserve(ref));
  }, []);

  return (
    <div className="about-container">
      <h2 className="about-title">About Us</h2>
      <p className="about-intro">
        Synetica Consulting is a modern analytics and automation consultancy
        built to help businesses unlock value through data. We bring together
        advanced technical expertise and real-world business understanding to
        design solutions that drive measurable impact. From startups to
        enterprises, we help organizations work smarter, act faster, and grow
        stronger.
      </p>
      <div className="about-section">
        {aboutData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`about-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="about-content">
              <h3>{item.title}</h3>
              {item.bullets ? (
                <ul className="custom-bullet-list">
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>
                      <strong>{bullet.title}</strong>
                      <div className="bullet-description">
                        {bullet.description}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{item.text}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}