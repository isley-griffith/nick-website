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

        <div className="flex items-center justify-center">
          <ImageMagnifier
            src="/GiantsLibrary/preview-untextured.jpg"
            alt="Giant's Library preview image"
            width="1"
            height="1"
            sizes="100vw"
          />
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
      </div>
    </div>
  );
}
