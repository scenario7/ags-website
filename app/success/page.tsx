'use client';

import CustomFooter from '@/components/CustomFooter';
import CustomNavbar from '@/components/CustomNavbar';
import React, { Suspense } from 'react';
import localFont from 'next/font/local';
import { useSearchParams } from 'next/navigation';

const futuraMedium = localFont({ src: '../../public/fonts/futura/futura-medium.ttf' });

const SuccessContent = () => {
  const searchParams = useSearchParams();

  const checkoutSessionId = searchParams.get('checkout_session_id');
  console.log(checkoutSessionId);

  return (
    <div className='flex flex-col items-center gap-10'>
      <img src='https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png' height={200} width={200} />
      <h1 className={`${futuraMedium.className} text-3xl`}>Booking Confirmed!</h1>
      {checkoutSessionId && <p>Session ID: {checkoutSessionId}</p>}
    </div>
  );
};

const Page = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen w-screen'>
      <CustomNavbar isHomePage={false} />
      <Suspense fallback={<p>Loading...</p>}>
        <SuccessContent />
      </Suspense>
      <CustomFooter />
    </div>
  );
};

export default Page;
