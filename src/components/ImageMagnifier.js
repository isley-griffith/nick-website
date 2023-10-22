/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import classnames from "classnames";
import { Skeleton } from "@mui/material";

export default function ImageMagnifier({
  src,
  width,
  height,
  small,
  sizes,
  magnifierHeight = 200,
  magnifieWidth = 200,
  zoomLevel = 1.5,
}) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  const [loaded, setLoaded] = useState(false);

  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // When element's in viewport,
        // we know it's loaded because the Image component uses lazy loading by default.
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect(); // Once loaded, there's no need to observe anymore.
        }
      });
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect(); // Clean up
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: height,
        width: width,
      }}
    >
      {!loaded && (
        <Skeleton
          variant="square"
          className="rounded-lg"
          width={small ? "31vw" : "95vw"}
          height={small ? "31vw" : "95vh"}
          animation="wave"
          sizes={sizes}
        />
      )}
      <div ref={imageRef} className="w-full h-full">
        <Image
          src={src}
          width={width}
          height={height}
          sizes={sizes}
          className={classnames(
            "w-full h-auto rounded-lg",
            loaded ? "opacity-100" : "opacity-0 h-0 w-0"
          )}
          priority
          onMouseMove={(e) => {
            // update cursor position
            const elem = e.currentTarget;
            const { top, left } = elem.getBoundingClientRect();

            // calculate cursor position on the image
            const x = e.pageX - left - window.pageXOffset;
            const y = e.pageY - top - window.pageYOffset;
            setXY([x, y]);
          }}
          onMouseLeave={() => {
            // close magnifier
            setShowMagnifier(false);
          }}
          onClick={(e) => {
            const elem = e.currentTarget;
            const { width, height } = elem.getBoundingClientRect();
            setSize([width, height]);
            setShowMagnifier((prev) => !prev);
          }}
          alt={"img"}
          // onMouseEnter={(e) => {
          //   // update image size and turn-on magnifier
          //   const elem = e.currentTarget;
          //   const { width, height } = elem.getBoundingClientRect();
          //   setSize([width, height]);
          //   setShowMagnifier(true);
          // }}
        />

        <div
          style={{
            display: showMagnifier ? "" : "none",
            position: "absolute",

            // prevent magnifier blocks the mousemove event of img
            pointerEvents: "none",
            // set size of magnifier
            height: `${magnifierHeight}px`,
            width: `${magnifieWidth}px`,
            // move element center to cursor pos
            top: `${y - magnifierHeight / 2}px`,
            left: `${x - magnifieWidth / 2}px`,
            opacity: "1", // reduce opacity so you can verify position
            border: "1px solid lightgray",
            backgroundColor: "white",
            backgroundImage: `url('${src}')`,
            backgroundRepeat: "no-repeat",

            //calculate zoomed image size
            backgroundSize: `${imgWidth * zoomLevel}px ${
              imgHeight * zoomLevel
            }px`,

            //calculate position of zoomed image.
            backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
            backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
          }}
        ></div>
      </div>
    </div>
  );
}
