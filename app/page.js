"use client";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [phone, setPhone] = useState();

  function onDrag(_, info) {
    console.log(info.offset.x);
  }

  function checkPhone() {
    setPhone("phone");
  }

  return (
    <div className="max-w-sm mx-auto h-screen">
      <AnimatePresence>
        {phone && (
          <motion.div
            layoutId={phone}
            className="h-[calc(100vh)] bg-white absolute w-full max-w-sm"
          ></motion.div>
        )}
      </AnimatePresence>
      <div className="h-[calc(100vh-120px)] relative">
        <motion.div className="w-24 h-24 bg-white rounded-xl absolute bottom-12 left-12"></motion.div>
      </div>
      <div className="gap-2 flex px-2">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="bg-white p-3 rounded-xl"
          layoutId="phone"
          onClick={checkPhone}
        >
          {!phone && (
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
          )}
        </motion.button>
        <div className="bg-gray-500 w-full rounded-xl p-3 flex justify-between">
          <div>
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
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </div>
          <motion.button
            onDrag={onDrag}
            whileTap={{ scale: 0.9 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            className="bg-white rounded-md h-6 w-12 flex justify-center"
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
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </motion.button>
          <div>
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
