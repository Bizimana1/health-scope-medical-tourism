import Head from 'next/head';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { AiFillFacebook, AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const Layout = ({ title, content, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name='description' content={content} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' type='image/svg+xml' href='/public/logo/logo.png' />
    </Head>

    <div className='w-screen bg-white'>
      <Header />

      {/* Fixed button section */}
      <div className='fixed bottom-10 text-white right-10 z-40 flex items-center justify-center rounded'>
        <a href={`https://wa.me/+250786837318`} target="_blank" rel="noopener noreferrer" className='w-14 h-14 rounded-full bg-green-700 opacity-70 hover:opacity-100 flex items-center justify-center'>
          <AiOutlineWhatsApp className='text-3xl' />
        </a>
        {/* Add more social media icons here */}
        
        <a href='https://instagram.com/healthscopemedicaltourism?igshid=OGQ5ZDc2ODk2ZA==' target="_blank" rel="noopener noreferrer" className='w-14 h-14 rounded-full bg-pink-700 opacity-70 hover:opacity-100 flex items-center justify-center ml-2'>
          <AiOutlineInstagram className='text-3xl' />
        </a>
        <a href='https://x.com/healthscoperw?s=21' target="_blank" rel="noopener noreferrer" className='w-14 h-14 rounded-full bg-blue-400 opacity-70 hover:opacity-100 flex items-center justify-center ml-2'>
          <AiOutlineTwitter className='text-3xl' />
        </a>
        <a href='https://www.linkedin.com/in/health-scope-medical-tourism-343794390' target="_blank" rel="noopener noreferrer" className='w-14 h-14 rounded-full bg-blue-700 opacity-70 hover:opacity-100 flex items-center justify-center ml-2'>
          <AiOutlineLinkedin className='text-3xl' />
        </a>
      </div>

      {children}

      {/* Footer component */}
      <Footer />
    </div>
  </>
);

Layout.defaultProps = {
  title: 'Medical Tourism',
  content: '',
};

export default Layout;
