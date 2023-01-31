import React from "react";
import Link from "next/link";
import Nav from "../components/nav";
import Image from "next/image";
import logo from "/public/logo.png";

export default function Warrior() {
  return (
    <div>
      <Nav />
      <div className="flex flex-row gap-5 justify-center">
        <div className="border-4 rounded-lg border-lightGreen">
          <Link href="/browse">
            <h3 className="p-10 md:p-20 lg:p-36 text-2xl hover:underline hover:cursor-pointer">
              Browse
            </h3>
          </Link>
        </div>
        <div className="border-4 rounded-lg border-lightGreen">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://airtable.com/shrk639o81rZoG4H5"
          >
            <h3 className="p-10 md:p-20 lg:p-36 text-2xl hover:underline hover:cursor-pointer">
              Upload
            </h3>
          </Link>
        </div>
      </div>
      <br />

      <div className="grid mx-auto item-center self-center justify-center">
        <Image src={logo} height="250" width="250" />
      </div>
    </div>
  );
}
