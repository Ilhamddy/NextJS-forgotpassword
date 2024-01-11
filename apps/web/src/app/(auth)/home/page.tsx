'use client';
import { useAppSelector } from '@/lib/hooks';
import React from 'react';

const HomePage = () => {
  const user = useAppSelector((state) => state.user);
  console.log(user.id);

  return (
    <section>
      <div className="h-screen flex items-center justify-center">
        <div className="text-8xl text-second  animate-pulse ease-out delay-700 ">
          HOMEPAGE
        </div>
        <div>{user.email}</div>
      </div>
    </section>
  );
};

export default HomePage;
