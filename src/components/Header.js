const Header = () => {
  return (
    <>
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
      <div className="bg-[#252525] text-[#fffef2] text-center pt-3 pb-2 px-5">
        <button className="hover:underline decoration-white cursor-pointer leading-6">
          Click and Collect is now available in Hong Kong. Enjoy complimentary
          shipping on orders over $400.
          <span className="text-lg text-[#fffef2] ml-4">+</span>
        </button>
      </div>
      <div className="capitalize flex justify-between h-20 items-center px-5">
        <nav>

        <ul className="flex gap-x-2 font-semibold">
            <li>
                <a href="/" className="cursor-pointer p-1 text-sm text-[#333]">skin care</a>
            </li>
            <li>
                <a href='/' className="cursor-pointer p-1 text-sm text-[#333]">body & hand</a>
            </li>
            <li>
                <a href='/' className="cursor-pointer p-1 text-sm text-[#333]">hair</a>
            </li>
            <li>
                <a href='/' className="cursor-pointer p-1 text-sm text-[#333]">fragrance</a>
            </li>
            <li>
                <a href='/' className="cursor-pointer p-1 text-sm text-[#333]">home</a>
            </li>
            <li>
                <a href='/' className="cursor-pointer p-1 text-sm text-[#333]">kits & travel</a>
            </li>
            <li>
                <a href='/' className="cursor-pointer p-1 text-sm text-[#333]">gifts</a>
            </li>
            <li>
                <a href='/' className="cursor-pointer p-1 text-sm text-[#333]">read</a>
            </li>
            <li>
                <a href='/' className="cursor-pointer p-1 text-sm text-[#333]">stores</a>
            </li>
            <li>
                <a href='/' className="cursor-pointer p-1 text-sm text-[#333]">facial appointments</a>
            </li>
        </ul>
        </nav>
        <ul className="flex gap-x-2 font-semibold">
            <li>
                <a href='/' className="cursor-pointer p-1 text-sm text-[#333]">log in</a>
            </li>
            <li>
                <a href='/' className="cursor-pointer p-1 text-sm text-[#333]">cabinet</a>
            </li>
            <li>
                <a href='/' className="cursor-pointer p-1 text-sm text-[#333]">cart</a>
            </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
