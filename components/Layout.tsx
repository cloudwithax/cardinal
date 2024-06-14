import { BadgeCheck, BarChart3, CalendarDays, ChevronRight, ImageIcon, Plus, Smile } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { EmojiStyle, Theme } from 'emoji-picker-react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useRouter } from "next/navigation";

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog"

import { DestyledPopover, DestyledPopoverContent, DestyledPopoverTrigger } from "@/components/ui/destyledpopover"

import { Textarea } from "@/components/ui/textarea"
import EmojiPicker from 'emoji-picker-react';
import { useRef, useState } from "react";
import Twemoji from 'react-twemoji';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import Link from "next/link";




function PostDialog({ trigger }: { trigger: React.ReactNode }) {
    const inputRef = useRef<HTMLTextAreaElement>(null);

    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="w-2xl items-center absolute top-[15rem]">

                <div className="flex flex-col gap-4">
                    <Textarea
                        rows={4}
                        maxLength={280}
                        ref={inputRef}
                        placeholder="What's happening?"
                        className="w-full overflow-y-hidden text-lg mt-12 resize-none border-none focus:border-none focus:ring-0 focus:ring-offset-0 bg-black text-white"
                        onInput={(event) => {
                            event.currentTarget.style.height = "auto";
                            event.currentTarget.style.height = event.currentTarget.scrollHeight + "px";

                        }}

                    />

                    {/* media */}
                    <div className="flex flex-row gap-2">
                        <Button size="iconRound" variant="ghost">
                            <ImageIcon stroke="grey" />
                        </Button>

                        <DestyledPopover modal>
                            <DestyledPopoverTrigger asChild>
                                <Button size="iconRound" variant="ghost">
                                    <Smile stroke="grey" />
                                </Button>
                            </DestyledPopoverTrigger>
                            <DestyledPopoverContent>
                                <EmojiPicker emojiVersion={"11"} theme={Theme.DARK} emojiStyle={EmojiStyle.TWITTER} lazyLoadEmojis={true} onEmojiClick={
                                    (emojiObject, event) => {
                                        if (inputRef.current) {
                                            inputRef.current.value += emojiObject.emoji;
                                        }
                                    }
                                } />
                            </DestyledPopoverContent>
                        </DestyledPopover>

                    </div>


                    <DialogFooter>
                        <Button size="defaultRound" variant="ghost" className='bg-[#DD2E44]' type="submit">Post</Button>
                    </DialogFooter>
                </div>
            </DialogContent>

        </Dialog>
    )
}



