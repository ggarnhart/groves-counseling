import Image from "next/image";
import { Inter } from "next/font/google";
import { Nav } from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Nav />
      <main className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <h1 className="text-4xl font-bold">Groves Counseling</h1>
        <p className="mt-3 text-2xl">
          Empowering families to navigate life&apos;s challenges with strength
          and unity.
        </p>
        <p className="mt-1 text-xl text-gray-500">
          Get to know more about Groves Counseling.
        </p>
        <div className="flex mt-5">
          <a
            href="mailto:yourPreferredEmail@emailProvider.com?subject=Reaching Out from Your Website"
            className="mx-3 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="mx-3 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            About Us
          </a>
        </div>
      </main>
    </div>
  );
}
