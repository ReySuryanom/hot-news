import { useState } from 'react';
import { Link } from 'react-router-dom';
import { pages } from '../helper';

export default function Navbar() {
  const [page, setPage] = useState(0);

  return (
    <nav className='flex justify-between px-12 py-5 text-white bg-gradient-to-r from-primary-dark to-primary-light'>
      <h1 className='text-2xl font-extrabold'>HotNews.</h1>
      <ul className='flex space-x-16 text-xl'>
        {pages.map(({ route, name }, index) => {
          const activePage = index === page && 'special-list-active';

          return (
            <li className={`special-list ${activePage}`} key={index}>
              <Link to={route} onClick={() => setPage(index)}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
