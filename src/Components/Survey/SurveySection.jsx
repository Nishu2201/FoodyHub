import React from 'react'
import SurveyLeft from './SurveyLeft'
import SurveyRight from './SurveyRight'
export default function SurveySection() {

  return (
    <div id='review' className='flex items-center justify-center bg-[#cdaa88] '>
    <div className='px-4 flex-wrap sm:flex-nowrap flex my-36'> 
        <SurveyLeft/>
        <SurveyRight/>
    </div>
    </div>
  )
}
