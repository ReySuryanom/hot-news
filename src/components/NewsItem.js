import * as styles from '../utils/constants';
import { FaBookmark } from 'react-icons/fa';
import { truncate } from '../utils/helpers';
import { useNewsContext } from '../context/news_context';
import { ADD_TO_SAVED_NEWS } from '../actions';

function NewsItem({
  headlines,
  aside,
  search,
  title,
  source: { id, name },
  publishedAt,
  url,
  urlToImage,
  description,
  margin = 80,
}) {
  const [state, dispatch] = useNewsContext();
  const div = `${styles.div(aside, search, headlines)} mb-0.5 relative`;
  const dl =
    styles.dl(aside, search, headlines) +
    styles.justifyFixed(aside, search) +
    styles.special(search);

  const bookmarkHandle = () => {
    const newsItem = {
      title,
      source: { id, name },
      publishedAt,
      url,
      urlToImage,
      description,
    };
    dispatch({ type: ADD_TO_SAVED_NEWS, payload: newsItem });
  };

  const test = state.saved_news.some((item) => item.publishedAt === publishedAt)
    ? 'text-primary-light'
    : 'text-gray-500';

  return (
    <article className={`${styles.article(aside, search, headlines)} group`}>
      <div className={div}>
        <img className={styles.img(urlToImage)} src={urlToImage} alt={title} />
        <button className={styles.button} onClick={bookmarkHandle}>
          <FaBookmark
            className={`absolute right-1.5 text-md top-1.5 ${test}`}
          />
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
