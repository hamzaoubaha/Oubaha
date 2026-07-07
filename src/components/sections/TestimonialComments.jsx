import { useState, useEffect } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import './TestimonialComments.css';

const TestimonialComments = ({ testimonialId }) => {
  const [comments, setComments] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', content: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-fetch comments count or just fetch all when opened.
  // We'll fetch all when opened to save network requests.
  useEffect(() => {
    if (isOpen) {
      fetchComments();
    }
  }, [isOpen]);

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('testimonial_id', testimonialId)
        .order('created_at', { ascending: true });

      if (error) throw error;
      setComments(data || []);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.content) return;
    
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase
        .from('comments')
        .insert([
          {
            testimonial_id: testimonialId,
            author_name: formData.name,
            content: formData.content
          }
        ])
        .select('*');

      if (error) throw error;
      
      if (data && data[0]) {
        setComments([...comments, data[0]]);
      }
      setFormData({ name: '', content: '' });
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="testimonial-comments">
      <button 
        className="btn-toggle-comments" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Comments"
      >
        <MessageCircle size={16} />
        {isOpen ? 'Close Comments' : 'Comments'}
      </button>

      {isOpen && (
        <div className="comments-section">
          <div className="comments-list">
            {comments.length > 0 ? (
              comments.map(comment => (
                <div key={comment.id} className="comment-item">
                  <div className="comment-avatar">
                    {comment.author_name.charAt(0).toUpperCase()}
                  </div>
                  <div className="comment-body">
                    <span className="comment-author">{comment.author_name}</span>
                    <p className="comment-text">{comment.content}</p>
                    <span className="comment-date">
                      {new Date(comment.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-comments">No comments yet. Be the first to reply!</p>
            )}
          </div>

          <form className="comment-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Your Name *" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className="comment-input"
            />
            <div className="comment-input-group">
              <input 
                type="text" 
                placeholder="Write a reply..." 
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                required
                className="comment-input"
              />
              <button className="btn-send-comment" type="submit" disabled={isSubmitting}>
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default TestimonialComments;
