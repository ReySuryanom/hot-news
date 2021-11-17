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
  const { isLoading } = state;

  // For styling purpose
  const footerStyle = `flex w-full p-16 text-lg text-white md:flex-col lg:justify-center lg:flex-row md:items-center bg-primary-dark ${
    isLoading ? 'hidden' : 'block'
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
        <div className='flex justify-between w-48 text-3xl'>
          {iconlists.map(({ link, icon }) => (
            <a
              href={link}
              key={link}
              className='text-4xl transition-colors duration-300 ease-in-out hover:text-gray-300 focus:text-gray-300'
              target='_blank'
              rel='noreferrer'
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
      <section className='flex justify-around w-full lg:w-9/12 mt-14 lg:mt-0'>
        {footerlists.map(({ header, lists }) => (
          <div className='hidden md:block' key={header}>
            <h4 className='text-xl font-extrabold'>{header}</h4>
            <ul>
              {lists.map((query) => (
                <li key={query}>
                  <Link
                    to={`/search/${query}`}
                    className='transition-colors duration-300 ease-in-out hover:text-gray-300 focus:text-gray-300'
                    onClick={() => applyQuery(query)}
                  >
                    {query}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </footer>
  );
}

export default Footer;
