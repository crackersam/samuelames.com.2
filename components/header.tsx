import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-charcoal text-white">
      <div className="flex items-center justify-between p-4 mx-auto max-w-7xl">
        <Link href="/">
          <Image
            src={"/sa.logo.png"}
            height={75}
            width={75}
            alt="Samuel Ames Logo"
            className="rounded-full bg-[var(--color-accent)] p-1"
          />
        </Link>
        <nav className="flex space-x-4">
          <Link
            href="/contact"
            className="bg-[var(--color-primary)] py-3 px-4 hover:bg-[var(--color-accent)] rounded-lg 
            transition-all transform hover:-translate-y-1"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
