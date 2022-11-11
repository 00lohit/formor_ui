import Image from "next/image";
import Link from "next/link";
import plant1 from "../../public/impact/plant1.svg";
import plant2 from "../../public/impact/plant2.svg";
import plant3 from "../../public/impact/plant3.svg";
import { v4 as uuidv4 } from "uuid";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import logo from "../../public/home/logo.svg";

import TejaSir from "../../public/team/tejaSir.jpg";
import ShekarSir from "../../public/team/shekarSir.jpg";
import PraneethBro from "../../public/team/praneethBro.jpg";
import VerrBro from "../../public/team/verrBro.jpg";
import JayaAkka from "../../public/team/jayaAkka.jpg";
import RatnakarBro from "../../public/team/ratnakarBro.jpg";
import ArunaMam from "../../public/team/arunaMam.jpg";
import AshokBro from "../../public/team/ashokBro.jpg";
import TejaBro from "../../public/team/tejaBro.jpg";
import Lohit from "../../public/team/lohit.jpg";
import SaiBro from "../../public/team/saiBro.jpg";
import TeamSpecific from "./TeamSpecific";

let TeamList = [
  {
    data: {
      id: uuidv4(),
      name: "Sai Teja",
    },
    image: TejaSir,
  },
  {
    data: {
      id: uuidv4(),
      name: "Raja Sekhar",
    },
    image: ShekarSir,
  },

  {
    data: {
      id: uuidv4(),
      name: "Mansoor",
    },
    image: PraneethBro,
  },
  {
    data: {
      id: uuidv4(),
      name: "Sai Teja",
    },
    image: VerrBro,
  },
  {
    data: {
      id: uuidv4(),
      name: "Raja Sekhar",
    },
    image: JayaAkka,
  },
  {
    data: {
      id: uuidv4(),
      name: "Mansoor",
    },
    image: RatnakarBro,
  },
  {
    data: {
      id: uuidv4(),
      name: "Mansoor",
    },
    image: ArunaMam,
  },

  {
    data: {
      id: uuidv4(),
      name: "Raja Sekhar",
    },
    image: TejaBro,
  },
  {
    data: {
      id: uuidv4(),
      name: "Mansoor",
    },
    image: Lohit,
  },
  {
    data: {
      id: uuidv4(),
      name: "Mansoor",
    },
    image: SaiBro,
  },
];

const Sub = ({ data, image, set, current}) => {
  const Variants = {
    hidden: { opacity: 0.5, top: 5 },
    visible: {
      top: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
  
      onClick={() => set((e) => (e == data.id ? "" : data.id))}
      transition={1}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={Variants}
      className="bg-white shadow-lg  hover:shadow-2xl overflow-hidden relative lg:grayscale lg:hover:grayscale-0 "
      style={{ fontFamily: "Montserrat" }}
    >
      <TeamSpecific data={data} image={image} current={current}></TeamSpecific>
    </motion.div>
  );
};

export default function Teams() {
  return (
    <div className="w-screen h-min lg:overflow-hidden lg:h-screen flex-shrink-0   relative snap-center   scrollbar-hide">
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

      <div className="mt-8 2xl:mt-16  lg:px-16 relative flex flex-col w-full">
        <h1
          className="text-4xl  lg:text-6xl  2xl:text-7xl px-6 lg:px-0"
          style={{
            color: "#575DC2",
            fontFamily: "Anton",
          }}
        >
          TEAM
        </h1>

        <div className="w-full h-full grid grid-cols-2  lg:grid-cols-5 lg:my-6 px-4 lg:px-0 mt-4 gap-7 lg:gap-x-20 ">
          {TeamData()}
        </div>
      </div>
    </div>
  );
}

const TeamData = () => {
  const [current, setCurrent] = useState(null);

  let list = TeamList.map((item, key) => (
    <Sub
    key={key}
      current={current}
      set={setCurrent}
      data={item.data}
      image={item.image}
    ></Sub>
  ));
  return list;
};
