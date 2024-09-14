import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface CardDataProp {
  icon: string;
  title: string;
  description: string;
}
const TaskCard = ({ icon, title, description }: CardDataProp) => {
  return (
    <div>
      <div className="max-w-[280px] lg:max-w-[220px] flex flex-col gap-5">
        <div className="flex gap-5 items-center">
          <div className="w-10 h-10 bg-blueMedium flex justify-center items-center rounded-full">
            <Image src={icon} alt="Pencil icon" width={20} height={20} />
          </div>

          <h2 className="text-[15px] font-bold leading-5">{title}</h2>
        </div>

        <p className="text-[13px]">{description}</p>

        <Link href="/" className="flex items-center">
          <ChevronRight className="w-3 h-3 mr-1" /> <p className="text-[13px] text-blueMedium">Read More</p>
        </Link>
      </div>
    </div>
  );
};

export default TaskCard;
