import React from 'react';
import { Aside, Error, Loading, NewsItem, NewsLists } from '../components';
import { useNewsContext } from '../context/newsContext';
import { splitNews } from '../utils/helpers';

function Home() {
  const [state] = useNewsContext();
  const { news, isLoading, query } = state;

  if (isLoading) return <Loading />;
  else if (news.length === 0) return <Error />;

  const mergingArray = splitNews(news);

  return (
    <main>
      <div className='p-12 bg-white'>
        <h2 className='heading-2'>{query} NEWS</h2>
        <span className='heading-border-2' />
        <h3 className='heading-3'>Berita Utama</h3>
        <span className='heading-border-3' />
        <NewsLists>
          {mergingArray[0].map((item) => (
            <NewsItem {...item} key={item.url} />
          ))}
        </NewsLists>
      </div>
      <div className='flex justify-between m-14'>
        <section className='w-6/12'>
          <NewsLists column>
            {mergingArray[2].map((item) => (
              <NewsItem
                {...item}
                key={item.url}
                margin={68}
                size='2rem'
                type='headlines'
              />
            ))}
          </NewsLists>
        </section>
        <Aside news={mergingArray[1]} />
      </div>
    </main>
  );
}

export default Home;
