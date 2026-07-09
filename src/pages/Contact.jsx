import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollAnimations";

function Contact() {
  const contactReveal = useScrollReveal({ threshold: 0.15 });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  return (
    <div className="page-container">
      <section 
        className={`section section-contact scroll-reveal ${contactReveal.isVisible ? "visible" : ""}`}
        ref={contactReveal.ref}
      >
        <div className="section-divider">
          <div className="line" />
          <span className="label">Contact</span>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="card contact-details-card">
            <h2>Let's Collaborate</h2>
            <p>
              Looking to develop advanced hardware or integrate AI models into engineering workflows? 
              Get in touch to discuss concepts, consulting opportunities, or collaborations.
            </p>
            <div className="contact-methods">
              <div className="method-item">
                <span className="method-icon">✉️</span>
                <div className="method-text">
                  <span className="method-label">Email</span>
                  <a href="mailto:your@email.com" className="method-link">your@email.com</a>
                </div>
              </div>
              <div className="method-item">
                <span className="method-icon">🔗</span>
                <div className="method-text">
                  <span className="method-label">LinkedIn</span>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="method-link">linkedin.com/in/engineering-ops</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="card contact-form-card">
            <h2>Send a Message</h2>
            {submitted ? (
              <div className="submission-success">
                <span className="success-icon">✓</span>
                <h3>Transmission Received</h3>
                <p>Thank you. Your message has been sent to mission control.</p>
                <button className="btn-secondary" onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", message: "" }); }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="Enter email address"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    required 
                    rows="4"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Write details of your request here..."
                  />
                </div>
                <button type="submit" className="btn-primary form-submit-btn">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
