import HeroBanner from '@/public/hero-banner.png';
import SwiperHero from './SwiperHero';

const bannerImages = [HeroBanner, HeroBanner, HeroBanner, HeroBanner];

const Hero = () => {
  return (
    <section className="bg-blueLight py-5 px-2 lg:px-[100px] xl:px-[200px] w-full">
      <SwiperHero bannerImages={bannerImages} />
    </section>
  );
};

export default Hero;
