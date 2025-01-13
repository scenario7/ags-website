import CustomFooter from '@/components/CustomFooter'
import CustomNavbar from '@/components/CustomNavbar'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen justify-between flex flex-col'>
        <CustomNavbar isHomePage={false}/>
        <h1 className='text-center'>Coming Soon...</h1>
        <CustomFooter/>
    </div>
  )
}

export default page