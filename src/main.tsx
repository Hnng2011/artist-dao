import React, { useState, useEffect, useMemo, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import merge from 'lodash.merge';

import './index.css';
import App from './App.tsx';
import { WagmiProvider } from 'wagmi';
import { Chain } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Loader from '@component/UI/loader.tsx';
import {
  getDefaultConfig,
  RainbowKitProvider,
  lightTheme,
  Theme,
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import FollowCursorHideCursor from '@component/UI/hide-cursor.tsx';
import ComingSoon from '@assets/coming-soon.jpg';
import Logo from '@assets/Logo.png';

function ThemeProvider({ children }: { children: React.ReactElement }) {
  return (
    <div className="cursor-none w-full h-full max-w-[100vw] min-h-[100vh] bg-black text-white font-lato">
      {children}
    </div>
  );
}

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
  const [loadChain, setLoadChain] = useState(false);
  const [chain, setChain] = useState<Chain | null>(null);
  const [queryClient] = useState(new QueryClient());

  useEffect(() => {
    setLoadChain(true);
  }, []);

  useEffect(() => {
    const fetchChain = async () => {
      try {
        if (import.meta.env.VITE_DEV_ENVIROMENT === 'DEV') {
          const { bscTestnet } = await import('wagmi/chains');
          setChain(bscTestnet);
        } else {
          const { bsc } = await import('wagmi/chains');
          setChain(bsc);
        }
      } catch (err) {
        console.error('Error importing chain:', err);
      }
    };

    loadChain && !chain && fetchChain();
  }, [loadChain]);

  const config = useMemo(() => {
    if (chain) {
      const config = getDefaultConfig({
        appName: 'My RainbowKit App',
        projectId: import.meta.env.VITE_WALLET_PROJECT_ID,
        chains: [chain],
        ssr: false,
      });

      return config;
    }

    return null;
  }, [chain]);

  const customTheme = merge(
    lightTheme({
      borderRadius: 'none',
    }),
    {
      colors: {
        accentColor: '#FFD700',
        accentColorForeground: '#000',
        modalBackground: '#000',
        modalBorder: '#FFD700',
        modalText: '#FFF',
        modalTextDim: '#FFF',
        modalTextSecondary: '#FFF',
        closeButton: '#FFF',
        menuItemBackground: '#FFD700CC',
        profileAction: '#222',
      },
    } as Theme
  );

  if (!config) {
    return (
      <ThemeProvider>
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
          <div className="w-fit">
            <Loader />
          </div>
        </div>
      </ThemeProvider>
    );
  }

  return (
    <>
      {true ? (
        <TempLanding />
      ) : (
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider locale="en-US" theme={customTheme}>
              <ThemeProvider>
                <>
                  <FollowCursorHideCursor />
                  <App />
                </>
              </ThemeProvider>
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      )}
    </>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Index />
  </StrictMode>
);
