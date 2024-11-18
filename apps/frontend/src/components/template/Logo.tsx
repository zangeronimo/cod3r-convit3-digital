import { Righteous } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const font = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export default function Logo() {
  return (
    <Link href="/" className={`flex items-center gap-2 ${font.className}`}>
      <Image src="/logo.svg" alt="Logo" width={50} height={50} />
      <h1 className="flex flex-col items-center text-lg leading-5">
        <div>
          CONVIT<span className="text-blue-500">3</span>
        </div>
        <div>DIGITAL</div>
      </h1>
    </Link>
  );
}
