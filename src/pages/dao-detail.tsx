import { truncate } from '@/utils/truncate-string';
import axios from 'axios';
import { Copy } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DaoSwap from '@component/Section/dao-swap';

export default function DaoDetail() {
  const params = useParams();
  const [detail, setDetail] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        import.meta.env.VITE_SERVER_URL + '/api/dao?address=' + params?.daoId,
        {
          headers: {
            'ngrok-skip-browser-warning': '100',
          },
        }
      );
      setDetail(data?.data?.dao);
    };

    fetchData();
  }, []);

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-4 lg:gap-x-6 lg:gap-y-4">
        <div className="p-4 border-2 border-[#FFD700]">
          <div className="flex justify-between items-center">
            <div className="text-lg font-audiowide flex gap-2 items-center">
              <img
                src={detail?.logo}
                alt="logo"
                className="w-10 rounded-full aspect-square"
              />
              ${detail?.ticker}
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-1 text-sm">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/color/48/telegram-app--v1.png"
                  alt="twitter"
                />
                {detail?.telegram}
              </div>
              <div className="flex gap-1 text-sm">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/color/48/twitter--v1.png"
                  alt="twitter"
                />
                {detail?.creatorTwitter}
              </div>

              <div className="flex gap-1 text-sm hover:text-[#FFD700] duration-200">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/color/48/internet.png"
                  alt="twitter"
                />
                <Link target="_blank" to={detail?.website}>
                  {detail?.website}
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-4">{detail?.description}</div>
        </div>
        <div className="p-4 border-2 border-[#FFD700] row-start-2">
          <div className="flex justify-between items-center">
            <div className="text-lg font-audiowide">{detail?.name}</div>
            <img
              src={detail?.banner}
              alt="Banner"
              className="w-20 aspect-square"
            />
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm font-audiowide">DAO address</div>
            <div className="text-sm flex gap-1 items-center">
              {truncate(detail?.address)} <Copy className="w-4" />
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm font-audiowide">DAO owner</div>
            <div className="text-sm flex gap-1 items-center">
              {truncate(detail?.owner)} <Copy className="w-4" />
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm font-audiowide">DAO token</div>
            <div className="text-sm flex gap-1 items-center">
              {truncate(detail?.pancakeswapv3Pool)} <Copy className="w-4" />
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm font-audiowide">Trading start</div>
            <div className="text-sm">
              {new Date(detail?.startDate).toLocaleString()}
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm font-audiowide">Trading end</div>
            <div className="text-sm">
              {new Date(detail?.fundExpiry).toLocaleString()}
            </div>
          </div>
        </div>

        <div className="row-span-3">
          <DaoSwap
            currentToken={{
              address: detail?.pancakeswapv3Pool,
              logo: detail?.logo,
              ticker: detail?.ticker,
            }}
          />
        </div>

        <iframe
          className="mt-4 w-full h-96"
          src="https://dexscreener.com/base/0x3e43cB385A6925986e7ea0f0dcdAEc06673d4e10?embed=1&info=0&trades=0"
        />
      </div>
    </div>
  );
}
