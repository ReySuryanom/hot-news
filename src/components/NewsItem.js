import { FaBookmark } from 'react-icons/fa';
import { checkDefaultImg, truncate } from '../utils/helpers';

function NewsItem({
  headlines,
  aside,
  search,
  title,
  source: { id, name },
  urlToImage,
  margin = 80,
}) {
  // Styles (Classname utilities)
  const img = checkDefaultImg(urlToImage)
    ? 'border-2 border-primary-light object-cover w-full h-full'
    : 'w-full h-full object-cover';
  const special = !!search ? ' h-44' : undefined;
  const article =
    !!aside || !!search ? 'flex' : !!headlines ? 'w-full' : 'w-56';
  const div = !!aside
    ? 'w-3/6'
    : !!search
    ? 'overflow-hidden w-5/12 h-44'
    : !headlines && 'overflow-hidden h-32';
  const dl =
    !!aside || !!search
      ? 'w-3/6 pl-3 flex flex-col'
      : !!headlines && 'relative mx-auto w-11/12 bg-white p-5 -mt-10 shadow-md';
  const dt = `font-medium ${!!search ? 'text-xl' : 'text-sm'}`;
  const justifyFixed = !!aside
    ? ' justify-between'
    : !!search
    ? ' justify-center bg-text-light w-full pl-10'
    : '';

  return (
    <article className={article}>
      <div className={`${div} mb-0.5 relative`}>
        <img className={img} src={urlToImage} alt={title} />
        <button className='absolute w-8 h-8 bg-white border-2 rounded-full border-text-gray top-2 right-2'>
          <FaBookmark className='absolute text-gray-500 right-1.5 text-md top-1.5' />
        </button>
      </div>
      <dl className={dl + justifyFixed + special}>
        <dt className={dt}>{truncate(title, margin)}</dt>
        <dd className='text-sm font-bold text-primary-dark'>
          {id || 'Reuters'}
          <span className='font-medium text-text-gray'> - {name}</span>
        </dd>
      </dl>
    </article>
  );
}

export default NewsItem;
