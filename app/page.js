"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Joystick } from "react-joystick-component";
import useInterval from "use-interval";

export default function Home() {
  const [x, setX] = useState(0);
  const state = useRef(null);
  const trackable = useRef(false);

  useInterval(() => {
    let delta = 0;

    if (state.current === null) {
      return;
    }

    if (state.current === "RIGHT") {
      delta = -1;
    } else if (state.current === "LEFT") {
      delta = 1;
    }

    setX((x) => x + delta);
  }, 1 / 60);

  function joystickMove(e) {
    state.current = e.direction;
  }

  function joystickStop() {
    state.current = null;
  }

  return (
    <div className="h-screen p-2 overflow-hidden">
      <div className="h-[calc(100vh-140px)] relative">
        <motion.div className="w-24 h-24 bg-white absolute bottom-12 left-12"></motion.div>
        <motion.div
          style={{ x }}
          className="w-24 h-24 bg-red-500 absolute bottom-48 left-12"
        ></motion.div>
      </div>
      <div className="flex justify-center">
        <Joystick
          controlPlaneShape="axisX"
          move={joystickMove}
          stop={joystickStop}
          baseColor="white"
          stickColor="black"
          size={70}
        />
      </div>
    </div>
  );
}
