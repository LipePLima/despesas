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
  dayOfWeek: number,
  days: string[]
  hour: number,
  minutes: number
}

const FlipSwiper = ({ dayOfWeek, days, hour, minutes }: SwiperProps) => {
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
          <Dashboard 
            day={dayOfWeek} 
            days={days}
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <Days 
            days={days}
            hour={hour}
            minutes={minutes}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default FlipSwiper;
