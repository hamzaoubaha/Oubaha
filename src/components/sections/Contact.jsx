import { useState, useRef } from 'react';
import { Send, Mail, MapPin, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';
import { personal } from '../../data/portfolio';
import SectionHeader from '../shared/SectionHeader';
import AnimatedSection from '../shared/AnimatedSection';
import Button from '../shared/Button';
import './Contact.css';

const SOCIAL = [
  { Icon: Github, href: personal.social.github, label: 'GitHub' },
  { Icon: Linkedin, href: personal.social.linkedin, label: 'LinkedIn' },
  { Icon: Twitter, href: personal.social.twitter, label: 'Twitter' },
].filter(s => s.href);

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'success' | 'error'
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate form submission
    setTimeout(() => {
      setSending(false);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="section contact">
      <div className="contact__glow" />
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            eyebrow="// Contact"
            title="Let's Work"
            titleAccent="Together"
            subtitle="Have a project in mind, a question, or just want to say hello? I'd love to hear from you."
          />
        </AnimatedSection>

        <div className="contact__inner">
          {/* Left info */}
          <AnimatedSection delay={0.1} direction="left" className="contact__info">
            <h3 className="contact__info-title">Get in touch</h3>
            <p className="contact__info-text">
              I am currently available for freelance projects, collaborations, and full-time opportunities.
              Response time is typically within 24 hours.
            </p>

            <div className="contact__channels">
              <a href={`mailto:${personal.email}`} className="contact__channel">
                <div className="contact__channel-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="contact__channel-label">Email</p>
                  <p className="contact__channel-value">{personal.email}</p>
                </div>
              </a>
              <div className="contact__channel">
                <div className="contact__channel-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="contact__channel-label">Location</p>
                  <p className="contact__channel-value">{personal.location}</p>
                </div>
              </div>
            </div>

            <div className="contact__social">
              <p className="contact__social-label">Also find me on</p>
              <div className="contact__social-links">
                {SOCIAL.map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="contact__social-link">
                    <Icon size={16} />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right form */}
          <AnimatedSection delay={0.15} direction="right">
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label className="contact__label" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="contact__input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label className="contact__label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="contact__input"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  className="contact__input"
                  placeholder="What is this about?"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="contact__input contact__textarea"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>

              {status === 'success' && (
                <div className="contact__status contact__status--success">
                  <CheckCircle size={16} />
                  Message sent! I'll get back to you shortly.
                </div>
              )}
              {status === 'error' && (
                <div className="contact__status contact__status--error">
                  <AlertCircle size={16} />
                  Something went wrong. Please try again.
                </div>
              )}

              <Button
                variant="primary"
                size="lg"
                icon={sending ? null : <Send size={16} />}
                fullWidth
              >
                {sending ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
