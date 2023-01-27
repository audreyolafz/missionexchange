import React from "react";
import Nav from "../components/nav";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Nav />
      <h1 className="text-5xl text-center">Hello, warrior!</h1>
      <br />
      <div className="flex flex-row gap-5 justify-center">
        <div className="border-4 rounded-lg border-green-300">
          <Link href="/browse/browse">
            <h3 className="p-10 md:p-20 lg:p-36 text-2xl hover:underline hover:cursor-pointer">
              Browse
            </h3>
          </Link>
        </div>
        <div className="border-4 rounded-lg border-green-300">
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
      <br></br>
    </div>
  );
}
