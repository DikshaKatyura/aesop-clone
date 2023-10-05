const Header = () => {
  return (
    <header>
      <div className="bg-[#252525] text-[#fffef2] text-center pt-3 pb-2 px-5">
        <button className="hover:underline decoration-white cursor-pointer leading-6">
          Click and Collect is now available in Hong Kong. Enjoy complimentary
          shipping on orders over $400.
          <span className="text-lg text-[#fffef2] ml-4">+</span>
        </button>
      </div>
      <div className="capitalize flex justify-between h-20 items-center px-5 bg-[#333]">
        <nav>
          <ul className="flex gap-x-4 font-semibold">
            <li>
              <a href="/" className="cursor-pointer p-1 text-sm text-offWhite">
                skin care
              </a>
            </li>
            <li>
              <a href="/" className="cursor-pointer p-1 text-sm text-offWhite">
                body & hand
              </a>
            </li>
            <li>
              <a href="/" className="cursor-pointer p-1 text-sm text-offWhite">
                hair
              </a>
            </li>
            <li>
              <a href="/" className="cursor-pointer p-1 text-sm text-offWhite">
                fragrance
              </a>
            </li>
            <li>
              <a href="/" className="cursor-pointer p-1 text-sm text-offWhite">
                home
              </a>
            </li>
            <li>
              <a href="/" className="cursor-pointer p-1 text-sm text-offWhite">
                kits & travel
              </a>
            </li>
            <li>
              <a href="/" className="cursor-pointer p-1 text-sm text-offWhite">
                gifts
              </a>
            </li>
            <li>
              <a href="/" className="cursor-pointer p-1 text-sm text-offWhite">
                read
              </a>
            </li>
            <li>
              <a href="/" className="cursor-pointer p-1 text-sm text-offWhite">
                stores
              </a>
            </li>
            <li>
              <a href="/" className="cursor-pointer p-1 text-sm text-offWhite">
                facial appointments
              </a>
            </li>
          </ul>
        </nav>
        <ul className="flex gap-x-4 font-semibold">
          <li>
            <a href="/" className="cursor-pointer p-1 text-sm text-offWhite">
              log in
            </a>
          </li>
          <li>
            <a href="/" className="cursor-pointer p-1 text-sm text-offWhite">
              cabinet
            </a>
          </li>
          <li>
            <a href="/" className="cursor-pointer p-1 text-sm text-offWhite">
              cart
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
