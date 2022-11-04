import Image from "next/image";
import Link from "next/link";
import plant1 from "../../public/impact/plant1.svg";
import plant2 from "../../public/impact/plant2.svg";
import plant3 from "../../public/impact/plant3.svg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Field from "../../public/careers/field.png";
import It from "../../public/careers/it.png";

import logo from "../../public/home/logo.svg";

const Sub = ({ title, image }) => {
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
      className="bg-white p-4 w-72 rounded-lg shadow-lg  hover:shadow-2xl  scale-100 lg:scale-150 m-4 lg:ml-28 relative"
      style={{ fontFamily: "Montserrat" }}
    >
      <div className="rounded-lg " style={{}}>
        <Image src={image} />
      </div>
      <div className="lg:my-6 flex flex-col items-center justify-center lg:mb-2 text-base mt-3  lg:text-lg">
        <h3>{title}</h3>

        <Link
          href="/team"
          className="w-full  h-16 rounded-lg flex items-center justify-center mt-4 lg:mt-10"
          style={{ backgroundColor: "#575DC2" }}
        >
          <p className="text-white">Apply</p>
        </Link>
      </div>
    </motion.div>
  );
};

export default function Careers() {
  return (
    <div className="w-screen h-screen flex-shrink-0  overflow-hidden  relative  snap-center careers">
      <motion.div
        style={{
          width: 141,
          height: 28,
          x: 20,
          y: 10,
          marginLeft: 0,
          marginRight: 0,
        }}
        className="mt-5"
      >
        <Image src={logo} />
      </motion.div>

      <div className="mt-8 lg:mt-16  lg:px-16 relative flex flex-col w-full">
        <h1
          className="text-4xl  lg:text-6xl lg:mb-8 px-6"
          style={{
            color: "#575DC2",
            fontFamily: "Anton",
          }}
        >
          CAREERS
        </h1>

        <div className="w-full h-full  flex flex-col lg:flex-row  items-center lg:justify-evenly lg:mt-28">
          <Sub title={"IT INDUSTRY"} image={It}></Sub>
          <Sub title={"AGRI / FIELD OPERATIONS"} image={Field}></Sub>
        </div>
      </div>
    </div>
  );
}
