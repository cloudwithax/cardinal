import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Repeat } from "lucide-react";
import AnimatedHeart from "./AnimatedHeart";
import AnimatedRepost from "./AnimatedRepost";


export default function Post({ avatar, username, handle, content }: { avatar: React.ReactNode, username: string, handle: string, content: React.ReactNode }) {
    return (
        <div className="flex flex-col border-b border-neutral-800 ">
            <div className="flex flex-row gap-4 px-2 py-4">
                {avatar}
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-2">
                        <h2 className="text-white font-bold">{username}</h2>
                        <h3 className="text-neutral-400">@{handle}</h3>
                    </div>
                    <div className="flex flex-col gap-2">
                        {content}
                    </div>
                </div>
            </div>

            {/* post controls */}
            <div className="flex flex-row gap-4 px-2 pb-2 ml-12">
                <Button variant="ghost" size="icon">
                    <MessageCircle />
                </Button>

                <Button variant="ghost" size="icon">
                    <AnimatedRepost />
                </Button>

                <Button variant="ghost" size="icon">
                    <AnimatedHeart />
                </Button>





            </div>


        </div>
    )
}