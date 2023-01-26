import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { CgDarkMode } from "react-icons/cg";
import { useTheme } from "next-themes";
import Image from "next/image";
import { IoIosCart } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import vercel from "/public/vercel.svg";

export default function Nav() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="dark:text-white">
      <ul className="px-4 flex flex-wrap sm:justify-between items-start sm:items-center mt-2">
        <Link href="/">
          <h1 className="text-4xl text-green-400 hover:cursor-pointer">
            Mission Exchange
          </h1>
        </Link>
      </ul>
      {/* <Image src={vercel} height="30" weight="30" /> */}
      <br />
      <br />
    </nav>
  );
}
