// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="bg-zinc-800">
      <div className="pt-4">
        <p className="text-white text-base font-semibold ml-4 mb-3 pl-2 border-l-4 border-l-yellow-300">
          প্রিয়
        </p>
      </div>
      <Swiper
        spaceBetween={10}
        autoplay={{
          delay: 2900,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          640: { // for mobile devices (width up to 640px)
            slidesPerView: 1,
          },
          1024: { // for desktop devices (width from 1024px and above)
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <img
            src="https://img.m156b.com/upload/announcement/image_181957.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.m156b.com/upload/announcement/image_181952.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.m156b.com/upload/announcement/image_181957.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.m156b.com/upload/announcement/image_167063.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.m156b.com/upload/announcement/image_167120.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
