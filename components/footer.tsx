import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-400 bg-charcoal text-[var(--color-soft)] w-full">
      <div className="flex items-center justify-center p-4 mx-auto max-w-7xl">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Samuelames.com |{" "}
          <span className="text-sm">
            For business enquiries please use the{" "}
            <Link
              href="/contact"
              className="hover:text-blue-500 underline cursor-pointer"
            >
              contact
            </Link>{" "}
            form.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
