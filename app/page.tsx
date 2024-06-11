'use client';
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Post from '@/components/Post';
import Layout from '@/components/Layout';
import { useRouter } from 'next/navigation';
import { use, useEffect, useRef, useState } from "react";
import { Settings } from "lucide-react";
import { motion } from 'framer-motion';


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";




export default function Page() {

  const router = useRouter();

  const topofTimelineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [topOfTimelineShown, setTopOfTimelineShown] = useState(true);
  const [showTopBar, setShowTopBar] = useState(true);
  const prevScrollPos = useRef(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTopOfTimelineShown(entry.isIntersecting);
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (topofTimelineRef.current) {
      observer.observe(topofTimelineRef.current);
    }

    // event listener for window width, set isMobile to true if window width is less than 768px
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);


    return () => {
      if (topofTimelineRef.current) {
        observer.unobserve(topofTimelineRef.current);
      }

      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = containerRef.current ? containerRef.current.scrollTop : 0;
      if (prevScrollPos.current > currentScrollPos) {
        setShowTopBar(true);
      } else {
        setShowTopBar(false);
      }
      prevScrollPos.current = currentScrollPos;


    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const isTopBarVisible = showTopBar && topOfTimelineShown;



  return (
    <Layout>
      <div ref={containerRef} className="flex flex-col  border-solid border-neutral-800 border border-y-0 min-h-screen ">



        <div className={`flex flex-col border-b border-neutral-800 sticky top-0 bg-black /50 backdrop-blur z-50 `}>
          <div className="md:hidden flex flex-row justify-between p-2">
            <div>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="iconRound">
                    <Avatar><AvatarFallback>G</AvatarFallback></Avatar>
                  </Button>
                </SheetTrigger>

                <SheetContent side='left' className="pr-20">


                  <div className="flex flex-col items-start gap-6">
                    {/* Left column content */}
                    <Button onClick={() => router.push('/guest')} variant="ghost" size="iconRound">
                      <Avatar><AvatarFallback>G</AvatarFallback></Avatar>
                    </Button>

                    <div>
                      <h2 onClick={() => router.push('/guest')} className="text-xl font-bold cursor-pointer hover:underline">User</h2>
                      <span className="text-neutral-400">@guest</span>
                    </div>

                    <div className="flex items-center space-x-4 gap-2">
                      <div className="flex flex-row cursor-pointer hover:underline">
                        <p><span className="font-bold">0</span> Followers</p>
                      </div>
                      <div className="cursor-pointer hover:underline">
                        <p><span className="font-bold">0</span> Following</p>
                      </div>
                    </div>


                    <Button onClick={() => router.push('/guest')} size="defaultRound" variant="ghost" className='flex p-2'>
                      <div className='flex flex-row gap-2 items-center'>
                        <Image src="/icons/person.svg" alt="Logo" width={24} height={24} />
                        <h2 className='text-white text-lg'>Profile</h2>
                      </div>
                    </Button>

                    {/* post */}

                  </div>

                </SheetContent>
              </Sheet>



            </div>
            <Button onClick={() => router.replace('/')} variant="ghost" size="iconRound">
              <Image src="/icons/chirp.svg" alt="Logo" width={32} height={32} />
            </Button>
            <div className="h-8 w-8"></div>
          </div>

          {!isMobile && (
            <div className="flex w-full justify-evenly">
              <div className="relative flex w-full items-center justify-center p-4 hover:bg-neutral-500/30 transition-all hover:cursor-pointer rounded-md">
                <span className="font-bold">For You</span>
                <div className="absolute bottom-0 w-14 border-b-[3px] border-[#8465FF]"></div>
              </div>
              <div className="flex w-full items-center justify-center p-4 hover:bg-neutral-500/30 transition-all hover:cursor-pointer rounded-md">
                <span className="font-bold text-neutral-400">Following</span>
              </div>
            </div>
          )}


          {isMobile && isTopBarVisible && (
            <div className="flex w-full justify-evenly">
              <div className="relative flex w-full items-center justify-center p-4 hover:bg-neutral-500/30 transition-all hover:cursor-pointer rounded-md">
                <span className="font-bold">For You</span>
                <div className="absolute bottom-0 w-14 border-b-[3px] border-[#8465FF]"></div>
              </div>
              <div className="flex w-full items-center justify-center p-4 hover:bg-neutral-500/30 transition-all hover:cursor-pointer rounded-md">
                <span className="font-bold text-neutral-400">Following</span>
              </div>
            </div>
          )}
        </div>


        <div ref={topofTimelineRef}></div>

        <Post avatar={<Avatar><AvatarFallback>U</AvatarFallback></Avatar>} username="User" handle="user" content={<p className="text-white">Hi from Next.js!</p>} />
        <Post avatar={<Avatar><AvatarFallback>J</AvatarFallback></Avatar>} username="John Appleseed" handle="jappleseed1" content={<p className="text-white">The grass is so green today.</p>} />
        <Post
          avatar={<Avatar><AvatarFallback>M</AvatarFallback></Avatar>}
          username="Mary Johnson"
          handle="maryj"
          content={<p className="text-white">Enjoying a sunny day at the beach!</p>}
        />

        <Post
          avatar={<Avatar><AvatarFallback>A</AvatarFallback></Avatar>}
          username="Alex Brown"
          handle="alexb123"
          content={<p className="text-white">Just finished a great workout.</p>}
        />

        <Post
          avatar={<Avatar><AvatarFallback>C</AvatarFallback></Avatar>}
          username="Chris Evans"
          handle="chrisevans"
          content={<p className="text-white">Reading a fascinating book on AI.</p>}
        />

        <Post
          avatar={<Avatar><AvatarFallback>S</AvatarFallback></Avatar>}
          username="Sophia Martinez"
          handle="sophiam"
          content={<p className="text-white">Loving the new cafe in town!</p>}
        />

        <Post
          avatar={<Avatar><AvatarFallback>K</AvatarFallback></Avatar>}
          username="Kevin Lee"
          handle="kevinlee88"
          content={<p className="text-white">{"Just started learning guitar. It's fun!"}</p>}
        />

        <Post
          avatar={<Avatar><AvatarFallback>T</AvatarFallback></Avatar>}
          username="Tina Wang"
          handle="tinawang9"
          content={<p className="text-white">Beautiful sunset today.</p>}
        />

        <Post
          avatar={<Avatar><AvatarFallback>L</AvatarFallback></Avatar>}
          username="Liam Smith"
          handle="liamsmith"
          content={<p className="text-white">Had an amazing day hiking!</p>}
        />

        <Post
          avatar={<Avatar><AvatarFallback>N</AvatarFallback></Avatar>}
          username="Natalie Kim"
          handle="nataliekim"
          content={<p className="text-white">Trying out a new recipe tonight.</p>}
        />

        <Post
          avatar={<Avatar><AvatarFallback>D</AvatarFallback></Avatar>}
          username="David Brown"
          handle="davidb"
          content={<p className="text-white">Watching a great movie tonight.</p>}
        />

        <Post
          avatar={<Avatar><AvatarFallback>E</AvatarFallback></Avatar>}
          username="Emily Davis"
          handle="emilydavis"
          content={<p className="text-white">Had a fun day at the park.</p>}
        />

        <Post
          avatar={<Avatar><AvatarFallback>P</AvatarFallback></Avatar>}
          username="Paul Green"
          handle="paulg"
          content={<p className="text-white">Just bought a new bike!</p>}
        />

        <Post
          avatar={<Avatar><AvatarFallback>R</AvatarFallback></Avatar>}
          username="Rachel Adams"
          handle="rachela"
          content={<p className="text-white">Excited for the weekend trip.</p>}
        />




      </div>
    </Layout >
  );
};

