function NewsLists({ children, column, className }) {
  const style = `flex flex-wrap justify-between h-full ${
    column && 'flex-col'
  } ${className}`;

  return <section className={style}>{children}</section>;
}

export default NewsLists;
