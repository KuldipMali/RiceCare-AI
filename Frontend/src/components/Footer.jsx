import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#020b1a] text-gray-300 px-20 py-16 mt-20">
      <div className="grid grid-cols-4 gap-16">

        {/* Logo + Description */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-green-500 p-2 rounded-lg text-white font-bold">
              📖
            </div>
            <h2 className="text-xl font-bold text-white">RiceCare AI</h2>
          </div>

          <p className="text-sm leading-relaxed text-gray-400">
            Empowering global agriculture through state-of-the-art artificial
            intelligence and sustainable farming practices.
          </p>

          <div className="flex gap-4">
            <div className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 cursor-pointer">
              <FaTwitter />
            </div>
            <div className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 cursor-pointer">
              <FaLinkedin />
            </div>
          </div>
        </div>

        {/* Platform */}
        <div>
          <h3 className="text-white font-semibold mb-6">PLATFORM</h3>
          <ul className="flex flex-col gap-4 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Disease Library</li>
            <li className="hover:text-white cursor-pointer">How it Works</li>
            <li className="hover:text-white cursor-pointer">Research Paper</li>
            <li className="hover:text-white cursor-pointer">API Access</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-6">RESOURCES</h3>
          <ul className="flex flex-col gap-4 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Farmer Guide</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Community Support</li>
            <li className="hover:text-white cursor-pointer">Case Studies</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-6">COMPANY</h3>
          <ul className="flex flex-col gap-4 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-800 mt-16 pt-8 flex justify-between text-sm text-gray-500">
        <p>© 2026 RiceCare AI Inc. All rights reserved.</p>

        <div className="flex gap-8">
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <span className="hover:text-white cursor-pointer">Cookies Policy</span>
          <span className="hover:text-white cursor-pointer">Sitemap</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;