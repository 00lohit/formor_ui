import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="w-full  flex  bg-[#E1E3F9] h-36 2xl:h-40 text-sm pt-5 px-4 lg:px-16 justify-between"
      style={{ fontFamily: "Montserrat" }}
    >
      <h4 className="text-[#575DC2] text-sm lg:text-base 2xl:text-xl">
        Copyright © 2022 Farmor Agri Solutions Pvt. Ltd.
      </h4>

      <div className="flex">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="/terms"
          // href="https://farmor.ag/terms"
          className="text-[#575DC2] text-sm lg:text-base 2xl:text-xl mx-3 underline"
        >
          Terms & Conditions
        </Link>
        <Link
          target="_blank"
          href="/privacy"
          // href="https://farmor.ag/privacypolicy"
          rel="noopener noreferrer"
          className="text-[#575DC2] text-sm lg:text-base 2xl:text-xl mx-3 underline"
        >
          Privacy policy
        </Link>
      </div>
    </div>
  );
}
