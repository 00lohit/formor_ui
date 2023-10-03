import About from "../components/HomeScreens/About";
import close from "../public/close.svg";
import Image from "next/image";
import Link from "next/link";

export default function about() {
  return (
    <div>
      <Link
        rel="noopener noreferrer"
        className="absolute  top-5 right-5 lg:top-10 z-50"
        href="/"
      >
        <Image alt={""} src={close} />
      </Link>
      <About />
    </div>
  );
}
