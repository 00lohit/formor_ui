import About from "./HomeScreens/About";
import Home from "./HomeScreens/Home";
import { motion, useScroll, useSpring } from "framer-motion";
import Impact from "./HomeScreens/Impact";
import { useRef, useEffect } from "react";
import Careers from "./HomeScreens/Careers";
import Teams from "./HomeScreens/Teams";
import Social from "./HomeScreens/Social";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import logo from "../public/home/redLogo.svg";
import Image from "next/image";

export default function HomeScreens() {
  gsap.registerPlugin(ScrollTrigger);

  const { scrollYProgress } = useScroll();
  const scale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (window.innerWidth > 1023) {
      const components = document.querySelectorAll("#component");
      const container = document.querySelector("#container");

      gsap.to(components, {
        xPercent: -100 * (components.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          snap: 1 / (components.length - 1),
          end: () => "+=" + container.offsetWidth,
        },
      });
    }
  }, []);

  return (
    <div
      id="container"
      className="w-screen h-screen overflow-scroll lg:flex snap-proximity snap-y scrollbar-hide"
    >
      <Home></Home>
      <About></About>
      <Impact></Impact>
      <Careers></Careers>
      <Teams></Teams>
      <Social></Social>

      <div className="z-[100] fixed left-[48%] flex items-center justify-center  bg-white bottom-5 rounded-full p-0">
        <svg
          className="hidden lg:flex"
          id="progress"
          width="60"
          height="60"
          viewBox="0 0 60 60"
        >
          <circle cx="30" cy="30" r="25" pathLength="1" className="bg" />
          <motion.circle
            cx="30"
            cy="30"
            r="25"
            pathLength="1"
            className="indicator"
            style={{ pathLength: scale }}
          />
        </svg>
        <Image alt={""} src={logo} className={`absolute`}></Image>
      </div>
    </div>
  );
}
