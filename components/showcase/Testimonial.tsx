import CommentIcon from '@/public/icons/comments-icon.svg';
import Image from 'next/image';
import Logo1 from '@/public/logos/logo1.png';
import Logo2 from '@/public/logos/logo2.png';
import Logo3 from '@/public/logos/logo3.png';
import Logo4 from '@/public/logos/logo4.png';
import Logo5 from '@/public/logos/logo5.png';
import Logo6 from '@/public/logos/logo6.png';

const clientLogo = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

const Testimonial = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="flex flex-col md:max-w-[320px] lg:max-w-[425px]">
        <div className="flex items-center">
          <Image src={CommentIcon} alt="Arrow icon" width={20} height={20} />
          <h2 className="ml-[25px] text-[15px] leading-5 font-bold">LATEST WORK</h2>
        </div>

        <p className="mt-5 text-[14px] leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut nulla sapien, at aliquam erat. Sed vitae
          massa tellus. Aliquam commodo aliquam metus, sed iaculis nibh tempus id. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Etiam nec nisi in nisl euismod fringilla.
        </p>

        <i className="mt-10 text-[14px] font-bold">John Travis, CEO, DomainName.com</i>
      </div>

      <div className="flex flex-col mt-10 md:mt-0">
        <div className="flex items-center">
          <Image src={CommentIcon} alt="Arrow icon" width={20} height={20} />
          <h2 className="ml-[25px] text-[15px] leading-5 font-bold">OUR CLIENTS</h2>
        </div>

        <div className="mt-5 flex flex-wrap max-w-[320px]  xl:max-w-[485px]">
          {clientLogo.map((logo, index) => (
            <Image
              src={logo}
              key={index}
              alt="Client logo"
              width={160}
              height={100}
              quality={100}
              className="w-[120px]  md:w-[160px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
