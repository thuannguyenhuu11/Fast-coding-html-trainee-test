'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const navbarTag = ['HOME', 'ABOUT US', 'SERVICE', 'PORTFOLIO', 'BLOG', 'CONTACT US'] as const;
const subNavbarTag = [
  'Web Design',
  'Wordpress Design',
  'Mobile App Development',
  'Internet Marketing',
  'Social Media Management',
];
const portfolioSubNavTags = [
  'Web Design',
  'Wordpress Design',
  'Mobile App Development',
  'Internet Marketing',
  'Social Media Management',
];

type NavbarTag = (typeof navbarTag)[number];

const dropdownContent: Partial<Record<NavbarTag, string[]>> = {
  SERVICE: subNavbarTag,
  PORTFOLIO: portfolioSubNavTags,
};

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState('');

  return (
    <div className="justify-center items-center lg:gap-5 xl:gap-10 mr-2 z-20 hidden md:flex">
      {navbarTag.map((tag, index) => {
        const isDropdownOpen = openDropdown === tag;
        const hasDropdown = dropdownContent[tag];

        const isSpecialTag = tag === 'SERVICE' || tag === 'PORTFOLIO';
        const activeClass = isSpecialTag && isDropdownOpen ? 'bg-white text-blueMedium !border-t-blueMedium' : '';

        return (
          <div
            key={index}
            className="flex flex-col relative"
            onMouseEnter={() => setOpenDropdown(tag)}
            onMouseLeave={() => setOpenDropdown('')}
          >
            <Link
              href="/"
              className={`p-3 text-[13px] leading-5 font-bold border-t-[4px] border-t-greyPrimary ${activeClass} `}
            >
              <p className="flex items-center">
                {tag} {hasDropdown && <ChevronDown className="h-3 w-3 ml-1" />}
              </p>
            </Link>

            {/* Dropdown when hover */}
            {isDropdownOpen && hasDropdown && (
              <div className="absolute top-12 left-0 bg-white text-black p-3 rounded shadow-lg min-w-[200px] flex flex-col border-b-4 border-b-blueMedium">
                {hasDropdown.map((subTag, index) => (
                  <Link
                    href="/"
                    key={index}
                    className={`p-2 text-[13px] font-normal leading-5 hover:text-blueMedium ${
                      index === hasDropdown.length - 1 ? '' : 'border-b border-b-greyPrimary'
                    }`}
                  >
                    {subTag}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
