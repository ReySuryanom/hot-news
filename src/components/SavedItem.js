import { FaTrash } from 'react-icons/fa';
import { Button } from '.';

function SavedItem({
  index,
  source: { id, name },
  title,
  description,
  url,
  deleteNews,
}) {
  return (
    <tr className={index % 2 === 0 ? 'bg-text-light' : 'bg-white'}>
      <td>
        <Button
          className='my-3 ml-4 text-red-500 hover:text-red-700'
          onClick={() => deleteNews(url)}
        >
          <FaTrash />
        </Button>
      </td>
      <td className='pl-5'>
        <p>{`${id || 'unknown'} - ${name}`}</p>
        <a
          href={url}
          className='font-semibold hover:underline text-primary-dark'
          target='_blank'
          rel='noreferrer'
          role='button'
        >
          News Page
        </a>
      </td>
      <td className='pl-5 pr-12'>{title}</td>
      <td className='px-5 py-8'>{description}</td>
    </tr>
  );
}

export default SavedItem;
