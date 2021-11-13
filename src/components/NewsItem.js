import { FaBookmark, FaSearch } from 'react-icons/fa';
import { truncatingText } from '../utils/helpers';
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
  imgStyle,
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

  const toggleBookmark = () => {
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

  const openNewsSource = () => window.open(url, '_blank');

  const isNewsAlreadySaved = state.saved_news.some((item) => item.url === url)
    ? 'text-primary-light'
    : 'text-gray-500';

  return (
    <article className={articleStyle[type]}>
      <div className={div1Style[type]}>
        <div className={div2Style[type]} role='button' onClick={openNewsSource}>
          <img className={imgStyle(urlToImage)} src={urlToImage} alt={title} />
          <FaSearch className={faSearchStyle.style(type)} />
        </div>
        <Button className={buttonStyle.style(type)} onClick={toggleBookmark}>
          <FaBookmark
            size={size}
            className={`absolute right-1.5 text-md top-1.5 ${isNewsAlreadySaved}`}
          />
        </Button>
      </div>
      <dl
        className={`${dlStyle[type]}${justifyFixed[type]}${specialStyle[type]}`}
        role='button'
        onClick={openNewsSource}
      >
        <dt className={dtStyle.style(type)}>{truncatingText(title, length)}</dt>
        <dd className='text-sm font-bold text-primary-dark'>
          {id || 'unknown'}
          <span className='font-medium text-text-gray'> - {name}</span>
        </dd>
      </dl>
    </article>
  );
}

export default NewsItem;
