import React from 'react'
import OfferCard from './OfferCard'
import { OfferCardData } from '../Utilities/Data'
function Offer() {
  return (
    <section className='mt-[128px] max-w-[1400px] mx-auto'>
        <div className='flex flex-col items-center justify-center '>
            <h2 className='font-semibold sm:text-[40px] text-3xl text-center'>What do we offer?</h2>
           <div className='flex flex-wrap gap-8 justify-center pt-[64px] px-2'>
            {OfferCardData.map(({Img,head,des},index)=>(
                  <OfferCard Img={Img} head={head} des={des} key={index}/>          
             ))}
           </div>
        </div>
    </section>
  )
}

export default Offer