"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import ImageMagnifier from "@/components/ImageMagnifier";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function GiantsLibrary() {
  const notify = () =>
    toast("Click an image to toggle the magnifier!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  useEffect(() => {
    notify();
  }, []);
  return (
    <div className="mx-0 p-8 lg:pt-[0em] lg:pb-[8em] md:pb-[12em] mb-[8em] md:mt-[0em] sm:mt-[4em]">
      <ToastContainer />
      <div className="grid w-full grid-cols-1 gap-8 mx-2 mobile:mt-24 sm:gap-8 xxs:gap-8 xxs:grid-cols-1 md:grid-cols-1">
        <div className="flex items-center justify-center">
          <ImageMagnifier
            src="/GiantsLibrary/preview.jpg"
            alt="Giant's Library preview image"
            width="1"
            height="1"
            sizes="100vw"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center">
            <ImageMagnifier
              src="/GiantsLibrary/preview-untextured.png"
              alt="Executioner's Plaza preview image"
              width="1"
              height="1"
              sizes="100vw"
            />
            <span className="mt-1 text-sm">Lighting</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <ImageMagnifier
              src="/GiantsLibrary/preview-unlit.png"
              alt="Executioner's Plaza preview image"
              width="1"
              height="1"
              sizes="100vw"
            />
            <span className="mt-1 text-sm">Unlit</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <ImageMagnifier
            src="/GiantsLibrary/preview-secondary-shot.jpg"
            alt="Executioner's Plaza preview image"
            width="1"
            height="1"
            sizes="100vw"
          />
          <span className="mt-1 text-sm">Secondary Shot</span>
        </div>

        <div className="grid gap-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xxs:grid-cols-1 mobile:grid-cols-1">
          <div>
            <ImageMagnifier
              small
              zoomLevel={2.5}
              src="/GiantsLibrary/Flag_001.png"
              alt="Giant's Library preview image"
              width="1"
              height="1"
              sizes="100vw"
            />
          </div>
          <div>
            <ImageMagnifier
              small
              zoomLevel={2.5}
              src="/GiantsLibrary/Chair.png"
              alt="Giant's Library preview image"
              width="1"
              height="1"
              sizes="100vw"
            />
          </div>
          <div>
            <ImageMagnifier
              small
              zoomLevel={2.5}
              src="/GiantsLibrary/Chan.png"
              alt="Giant's Library preview image"
              width="1"
              height="1"
              sizes="100vw"
            />
          </div>
          <div>
            <ImageMagnifier
              small
              zoomLevel={2.5}
              src="/GiantsLibrary/Cloth.png"
              alt="Giant's Library preview image"
              width="1"
              height="1"
              sizes="100vw"
            />
          </div>
          <div>
            <ImageMagnifier
              small
              zoomLevel={2.5}
              src="/GiantsLibrary/SandStone.png"
              alt="Giant's Library preview image"
              width="1"
              height="1"
              sizes="100vw"
            />
          </div>
          <div>
            <ImageMagnifier
              small
              zoomLevel={2.5}
              src="/GiantsLibrary/Brass_001.png"
              alt="Giant's Library preview image"
              width="1"
              height="1"
              sizes="100vw"
            />
          </div>
        </div>
        <div className="flex-grow w-full">
          <h2 className="flex justify-center w-full mt-4 text-3xl font-bold">
            Breakdown
          </h2>
          <div className="mt-4 space-y-8">
            <div>
              <p className="mx-6 text-xl">
                My approach to Giants&apos; Library was to use the concept as a
                baseline rather than creating a replica. The original concept
                showed a clean, active library, but I wanted to give it an
                abandoned look, where nature had taken over after about 50 years
                of neglect. While I retained the original design language, I
                told my own story.
              </p>
              <div className="flex justify-center w-full">
                <div className="mx-8 mt-6">
                  <ImageMagnifier
                    zoomLevel={2.5}
                    src="/GiantsLibrary/GL-pureref.png"
                    alt="Giants' Library reference image"
                    width="1"
                    height="1"
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
            <div className="grid mt-4 lg:grid-cols-3 md:grid-cols-1">
              <div className="flex flex-col justify-center w-full lg:col-span-2">
                <ImageMagnifier
                  zoomLevel={2.5}
                  src="/GiantsLibrary/HoudiniBreakdownGL.png"
                  alt="GiantsLibrary breakdown EP"
                  width="1"
                  height="1"
                  sizes="100vw"
                  small
                />
                <span className="flex justify-center w-full mt-2 mb-4 text-xs">
                  RGB mask setup in Unreal Engine.
                </span>
              </div>
              <div className="flex flex-col justify-between h-full">
                <p className="mx-6 text-xl">
                  After determining the environment&apos;s location, I blocked
                  out the scene in Maya at real-world scale. Then, I used ZBrush
                  to give the models an abandoned look, simulating about 50
                  years of wear from erosion and nature. I later retopologized
                  and UV-mapped the models, preserving the new details. In
                  Substance Designer, I created tileable materials and used
                  Substance Painter to generate masks. These masks were used in
                  Unreal Engine, distributed into RGB channels, and controlled
                  using lerps to manage the textures.
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2">
              <p className="mx-6 text-xl lg:order-1 md:order-1 sm:order-2 xxs:order-2 mobile:order-2">
                Once the props were completed, and the foundational elements of
                the scene were in place, it became a set dressing exercise. I
                considered how objects would be displaced and affected by 50
                years of abandonment. It was during this phase that I decided to
                make the chair the centerpiece of the scene. I found that it
                created a sense of calm within the chaos, a place where things
                remained undisturbed. It would serve as a refuge for a weary
                traveler who stumbled upon this abandoned place.
              </p>
              <div className="flex flex-col lg:col-span-2 md:col-span-1 lg:order-2 md:order-2 sm:order-1 xxs:order-1 mobile:order-1">
                <ImageMagnifier
                  zoomLevel={2.5}
                  src="/GiantsLibrary/GL-large-kit.jpg"
                  alt="Giants' Library large kit image"
                  width="1"
                  height="1"
                  sizes="100vw"
                  small
                />
                <span className="flex justify-center w-full mt-2 mb-4 text-xs">
                  Prop Kit Large
                </span>
              </div>
            </div>
            <p className="font-bold">
              Made with: Maya, ZBrush, Substance Painter, Substance Designer,
              Marvelous Designer, Marmoset Toolbag 4, Unreal Engine 5.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
