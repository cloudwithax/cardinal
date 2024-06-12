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

  const posts = [
    {
      avatar: "johns",
      username: "John Smith",
      handle: "johns",
      content: "Just finished reading a great book!",
    },
    {
      avatar: "emilyw",
      username: "Emily Watson",
      handle: "emilyw",
      content: "Excited for the weekend getaway!",
    },
    {
      avatar: "davidm",
      username: "David Miller",
      handle: "davidm",
      content: "Trying out a new recipe tonight!",
    },
    {
      avatar: "sarahc",
      username: "Sarah Clark",
      handle: "sarahc",
      content: "Exploring a new hiking trail!",
    },
    {
      avatar: "mikep",
      username: "Mike Peterson",
      handle: "mikep",
      content: "Attending a coding conference this week!",
    },
    {
      avatar: "julial",
      username: "Julia Lee",
      handle: "julial",
      content: "Enjoying a cup of coffee in the morning.",
    },
    {
      avatar: "alexh",
      username: "Alex Harris",
      handle: "alexh",
      content: "Working on a new project. Exciting times!",
    },
    {
      avatar: "laurab",
      username: "Laura Brown",
      handle: "laurab",
      content: "Celebrating my birthday with friends!",
    },
    {
      avatar: "chrisw",
      username: "Chris Wilson",
      handle: "chrisw",
      content: "Watching my favorite TV show tonight.",
    },
    {
      avatar: "amandar",
      username: "Amanda Roberts",
      handle: "amandar",
      content: "Spending quality time with family.",
    },
  ];

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
              <Image src="/icons/bird.svg" alt="Logo" width={32} height={32} />
            </Button>
            <div className="h-8 w-8"></div>
          </div>

          {!isMobile && (
            <div className="flex w-full justify-evenly">
              <div className="relative flex w-full items-center justify-center p-4 hover:bg-neutral-500/30 transition-all hover:cursor-pointer rounded-md">
                <span className="font-bold">For You</span>
                <div className="absolute bottom-0 w-14 border-b-[3px] border-[#DD2E44]"></div>
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
                <div className="absolute bottom-0 w-14 border-b-[3px] border-[#DD2E44]"></div>
              </div>
              <div className="flex w-full items-center justify-center p-4 hover:bg-neutral-500/30 transition-all hover:cursor-pointer rounded-md">
                <span className="font-bold text-neutral-400">Following</span>
              </div>
            </div>
          )}
        </div>


        <div ref={topofTimelineRef}></div>

        <Post
          avatar={"maryj"}
          username="Mary Johnson"
          handle="maryj"
          content={"Enjoying a sunny day at the beach!"}
        />

        <>
          {posts.map((post, index) => (
            <Post
              key={index}
              avatar={post.avatar}
              username={post.username}
              handle={post.handle}
              content={post.content}
            />
          ))}
        </>

      </div>
    </Layout >
  );
};