export default function Layout({ children }: { children: React.ReactNode }) {

    const router = useRouter();




    return (
        <div className='bg-black flex flex-row relative h-svh max-h-svh w-svw max-w-svw overflow-x-hidden' suppressHydrationWarning>
            {/* left column */}
            <div className="md:flex hidden flex-col p-4 pr-14 justify-between sticky top-0 items-end gap-4 w-1/3 min-h-screen">
                <div className="flex flex-col items-start gap-6">
                    {/* Left column content */}
                    <Button onClick={() => router.push('/')} variant="ghost" size="iconRound">
                        <Image src="/icons/bird.svg" alt="Logo" width={32} height={32} />
                    </Button>

                    <Button onClick={() => router.push('/')} size="defaultRound" variant="ghost" className='flex p-2'>
                        <div className='flex flex-row gap-2 items-center'>
                            <Image src="/icons/house.svg" alt="Logo" width={24} height={24} />
                            <h2 className='text-white text-lg'>Home</h2>
                        </div>
                    </Button>

                    <Button onClick={() => router.push('/explore')} size="defaultRound" variant="ghost" className='flex p-2'>
                        <div className='flex flex-row gap-2 items-center'>
                            <Image src="/icons/search.svg" alt="Logo" width={24} height={24} />
                            <h2 className='text-white text-lg'>Explore</h2>
                        </div>
                    </Button>

                    <Button onClick={() => router.push('/notifications')} size="defaultRound" variant="ghost" className='flex p-2'>
                        <div className='flex flex-row gap-2 items-center'>
                            <Image src="/icons/bell.svg" alt="Logo" width={24} height={24} />
                            <h2 className='text-white text-lg'>Notifications</h2>
                        </div>
                    </Button>

                    <Button onClick={() => router.push('/messages')} size="defaultRound" variant="ghost" className='flex p-2'>
                        <div className='flex flex-row gap-2 items-center'>
                            <Image src="/icons/envelope.svg" alt="Logo" width={24} height={24} />
                            <h2 className='text-white text-lg'>Messages</h2>
                        </div>
                    </Button>


                    <Button onClick={() => router.push('/guest')} size="defaultRound" variant="ghost" className='flex p-2'>
                        <div className='flex flex-row gap-2 items-center'>
                            <Image src="/icons/person.svg" alt="Logo" width={24} height={24} />
                            <h2 className='text-white text-lg'>Profile</h2>
                        </div>
                    </Button>

                    <PostDialog trigger={
                        <Button size="defaultRound" variant="ghost" className='bg-[#DD2E44]'>
                            <div className='flex flex-row gap-2 items-center '>
                                <h2 className='text-white text-lg w-40'>Post</h2>
                            </div>
                        </Button>
                    } />


                </div>

                {/* user */}
                <div className="flex flex-col items-start gap-6 w-42 mr-12">
                    <Button onClick={() => router.push('/guest')} size="defaultRound" variant="ghost" className="flex flex-col w-40 items-start py-8 px-2">
                        <div className="flex flex-row gap-2 items-center justify-between">
                            <div className="flex flex-row gap-2">
                                <Avatar><AvatarFallback>G</AvatarFallback></Avatar>
                                <div className="flex flex-col text-left">
                                    <h2 className="text-white">Guest</h2>
                                    <h2 className="text-neutral-400">@guest</h2>
                                </div>
                            </div>

                        </div>
                    </Button>

                </div>

            </div>

            {/* timeline section */}
            <div className="w-full lg:w-[67ch] h-auto">
                {children}
                <div className="flex flex-col md:hidden h-auto sticky bottom-0 z-50">
                    <div className="flex flex-row justify-end mb-4 px-4">
                        <PostDialog trigger={
                            <Button onClick={() => router.push('/')} size="iconRound" variant="ghost" className='h-14 w-14 bg-[#DD2E44]'>
                                <Plus />
                            </Button>
                        } />
                    </div>
                    <div className="flex md:hidden justify-evenly h-16 items-center border-t border-neutral-800 border-x bg-black/80 backdrop-blur w-full">
                        <Button onClick={() => router.push('/')} size="defaultRound" variant="ghost" className='flex p-2'>
                            <div className='flex flex-row gap-2 items-center'>
                                <Image src="/icons/house.svg" alt="Logo" width={32} height={32} />
                            </div>
                        </Button>

                        <Button onClick={() => router.push('/explore')} size="defaultRound" variant="ghost" className='flex p-2'>
                            <div className='flex flex-row gap-2 items-center'>
                                <Image src="/icons/search.svg" alt="Logo" width={32} height={32} />
                            </div>
                        </Button>

                        <Button onClick={() => router.push('/notifications')} size="defaultRound" variant="ghost" className='flex p-2'>
                            <div className='flex flex-row gap-2 items-center'>
                                <Image src="/icons/bell.svg" alt="Logo" width={32} height={32} />
                            </div>
                        </Button>

                        <Button onClick={() => router.push('/messages')} size="defaultRound" variant="ghost" className='flex p-2'>
                            <div className='flex flex-row gap-2 items-center'>
                                <Image src="/icons/envelope.svg" alt="Logo" width={32} height={32} />
                            </div>
                        </Button>

                    </div>

                </div>


            </div>


            {/* right column */}

            <div className="lg:flex hidden flex-col p-4 justify-between sticky top-0 items-start gap-4 w-full md:w-1/3 min-h-screen">
                <div className="flex flex-col items-start gap-6">
                    {/* trending topics*/}
                    <Card className="w-[20rem]">
                        <CardHeader>
                            <CardTitle>Trends for you</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Button variant="ghost" className="flex flex-col w-full items-start py-8 px-2">
                                <h2 className="text-white">Hello World</h2>
                                <h3 className="text-neutral-400">1.2k posts</h3>
                            </Button>

                            <Button variant="ghost" className="flex flex-col w-full items-start py-8 px-2">
                                <h2 className="text-white">twitter</h2>
                                <h3 className="text-neutral-400">489 posts</h3>
                            </Button>

                            <Button variant="ghost" className="flex flex-col w-full items-start py-8 px-2">
                                <h2 className="text-white">iPhone 14</h2>
                                <h3 className="text-neutral-400">298 posts</h3>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* who to follow */}

                    <Card className="w-[20rem]">
                        <CardHeader>
                            <CardTitle>Who to follow</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm">
                            <div className="flex flex-col w-full items-start rounded-md hover:bg-neutral-500/30 transition-all hover:cursor-pointer py-4 px-2">
                                <div className="flex flex-row gap-2 w-full items-center justify-between">
                                    <div className="flex flex-row gap-2">
                                        <Avatar><AvatarFallback>A</AvatarFallback></Avatar>
                                        <div className="flex flex-col text-left">
                                            <div className="flex flex-row gap-1 items-center">
                                                <HoverCard>
                                                    <HoverCardTrigger asChild>
                                                        <Link href={`/apple`} className="text-white font-bold hover:underline">Apple</Link>
                                                    </HoverCardTrigger>
                                                    <HoverCardContent className="w-80">
                                                        <div className="flex justify-start gap-4">
                                                            <Avatar>
                                                                <AvatarFallback>A</AvatarFallback>
                                                            </Avatar>
                                                            <div className="flex flex-col gap-1">
                                                                <div className="flex flex-row gap-1 items-center">
                                                                    <Link href={`/apple`} className="text-white font-bold hover:underline">Apple</Link>

                                                                    <BadgeCheck className="text-[#DD2E44]" height={16} width={16} />

                                                                </div>
                                                                <h4 className="text-sm text-gray-500">@apple</h4>
                                                                <p className="text-sm">
                                                                    Test description
                                                                </p>
                                                                <div className="flex items-center pt-2">
                                                                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                                                                    <span className="text-xs text-muted-foreground">
                                                                        Joined May 2024
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </HoverCardContent>
                                                </HoverCard>
                                                <BadgeCheck className="text-[#DD2E44]" height={16} width={16} />
                                            </div>

                                            <h2 className="text-neutral-400">@apple</h2>

                                        </div>
                                    </div>
                                    <div>
                                        <Button size="defaultRound" variant="default">Follow</Button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col w-full items-start rounded-md hover:bg-neutral-500/30 transition-all hover:cursor-pointer py-4 px-2">
                                <div className="flex flex-row gap-2 w-full items-center justify-between">
                                    <div className="flex flex-row gap-2">
                                        <Avatar><AvatarFallback>P</AvatarFallback></Avatar>
                                        <div className="flex flex-col text-left">
                                            <div className="flex flex-row gap-1 items-center text-nowrap">
                                                <HoverCard>
                                                    <HoverCardTrigger asChild>
                                                        <Link href={`/POTUS`} className="text-white font-bold hover:underline">President Biden</Link>
                                                    </HoverCardTrigger>
                                                    <HoverCardContent className="w-80">
                                                        <div className="flex justify-start gap-4">
                                                            <Avatar>
                                                                <AvatarFallback>P</AvatarFallback>
                                                            </Avatar>
                                                            <div className="flex flex-col gap-1">
                                                                <div className="flex flex-row gap-1 items-center text-nowrap">
                                                                    <Link href={`/POTUS`} className="text-white font-bold hover:underline">President Biden</Link>

                                                                    <BadgeCheck className="text-[#DD2E44]" height={16} width={16} />

                                                                </div>
                                                                <h4 className="text-sm text-gray-500">@POTUS</h4>
                                                                <p className="text-sm">
                                                                    Test description
                                                                </p>
                                                                <div className="flex items-center pt-2">
                                                                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                                                                    <span className="text-xs text-muted-foreground">
                                                                        Joined May 2024
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </HoverCardContent>
                                                </HoverCard>
                                                <BadgeCheck className="text-[#DD2E44]" height={16} width={16} />
                                            </div>
                                            <h2 className="text-neutral-400">@POTUS</h2>
                                        </div>
                                    </div>
                                    <div>
                                        <Button size="defaultRound" variant="default">Follow</Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* copyright info and other links and stuff */}

                    <div className="flex flex-col w-[20rem] pl-4">
                        <div className="flex flex-row gap-2 items-center">
                            <Image src="/icons/bird.svg" alt="Logo" width={16} height={16} />
                            <h2 className="text-neutral-400 text-sm">© 2024 cardinal.social</h2>
                        </div>

                    </div>


                </div>







            </div>
        </div>

    )
}