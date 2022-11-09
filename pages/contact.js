import Image from "next/image";
import Link from "next/link";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import logo from "../public/home/logo.svg";
import banner from "../public/banner.png";
import close from "../public/close.svg";

export default function Contact() {
  return (
    <div
      style={{ backgroundColor: "#FDFBFF" }}
      className="w-screen h-screen overflow-hidden  pb-6 lg:pb-0"
    >
      <Link className="absolute top-5 right-5 lg:top-10 lg:right-10" href="/">
      <Image  src={close} /></Link>

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
          className="text-4xl lg:text-6xl 2xl:text-7xl px-4 mb-1 lg:px-0"
          style={{
            color: "#575DC2",
            fontFamily: "Anton",
          }}
        >
          CONTACT. CONNECT.
        </h1>
        <h1
          className="text-4xl lg:text-6xl 2xl:text-7xl mb-8 px-4 lg:px-0"
          style={{
            color: "#575DC2",
            fontFamily: "Anton",
          }}
        >
          COMMUNICATE.
        </h1>

        <motion.div className="mt-24 grid grid-cols-6 gap-y-2 p-4 lg:p-0 lg:w-2/4">
          <p
            className="text-3xl 2xl:text-4xl col-span-2"
            style={{ color: "#22255E", fontFamily: "Anton" }}
          >
            ADDRESS :
          </p>

          <p
            className="text-2xl 2xl:text-3xl ml-2 lg:ml-8 col-end-7 col-span-4"
            style={{
              color: "rgba(34, 37, 94, 0.8)",
              fontFamily: "Montserrat",
            }}
          >
            1-60/8, 3rd Floor, KNR Square, Gachibowli, Hyderabad, 500032
          </p>

          <p
            className="text-3xl 2xl:text-4xl col-span-2"
            style={{ color: "#22255E", fontFamily: "Anton" }}
          >
            E-MAIL :
          </p>
          <p
            className="text-2xl 2xl:text-3xl ml-2 lg:ml-8 col-end-7 col-span-4"
            style={{
              color: "rgba(34, 37, 94, 0.8)",
              fontFamily: "Montserrat",
            }}
          >
            contact@farmor.ag
          </p>

          <p
            className="text-3xl 2xl:text-4xl col-span-2"
            style={{ color: "#22255E", fontFamily: "Anton" }}
          >
            PHONE :
          </p>
          <p
            className="text-2xl 2xl:text-3xl ml-2 lg:ml-8 col-end-7 col-span-4"
            style={{
              color: "rgba(34, 37, 94, 0.8)",
              fontFamily: "Montserrat",
            }}
          >
            +91 6301751075
          </p>
        </motion.div>
      </div>

      <Image className="absolute bottom-0 right-[10%] w-[50vw] lg:w-auto" src={banner} />
    </div>
  );
}
