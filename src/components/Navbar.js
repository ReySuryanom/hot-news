import { Link } from 'react-router-dom';
import { TOGGLE_NAVBAR } from '../actions';
import { useProductsContext } from '../context/news_context';
import { pages } from '../utils/constants';

export default function Navbar() {
  const [state, dispatch] = useProductsContext();
  console.log(state);

  const toggleNavbar = (page) => {
    dispatch({ type: TOGGLE_NAVBAR, payload: page });
  };

  return (
    <nav className='flex justify-between px-12 py-5 text-white bg-gradient-to-r from-primary-dark to-primary-light'>
      <h1 className='text-2xl font-extrabold'>HotNews.</h1>
      <ul className='flex space-x-16 text-xl'>
        {pages.map(({ route, name }, index) => {
          const activePage = index === state.pages && 'special-list-active';

          return (
            <li className={`special-list ${activePage}`} key={index}>
              <Link to={route} onClick={() => toggleNavbar(index)}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
