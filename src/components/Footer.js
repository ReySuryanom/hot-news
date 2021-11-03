import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='flex justify-around p-16 text-lg text-white bg-primary-dark'>
      <div className='self-center text-center'>
        <h4 className='mb-4 text-xl font-extrabold'>HotNews.</h4>
        <div className='flex justify-between w-40 text-3xl'>
          <button>
            <FaFacebook />
          </button>
          <button>
            <FaInstagram />
          </button>
          <button>
            <FaTwitter />
          </button>
          <button>
            <FaYoutube />
          </button>
        </div>
      </div>
      <div>
        <h4 className='text-xl font-extrabold'>Kategori</h4>
        <ul>
          <li>News</li>
          <li>Edukasi</li>
          <li>Programming</li>
          <li>Teknologi</li>
          <li>Entertainment</li>
          <li>Sport</li>
          <li>SepakBola</li>
          <li>Otomotif</li>
        </ul>
      </div>
      <div>
        <h4 className='text-xl font-extrabold'>Jaringan Media</h4>
        <ul>
          <li>CNN Indonesia</li>
          <li>CNBC Indonesia</li>
          <li>Haibunda</li>
          <li>Insertlive</li>
          <li>Beautynesia</li>
          <li>Female Daily</li>
        </ul>
      </div>
      <div>
        <h4 className='text-xl font-extrabold'>Informasi</h4>
        <ul>
          <li>Redaksi</li>
          <li>Pedoman Media Siber</li>
          <li>Karir</li>
          <li>Kotak Pos</li>
          <li>Media Partner</li>
          <li>Info Iklan</li>
          <li>Privacy Policy</li>
          <li>Disclaimer</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
