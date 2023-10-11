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
  const world = useRef([]);
  const player = useRef();

  useInterval(() => {
    const p = player.current.getBoundingClientRect();

    const overlap = (rect1, rect2) =>
      !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
      );

    const worldOverlap = (p) =>
      world.current.some((x) => overlap(p, x.getBoundingClientRect()));

    if (
      checkKey("a") ||
      checkKey("ф") ||
      checkKey("arrowleft") ||
      state.current === "LEFT"
    ) {
      const pNew = {
        right: p.right - 2,
        left: p.left - 2,
        bottom: p.bottom,
        top: p.top,
      };

      if (worldOverlap(pNew)) {
        return;
      }

      setX((x) => x + 2);
    } else if (
      checkKey("d") ||
      checkKey("в") ||
      checkKey("arrowright") ||
      state.current === "RIGHT"
    ) {
      const pNew = {
        right: p.right + 2,
        left: p.left + 2,
        bottom: p.bottom,
        top: p.top,
      };

      if (worldOverlap(pNew)) {
        return;
      }

      setX((x) => x - 2);
    } else if (
      checkKey("w") ||
      checkKey("ц") ||
      checkKey("arrowup") ||
      state.current === "FORWARD"
    ) {
      const pNew = {
        right: p.right,
        left: p.left,
        bottom: p.bottom - 2,
        top: p.top - 2,
      };

      if (worldOverlap(pNew)) {
        return;
      }

      setY((y) => y + 2);
    } else if (
      checkKey("s") ||
      checkKey("ы") ||
      checkKey("arrowdown") ||
      state.current === "BACKWARD"
    ) {
      const pNew = {
        right: p.right,
        left: p.left,
        bottom: p.bottom + 2,
        top: p.top + 2,
      };

      if (worldOverlap(pNew)) {
        return;
      }

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
      <div className="h-[calc(100vh-200px)] relative">
        <motion.div
          style={{ x: x + 600, y: y + 0 }}
          className="w-[100px] h-[100px] bg-red-500 absolute"
          ref={(r) => world.current.push(r)}
        ></motion.div>
        <motion.div
          style={{ x: x + 0, y: y + 200 }}
          className="w-[100px] h-[100px] bg-red-500 absolute"
          ref={(r) => world.current.push(r)}
        ></motion.div>
        <motion.div
          style={{ x: x + 800, y: y + 400 }}
          className="w-[100px] h-[100px] bg-red-500 absolute"
          ref={(r) => world.current.push(r)}
        ></motion.div>
        <motion.img
          style={{ x: x + 0, y: y + 0 }}
          src="/building.png"
          className="w-[400px] absolute"
          ref={(r) => world.current.push(r)}
        />
        <motion.div
          className="w-[100px] h-[100px] bg-white absolute bottom-[calc(50vh-150px)] -translate-x-1/2 left-1/2"
          ref={player}
        ></motion.div>
      </div>
      <div className="flex justify-center sm:hidden">
        <div className="flex items-center gap-32 z-20">
          <button className="border p-8 rounded-full"></button>
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
