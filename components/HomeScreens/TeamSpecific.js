import { useRef } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Image from "next/image";
import lnlogo from "../../public/team/lnlogo.png";

export default function TeamSpecific({ data, image, current }) {
  const ref = useRef();

  const Main = () => <Image alt={""} src={image} className={" z-10"} />;

  const Details = () => (
    <div className={"flex flex-col items-center justify-evenly h-full"}>
      <p
        className="text-[#575DC2] text-base  text-center"
        style={{ fontFamily: "Montserrat", fontWeight: 600 }}
      >
        {data.name}
      </p>
      <p className="text-[#666666] text-sm text-center" >{data.position}</p>
      <a href={data.link}>
        <Image alt={""} src={lnlogo} className={" z-10"} />
      </a>
    </div>
  );

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
      <FrontSide style={{ padding: 0 }}>
        <Main></Main>
      </FrontSide>

      <BackSide style={{ padding: 0 }}>
        <Details></Details>
      </BackSide>
    </Flippy>
  );
}
