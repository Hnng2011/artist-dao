import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

export default function MyDao() {
  const [myDaos, setMyDaos] = useState();
  const [error, setError] = useState(undefined);
  const { address } = useAccount();
  const [amount, setAmount] = useState();
  const [expiry, setExpiry] = useState();
  const [vipInvite, setVipInvite] = useState(false);
  const [linkToken, setLinkToken] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          import.meta.env.VITE_SERVER_URL +
            '/api/dao/get-dao-by-owner?owner=' +
            address,
          {
            headers: {
              'ngrok-skip-browser-warning': '100',
            },
          }
        );

        setMyDaos(data?.data?.dao);
        setError(undefined);
      } catch (e) {
        setError(e?.response?.data?.message || 'Unexpected error');
      }
    };

    fetchData();
  }, [address]);

  const createLink = async () => {
    const response = await axios.post(
      import.meta.env.VITE_SERVER_URL + '/api/dao/create-invite',
      {
        daoAddress: myDaos?.address,
        expiryHours: expiry,
        amount: amount,
        isVip: vipInvite,
      },
      { withCredentials: true }
    );
    if (response?.data?.invite)
      setLinkToken(response?.data?.invite?.inviteToken);
  };

  return (
    <>
      <div className="mt-10 grid grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="font-audiowide text-3xl text-red-500">
            {error && <div>{error}</div>}
          </div>
          <div className="flex gap-4">
            <span className="font-audiowide text-[#FFD700]">DAO Name:</span>{' '}
            {myDaos?.name}
          </div>
          <div className="flex gap-4">
            <span className="font-audiowide text-[#FFD700]">
              DAO Token Symbol:
            </span>{' '}
            ${myDaos?.ticker}
          </div>
          <div className="flex gap-4">
            <span className="font-audiowide text-[#FFD700]">Token Logo:</span>
            <img className="rounded w-10 h-10" src={myDaos?.logo} />
          </div>
          <div className="flex gap-4">
            <span className="font-audiowide text-[#FFD700]">
              DAO Token Address:
            </span>
            {myDaos?.pancakeswapv3Pool}
          </div>
          <div className="flex gap-4">
            <span className="font-audiowide text-[#FFD700]">DAO Contract:</span>
            {myDaos?.address}
          </div>
          <div className="flex gap-4">
            <span className="font-audiowide text-[#FFD700]">DAO Start:</span>
            {new Date(myDaos?.startDate).toLocaleString()}
          </div>
          <div className="flex gap-4">
            <span className="font-audiowide text-[#FFD700]">DAO Expiry:</span>
            {new Date(myDaos?.fundExpiry).toLocaleString()}
          </div>
        </div>
        <img className="rounded" src={myDaos?.banner} />
      </div>
      <div className="mt-10">
        <div className="font-audiowide text-4xl">Create Invite Link</div>
        <div className="flex gap-4 mt-2 flex-col">
          <div className="flex gap-2 items-center">
            <input
              value={amount}
              onChange={(e) => setAmount(e?.target?.value)}
              className="w-20 h-10 rounded focus-visible:outline-none  focus:border-[#FFD700] text-black px-2"
              text-black
            />
            <div className="">BNB</div>
          </div>

          <div className="flex gap-2 items-center">
            <input
              value={expiry}
              onChange={(e) => setExpiry(e?.target?.value)}
              className="w-10 h-10 rounded focus-visible:outline-none  focus:border-[#FFD700] text-black px-2"
              text-black
            />
            <div className="">Mins</div>
          </div>

          <div className="flex gap-2 items-center">
            <input
              checked={vipInvite}
              onChange={() => setVipInvite((prev) => !prev)}
              type="checkbox"
              className="w-4 h-4 rounded focus-visible:outline-none  focus:border-[#FFD700] text-black px-2"
              text-black
            />
            <div>VIP Invite</div>
          </div>

          <button
            onClick={createLink}
            className="p-1 w-24 bg-[#FFD700] px-2 focus:border-0 focus-visible:ring-0 text-black">
            Create
          </button>

          <div>{linkToken}</div>
        </div>
      </div>
    </>
  );
}
