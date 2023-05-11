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
  date: number,
  month: number
}

const FlipSwiper = ({ dayOfWeek, days, date, month }: SwiperProps) => {
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
            date={date}
            month={month}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default FlipSwiper;
