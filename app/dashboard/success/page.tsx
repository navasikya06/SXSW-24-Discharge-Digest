"use client"
import Confetti, { ConfettiRef } from '@/components/ui/confetti';
import React, { useRef } from 'react'
import { IoMdCheckboxOutline } from "react-icons/io";

export default function page() {
    const confettiRef = useRef<ConfettiRef>(null);

  return (
    <div className=' flex flex-col justify-center items-center h-screen'>
        <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
        <h1 className=' text-3xl font-semibold'>
            Success
        </h1>
        <IoMdCheckboxOutline color='green' className='h-[100px] w-[100px] mt-5'/>
    </div>
  )
}
