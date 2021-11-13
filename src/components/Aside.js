import { NewsItem, NewsLists } from '.';

function Aside({ news }) {
  return (
    <aside className='w-5/12 p-4 pb-24 bg-white'>
      <h3 className='heading-3'>Berita Utama</h3>
      <span className='heading-border-3' />
      <NewsLists column>
        {news.map((item) => (
          <NewsItem {...item} key={item.url} type='aside' />
        ))}
      </NewsLists>
    </aside>
  );
}

export default Aside;
