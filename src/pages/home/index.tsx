import ReactLogo from '@/assets/ReactLogo';
import PageWrapper from '@/layouts/PageWrapper';
import React from 'react';

const Home = () => {
  return (
    <PageWrapper title="Home">
      <div className="bg-slate-800 w-full h-screen flex flex-col gap-8 items-center justify-center">
        <ReactLogo className="animate-spin-slow w-44" />
        <p className="text-2xl text-white font-medium">React Vite</p>
      </div>
    </PageWrapper>
  );
};

export default Home;
