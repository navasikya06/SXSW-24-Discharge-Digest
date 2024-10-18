import { disconnect } from 'process'
import React from 'react'

export default function Footer() {
  return (
    <div className='h-[100px] justify-center items-center flex bg-gradient-to-t from-slate-100 to-white'>
        <h1 className=' text-xs text-zinc-600'>
            © Copyright 2024, All Rights Reserved by Discharge Digest
        </h1>
    </div>
  )
}
