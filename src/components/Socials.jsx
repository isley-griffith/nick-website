import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaArtstation } from "react-icons/fa";
import Link from "next/link";
export default function Socials() {
  return (
    <div className="flex justify-center mt-4 lg:mr-12 md:mr-12 sm:mr-12 xxs:mr-4 mobile:mr-2 mobile:text-sm sm:flex-col xxs:flex-col mobile:flex-col items-left bg-[#fafafa]/30 backdrop-blur-sm rounded-lg p-2">
      <label className="flex justify-end text-xs text-subtitle">Social</label>
      <div className="flex items-center justify-between space-x-2 text-primary">
        <FaArtstation className="" />
        <Link
          href="https://www.artstation.com/nmb3d"
          target="_blank"
          className="hover:scale-[102.5%] font-manrope"
        >
          ArtStation
        </Link>
      </div>
      <div className="flex items-center justify-between space-x-2 text-primary">
        <AiFillLinkedin className="" />
        <Link
          href="https://www.linkedin.com/in/nicholas-madsen-684052181/"
          target="_blank"
          className="hover:scale-[102.5%]"
        >
          Linkedin
        </Link>
      </div>
    </div>
  );
}
