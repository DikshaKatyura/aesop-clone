import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

import prod6 from "../assets/products/prod6.avif";
import prod7 from "../assets/products/prod7.avif";
import prod8 from "../assets/products/prod8.avif";
import prod9 from "../assets/products/prod9.avif";
import prod10 from "../assets/products/prod10.avif";

const SectionFive = () =>{
return(
    <section className="pt-[150px]">
    <aside className="mx-20 mb-[60px] text-3xl leading-snug mb-25">Enduring aromas</aside>
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
                <a href="/">Marrakech Intense Eau de Parfum</a>
              </h5>
              <div className="text-sm">
              A raw, unorthodox fragrance
              </div>
            </div>
            <img src={prod6} alt="Marrakech Intense Eau de Parfum" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col-reverse items-center">
            <div className="text-center text-offBlack">
              <h5 className="font-bold hover:underline my-2.5 leading-7 text-sm">
                <a href="/">Hwyl Eau de Parfum</a>
              </h5>
              <div className="text-sm">An intriguing scent; a hint of eccentricity</div>
            </div>
            <img src={prod7} alt="Hwyl Eau de Parfum" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col-reverse items-center">
            <div className="text-center text-offBlack">
              <h5 className="font-bold hover:underline my-2.5 leading-7 text-sm">
                <a href="/">Tacit Eau de Parfum</a>
              </h5>
              <div className="text-sm">Crisp, green, citrus fragrance</div>
            </div>
            <img src={prod8} alt="Tacit Eau de Parfum" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col-reverse items-center">
            <div className="text-center text-offBlack">
              <h5 className="font-bold hover:underline my-2.5 leading-7 text-sm">
                <a href="/">Rōzu Eau de Parfum</a>
              </h5>
              <div className="text-sm">
              Floral, green and woody
              </div>
            </div>
            <img src={prod9} alt="Rōzu Eau de Parfum" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col-reverse items-center">
            <div className="text-center text-offBlack">
              <h5 className="font-bold hover:underline my-2.5 leading-7 text-sm">
                <a href="/">Marrakech Intense Parfum</a>
              </h5>
              <div className="text-sm">
              Perfectly suited for travel
              </div>
            </div>
            <img src={prod10} alt="Marrakech Intense Parfum" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
)
}

export default SectionFive;