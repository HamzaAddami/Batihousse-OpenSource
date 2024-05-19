import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Section2 = () => {
  const navigationStyles = {
    color: 'primary',
  };

  const navigationHoverStyles = {
    color: 'primary',
  };

  return (
    <section id="font-family">
      <Swiper
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{ delay: 3000 }}
        className="h-screen"
      >
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              src="https://www.probuilding-maroc.com/wp-content/uploads/2018/05/exterieur33.jpg"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-white text-6xl font-bold max-sm:text-3xl">
                Bienvenue Chez Nous
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              src="https://www.probuilding-maroc.com/wp-content/uploads/2021/11/20210910_170119.jpg"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-white text-6xl font-bold max-sm:text-3xl">
                Découvrons Nos Services
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              src="https://www.probuilding-maroc.com/wp-content/uploads/2021/11/Pillet_HotelC_V1_Wip1bis.jpg"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-white text-6xl font-bold max-sm:text-3xl">
                Visiter Nos Projets
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: ${navigationStyles.color};
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: ${navigationHoverStyles.color};
        }
      `}</style>
    </section>
  );
};

export default Section2;
