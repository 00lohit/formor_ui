import About from "./HomeScreens/About";
import Home from "./HomeScreens/Home";
import { motion, useScroll } from "framer-motion";
import Impact from "./HomeScreens/Impact";
import { useRef, useEffect } from "react";
import Careers from "./HomeScreens/Careers";

export default function HomeScreens() {
  // const { scrollXProgress } = useScroll();

  // const ref = useRef();

  // useEffect(() => {
  //   const onWheel = (e) => {
  //     ref.current.scrollLeft += e.deltaY*10 
  //   };
  //   ref.current.addEventListener("wheel", onWheel, {
  //     passive: true,
  //     smooth: true,
  //   });
  //   return () => {
  //     ref.current.removeEventListener("wheel", onWheel, { passive: true });
  //   };
  // }, []);


  return (
    <div className="w-min h-screen overflow-y-hidden  flex">
      <div
        // ref={ref}
        className="w-screen h-screen overflow-scroll flex flex-col lg:flex-row scrollbar-hide scroll-smooth  snap-y snap-mandatory lg:snap-x"
      >
        <Home></Home>
        <About></About>
        <Impact></Impact>
        <Careers></Careers>
      </div>

      {/* <motion.div
        style={{ scaleX: scrollXProgress }}
        className="progress-bar absolute"
      ></motion.div> */}
    </div>
  );
}
