import Image from "next/image";
import Link from "next/link";

import { motion, useAnimation } from "framer-motion";

import { v4 as uuidv4 } from "uuid";

import logo from "../public/home/logo.svg";

import close from "../public/close.svg";
import buttonArrow from "../public/app/play.png";

import Card from "./Card";
import Carroussel from "./Carroussel";

import list1 from "../public/app/1.svg";
import list2 from "../public/app/2.svg";
import list3 from "../public/app/3.svg";
import list4 from "../public/app/4.svg";
import list5 from "../public/app/5.svg";
import list6 from "../public/app/6.svg";

import place1 from "../public/app/1.png";
import place2 from "../public/app/2.png";
import place3 from "../public/app/3.png";
import place4 from "../public/app/4.png";
import place5 from "../public/app/5.png";

let data = [
  {
    image: list1,
    title: "Save Time & Money",
  },
  {
    image: list2,
    title: "One stop for all products",
  },
  {
    image: list3,
    title: "24/7 WhatsApp and call support",
  },
  {
    image: list4,
    title: "Shop Management",
  },
  {
    image: list5,
    title: "Access to credit",
  },
  {
    image: list6,
    title: "Rewards on every purchase",
  },
];

let Slides = [
  {
    key: uuidv4(),
    content: <Card image={place1} />,
  },
  {
    key: uuidv4(),
    content: <Card image={place2} />,
  },
  {
    key: uuidv4(),
    content: <Card image={place3} />,
  },
  {
    key: uuidv4(),
    content: <Card image={place4} />,
  },
  {
    key: uuidv4(),
    content: <Card image={place5} />,
  },
];

const ListItem = ({ image, title }) => {
  return (
    <motion.div className="list w-[90%] lg:w-[70%] py-[7px] my-[0.4rem] rounded-lg flex items-center px-2 ">
      <Image alt={""} src={image} />
      <p
        className="text-sm lg:text-base ml-2"
        style={{ color: "#22255E", fontFamily: "Montserrat", fontWeight: 600 }}
      >
        {title}
      </p>
    </motion.div>
  );
};

export default function PartnerApp() {
  return (
    <div
      style={{ backgroundColor: "#FDFBFF" }}
      className="w-screen h-screen overflow-scroll   pb-6 lg:pb-0 scrollbar-hide"
    >
      <Link className="absolute  top-5 right-5 lg:top-10 z-50" href="/">
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

      <div className=" lg:px-16 relative flex flex-col w-full">
        <motion.div className="mt-5 px-4 lg:p-0 flex flex-col lg:flex-row mb-4 ">
          <motion.div className="flex flex-col items-center justify-center lg:w-1/2">
            <h1
              className="mt-4 text-4xl lg:text-6xl 2xl:text-7xl px-6 mb-1 lg:px-0 w-full"
              style={{
                color: "#575DC2",
                fontFamily: "Anton",
              }}
            >
              PARTNER APP
            </h1>
            <h1
              className="text-lg lg:text-lg 2xl:text-xl px-6 lg:px-0 w-full mb-2"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              GROW YOUR BUSINESS WITH US
            </h1>
            <h2
              className="text-sm  2xl:text-base mb-6 px-6 lg:px-0  "
              style={{
                fontFamily: "Montserrat",
                color: "rgba(0, 0, 0, 0.6)",
              }}
            >
              FarmOR Partner App, helps Input retailers & FPOs source quality
              inputs for their shop. Helps them manage their farmers and
              payments information. Currently we are serving for retailers &
              FPOs in Telangana.
            </h2>

            <Carroussel cards={Slides} offset={2} />
          </motion.div>

          <motion.div className="flex flex-col items-center justify-center lg:w-1/2 mt-10">
            <div className="button w-[20rem] h-14 rounded-full flex justify-center items-center mb-16">
              <Image alt={""} src={buttonArrow} className={" mr-2"} />
              <p
                className="text-lg"
                style={{ fontFamily: "Montserrat", color: "white" }}
              >
                Download App
              </p>
            </div>
            {data.map((e, i) => (
              <ListItem key={i} image={e.image} title={e.title}></ListItem>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
