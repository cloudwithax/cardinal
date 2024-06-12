'use client'
import Layout from '@/components/Layout';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, MapPin } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';
import { Link as LinkIcon } from 'lucide-react';

export default function UserPage() {
    const pathname = usePathname();
    const username = pathname.split('/')[1]; // Extract the username from the pathname

    return (
        <Layout>
            <div className="mx-auto w-full border-solid border-neutral-800 border border-y-0 min-h-screen">
                {/* username and back button */}
                <div className="flex flex-row items-center sticky top-0 justify-between border-b border-neutral-800 p-2 z-50 bg-black">
                    <div className="flex flex-row items-center gap-2">
                        <Button onClick={() => window.history.back()} variant="ghost" size="iconRound">
                            <ArrowLeft />
                        </Button>
                        <h2 className="text-white text-lg pl-2">{username}</h2>
                    </div>
                </div>

                <div>
                    <AspectRatio ratio={3 / 1}>
                        <Image
                            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                            alt="Photo by Drew Beamer"
                            fill
                            className="object-cover"
                        />
                    </AspectRatio>
                </div>

                <div className="flex items-start justify-between px-4 py-3">
                    <Avatar className='-mt-[4.5rem] h-32 w-32 cursor-pointer rounded-full z-50'>
                        <AvatarFallback>{username}</AvatarFallback>
                    </Avatar>
                    <Button size="defaultRound" variant="ghost" className='bg-[#DD2E44]'>
                        <div className='flex flex-row gap-2 items-center '>
                            <h2 className='text-white text-sm'>Edit profile</h2>
                        </div>
                    </Button>
                </div>

                <div className="mt-2 px-4">
                    <h2 className="text-xl font-bold tracking-tight">User</h2>
                    <span className="text-neutral-400">@{username}</span>
                </div>

                <div className="mt-4 px-4">
                    <span>test bio</span>
                </div>

                <div className="mt-3 flex items-center space-x-4 px-3.5">
                    <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4 opacity-70" />

                        <span className="text-neutral-400">Anywhere, USA</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <LinkIcon className="h-4 w-4 opacity-70" />
                        <Link className="text-sky-500 hover:underline" href="https://clxud.dev" target="_blank">clxud.dev</Link>
                    </div>
                    <div className="flex items-center space-x-1">
                        <CalendarDays className="h-4 w-4 opacity-70" />

                        <span className="text-gray-700 dark:text-gray-400"> Joined May 2024</span>
                    </div>
                </div>

                <div className="mt-3 flex items-center space-x-4 px-4 gap-2">
                    <div className="flex flex-row cursor-pointer hover:underline">
                        <p><span className="font-bold">0</span> Followers</p>
                    </div>
                    <div className="cursor-pointer hover:underline">
                        <p><span className="font-bold">0</span> Following</p>
                    </div>
                </div>

                <ul className="mt-3 flex justify-evenly border-b border-neutral-800">
                    <li className="relative flex w-full items-center justify-center p-4 hover:bg-neutral-500/30 transition-all hover:cursor-pointer rounded-md">
                        <span className="font-bold">Posts</span>
                        <div className="absolute bottom-0 w-14 border-b-[3px] border-[#DD2E44]"></div>
                    </li>
                    <li className="flex w-full items-center justify-center p-4 hover:bg-neutral-500/30 transition-all hover:cursor-pointer rounded-md">
                        <span className="font-bold text-neutral-400">Replies</span>
                    </li>
                    <li className="flex w-full items-center justify-center p-4 hover:bg-neutral-500/30 transition-all hover:cursor-pointer rounded-md">
                        <span className="font-bold text-neutral-400">Media</span>
                    </li>
                    <li className="flex w-full items-center justify-center p-4 hover:bg-neutral-500/30 transition-all hover:cursor-pointer rounded-md">
                        <span className="font-bold text-neutral-400">Likes</span>
                    </li>
                </ul>
            </div>
        </Layout >
    );
}
