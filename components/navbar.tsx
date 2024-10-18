import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className=' m-5 flex items-center justify-between'>
        <div>
            <Image alt='' src={'/images/DischargeDigest.png'} height={100} width={100}/>
        </div>
        <div className=' flex gap-2 '>
            <Link href={'/dashboard/video'}>
            <Button >
            <h1 className=' font-semibold'>Access Discharge</h1>
            </Button>
            </Link>
            <Link href={'/dashboard'}>
            <Button  variant={'secondary'}>
                <h1 className=' font-semibold'>Create Discharge</h1>
            </Button>
            </Link>
 
        </div>
    </div>
  )
}
