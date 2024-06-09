'use client';

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { Input } from "@/components/ui/input"
import { useRef, useState, useEffect, use } from "react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useRouter } from 'next/navigation';
import Image from "next/image";


export default function ExplorePage() {

    const router = useRouter();

    const topofTimelineRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [topOfTimelineShown, setTopOfTimelineShown] = useState(true);
    const [showTopBar, setShowTopBar] = useState(true);
    const prevScrollPos = useRef(0);

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

        return () => {
            if (topofTimelineRef.current) {
                observer.unobserve(topofTimelineRef.current);
            }
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
                                <SheetContent side='left'>
                                    <div onClick={() => router.push('/guest')} className="flex flex-col items-start gap-6">
                                        {/* Left column content */}
                                        <Button variant="ghost" size="iconRound">
                                            <Avatar><AvatarFallback>G</AvatarFallback></Avatar>
                                        </Button>

                                        <div>
                                            <h2 className="text-xl font-bold tracking-tight">User</h2>
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


                    {isTopBarVisible && (
                        <>
                            <div className="flex flex-row items-center justify-center p-2 gap-12 pl-4">
                                <Input placeholder="Search" className="w-5/6" />
                                <Button variant="ghost" size="icon">
                                    <Settings />
                                </Button>
                            </div>
                            <div className="flex w-full justify-evenly">
                                <div className="relative flex w-full items-center justify-center p-4 hover:bg-neutral-500/30 transition-all hover:cursor-pointer rounded-md">
                                    <span className="font-bold">For You</span>
                                    <div className="absolute bottom-0 w-14 border-b-[3px] border-[#8465FF]"></div>
                                </div>
                                <div className="flex w-full items-center justify-center p-4 hover:bg-neutral-500/30 transition-all hover:cursor-pointer rounded-md">
                                    <span className="font-bold text-neutral-400">Trending</span>
                                </div>

                                <div className="flex w-full items-center justify-center p-4 hover:bg-neutral-500/30 transition-all hover:cursor-pointer rounded-md">
                                    <span className="font-bold text-neutral-400">Popular</span>
                                </div>
                            </div>
                        </>

                    )}
                </div>


                <div ref={topofTimelineRef}></div>


            </div>

        </Layout>
    );
}