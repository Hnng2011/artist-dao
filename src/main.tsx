import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import '@rainbow-me/rainbowkit/styles.css';
import Logo from '@assets/Logo.png';
import LogoName from '@/assets/logo-name.jpg';

const TempLanding = () => {
  return (
    <div className="w-full fixed bg-[#FFFCF1] flex flex-col justify-items items-center h-screen">
      <div className="relative mt-4 ml-4 w-60">
        <img src={Logo} className="w-20 h-20 relative z-10" />
        <img
          src={LogoName}
          className="absolute translate-x-2 -translate-y-20 w-80 flex-shrink-0 z-0"
        />
      </div>

      <div className="mx-auto w-fit font-artistDAO mt-6">
        <a
          href="https://discord.gg/ngMkRJrR"
          className="flex items-center gap-4 px-4 py-2 border-2 rounded-3xl hover:border-black duration-300">
          <div className="text-2xl font-bold inline-flex gap-4 items-center">
            {' '}
            <img
              src="https://img.icons8.com/?size=100&id=25627&format=png&color=000000"
              className="w-6 h-6"
            />{' '}
            Discord:
          </div>
          <div className="font-bold">https://discord.gg/ngMkRJrR</div>
        </a>
        <a
          href="https://t.me/Artdaodotfun"
          className="flex items-center gap-4 px-4 py-2 border-2 rounded-3xl hover:border-black duration-300 mt-4">
          <div className="text-2xl font-bold inline-flex gap-4 items-center">
            <img
              src="https://img.icons8.com/?size=100&id=TCnKnYZFoOzM&format=png&color=000000"
              className="w-6 h-6"
            />{' '}
            Telegram:
          </div>
          <div className="font-bold">https://t.me/Artdaodotfun</div>
        </a>

        <a
          href="https://x.com/Artdaodotfun"
          className="flex items-center gap-4 px-4 py-2 border-2 rounded-3xl hover:border-black duration-300 mt-4">
          <div className="text-2xl font-bold inline-flex gap-4 items-center">
            <img
              src="https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=000000"
              className="w-6 h-6"
            />{' '}
            X:
          </div>
          <div className="font-bold">https://x.com/Artdaodotfun</div>
        </a>
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
