import { FaBookmark } from 'react-icons/fa';
import { truncate } from '../helper';
import { useFetch } from '../hook/useFetch';

function NewsItem({ title, source: { id, name }, urlToImage }) {
  // const news = [0];
  // const title =
  //   'EMERGING MARKETS-Indonesia, Philippine shares scale new highs, track U.S. rebound - Routers';
  // const isLoading = true;

  // console.log(useFetch());

  // if (isLoading) {
  //   return <div />;
  // }

  return (
    <article className='w-56'>
      <div className='relative'>
        <img
          src={
            urlToImage ||
            'https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800'
          }
          alt={title}
        />
        <button className='absolute w-8 h-8 bg-white rounded-full top-2 right-2'>
          <FaBookmark className='absolute text-gray-500 text-md top-2 right-2' />
        </button>
      </div>
      <dl className='mt-1'>
        <dt className='text-sm font-medium'>
          {truncate(title) || truncate(title)}
        </dt>
        <dd className='text-sm font-bold text-primary-dark'>
          {id || 'Reuters'}
          <span className='font-medium text-text-gray'> - {name}</span>
        </dd>
      </dl>
    </article>
  );
}

export default NewsItem;
