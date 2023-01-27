import React from "react";
import Nav from "../components/nav";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";

export default function Index() {
  const secretCode = [
    "a",
    "c",
    "a",
    "d",
    "e",
    "m",
    "i",
    "c",
    "v",
    "a",
    "l",
    "i",
    "d",
    "a",
    "t",
    "i",
    "o",
    "n",
  ];
  const keys = [];
  const Router = useRouter();

  function keysDetector(e) {
    console.log(e.key);

    keys.push(e.key);
    if (keys.length > secretCode.length) {
      keys.shift();
    }

    if (JSON.stringify(keys) === JSON.stringify(secretCode)) {
      alert("Hey warrior!");
      Router.push("/warrior");
    }
  }
  useEffect(() => {
    window.addEventListener("keyup", keysDetector);
  });
  return (
    <div>
      <Nav />
      <h1 className="text-5xl text-center">Hello, there!</h1>
      <br />
      <h1 className="text-3xl text-center">
        Please enter the password in order to be verified.
      </h1>

      <br></br>
    </div>
  );
}
