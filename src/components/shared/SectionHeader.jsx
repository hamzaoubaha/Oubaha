import './SectionHeader.css';

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  titleAccent,
}) => {
  return (
    <div className={`section-header section-header--${align}`}>
      {eyebrow && (
        <span className="section-header__eyebrow font-mono">{eyebrow}</span>
      )}
      <h2 className="section-header__title">
        {title}
        {titleAccent && (
          <span className="gradient-text"> {titleAccent}</span>
        )}
      </h2>
      {subtitle && (
        <p className="section-header__subtitle">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
