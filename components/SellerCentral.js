import Image from "next/image";
import Link from "next/link";

import { motion, useAnimation } from "framer-motion";

import logo from "../public/home/logo.svg";
import seller from "../public/seller/seller.png";
import close from "../public/close.svg";
import buttonArrow from "../public/buttonArrow.svg";

import list1 from "../public/seller/7.svg";
import list2 from "../public/seller/6.svg";
import list3 from "../public/seller/5.svg";
import list4 from "../public/seller/4.svg";
import list5 from "../public/seller/8.svg";
import list6 from "../public/seller/3.svg";
import list7 from "../public/seller/2.svg";
import list8 from "../public/seller/1.svg";

let data = [
  {
    image: list1,
    title: "Reach up to 10000+ retailers & 1000+ FPOs",
  },
  {
    image: list2,
    title: "List and Rest : We will take care of remaining ",
  },
  {
    image: list3,
    title: "Easy registration / signup",
  },
  {
    image: list4,
    title: "On call assistance",
  },
  {
    image: list5,
    title: "Hassle free process",
  },
  {
    image: list6,
    title: "Ground sales support",
  },

  {
    image: list7,
    title: "Advertising your product through multiple apps ",
  },
  {
    image: list8,
    title: "Secure timely payments",
  },
];

const ListItem = ({ image, title }) => {
  return (
    <motion.div className="list w-full py-[7px] 2xl:py-[9px] my-[0.4rem] rounded-lg flex items-center px-2 ">
      <Image alt={""} src={image} />
      <p
        className="text-sm lg:text-base 2xl:text-lg ml-2"
        style={{ color: "#22255E", fontFamily: "Montserrat", fontWeight: 600 }}
      >
        {title}
      </p>
    </motion.div>
  );
};

export default function Seller() {
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
              SELLER CENTRAL
            </h1>
            <h1
              className="text-lg lg:text-lg 2xl:text-xl px-4 lg:px-0 w-full mb-8"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              GROW YOUR BUSINESS WITH US
            </h1>
            <Image alt={""} src={seller} className={"shadow-lg mb-6 w-[60%]"} />

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

            <Link
              rel="noopener noreferrer"
              href={"http://seller.farmor.ag/"}
              target="_blank"
              className="button w-[20rem] h-14 rounded-full flex justify-center items-center"
            >
              <Image alt={""} src={buttonArrow} className={"h-3 mr-2"} />
              <p
                className="text-lg"
                style={{ fontFamily: "Montserrat", color: "white" }}
              >
                Register
              </p>
            </Link>
          </motion.div>

          <motion.div className="flex flex-col items-center justify-center lg:w-1/2 mt-10">
            {data.map((e, i) => (
              <ListItem key={i} image={e.image} title={e.title}></ListItem>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
