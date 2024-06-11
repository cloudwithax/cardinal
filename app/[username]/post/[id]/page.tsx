'use client';
import Layout from "@/components/Layout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

import DetailedPost from "@/components/DetailedPost";

export default function PostPage() {
    return (
        <Layout>
            <div className="flex flex-col border-solid border-neutral-800 border border-y-0 min-h-screen ">
                <div className="flex flex-row items-center sticky top-0 justify-between border-b border-neutral-800 p-2 z-50 bg-black">
                    <div className="flex flex-row items-center gap-2">
                        <Button onClick={() => window.history.back()} variant="ghost" size="iconRound">
                            <ArrowLeft />
                        </Button>
                        <h2 className="text-white text-lg pl-2">Post</h2>
                    </div>
                </div>

                <DetailedPost avatar={<Avatar><AvatarFallback>U</AvatarFallback></Avatar>} username="User" handle="user" content={<p className="text-white">Test of the detailed post</p>} />

            </div>
        </Layout>
    );
}