import './Tag.css';

const Tag = ({ label, color = 'default', size = 'sm' }) => (
  <span className={`tag tag--${color} tag--${size}`}>{label}</span>
);

export default Tag;
