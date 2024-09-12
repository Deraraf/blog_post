import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between">
        <Link href={"/"}>
          {" "}
          <Image
            src={assets.logo}
            width={180}
            height={180}
            className="w-[130px] sm:w-auto"
            alt="header"
          />
        </Link>
        <Link href={"/admin"}>
          <Button
            variant="outline"
            className="hover:bg-slate-600 shadow-black active:bg-white "
          >
            Get Started
            <Image src={assets.arrow} className="ml-2" alt="image" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
