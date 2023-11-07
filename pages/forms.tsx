import Image from "next/image";
import { Inter } from "next/font/google";
import { Nav } from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function Forms() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Nav />
      <main className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="">
            <h1 className="text-4xl font-bold">Forms</h1>
            <p className="my-3 text-2xl">
              Please download the following forms.
            </p>
            <p className="my-3 text-lg text-gray-500">
              They are chill, we just need them for ~legal reasons.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <a
                  href="/path/to/form1.pdf"
                  download
                  className="text-blue-500 hover:text-blue-800 block p-4 border border-blue-500 rounded-md"
                >
                  Form 1
                </a>
              </div>
              <div>
                <a
                  href="/path/to/form2.pdf"
                  download
                  className="text-blue-500 hover:text-blue-800 block p-4 border border-blue-500 rounded-md"
                >
                  Form 2
                </a>
              </div>
              <div>
                <a
                  href="/path/to/form3.pdf"
                  download
                  className="text-blue-500 hover:text-blue-800 block p-4 border border-blue-500 rounded-md"
                >
                  Form 3
                </a>
              </div>
              <div>
                <a
                  href="/path/to/form4.pdf"
                  download
                  className="text-blue-500 hover:text-blue-800 block p-4 border border-blue-500 rounded-md"
                >
                  Form 4
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
