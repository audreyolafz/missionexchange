import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { CgDarkMode } from "react-icons/cg";
import { useTheme } from "next-themes";
import Image from "next/image";
import { IoIosCart } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import vercel from "/public/vercel.svg";
import logo from "/public/logo.png";

export default function Nav() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="dark:text-white">
      <ul className="px-4 flex flex-wrap justify-between items-start sm:items-center mt-2 mr-48 lg:mr-96">
        <Link href="/">
          <span className="flex flex-row">
            <h1 className="text-4xl font-bold text-green hover:cursor-pointer">
              Mission Exchange
            </h1>
          </span>
        </Link>
      </ul>
      <br />
      <br />
    </nav>
  );
}
