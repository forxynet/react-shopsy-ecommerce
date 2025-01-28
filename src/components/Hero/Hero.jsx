import React from 'react'
import Slider from 'react-slick'

import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";


const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Wireless",
    title: "Wireless",
    title2: "Virtual",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 3,
    img: Image3,
    subtitle: 'Beats Solo',
    title: "Branded",
    title2: "Laptops",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
]

export default function Hero() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true
  };

  return (
    <div className='container'>
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className='container pb-8 sm:pb-0'>
          <Slider {...settings}>
            {
              HeroData.map((data) => (
                <div key={data.id} className='grid grid-cols-1 sm:grid-cols-2'>
                  {/* text content section */}
                  <div>
                    <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold aos-init aos-animate'>{data.subtitle}</h1>
                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold aos-init aos-animate'>{data.title}</h1>
                    <h1 className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold aos-init aos-animate'>{data.title2}</h1>
                    <div>
                      <button className='bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10'>ShopNow</button>
                    </div>
                  </div>
                  {/* img section */}
                  <img
                    src={data.img}
                    alt=""
                    className='w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40'
                  />
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}