import Image from "next/image";
import { Inter } from "next/font/google";
import { Nav } from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Nav />
      <main className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold">Contact Groves Counseling</h1>
            <p className="mt-3 text-2xl">
              Reaching out is the first step. Say hi!
            </p>
            <div className="flex mt-5 justify-center">
              <a
                href="mailto:yourPreferredEmail@emailProvider.com?subject=Reaching Out from Your Website"
                className="m-3 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/contact.jpg"
              alt="Contact"
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
