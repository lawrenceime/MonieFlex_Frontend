import React from 'react'
import Link from 'next/link'

const LoginCard = () => {
  return (
    <div className='flex flex-col bg-white lg:w-[50%] w-[100%] h-[100%] justify-center'>
        <div className='w-[70%] mx-auto'>

        <div className='flex flex-col gap-[5px]'>
            <p className='font-bold text-[28px] font-urbanist text-[#2E2E2E]'>LOGIN</p>
            <p className='font-urbanist font-medium text-[16px] text-[#5B5B5B]'>Input your details below to login</p>
        </div>
        <form action="" className='space-y-[27px] mt-[32px]'>
            <div className='flex flex-col gap-[8px]'>
            <label className='font-urbanist font-medium text-[18px]' htmlFor="">Username</label>
            <input type="text"  className='bg-[#EDEDED] rounded-[5px] h-[50px] border border-[#5A5959] outline-none pl-[8px]'/>
            </div>
            <div className='flex flex-col gap-[8px]'>
            <label className='font-urbanist font-medium text-[18px]' htmlFor="">Password</label>
            <input type="text" className='bg-[#EDEDED] rounded-[5px] h-[50px] border border-[#5A5959] outline-none pl-[8px]'/> 
            <p className='font-urbanist font-light text-[12px] text-[#2E2E2E] text-end'>Forgot Password?</p>
            </div>
            <p className='font-urbanist font-medium text-[14px] text-center lg:text-start'>By Logging in, I Acknowledge that I have read and agree to the <Link href='#' className='text-[#08284E]' >Terms and Conditions </Link> and <Link href='#' className='text-[#08284E]'>Privacy Policy</Link></p>
            <button type='button' className='w-full h-[54px] bg-buttons text-white rounded-[5px]'>Log In</button>
            <button type='button' className='w-full rounded-[5px] border border-[#08284E] h-[50px] lg:text-[18px] text-[14px] font-medium font-urbanist text-[#08284E] mt-[48px]'>Open a MonieFlex Bank Account</button>
        </form>
        </div>
    </div>
  )
}

export default LoginCard