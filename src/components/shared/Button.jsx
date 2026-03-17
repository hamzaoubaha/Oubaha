import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  download,
  className = '',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  ...props
}) => {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? 'btn--full' : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="btn__icon">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="btn__icon">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} download={download} target={!download ? '_blank' : undefined} rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {content}
    </button>
  );
};

export default Button;
