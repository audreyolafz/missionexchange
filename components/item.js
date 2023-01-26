import Image from "next/image";
import Link from "next/link";

export default function Item({ itemName, itemImg, website }) {
  return (
    <div>
      <Link href={website}>
        <Image src={itemImg} alt={itemName} layout="fill" />
      </Link>
    </div>
  );
}
