import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white w-full mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Samuel Ames
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Next.js specialist creating high-performance web experiences. 
              Currently building <a href="https://roomz.live" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-semibold underline">roomz.live</a>.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <p className="text-gray-300 text-sm mb-4">
              Currently unavailable for new projects while building roomz.live. Reach out for future opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-gray-600 to-gray-700 text-white font-medium 
                         py-2 px-6 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
            >
              Contact Me
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Samuel Ames. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
