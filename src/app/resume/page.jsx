/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import classnames from "classnames";
import Image from "next/image";

import { FaFileDownload } from "react-icons/fa";

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
      description: [
        "At Colorado College, I explored a spectrum of design disciplines, from graphic design to architecture. My senior thesis incorporated digital 3D art as a narrative tool, and for that, I was honored with an award by the school.",
      ],
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
      description: [
        "At Gnomon, I learned industry-standard techniques in animation, modeling, texturing, and rendering. This training steered me towards specializing in environment creation for the gaming industry.",
      ],
      alt: "Bay Engineering Logo",
    },
  ];

  const skills = [
    ["Creation", "Maya", "ZBrush", "Houdini", "Marvelous Designer"],
    [
      "Texturing",
      "Substance 3D Designer",
      "Substance 3D Painter",
      "Marmoset Toolbag",
      "SpeedTree",
    ],
    ["Rendering", "Redshift", "V-Ray", "Gaea", "Unreal Engine 4/5"],
  ];

  const miscSkills = [
    [
      "PBR Texturing",
      "Tilable Materials",
      "Unreal Blueprints",
      "Environment Creation",
    ],
    ["Concept Art", "3D Modeling", "Sculpting", "Animation"],
    ["English / Spanish", "Procedural Modeling", "Rigging", "VFX"],
  ];

  const awards = [
    {
      awardLocation: "Gnomon - School of VFX, Games, & Animation",
      awards: [
        {
          awardName: "Best of Term - Games Environment | Interior",
          dateIssued: "Dec. 2022",
        },
        {
          awardName: "Best of Term - Games Environment | Medieval",
          dateIssued: "Aug. 2023",
        },
      ],
    },
    {
      awardLocation: "Colorado College",
      awards: [
        {
          awardName: "Outstanding Senior Thesis",
          dateIssued: "May 2020",
        },
      ],
    },
  ];

  return (
    <div
      className="mx-0 p-8 lg:pt-[0em] lg:pb-[8em] md:pb-[12em] mb-[8em] md:mt-[0em] sm:mt-[4em]"
      ref={scope}
    >
      <div className="grid w-full grid-cols-1 mx-2 sm:gap-8 xxs:gap-8 xxs:grid-cols-1 md:grid-cols-1 md:pt-24 sm:pt-12 xxs:pt-24 mobile:pt-32">
        <div className="mt-8 lg:mx-24">
          <div className="flex lg:justify-start md:justify-center sm:justify-center xxs:justify-center mobile:justify-center">
            <h1 className="text-3xl font-bold">Skills</h1>
          </div>
          <div className="lg:mx-12">
            <h3 className="mt-4 text-2xl font-bold lg:opacity-100 md:opacity-100 sm:opacity-0 xxs:opacity-0 mobile:opacity-0">
              Software
            </h3>
            <div className="grid grid-cols-3">
              {skills.map((skillets, index) => (
                <div
                  key={index}
                  className="flex flex-col mt-2 space-y-2 lg:items-start md:items-start sm:items-center xxs:items-center mobile:items-center"
                >
                  {skillets.map((skill, index) => (
                    <span
                      key={index}
                      className="font-normal first:font-bold first:text-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:mx-12">
            <div className="flex lg:justify-start md:justify-center sm:justify-center xxs:justify-center mobile:justify-center">
              <h1 className="mt-4 text-lg font-bold">Miscellaneous</h1>
            </div>
            <div className="grid grid-cols-3">
              {miscSkills.map((skillets, index) => (
                <div
                  key={index}
                  className="flex flex-col mt-2 space-y-2 lg:items-start md:items-start sm:items-center xxs:items-center mobile:items-center"
                >
                  {skillets.map((skill, index) => (
                    <span key={index} className="font-normal">
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <h1 className="mt-8 text-3xl font-bold lg:mx-24 lg:text-left md:text-center sm:text-center xxs:text-center mobile:text-center lg:mb-0 md:mb-0 sm:mb-0 xxs:mb-0 mobile:mb-8">
          Awards
        </h1>
        <ul className="flex flex-col items-start justify-center mb-8 space-y-4 lg:mx-32">
          {awards.map((award, index) => (
            <li key={index} className="flex flex-col w-full opacity-0">
              <div className="text-xl font-bold">{award.awardLocation}</div>
              {award.awards.map((award, index) => (
                <li key={index} className="ml-6 font-normal list-disc">
                  <div className="flex justify-between">
                    <span>{award.awardName}</span>
                    <div className="flex items-center flex-grow h-1 mx-12 mt-3 border-b-2 border-dotted border-slate-300/40"></div>

                    <span>{award.dateIssued}</span>
                  </div>
                </li>
              ))}
            </li>
          ))}
        </ul>
        <h1 className="text-3xl font-bold lg:mx-24 lg:text-left md:text-center sm:text-center xxs:text-center mobile:text-center lg:mb-0 md:mb-0 sm:mb-0 xxs:mb-0 mobile:mb-8">
          Education
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
                    <img
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
                  <span className="text-lg font-normal">{experience.name}</span>
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
                        <span key={index} className="ml-16 first:underline">
                          {description}
                        </span>
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
                          <span key={index} className="ml-16">
                            {description}
                          </span>
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
      <a
        className="fixed flex items-center p-2 px-4 space-x-2 rounded-lg cursor-pointer bottom-8 right-8 bg-button"
        href="https://drive.google.com/file/d/1QMGz3XumykvA9nmWK_P0H9tikvB0GW3l/view?usp=sharing"
        target="_blank"
      >
        <span className="text-white">Download Full Resume</span>
        <FaFileDownload className="w-4 h-4 text-white" />
      </a>
    </div>
  );
}
