import {
  getAiInterviewCoachText,
  getHeroText,
  getLecturetheplanetText,
  getTutacallText,
} from "@/lib/api";
import me from "@/public/me.jpg";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 300; // Revalidate at most every 5 minutes
export default async function Home() {
  const heroText = await getHeroText();
  const tutacallText = await getTutacallText();
  const lecturetheplanetText = await getLecturetheplanetText();
  const aiInterviewCoachText = await getAiInterviewCoachText();

  return (
    <div className=" mx-auto">
      <section className="relative bg-light py-32 text-center overflow-hidden mt-10">
        <Image
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/grass.avif"
          alt="Eastbourne"
          width={1024}
          height={768}
        />
        <div className="relative z-10 bg-[var(--color-soft)] w-fit p-4 mx-auto rounded-lg shadow-lg">
          <h1 className="font-serif text-5xl mb-4 text-charcoal">
            Websites That Sell Themselves
          </h1>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-charcoal/80">
            <span>
              I help entrepreneurs turn ideas into polished, high-performance
              online experiences.
            </span>
          </p>
          <Link
            href="contact"
            className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-lg 
                 hover:bg-accent transition transform hover:-translate-y-1"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="font-bold text-3xl text-charcoal">
          <span className="underline decoration-primary underline-offset-4 decoration-3 text-black">
            Abo
          </span>
          ut Me
        </h2>
        <p className="text-lg leading-relaxed">
          I am a Software Developer with a BSc in Computer Science. I
          collaborate closely with designers to deliver bespoke web solutions.
          Whether you need a streamlined landing page or a fully featured
          application, I have the expertise to realise your vision. Contact me
          to discuss your project.
        </p>
      </section>

      <section className="py-24 px-6 bg-softwhite max-w-6xl mx-auto">
        <h2 className="font-serif font-bold text-3xl mb-8 inline-block border-primary pb-2">
          <span className="underline decoration-primary underline-offset-4 decoration-3 text-black">
            Pas
          </span>
          t Work & Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/lecture-the-planet">
            <div
              className="bg-white border-t-4 border-[var(--color-accent)] rounded-lg overflow-hidden shadow-lg
                  hover:shadow-2xl transform hover:-translate-y-1 transition"
            >
              <Image
                src="/portfolio1.png"
                alt="Lecture the Planet"
                className="object-top object-cover h-[300px] w-full"
                width={300}
                height={300}
              />
              <h3 className="text-xl font-semibold p-4">Lecture the Planet</h3>
            </div>
          </Link>
          <div
            className="bg-white border-t-4 border-[var(--color-accent)] rounded-lg overflow-hidden shadow-lg
                  hover:shadow-2xl transform hover:-translate-y-1 transition"
          >
            <Image
              src="/portfolio2.png"
              height={300}
              width={300}
              alt="Tutacall"
              className="object-top object-cover h-[300px] w-full"
            />
            <h3 className="text-xl font-semibold p-4">Tutacall</h3>
          </div>
          <div
            className="bg-white border-t-4 border-[var(--color-accent)] rounded-lg overflow-hidden shadow-lg
                  hover:shadow-2xl transform hover:-translate-y-1 transition"
          >
            <Image
              src="/portfolio3.png"
              alt="AI Interview Coach"
              width={300}
              height={300}
              className="object-top object-cover h-[300px] w-full"
            />
            <h3 className="text-xl font-semibold p-4">AI Interview Coach</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
