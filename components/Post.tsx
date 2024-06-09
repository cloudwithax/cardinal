import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Repeat } from "lucide-react";
import AnimatedHeart from "./AnimatedHeart";
import AnimatedRepost from "./AnimatedRepost";

import { CalendarDays } from "lucide-react"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link";


export default function Post({ avatar, username, handle, content, media }: { avatar: React.ReactNode, username: string, handle: string, content: React.ReactNode, media?: React.ReactNode }) {
    return (
        <div className="flex flex-col border-b border-neutral-800 ">
            <div className="flex flex-row gap-4 px-2 pt-4 pb-2">
                {avatar}
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-2">
                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <Link href={`/${handle}`} className="text-white font-bold hover:underline">{username}</Link>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                                <div className="flex justify-start gap-4">
                                    {avatar}
                                    <div className="flex flex-col gap-1">
                                        <Link href={`/${handle}`} className="text-white font-bold hover:underline">{username}</Link>
                                        <h4 className="text-sm text-gray-500">@{handle}</h4>
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
                        <h3 className="text-neutral-400">@{handle}</h3>
                    </div>
                    <div className="flex flex-col gap-2">
                        {content}
                    </div>

                    {media && (
                        <div className="flex flex-row">
                            {media}
                        </div>
                    )}
                </div>
            </div>

            {/* post controls */}
            <div className="flex flex-row gap-8 px-2 pb-2 ml-12">



                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="iconRound">
                                <MessageCircle size={20} />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                            <p>Reply</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="iconRound">
                                <AnimatedRepost />
                            </Button>

                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                            <p>Rechirp</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="iconRound">
                                <AnimatedHeart />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                            <p>Like</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    )
}