import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <footer className='flex justify-center relative z-10 text-white bg-gray-900 px-5 pt-16 md:pt-20 lg:pt-40'>
        <div className='container'>
          <div className='flex flex-col md:flex-row'>
            <div className='mb-12 max-w-[360px] md:mr-16'>
              <p className='mb-6 text-base font-medium leading-relaxed'>
                Stay connected with Healthscope for updates, tips, and more.
              </p>
              <div className='flex justify-center md:justify-start'>
                <a
                  target='_blank'
                  href='https://instagram.com/healthscopemedicaltourism?igshid=OGQ5ZDc2ODk2ZA=='
                  aria-label='social-link'
                  className='mr-6 text-gray-200'
                >
                  <span className='text-3xl'>
                    <AiOutlineInstagram />
                  </span>
                </a>
                <a
                  target='_blank'
                  href='https://x.com/healthscoperw?s=21'
                  aria-label='social-link'
                  className='mr-6 text-gray-200'
                >
                  <span className='text-3xl'>
                    <AiOutlineTwitter />
                  </span>
                </a>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/health-scope-medical-tourism-343794390'
                  aria-label='social-link'
                  className='mr-6 text-gray-200'
                >
                  <span className='text-3xl'>
                    <AiOutlineLinkedin />
                  </span>
                </a>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-4 md:mb-0'>
              <div className='mb-12'>
                <h2 className='mb-6 text-xl font-bold'>Useful Links</h2>
                <ul>
                  <li>
                    <a href='/' className='mb-2 inline-block text-base font-medium'>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href='#' className='mb-2 inline-block text-base font-medium'>
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div className='mb-12'>
                <h2 className='mb-6 text-xl font-bold'>Terms</h2>
                <ul>
                  <li>
                    <a href='#' className='mb-2 inline-block text-base font-medium'>
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div className='mb-12'>
                <h2 className='mb-6 text-xl font-bold'>Support & Help</h2>
                <ul>
                  <li>
                    <a href='/en/services' className='mb-2 inline-block text-base font-medium'>
                      Services
                    </a>
                  </li>
                  <li>
                    <a href='/en/contact' className='mb-2 inline-block text-base font-medium'>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
