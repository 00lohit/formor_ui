import Image from "next/image";

import plant1 from "../../public/impact/plant1.svg";
import plant2 from "../../public/impact/plant2.svg";
import plant3 from "../../public/impact/plant3.svg";
import plant4 from "../../public/impact/plant4.svg";

import { motion, useAnimation, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

import logo from "../../public/home/logo.svg";

import photo from "../../public/impact/impact.gif";

function Counter({ from, to, inView }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;
    const controls = animate(from, to, {
      duration: 2,
      onUpdate(value) {
        if (value > 999) {
          node.textContent = `${Math.round(value / 1000)}K+`;
        } else {
          node.textContent = `${Math.round(value)}+`;
        }
      },
    });

    return () => controls.stop();
  }, [from, to, inView]);

  return (
    <p
      className="text-2xl lg:text-4xl 2xl:text-5xl"
      style={{
        color: "#FFFDFB",
        fontFamily: "Anton",
      }}
      ref={nodeRef}
    />
  );
}

const Element = ({ number, title, image }) => {
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
      className="relative flex items-center justify-start  lg:mx-0"
    >
      <div
        style={{
          backgroundColor: "#A9ADF8",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
        }}
        className="w-20 h-20  2xl:w-36 2xl:h-36 rounded-3xl absolute z-20 flex items-center justify-center"
      >
        <Counter from={0} to={number} inView={inView} />
      </div>
      <div
        style={{
          backgroundColor: "#E1E3F9",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
        }}
        className="rounded-2xl ml-8  relative flex items-center z-10 w-[85vw] h-24 2xl:h-40"
      >
        <div className=" flex-1 items-center flex justify-start mr-8  pl-24  2xl:pl-44">
          <p
            className="text-2xl lg:text-4xl 2xl:text-5xl"
            style={{
              color: "#7E82D2",
              fontFamily: "Anton",
            }}
          >
            {title}
          </p>
        </div>
        <Image
          alt={""}
          src={image}
          className={"absolute right-6 scale-75 lg:scale-[0.8] 2xl:scale-100"}
        ></Image>
      </div>
    </motion.div>
  );
};

export default function Impact() {
  return (
    <div
      id="component"
      style={{ backgroundColor: "#FDFBFF" }}
      className="w-screen h-screen overflow-hidden lg:h-screen flex-shrink-0 scrollbar-hide  relative  snap-center pb-6 lg:pb-0 pt-1 lg:pt-0"
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

      <div className="mt-8  2xl:mt-16  lg:px-16 relative flex flex-col w-full">
        <h1
          className="text-4xl  lg:text-6xl 2xl:text-7xl px-6 lg:px-0 mb-4"
          style={{
            color: "#575DC2",
            fontFamily: "Anton",
          }}
        >
          OUR IMPACTS SO FAR
        </h1>

        <motion.div className="overflow-hidden grid grid-cols-1 justify-items-center lg:justify-items-stretch lg:grid-cols-2 gap-y-4 pr-3 lg:pr-0">
          <Element
            title={"DISTRICTS COVERED"}
            number={20}
            image={plant1}
          ></Element>
          <Element title={"FPOS"} number={300} image={plant2}></Element>
          <Element title={"RETAILERS"} number={5000} image={plant3}></Element>
          <Element
            title={"MANUFACTURERS"}
            number={150}
            image={plant4}
          ></Element>
          <div className="lg:h-[430px] flex overflow-hidden lg:col-start-2 lg:row-start-1 lg:row-span-4 ">
            <Image alt={""} src={photo} className={"object-contain"}></Image>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
