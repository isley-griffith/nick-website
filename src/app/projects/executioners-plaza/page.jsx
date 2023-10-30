"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import ImageMagnifier from "@/components/ImageMagnifier";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ExecutionersPlaza() {
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
        <div className="flex flex-col items-center justify-center">
          <ImageMagnifier
            src="/ExecutionersPlaza/preview.jpg"
            alt="Executioner's Plaza preview image"
            width="1"
            height="1"
            sizes="100vw"
          />
          <span className="mt-2 text-lg">Main Shot</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center">
            <ImageMagnifier
              src="/ExecutionersPlaza/preview-untextured.jpg"
              alt="Executioner's Plaza preview image"
              width="1"
              height="1"
              sizes="100vw"
            />
            <span className="mt-1 text-sm">Lighting</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <ImageMagnifier
              src="/ExecutionersPlaza/preview-unlit.jpg"
              alt="Executioner's Plaza preview image"
              width="1"
              height="1"
              sizes="100vw"
            />
            <span className="mt-1 text-sm">Unlit</span>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xxs:grid-cols-1 mobile:grid-cols-1">
          <div>
            <ImageMagnifier
              zoomLevel={2.5}
              src="/ExecutionersPlaza/GuillotineRender_002.png"
              alt="Executioner's Plaza preview image"
              width="1"
              height="1"
              sizes="100vw"
              small
            />
          </div>
          <div>
            <ImageMagnifier
              zoomLevel={2.5}
              src="/ExecutionersPlaza/WagonRender_001.png"
              alt="Executioner's Plaza preview image"
              width="1"
              height="1"
              sizes="100vw"
              small
            />
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xxs:grid-cols-1 mobile:grid-cols-1">
          <div>
            <ImageMagnifier
              zoomLevel={2.5}
              src="/ExecutionersPlaza/GrinderRender.png"
              alt="Executioner's Plaza preview image"
              width="1"
              height="1"
              sizes="100vw"
              small
            />
          </div>
          <div>
            <ImageMagnifier
              zoomLevel={2.5}
              src="/ExecutionersPlaza/BucketRender.png"
              alt="Executioner's Plaza preview image"
              width="1"
              height="1"
              sizes="100vw"
              small
            />
          </div>
          <div>
            <ImageMagnifier
              zoomLevel={2.5}
              src="/ExecutionersPlaza/AnvilRender.png"
              alt="Executioner's Plaza preview image"
              width="1"
              height="1"
              sizes="100vw"
              small
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
                Reference is crucial in my creative process. During school, I
                aimed to elevate my concepts, and this wouldn&apos;t have been
                possible without reference materials. For
                &quot;Executioner&apos;s Plaza,&quot; I focused on medieval
                props and architecture. For instance, I envisioned the
                foreground building as a blacksmith&apos;s shop, and from there,
                I used blacksmith&apos;s tools to guide my design.
              </p>
              <div className="flex justify-center w-full">
                <div className="mx-8 mt-4 ">
                  <ImageMagnifier
                    zoomLevel={2.5}
                    src="/ExecutionersPlaza/EP-pureref.png"
                    alt="Executioner's Plaza reference image"
                    width="1"
                    height="1"
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-1">
              <div className="flex flex-col justify-center w-full lg:col-span-2">
                <ImageMagnifier
                  zoomLevel={2.5}
                  src="/ExecutionersPlaza/HoudiniBreakdownEP.png"
                  alt="Executioner's Plaza breakdown EP"
                  width="1"
                  height="1"
                  sizes="100vw"
                  small
                />
                <span className="flex justify-center w-full mt-2 mb-4 text-xs">
                  Asset Processing in Houdini
                </span>
              </div>
              <div className="flex flex-col justify-between h-full">
                <p className="mx-6 text-xl">
                  After assigning purposes to each building and space, I focused
                  on creating a modular scene. I began with a 2D color blockout
                  to identify reusable assets and hero props. With a tight
                  10-week schedule, I needed an efficient pipeline for modeling,
                  sculpting, UV mapping, and texturing. First, I blocked out
                  props in Maya, keeping polygon counts low. Then, in ZBrush, I
                  sculpted and textured using alphas from Photoshop and
                  Substance Designer. To optimize for Unreal Engine, I used
                  Houdini to remesh and UV map objects, achieving success about
                  80% of the time. For the remaining 20%, I manually
                  retopologized or simplified models based on the blockout.
                </p>
                <span className="flex text-[128px] font-mono justify-end text-right mx-6 xl:opacity-100 lg:opacity-100 md:opacity-0 sm:opacity-0 xxs:opacity-0 mobile:opacity-0 md:h-0 sm:h-0 xxs:h-0 mobile:h-0">
                  2
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2">
              <p className="mx-6 text-xl lg:order-1 md:order-1 sm:order-2 xxs:order-2 mobile:order-2">
                After preparing the asset for texturing in Substance Painter, I
                used a mix of generators and hand-painted masks. I exported
                these masks and combined them in Photoshop to create a texture
                that drove RGB masks in Unreal Engine, particularly useful for
                tileable materials. For elements like walls and the ground, I
                employed a layer system and vertex painting.
              </p>
              <div className="flex flex-col lg:col-span-2 md:col-span-1 lg:order-2 md:order-2 sm:order-1 xxs:order-1 mobile:order-1">
                <ImageMagnifier
                  zoomLevel={2.5}
                  src="/ExecutionersPlaza/EP-large-kit.jpg"
                  alt="Executioner's Plaza large kit image"
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
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
              <div className="flex flex-col lg:col-span-2 md:col-span-1 sm:col-span-1 xxs:col-span-1 mobile:col-span-1 lg:order-1 md:order-1 sm:order-2 xxs:order-2 mobile:order-2">
                <ImageMagnifier
                  zoomLevel={2.5}
                  src="/ExecutionersPlaza/EP-medium-kit.jpg"
                  alt="Executioner's Plaza large kit image"
                  width="1"
                  height="1"
                  sizes="100vw"
                  small
                />
                <span className="flex justify-center w-full mt-2 mb-4 text-xs">
                  Prop Kit Small
                </span>
              </div>
              <p className="mx-6 text-xl lg:order-1 md:order-1 sm:order-2 xxs:order-2 mobile:order-2">
                Once modeling and texturing were sorted, I focused on set
                dressing. I approached it by considering the story I wanted to
                tell within the spaces while keeping composition and lighting in
                mind. This brought the entire scene together.
              </p>
            </div>
            <p>
              Made with: Maya, ZBrush, Substance Painter, Substance
              Designer, Houdini, Marvelous Designer, Quixel Mixer, Marmoset
              Toolbag 4, Unreal Engine 5.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
