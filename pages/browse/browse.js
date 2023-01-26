import React from "react";
import Head from "next/head";
import Image from "next/image";
import fetcher from "../../lib/fetcher";
import useSWR from "swr";
import { useEffect, useState } from "react";
import Nav from "../../components/nav";
import Link from "next/link";

function Item({ item }) {
  const [image, setImage] = useState(item.Picture[0].url);
  const [audio, setAudio] = useState();

  useEffect(() => {
    setAudio(
      new Audio(
        "https://cloud-r450r4ok8-hack-club-bot.vercel.app/0chomp_audio.mp4"
      )
    );
  }, []);

  const onClick = () => {
    setImage("https://cloud-ji1wiykgk-hack-club-bot.vercel.app/0img_1956.jpg");
    audio.play();
  };

  return (
    <div
      className="hover:scale-105 transition-all duration-200 w-full flex flex-col gap-4 border-4 border-gray-300 rounded-lg p-4"
      onClick={onClick}
    >
      <img
        id="picture"
        layout="fill"
        className="rounded-lg object-contain self-center h-72"
        src={image}
      />
      <div>
        <p className="text-xl">
          seller: {item.Seller}
          <br />
          description: {item.Description}
          <br />
          email: {item.Email}
        </p>
      </div>
    </div>
  );
}

export default function Browse() {
  const [image, setImage] = useState("");
  let data = useSWR("/api", fetcher).data;
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <Nav />
      <section className="mx-5 px-4 gap-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {data?.map((item, i) => (
          <Item item={item} key={i} />
        ))}
      </section>
    </div>
  );
}
