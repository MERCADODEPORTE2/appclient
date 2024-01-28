import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import imgPc from "../../assets/my-project-1-1.webp";
import imgTB from "../../assets/imgTablet_1.webp";
import imgMov1 from "../../assets/imgcel1.webp";
import imgMov2 from "../../assets/imgcel2_1.webp";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carousel.css";

export default function Carousel() {
  SwiperCore.use([Autoplay]);
  return (
    <div className="containerCar">
      <div className="carri">
        <Swiper
          slidesPerView={1}
          // spaceBetween={30}
          pagination={true}
          scrollbar={{ draggable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {
            <SwiperSlide>
              <img src={imgPc} alt="img medias" loading="lazy" />
            </SwiperSlide>
          }
        </Swiper>
      </div>
      <div className="tablet">
        <Swiper
          slidesPerView={1}
          // spaceBetween={30}
          pagination={true}
          scrollbar={{ draggable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {
            <SwiperSlide>
              <img src={imgTB} alt="img tablet medias" loading="lazy" />
            </SwiperSlide>
          }
        </Swiper>
      </div>
      <div className="movilMovil">
        <Swiper
          slidesPerView={1}
          // spaceBetween={30}
          pagination={true}
          scrollbar={{ draggable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          <SwiperSlide>
            <img src={imgMov1} alt="img movil medias" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgMov2} alt="img movil medias" loading="lazy" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
