import { useState } from "react";

export default function ContactFinale({ isModalOpen, setIsModalOpen }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@mozishan.dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setIsModalOpen(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1800);
  };

  return (
    <section className="contact-finale" id="contact">
      <h2 className="contact-statement">
        <span>HAVE A</span>
        <span>PROBLEM</span>
        <span>WORTH</span>
        <span>UNTANGLING?</span>
      </h2>

      <button
        type="button"
        className="contact-pull-btn"
        onClick={() => setIsModalOpen(true)}
        data-cursor="TALK"
      >
        LET'S TALK. <span aria-hidden="true">→</span>
      </button>

      {/* Interactive Thread Spool */}
      <div
        className="contact-thread-spool"
        onClick={() => setIsModalOpen(true)}
        title="Pull thread to connect"
        data-cursor="PULL"
      >
        <div className="contact-thread-spool-dot" />
      </div>

      <footer className="site-footer">
        <span>MO ZISHAN © 2026</span>
        <span>FULL-STACK WEB DEVELOPER</span>
        <span>CRAFTED WITH REACT &amp; NODE.JS</span>
      </footer>

      {/* CONTACT MODAL DIALOG */}
      {isModalOpen && (
        <div
          className="contact-modal-overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="contact-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="contact-modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close dialog"
            >
              ✕
            </button>

            <h3>LET'S BUILD TOGETHER.</h3>
            <p className="contact-modal-subtitle">
              Available for full-time engineering roles, high-impact web development contracts, and technical consulting. Direct email:{" "}
              <button
                type="button"
                onClick={handleCopyEmail}
                style={{
                  color: "var(--signal)",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {copied ? "COPIED TO CLIPBOARD!" : "hello@mozishan.dev"}
              </button>
            </p>

            {formSent ? (
              <div
                style={{
                  padding: "2rem",
                  background: "rgba(255, 59, 18, 0.1)",
                  border: "1px solid var(--signal)",
                  textAlign: "center",
                  color: "var(--signal)",
                  fontWeight: 600,
                }}
              >
                ✓ MESSAGE RECEIVED. UNTANGLING SOON.
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Ada Lovelace"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="ada@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project / Challenge</label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    placeholder="Tell me about your web app, product vision, or engineering challenge..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button type="submit" className="contact-submit-btn">
                  SEND INQUIRY →
                </button>
              </form>
            )}

            <div className="contact-social-links">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="VISIT"
              >
                TWITTER / X
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="VISIT"
              >
                LINKEDIN
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="VISIT"
              >
                GITHUB
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
