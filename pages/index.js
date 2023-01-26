import React from "react";
import Nav from "../components/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <h1 className="text-5xl text-center font-bold">Hello, warrior!</h1>
      <br />
      <div className="flex flex-row gap-5 justify-center">
        <div className="border-4 rounded-lg">
          <a href="/browse/browse">
            <h3 className="p-10 md:p-20 lg:p-36 text-2xl">Browse</h3>
          </a>
        </div>
        <div className="border-4 rounded-lg">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://airtable.com/shrk639o81rZoG4H5"
          >
            <h3 className="p-10 md:p-20 lg:p-36 text-2xl">Upload</h3>
          </a>
        </div>
        {/* <div className="border-4">
          <h3 className="p-10 md:p-20 lg:p-36 text-2xl">Browse</h3>
        </div> */}
      </div>
      <br></br>
    </>
  );
}
