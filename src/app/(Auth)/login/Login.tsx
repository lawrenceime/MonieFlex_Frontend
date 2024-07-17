import React from 'react'
import Image from 'next/image'
import LoginCard from '@/components/Auth/LoginCard'

const Login = () => {
    return (
        <div className='lg:flex w-screen h-screen'>
            <LoginCard />
            <div className='lg:relative lg:flex-1 lg:bg-cover lg:bg-center' style={{ backgroundImage: "url('/assets/Abstract 3d design elements arrangement.svg')" }}>
            </div>
        </div>
    );
}

export default Login