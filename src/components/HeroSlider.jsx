import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import offer1 from '../assets/offer1.png';
import offer2 from '../assets/offer2.png';
import offer3 from '../assets/offer3.png';
import offer4 from '../assets/offer4.png';


const HeroSlider = () => {
  const images = [
    offer1,
    offer2,
    offer3,
    offer4,
  ];

  return (
    <div className="relative w-full py-6 flex justify-center items-center">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-[93.5%] max-h-[450px] object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
