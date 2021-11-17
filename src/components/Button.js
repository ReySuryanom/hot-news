function Button({ className, onClick, children, tabIndex = '0' }) {
  return (
    <button className={className} onClick={onClick} tabIndex={tabIndex}>
      {children}
    </button>
  );
}

export default Button;
