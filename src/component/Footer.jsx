import React from "react";
// Make sure the path to your logo is correct
import footerLogo from "../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        {/* Top section with logo */}
        <div className="flex justify-center mb-8">
          <img src={footerLogo} alt="Cricket Logo" className="h-16" />
        </div>

        {/* Main content grid for the three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Column 1: About Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="text-sm">
              We are a passionate team providing the best services to our
              customers. We are dedicated to delivering a top-tier fantasy
              sports experience.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Subscribe */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <button
                type="submit"
                className="bg-yellow-500 text-black font-bold px-6 py-2 rounded-md hover:bg-yellow-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar with copyright */}
        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-sm">
          <p>
            &copy;2025{" "}
            <a href="https://github.com/md8-habibullah" target="_Blank" className="underline">md8-habibullah</a> All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
