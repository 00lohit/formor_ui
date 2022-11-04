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
       
       
      </div>
    </div>
  );
}
