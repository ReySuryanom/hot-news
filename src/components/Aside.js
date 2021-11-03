import NewsItem from './NewsItem';
import NewsLists from './NewsLists';

function Aside({ lists }) {
  return (
    <aside className='w-5/12 p-4 pb-24 bg-white'>
      <h3 className='heading-3'>Berita Utama</h3>
      <span className='heading-border-3' />
      <NewsLists column>
        {lists.map((item) => (
          <NewsItem key={item.url} {...item} aside />
        ))}
      </NewsLists>
    </aside>
  );
}

export default Aside;
