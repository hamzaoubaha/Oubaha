import { useState, useEffect } from 'react';
import { Star, Quote, MessageSquarePlus, X, Send } from 'lucide-react';
import { testimonials as staticTestimonials } from '../../data/portfolio';
import { supabase } from '../../lib/supabase';
import SectionHeader from '../shared/SectionHeader';
import AnimatedSection from '../shared/AnimatedSection';
import TestimonialComments from './TestimonialComments';
import './Testimonials.css';

const Testimonials = () => {
  const [dbTestimonials, setDbTestimonials] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', title: '', content: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('status', 'approved')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setDbTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: '', text: '' });

    try {
      const { error } = await supabase
        .from('testimonials')
        .insert([
          {
            author_name: formData.name,
            author_title: formData.title,
            content: formData.content,
            status: 'pending' // Default status
          }
        ]);

      if (error) throw error;

      setSubmitMessage({ 
        type: 'success', 
        text: 'Thank you! Your review has been submitted for approval.' 
      });
      setFormData({ name: '', title: '', content: '' });
      setTimeout(() => setShowForm(false), 3000);
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      setSubmitMessage({ 
        type: 'error', 
        text: 'Something went wrong. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Map Supabase fields to match static fields
  const mappedDbTestimonials = dbTestimonials.map(t => ({
    id: t.id,
    name: t.author_name,
    role: t.author_title || 'Client',
    text: t.content,
    rating: 5 // Default rating for DB items
  }));

  // Combine fetched with static and limit to latest 10
  const allTestimonials = [...mappedDbTestimonials, ...staticTestimonials].slice(0, 10);

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

        {allTestimonials.length === 0 ? (
          <AnimatedSection delay={0.2}>
            <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
              No reviews yet. Be the first to share your experience!
            </div>
          </AnimatedSection>
        ) : (
          <div className="testimonials__slider">
            {allTestimonials.map((t, i) => (
              <AnimatedSection key={t.id || i} delay={i * 0.12}>
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
                      {t.name ? t.name.charAt(0) : 'A'}
                    </div>
                    <div>
                      <p className="testimonial-card__name">{t.name}</p>
                      <p className="testimonial-card__role">{t.role}</p>
                    </div>
                  </div>
                  {/* Render comments if it's a db testimonial (has a string UUID) */}
                  {t.id && typeof t.id === 'string' && (
                    <TestimonialComments testimonialId={t.id} />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}

        {/* Leave a Review Button */}
        {!showForm && (
          <AnimatedSection delay={0.3}>
            <div className="testimonial-actions">
              <button 
                className="btn-leave-review"
                onClick={() => setShowForm(true)}
              >
                <MessageSquarePlus size={18} />
                Leave a Review
              </button>
            </div>
          </AnimatedSection>
        )}

        {/* Testimonial Form */}
        {showForm && (
          <AnimatedSection>
            <div className="testimonial-form-container">
              <div className="testimonial-form-header">
                <h3>Write your Review</h3>
                <button 
                  className="btn-close-form" 
                  onClick={() => setShowForm(false)}
                >
                  <X size={20} />
                </button>
              </div>

              {submitMessage.text && (
                <div className={`form-message ${submitMessage.type}`}>
                  {submitMessage.text}
                </div>
              )}

              <form className="testimonial-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-input" 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="title">Role or Company (Optional)</label>
                  <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    className="form-input" 
                    placeholder="CEO at Company"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="content">Your Review *</label>
                  <textarea 
                    id="content" 
                    name="content" 
                    className="form-input" 
                    placeholder="Hamza is an excellent developer..."
                    value={formData.content}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-submit-review"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : (
                    <>
                      <Send size={18} />
                      Submit Review
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
