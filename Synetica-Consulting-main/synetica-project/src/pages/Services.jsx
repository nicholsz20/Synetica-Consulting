import '../styles/Services.css';

const services = [
  {
    title: 'Business Process Automation',
    description: 'We help businesses streamline operations by replacing repetitive tasks with intelligent, automated workflows. Our automation solutions reduce costs, save time, and enhance operational efficiency at scale.',
  },
  {
    title: 'Website Development',
    description: "We design and build fast, scalable, and user-friendly web applications tailored to your business goals. Whether you're launching a new digital product or modernizing an existing platform, we deliver results that perform.",
  },
  {
    title: 'Business Analytics',
    description: 'Our analytics services transform raw data into clear, actionable insights. From performance dashboards to strategic KPIs, we help organizations make informed decisions with confidence.',
  },
  {
    title: 'Predictive Analytics',
    description: 'We develop predictive models that uncover trends, forecast outcomes, and power smarter business strategies. Whether it’s marketing, finance, or compliance—we turn data into foresight.'
  }
];

export default function Services() {
  return (
    <section className="services-container" aria-labelledby="services-heading">
      <h2 id="services-heading" className="services-title">Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <article
            key={index}
            className={`service-item ${index % 2 === 0 ? 'left' : 'right'}`}
            tabIndex="0"
            aria-label={`Service ${index + 1}: ${service.title}`}
          >
            <div className="service-number">{`0${index + 1}`}</div>
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
