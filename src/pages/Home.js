import React from 'react';
import Aside from '../components/Aside';
import NewsItem from '../components/NewsItem';
import { useFetch } from '../hook/useFetch';

function Home() {
  const { news, isLoading } = useFetch();

  if (isLoading) {
    return <div />;
  }
  console.log(news);
  return (
    <main className='p-12 bg-text-light'>
      <h2 className='heading-2'>INDONESIA NEWS</h2>
      <span className='heading-border-2' />
      <h3 className='heading-3'>Berita Utama</h3>
      <span className='heading-border-3' />
      <section className='flex flex-wrap justify-between h-full'>
        {news.map((item) => (
          <NewsItem key={item.url} {...item} />
        ))}
      </section>
      <div>
        <section></section>
        <Aside />
      </div>
    </main>
  );
}

export default Home;
