import { Error, Loading, NewsItem, NewsLists } from '../components';
import { useNewsContext } from '../context/newsContext';

function SpecialPages() {
  const [state] = useNewsContext();
  const { news, isLoading, query } = state;

  if (isLoading) return <Loading />;
  else if (news.length === 0) return <Error />;

  return (
    <main className='w-full min-h-full p-12 bg-white'>
      <h2 className='heading-2'>{query} NEWS</h2>
      <span className='heading-border-2' />
      <NewsLists column className='w-full p-20 space-y-10'>
        {news.map((item) => (
          <NewsItem key={item.url} {...item} margin={130} type='search' />
        ))}
      </NewsLists>
    </main>
  );
}

export default SpecialPages;
