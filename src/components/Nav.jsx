"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import classnames from "classnames";
import { motion } from "framer-motion";

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  let tabs = [
    { id: "/", label: "Home" },
    { id: "/resume", label: "Resume" },
  ];
  const [activeTab, setActiveTab] = useState(pathname);

  const handleNavClick = (nav) => {
    if (activeTab === nav) {
      return;
    }

    switch (nav) {
      case "/":
        router.push("/");
        break;
      case "/about":
        router.push("/about");
        break;
      case "/resume":
        router.push("/resume");
        break;
      default:
        break;
    }
  };

  return (
    <nav className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xxs:grid-cols-1 text-xs bg-[#fafafa]/80 backdrop-blur-sm lg:rounded-full md:rounded-full sm:rounded-xl xxs:rounded-xl mobile:rounded-xl min-w-max p-2 z-50 mobile:p-2">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`${
            activeTab === tab.id ? "" : "hover:text-gray-400"
          } relative rounded-full px-3 py-1.5 text-sm font-medium text-black outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
          onClick={() => {
            handleNavClick(tab.id);
            setActiveTab(tab.id);
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
