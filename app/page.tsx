import Navbar from '@/components/navbar'
import React from 'react'

export default function Page() {
  return (
    <div className=' flex flex-col items-center justify-center h-screen'>
      <Navbar/>
      <h1 className=' text-3xl font-semibold'>
        AI Generated Discharge 
      </h1>
    </div>
  )
}
