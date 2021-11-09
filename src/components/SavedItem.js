function SavedItem({ index, source: { id, name }, title, description, url }) {
  return (
    <tr className={index % 2 === 0 ? 'bg-text-light' : 'bg-white'}>
      <td className='pl-5'>
        <p>{`${id || 'unknown'} - ${name}`}</p>
        <a
          href={url}
          className='font-semibold underline text-primary-dark'
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
