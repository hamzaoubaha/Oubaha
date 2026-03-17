import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/portfolio';
import SectionHeader from '../shared/SectionHeader';
import AnimatedSection from '../shared/AnimatedSection';
import './Testimonials.css';

const Testimonials = () => {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            eyebrow="// Social Proof"
            title="What Clients"
            titleAccent="Say"
            subtitle="Real feedback from real collaborations — the moments that mean the most."
          />
        </AnimatedSection>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.id} delay={i * 0.12}>
              <div className="testimonial-card">
                <div className="testimonial-card__quote-icon">
                  <Quote size={20} />
                </div>
                <div className="testimonial-card__stars">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} fill="var(--color-gold)" color="var(--color-gold)" />
                  ))}
                </div>
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="testimonial-card__name">{t.name}</p>
                    <p className="testimonial-card__role">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
