import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import './Dashboard.css';

const Dashboard = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const [testimonials, setTestimonials] = useState([]);
  const [comments, setComments] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      if (session) fetchDashboardData();
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) fetchDashboardData();
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchDashboardData = async () => {
    setIsDataLoading(true);
    try {
      const [tRes, cRes] = await Promise.all([
        supabase.from('testimonials').select('*').order('created_at', { ascending: false }),
        supabase.from('comments').select('*').order('created_at', { ascending: false })
      ]);

      if (tRes.error) throw tRes.error;
      if (cRes.error) throw cRes.error;

      setTestimonials(tRes.data || []);
      setComments(cRes.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsDataLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError('');
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
    } catch (error) {
      setAuthError(error.message);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const updateTestimonialStatus = async (id, status) => {
    try {
      const { error } = await supabase
        .from('testimonials')
        .update({ status })
        .eq('id', id);
      if (error) throw error;
      fetchDashboardData();
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Error updating status');
    }
  };

  const deleteTestimonial = async (id) => {
    if (!window.confirm('Are you sure you want to delete this testimonial AND its comments?')) return;
    try {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', id);
      if (error) throw error;
      fetchDashboardData();
    } catch (error) {
      console.error('Error deleting:', error);
      alert('Error deleting');
    }
  };

  const deleteComment = async (id) => {
    if (!window.confirm('Are you sure you want to delete this comment?')) return;
    try {
      const { error } = await supabase
        .from('comments')
        .delete()
        .eq('id', id);
      if (error) throw error;
      fetchDashboardData();
    } catch (error) {
      console.error('Error deleting comment:', error);
      alert('Error deleting comment');
    }
  };

  if (loading) {
    return <div className="dashboard-page"><div className="dashboard-container">Loading...</div></div>;
  }

  if (!session) {
    return (
      <div className="dashboard-page flex-center">
        <div className="dashboard-container auth-container">
          <div className="auth-card">
            <h2 className="auth-title">Admin Login</h2>
            {authError && <div className="form-message error" style={{marginBottom: 16}}>{authError}</div>}
            <form onSubmit={handleLogin} className="auth-form">
              <input
                className="auth-input"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="auth-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="btn-login">Login to Dashboard</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const pendingTestimonials = testimonials.filter(t => t.status === 'pending');
  const approvedTestimonials = testimonials.filter(t => t.status === 'approved');

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1 className="dashboard-title">Admin Dashboard</h1>
          <button onClick={handleLogout} className="btn-logout">Logout</button>
        </header>

        {isDataLoading && <p>Loading data...</p>}

        <section className="dashboard-section">
          <h3>Pending Approvals ({pendingTestimonials.length})</h3>
          {pendingTestimonials.length === 0 ? (
            <p className="empty-state">No pending reviews.</p>
          ) : (
            <div className="table-container">
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Author</th>
                    <th>Review text</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingTestimonials.map(t => (
                    <tr key={t.id}>
                      <td>{new Date(t.created_at).toLocaleDateString()}</td>
                      <td>
                        <strong>{t.author_name}</strong><br />
                        <span style={{fontSize: '0.8em', color: 'var(--color-text-muted)'}}>{t.author_title}</span>
                      </td>
                      <td style={{maxWidth: 300}}>{t.content}</td>
                      <td>
                        <div className="action-btns">
                          <button onClick={() => updateTestimonialStatus(t.id, 'approved')} className="btn-action btn-approve">Approve</button>
                          <button onClick={() => deleteTestimonial(t.id)} className="btn-action btn-delete">Reject</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="dashboard-section">
          <h3>Recent Comments ({comments.length})</h3>
          {comments.length === 0 ? (
            <p className="empty-state">No comments yet.</p>
          ) : (
            <div className="table-container">
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Commenter</th>
                    <th>Comment</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {comments.map(c => (
                    <tr key={c.id}>
                      <td>{new Date(c.created_at).toLocaleDateString()}</td>
                      <td><strong>{c.author_name}</strong></td>
                      <td style={{maxWidth: 300}}>{c.content}</td>
                      <td>
                        <div className="action-btns">
                          <button onClick={() => deleteComment(c.id)} className="btn-action btn-delete">Remove</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="dashboard-section">
          <h3>Approved Testimonials ({approvedTestimonials.length})</h3>
          {approvedTestimonials.length === 0 ? (
            <p className="empty-state">No approved reviews yet.</p>
          ) : (
            <div className="table-container">
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Author</th>
                    <th>Review text</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {approvedTestimonials.map(t => (
                    <tr key={t.id}>
                      <td>{new Date(t.created_at).toLocaleDateString()}</td>
                      <td>
                        <strong>{t.author_name}</strong><br />
                        <span style={{fontSize: '0.8em', color: 'var(--color-text-muted)'}}>{t.author_title}</span>
                      </td>
                      <td style={{maxWidth: 300}}>{t.content}</td>
                      <td>
                        <div className="action-btns">
                          <button onClick={() => deleteTestimonial(t.id)} className="btn-action btn-delete">Remove</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
