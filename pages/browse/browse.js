import React from "react";
import Head from "next/head";
import Image from "next/image";
import fetcher from "../../lib/fetcher";
import useSWR from "swr";
import { useEffect, useState } from "react";
import Nav from "../../components/nav";
import Link from "next/link";
import {
  TbMail,
  TbPhone,
  TbBrandInstagram,
  TbBrandFacebook,
} from "react-icons/tb";

function Item({ item }) {
  const [image, setImage] = useState(item.Picture[0].url);

  const mailtoLink = `mailto:${item.Email}`;
  const callLink = `tel:${item.Phone}`;
  const insta = `https://instagram.com/${item.Instagram}`;
  const fb = `https://facebook.com/${item.Facebook}`;

  return (
    <div className="flex flex-col gap-4 border-4 border-gray-300 rounded-lg">
      <img
        id="picture"
        layout="fill"
        className="rounded-lg object-contain self-center"
        src={image}
      />
      <div className="p-3">
        <p>
          <span className="text-2xl text-green-400">
            <b>{item.Item}</b> ~{item.Seller}
          </span>
          <br />
          <span className="text-lg">
            {item.Description}
            <br />
            ready to pickup: {item.Pickup} <br />
            return by: {item.Return} <br />
          </span>
        </p>
        <br />
        <div className="flex flex-row">
          <Link
            href={mailtoLink}
            className="hover:cursor-pointer text-green-400"
          >
            <TbMail size={40} />
          </Link>
          <Link href={callLink} className="hover:cursor-pointer">
            <TbPhone size={40} />
          </Link>
          <Link href={insta} className="hover:cursor-pointer">
            <TbBrandInstagram size={40} />
          </Link>
          <Link href={fb} className="hover:cursor-pointer">
            <TbBrandFacebook size={40} />
          </Link>
        </div>
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
      <section className="mx-5 px-4 gap-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-center">
        {data?.map((item, i) => (
          <Item item={item} key={i} />
        ))}
      </section>
    </div>
  );
}
