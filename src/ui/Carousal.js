import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";




const Carousal = ({products,block}) => {
  console.log(products);
  console.log(block);
    return(
<section className="pt-[150px] ml-20 mr-20">
      {/* <aside className="mx-20 mb-[60px] text-3xl leading-snug mb-25">A superlative selection</aside> */}
      <div>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            1440: {
              slidesPerView: 4,
              slidesPerGroup: 1,
            },
          }}
          scrollbar={true}
          navigation={true}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
          <aside className={`text-offBlack`}>
          <article>
            <header className="mb-[9px] text-offBlack">
              <p className="mb-2.5 text-sm leading-7">{block.miniTitle}</p>
              <h2 className="text-3xl leading-snug mb-5">{block.title}</h2>
            </header>
            <div>
              <p className="text-sm leading-7">
                {block.para}
              </p>
              <div className="mt-[30px]">
                <div className="w-btn">
                  <a
                    className="inline-block"
                    href="/"
                  >
                   {block.btn}
                  </a>
                </div>
              </div>
            </div>
          </article>
        </aside>
          </SwiperSlide>
          {products.map(item => {
            return <SwiperSlide>
            <div className="flex flex-col-reverse items-center">
              <div className="text-center text-offBlack">
                <h5 className="font-bold hover:underline my-2.5 leading-7 text-sm">
                  <a href="/">{item.name}</a>
                </h5>
                <div className="text-sm">
               {item.desc} 
                </div>
              </div>
              <img src={item.img} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging.  " />
            </div>
          </SwiperSlide>
          })}
          {/* <SwiperSlide>
            <div className="flex flex-col-reverse items-center">
              <div className="text-center text-offBlack">
                <h5 className="font-bold hover:underline my-2.5 leading-7 text-sm">
                  <a href="/">Ouranon Eau de Parfum</a>
                </h5>
                <div className="text-sm">
                Woody, spicy, resinous 
                </div>
              </div>
              <img src={prod11} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging.  " />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse items-center">
              <div className="text-center text-offBlack">
                <h5 className="font-bold hover:underline my-2.5 leading-7 text-sm">
                  <a href="/">Gloam Eau de Parfum</a>
                </h5>
                <div className="text-sm">Floral, spicy, green </div>
              </div>
              <img src={prod12} alt="An amber bottle of Gloam Eau de Parfum alongside carton packaging. " />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse items-center">
              <div className="text-center text-offBlack">
                <h5 className="font-bold hover:underline my-2.5 leading-7 text-sm">
                  <a href="/">Eidesis Eau de Parfum </a>
                </h5>
                <div className="text-sm">Woody, spicy, ambery </div>
              </div>
              <img src={prod13} alt="An amber bottle of Gloam Eau de Parfum alongside carton packaging. " />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse items-center">
              <div className="text-center text-offBlack">
                <h5 className="font-bold hover:underline my-2.5 leading-7 text-sm">
                  <a href="/">Erémia Eau de Parfum</a>
                </h5>
                <div className="text-sm">
                A green, floral, citrus fragrance
                </div>
              </div>
              <img src={prod14} alt="An amber bottle of Gloam Eau de Parfum alongside carton packaging. " />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse items-center">
              <div className="text-center text-offBlack">
                <h5 className="font-bold hover:underline my-2.5 leading-7 text-sm">
                  <a href="/">Miraceti Eau de Parfum</a>
                </h5>
                <div className="text-sm">
                Resinous, woody, spicy fragrance
                </div>
              </div>
              <img src={prod15} alt="An amber bottle of Gloam Eau de Parfum alongside carton packaging. " />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse items-center">
              <div className="text-center text-offBlack">
                <h5 className="font-bold hover:underline my-2.5 leading-7 text-sm">
                  <a href="/">Karst Eau de Parfum</a>
                </h5>
                <div className="text-sm">
                Fresh, herbaceous, marine fragrance
                </div>
              </div>
              <img src={prod16} alt="An amber bottle of Gloam Eau de Parfum alongside carton packaging. " />
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </section>
    )
}

export default Carousal;