"use client";
import React from "react";
import Image from "next/image";
import classnames from "classnames";
import { useRouter, usePathname } from "next/navigation";

import { FaArrowRight } from "react-icons/fa";
export default function Projects() {
  const router = useRouter();

  const projects = [
    {
      title: "Giant's Library",
      src: "/GiantsLibrary/preview.jpg",
      description: [
        "Made this scene for my environment class at Gnomon.",
        "Thank you to my professor Jon Arellano for helping me realize this piece.",
        "Based on the concept by Sean Randolph.",
        <a
          key="1"
          href="https://www.artstation.com/artwork/yqxm9"
          target="_blank"
          className="underline underline-offset-4"
        >
          Link to Sean&apos;s Concept
        </a>,
      ],
      path: "/projects/giants-library",
      alt: "Giant's Library preview image",
    },
    {
      title: "Executioner's Plaza",
      src: "/ExecutionersPlaza/preview.jpg",
      description: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, quod nemo cumque autem reiciendis laborum odio aliquam distinctio consequuntur, sequi accusamus necessitatibus ut, veniam consectetur illo et temporibus fugit ad? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ],
      path: "/projects/executioners-plaza",
      alt: "Executioner's Plaza preview image",
    },
    {
      title: "Subway",
      src: "/Subway/preview.jpg",
      description: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, quod nemo cumque autem reiciendis laborum odio aliquam distinctio consequuntur, sequi accusamus necessitatibus ut, veniam consectetur illo et temporibus fugit ad? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ],
      path: "/projects/subway",
      alt: "Subway preview image",
    },
  ];

  function handleRouteClick(path) {
    router.push(path);
  }

  return (
    <div className="mx-0 p-8 lg:pt-[0em] lg:pb-[8em] md:pb-[12em] mb-[8em] md:mt-[0em] sm:mt-[4em]">
      <div className="grid w-full grid-cols-1 mx-2 mt-18 gap-y-24 sm:gap-8 xxs:gap-8 xxs:grid-cols-1 md:grid-cols-1 md:pt-24 sm:pt-12 xxs:pt-24 mobile:pt-32">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-8 transition-all duration-200 rounded-lg hover:bg-gray-300/20 hover:scale-[100.25%]"
          >
            <div className="grid xl:mx-20 lg:mx-20 md:mx-16 sm:mx-12 xxs:mx-8 mobile:mx-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xxs:grid-cols-1 mobile:grid-cols-1 lg:justify-between md:justify-between">
              <div className="flex flex-col justify-between h-full mr-16 space-y-4 xl:order-1 lg:order-1 md:order-1 sm:order-12 xxs:order-12 mobile:order-12">
                <div className="space-y-2">
                  <h2 className="font-bold lg:text-3xl md:text-2xl sm:text-2xl xxs:text-xl mobile:text-xl mobile:mt-4">
                    {project.title}
                  </h2>
                  <p className="flex flex-col w-full">
                    {project.description.map((paragraph, index) => (
                      <span key={index} className="block">
                        {paragraph}
                      </span>
                    ))}
                  </p>
                </div>
                <div
                  onClick={() => handleRouteClick(project.path)}
                  className="flex items-center p-2 px-4 space-x-4 text-2xl font-light text-white rounded-lg cursor-pointer bg-button w-fit xl:order-2 lg:order-2 md:order-2 sm:order-12 xxs:order-12 mobile:order-12"
                >
                  <span className="xl:text-xl lg:text-xl md:text-xl sm:text-lg xxs:text-lg mobile:text-sm hover:underline hover:underline-offset-2">
                    View project
                  </span>
                  <FaArrowRight className="w-4 h-4" />
                </div>
              </div>
              <div
                className="xl:order-3 lg:order-3 md:order-3 sm:order-4 xxs:order-4 mobile:order-4 hover:cursor-pointer"
                onClick={() => handleRouteClick(project.path)}
              >
                <Image
                  src={project.src}
                  width={1}
                  height={1}
                  className="w-full h-auto rounded-xl"
                  sizes="100vw"
                  alt={project.alt}
                  priority={true}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
