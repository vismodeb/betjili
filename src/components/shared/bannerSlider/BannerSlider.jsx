// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const BannerSlider = () => {
  return (
    <div>
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-auto">
            <img
              className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-60 2xl:h-72"
              src="https://img.m156b.com/upload/announcement/image_168839.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-auto">
            <img
              className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-60 2xl:h-72"
              src="https://img.m156b.com/upload/announcement/image_168843.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-auto">
            <img
              className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-60 2xl:h-72"
              src="https://img.m156b.com/upload/announcement/image_168825.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-auto">
            <img
              className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-60 2xl:h-72"
              src="https://img.m156b.com/upload/announcement/image_168841.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
