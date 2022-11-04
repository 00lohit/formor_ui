import Image from "next/image";

import desk from "../../public/about/desk.svg";
import light from "../../public/about/light.svg";
import aboutSvg from "../../public/about/about.svg";
import window from "../../public/about/window.svg";

import { AnimatePresence, motion, useCycle } from "framer-motion";

import logo from "../../public/home/logo.svg";

export default function About() {
  return (
    <div
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
        <Image src={logo} />
      </motion.div>

      <div className="absolute w-screen  overflow-hidden flex lg:justify-center lg:pr-0 top-0 justify-end pr-3">
        <div className="z-10 w-64 lg:w-auto" style={{}}>
          <Image src={aboutSvg}></Image>
        </div>
      </div>

      <div className="absolute w-screen overflow-visible flex justify-center -top-4 lg:-left-44 ml-10">
        <div
          className="z-10 relative right-44 -top-2 scale-75 lg:scale-100"
          style={{}}
        >
          <Image src={light}></Image>
        </div>
        <div
          className="z-10  ml-5 lg:ml-10 relative right-44  -top-12 scale-75 lg:scale-100"
          style={{}}
        >
          <Image src={light}></Image>
        </div>
      </div>

      <div className="h-screen lg:px-10">
        <motion.div className="hidden lg:flex lg:mt-16 lg:scale-110 lg:px-16">
          <Image src={window}></Image>
        </motion.div>
        <motion.div className=" absolute  bottom-0 lg:bottom-5 lg:scale-110 lg:mx-10">
          <Image src={desk}></Image>
        </motion.div>
      </div>
      <div className="mt-28  absolute top-5 lg:pt-32 right-0 lg:w-1/2 z-10">
        <p
          className="text-sm lg:text-lg leading-5"
          style={{
            fontFamily: "Montserrat",
            opacity: "60%",
            marginTop: 16,
            marginLeft: 20,
            marginRight: 25,
          }}
        >
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat.
        </p>
      </div>
    </div>
  );
}
