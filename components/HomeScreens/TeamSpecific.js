import { useRef } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Image from "next/image";

export default function TeamSpecific({ data, image }) {
  const ref = useRef();
  return (
    <Flippy
      className={"p-0 m-0"}
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
    >
      <FrontSide style={{padding:0}}>
        <Image src={image} className={" z-10"} />
      </FrontSide>
      <BackSide style={{padding:0}}>ROCKS</BackSide>
    </Flippy>
  );
}
