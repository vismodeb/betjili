import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const BannerSlider = () => {
  // Create refs for navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="banner-slider relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // Assign the refs to Swiper's navigation
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-auto">
            <img
              className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-60 2xl:h-72"
              src="https://img.m156b.com/upload/announcement/image_168839.jpg"
              alt="Slide 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-auto">
            <img
              className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-60 2xl:h-72"
              src="https://img.m156b.com/upload/announcement/image_168843.jpg"
              alt="Slide 2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-auto">
            <img
              className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-60 2xl:h-72"
              src="https://img.m156b.com/upload/announcement/image_168825.jpg"
              alt="Slide 3"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-auto">
            <img
              className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-60 2xl:h-72"
              src="https://img.m156b.com/upload/announcement/image_168841.jpg"
              alt="Slide 4"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom navigation buttons with react-icons */}
      <div
        ref={nextRef}
        className=" absolute top-1/2 transform -translate-y-1/2 right-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-600 z-10"
      >
        <AiOutlineRight />
      </div>
      <div
        ref={prevRef}
        className=" absolute top-1/2 transform -translate-y-1/2 left-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-600 z-10"
      >
        <AiOutlineLeft />
      </div>
    </div>
  );
};

export default BannerSlider;
