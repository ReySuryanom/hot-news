import {
  SET_LOADING,
  SET_QUERY_SEARCH,
  TOGGLE_NAVBAR,
} from '../reducer/actions';
import { useNewsContext } from '../context/newsContext';
import { footerlists, iconlists } from '../utils/constants';
import { Link } from 'react-router-dom';

function Footer() {
  const [state, dispatch] = useNewsContext();
  const { isLoading, saved_news, pages } = state;

  // For styling purpose
  const areNotInSavedPage = saved_news.length === 0 && pages === 3;
  const footerStyle = `flex w-full justify-around p-16 text-lg text-white bg-primary-dark ${
    (isLoading || areNotInSavedPage) && 'fixed bottom-0'
  }`;

  // Pergi ke berita dan route sesuai list yang diklik pengguna
  const applyQuery = (list) => {
    dispatch({ type: SET_LOADING, payload: true });
    dispatch({ type: SET_QUERY_SEARCH, payload: list });
    dispatch({ type: TOGGLE_NAVBAR, payload: -1 });
  };

  return (
    <footer className={footerStyle}>
      <div className='self-center text-center'>
        <h4 className='mb-4 text-xl font-extrabold'>HotNews.</h4>
        <div className='flex justify-between w-40 text-3xl'>
          {iconlists.map(({ link, icon }) => (
            <a href={link} key={link} target='_blank' rel='noreferrer'>
              {icon}
            </a>
          ))}
        </div>
      </div>
      {footerlists.map(({ header, lists }) => (
        <div className='hidden lg:block' key={header}>
          <h4 className='text-xl font-extrabold'>{header}</h4>
          <ul>
            {lists.map((query) => (
              <li key={query}>
                <Link to={`/search/${query}`} onClick={() => applyQuery(query)}>
                  {query}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
}

export default Footer;
