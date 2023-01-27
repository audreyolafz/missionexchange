import React from "react";
import Link from "next/link";
import Nav from "../components/nav";

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
    </div>
  );
}
