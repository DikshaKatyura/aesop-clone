import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-fade';


import {Scrollbar,Navigation } from "swiper/modules";
import Button from "./Button";
const ImageTextBlock = (props) => {
  return (
    <section className="pt-[150px]">
      <div className={`flex md:flex-wrap  ${props.even ? 'md:flex-row-reverse flex-col-reverse' :'md:flex-row flex-col'} box-border justify-start`}>
        <div className={` ${props.even ? 'md:pl-[8.3333%]' : 'md:pr-[8.3333%]'} md:w-2/3 ` }>
          {props.img && <img
            src={props.img}
            className="w-full"
            alt="A texture shot of two products together"
            loading="lazy"
          />}
          {props.vid && <video className="w-full mb-[100px] lg:mb-0" autoPlay loop muted>
            <source src={props.vid} type="video/mp4"/>
            </video>}
            {props.carousal && <Swiper
          scrollbar={true}
          navigation={true}
          modules={[Navigation,Scrollbar]}
          className="mySwiper"
        >
          {props.carousal.map((item)=>{
            return <SwiperSlide key={Math.random()}>
              <img className="h-full w-full" src={item.img} alt="store images" />
            </SwiperSlide>
          })}
        </Swiper>}
        </div>
        <aside className={` ${props.even ? 'lg:pl-20 pl-4' : 'lg:pr-20 pr-4'} md:w-1/3 text-offBlack px-8 lg:px-0 py-8 md:py-0`}>
          <article>
            <header className="mb-[30px]">
              <h2 className="lg:text-3xl md:text-xl leading-snug">{props.title}</h2>
            </header>
            <div>
              <p className="lg:text-base text-sm lg:leading-7">
                {props.desc}
              </p>
              <Button btn = {props.btn}/>
            </div>
          </article>
        </aside>
      </div>
    </section>
  );
};

export default ImageTextBlock;
