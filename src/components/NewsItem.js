// import * as styles from '../utils/constants';
import { FaBookmark } from 'react-icons/fa';
import { truncate } from '../utils/helpers';
import { useNewsContext } from '../context/newsContext';
import { ADD_TO_SAVED_NEWS } from '../reducer/actions';
import { Button } from '.';
import {
  articleStyle,
  buttonStyle,
  divStyle,
  dlStyle,
  dtStyle,
  img,
  justifyFixed,
  specialStyle,
} from '../utils/constants';

function NewsItem({
  type = 'default',
  title,
  source: { id, name },
  publishedAt,
  url,
  urlToImage,
  description,
  length = 80,
}) {
  const [state, dispatch] = useNewsContext();
  // const div = `${styles.div(aside, search, headlines)} mb-0.5 relative`;
  // const dl =
  //   styles.dl(aside, search, headlines) +
  //   styles.justifyFixed(aside, search) +
  //   styles.special(search);

  const dlTag = dlStyle[type] + justifyFixed[type] + specialStyle[type];

  const bookmarkToggler = () => {
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

  const checkIfNewsAlreadySaved = state.saved_news.some(
    (item) => item.url === url
  )
    ? 'text-primary-light'
    : 'text-gray-500';
  console.log(dlTag);
  return (
    <article className={articleStyle[type]}>
      <div className={divStyle[type]}>
        <img className={img(urlToImage)} src={urlToImage} alt={title} />
        <Button className={buttonStyle} onClick={bookmarkToggler}>
          <FaBookmark
            className={`absolute right-1.5 text-md top-1.5 ${checkIfNewsAlreadySaved}`}
          />
        </Button>
      </div>
      <dl
        className={dlTag}
        role='button'
        onClick={() => window.open(url, '_blank')}
      >
        <dt className={dtStyle.search(type)}>{truncate(title, length)}</dt>
        <dd className='text-sm font-bold text-primary-dark'>
          {id || 'unknown'}
          <span className='font-medium text-text-gray'> - {name}</span>
        </dd>
      </dl>
    </article>
  );
}

export default NewsItem;
