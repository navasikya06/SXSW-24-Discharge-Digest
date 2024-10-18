'use client'
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Page() {
    const router = useRouter();
    const [otp, setOtp] = useState<string>('')
    const searchParams = useSearchParams();

    const videoID = searchParams.get('videoId');

    const [authenticated, setAutheticated] = useState(false);
    const [videoSrc, setVideoSrc] = useState(null);

 
    

    useEffect(()=>{
      // if (!videoID) {
      //   router.push('/')
      // }
    },[])
   if (!authenticated) {
  return (
    <div>
        <div className=' flex flex-col justify-center items-center h-screen'>
          <h1 className=' font-semibold text-2xl mb-[20px]'>Enter Your Access Code</h1>
          <InputOTP onChange={(e)=>{setOtp(e)}} value={otp} maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>

          <Button onClick={()=>{router.push('/dashboard/video/src')}} className=' mt-10 w-[200px]'>
            <h1 className=' font-semibold'>Submit</h1>
          </Button>      
      </div>
    </div>
  )
} else {
  return (
    <div className=' flex justify-center items-center h-screen'>
          {
          videoSrc 
          ? 
          <video src={videoSrc}></video> 
          : 
            <AiOutlineLoading3Quarters className=' animate-spin h-[100px] w-[100px]'/>
          }
    </div>
  )
}
}
