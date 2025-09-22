// src/component/Footer.jsx

import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// 1. Import the icons you want to use
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail, FiSend } from "react-icons/fi";
import footerLogo from "../assets/logo-footer.png";

const Footer = () => {
  // Animation variants for the container to orchestrate animations
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of children
      },
    },
  };

  // Animation variants for each column
  const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Hover effect for interactive elements
  const iconHover = {
    scale: 1.2,
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <motion.footer
      className="bg-slate-900 text-gray-300 py-12 rounded-t-2xl mt-10"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible" // Animate when the footer comes into view
      viewport={{ once: true, amount: 0.2 }} // Animate once
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={columnVariants}
          className="flex justify-center mb-10"
        >
          <img src={footerLogo} alt="Select Your XI Logo" className="h-16" />
        </motion.div>

        {/* Updated to a 4-column grid to include social links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
          {/* Column 1: About Us */}
          <motion.div variants={columnVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="text-sm leading-relaxed">
              Dedicated to delivering a top-tier fantasy sports experience with
              a passion for cricket. Assemble your dream team and compete for
              glory.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={columnVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <motion.a
                  href="#"
                  className="hover:text-yellow-400 transition-colors"
                  whileHover={iconHover}
                >
                  Home
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="hover:text-yellow-400 transition-colors"
                  whileHover={iconHover}
                >
                  Players
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="hover:text-yellow-400 transition-colors"
                  whileHover={iconHover}
                >
                  Rules
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="hover:text-yellow-400 transition-colors"
                  whileHover={iconHover}
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Subscribe */}
          <motion.div variants={columnVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">
              Join Our Newsletter
            </h3>
            <p className="text-sm mb-4">
              Get the latest updates, news, and player stats.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-grow">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full pl-10 pr-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2"
              >
                <FiSend />
                <span>Subscribe</span>
              </button>
            </form>
          </motion.div>

          {/* Column 4: Follow Us (NEW) */}
          <motion.div
            variants={columnVariants}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-5 mt-4">
              <motion.a
                href="https://github.com/md8-habibullah"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={iconHover}
                className="text-2xl hover:text-yellow-400 transition-colors"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="#"
                whileHover={iconHover}
                className="text-2xl hover:text-yellow-400 transition-colors"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="#"
                whileHover={iconHover}
                className="text-2xl hover:text-yellow-400 transition-colors"
              >
                <FaTwitter />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar with copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }} // Fades in after columns
          className="border-t border-slate-800 mt-12 pt-6 text-center text-sm"
        >
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://github.com/md8-habibullah"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-yellow-400 transition-colors"
            >
              md8-habibullah
            </a>{" "}
            All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
