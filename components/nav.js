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
        <a href="/">
          {/* <Image src={vercel} height="30" weight="30" /> */}
          <h1 className="text-4xl">Mission Exchange</h1>
        </a>

        {/* <a
          href="https://i.pinimg.com/originals/79/58/d6/7958d60d32cbfc6304bba080800f62aa.gif"
          target="_blank"
          rel="noreferrer"
          className="sm:justify-self-center"
        >
          <IoIosCart size={50} />
        </a> */}
      </ul>
      <br />
      <br />
    </nav>
  );
}