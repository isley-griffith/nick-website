"use client";
import React, { useEffect } from "react";
import classnames from "classnames";
import Image from "next/image";
import { SiAutodesk, SiUnrealengine } from "react-icons/si";

import { useAnimate } from "framer-motion";

export default function Resume() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("li", { opacity: 1 });
  });

  const experiences = [
    {
      name: "Colorado College",
      title: null,
      start: "Aug. 2016",
      end: "May 2020",
      img: "/ColoradoCollegeIcon.png",
      degree: "B.A. in Integrative Design and Architecture (IDA)",
      degreeLink:
        "https://www.coloradocollege.edu/academics/dept/art/requirements/concentrations/ida.html",
      description: [],
      alt: "Colorado College Logo",
    },
    {
      name: "Gnomon - School of VFX, Games, & Animation",
      title: "Student, Games Track",
      start: "Sept. 2021",
      img: "/gnomon_logo.png",
      end: "Sept. 2023",
      degree: "Certificate in Digital Production: Games Track",
      degreeLink:
        "https://www.gnomon.edu/academics/certificate-digital-production/",

      description: [],
      alt: "Bay Engineering Logo",
    },
  ];
  return (
    <div className="mx-0 p-8 lg:pt-[0em] lg:pb-[8em] md:pb-[12em] mb-[8em] md:mt-[0em] sm:mt-[4em]">
      <div className="grid w-full grid-cols-1 mx-2 sm:gap-8 xxs:gap-8 xxs:grid-cols-1 md:grid-cols-1 md:pt-24 sm:pt-12 xxs:pt-24 mobile:pt-32">
        <div className="mt-8 lg:mx-24">
          <div className="flex lg:justify-start md:justify-center sm:justify-center xxs:justify-center mobile:justify-center">
            <h1 className="text-3xl font-bold">Skills</h1>
            {/* <div className="flex items-center flex-grow mt-8 space-x-4">
              <div className="flex w-full h-0 border-t border-dashed border-primary" />
              <div className="w-4 h-4 ml-2 bg-orange-400 border border-black rounded-full"></div>
            </div> */}
          </div>
          <div className="lg:mx-12">
            <h3 className="mt-4 text-xl font-normal">Software</h3>
            <div className="grid grid-cols-3">
              <ul>
                <li className="flex items-center space-x-2">
                  <span>Maya</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>ZBrush</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>Unreal Engine</span>
                </li>
              </ul>
              <ul>
                <li>Substance 3D Designer</li>
                <li>Substance 3D Painter</li>
                <li>Photoshop</li>
              </ul>
              <ul>
                <li>Redshift</li>
                <li>Marmoset Toolbag</li>
                <li>Marvelous Designer</li>
              </ul>

              <ul>
                <li>Gaea</li>
                <li>SpeedTree</li>
                <li>Houdini</li>
              </ul>
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold lg:mx-24 lg:text-left md:text-center sm:text-center xxs:text-center mobile:text-center lg:mb-0 md:mb-0 sm:mb-0 xxs:mb-0 mobile:mb-8">
          Experience
        </h1>
        <ul
          className="flex flex-col items-start justify-center space-y-4 lg:mx-32"
          ref={scope}
        >
          {experiences.map((experience, index) => (
            <li key={index} className="flex flex-col w-full opacity-0">
              <div className="flex items-center space-x-4">
                <span
                  className={classnames(
                    "max-h-8 max-w-8 rounded-full flex items-center justify-center ring-2 ring-primary"
                  )}
                >
                  {experience.img && (
                    <Image
                      src={experience?.img}
                      className="min-w-full min-h-full rounded-full aspect-square"
                      quality={100}
                      width={32}
                      height={32}
                      alt={experience.alt}
                    />
                  )}
                </span>
                <div className="flex justify-between w-full space-x-10">
                  <span className="font-normal">{experience.name}</span>
                  <div className="flex items-center flex-grow h-1 mt-3 border-b-2 border-dotted border-slate-300/40"></div>
                  <span className="mr-8 font-normal min-w-fit">{`${experience.start} - ${experience.end}`}</span>
                </div>
              </div>

              {index !== experiences.length - 1 && (
                <div className="flex justify-center mt-4 ml-4">
                  <div className="flex w-full border-l border-dashed border-primary">
                    <ul className="flex flex-col list-disc  max-w-[70vw]">
                      <li className="ml-16">
                        <a
                          href={experience.degreeLink}
                          target="_blank"
                          className="text-orange-400 underline underline-offset-2"
                        >
                          {experience.degree}
                        </a>
                      </li>
                      {experience.description.map((description, index) => (
                        <li key={index} className="ml-16 first:underline">
                          {description}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {index === experiences.length - 1 && (
                <div>
                  <div className="flex justify-center mt-4 ml-4">
                    <div className="flex w-full border-l border-dashed lg:h-24 md:h-32 sm:h-48 xs:h-fit border-primary">
                      <ul className="flex flex-col list-disc">
                        <li className="ml-16">
                          <a
                            href={experience.degreeLink}
                            target="_blank"
                            className="text-orange-400 underline underline-offset-2"
                          >
                            {experience.degree}
                          </a>
                        </li>
                        {experience.description.map((description, index) => (
                          <li key={index} className="ml-16">
                            {description}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="w-4 h-4 mt-2 ml-[.55rem] bg-orange-400 border border-black rounded-full"></div>
                  <div className="flex h-8 mt-2 ml-4 border-l border-dashed border-primary" />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
