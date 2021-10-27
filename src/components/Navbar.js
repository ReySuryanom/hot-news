function Navbar() {
  return (
    <nav className='flex justify-between px-8 py-5 bg-gradient-to-r from-primary-dark to-primary-light'>
      <h1>HotNews.</h1>
      <div>
        <ol className='flex space-x-7'>
          <li>Indonesia</li>
          <li>Programming</li>
          <li>Covid-19</li>
          <li>Saved</li>
          <li>
            <button></button>
          </li>
        </ol>
      </div>
    </nav>
  );
}

export default Navbar;
