function NewsLists({ children, type = 'default', className }) {
  // For styling purpose
  const styles = {
    aside: 'flex-col lg:space-y-0',
    search: 'flex-col lg:space-y-7',
    headlines: 'flex-col',
    default: 'lg:space-y-0',
  };
  const sectionStyle = `flex flex-wrap justify-between h-full space-y-7 ${styles[type]} ${className}`;

  return <section className={sectionStyle}>{children}</section>;
}

export default NewsLists;
