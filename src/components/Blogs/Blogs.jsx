import React from 'react'
import Heading from '../Shared/Heading'
import Img1 from '../../assets/blogs/blog-1.jpg'
import Img2 from '../../assets/blogs/blog-2.jpg'
import Img3 from '../../assets/blogs/blog-3.jpg'

const BlogData = [
  {
    id: 1,
    title: 'How to choose perfect smartwatch',
    subtitle: 'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores',
    published: 'Jan 20, 2024 by Dilshad',
    image: Img1
  },
  {
    id: 2,
    title: 'How to choose perfect gadget',
    subtitle: 'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores',
    published: 'Jan 20, 2024 by Satya',
    image: Img2
  },
  {
    id: 3,
    title: 'How to choose perfect VR headset',
    subtitle: 'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores',
    published: 'Jan 20, 2024 by Sabir',
    image: Img3
  },
]
export default function Blogs() {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading
          title="Recent News"
          subtitle={"Explore Our Blogs"}
        />
        {/* Blog section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog card */}
          {
            BlogData.map(data => (
              <div key={data.id} className='bg-white dark:bg-gray-900 aos-init aos-animate'>
                <div className='overflow-hidden rounded-2xl mb-2'>
                  <img
                    src={data.image}
                    alt={data.title}
                    className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'
                  />
                </div>
                {/* content section */}
                <div className='space-y-2'>
                  <p className='text-xs text-gray-500'>{data.published}</p>
                  <p className='font-bold line-clamp-1'>{data.title}</p>
                  <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
