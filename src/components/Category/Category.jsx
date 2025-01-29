import React from 'react'

import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
import Button from '../Shared/Button';

export default function Category() {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* first col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div
              data-aos="fade-up"
              data-aos-delay="10"
            >
              <div className='mb-4'>
                <p data-aos="zoom-in" className='mb-[2px] text-gray-400'>Enjoy</p>
                <p data-aos="zoom-in" className='text-2xl font-semibold mb-[2px]'>With</p>
                <p data-aos="zoom-in" className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                <Button
                  text="Browse"
                  bgColor="bg-primary"
                  textColor="text-white"
                  data-aos="zoom-out"
                />
              </div>
            </div>
            <img data-aos="zoom-in" src={Image1} alt="" className='w-[320px] absolute bottom-0' />
          </div>
          {/* second col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div
                data-aos="fade-up"
                data-aos-delay="10"
                className='mb-4'>
                <p data-aos="zoom-in" className="mb-[2px] text-white">Enjoy</p>
                <p data-aos="zoom-in" className="text-2xl font-semibold mb-[2px]">With</p>
                <p data-aos="zoom-in" className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Gadget</p>
                <Button
                  text="Browse"
                  bgColor="bg-primary"
                  textColor="text-white"
                  data-aos="zoom-out"
                />
              </div>
            </div>
            <img data-aos="zoom-in" src={Image2} alt="" className='w-[320px] absolute -right-4 lg:top-[40px]' />
          </div>
          {/* third col */}
          <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div
                data-aos="fade-up"
                data-aos-delay="10"
                className='mb-4'>
                <p data-aos="zoom-in" className="mb-[2px] text-white">Enjoy</p>
                <p data-aos="zoom-in" className="text-2xl font-semibold mb-[2px]">With</p>
                <p data-aos="zoom-in" className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Laptop</p>
                <Button
                  text="Browse"
                  bgColor="bg-white text-primary cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10"
                  textColor="text-primary"
                  data-aos="zoom-out"
                />
              </div>
            </div>
            <img data-aos="zoom-in" src={Image3} alt="" className='w-[250px] absolute top-1/1 -translate-y-1/1 -right-0' />
          </div>
        </div>
      </div>
    </div>
  )
}
