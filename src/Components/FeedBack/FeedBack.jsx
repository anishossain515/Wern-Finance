import React from 'react'
import FeedBackCard from './FeedBackCard'
import { FeedBackData } from '../Utilities/Data'

function FeedBack() {
  return (
    <section>

        <div className='flex flex-wrap gap-8 max-w-[1300px] mx-auto px-4 justify-center'>
            {FeedBackData.map(({des,profile,name,job},index)=>(  
               <FeedBackCard des={des} profile={profile} name={name} job={job}  key={index}/>          
            ))}
        </div>

    </section>
  )
}

export default FeedBack