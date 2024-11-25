import React from 'react'
import { Arrow } from './Utilities/Icons'
import { Button } from '@nextui-org/react'
function FindCard() {
  return (
    <section>
    <div className="max-w-[1400px] mx-auto flex md:flex-row flex-col gap-10 items-center justify-between px-5">
      
      <div>
          <img src="/FindCard.png" alt="FindCard" className="w-full h-auto" />
      </div>

      <div className="lg:space-y-6 space-y-3">
        <h2 className="font-bold lg:text-[40px] text-3xl">Find the Perfect Card for You</h2>
        <p className="text-[#ADB2B1] lg:text-base text-sm max-w-[424px]">
        Unlocking the Power of Crypto, Both Virtually and Physically
        Manage your crypto effortlessly and spend it seamlessly with Wern. Our virtual card allows for instant and secure online transactions, while the physical Wern Card empowers you to convert and spend your crypto at millions of merchants worldwide. Experience the flexibility and convenience of both options, all within the secure and user-friendly Wern ecosystem.
        </p>
        <div>
          <Button className="bg-[#772AB3] text-white font-medium py-6 px-8 rounded-[64px]">
            Learn More
          </Button>
        </div>
      </div>

      
    </div>
  </section>
  )
}

export default FindCard