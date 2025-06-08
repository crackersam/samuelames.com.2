import Image from "next/image";
import Link from "next/link";
import React from "react";

const AiInterviewCoach = () => {
  return (
    <div className="max-w-6xl mx-auto w-fit flex gap-4 flex-wrap sm:flex-nowrap justify-center items-center py-24 px-6 bg-softwhite">
      <div className="">
        <h2 className="font-serif font-bold text-3xl mb-8 inline-block border-primary pb-2">
          <span className="underline decoration-primary underline-offset-4 decoration-3 text-black">
            AI I
          </span>
          nterview Coach
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          AI Interview Coach is a cutting-edge platform designed to help job
          seekers prepare for interviews using artificial intelligence. It
          offers mock interviews and feedback to enhance interview skills and
          boost confidence.
        </p>
      </div>
      <Link href="#" target="_blank" className="shrink-0">
        <div
          className="bg-white border-t-4 border-[var(--color-accent)] rounded-lg overflow-hidden shadow-lg
                        hover:shadow-2xl transform hover:-translate-y-1 transition shrink-0"
        >
          <Image
            src="/portfolio3.png"
            alt="Lecture the Planet"
            className="object-top object-cover h-[300px] w-[346px]"
            width={300}
            height={300}
          />
          <h3 className="text-xl font-semibold p-4">AI Interview Coach</h3>
        </div>
      </Link>
    </div>
  );
};

export default AiInterviewCoach;
