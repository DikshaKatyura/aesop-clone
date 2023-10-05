import img from "../assets/pictures/banner11.avif";

const SectionOne = () => {
  return (
    <>
      <section className="relative">
        <img
          className="bg-center bg-cover"
          src={img}
          alt="shape of aesop fragrance placed on dark red background"
        />
        <div className="flex w-bannerText basis-auto mr-auto ml-[16.667%] absolute top-0">
          <div className="relative right-56 pt-28">
            <p className="text-5xl ">Aesop</p>
          </div>
          <div className="pt-28 pb-[180px] text-offWhite">
            <header className="flex flex-col">
              <div>
                <h3 className="text-sm leading-7 mb-4">Embers unfurling</h3>
                <h2 className="text-3xl leading-5 mb-4">
                  Ouranon Eau de Parfum
                </h2>
              </div>
              <p className="text-base leading-7 mb-[30px]">
                A fragrance that evokes a silent monolith, the last vestige of a
                stone circle whose meaning has been lost to time—earthy
                minerality commingling with Frankincense, Hay and Myrrh.
              </p>
              <div className="w-btn border-box ">
                <a
                  className="border border-solid border-offWhite py-5 px-6 inline-block text-sm leading-6 h-15"
                  href="/"
                >
                  Discover the fragrance
                </a>
              </div>
            </header>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionOne;
