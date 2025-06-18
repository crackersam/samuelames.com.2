import Image from "next/image";
import Link from "next/link";
import React from "react";

export const revalidate = 300; // Revalidate at most every 5 minutes

const Betterpress = async () => {
  return (
    <div className="max-w-6xl mx-auto w-fit flex gap-4 flex-wrap sm:flex-nowrap justify-center items-center py-24 px-6 bg-softwhite">
      <div className="">
        <h2 className="font-serif font-bold text-3xl mb-8 inline-block border-primary pb-2">
          <span className="underline decoration-primary underline-offset-4 decoration-3 text-black">
            Bet
          </span>
          terpress
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Betterpress Is a blogging platform designed to be better for page load
          speeds, security and search engine optimisation, then alternatives. It
          is built using a content management system called Strapi for easy
          updates and management of content, and Next.js for fast page loads and
          server-side rendering. The platform is designed to be user-friendly
          and accessible, with a focus on providing a better experience for both
          content creators and readers.
        </p>
      </div>
      <Link
        href="https://www.better-press.com"
        target="_blank"
        className="shrink-0"
      >
        <div
          className="bg-white border-t-4 border-[var(--color-accent)] rounded-lg overflow-hidden shadow-lg
                        hover:shadow-2xl transform hover:-translate-y-1 transition shrink-0"
        >
          <Image
            src="/portfolio4.png"
            alt="Betterpress"
            className="object-top object-cover h-[300px] w-[346px]"
            width={300}
            height={300}
          />
          <h3 className="text-xl font-semibold p-4">Betterpress</h3>
        </div>
      </Link>
    </div>
  );
};

export default Betterpress;
