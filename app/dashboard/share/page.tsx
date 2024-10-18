'use client'
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'
import { FaRegClipboard } from "react-icons/fa6";

export default function Page() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const userId = searchParams.get('userId');
    const patient = searchParams.get('patient');

    useEffect(()=>{
        if (!userId || !patient) {
            router.push('/dashboard')
        }
    },[])

  return (
    <div>
        <div className=' flex flex-col justify-center items-center h-screen'>
            <h1 className=' font-semibold text-xl'>Send This Link To {patient}</h1>
            <div className=' border border-zinc-200 rounded-xl mt-[20px]'>
                <div className=' p-2 flex items-center gap-2'>
                    <h1 className=' text-zinc-500'>{process.env.NEXT_PUBLIC_FRONTEND_URL}/video?videoId={userId}</h1>
                    <Button onClick={()=>{navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/video?videoId=${userId}`)}} variant={'outline'}>
                        <FaRegClipboard />
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}
