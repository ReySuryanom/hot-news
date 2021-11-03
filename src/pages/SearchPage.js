import { Loading, NewsItem, NewsLists } from '../components';
import { formattedNews } from '../helper';
import { useFetch } from '../hook/useFetch';

function SearchPage() {
  const { news, isLoading } = useFetch();

  if (isLoading) return <Loading />;

  const mergedArray = formattedNews(news);

  return (
    <main className='w-full p-12 bg-white'>
      <h2 className='heading-2'>INDONESIA NEWS</h2>
      <span className='heading-border-2' />
      <NewsLists column className='w-full p-20 space-y-10'>
        {mergedArray[0].map((item) => (
          <NewsItem key={item.url} {...item} search />
        ))}
      </NewsLists>
    </main>
  );
}

export default SearchPage;
