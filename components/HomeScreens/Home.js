import Head from "next/head";
import Image from "next/image";

import Link from "next/link";

import land from "../../public/home/land.png";
import logo from "../../public/home/logo.svg";

import seller from "../../public/home/seller.png";
import contact from "../../public/home/contact.png";
import partner from "../../public/home/partner.png";

import blue from "../../public/home/arrow/blue.svg";
import red from "../../public/home/arrow/red.svg";
import purple from "../../public/home/arrow/purple.svg";

import ReactDOM from "react-dom";
import { MenuButton } from "../MenuButton";

import { useState, useEffect } from "react";

import { AnimatePresence, motion, useCycle } from "framer-motion";

export default function Home() {
  const [Arrow, setArrow] = useState({
    blue: false,
    red: false,
    purple: false,
  });

  const [delay, setdelay] = useState({ delay: 1, default: { duration: 1.5 } });

  useEffect(() => {
    setTimeout(() => {
      setdelay({ delay: 0, default: { duration: 0.3 } });
    }, 2000);
  }, []);

  const [isOpen, setOpen] = useState(false);

  const links = [
    { name: "Team", to: "/team", id: 1 },
    { name: "Partner App", to: "/partner", id: 2 },
    { name: "Contact us", to: "/contact", id: 3 },
  ];

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div
      style={{ backgroundColor: "#FDFBFF" }}
      className="w-screen h-screen snap-center "
    >
      <motion.div
        className="absolute z-50 lg:hidden"
        initial={{
          right: 0,
          top: 0,
          opacity:0
        }}
        animate={{
          right: 15,
          top:35,
          opacity:1
        }}
        transition={{ delay: 1, default: { duration: 1 } }}
      >
        <MenuButton
          isOpen={isOpen}
          onClick={() => setOpen(!isOpen)}
          style={{}}
          lineProps={{ strokeLinecap: "round" }}
          strokeWidth="2.5"
          color="black"
          height="20"
          width="20"
          transition={{ ease: "easeOut", duration: 0.2 }}
        />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{
              width: 0,
              right: 0,
              position: "absolute",
              zIndex: 30,
              backgroundColor: "#E7DFD1",
            }}
            animate={{
              width: "100vw",
              right: 0,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.5, duration: 0.5 },
            }}
            className="h-screen overflow-hidden z-50 absolute"
          >
            <motion.div
              className="container flex flex-col px-10 pt-16"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.div
                  key={id}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                  className="border-b-2 py-2"
                  style={{ borderColor: "#8C4A0D" }}
                >
                  <Link
                    href={to}
                    className="text-lg font-semibold"
                    style={{ color: "#8C4A0D" }}
                  >
                    {name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>

      <div
        className="w-screen h-screen relative overflow-hidden anton "
        style={{ display: !isOpen ? "block" : "none" }}
      >
        <motion.div
          initial={{
            width: "90vw",
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft:"5vw",
            marginRight:"5vw"
            
          }}
          animate={{
            width: 141,
            height: 28,
            x: 20,
            y: 10,
            marginLeft: 0,
            marginRight: 0,
          }}
          transition={{ delay: 0.8, default: { duration: 1.6 } }}
          className="mt-5"
        >
          <Image src={logo} />
        </motion.div>

        <div className="flex mt-12 ">
          <div className="lg:flex-[0.4]">
            <h1
              className="text-8xl text"
              style={{
                color: "#575DC2",
                marginLeft: 20,
                marginRight: 25,
                fontFamily: "Anton",
              }}
            >
              DIGITIZING THE AGRI SUPPLY CHAIN
            </h1>

            <p
              className="text-xs leading-5"
              style={{
                fontFamily: "Montserrat",
                opacity: "60%",
                marginTop: 16,
                marginLeft: 20,
                marginRight: 25,
                fontSize: 14,
              }}
            >
              FARMOR'S GOAL IS TO MAKE AGRICULTURE A PROFITABLE BUSINESS FOR
              FARMERS BY PLUGGING THE SUPPLY CHAIN GAPS AND INEFFICIENCIES IN
              THE SEED TO MARKET PROCESS BY BRINGING KNOWLEDGE, DATA & BEST
              PRACTICES TO FARMERS WITH THE HELP OF OUR PARTNERS IN A PHYGITAL
              (BOTH PHYSICAL & DIGITAL) APPROACH.
            </p>
          </div>

          <div
            className="hidden lg:flex flex-[0.6]  items-center justify-center"
            style={{ fontFamily: "Montserrat" }}
          >
            <Link href="/partner">
              <motion.div
                initial={{
                  position: "absolute",
                  rotate: 0,
                  x: 0,
                  zIndex: 2,
                  y: 0,
                }}
                animate={{
                  rotate: -20,
                  x: -130,
                  scale: 0.8,
                }}
                transition={delay}
                whileHover={{
                  scale: 1.2,
                  transition: { delay: 0, duration: 0.35 },
                  zIndex: 4,
                  rotate: 0,
                }}
                onHoverStart={(e) => setArrow("purple")}
                onHoverEnd={(e) => setArrow("")}
                className="bg-white p-4 w-80  rounded-lg shadow-lg hover:shadow-2xl"
              >
                <div
                  className="rounded-lg p-3 px-6"
                  style={{ backgroundColor: "#ece4ff" }}
                >
                  <Image src={partner} />
                </div>
                <div className="m-6 flex flex-col items-center justify-center mb-2">
                  <h3>Partner App</h3>
                  <motion.div
                    className="w-5/12"
                    style={{
                      visibility: Arrow == "purple" ? "initial" : "hidden",
                    }}
                  >
                    <Image src={purple}></Image>
                  </motion.div>
                </div>
              </motion.div>
            </Link>
            <Link href="/team">
              <motion.div
                initial={{ position: "absolute", rotate: 0, x: 0, zIndex: 3 }}
                animate={{ rotate: 0, scale: 0.9 }}
                transition={delay}
                whileHover={{
                  scale: 1.2,
                  transition: { delay: 0, duration: 0.35 },
                }}
                onHoverStart={(e) => setArrow("red")}
                onHoverEnd={(e) => setArrow("")}
                className="bg-white p-4 w-80  rounded-lg shadow-lg  hover:shadow-2xl"
                style={{ fontFamily: "Montserrat" }}
              >
                <div
                  className="rounded-lg p-3 px-6"
                  style={{ backgroundColor: "#ffe3e6" }}
                >
                  <Image src={seller} />
                </div>
                <div className="m-6 flex flex-col items-center justify-center mb-2">
                  <h3>SELLER CENTRAL</h3>
                  <motion.div
                    className="w-5/12"
                    style={{
                      visibility: Arrow == "red" ? "initial" : "hidden",
                    }}
                  >
                    <Image src={red}></Image>
                  </motion.div>
                </div>
              </motion.div>
            </Link>

            <Link href="/contact">
              <motion.div
                initial={{
                  position: "absolute",
                  rotate: 0,
                  x: 0,
                  zIndex: 1,
                  y: 0,
                }}
                animate={{ rotate: 20, x: 130, scale: 0.8 }}
                transition={delay}
                whileHover={{
                  scale: 1.2,
                  transition: { delay: 0, duration: 0.35 },
                  zIndex: 4,
                  rotate: 0,
                }}
                onHoverStart={(e) => setArrow("blue")}
                onHoverEnd={(e) => setArrow("")}
                className="bg-white p-4 w-80 rounded-lg shadow-lg  hover:shadow-2xl"
                style={{ fontFamily: "Montserrat" }}
              >
                <div
                  className="rounded-lg p-3 px-6"
                  style={{ backgroundColor: "#d8f3ff" }}
                >
                  <Image src={contact} />
                </div>
                <div className="m-6 flex flex-col items-center justify-center mb-2 ">
                  <h3>Contact Us</h3>
                  <motion.div
                    className="w-5/12"
                    style={{
                      visibility: Arrow == "blue" ? "initial" : "hidden",
                    }}
                  >
                    <Image src={blue}></Image>
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      <Image src={land} className={"w-screen absolute bottom-0"}></Image>
    </div>
  );
}
