"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Joystick } from "react-joystick-component";
import useInterval from "use-interval";
import { checkKey } from "@rwh/keystrokes";

export default function Home() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const state = useRef(null);

  useInterval(() => {
    if (checkKey("a") || checkKey("ф") || checkKey("arrowleft")) {
      setX((x) => x + 2);
    } else if (checkKey("d") || checkKey("в") || checkKey("arrowright")) {
      setX((x) => x - 2);
    } else if (checkKey("w") || checkKey("ц") || checkKey("arrowup")) {
      setY((y) => y + 2);
    } else if (checkKey("s") || checkKey("ы") || checkKey("arrowdown")) {
      setY((y) => y - 2);
    }

    if (state.current === "RIGHT") {
      setX((x) => x - 2);
    } else if (state.current === "LEFT") {
      setX((x) => x + 2);
    } else if (state.current === "FORWARD") {
      setY((y) => y + 2);
    } else if (state.current === "BACKWARD") {
      setY((y) => y - 2);
    }
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
        <motion.div
          style={{ x, y }}
          className="w-24 h-24 bg-red-500 absolute bottom-1/2 left-1/2"
        ></motion.div>
        <motion.img style={{ x, y }} src="/building.png" width={400} />
        <motion.div className="w-24 h-24 bg-white absolute bottom-[calc(50vh-150px)] -translate-x-1/2 left-1/2"></motion.div>
      </div>
      <div className="flex justify-center">
        <div className="flex items-center gap-32">
          <div className="bg-white inline-block p-3 rounded-full">
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
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </svg>
          </div>
          <Joystick
            move={joystickMove}
            stop={joystickStop}
            baseColor="white"
            stickColor="black"
            size={70}
          />
        </div>
      </div>
    </div>
  );
}
