import Image from "next/image";
import Link from "next/link";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import logo from "../../public/home/logo.svg";

export default function Social() {
  return (
    <div
      id="component"
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

      <div
        style={{
          color: "rgba(0, 0, 0, 0.5)",
          fontFamily: "Anton",
        }}
        className="mt-8 2xl:mt-16 px-4  lg:px-16  relative flex flex-col w-full h-full"
      >
        <a
          href="https://www.linkedin.com/company/farmor-ag/"
          target="_blank"
          rel="noopener noreferrer"
          className=" my-5"
        >
          <h4 className="text-7xl 2xl:text-8xl LINKEDIN cursor-pointer">
            LINKEDIN
          </h4>
        </a>
        <a
          href="https://www.instagram.com/farmor.ag/?igshid=YmMyMTA2M2Y%3D"
          target="_blank"
          className=" my-5"
          rel="noopener noreferrer"
        >
          <h4 className="text-7xl 2xl:text-8xl INSTAGRAM cursor-pointer">
            INSTAGRAM
          </h4>
        </a>
        <a
          href="https://www.facebook.com/farmor.ag"
          target="_blank"
          className=" my-5"
          rel="noopener noreferrer"
        >
          <h4 className="text-7xl 2xl:text-8xl FACEBOOK cursor-pointer">
            FACEBOOK
          </h4>
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCCr8GrS0cZG7bVOyeCGeUww"
          className=" my-5"
          rel="noopener noreferrer"
        >
          <h4 className="text-7xl 2xl:text-8xl YOUTUBE cursor-pointer">
            YOUTUBE
          </h4>
        </a>
      </div>
      <div
        className="w-full absolute bottom-0 flex  bg-[#E1E3F9] h-36 2xl:h-40 text-sm pt-5 px-4 lg:px-16 justify-between"
        style={{ fontFamily: "Montserrat" }}
      >
        <h4 className="text-[#575DC2] text-sm lg:text-base 2xl:text-xl">
          Copyright © 2022 Farmor Agri Solutions Pvt. Ltd.
        </h4>

        <div className="flex">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            // href="/terms"
            href="https://farmor.ag/terms"
            className="text-[#575DC2] text-sm lg:text-base 2xl:text-xl mx-3 underline"
          >
            Terms & Conditions
          </Link>
          <Link
            target="_blank"
            // href="/privacy"
            href="https://farmor.ag/privacypolicy"
            rel="noopener noreferrer"
            className="text-[#575DC2] text-sm lg:text-base 2xl:text-xl mx-3 underline"
          >
            Privacy policy
          </Link>
        </div>
      </div>
    </div>
  );
}
