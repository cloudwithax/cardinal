import { ChevronRight } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Post from '@/components/Post';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-black flex flex-col relative h-svh max-h-svh w-svw max-w-svw overflow-x-hidden'>
            <div className="flex flex-row justify-center gap-4">
                {/* left column */}
                <div className="flex flex-col p-4 justify-between sticky items-end gap-4 w-1/3 min-h-screen">
                    <div className="flex flex-col items-start gap-6">
                        {/* Left column content */}
                        <Button variant="ghost" size="icon">
                            <Image src="/icons/chirp.svg" alt="Logo" width={32} height={32} />
                        </Button>

                        <Button variant="ghost" className='flex p-2'>
                            <div className='flex flex-row gap-2 items-center'>
                                <Image src="/icons/house.svg" alt="Logo" width={24} height={24} />
                                <h2 className='text-white text-lg'>Home</h2>
                            </div>
                        </Button>

                        <Button variant="ghost" className='flex p-2'>
                            <div className='flex flex-row gap-2 items-center'>
                                <Image src="/icons/search.svg" alt="Logo" width={24} height={24} />
                                <h2 className='text-white text-lg'>Explore</h2>
                            </div>
                        </Button>

                        <Button variant="ghost" className='flex p-2'>
                            <div className='flex flex-row gap-2 items-center'>
                                <Image src="/icons/bell.svg" alt="Logo" width={24} height={24} />
                                <h2 className='text-white text-lg'>Notifications</h2>
                            </div>
                        </Button>

                        <Button variant="ghost" className='flex p-2'>
                            <div className='flex flex-row gap-2 items-center'>
                                <Image src="/icons/envelope.svg" alt="Logo" width={24} height={24} />
                                <h2 className='text-white text-lg'>Messages</h2>
                            </div>
                        </Button>


                        <Button variant="ghost" className='flex p-2'>
                            <div className='flex flex-row gap-2 items-center'>
                                <Image src="/icons/person.svg" alt="Logo" width={24} height={24} />
                                <h2 className='text-white text-lg'>Profile</h2>
                            </div>
                        </Button>

                        {/* post */}

                        <Button variant="ghost" className='bg-[#8465FF]'>
                            <div className='flex flex-row gap-2 items-center '>
                                <h2 className='text-white text-lg w-32'>Post</h2>
                            </div>
                        </Button>
                    </div>

                    {/* user */}
                    <div className="w-40">
                        <Button variant="ghost" className="flex flex-col w-full items-start py-8 px-2">
                            <div className="flex flex-row gap-2 w-full items-center justify-between">
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
                <div className="w-full lg:w-2/5 h-screen border-solid border-neutral-800 border border-y-0 py-4 overflow-y-scroll">
                    {children}
                </div>


                {/* right column */}

                <div className="lg:flex hidden flex-col p-4 justify-between sticky items-start gap-4 w-full md:w-1/3 min-h-screen">
                    <div className="flex flex-col items-start gap-6">
                        {/* trending topics*/}
                        <Card className="w-[20rem]">
                            <CardHeader>
                                <CardTitle>Trends for you</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    <Button variant="ghost" className="flex flex-col w-full items-start py-8 px-2">
                                        <h2 className="text-white">Gay People</h2>
                                        <h3 className="text-neutral-400">12 chirps</h3>
                                    </Button>

                                    <Button variant="ghost" className="flex flex-col w-full items-start py-8 px-2">
                                        <h2 className="text-white">twitter</h2>
                                        <h3 className="text-neutral-400">47 chirps</h3>
                                    </Button>

                                    <Button variant="ghost" className="flex flex-col w-full items-start py-8 px-2">
                                        <h2 className="text-white">iphone 69</h2>
                                        <h3 className="text-neutral-400">62 chirps</h3>
                                    </Button>
                                </CardDescription>
                            </CardContent>
                        </Card>

                        {/* who to follow */}

                        <Card className="w-[20rem]">
                            <CardHeader>
                                <CardTitle>Who to follow</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    <Button variant="ghost" className="flex flex-col w-full items-start py-8 px-2">
                                        <div className="flex flex-row gap-2 w-full items-center justify-between">
                                            <div className="flex flex-row gap-2">
                                                <Avatar><AvatarFallback>A</AvatarFallback></Avatar>
                                                <div className="flex flex-col text-left">
                                                    <h2 className="text-white">Apple</h2>
                                                    <h2 className="text-neutral-400">@apple</h2>
                                                </div>
                                            </div>
                                            <div>
                                                <Button variant="default" >Follow</Button>
                                            </div>
                                        </div>
                                    </Button>

                                    <Button variant="ghost" className="flex flex-col w-full items-start py-8 px-2">
                                        <div className="flex flex-row gap-2 w-full items-center justify-between">
                                            <div className="flex flex-row gap-2">
                                                <Avatar><AvatarFallback>P</AvatarFallback></Avatar>
                                                <div className="flex flex-col text-left">
                                                    <h2 className="text-white">President Biden</h2>
                                                    <h2 className="text-neutral-400">@POTUS</h2>
                                                </div>
                                            </div>
                                            <div>
                                                <Button variant="default" >Follow</Button>
                                            </div>
                                        </div>
                                    </Button>
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>

                    {/* user */}


                </div>
            </div>
        </div>

    )
}