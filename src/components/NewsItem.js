import * as styles from '../utils/constants';
import { FaBookmark } from 'react-icons/fa';
import { truncate } from '../utils/helpers';

function NewsItem({
  headlines,
  aside,
  search,
  title,
  source: { id, name },
  publishedAt,
  url,
  urlToImage,
  margin = 80,
}) {
  const div = `${styles.div(aside, search, headlines)} mb-0.5 relative`;
  const dl =
    styles.dl(aside, search, headlines) +
    styles.justifyFixed(aside, search) +
    styles.special(search);

  const bookmarkHandle = (id) => {
    console.log(id);
  };

  return (
    <article className={`${styles.article(aside, search, headlines)} group`}>
      <div className={div}>
        <img className={styles.img(urlToImage)} src={urlToImage} alt={title} />
        <button
          className={styles.button}
          onClick={() => bookmarkHandle(publishedAt)}
        >
          <FaBookmark className='absolute text-gray-500 right-1.5 text-md top-1.5' />
        </button>
      </div>
      <dl
        className={dl}
        role='button'
        onClick={() => window.open(url, '_blank')}
      >
        <dt className={styles.dt(search)}>{truncate(title, margin)}</dt>
        <dd className='text-sm font-bold text-primary-dark'>
          {id || 'unknown'}
          <span className='font-medium text-text-gray'> - {name}</span>
        </dd>
      </dl>
    </article>
  );
}

export default NewsItem;
