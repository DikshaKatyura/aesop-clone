import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";




const Carousal = ({products,block,textBlock}) => {
  const width = window.innerWidth;
    return(
<section className="md:pt-[150px]  md:mx-20">
      {/* <aside className="mx-20 mb-[60px] text-3xl leading-snug mb-25">A superlative selection</aside> */}
      <div>
        <Swiper
          slidesPerView={4}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            1600:{
              slidesPerView:4,
              spaceBetween:30,
              slidesPerGroup:1,
            },
            1440: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
            768:{
              slidesPerView:2,
              spaceBetween:30,
              slidesPerGroup:1,
            },
            0:{
              slidesPerView:1,
              slidesPerGroup:1,
            }
          }}
          scrollbar={true}
          navigation={true}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          {/* ${textBlock && 'absolute top-[-27rem]'}  */}
          {width > '768' &&<SwiperSlide>
          <aside className={`${textBlock}  absolute text-offBlack`}>
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
                    className="flex"
                    href="/"
                  >
                   {block.btn}
                   <span className="pl-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

          </span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </aside>
          </SwiperSlide>}
          {products.map(item => {
            return <SwiperSlide key={Math.random()}>
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
        </Swiper>
      </div>
    </section>
    )
}

export default Carousal;