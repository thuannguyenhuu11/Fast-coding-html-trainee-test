'use client';
import { AlignJustify, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

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

const NavbarMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (tag: string) => {
    setOpenDropdown(openDropdown === tag ? null : tag);
  };

  return (
    <div className="md:hidden relative">
      <button title="Navbar" onClick={() => setOpenMenu(!openMenu)}>
        <AlignJustify />
      </button>
      {openMenu && (
        <div className="absolute left-[-100px] top-[21px] z-20 bg-white text-black p-3 rounded shadow-lg min-w-[120px]">
          {navbarTag.map((tag, index) => {
            const hasDropdown = dropdownContent[tag as NavbarTag];
            const isDropdownOpen = openDropdown === tag;

            return (
              <div key={index} className="relative">
                <button
                  onClick={() => hasDropdown && toggleDropdown(tag)}
                  className={`w-full text-left pb-2 text-[13px] leading-5 font-bold ${
                    hasDropdown ? 'flex items-center justify-between' : ''
                  } ${index < navbarTag.length - 1 ? 'border-b border-b-greyPrimary' : ''}`}
                >
                  {tag}
                  {hasDropdown && <ChevronDown className={`h-3 w-3 ml-1 ${isDropdownOpen ? 'rotate-180' : ''}`} />}
                </button>
                {isDropdownOpen && hasDropdown && (
                  <div className="flex flex-col mt-2">
                    {hasDropdown.map((subTag, index) => (
                      <Link
                        href="/"
                        key={index}
                        className="block text-[8px] font-normal leading-5 hover:text-blueMedium"
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
      )}
    </div>
  );
};

export default NavbarMobile;
