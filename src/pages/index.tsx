import HackerBackground from '@/component/UI/hacker-background';
import * as motion from 'motion/react-client';
import { HyperText } from '@/component/UI/hyper-text';
import { AnimatedGridPattern } from '@/component/UI/grid-background';
import { cn } from '@/utils/cn';
import MorphingText from '@/component/UI/morphing-text';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Background from '@assets/bg.gif';

const Index = () => {
  const [upcoming, setUpcoming] = useState();
  const [featured, setFeatured] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const [upcomingData, featuredData] = await Promise.all([
        axios.get(
          import.meta.env.VITE_SERVER_URL + '/api/dao/list?upcoming=true',
          {
            headers: {
              'ngrok-skip-browser-warning': '100',
            },
          }
        ),
        axios.get(
          import.meta.env.VITE_SERVER_URL + '/api/dao/list?upcoming=false',
          {
            headers: {
              'ngrok-skip-browser-warning': '100',
            },
          }
        ),
      ]);

      setUpcoming(upcomingData?.data?.daos);
      setFeatured(featuredData?.data?.daos);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="relative mt-4 w-full">
        <MorphingText
          className="!text-xl text-[#FFD700] absolute top-56 left-1/2 -translate-x-1/2 w-full -translate-y-10 z-10"
          texts={['1st DAO platform', 'DAO for everyone', 'To the Moon']}
        />

        <HyperText
          animateOnHover={false}
          className="absolute top-56 left-1/2 -translate-x-1/2 w-full text-center text-[#FFD700] z-10">
          Welcome to DAOS.RUN 'ultimate' DAO platform
        </HyperText>

        <div className="absolute top-56 left-1/2 -translate-x-1/2 translate-y-20 w-full text-center  text-[#FFD700] z-10">
          <span className="bg-[#b49f27c7] rounded-xl p-2 px-4 text-sm md:text-base">
            Create or join memecoin & AI hedgefunds 🌎🐕
          </span>
        </div>

        <div className="container border-b-[1px] border-b-[#FFD700] h-screen lg:h-auto">
          <img
            loading="eager"
            src={Background}
            alt="background"
            className="h-full w-full pointer-events-none relative z-0 opacity-50 object-cover"
          />
        </div>

        <div className="bg-[#FFD700] text-black p-6 flex flex-col gap-2 lg:gap-0 items-start lg:flex-row lg:justify-between lg:items-center text-sm lg:text-base">
          <div>
            <div className="font-audiowide text-base lg:text-2xl mb-4">
              Want to create a Fund ?
            </div>
            Manage a hedge fund Create or Join Daos memecoin and AI hedgefund on
            DAOS.RUN launch
          </div>

          <button className="text-base lg:text-xl font-bold border-[3px] p-2 border-black  hover:bg-black hover:text-[#FFD700] duration-300">
            Create Fund
          </button>
        </div>

        <div className="relative">
          <div className="absolute w-full h-full z-0 overflow-hidden">
            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.6}
              duration={3}
              repeatDelay={1}
              className={cn(
                '[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]',
                'skew-y-12'
              )}
            />
          </div>

          <div className="mt-16 relative z-10">
            <div className="font-audiowide text-2xl">
              Featured Funds{' '}
              <div className="text-sm font-bold text-[#FFD700]/70">
                In-demand hedgefunds
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-4 gap-4">
              {featured?.map((dt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: 'spring',
                    delay: idx * 0.1,
                    duration: 1,
                  }}
                  viewport={{ once: true }}
                  className="bg-[#FFD700] border-[#FFD700] border-2 h-full">
                  <div className="relative h-full">
                    <div className="absolute top-2 left-2 bg-black rounded-full px-2 text-sm text-[#FFD700]">
                      ${dt?.ticker}
                    </div>
                    <div className="absolute right-2 top-2 bg-black rounded-full px-2 text-sm text-[#FFD700] flex items-center gap-2">
                      <motion.div
                        style={{
                          position: 'relative',
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: 'green',
                          boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)',
                          animation: 'glow 1.5s ease-in-out infinite',
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          boxShadow: [
                            '0 0 20px rgba(0, 255, 255, 0.8)',
                            '0 0 50px rgba(0, 255, 255, 1)',
                            '0 0 20px rgba(0, 255, 255, 0.8)',
                          ],
                        }}
                        transition={{
                          repeat: Infinity,
                          repeatType: 'loop',
                          duration: 1.5,
                        }}
                      />
                      Live
                    </div>
                    <img
                      src={dt?.banner}
                      className="aspect-square object-cover"
                    />
                    <div className="p-2 flex flex-col items-start">
                      <div className="text-black text-base font-audiowide font-normal line-clamp-2">
                        {dt?.name}
                      </div>
                      <div className="text-black/50 text-sm mt-2 font-black line-clamp-1">
                        {dt?.description}
                      </div>
                      <Link
                        to={`/dao/${dt?.address}`}
                        className="text-black mt-4 text-sm font-black underline-offset-0 hover:underline hover:underline-offset-4 duration-300 justify-self-end">
                        Details -&gt;
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
              <button className="flex items-center justify-center text-2xl font-audiowide text-[#FFD700]">
                More funds
              </button>
            </div>
          </div>

          <div className="mt-16 relative z-10">
            <div className="font-audiowide text-2xl">
              Upcoming Funds{' '}
              <div className="text-sm font-bold text-[#FFD700]/70">
                Hedgefunds launching soon
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-4 gap-4">
              {upcoming?.map((dt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: 'spring',
                    delay: idx * 0.1,
                    duration: 1,
                  }}
                  viewport={{ once: true }}
                  className="bg-[#FFD700] border-[#FFD700] border-2 h-full">
                  <div className="relative">
                    <div className="absolute top-2 left-2 bg-black rounded-full px-2 text-sm text-[#FFD700]">
                      ${dt?.ticker}
                    </div>
                    <img
                      src={dt?.banner}
                      className="aspect-square object-cover"
                    />
                    <div className="p-2">
                      <div className="text-black text-base font-audiowide font-normal line-clamp-2">
                        {dt?.name}
                      </div>
                      <div className="text-black/50 text-sm mt-2 font-black line-clamp-1">
                        {dt?.description}
                      </div>
                      <button className="text-black mt-4 text-sm font-black underline-offset-0 hover:underline hover:underline-offset-4 duration-300">
                        Details -&gt;
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16 relative z-10">
            <div className="font-audiowide text-2xl">Pool Parties</div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-4 gap-4">
              {[]?.map((dt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: 'spring',
                    delay: idx * 0.1,
                    duration: 1,
                  }}
                  viewport={{ once: true }}
                  className="border-[#FFD700] border-[1px] h-full">
                  <img
                    src={dt?.banner}
                    className="aspect-square object-cover"
                  />
                  <div className="p-2">
                    <div className="text-[#FFD700] text-base font-audiowide font-normal line-clamp-2">
                      {dt?.name}
                    </div>
                    <div className="text-[#FFD700]/50 text-sm mt-2 font-black line-clamp-1">
                      {dt?.description}
                    </div>
                    <button className="text-[#FFD700] w-full mt-4 p-1 text-sm font-black border-[#FFD700] border-2 duration-300 hover:bg-[#FFD700] hover:text-black">
                      Join Pool
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
