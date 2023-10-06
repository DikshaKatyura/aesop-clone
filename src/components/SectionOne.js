import { useRef, useCallback, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import banner1 from "../assets/pictures/banner1.avif";
import banner2 from "../assets/pictures/banner2.avif";
import bannerImg from "../assets/pictures/banner2_img.webp";
import banner3 from "../assets/pictures/banner3.avif";
import next from "../assets/icons/next.png";
import pause from "../assets/icons/pause.png";
import play from "../assets/icons/play-buttton.png";
import Button from "../ui/Button";

const SectionOne = () => {
  const [pauseBtn, setPause] = useState(false);
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const updateIndex = useCallback(
    () => setCurrentSlide(sliderRef.current.swiper.realIndex),
    []
  );
  useEffect(() => {
    const swiperInstance = sliderRef.current.swiper;

    if (swiperInstance) {
      swiperInstance.on("slideChange", updateIndex);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", updateIndex);
      }
    };
  }, [updateIndex]);

  const prevSlide = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const nextSlide = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const pauseSlide = useCallback(() => {
    if (!pauseBtn) {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.autoplay.stop();
    } else {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.autoplay.start();
    }
    setPause(!pauseBtn);
  }, [pauseBtn]);
  return (
    <div className="lg:h-[64vh] h-[34vh] relative lg:mb-[40px]">
      <div className="flex lg:gap-x-[36px] gap-x-[15px] z-[99999] absolute xl:left-[48.1%] lg:left-[46.8%] left-[7%] bottom-[-37px]">
        <span className="cursor-pointer" onClick={prevSlide}>
          <img src={next} className="rotate-180" alt="prev button" />
        </span>
        <span className="cursor-pointer" onClick={nextSlide}>
          <img src={next} alt="next button" />
        </span>
        <span className="cursor-pointer" onClick={pauseSlide}>
          {pauseBtn ? (
            <img src={play} alt="play button" />
          ) : (
            <img src={pause} alt="pause button" />
          )}
        </span>
      </div>
      <Swiper
        ref={sliderRef}
        pagination={{
          clickable: true,
          type: "fraction",
        }}
        loop="true"
        effect={"fade"}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="relative flex flex-col lg:flex-row">
            <div>
            <img
              className="lg:h-[64vh] h-[34vh] w-[100vw] object-cover object-right"
              src={banner1}
              alt="shape of aesop fragrance placed on dark red background"
            />

            </div>
            <div className="flex text-offWhite lg:w-bannerText basis-auto mr-auto lg:ml-[7.667%] lg:absolute top-0 bg-[#5b3e45] lg:bg-transparent px-8 xl:px-0">
              <div className="relative hidden lg:block right-24 pt-28">
                <p className="text-5xl ">Aesop</p>
              </div>
              <div className="lg:pt-28 lg:pb-[180px] pt-10 pb-[90px] ">
                <header className="flex flex-col">
                  <div>
                    <h3 className="text-sm leading-7 mb-4">Embers unfurling</h3>
                    <h2 className="text-3xl  mb-4">
                      Ouranon Eau de Parfum
                    </h2>
                  </div>
                  <p className="text-base leading-7">
                    A fragrance that evokes a silent monolith, the last vestige
                    of a stone circle whose meaning has been lost to time—earthy
                    minerality commingling with Frankincense, Hay and Myrrh.
                  </p>
                  <Button btn={'Discover the fragrance'} home={true}/>
                </header>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="relative">
          <div>
          <img
              className="lg:h-[64vh] h-[34vh] w-[100vw] object-cover object-right"
              src={banner2}
              alt="shape of aesop fragrance placed on dark red background"
            />
          </div>
            

            {currentSlide === 1 && (
              <div
                id="extra"
                className="w-[29%] h-[21%] absolute right-0 top-60 lg:top-[25.5rem] xl:top-[8.5rem] bottom-[5.625rem]"
              >
                <img src={bannerImg} alt="some products" />
              </div>
            )}
            <div className="flex text-offWhite lg:w-bannerText basis-auto mr-auto lg:ml-[7.667%] lg:absolute top-0 bg-[#5b3e45] lg:bg-transparent px-8 xl:px-0">
              <div className="relative hidden lg:block right-24 pt-28">
                <p className="text-5xl ">Aesop</p>
              </div>
              <div className="lg:pt-28 lg:pb-[180px] pt-10 pb-[90px] ">
                <header className="flex flex-col">
                  <div>
                    <h3 className="text-sm leading-7 mb-4">
                      Hand and Body Care
                    </h3>
                    <h2 className="text-3xl  mb-4">Buoyant bodies</h2>
                  </div>
                  <p className="text-base leading-7">
                    Three joyful elements of bathing—cleansing, scrubbing and
                    hydrating—are facilitated by formulations boasting a variety
                    of benefits and aromas, ensuring optimal satisfaction for
                    all.
                  </p>
                  <Button btn={'Discover Body & Hand Care'} home={true}/>
                
                </header>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="relative">
            <div className="lg:grid flex flex-col-reverse grid-cols-2 relative">
              <div className="bg-offWhite">
                <div className="flex lg:w-bannerText text-offBlack basis-auto mr-auto lg:ml-[7.667%] lg:absolute top-0 px-8 xl:px-0">
                  <div className="relative hidden lg:block right-24 pt-28">
                    <p className="text-5xl ">Aesop</p>
                  </div>
                  <div className="lg:pt-28 lg:pb-[180px] pt-10 pb-[90px] ">
                    <header className="flex flex-col">
                      <div>
                        <h3 className="text-sm leading-7 mb-4">
                        Supporting city skin
                        </h3>
                        <h2 className="text-3xl  mb-4">
                        Parsley Seed Anti-Oxidant Intense Serum
                        </h2>
                      </div>
                      <p className="text-base leading-7 ">
                      Explore how this anti-oxidant-rich serum hydrates, replenishes and fortifies the skin via a suite of ingredients selected with urban dwellers in mind.
                      </p>
                  <Button btn={'Discover the formulation'} />
                    </header>
                  </div>
                </div>
              </div>
              <div>
                <img
                  className="h-[34vh] lg:h-[64vh] w-full object-cover"
                  src={banner3}
                  alt="shape of aesop fragrance placed on dark red background"
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SectionOne;
