import Image from "next/image";

import plant1 from "../../public/impact/plant1.svg";
import plant2 from "../../public/impact/plant2.svg";
import plant3 from "../../public/impact/plant3.svg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import logo from "../../public/home/logo.svg";

const ElementRight = ({ number, title, image }) => {
  const ImpactVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
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
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={ImpactVariants}
        className="relative flex items-center justify-start  mx-2 lg:mx-0"
      >
        <div
          style={{
            backgroundColor: "#A9ADF8",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
          }}
          className="w-20 h-20 lg:w-32 lg:h-32 2xl:w-36 2xl:h-36 rounded-3xl absolute z-20 flex items-center justify-center"
        >
          <p
            className="text-2xl lg:text-5xl"
            style={{
              color: "#FFFDFB",
              fontFamily: "Anton",
            }}
          >
            {number}
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#E1E3F9",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
          }}
          className="rounded-2xl ml-8 lg:ml-16 relative flex items-center z-10 w-[88vw] lg:w-full lg:h-36 h-24 2xl:h-40"
        >
          <div className="lg:ml-20 flex-1 items-center flex justify-center mr-8 lg:mr-28">
            <p
              className="text-2xl lg:text-5xl"
              style={{
                color: "#7E82D2",
                fontFamily: "Anton",
              }}
            >
              {title}
            </p>
          </div>
          <Image src={image} className={"absolute right-0 scale-75 lg:scale-100"}></Image>
        </div>
      </motion.div>

  );
};

const ElementLeft = ({ number, title, image }) => {
  const ImpactVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
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
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={ImpactVariants}
    className="relative flex items-center justify-start  mx-2 lg:mx-0"
  >
    <div
      style={{
        backgroundColor: "#A9ADF8",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
      }}
      className="w-20 h-20 lg:w-32 lg:h-32 2xl:w-36 2xl:h-36 rounded-3xl absolute z-20 flex items-center justify-center"
    >
      <p
        className="text-2xl lg:text-5xl"
        style={{
          color: "#FFFDFB",
          fontFamily: "Anton",
        }}
      >
        {number}
      </p>
    </div>
    <div
      style={{
        backgroundColor: "#E1E3F9",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
      }}
      className="rounded-2xl ml-8 lg:ml-16 relative flex items-center z-10 w-[88vw] lg:w-full lg:h-36 h-24 2xl:h-40"
    >
      <div className="lg:ml-20 flex-1 items-center flex justify-center mr-8 lg:mr-28">
        <p
          className="text-2xl lg:text-5xl"
          style={{
            color: "#7E82D2",
            fontFamily: "Anton",
          }}
        >
          {title}
        </p>
      </div>
      <Image src={image} className={"absolute right-0 scale-75 lg:scale-100"}></Image>
    </div>
  </motion.div>

  );
};

export default function Impact() {
  return (
    <div
      style={{ backgroundColor: "#FDFBFF" }}
      className="w-screen h-min lg:h-screen flex-shrink-0 scrollbar-hide  relative  snap-center pb-6 lg:pb-0"
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
        className="mt-5"
      >
        <Image src={logo} />
      </motion.div>

      <div className="mt-16 lg:px-16 relative flex flex-col w-full">
        <h1
          className="text-4xl lg:text-6xl 2xl:text-7xl mb-8 px-6"
          style={{
            color: "#575DC2",
            fontFamily: "Anton",
          }}
        >
          OUR IMPACTS SO FAR
        </h1>

        <motion.div className="overflow-hidden grid  lg:grid-cols-2  gap-16 ">
          <ElementRight
            title={"MANUFACTURERS"}
            number={"100+"}
            image={plant2}
          ></ElementRight>
          <ElementLeft
            title={"MANUFACTURERS"}
            number={"100+"}
            image={plant3}
          ></ElementLeft>
          <ElementRight
            title={"MANUFACTURERS"}
            number={"100+"}
            image={plant1}
          ></ElementRight>
          <ElementLeft
            title={"MANUFACTURERS"}
            number={"100+"}
            image={plant2}
          ></ElementLeft>
        </motion.div>

      </div>
    </div>
  );
}
