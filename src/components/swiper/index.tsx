import { Swiper, SwiperSlide } from "swiper/react";
import Dashboard from "../dashboard";
import Days from "../days";

import "./Swiper.scss"
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFlip, Navigation } from "swiper";


type SwiperProps = {
  date: number
}

const FlipSwiper = ({ date }: SwiperProps) => {
  return (
    <section className="container__swiper">
      <Swiper
        effect={"flip"}
        grabCursor={false}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="slide">
          <Dashboard day={date} />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <Days />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default FlipSwiper;
