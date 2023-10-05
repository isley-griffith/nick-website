"use client";
import React, { useEffect } from "react";
import { useAnimate } from "framer-motion";

export default function Home() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("div", { opacity: 1 });
  });

  return (
    <div
      className="p-8 lg:pt-[0em] lg:pb-[8em] md:pb-[8em] mb-[8em] sm:mt-[2em]"
      ref={scope}
    >
      <div className="grid w-full grid-cols-2 opacity-0 sm:grid-cols-1 sm:gap-8 xxs:gap-8 xxs:grid-cols-1 mobile:grid-cols-1 md:grid-cols-2 md:pt-24 sm:pt-12 xxs:pt-24 mobile:pt-36 mobile:gap-12">
        <div className="flex lg:items-end md:items-center lg:w-72 md:w-72">
          <div className="flex flex-col text-sm lg:mb-4 lg:ml-12 lg:-order-1 md:-order-1 sm:order-1 xxs:order-1 mobile:order-1 mobile:space-y-10 lg:space-y-28 md:space-y-8 sm:space-y-10 xxs:space-y-10">
            <p>
              Over 3 years of experience in software development and UI design.
              Graduated from Colorado College with a degree in Computer Science.
            </p>
            <div className="flex space-x-2">
              <span>Last Updated</span>
              <span className="font-mono font-light">10-04-23</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:pt-72 md:pt-0 md:order-1 sm:-order-1 xxs:-order-1 mobile:-order-1 lg:text-[80px] md:text-[48px] sm:text-[64px] xxs:text-[64px] mobile:text-[64px] text-[80px] font-light leading-none">
          <div>Software Developer</div>
          <div>and UI Designer based in LA.</div>
        </div>
      </div>
    </div>
  );
}
