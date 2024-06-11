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
import { useRouter } from "next/navigation";



export default function Layout({ children }: { children: React.ReactNode }) {

    const router = useRouter();


    return (
        <div className='bg-black flex flex-row relative h-screen w-svw max-w-svw overflow-x-hidden' suppressHydrationWarning>
            {/* left column */}
            <div className="md:flex hidden flex-col p-4 pr-14 justify-between sticky top-0 items-end gap-4 w-1/3 min-h-screen">
                <div className="flex flex-col items-start gap-6">
                    {/* Left column content */}
                    <Button onClick={() => router.push('/')} variant="ghost" size="iconRound">
                        <Image src="/icons/chirp.svg" alt="Logo" width={32} height={32} />
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

                    {/* post */}

                    <Button size="defaultRound" variant="ghost" className='bg-[#8465FF]'>
                        <div className='flex flex-row gap-2 items-center '>
                            <h2 className='text-white text-lg w-40'>Chirp</h2>
                        </div>
                    </Button>
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
                <div className="md:hidden h-16 flex justify-evenly items-center border-t border-neutral-800 sticky bottom-0 border-x bg-black/80 backdrop-blur z-50">
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
                                            <h2 className="text-white">Apple</h2>
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
                                            <h2 className="text-white">President Biden</h2>
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
                </div>

                {/* user */}


            </div>
        </div>

    )
}