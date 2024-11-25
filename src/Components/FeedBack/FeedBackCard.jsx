import React from 'react'

function FeedBackCard({des,profile,name,job}) {
  return (
    <div className='bg-[#1e2421] rounded-[32px] px-6 py-14 max-w-[392px] space-y-8'>
        <div className='bg-[#3D3F54] size-[56px] rounded-[56px] p-4'>
         <img src="/aps.png" alt="aps" /> 
        </div>

        <h3 className='max-w-[344px] sm:text-base text-sm font-Poppins'>{des}</h3>
        <div className='flex items-center gap-2'>
            <img src={profile} alt="user" />
            <div>
                <h4 className='font-medium'>{name}</h4>
                <p className='text-[#ADB2B1] text-xs'>{job}</p>
            </div>
        </div>
    </div>
  )
}

export default FeedBackCard