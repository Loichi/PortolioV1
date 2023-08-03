import React from 'react'

export default function PricingPlanItem({imageUrl,title, textTwo, price}) {
  return (
    <div className='bg-white lg:w-1/4 md:w-1/3 h-5/6 rounded-lg flex flex-col justify-evenly items-center mx-1  hover:scale-110 '>
        <div className='h-1/4'>
            <div className='w-full lg:h-2/3 md:h-1/2' s style={{
        backgroundImage: `url("${imageUrl}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}></div>
            <p className='text-2xl font-bold'>{title}</p>
        </div>
        <div className='w-3/4 text-center h-1/2 flex flex-col justify-evenly'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt. </p>
            <p>{textTwo}</p>
            <p className='text-2xl font-bold'>{price}</p>
        </div>
        <button className="bg-red-500 text-white font-bold rounded-full lg:w-48 md:w-48 h-10 mt-10">
                Get Started
              </button>
    </div>
  )
}
