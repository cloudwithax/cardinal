'use client';

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export default function MessagesPage() {
    return (
        <Layout>
            <div className="flex flex-col  border-solid border-neutral-800 border border-y-0 min-h-screen ">

                <div className="flex flex-row items-center justify-between border-b border-neutral-800 p-2">
                    <h2 className="text-white text-lg pl-2">Messages</h2>
                    <Button variant="ghost" size="icon">
                        <Settings />
                    </Button>
                </div>
            </div>

        </Layout>
    );
}