'use client';
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Post from '@/components/Post';
import Layout from '@/components/Layout';
import { Settings } from "lucide-react";



export default function Page() {

  return (
    <Layout>
      <div className="flex flex-col ">

        <div className="flex flex-row items-center justify-between border-b border-neutral-800 p-2">
          <h2 className="text-white text-lg">Home</h2>
          <Button variant="ghost" size="icon">
            <Settings />
          </Button>
        </div>

        <Post avatar={<Avatar><AvatarFallback>U</AvatarFallback></Avatar>} username="User" handle="user" content={<p className="text-white">Hi from Next.js!</p>} />
        <Post avatar={<Avatar><AvatarFallback>J</AvatarFallback></Avatar>} username="John Appleseed" handle="jappleseed1" content={<p className="text-white">The grass is so green today.</p>} />
        <Post
          avatar={<Avatar><AvatarFallback>M</AvatarFallback></Avatar>}
          username="Mary Johnson"
          handle="maryj"
          content={<p className="text-white">Enjoying a sunny day at the beach!</p>}
        />

        <Post
          avatar={<Avatar><AvatarFallback>A</AvatarFallback></Avatar>}
          username="Alex Brown"
          handle="alexb123"
          content={<p className="text-white">Just finished a great workout.</p>}
        />

        <Post
          avatar={<Avatar><AvatarFallback>C</AvatarFallback></Avatar>}
          username="Chris Evans"
          handle="chrisevans"
          content={<p className="text-white">Reading a fascinating book on AI.</p>}
        />

        <Post
          avatar={<Avatar><AvatarFallback>S</AvatarFallback></Avatar>}
          username="Sophia Martinez"
          handle="sophiam"
          content={<p className="text-white">Loving the new cafe in town!</p>}
        />

        <Post
          avatar={<Avatar><AvatarFallback>K</AvatarFallback></Avatar>}
          username="Kevin Lee"
          handle="kevinlee88"
          content={<p className="text-white">Just started learning guitar. It's fun!</p>}
        />

        <Post
          avatar={<Avatar><AvatarFallback>T</AvatarFallback></Avatar>}
          username="Tina Wang"
          handle="tinawang9"
          content={<p className="text-white">Beautiful sunset today.</p>}
        />

        <Post
          avatar={<Avatar><AvatarFallback>L</AvatarFallback></Avatar>}
          username="Liam Smith"
          handle="liamsmith"
          content={<p className="text-white">Had an amazing day hiking!</p>}
        />

        <Post
          avatar={<Avatar><AvatarFallback>N</AvatarFallback></Avatar>}
          username="Natalie Kim"
          handle="nataliekim"
          content={<p className="text-white">Trying out a new recipe tonight.</p>}
        />

        <Post
          avatar={<Avatar><AvatarFallback>D</AvatarFallback></Avatar>}
          username="David Brown"
          handle="davidb"
          content={<p className="text-white">Watching a great movie tonight.</p>}
        />

        <Post
          avatar={<Avatar><AvatarFallback>E</AvatarFallback></Avatar>}
          username="Emily Davis"
          handle="emilydavis"
          content={<p className="text-white">Had a fun day at the park.</p>}
        />

        <Post
          avatar={<Avatar><AvatarFallback>P</AvatarFallback></Avatar>}
          username="Paul Green"
          handle="paulg"
          content={<p className="text-white">Just bought a new bike!</p>}
        />

        <Post
          avatar={<Avatar><AvatarFallback>R</AvatarFallback></Avatar>}
          username="Rachel Adams"
          handle="rachela"
          content={<p className="text-white">Excited for the weekend trip.</p>}
        />




      </div>
    </Layout>

  );
};

