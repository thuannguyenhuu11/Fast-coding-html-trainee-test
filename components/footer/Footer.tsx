import Link from 'next/link';
import Image from 'next/image';
import FacebookIcon from '@/public/icons/facebook-icon.svg';
import DribbleIcon from '@/public/icons/dribble-icon.svg';
import PinterestIcon from '@/public/icons/pinterest-icon.svg';
import LinkedinIcon from '@/public/icons/linkedin-icon.svg';
import SkypeIcon from '@/public/icons/skype-icon.svg';
import ShareIcon from '@/public/icons/share-icon.svg';

const exploreTag = ['Home', 'About Us', 'Services', 'Portfolio', 'Blog'];
const browseTag = ['Careers', 'Press & Media', 'Contact Us', 'Terms of Service', 'Privacy Policy'];
const socialIcon = [FacebookIcon, DribbleIcon, PinterestIcon, LinkedinIcon, SkypeIcon, ShareIcon];

const Footer = () => {
  return (
    <div className="bg-greyPrimary px-5 py-9 lg:px-[100px] xl:px-[200px]">
      <div className="flex flex-col md:flex-row md:flex-wrap lg:justify-between gap-10 lg:gap-0">
        <div className="flex flex-col max-w-[241px] gap-5">
          <h2 className="text-[15px] leading-5 font-bold">ABOUT US</h2>
          <p className="text-[14px] leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod placerat dui et tincidunt. Sed
            sollicitudin posuere auctor. Phasellus at ultricies nisl. Integer at leo eros. Ut nec lorem id orci
            convallis porta. Donec pharetra neque eu velit dictum molestie.{' '}
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-[15px] leading-5 font-bold">EXPLORE</h2>
          <ul className="flex md:flex-col gap-2">
            {exploreTag.map((tag, index) => (
              <Link href="/" key={index} className="text-[14px] leading-5">
                {tag}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-[15px] leading-5 font-bold">BROWSE</h2>
          <ul className="flex flex-col gap-2">
            {browseTag.map((tag, index) => (
              <Link href="/" key={index} className="text-[14px] leading-5">
                {tag}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-[15px] leading-5 font-bold">CONTACT US</h2>
          <div className="text-[14px] leading-5">
            <p className="font-bold">BisLite Inc.</p>
            <p>Always Street 265</p>
            <p>0X - 125 - Canada</p>
          </div>

          <div className="text-[14px] leading-5">
            <p>Phone: 987-6543-210</p>
            <p>Fax: 987-6543-210</p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-[15px] leading-5 font-bold">CONNECT WITH US</h2>

          <div className="flex flex-wrap max-w-[193px] gap-4">
            {socialIcon.map((icon, index) => (
              <Link href="/" key={index}>
                <Image src={icon} alt="Social Icon" width={53} height={51} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10">
        <div className="text-[13px] leading-[18px] max-w-[340px]">
          <p>© Copyright 2021. All rights reserved. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <Link href="/" className="mt-10 md:mt-0  hidden md:flex">
          <h1 className="text-[50px] leading-5 font-black font-lato">
            Bis<span className="font-normal text-[#2aacc8]">Lite</span>
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
