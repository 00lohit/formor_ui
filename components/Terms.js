import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import logo from "../public/home/logo.svg";
import close from "../public/close.svg";

export default function Terms() {
  return (
    <div
      style={{ backgroundColor: "#FDFBFF" }}
      className="w-screen h-screen overflow-scroll   pb-6 lg:pb-0 scrollbar-hide"
    >
      <Link
        rel="noopener noreferrer"
        className="absolute  top-5 right-5 lg:top-10 z-50"
        href="/"
      >
        <Image alt={""} src={close} />
      </Link>

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
        <Image alt={""} src={logo} />
      </motion.div>

      <div className="lg:px-16 relative flex flex-col w-full">
        <motion.div className="mt-5 px-4 lg:p-0 flex flex-col lg:flex-row mb-4 ">
          <motion.div className="flex flex-col items-center justify-center lg:w-1/2">
            <h1
              className="mt-4 text-4xl lg:text-6xl 2xl:text-7xl px-4 mb-1 lg:px-0 w-full"
              style={{
                color: "#575DC2",
                fontFamily: "Anton",
              }}
            >
              TERMS OF SERVICE AGREEMENT
            </h1>
            <h1
              className="text-lg lg:text-lg 2xl:text-xl px-4 lg:px-0 w-full mb-8"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              GROW YOUR BUSINESS WITH US
            </h1>

            <h2
              className="text-base  2xl:text-lg mb-6 px-6 lg:px-0 text-center "
              style={{
                fontFamily: "Montserrat",
                color: "rgba(0, 0, 0, 0.6)",
              }}
            >
              Be part of FarmOR Seller Central, You Can now Advertise and sell
              your products from our seller central
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
