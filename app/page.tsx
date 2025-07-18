import me from "@/public/me.jpg";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="w-full mx-auto">
      <section className="relative bg-light py-32 px-5 text-center overflow-hidden mt-10">
        <Image
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/code.avif"
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

      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="font-bold text-3xl text-charcoal">
          <span className="underline decoration-primary underline-offset-4 decoration-3 text-black">
            Abo
          </span>
          ut Me
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-8 mt-8 w-full">
          <Image
            src={me}
            alt="Samuel Ames"
            className="rounded-full w-48 h-48 object-cover shadow-lg"
            width={192}
            height={192}
          />
          <div className="max-w-2xl">
            <h3 className="text-xl text-charcoal font-semibold mb-4">
              Samuel Ames
            </h3>
            <p className="text-lg text-charcoal/80">
              I am a freelance web developer with a BSc in Computer Science,
              based in the U.K. Close to Brighton and London. I specialise in
              Node.js, Next.js and Strapi, partnering with you to deliver
              high-performance websites that are both visually engaging and
              simple to manage.
            </p>
            <p className="mt-4 text-lg text-charcoal/80">
              <strong>Advantages of Next.js + Strapi:</strong>
              <br />
              Lightning-fast load times, an intuitive content management
              interface and enterprise-grade reliability—allowing you to focus
              on strategic growth rather than technical maintenance.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-lg text-charcoal/80">
              <li>
                <strong>Tailored design:</strong> A bespoke layout and
                brand-aligned styling to make your website stand out.
              </li>
              <li>
                <strong>Optimised performance:</strong> Instantaneous page
                rendering and robust uptime keep user engagement high.
              </li>
              <li>
                <strong>Self-serve content updates:</strong> Easily add or
                modify text, images and pages through Strapi’s user-friendly
                dashboard—no developer required.
              </li>
              <li>
                <strong>SEO advantages:</strong> Built-in server-side rendering
                and customisable metadata ensure your site ranks highly in
                search results.
              </li>
              <li>
                <strong>Comprehensive hosting & maintenance:</strong> End-to-end
                setup and ongoing support ensure maximum security and
                reliability.
              </li>
            </ul>
            <p className="mt-4 text-lg">
              Let’s transform your digital presence.{" "}
              <Link
                href="/contact"
                className="text-[var(--color-primary)] hover:underline"
              >
                Contact me →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="pb-24 px-6 bg-softwhite max-w-6xl mx-auto"
      >
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
          <Link href="/tutacall">
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
          </Link>
          <Link href="/ai-interview-coach">
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
          </Link>{" "}
          <Link href="/betterpress">
            <div
              className="bg-white border-t-4 border-[var(--color-accent)] rounded-lg overflow-hidden shadow-lg
                  hover:shadow-2xl transform hover:-translate-y-1 transition"
            >
              <Image
                src="/portfolio4.png"
                alt="BetterPress"
                width={300}
                height={300}
                className="object-top object-cover h-[300px] w-full"
              />
              <h3 className="text-xl font-semibold p-4">Betterpress</h3>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
