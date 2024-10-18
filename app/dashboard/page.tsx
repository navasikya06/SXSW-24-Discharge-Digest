import React from 'react'
import Form from './components/form'
import Navbar from '@/components/navbar'
import { RiHospitalFill } from "react-icons/ri";

export default function Page() {
  return (
    <div className=' flex flex-col justify-center items-center h-screen'>
        <RiHospitalFill className=' h-[100px] w-[100px] mb-5 fill-[#17726D]' />
        <Form/>
    </div>

  )
}
