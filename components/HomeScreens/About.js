import Image from "next/image";

import desk from "../../public/about/desk.svg";
import light from "../../public/about/light.svg";
import aboutSvg from "../../public/about/about.svg";
import window from "../../public/about/window.svg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import logo from "../../public/home/logo.svg";

import mission from "../../public/home/mission.svg";
import vision from "../../public/home/vision.svg";

const Sub = ({ title, image, text }) => {
  const Variants = {
    hidden: { opacity: 0, top: 100 },
    visible: {
      top: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <motion.div
      transition={1}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={Variants}
      className="flex   flex-1 relative m-1"
    >
      <Image
        alt={""}
        src={image}
        className={"z-20  absolute top-0 left-0"}
      ></Image>

      <div className="about  bottom-0 z-10 ml-6 mt-6 flex justify-center items-center flex-col p-2">
        <h4
          className="text-xl lg:text-2xl 2xl:text-3xl mb-4  lg:px-0"
          style={{
            color: "#22255E",
            fontFamily: "Anton",
          }}
        >
          {title}
        </h4>
        <p
          className="text-xs  2xl:text-base  lg:px-0 text-center mb-1"
          style={{
            fontFamily: "Montserrat",
            color: "rgba(0, 0, 0, 0.6)",
          }}
        >
          {text}
        </p>
      </div>
    </motion.div>
  );
};

export default function About() {
  return (
    <div
      id="component"
      style={{ backgroundColor: "#FDFBFF" }}
      className="w-screen h-screen flex-shrink-0  overflow-hidden  relative  snap-center "
    >
      <motion.div
        style={{
          width: 141,
          height: 28,
          x: 20,
          y: 10,
          marginLeft: 0,
          marginRight: 0,
        }}
        className="mt-5 hidden lg:flex"
      >
        <Image alt={""} src={logo} />
      </motion.div>

      <div className="absolute w-screen  overflow-hidden flex lg:justify-center lg:pr-0 top-0 justify-end pr-3">
        <div className="z-10 w-64 lg:w-auto" style={{}}>
          <Image alt={""} className="lg:w-72 2xl:w-96" src={aboutSvg}></Image>
        </div>
      </div>

      <div className="absolute w-screen overflow-visible flex justify-center -top-4 lg:-left-44 ml-10">
        <div
          className="z-10 relative right-44 -top-2 scale-75 2xl:scale-100"
          style={{}}
        >
          <Image alt={""} src={light}></Image>
        </div>
        <div
          className="z-10  ml-5 lg:ml-10 relative right-44  -top-12 scale-75 2xl:scale-100"
          style={{}}
        >
          <Image alt={""} src={light}></Image>
        </div>
      </div>

      <div className="h-screen relative">
        <motion.div className="hidden absolute lg:flex lg:top-0 2xl:left-4 2xl:top-12 lg:scale-75 2xl:scale-100 ">
          <Image alt={""} src={window}></Image>
        </motion.div>
        <motion.div className=" absolute  bottom-0 lg:-bottom-5 2xl:bottom-12 2xl:left-12 lg:scale-75 2xl:scale-100 ">
          <Image alt={""} className="w-[40%] lg:hidden" src={desk}></Image>
          <Image alt={""} className="hidden lg:flex" src={desk}></Image>
        </motion.div>
      </div>
      <div className="mt-28 2xl:mt-48  absolute top-12  right-0 lg:w-1/2 z-10 px-4 h-1/2 justify-between flex flex-col">
        <p
          className="text-sm 2xl:text-lg  leading-5"
          style={{
            fontFamily: "Montserrat",
            opacity: "60%",
          }}
        >
          {
            "Founded in 2021 by IIT BHU alumni, FarmOR is an Agri-tech startup recognised by DPIIT. At our core, we believe that India is and will at an accelerating pace, will be producing human talent and food for the world. We also realistically understand the problems in the current agricultural practices, most of these problems could not be solved in a day or just with a tech platform or App. It needs an approach that embraces change, innovation and translation of this innovation to the farmers & other stakeholders needs to be done by the startups and new AgriBusinesses. Here at FarmOR we are trying to bridge one such gap of B2B Agri-input supply chain with very reliable and realistic approach."
          }
        </p>

        <div className=" lg:flex  relative  ">
          <Sub
            image={mission}
            title={"OUR MISSION"}
            text={
              "We are on a mission to change the entire landscape of Input supply chain both with our solutions, platforms and operations"
            }
          ></Sub>

          <Sub
            image={vision}
            title={"OUR VISION"}
            text={
              "Vision is to empower & equip the primary point of contact of farmers! This helps knowledge, profits, efficiency flow down the chain."
            }
          ></Sub>
        </div>
      </div>
    </div>
  );
}
