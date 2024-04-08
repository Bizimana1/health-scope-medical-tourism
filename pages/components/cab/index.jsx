import React, { useState } from 'react';
import Link from 'next/link';
import ImageFill from '../Common/ImageFill';
import { AiOutlineRight } from 'react-icons/ai';
import { GiStethoscope } from 'react-icons/gi';
import { BsHouseHeart } from 'react-icons/bs';
import { TbAmbulance } from 'react-icons/tb';
import { HiOutlineDocumentAdd } from 'react-icons/hi';

const CAB = () => {
  const [cardHover, setCardHover] = useState(null);

  const handleCardHoverEnter = (i) => {
    setCardHover(i);
  };

  const handleCardHoverLeave = () => {
    setCardHover(null);
  };

  return (
    <>
      <section
        id='features'
        className=' bg-white flex justify-center relative py-24 px-5 md:px-20 md:py-20 lg:py-28'
      >
        <div className='container gap-10 grid sm:grid-cols-2'>
          <div className='text-gray-600 flex flex-col justify-center'>
            <h1 className='text-lg font-bold text-green-700'>Services</h1>
            <p className='text-5xl font-bold text-gray-700 mt-2'>
              Our Services
            </p>
            <h1 className='text-lg mb-2 font-bold text-gray-600'>Include.</h1>
            <p className='mb-4'>
            We facilitate medical consultations and assist with hospital
                admissions and medication for patients seeking healthcare
                services abroad.
            </p>

            <Link href='/en/services'>
              <span className='px-5 py-1 rounded-full text-white flex items-center gap-2 w-max bg-green-600'>
                More Services
                <div>
                  <AiOutlineRight />
                </div>
              </span>
            </Link>
          </div>

          <div className='grid'>
            <div className='grid gap-4 sm:gap-10 grid-cols-2 grid-rows-16 grid-flow-col'>
              <div
                onMouseEnter={() => handleCardHoverEnter(0)}
                onMouseLeave={handleCardHoverLeave}
                className={`shadow-lg rounded-xl overflow-hidden row-start-1 row-span-6 duration-500 ease-in p-4 flex flex-col gap-2 ${
                  cardHover === 0
                    ? 'bg-teal-500 text-white'
                    : 'bg-teal-100 text-gray-700'
                } `}
              >
                <div className='w-10 h-10 flex items-center justify-center text-lg text-teal-600 rounded bg-gray-100'>
                  <GiStethoscope />
                </div>
                <h1 className='py-1 font-bold mt-5'>Medical Consulation</h1>
                <p className='text-sm'>Hospital Admission & Medication.</p>
              </div>
              <div
                onMouseEnter={() => handleCardHoverEnter(1)}
                onMouseLeave={handleCardHoverLeave}
                className={`shadow-lg rounded-xl overflow-hidden row-start-2 row-span-6 duration-500 ease-in p-4 flex flex-col gap-2 ${
                  cardHover === 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-blue-100 text-gray-700'
                }`}
              >
                <div className='w-10 h-10 flex items-center justify-center text-lg text-blue-600 rounded bg-gray-100'>
                  <HiOutlineDocumentAdd />
                </div>
                <h1 className='py-1 font-bold mt-5'>Documents</h1>
                <p className='text-sm'>
                  Assistance in obtaining travel papers i.e. Passport and visa.
                </p>
              </div>
            </div>
            <div className='grid gap-4 sm:gap-10 grid-cols-2 grid-rows-16 grid-flow-col'>
              <div
                onMouseEnter={() => handleCardHoverEnter(2)}
                onMouseLeave={handleCardHoverLeave}
                className={`shadow-lg rounded-xl overflow-hidden row-start-1 row-span-6 duration-500 ease-in p-4 flex flex-col gap-2 ${
                  cardHover === 2
                    ? 'bg-red-500 text-white'
                    : 'bg-red-100 text-gray-700'
                }`}
              >
                <div className='w-10 h-10 flex items-center justify-center text-lg text-red-600 rounded bg-gray-100'>
                  <BsHouseHeart />
                </div>
                <h1 className='py-1 font-bold mt-5'>Acommodation</h1>
                <p className='text-sm'>Hotel & Transport Services</p>
              </div>
              <div
                onMouseEnter={() => handleCardHoverEnter(3)}
                onMouseLeave={handleCardHoverLeave}
                className={`shadow-lg rounded-xl overflow-hidden row-start-2 row-span-6 duration-500 ease-in p-4 flex flex-col gap-2 ${
                  cardHover === 3
                    ? 'bg-orange-500 text-white'
                    : 'bg-orange-100 text-gray-700'
                }`}
              >
                <div className='w-10 h-10 flex items-center justify-center text-lg text-orange-600 rounded bg-gray-100'>
                  <TbAmbulance />
                </div>
                <h1 className='py-1 font-bold mt-5'>Travel Assistance</h1>
                <p className='text-sm'>Flight, train, bus, cab, ticketing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CAB;
