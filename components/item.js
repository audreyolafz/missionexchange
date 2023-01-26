import Image from "next/image";
import Link from "next/link";

export default function Item({ companyName, logo, website }) {
  return (
    <div>
      <Link href={website}>
        <Image src={logo} alt={companyName} layout="fill" />
      </Link>
    </div>
  );
}
