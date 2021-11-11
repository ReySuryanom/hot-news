import { Loading, SavedItem } from '../components';
import { useNewsContext } from '../context/news_context';

function Saved() {
  const [state] = useNewsContext();
  const { saved_news, isLoading } = state;

  if (isLoading) return <Loading />;
  const emptyMessage = (
    <tr>
      <td colSpan={3}>
        <p className='p-3 text-lg font-medium text-center text-gray-600'>
          Belum ada berita favorite, pilihlah berita favoritmu.
        </p>
      </td>
    </tr>
  );

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
          {saved_news.length !== 0
            ? saved_news.map((item, index) => (
                <SavedItem key={item.url} index={index} {...item} />
              ))
            : emptyMessage}
        </tbody>
      </table>
    </section>
  );
}

export default Saved;
