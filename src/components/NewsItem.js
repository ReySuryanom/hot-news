// import * as styles from '../utils/constants';
import { FaBookmark, FaSearch } from 'react-icons/fa';
import { truncate } from '../utils/helpers';
import { useNewsContext } from '../context/newsContext';
import { ADD_TO_SAVED_NEWS } from '../reducer/actions';
import { Button } from '.';
import {
  articleStyle,
  buttonStyle,
  div1Style,
  div2Style,
  dlStyle,
  dtStyle,
  faSearchStyle,
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
  size,
  length = 80,
}) {
  const [state, dispatch] = useNewsContext();

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

  const goToNews = () => window.open(url, '_blank');

  const checkIfNewsAlreadySaved = state.saved_news.some(
    (item) => item.url === url
  )
    ? 'text-primary-light'
    : 'text-gray-500';

  return (
    <article className={articleStyle[type]}>
      <div className={div1Style[type]}>
        <div className={div2Style[type]} role='button' onClick={goToNews}>
          <img className={img(urlToImage)} src={urlToImage} alt={title} />
          <FaSearch className={faSearchStyle.style(type)} />
        </div>
        <Button className={buttonStyle.style(type)} onClick={bookmarkToggler}>
          <FaBookmark
            size={size}
            className={`absolute right-1.5 text-md top-1.5 ${checkIfNewsAlreadySaved}`}
          />
        </Button>
      </div>
      <dl
        className={`${dlStyle[type]}${justifyFixed[type]}${specialStyle[type]}`}
        role='button'
        onClick={goToNews}
      >
        <dt className={dtStyle.style(type)}>{truncate(title, length)}</dt>
        <dd className='text-sm font-bold text-primary-dark'>
          {id || 'unknown'}
          <span className='font-medium text-text-gray'> - {name}</span>
        </dd>
      </dl>
    </article>
  );
}

export default NewsItem;
