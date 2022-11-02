import Image from "next/image";


import plant1 from "../../public/impact/plant1.svg";

import { AnimatePresence, motion, useCycle } from "framer-motion";

import logo from "../../public/home/logo.svg";

const Element = ({number, title ,image}) => {
  return (
    <div className="relative flex items-center ">
      <div
        style={{
          backgroundColor: "#A9ADF8",
          "box-shadow": "0px 2px 4px rgba(0, 0, 0, 0.15)",
        }}
        className="w-36 h-36 rounded-3xl absolute z-20"
      ></div>
      <div
        style={{
          backgroundColor: "#E1E3F9",
          width: "540px",
          "box-shadow": "0px 2px 4px rgba(0, 0, 0, 0.15)",
        }}
        className=" h-40 rounded-2xl ml-16 relative flex items-center z-10"
      >

        <Image src={image} className={'absolute right-5'} ></Image>
      </div>
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

      <div className="mt-12 mx-16">
        <h1
          className="text-6xl"
          style={{
            color: "#575DC2",
            marginLeft: 20,
            marginRight: 25,
            fontFamily: "Anton",
          }}
        >
          OUR IMPACTS SO FAR
        </h1>


        <Element number={"100+"} title={"RETAILERS"} image={plant1} ></Element>
      </div>
    </div>
  );
}
