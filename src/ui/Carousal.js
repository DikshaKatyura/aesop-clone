import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

import prod1 from "../assets/products/prod1.avif";
import prod2 from "../assets/products/prod2.webp";
import prod3 from "../assets/products/prod3.avif";
import prod4 from "../assets/products/prod4.webp";
import prod5 from "../assets/products/prod5.webp";


const Carousal = (props) => {
    return(
<section className="pt-[150px]">
      <aside className="mx-20 mb-[60px] text-3xl leading-snug mb-25">A superlative selection</aside>
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
            <div className="flex flex-col-reverse items-center">
              <div className="text-center text-offBlack">
                <h5 className="font-bold hover:underline my-2.5 leading-7 text-sm">
                  <a href="/">Damascan Rose Facial Treatment</a>
                </h5>
                <div className="text-sm">
                  Leaves skin feeling supple, nourished
                </div>
              </div>
              <img src={prod1} alt="Damascan Rose Facial Treatment" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse items-center">
              <div className="text-center text-offBlack">
                <h5 className="font-bold hover:underline my-2.5 leading-7 text-sm">
                  <a href="/">Camellia Nut Facial Hydrating Cream</a>
                </h5>
                <div className="text-sm">For normal, dry or sensitive skin</div>
              </div>
              <img src={prod2} alt="Camellia Nut Facial Hydrating Cream" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse items-center">
              <div className="text-center text-offBlack">
                <h5 className="font-bold hover:underline my-2.5 leading-7 text-sm">
                  <a href="/">Fabulous Face Oil</a>
                </h5>
                <div className="text-sm">A botanically based hydrating oil</div>
              </div>
              <img src={prod3} alt="Fabulous Face Oil" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse items-center">
              <div className="text-center text-offBlack">
                <h5 className="font-bold hover:underline my-2.5 leading-7 text-sm">
                  <a href="/">Elemental Facial Barrier Cream</a>
                </h5>
                <div className="text-sm">
                  Protects skin with sustained finish
                </div>
              </div>
              <img src={prod4} alt="Elemental Facial Barrier Cream" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse items-center">
              <div className="text-center text-offBlack">
                <h5 className="font-bold hover:underline my-2.5 leading-7 text-sm">
                  <a href="/">Perfect Facial Hydrating Cream</a>
                </h5>
                <div className="text-sm">
                  Sumptuous, replenishing, matte finish
                </div>
              </div>
              <img src={prod5} alt="Perfect Facial Hydrating Cream" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    )
}

export default Carousal;