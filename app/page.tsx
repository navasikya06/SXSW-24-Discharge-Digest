import Footer from '@/components/footer'
import { ScrollingReviews } from '@/components/magicui/scrollingReviews'
import Navbar from '@/components/navbar'
import HyperText from '@/components/ui/hyper-text'
import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Navbar/>
      <div className=' '>
        <div className=' flex flex-col items-center justify-center mt-[220px]'>
          <div className=' flex gap-3 '>
            <HyperText className=' text-3xl text-[#17726D]' text='AI Generated Discharge'/>
            <Image alt='' src={'/images/healthcare.png'} height={50} width={50}/>
          </div>
          <HyperText className=' text-3xl' text='Using AI To Simplify Discharge'/>
         </div>
        <ScrollingReviews/>
      </div>
      <Footer/>
    </div>

  )
}
