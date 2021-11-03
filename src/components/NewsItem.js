import { FaBookmark } from 'react-icons/fa';
import { checkDefaultImg, truncate } from '../helper';

function NewsItem({
  headlines,
  aside,
  title,
  source: { id, name },
  urlToImage,
  margin = 80,
}) {
  // Styles (Classname utilities)
  const img = checkDefaultImg(urlToImage) && 'border-2 border-primary-light';
  const article = !!aside ? 'flex' : !!headlines ? 'w-full' : 'w-56';
  const dl = !!aside
    ? 'w-3/6 pl-3 flex flex-col justify-between'
    : !!headlines && 'relative mx-auto w-11/12 bg-white p-5 -mt-10 z-10';

  return (
    <article className={article}>
      <div className={`mb-0.5 relative ${!!aside && 'w-3/6'}`}>
        <img className={img} src={urlToImage} alt={title} />
        <button className='absolute w-8 h-8 bg-white border-2 rounded-full border-text-gray top-2 right-2'>
          <FaBookmark className='absolute text-gray-500 right-1.5 text-md top-1.5' />
        </button>
      </div>
      <dl className={dl}>
        <dt className='text-sm font-medium'>{truncate(title, margin)}</dt>
        <dd className='text-sm font-bold text-primary-dark'>
          {id || 'Reuters'}
          <span className='font-medium text-text-gray'> - {name}</span>
        </dd>
      </dl>
    </article>
  );
}

export default NewsItem;
