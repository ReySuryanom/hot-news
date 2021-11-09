import { Loading, NewsItem, NewsLists } from '../components';
import { useNewsContext } from '../context/news_context';
import { formattedNews } from '../utils/helpers';

function SpecialPages() {
  const [state] = useNewsContext();
  const { news, isLoading, query } = state;

  if (isLoading) return <Loading />;

  const mergedArray = formattedNews(news);

  return (
    <main className='w-full min-h-full p-12 bg-white'>
      <h2 className='heading-2'>{query} NEWS</h2>
      <span className='heading-border-2' />
      <NewsLists column className='w-full p-20 space-y-10'>
        {mergedArray[0].map((item) => (
          <NewsItem key={item.publishedAt} {...item} margin={130} search />
        ))}
      </NewsLists>
    </main>
  );
}

export default SpecialPages;
