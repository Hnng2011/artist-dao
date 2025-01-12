import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import '@rainbow-me/rainbowkit/styles.css';
import ComingSoon from '@assets/coming-soon.jpg';
import Logo from '@assets/Logo.png';

const TempLanding = () => {
  return (
    <div className="h-full w-full fixed bg-black">
      <div className="fixed top-10 left-10 flex gap-2 items-center">
        <img src={Logo} className="w-20 h-20" />
        <div className="text-white font-audiowide text-4xl">Daos.run</div>
      </div>
      <img
        src={ComingSoon}
        alt="coming"
        className="w-full h-full object-contain"
      />
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
