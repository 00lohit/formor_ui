import Head from "next/head";
import Image from "next/image";

import Link from "next/link";

import land from "../public/home/land.svg";
import logo from "../public/home/logo.svg";

import team from "../public/home/team.png";
import contact from "../public/home/contact.png";
import partner from "../public/home/partner.png";

import blue from "../public/home/arrow/blue.svg";
import red from "../public/home/arrow/red.svg";
import purple from "../public/home/arrow/purple.svg";

import { useState, useEffect } from "react";

import { motion } from "framer-motion";

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

  return (
    <div className="w-screen h-screen bg-homeBG relative overflow-hidden anton">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Anton"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <motion.div
        initial={{
          width: "90vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "5vw",
          marginRight: "5vw",
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
        className=""
      >
        <Image src={logo} />
      </motion.div>
      <div className="flex ">
        <div className="lg:w-1/2 mt-7">
          <h1
            className="text-5xl w-2/3 lg:text-7xl"
            style={{ color: "#4084DD", marginLeft: 20, marginRight: 25 }}
          >
            DIGITIZING THE AGRI SUPPLY CHAIN
          </h1>

          <p
            className="text-xs text"
            style={{
              fontFamily: "Montserrat",
              opacity: "60%",
              marginTop: 12,
              marginLeft: 20,
              marginRight: 25,
            }}
          >
            FARMOR'S GOAL IS TO MAKE AGRICULTURE A PROFITABLE BUSINESS FOR
            FARMERS BY PLUGGING THE SUPPLY CHAIN GAPS AND INEFFICIENCIES IN THE
            SEED TO MARKET PROCESS BY BRINGING KNOWLEDGE, DATA & BEST PRACTICES
            TO FARMERS WITH THE HELP OF OUR PARTNERS IN A PHYGITAL (BOTH
            PHYSICAL & DIGITAL) APPROACH.
          </p>
        </div>

        <div
          className="hidden lg:flex w-5/12  items-center justify-center"
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
                scale: 1.1,
                transition: { delay: 0, duration: 0.35 },
                zIndex: 4,
                rotate: 0,
              }}
              onHoverStart={(e) => setArrow("purple")}
              onHoverEnd={(e) => setArrow("")}
              className="bg-white p-4 w-60 rounded-lg shadow-lg hover:shadow-2xl"
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
                scale: 1.1,
                transition: { delay: 0, duration: 0.35 },
              }}
              onHoverStart={(e) => setArrow("red")}
              onHoverEnd={(e) => setArrow("")}
              className="bg-white p-4 w-60 rounded-lg shadow-lg  hover:shadow-2xl"
              style={{ fontFamily: "Montserrat" }}
            >
              <div
                className="rounded-lg p-3 px-6"
                style={{ backgroundColor: "#ffe3e6" }}
              >
                <Image src={team} />
              </div>
              <div className="m-6 flex flex-col items-center justify-center mb-2">
                <h3>Team</h3>
                <motion.div
                  className="w-5/12"
                  style={{ visibility: Arrow == "red" ? "initial" : "hidden" }}
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
                scale: 1.1,
                transition: { delay: 0, duration: 0.35 },
                zIndex: 4,
                rotate: 0,
              }}
              onHoverStart={(e) => setArrow("blue")}
              onHoverEnd={(e) => setArrow("")}
              className="bg-white p-4 w-60 rounded-lg shadow-lg  hover:shadow-2xl"
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
                  style={{ visibility: Arrow == "blue" ? "initial" : "hidden" }}
                >
                  <Image src={blue}></Image>
                </motion.div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, position: "absolute", bottom: -10 }}
        transition={{ delay: 1, default: { duration: 1 } }}
        className=""
      >
        <Image src={land}></Image>
      </motion.div>
    </div>
  );
}
