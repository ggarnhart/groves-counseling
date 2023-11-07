import Image from "next/image";
import { Inter } from "next/font/google";
import { Nav } from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Nav />
      <main className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold">About Joy Groves</h1>
            <p className="mt-3 text-2xl">
              Joy Groves has lots of experience. Her son, Aaron, will fill in
              this section.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/CalmRoom.jpg"
              alt="About Us"
              width={500}
              height={300}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
