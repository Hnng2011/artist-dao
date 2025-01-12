import { motion } from 'motion/react';
import { Menu as MenuIcon, XIcon } from 'lucide-react';
import { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const MenuMobile = ({ address, twitterUser, handleConnectTwitter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex justify-between lg:hidden items-center">
      <button onClick={toggleMenu}>
        <MenuIcon className="text-[#FFD700]" />
      </button>

      <div className="flex gap-2">
        {address &&
          (twitterUser?.name === '' || !twitterUser?.name ? (
            <button className="bg-blue-400 px-2" onClick={handleConnectTwitter}>
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

      <motion.div
        className="fixed top-0 left-0 bg-white w-64 h-full z-20 border-r-[1px] border-[#FFD700]"
        initial={{ transform: 'translateX(-100%)' }}
        animate={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
        <>
          {/* Menu */}
          <div className="fixed top-0 right-0 bg-black w-64 h-full z-20">
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu} className="text-xl">
                <XIcon className="text-[#FFD700]" />
              </button>
            </div>
            <ul className="space-y-4 px-6 py-10 text-[#FFD700]">
              <li>
                <a href="/" className="text-lg">
                  Home
                </a>
              </li>
              <li>
                <a href="/faq" className="text-lg ">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/all-fund" className="text-lg">
                  All Fund
                </a>
              </li>
            </ul>
          </div>
        </>
      </motion.div>
    </div>
  );
};

export default MenuMobile;
