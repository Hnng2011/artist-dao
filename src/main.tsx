import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import '@rainbow-me/rainbowkit/styles.css';
import Logo from '@assets/Logo.png';
import LogoName from '@/assets/logo-name.jpg';
import { SparklesText } from './component/UI/sparkles';
import Bg from '@assets/bg.png';

const TempLanding = () => {
  return (
    <div className="h-full w-full fixed bg-[#FFFCF1]">
      <div className="relative mt-4 ml-4">
        <img src={Logo} className="w-20 h-20 relative z-10" />
        <img
          src={LogoName}
          className="absolute translate-x-2 -translate-y-20 w-80 flex-shrink-0 z-0"
        />
      </div>
      <div className="mx-auto w-fit mt-[40%] lg:mt-[10%] font-artistDAO">
        <SparklesText className="text-7xl lg:text-9xl" text={'Coming Soon'} />
        <img className="w-[50%] md:w-[20%] fixed bottom-0 right-0 " src={Bg} />
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <>
      <TempLanding />
    </>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Index />
  </StrictMode>
);
