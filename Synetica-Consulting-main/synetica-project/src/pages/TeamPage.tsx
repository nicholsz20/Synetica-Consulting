import "/src/styles/TeamPage.css";

import founder from "../assets/team/Fuad_Hassan.webp";

export default function TeamPage() {
  return (
    <div className="container">
      <h2 className="section-title">Our Founder</h2>
      <div className="founder-card">
        <img src={founder} className="founder-image" alt="Fuad Hassan" />
        <div className="founder-info">
          <h3 className="founder-name">Fuad Hassan</h3>
          <p className="founder-role">Founder & Lead Consultant</p>
          <p className="founder-description">
            Fuad Hassan is a seasoned data scientist with a strong foundation in
            business strategy. With a Master’s in Analytics and dual degrees in
            Accounting and Management, he has led enterprise-grade AI and
            analytics initiatives that reduced cost and operational
            improvements. His leadership combines technical precision with
            business acumen—ensuring every solution is built for real-world
            impact.
          </p>
        </div>
      </div>
    </div>
  );
}
