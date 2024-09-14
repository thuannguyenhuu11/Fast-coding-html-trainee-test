import Image from 'next/image';
import LatestWork from './LatestWork';
import Testimonial from './Testimonial';
import DowloadIcon from '@/public/icons/download-icon.svg';

const ShowCase = () => {
  return (
    <section className="py-5 px-5 lg:px-[100px] xl:px-[200px] ">
      <LatestWork />

      <div className="bg-greySecondary w-full h-[2px] mt-10 mb-5"></div>

      <Testimonial />

      <div className="mt-10 p-10 bg-blueNormal border border-blueLight flex flex-col md:flex-row items-center justify-between gap-10 md:gap-5 lg:gap-0">
        <p className="text-[16px] leading-[26px] md:max-w-[400px] lg:max-w-[480px] xl:max-w-[613px]">
          This is a clean and modern, four column website PSD template. You can code it into a Wordpress website, HTML5
          responsive website for your personal or client works. So ahead and download this wonderful PSD template!{' '}
        </p>

        <button
          title="Dowload PSD"
          className="p-5 flex gap-5 rounded-lg border border-blueMedium bg-gradient-to-t from-[#29abc7] via-[#71d9e5] to-[#81e3ed] drop-shadow-[0_2px_1.5px_rgba(0,0,0,0.2)] shadow-[inset_0_2px_0.5px_rgba(255,255,255,0.1)]"
        >
          <Image src={DowloadIcon} alt="Download icon" width={20} height={20} />
          <p className="text-[14px lg:text-[18px] leading-5 text-[#0d0707] font-bold">DOWNLOAD PSD</p>
        </button>
      </div>
    </section>
  );
};

export default ShowCase;
