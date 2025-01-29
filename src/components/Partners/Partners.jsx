import React from 'react'
import brans1 from '../../assets/brand/br-1.png'
import brans2 from '../../assets/brand/br-2.png'
import brans3 from '../../assets/brand/br-3.png'
import brans4 from '../../assets/brand/br-4.png'
import brans5 from '../../assets/brand/br-5.png'
export default function Partners() {
  return (
    <div
      data-aos="zoom-out"
      className='py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10 aos-init aos-animate'>
      <div className='container'>
        <div className="grid grid-cols-5 gap-3 place-items-center opacity-50">
          <img src={brans1} alt="" className='w-[80px] dark:invert' />
          <img src={brans2} alt="" className='w-[80px] dark:invert' />
          <img src={brans3} alt="" className='w-[80px] dark:invert' />
          <img src={brans4} alt="" className='w-[80px] dark:invert' />
          <img src={brans5} alt="" className='w-[80px] dark:invert' />
        </div>
      </div>
    </div>
  )
}
