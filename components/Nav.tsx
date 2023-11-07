import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg:slate-50 dark:bg-slate-800">
      <div className="text-2xl font-bold">Groves Counseling</div>
      <div className="space-x-4">
        <Link href="/" className="text-gray-500 hover:text-gray-800">
          Home
        </Link>
        <Link href="about" className="text-gray-500 hover:text-gray-800">
          About
        </Link>
        <Link href="forms" className="text-gray-500 hover:text-gray-800">
          Forms
        </Link>
        <Link href="contact" className="text-gray-500 hover:text-gray-800">
          Contact
        </Link>
      </div>
    </nav>
  );
};
