import React from 'react'
import { Button } from '@nextui-org/react'
import { Arrow } from './Utilities/Icons'
function Hero() {
  return (
    <section>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between sm:mt-28 mt-16 mx-auto px-5 sm:px-20 lg:px-16 2xl:px-40">
      {/* Text Content Section */}
      <div className="pt-16 lg:pt-14">
        <h1 className="font-semibold text-2xl sm:text-4xl xl:text-5xl 2xl:text-[56px] leading-tight  xl:leading-[64px] mb-4 lg:mb-6 2xl:mb-8 max-w-[640px]">
         Spend your Cardano anywhere, anytime.
        </h1>
        <p className="text-xs sm:text-sm  xl:text-[18px] text-[#ADB2B1] mb-6 lg:mb-10 max-w-[498px]">
        Our user-friendly platform enables businesses and individuals to seamlessly convert and spend their crypto for everyday purchases.
        </p>

        <div className="space-x-3">
       <Button className='bg-[#772AB3] text-white py-6 px-8' endContent={<Arrow/>} radius='full'>
       Get Started
      </Button> 
        </div>
      </div>

      {/* Hero Image Section */}
      <div>
        <img src="/hero-card.png" alt="Frame" className="w-full h-auto" />
      </div>
    </div>
    </section>
  )
}

export default Hero
