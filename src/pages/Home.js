import React from 'react';
import Aside from '../components/Aside';
import Footer from '../components/Footer';
import NewsItem from '../components/NewsItem';
import NewsLists from '../components/NewsLists';
import { formattedNews } from '../helper';
import { useFetch } from '../hook/useFetch';

function Home() {
  const { news, isLoading } = useFetch();

  if (isLoading) {
    return <div />;
  }
  const mergedArray = formattedNews(news);

  return (
    <>
      <main>
        <div className='p-12 bg-white'>
          <h2 className='heading-2'>INDONESIA NEWS</h2>
          <span className='heading-border-2' />
          <h3 className='heading-3'>Berita Utama</h3>
          <span className='heading-border-3' />
          <NewsLists>
            {mergedArray[0].map((item) => (
              <NewsItem key={item.url} {...item} />
            ))}
          </NewsLists>
        </div>
        <div className='flex justify-between m-14'>
          <section className='w-6/12'>
            <NewsLists column>
              {mergedArray[2].map((item) => (
                <NewsItem key={item.url} {...item} headlines margin={68} />
              ))}
            </NewsLists>
          </section>
          <Aside lists={mergedArray[1]} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
