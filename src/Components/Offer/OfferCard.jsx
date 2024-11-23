import React from 'react'

function OfferCard({Img,head,des}) {
  return (
    <div className='flex items-start sm:flex-row flex-col gap-6 max-w-[392px] sm:px-0 px-2'>
        <img src={Img} alt="offerImg" className='bg-[#3D3F54] sm:size-[66px] size-[50px] rounded-2xl sm:rounded-3xl p-4 flex items-center justify-center' />
        <div className='space-y-[8px]'>
            <h2 className='font-medium sm:text-[24px] text-xl'>{head}</h2>
            <p className='max-w-[286px] text-base text-[#ADB2B1]'>{des}</p>
        </div>
    </div>
  )
}

export default OfferCard