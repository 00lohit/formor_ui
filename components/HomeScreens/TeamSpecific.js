import { useRef } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Image from "next/image";

export default function TeamSpecific({ data, image, current }) {
  const ref = useRef();
  
  return (
    <Flippy
    style={{ backgroundColor: "rgba(0,0,0,0)" }}
      isFlipped={current == data.id}
      className={"p-0 m-0"}
      flipOnHover={true} // default false
      flipOnClick={false} // default false
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
