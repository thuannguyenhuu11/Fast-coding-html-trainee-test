import Image from 'next/image';
import ArrowIcon from '@/public/icons/arrow-icon.svg';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TaskImage from '@/public/task-image.png';
import LemonImage from '@/public/lemon-image.png';
import ShapeImage from '@/public/shape-image.png';
import TargetImage from '@/public/target-image.png';

const workImage = [TaskImage, LemonImage, ShapeImage, TargetImage];

const LatestWork = () => {
  return (
    <section className="">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image src={ArrowIcon} alt="Arrow icon" width={20} height={20} />
          <h2 className="ml-[25px] text-[15px] leading-5 font-bold">LATEST WORK</h2>
        </div>

        <div className="flex gap-[10px]">
          <button title="left" className="h-5 w-5 bg-blueLight rounded-full flex justify-center items-center">
            <ChevronLeft />
          </button>

          <button title="right" className="h-5 w-5 bg-blueLight rounded-full flex justify-center items-center">
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="bg-greySecondary w-full h-[2px] my-5"></div>

      <div className="flex flex-col sm:flex-row gap-2 flex-wrap justify-between items-center">
        {workImage.map((image, index) => (
          <Image
            src={image}
            alt="Work Image"
            width={220}
            height={160}
            key={index}
            quality={100}
            className="w-[300px] md:w-[160px]  xl:w-[220px]"
          />
        ))}
      </div>
    </section>
  );
};

export default LatestWork;
