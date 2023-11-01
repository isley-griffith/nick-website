"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import ImageMagnifier from "@/components/ImageMagnifier";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Subway() {
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
            src="/Subway/preview.jpg"
            alt="Subway preview image"
            width="1"
            height="1"
            sizes="100vw"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center">
            <ImageMagnifier
              src="/Subway/Subway-lighting.png"
              alt="Subway lighting preview image"
              width="1"
              height="1"
              sizes="100vw"
            />
            <span className="mt-1 text-sm">Lighting</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <ImageMagnifier
              src="/Subway/Subway-unlit.png"
              alt="Subway unlit preview image"
              width="1"
              height="1"
              sizes="100vw"
            />
            <span className="mt-1 text-sm">Unlit</span>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xxs:grid-cols-1 mobile:grid-cols-1">
          <div>
            <ImageMagnifier
              small
              zoomLevel={2.5}
              src="/Subway/WhiteTiles.png"
              alt="Subway preview image"
              width="1"
              height="1"
              sizes="100vw"
            />
          </div>
          <div>
            <ImageMagnifier
              small
              zoomLevel={2.5}
              src="/Subway/BaseMetalRender.png"
              alt="Subway preview image"
              width="1"
              height="1"
              sizes="100vw"
            />
          </div>
          <div>
            <ImageMagnifier
              small
              zoomLevel={2.5}
              src="/Subway/ConcreteFloorRender.png"
              alt="Subway preview image"
              width="1"
              height="1"
              sizes="100vw"
            />
          </div>
          <div>
            <ImageMagnifier
              small
              zoomLevel={2.5}
              src="/Subway/ConcreteMod1Render.png"
              alt="Subway preview image"
              width="1"
              height="1"
              sizes="100vw"
            />
          </div>
          <div>
            <ImageMagnifier
              small
              zoomLevel={2.5}
              src="/Subway/ConcreteMod2Render.png"
              alt="Subway preview image"
              width="1"
              height="1"
              sizes="100vw"
            />
          </div>
          <div>
            <ImageMagnifier
              small
              zoomLevel={2.5}
              src="/Subway/FootPrintRender.png"
              alt="Subway preview image"
              width="1"
              height="1"
              sizes="100vw"
            />
          </div>
          <div>
            <ImageMagnifier
              small
              zoomLevel={2.5}
              src="/Subway/MetalGrateRender.png"
              alt="Subway preview image"
              width="1"
              height="1"
              sizes="100vw"
            />
          </div>

          <div>
            <ImageMagnifier
              small
              zoomLevel={2.5}
              src="/Subway/TrimSheet_001.png"
              alt="Subway preview image"
              width="1"
              height="1"
              sizes="100vw"
            />
          </div>

          <div>
            <ImageMagnifier
              small
              zoomLevel={2.5}
              src="/Subway/BrassDiamondRender.png"
              alt="Subway preview image"
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
                While smaller in scale, the Subway Stop was one of the more
                challenging projects I tackled at Gnomon School of Visual
                Effects. I focused on improving my skills in optimization and
                shader networks. Without a specific concept to work from, I
                gathered references to guide the development of the space&apos;s
                content and atmosphere, allowing me to shape its feel and
                composition.
              </p>
              <div className="flex justify-center w-full">
                <div className="mx-8 mt-6">
                  <ImageMagnifier
                    zoomLevel={2.5}
                    src="/Subway/Subway-pureref.png"
                    alt="Subway reference images"
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
                  src="/Subway/Subway-unreal-2.png"
                  alt="Subway breakdown EP"
                  width="1"
                  height="1"
                  sizes="100vw"
                  small
                />
                <span className="flex justify-center w-full mt-2 mb-4 text-xs">
                  Unreal Engine Layer System
                </span>
              </div>
              <div className="flex flex-col justify-between h-full">
                <p className="mx-6 text-xl">
                  After creating a basic blockout, I used Substance Designer to
                  make tileable materials. I then UV-mapped my models for proper
                  texel density and material assignment, addressing areas driven
                  by a trim sheet. After importing my assets into Unreal Engine,
                  I built shaders. Using a layer system, I vertex-painted areas
                  for storytelling with my materials
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2">
              <p className="mx-6 text-xl lg:order-1 md:order-1 sm:order-2 xxs:order-2 mobile:order-2">
                At this point, my shaders were complete, and my scene was
                vertex-painted to blend materials. I just needed to add props
                and graffiti decals. I started with the graffiti, which I felt
                would significantly impact the scene&apos;s atmosphere and
                story. Using Substance Designer, I created a clean atlas sheet
                with various graffiti tags and variations. I kept the base color
                black and controlled the actual color in the engine for
                flexibility. Each tag was assigned to its own decal. While this
                established a base layer of graffiti, I also crafted larger,
                more detailed &apos;hero&apos; decals in Photoshop.
              </p>
              <div className="flex flex-col lg:col-span-2 md:col-span-1 lg:order-2 md:order-2 sm:order-1 xxs:order-1 mobile:order-1">
                <ImageMagnifier
                  zoomLevel={2.5}
                  src="/Subway/Subway-unreal-1.png"
                  alt="Giants' Library large kit image"
                  width="1"
                  height="1"
                  sizes="100vw"
                  small
                />
                <span className="flex justify-center w-full mt-2 mb-4 text-xs">
                  Unreal Engine Decal Setup
                </span>
              </div>
            </div>

            <div className="grid mt-4 lg:grid-cols-3 md:grid-cols-1">
              <div className="flex flex-col justify-center w-full lg:col-span-2">
                <ImageMagnifier
                  zoomLevel={2.5}
                  src="/Subway/Kit_Small.jpg"
                  alt="Subway breakdown EP"
                  width="1"
                  height="1"
                  sizes="100vw"
                  small
                />
                <span className="flex justify-center w-full mt-2 mb-4 text-xs">
                  Prop Kit
                </span>
              </div>
              <div className="flex flex-col justify-between h-full">
                <p className="mx-6 text-xl">
                  The story began to take shape when I introduced props and
                  added pockets of details. I revisited my reference board to
                  consider the types of props I wanted to include. It was at
                  this juncture that my scene took a darker and more intense
                  turn. Incorporating a homeless encampment and scattered trash
                  on the ground altered the scene&apos;s direction, creating an
                  atmosphere of disorganization and poor maintenance in the
                  city.
                </p>
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
