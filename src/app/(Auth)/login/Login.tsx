import React from 'react'
import Image from 'next/image'
import LoginCard from '@/components/Auth/LoginCard'


const Login = () => {
    return (
        <div className='flex w-screen h-screen'>
            <LoginCard />
            <div className='relative flex-1'>

                <Image src='/assets/Abstract 3d design elements arrangement.svg' alt='Login Image' layout='fill' className='object-cover' />
            </div>
        </div>
    )
}

export default Login