'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';

const SwiperHero = ({ bannerImages }: { bannerImages: StaticImageData[] }) => {
  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper z-0">
        {bannerImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt="Hero banner"
              width={1082}
              height={440}
              quality={100}
              className="mb-0 sm:mb-10 w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperHero;
