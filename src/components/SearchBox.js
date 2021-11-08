import { useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { SET_QUERY_SEARCH, TOGGLE_NAVBAR } from '../actions';
import { useNewsContext } from '../context/news_context';

function SearchBox() {
  const [state, dispatch] = useNewsContext();
  const { pages } = state;
  const [text, setText] = useState('');
  const searchInput = useRef(null);
  let history = useHistory();

  const searchButton = (event) => {
    if (event.key === 'Enter' || event['type'] === 'click') {
      history.push(`/search/${text}`);
      dispatch({ type: SET_QUERY_SEARCH, payload: text });
      dispatch({ type: TOGGLE_NAVBAR, payload: -1 });
    }
  };

  useEffect(() => {
    searchInput.current.focus();
  }, [pages]);

  return (
    <section className='relative py-16 bg-none'>
      <div className='relative w-10/12 h-auto mx-auto'>
        <input
          className='min-w-full px-8 py-4 rounded-full shadow-md outline-none'
          type='text'
          placeholder='Search News'
          ref={searchInput}
          value={text}
          onKeyPress={searchButton}
          onChange={(e) => setText(e.target.value)}
        />
        <button className='absolute right-8 top-3' onClick={searchButton}>
          <FaSearch size='2rem' className='text-primary-light' />
        </button>
      </div>
    </section>
  );
}

export default SearchBox;
