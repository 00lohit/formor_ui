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

export default function Social() {
  return (
    <div className="w-screen h-screen flex-shrink-0  overflow-hidden  relative  snap-center ">
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

      <div
        style={{
          color: "rgba(0, 0, 0, 0.5)",
          fontFamily: "Anton",
        }}
        className="mt-8 2xl:mt-16 px-4  lg:px-16  relative flex flex-col w-full h-full"
      >
        <a className=" my-5">
          <h4 className="text-7xl 2xl:text-8xl LINKEDIN cursor-pointer">LINKEDIN</h4>
        </a>
        <a className=" my-5">
          <h4 className="text-7xl 2xl:text-8xl INSTAGRAM cursor-pointer">INSTAGRAM</h4>
        </a>
        <a className=" my-5">
          <h4 className="text-7xl 2xl:text-8xl FACEBOOK cursor-pointer">FACEBOOK</h4>
        </a>
        <a className=" my-5">
          <h4 className="text-7xl 2xl:text-8xl YOUTUBE cursor-pointer">YOUTUBE</h4>
        </a>
      </div>
      <div className="w-full absolute bottom-0  bg-[#E1E3F9] h-28 2xl:h-40 text-sm pt-5 pl-4 lg:pl-16" style={{ fontFamily: 'Montserrat'}}>
      <h4 className="text-[#575DC2] text-base 2xl:text-xl">&copy; 2022 All rights reserved.</h4>
      </div>
    </div>
  );
}
