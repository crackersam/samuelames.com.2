import { getLecturetheplanetText } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const revalidate = 300; // Revalidate at most every 5 minutes

const LectureThePlanet = async () => {
  const lecturetheplanetText = await getLecturetheplanetText();
  return (
    <div className="max-w-6xl mx-auto w-fit flex gap-4 flex-wrap sm:flex-nowrap justify-center items-center py-24 px-6 bg-softwhite">
      <div className="">
        <h2 className="font-serif font-bold text-3xl mb-8 inline-block border-primary pb-2">
          <span className="underline decoration-primary underline-offset-4 decoration-3 text-black">
            Lec
          </span>
          ture the Planet
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          {lecturetheplanetText.data.Body}
        </p>
      </div>
      <Link
        href="https://lecturetheplanet.com"
        target="_blank"
        className="shrink-0"
      >
        <div
          className="bg-white border-t-4 border-[var(--color-accent)] rounded-lg overflow-hidden shadow-lg
                        hover:shadow-2xl transform hover:-translate-y-1 transition shrink-0"
        >
          <Image
            src="/portfolio1.png"
            alt="Lecture the Planet"
            className="object-top object-cover h-[300px] w-[346px]"
            width={300}
            height={300}
          />
          <h3 className="text-xl font-semibold p-4">Lecture the Planet</h3>
        </div>
      </Link>
    </div>
  );
};

export default LectureThePlanet;
