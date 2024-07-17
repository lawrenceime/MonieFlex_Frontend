import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-screen h-[80px] nav-color px-[80px]'>
       <div className='flex items-center gap-[8px]'>
        <Image  src='/assets/midas_coin_logo.svg' alt='logo image' width={35.75} height={50}/>
        <p className='font-urbanist font-bold text-[35px] text-white'>MonieFlex</p>
       </div> 
       <div className='flex items-center gap-[16px]'>
        <Link href='#' className='text-white font-urbanist'>EN</Link>
        <RiArrowDropDownLine style={{width:'20px', height:'20px' , color:'white'}} />
        <Image src='/assets/Ellipse.svg' width={50} height={50} alt='logo image'/>
       </div>
       
    </div>
  )
}

export default Navbar