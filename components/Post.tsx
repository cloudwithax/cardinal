import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";

export default function Post({ avatar, username, handle, content }: { avatar: React.ReactNode, username: string, handle: string, content: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-4 border-b border-neutral-800 ">
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
        </div>
    )
}