import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import {Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const TourType = () => {
  return (
    <div>
      <SectionTitle heading="Tour Types" subHeading="Choosing Your Tour Type" />
      <div>
        {/* <img src="https://swiperjs.com/demos/images/nature-8.jpg" /> */}
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination,Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-36 cursor-pointer h-36 rounded-full bg-red-500 text-white text-center">
              <h1>Hello</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-36 h-36 rounded-full bg-red-500 text-white text-center">
              <h1>Hello</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-36 h-36 rounded-full bg-red-500 text-white text-center">
              <h1>Hello</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-36 h-36 rounded-full bg-red-500 text-white text-center">
              <h1>Hello</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-36 h-36 rounded-full bg-red-500 text-white text-center">
              <h1>Hello</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-36 h-36 rounded-full bg-red-500 text-white text-center">
              <h1>Hello</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TourType;
