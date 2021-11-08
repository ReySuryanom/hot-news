import { Loading, SavedItem } from '../components';
import { useFetch } from '../hook/useFetch';
import { formattedNews } from '../utils/helpers';

function Saved() {
  const { news, isLoading } = useFetch();

  if (isLoading) return <Loading />;

  const mergedArray = formattedNews(news);

  return (
    <section className='py-12 bg-white px-28'>
      <table className='w-full '>
        <thead className='text-2xl border-b-2 border-primary-light'>
          <tr className='text-left'>
            <th className='w-3/12 p-2'>Source</th>
            <th className='w-4/12 p-2'>Title</th>
            <th className='w-5/12 p-2'>Description</th>
          </tr>
        </thead>
        <tbody>
          {mergedArray[0].map((item, index) => (
            <SavedItem key={item.url} index={index} {...item} />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Saved;
