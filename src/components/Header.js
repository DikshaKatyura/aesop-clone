import searchmob from '../assets/icons/searchMob.png';
import search from '../assets/icons/search.png';
import heart from '../assets/icons/heart.png';
import menu from '../assets/icons/main-menu.png';

const Header = () => {
  return (
    <header>
      <div className="bg-[#c2c2af] py-2.5 px-5 text-center ">
        <p className="text-sm text-[#333] leading-6">
          Trained Aesop consultants are available to provide bespoke skin care
          advice.
          <span className="ml-2">
            <a
              href="/"
              className="font-bold text-sm leading-6 cursor-pointer hover:underline"
            >
              Book a video consultation
            </a>
          </span>
        </p>
      </div>
      <div className="bg-[#252525] text-offWhite text-center pt-3 pb-2 px-5">
        <button className="hover:underline decoration-white cursor-pointer leading-6">
          Click and Collect is now available in Hong Kong. Enjoy complimentary
          shipping on orders over $400.
          <span className="text-lg text-offWhite ml-4">+</span>
        </button>
      </div>

      <div className="hidden lg:flex capitalize justify-between h-20 items-center px-5 bg-offWhite">
        <nav>
          <ul className="flex xl:gap-x-4 gap-x-3 font-semibold items-center">
            <li>
              <a href="/" className="cursor-pointer p-1 text-sm text-offBlack">
                skin care
              </a>
            </li>
            <li>
              <a href="/" className="cursor-pointer p-1 text-sm text-offBlack">
                body & hand
              </a>
            </li>
            <li>
              <a href="/" className="cursor-pointer p-1 text-sm text-offBlack">
                hair
              </a>
            </li>
            <li>
              <a href="/" className="cursor-pointer p-1 text-sm text-offBlack">
                fragrance
              </a>
            </li>
            <li>
              <a href="/" className="cursor-pointer p-1 text-sm text-offBlack">
                home
              </a>
            </li>
            <li>
              <a href="/" className="cursor-pointer p-1 text-sm text-offBlack">
                kits & travel
              </a>
            </li>
            <li>
              <a href="/" className="cursor-pointer p-1 text-sm text-offBlack">
                gifts
              </a>
            </li>
            <li>
              <a href="/" className="cursor-pointer p-1 text-sm text-offBlack">
                read
              </a>
            </li>
            <li>
              <a href="/" className="cursor-pointer p-1 text-sm text-offBlack">
                stores
              </a>
            </li>
            <li>
              <a href="/" className="cursor-pointer p-1 text-sm text-offBlack">
                facial appointments
              </a>
            </li>
            <li>
              <a href="/" className="cursor-pointer p-1 text-sm text-offBlack">
                <img src={search} alt="search" />
              </a>
            </li>
          </ul>
        </nav>
        <ul className="flex lg:gap-x-4 gap-x-3 font-semibold">
          <li>
            <a href="/" className="cursor-pointer p-1 text-sm text-offBlack">
              log in
            </a>
          </li>
          <li>
            <a href="/" className="cursor-pointer p-1 text-sm text-offBlack">
              cabinet
            </a>
          </li>
          <li>
            <a href="/" className="cursor-pointer p-1 text-sm text-offBlack">
              cart
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-transparent lg:hidden flex absolute z-[999] w-full justify-between p-5 items-center">
        <h3 className='text-xl text-offWhite'>Aesop</h3>
        <div>
          <ul className='flex justify-between items-center gap-x-8 text-offWhite'>
            <li><img src={searchmob} alt="search btn" /></li>
            <li><img src={heart} alt="fav" /></li>
            <li>cart</li>
            <li><img src={menu} alt="menu" /></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
