"use client";

import React from "react";
import Nav from "@/components/Nav";
import Socials from "@/components/Socials";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TopNav() {
  const router = useRouter();
  return (
    <div className="z-50 grid items-center justify-center w-full grid-cols-3 lg:fixed md:fixed sm:fixed xxs:fixed mobile:absolute bg-none rounded-t-xl">
      <button
        className="relative mobile:text-sm flex flex-col ml-8 text-left bg-[#fafafa]/30 backdrop-blur-sm w-fit rounded-lg p-2"
        onClick={() => router.push("/")}
      >
        <div className="absolute w-2 h-2 ml-2 bg-green-400 border border-black rounded-full opacity-50 right-2 top-2.5"></div>
        <span className="text-xs text-subtitle">Online</span>
        <span className="font-normal">Isley Griffith</span>
        <span className="text-sm text-subtitle">Los Angeles, CA</span>
      </button>
      <div className="flex justify-center w-full mt-4">
        <Nav />
      </div>
      <div className="flex justify-end m-4">
        <Socials />
      </div>
    </div>
  );
}
