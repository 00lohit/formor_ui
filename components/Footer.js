import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <div
      className="w-full  flex  bg-[#E1E3F9] h-36 2xl:h-40 text-sm pt-5 px-4 lg:px-16 justify-between"
      style={{ fontFamily: "Montserrat" }}
    >
      <h4 className="text-[#575DC2] text-sm lg:text-base 2xl:text-xl">
        Copyright © 2022 Farmor Agri Solutions Pvt. Ltd.
      </h4>

      <div className="flex">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={router.basePath + "/terms.html"}
          // href="https://farmor.ag/terms"
          className="text-[#575DC2] text-sm lg:text-base 2xl:text-xl mx-3 underline"
        >
          Terms & Conditions
        </a>
        <a
          target="_blank"
          href={router.basePath + "/privacy.html"}
          // href="https://farmor.ag/privacypolicy"
          rel="noopener noreferrer"
          className="text-[#575DC2] text-sm lg:text-base 2xl:text-xl mx-3 underline"
        >
          Privacy Policy
        </a>
        <a
          target="_blank"
          href={router.basePath + "/refund.html"}
          // href="https://farmor.ag/privacypolicy"
          rel="noopener noreferrer"
          className="text-[#575DC2] text-sm lg:text-base 2xl:text-xl mx-3 underline"
        >
          Return and Refund Policy
        </a>
      </div>
    </div>
  );
}
