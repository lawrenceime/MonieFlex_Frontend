import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-screen h-[80px] nav-color lg:px-[80px] px-[16px]'>
       <div className='flex items-center gap-[8px]'>
        <div className='w-[24px] h-[34px] lg:w-[35.75px] lg:h-[50px] '>

        <Image  src='/assets/midas_coin_logo.svg' alt='logo image' width={35.75} height={50} className='w-full h-full'/>
        </div>
        <p className='font-urbanist font-bold lg:text-[35px] text-[16px] text-white'>MonieFlex</p>
       </div> 
       <div className='flex items-center gap-[16px]'>
        <div className='flex items-center gap-[2px]'>
        <Link href='#' className='text-white font-urbanist'>EN</Link>
        <RiArrowDropDownLine style={{width:'20px', height:'20px' , color:'white'}} />
        </div>
        <div className='w-[32px] h-[32px] lg:w-[50px] lg:h-[50px]'>
          <Image src='/assets/Ellipse.svg' width={50} height={50} alt='logo image' className='w-full h-full'/>
        </div>
       </div>
       
    </div>
  )
}

export default Navbar