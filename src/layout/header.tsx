import Navbar from '@component/UI/animation-navbar';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Logo from '@assets/Logo.png';
import { useAccount, useSignMessage } from 'wagmi';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import MenuMobile from './menu-mobile';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const address = useAccount();
  const [twitterUser, setTwitterUser] = useState(undefined);
  const signMessageLocal = window.localStorage
    .getItem('signMessage')
    ?.toString();

  const { data: signMessageData, signMessage, status } = useSignMessage();

  // Hàm ký thông điệp để xác minh
  const handleSignMessage = useCallback(() => {
    const message =
      'Welcome to DAOs.run! Sign this message to verify your wallet ownership.';
    signMessage({ message });
  }, [signMessage]);

  const handleConnectTwitter = async () => {
    try {
      window.localStorage.setItem('needRelogin', 'true');
      window.location.href =
        import.meta.env.VITE_SERVER_URL + '/api/auth/twitter/link';
    } catch (error) {
      console.error(
        'Error occurred while trying to connect to Twitter:',
        error
      );
    }
  };

  useEffect(() => {
    const needToRelogin = window.localStorage.getItem('needRelogin');
    if ((address?.isConnected || needToRelogin) && !signMessageLocal) {
      handleSignMessage();
    }
  }, [address?.isConnected, handleSignMessage]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (
        (address?.isConnected && signMessageLocal) ||
        (signMessageData && status === 'success')
      ) {
        !signMessageLocal &&
          window.localStorage.setItem(
            'signMessage',
            signMessageData?.toString()
          );
        try {
          const response = await axios.post(
            import.meta.env.VITE_SERVER_URL + '/api/user/login',
            {
              walletAddress: address?.address,
              signature: signMessageLocal || signMessageData,
            },
            { withCredentials: true }
          );

          window.localStorage.removeItem('needRelogin');
          setTwitterUser(response?.data?.user);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [status, signMessageLocal, address?.isConnected]);

  return (
    <>
      <MenuMobile
        address={address?.address}
        twitterUser={twitterUser}
        handleConnectTwitter={handleConnectTwitter}
      />
      <header className="w-full lg:flex items-center justify-between hidden font-audiowide relative z-10">
        <NavLink to="/" className="text-xl items-center flex gap-2">
          <img src={Logo} alt="logo" className="h-10" /> Daos.run
        </NavLink>
        <div className="flex gap-4">
          <Navbar
            dataButtons={[
              {
                label: 'Home',
                href: '/',
              },
              {
                label: 'FAQs',
                href: '/faq',
              },
              {
                label: 'All Fund',
                href: '/all-fund',
              },
              {
                label: 'My Fund',
                href: '/my-fund',
              },
            ]}
          />
          {address?.address &&
            (twitterUser?.name === '' || !twitterUser?.name ? (
              <button
                className="bg-blue-400 px-2"
                onClick={handleConnectTwitter}>
                Connect Twitter
              </button>
            ) : (
              <button className="bg-blue-400 px-2 flex items-center gap-2">
                <img
                  src={twitterUser?.profileImageUrl}
                  alt="profile-img"
                  className="rounded-full h-6"
                />
                <div>{twitterUser?.name}</div>
              </button>
            ))}

          <ConnectButton label="Connect Wallet" />
        </div>
      </header>
    </>
  );
}
