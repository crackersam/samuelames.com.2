import me from "@/public/me.jpg";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="w-full mx-auto">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-32 px-5 text-center overflow-hidden">
        <Image
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
          src="/code.avif"
          alt="Background"
          width={1024}
          height={768}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-slate-900/50 z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="font-serif text-6xl md:text-7xl mb-6 text-white font-bold tracking-tight">
            Websites That <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Sell Themselves</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed">
            I help entrepreneurs turn ideas into polished, high-performance online experiences that drive results.
          </p>
          <a
            href="https://roomz.live"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold 
                       py-4 px-10 rounded-full text-lg shadow-xl hover:shadow-2xl
                       hover:scale-105 transition-all duration-300 hover:from-orange-500 hover:to-amber-500"
          >
            Currently Building roomz.live 🚀
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-charcoal mb-3 inline-block relative">
            About Me
            <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full"></div>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-12 w-full">
          <div className="lg:w-1/3 flex flex-col items-center lg:items-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Image
                src={me}
                alt="Samuel Ames"
                className="relative rounded-full w-56 h-56 object-cover shadow-2xl ring-4 ring-white"
                width={224}
                height={224}
              />
            </div>
            <h3 className="text-2xl text-charcoal font-bold mt-6 text-center lg:text-left">
              Samuel Ames
            </h3>
            <p className="text-gray-600 text-center lg:text-left">Next.js Specialist</p>
          </div>
          
          <div className="lg:w-2/3 space-y-6">
            <p className="text-lg text-charcoal/90 leading-relaxed">
              I am a freelance web developer with a BSc in Computer Science, based in the U.K. close to Brighton and London. 
              I specialise in <span className="font-semibold text-cyan-600">Next.js</span>, delivering
              high-performance websites that are both visually engaging and built with cutting-edge technology.
            </p>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl border-2 border-orange-200">
              <h4 className="text-xl font-bold text-charcoal mb-3 flex items-center gap-2">
                <span className="text-2xl">🚧</span> Currently Unavailable
              </h4>
              <p className="text-gray-700 leading-relaxed">
                I'm currently fully committed to building <a href="https://roomz.live" target="_blank" rel="noopener noreferrer" className="font-bold text-orange-600 hover:text-orange-700 underline">roomz.live</a>, 
                an innovative platform that's taking all of my development time. I'm not taking on new client projects at the moment.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl border border-cyan-100">
              <h4 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <span className="text-2xl">⚡</span> Why Next.js?
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Lightning-fast load times, server-side rendering, exceptional SEO performance, and enterprise-grade reliability—all 
                built on React with the best developer experience in modern web development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h5 className="font-bold text-charcoal mb-2 flex items-center gap-2">
                  <span className="text-cyan-600">✨</span> Tailored Design
                </h5>
                <p className="text-gray-600 text-sm">
                  Bespoke layout and brand-aligned styling to make your website stand out.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h5 className="font-bold text-charcoal mb-2 flex items-center gap-2">
                  <span className="text-blue-600">🚀</span> Optimised Performance
                </h5>
                <p className="text-gray-600 text-sm">
                  Instantaneous page rendering and robust uptime keep user engagement high.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h5 className="font-bold text-charcoal mb-2 flex items-center gap-2">
                  <span className="text-orange-600">⚙️</span> Modern Architecture
                </h5>
                <p className="text-gray-600 text-sm">
                  Built with React Server Components, API routes, and the latest Next.js features.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h5 className="font-bold text-charcoal mb-2 flex items-center gap-2">
                  <span className="text-cyan-600">📈</span> SEO Advantages
                </h5>
                <p className="text-gray-600 text-sm">
                  Server-side rendering and customisable metadata ensure high search rankings.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-600 to-gray-700 p-6 rounded-2xl text-white">
              <p className="text-lg font-medium mb-3">
                Interested in working together in the future?
              </p>
              <p className="text-sm text-gray-200 mb-4">
                While I'm currently focused on roomz.live, feel free to reach out for future opportunities.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-gray-700 font-semibold px-6 py-3 rounded-full 
                           hover:bg-gray-100 transition-all hover:scale-105"
              >
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-charcoal mb-3 inline-block relative">
              Past Work & Portfolio
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full"></div>
            </h2>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Explore some of the projects I've delivered for clients, from e-learning platforms to SaaS solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link href="/lecture-the-planet" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-[280px]">
                  <Image
                    src="/portfolio1.png"
                    alt="Lecture the Planet"
                    className="object-top object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    width={400}
                    height={280}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-charcoal group-hover:text-cyan-600 transition-colors">
                    Lecture the Planet
                  </h3>
                  <p className="text-gray-600 mt-2">E-learning platform for global education</p>
                </div>
              </div>
            </Link>
            
            <Link href="/tutacall" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-[280px]">
                  <Image
                    src="/portfolio2.png"
                    alt="Tutacall"
                    className="object-top object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    width={400}
                    height={280}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-charcoal group-hover:text-cyan-600 transition-colors">
                    Tutacall
                  </h3>
                  <p className="text-gray-600 mt-2">Online tutoring connection platform</p>
                </div>
              </div>
            </Link>
            
            <Link href="/ai-interview-coach" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-[280px]">
                  <Image
                    src="/portfolio3.png"
                    alt="AI Interview Coach"
                    className="object-top object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    width={400}
                    height={280}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-charcoal group-hover:text-cyan-600 transition-colors">
                    AI Interview Coach
                  </h3>
                  <p className="text-gray-600 mt-2">AI-powered interview preparation tool</p>
                </div>
              </div>
            </Link>
            
            <Link href="/betterpress" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-[280px]">
                  <Image
                    src="/portfolio4.png"
                    alt="BetterPress"
                    className="object-top object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    width={400}
                    height={280}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-charcoal group-hover:text-cyan-600 transition-colors">
                    Betterpress
                  </h3>
                  <p className="text-gray-600 mt-2">Content management solution</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
