import { useScrollReveal } from "../hooks/useScrollAnimations";

const services = [
  {
    icon: "🚀",
    title: "Propulsion Design",
    description:
      "Advanced propulsion system concepts including hydrogen fuel and hybrid rocket motor designs.",
  },
  {
    icon: "🤖",
    title: "AI & ML Systems",
    description:
      "Machine learning models for predictive analysis, anomaly detection, and autonomous systems.",
  },
  {
    icon: "⚙️",
    title: "Mechanical Engineering",
    description:
      "CAD modeling, FEA simulation, and precision mechanical component design for extreme environments.",
  },
  {
    icon: "🛰️",
    title: "Aerospace Systems",
    description:
      "Spacecraft subsystem design, orbital mechanics analysis, and mission architecture planning.",
  },
];

function Services() {
  const servicesReveal = useScrollReveal({ threshold: 0.05 });
  const serviceReveals = services.map((_, i) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useScrollReveal({
      threshold: 0.05,
      rootMargin: `0px 0px -${20 + i * 10}px 0px`,
    })
  );

  return (
    <div className="page-container">
      <section 
        className={`section section-services scroll-reveal ${servicesReveal.isVisible ? "visible" : ""}`}
        ref={servicesReveal.ref}
      >
        <div className="section-divider">
          <div className="line" />
          <span className="label">Services</span>
        </div>
        <h2 className="section-heading">
          What I <span className="accent">Build</span>
        </h2>
        <div className="grid">
          {services.map((service, index) => (
            <div
              key={index}
              ref={serviceReveals[index].ref}
              className={`card service-card scroll-reveal stagger-${index + 1} ${
                serviceReveals[index].isVisible ? "visible" : ""
              }`}
            >
              <div className="service-icon">{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
