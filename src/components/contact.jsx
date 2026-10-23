import { Mail, MapPin, Send } from "lucide-react";
import "./contact.css";

const CONTACT_EMAIL = "juldarecar2003@gmail.com";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(
      `Portfolio contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* LEFT: INTRODUCTION */}
        <div className="contact-info">
          <span className="section-tag">
            {"{ get_in_touch }"}
          </span>

          <h2>
            Let's build something
            <br />
            meaningful together.
          </h2>

          <p className="contact-description">
            I'm a Systems Engineering graduate looking for opportunities
            to grow as a software developer. I'm particularly interested
            in web development, artificial intelligence, and natural
            language processing.
          </p>

          <p className="contact-description">
            Have an opportunity, a project idea, or just want to talk
            about technology? Feel free to reach out!
          </p>

          <div className="contact-details">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="contact-detail"
            >
              <Mail size={16} />
              <span>{CONTACT_EMAIL}</span>
            </a>

            <div className="contact-detail">
              <MapPin size={16} />
              <span>Colombia · Open to remote opportunities</span>
            </div>
          </div>
        </div>

        {/* RIGHT: CONTACT FORM */}
        <div className="contact-form-wrapper">
          <div className="contact-form-header">
            <span className="terminal-symbol">//</span>
            <h3>send_message.sh</h3>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-fields-row">
              <div className="form-group">
                <label htmlFor="contact-name">YOUR_NAME</label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">YOUR_EMAIL</label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="form-group message-group">
              <label htmlFor="contact-message">MESSAGE_BODY</label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Type your message..."
                rows={5}
                required
              />
            </div>

            <div className="form-submit">
              <button type="submit" className="submit-button">
                Execute Submit
                <Send size={14} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;