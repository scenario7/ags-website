import CustomFooter from '@/components/CustomFooter'
import CustomNavbar from '@/components/CustomNavbar'
import React from 'react'
import localFont from 'next/font/local'

const futuraMedium = localFont({ src: '../../public/fonts/futura/futura-medium.ttf' });


const page = () => {
  return (
    <div className='flex flex-col justify-between items-center min-h-screen w-screen'>
        <CustomNavbar isHomePage={false}/>
            <div className='flex flex-col items-center gap-10'>
                <img src='https://cdn2.iconfinder.com/data/icons/greenline/512/crossed-512.png' height={200} width={200}/>
                <h1 className={`${futuraMedium.className} text-3xl`}>Transaction Cancelled</h1>
            </div>
        <CustomFooter/>
    </div>
  )
}

export default page