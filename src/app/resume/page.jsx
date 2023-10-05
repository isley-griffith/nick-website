"use client";
import React, { useEffect, useRef } from "react";
import classnames from "classnames";
import Image from "next/image";
import { useAnimate, useInView } from "framer-motion";

export default function Resume() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("li", { opacity: 1 });
  });

  const experiences = [
    {
      name: "Colorado College",
      title: null,
      start: "Aug. 2017",
      end: "May 2021",
      img: "/ColoradoCollegeIcon.png",
      description: ["B.S. in Computer Science"],
      alt: "Colorado College Logo",
    },
    {
      name: "Bay Engineering",
      title: "Software Engineering Intern",
      start: "Nov. 2020",
      img: "/BayEngineeringLogo.jpeg",
      end: "Apr. 2021",
      description: [
        "Developed machine learning model to predict battery voltage levels during lunar events for NASA's Lunar Reconnaissance Orbiter using TensorFlow.",
        "Used a Recurrent Neural Network called Long Short-Term Memory to optimize for long-term dependency.",
      ],
      alt: "Bay Engineering Logo",
    },
    {
      name: "ByteLion",
      title: "Software Engineer",
      start: "Apr. 2021",
      end: "Sept. 2021",
      img: "/ByteLionLogo.png",
      description: [
        "Created mobile app, CareerCircle, for Allegis Group, in React Native & TypeScript for Android and iOS that helped underprivileged people find jobs.",
        "Implemented authentication, including SSO, using Auth0.",
        "Developed entire onboarding section for new users.",
      ],
      alt: "ByteLion Logo",
    },
    {
      name: "Olive AI",
      title: "Software Engineer",
      start: "Sept. 2021",
      end: "Sept. 2022",
      img: "/OliveIcon.png",
      description: [
        "Built admin facing tool and desktop app using React, TypeScript, NextJS, and GraphQL used by hospitals and healthcare companies such as Blue Cross/Blue Shield.",
        "Maintained and added features to the 'Loop Library' (Olive's app store), an Electron/React app with a Node/Express backend.",
        "Handled displaying the “Loop” Catalog, end user subscriptions and installations, submissions and updates from 'Loop' developers, \nand administrative moderation for Olive employees that reviewed 'Loops.'",
      ],
      alt: "Olive AI Logo",
    },
    {
      name: "RealT",
      title: "Full Stack Software Engineer",
      start: "Jan. 2023",
      end: "Present",
      img: "/RealTLogo.png",
      description: [
        "Architected and developed admin dashboard for company process streamlining and data management.",
        "Leveraged PostgreSQL and React + NextJS to create an intuitive and responsive dashboard.",
        "Improved company efficiency and provided a reliable source of truth for data.",
      ],
      alt: "RealT Logo",
    },
  ];
  return (
    <div className="mx-0 p-8 lg:pt-[0em] lg:pb-[8em] md:pb-[12em] mb-[8em] md:mt-[0em] sm:mt-[4em]">
      <div className="grid w-full grid-cols-1 mx-2 sm:gap-8 xxs:gap-8 xxs:grid-cols-1 md:grid-cols-1 md:pt-24 sm:pt-12 xxs:pt-24 mobile:pt-32">
        <h1 className="text-3xl font-bold lg:mx-24 lg:text-left md:text-left sm:text-left xxs:text-left mobile:text-center lg:mb-0 md:mb-0 sm:mb-0 xxs:mb-0 mobile:mb-8">
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
                      {experience.description.map((description, index) => (
                        <li key={index} className="ml-16 ">
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
        <div className="lg:mx-24">
          <div className="flex items-center mr-12 space-x-8">
            <h1 className="mt-8 text-3xl font-bold">Skills</h1>
            {/* <div className="flex items-center flex-grow mt-8 space-x-4">
              <div className="flex w-full h-0 border-t border-dashed border-primary" />
              <div className="w-4 h-4 ml-2 bg-orange-400 border border-black rounded-full"></div>
            </div> */}
          </div>
          <div className="lg:mx-12">
            <h3 className="mt-4 text-xl font-normal">Languages</h3>
            <div className="grid grid-cols-3">
              <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <ul>
                <li>TypeScript</li>
                <li>Python</li>
                <li>Java</li>
              </ul>
              <ul>
                <li>SQL</li>
                <li>PostgreSQL</li>
                <li>Bash</li>
              </ul>
            </div>
            <h3 className="mt-4 text-xl font-normal">Frameworks & Libraries</h3>
            <div className="grid grid-cols-3">
              <ul>
                <li>Node.js</li>
                <li>Next.js</li>
                <li>Tailwind</li>
              </ul>
              <ul>
                <li>Prisma</li>
                <li>Jest</li>
                <li>GraphQL</li>
              </ul>
              <ul>
                <li>React Native</li>
              </ul>
            </div>
            <h3 className="mt-4 text-xl font-normal">Tools</h3>
            <div className="grid grid-cols-3">
              <ul>
                <li>Git</li>
                <li>AWS (S3)</li>
                <li>Docker</li>
              </ul>
              <ul>
                <li>Firebase</li>
                <li>Cloud Firestore</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
