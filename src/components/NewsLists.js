function NewsLists({ children, column }) {
  const style = `flex flex-wrap justify-between h-full ${column && 'flex-col'}`;

  return <section className={style}>{children}</section>;
}

export default NewsLists;
