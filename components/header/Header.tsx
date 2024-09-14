import Link from 'next/link';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';

const Header = () => {
  return (
    <section className="flex justify-between py-9 px-5 lg:px-[100px] xl:px-[200px] bg-[#e8ebf1]">
      <Link href="/" className="md:translate-y-2">
        <h1 className="text-[50px] leading-5 font-black font-lato">
          Bis<span className="font-normal text-[#2aacc8]">Lite</span>
        </h1>
      </Link>

      {/* Navbar for desktop */}
      <Navbar />

      {/* Navbar for mobile */}
      <NavbarMobile />
    </section>
  );
};

export default Header;
