import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="flex items-center sm:flex-nowrap flex-wrap justify-center gap-4 sm:justify-between p-4 mx-auto max-w-7xl">
        <Link href="/" className="group">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <Image
                src={"/sa.logo.png"}
                height={60}
                width={60}
                alt="Samuel Ames Logo"
                className="relative rounded-full ring-2 ring-cyan-100"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-gray-900 text-lg">Samuel Ames</div>
              <div className="text-xs text-gray-500">Next.js Specialist</div>
            </div>
          </div>
        </Link>
        <nav className="flex gap-2">
          <Link
            href="/#about"
            className="text-gray-700 font-medium py-2.5 px-5 hover:text-cyan-600 
                       transition-all relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/#portfolio"
            className="text-gray-700 font-medium py-2.5 px-5 hover:text-cyan-600 
                       transition-all relative group"
          >
            Portfolio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium 
                       py-2.5 px-6 rounded-full hover:shadow-lg hover:scale-105
                       transition-all duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
