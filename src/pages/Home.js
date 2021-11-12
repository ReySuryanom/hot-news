import React from 'react';
import { Aside, Loading, NewsItem, NewsLists } from '../components';
import { useNewsContext } from '../context/newsContext';
import { formattedNews } from '../utils/helpers';

function Home() {
  const [state] = useNewsContext();
  const { news, isLoading, query } = state;

  if (isLoading) return <Loading />;

  const mergedArray = formattedNews(news);

  return (
    <main>
      <div className='p-12 bg-white'>
        <h2 className='heading-2'>{query} NEWS</h2>
        <span className='heading-border-2' />
        <h3 className='heading-3'>Berita Utama</h3>
        <span className='heading-border-3' />
        <NewsLists>
          {mergedArray[0].map((item) => (
            <NewsItem {...item} key={item.url} />
          ))}
        </NewsLists>
      </div>
      <div className='flex justify-between m-14'>
        <section className='w-6/12'>
          <NewsLists column>
            {mergedArray[2].map((item) => (
              <NewsItem {...item} key={item.url} margin={68} type='headlines' />
            ))}
          </NewsLists>
        </section>
        <Aside lists={mergedArray[1]} />
      </div>
    </main>
  );
}

export default Home;
