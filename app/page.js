"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  function onDrag(_, info) {
    console.log(info.offset.x);
  }

  return (
    <div className="max-w-sm mx-auto h-screen p-2">
      <div className="h-[calc(100vh-140px)] relative">
        <motion.div className="w-24 h-24 bg-white absolute bottom-12 left-12"></motion.div>
      </div>
      <div className="gap-2 flex">
        <motion.button className="bg-white p-3" layoutId="phone">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="black"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
        </motion.button>
        <div className="bg-gray-500 w-full flex justify-center">
          <motion.button
            onDrag={onDrag}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            className="bg-white h-12 absolute w-12 flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
