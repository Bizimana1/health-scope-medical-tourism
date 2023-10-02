'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeToggler from './ThemeToggler';
import { menuData } from './menuData';

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 250) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <nav
        className={`text-gray-700 duration-500 transition-all top-0 left-0 z-40 flex justify-center w-full items-center fixed left-0 top-0 z-50 ${
          sticky ? 'bg-blue-500 bg-opacity-80' : 'bg-black/20' }
          `}
      >
        <div className='container px-5'>
          <div className='relative -mx-4 flex items-center justify-between'>

            <div className='w-72 truncate text-gray-700 text-3xl font-bold max-w-full px-4 xl:mx-12'>
              <Link
                href='/'
                className={`block text-gray-600 w-full ${
                  sticky ? 'py-5 lg:py-10' : 'py-4'
                } `}
              >
                <div className='w-14 h-14 overflow-hidden rounded relative'>
                  <Image src='/images/logo/logo.jpeg' fill />
                </div>
              </Link>
            </div>

            <div className='flex w-max items-center justify-between px-4'>
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id='navbarToggler'
                  aria-label='Mobile Menu'
                  className='absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden'
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 bg-gray-100 ${
                      navbarOpen ? ' top-[7px] rotate-45' : ' '
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 bg-gray-100 ${
                      navbarOpen ? 'opacity-0 ' : ' '
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 bg-gray-100 ${
                      navbarOpen ? ' top-[-8px] -rotate-45' : ' '
                    }`}
                  />
                </button>
                <nav
                  id='navbarCollapse'
                  className={`navbar absolute right-0 z-30 rounded border-[.5px] border-body-color/50 bg-black/40 py-4 px-6 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? 'visibility top-full opacity-100'
                      : 'invisible top-[120%] opacity-0'
                  }`}
                >
                  <ul className='block lg:flex'>
                    {menuData.map((menuItem, index) => (
                      <li key={menuItem.id} className='group relative'>
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex 2xl:text-[30px] py-2 text-base lg:mr-0 lg:inline-flex lg:py-0 lg:px-5 text-gray-100 ${ menuItem.title === 'Contact' ? 'border-l-2' : ''}`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <a
                              onClick={() => handleSubmenu(index)}
                              className='flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0'
                            >
                              {menuItem.title}
                              <span className='pl-3'>
                                <svg width='15' height='14' viewBox='0 0 15 14'>
                                  <path
                                    d='M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z'
                                    fill='currentColor'
                                  />
                                </svg>
                              </span>
                            </a>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;