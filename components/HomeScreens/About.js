import Image from "next/image";

import desk from "../../public/about/desk.svg";
import light from "../../public/about/lights.svg";
import window from "../../public/about/window.svg";

import { AnimatePresence, motion, useCycle } from "framer-motion";

import logo from "../../public/home/logo.svg";


export default function About() {
  return (
    <div
      style={{ backgroundColor: "#FDFBFF" }}
      className="w-screen h-screen flex-shrink-0 flex overflow-hidden justify-center relative  snap-center"
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

      <div className="absolute w-screen  overflow-hidden flex justify-center -top-4 ">
        <div className="z-10" style={{ marginRight: "25%" }}>
          <Image src={light}></Image>
        </div>
      </div>

      <div className="h-screen">
        <motion.div className="hidden lg:flex">
          <Image src={window}></Image>
        </motion.div>
        <motion.div className=" absolute bottom-0">
          <Image src={desk}></Image>
        </motion.div>
      </div>
      <div className="mt-28">
        <p
          className="text-xs text leading-5"
          style={{
            fontFamily: "Montserrat",
            opacity: "60%",
            marginTop: 16,
            marginLeft: 20,
            marginRight: 25,
            fontSize: 14,
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
