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
      style={{ width: "700px" }}
      className="relative flex items-center mt-4"
    >
      <div
        style={{
          backgroundColor: "#A9ADF8",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
        }}
        className="w-36 h-36 rounded-3xl absolute z-20 flex items-center justify-center"
      >
        <p
          className="text-5xl"
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
          width: "540px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
        }}
        className=" h-40 rounded-2xl ml-16 relative flex items-center z-10"
      >
        <div className="ml-20 flex-1 items-center flex justify-center mr-28">
          <p
            className="text-5xl"
            style={{
              color: "#7E82D2",
              fontFamily: "Anton",
            }}
          >
            {title}
          </p>
        </div>
        <Image src={image} className={"absolute right-2"}></Image>
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
      style={{ width: "700px" }}
      className="relative flex items-center mt-4 "
    >
      <div
        style={{
          backgroundColor: "#E1E3F9",
          width: "540px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
        }}
        className=" h-40 rounded-2xl mr-16 relative flex items-center z-10"
      >
        <Image src={image} className={"absolute left-2"}></Image>
        <div className="mr-20 flex-1 items-center flex justify-center ml-28">
          <p
            className="text-5xl"
            style={{
              color: "#7E82D2",
              fontFamily: "Anton",
            }}
          >
            {title}
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#A9ADF8",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
        }}
        className="w-36 h-36 rounded-3xl absolute z-20 right-0 
        flex items-center justify-center"
      >
        <p
          className="text-5xl"
          style={{
            color: "#FFFDFB",
            fontFamily: "Anton",
          }}
        >
          {number}
        </p>
      </div>
    </motion.div>
  );
};

const Element = ({ number, title, image, rotate }) => {
  return (
    <div className="w-full flex relative scale-75 lg:scale-100 ">
      {rotate ? (
        <div className="w-full flex flex-row-reverse">
          {ElementLeft({ number, title, image })}
        </div>
      ) : (
        <div className="w-full ">
          {ElementRight({ number, title, image })}
        </div>
      )}
    </div>
  );
};

export default function Impact() {
  return (
    <div
      style={{ backgroundColor: "#FDFBFF" }}
      className="w-screen h-screen flex-shrink-0  overflow-hidden  relative  snap-center"
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

      <div className="mt-12 px-4 lg:px-16 relative">
        <h1
          className="text-6xl"
          style={{
            color: "#575DC2",
            fontFamily: "Anton",
          }}
        >
          OUR IMPACTS SO FAR
        </h1>

        <Element number={"1000+"} title={"RETAILERS"} image={plant1}></Element>
        <Element
          number={"100+"}
          title={"MANUFACTURERS"}
          image={plant2}
          rotate={true}
        ></Element>
        <Element
          number={"2+"}
          title={"DISTRICT's COVERED"}
          image={plant3}
        ></Element>
         <Element
          number={"100+"}
          title={"FPO's"}
          image={plant2}
          rotate={true}
        ></Element>
      </div>
    </div>
  );
}
