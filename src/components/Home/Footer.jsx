import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="bg-black text-orange-100 py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Social Icons Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex gap-6 text-2xl"
        >
          <a
            href="https://www.linkedin.com/in/subham-mallick-10165b2a6/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700 hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Subham-Web98"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white hover:bg-black rounded-full shadow-inner hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/SubhamX98"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-sky-400 hover:scale-110 transition-transform"
          >
            <FaTwitter />
          </a>
        </motion.div>

        {/* Navigation Links Section */}
        <motion.nav
          whileInView={{opacity:1,scale:1}}
          initial={{opacity:0,scale:0.6}}
          transition={{duration:1.5}}
          className="flex flex-wrap justify-center gap-6 text-lg"
        >
          <Link
            className="hover:text-orange-400 hover:scale-105 transition-transform"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-orange-400 hover:scale-105 transition-transform"
            to="/project"
          >
            Project
          </Link>
          <Link
            className="hover:text-orange-400 hover:scale-105 transition-transform"
            to="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-orange-400 hover:scale-105 transition-transform"
            to="/contact"
          >
            Contact
          </Link>
        </motion.nav>

        {/* Contact Information Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="text-center md:text-left"
        >
          <p>
            Email:{" "}
            <a
              href="mailto:chemsubham@gmail.com"
              className="hover:underline hover:text-blue-600"
            >
              chemsubham@gmail.com
            </a>
          </p>
          <p>Phone: +91 7074495130</p>
          <p>Address: Kolkata - 700082</p>
          <div className="mt-4">
            <p>&copy; Subham Cosmos. All rights reserved.</p>
            <p>
              Designed by{" "}
              <span className="text-orange-500 font-bold">Subham Mallick</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
