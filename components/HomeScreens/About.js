import Image from "next/image";

import desk from "../../public/about/desk.svg";
import light from "../../public/about/light.svg";
import aboutSvg from "../../public/about/about.svg";
import window from "../../public/about/window.svg";

import { AnimatePresence, motion, useCycle } from "framer-motion";

import logo from "../../public/home/logo.svg";

import mission from "../../public/home/mission.svg";
import vision from "../../public/home/vision.svg";

export default function About() {
  return (
    <div
      id="component"
      style={{ backgroundColor: "#FDFBFF" }}
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

      <div className="absolute w-screen  overflow-hidden flex lg:justify-center lg:pr-0 top-0 justify-end pr-3">
        <div className="z-10 w-64 lg:w-auto" style={{}}>
          <Image alt={""} className="lg:w-72 2xl:w-96" src={aboutSvg}></Image>
        </div>
      </div>

      <div className="absolute w-screen overflow-visible flex justify-center -top-4 lg:-left-44 ml-10">
        <div
          className="z-10 relative right-44 -top-2 scale-75 2xl:scale-100"
          style={{}}
        >
          <Image alt={""} src={light}></Image>
        </div>
        <div
          className="z-10  ml-5 lg:ml-10 relative right-44  -top-12 scale-75 2xl:scale-100"
          style={{}}
        >
          <Image alt={""} src={light}></Image>
        </div>
      </div>

      <div className="h-screen relative">
        <motion.div className="hidden absolute lg:flex lg:top-0 2xl:left-4 2xl:top-12 lg:scale-75 2xl:scale-100 ">
          <Image alt={""} src={window}></Image>
        </motion.div>
        <motion.div className=" absolute  bottom-0 lg:-bottom-5 2xl:bottom-12 2xl:left-12 lg:scale-75 2xl:scale-100 ">
          <Image alt={""} className="w-[60%] lg:hidden" src={desk}></Image>
          <Image alt={""} className="hidden lg:flex" src={desk}></Image>
        </motion.div>
      </div>
      <div className="mt-28 2xl:mt-48  absolute top-12  right-0 lg:w-1/2 z-10 px-4 h-1/2 justify-between flex flex-col">
        <p
          className="text-sm 2xl:text-lg  leading-5"
          style={{
            fontFamily: "Montserrat",
            opacity: "60%",
          }}
        >
          Founded in 2021 by IIT BHU alumni , FarmOR trying to sort B2B agri
          inputs supply chain gap right from manufactures/ distributers to
          farmers keeping retailers in between and trying to empower them with
          access to technology and single market place… we are up to build tech
          products to our stakeholders either its SaaS for sellers , partner app
          for retailers and advisory or Social networking platform for farmers.
          Our aim was to push the best products which can give good output and
          business to all the three stakeholders .
        </p>

        <div className=" lg:flex  relative  ">
          <div className="flex   flex-1 relative m-1">
            <Image
              alt={""}
              src={mission}
              className={"z-20  absolute top-0 left-0"}
            ></Image>

            <div className="about  bottom-0 z-10 ml-6 mt-6 flex justify-center items-center flex-col p-2">
              <h4
                className="text-xl lg:text-2xl 2xl:text-3xl mb-4  lg:px-0"
                style={{
                  color: "#22255E",
                  fontFamily: "Anton",
                }}
              >
                OUR MISSION
              </h4>
              <p
                className="text-xs  2xl:text-base  lg:px-0 text-center mb-1"
                style={{
                  fontFamily: "Montserrat",
                  color: "rgba(0, 0, 0, 0.6)",
                }}
              >
                Aim is to build largest customer
                base of Agri Input retailers in the country by Powering the
                prosperity of Farmers around India.
              </p>
            </div>
          </div>

          <div className="flex flex-1 relative m-1">
            <Image
             alt={""}
              src={vision}
              className={"z-20  absolute top-0 left-0"}
            ></Image>

            <div className="about  bottom-0 z-10 ml-6 mt-6 flex justify-center items-center flex-col p-2">
              <h4
                className="text-xl lg:text-2xl 2xl:text-3xl mb-4  lg:px-0"
                style={{
                  color: "#22255E",
                  fontFamily: "Anton",
                }}
              >
                OUR VISION
              </h4>
              <p
                className="text-xs  2xl:text-base  lg:px-0 text-center mb-1"
                style={{
                  fontFamily: "Montserrat",
                  color: "rgba(0, 0, 0, 0.6)",
                }}
              >
                create a market place with tech based applications that are
                helpful to improve quality & productivity in Agri supply chain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
