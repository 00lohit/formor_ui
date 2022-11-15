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

const Sub = ({ title, image, link }) => {
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
      className="bg-white p-4 w-96 2xl:w-[34rem] rounded-lg shadow-lg  hover:shadow-2xl  lg:m-8 relative scale-[0.8] lg:scale-100"
      style={{ fontFamily: "Montserrat" }}
    >
      <div className="rounded-lg " style={{}}>
        <Image alt={""} src={image} />
      </div>
      <div className="lg:my-6 2xl:my-8 flex flex-col items-center justify-center lg:mb-2 2xl:mb-4 text-base 2xl:text-2xl mt-3  lg:text-lg">
        <h3>{title}</h3>

        <Link
        rel="noopener noreferrer"
          href={link}
          className="w-full  h-16 2xl:h-20 rounded-lg flex items-center 2xl:text-xl justify-center mt-4 lg:mt-10 2xl:mt-14"
          style={{ backgroundColor: "#575DC2" }}
        >
          <a className="text-white">Apply</a>
        </Link>
      </div>
    </motion.div>
  );
};

export default function Careers() {
  return (
    <div id="component" className="w-screen  h-screen lg:h-screen flex-shrink-0  overflow-hidden  relative  snap-center careers">
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

      <div className="mt-8  2xl:mt-16  lg:px-16 relative flex flex-col w-full">
        <h1
          className="text-4xl  lg:text-6xl 2xl:text-7xl px-6 lg:px-0"
          style={{
            color: "#575DC2",
            fontFamily: "Anton",
          }}
        >
          CAREERS
        </h1>

        <div className="w-full h-full  flex flex-col lg:flex-row  items-center lg:justify-center 2xl:mt-6">
          <Sub title={"IT INDUSTRY"} link={'https://forms.gle/J9tSURZ5yGQW35Ej7'} image={It}></Sub>
          <Sub title={"AGRI / FIELD OPERATIONS"}  link={'https://forms.gle/SqNic263zn1LDvkg9'} image={Field}></Sub>
        </div>
      </div>
    </div>
  );
}
