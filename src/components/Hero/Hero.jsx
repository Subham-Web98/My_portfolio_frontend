import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { motion } from "motion/react";

const iconMotions = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [20, -20],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Hero = () => {
  return (
    <section className=" text-white">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>
      <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 lg:px-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left p-8">
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-orange-100"
          >
            Hi, I am Subham
          </motion.h1>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 2 }}
            className="text-lg md:text-xl lg:text-2xl mt-6 mb-6 text-zinc-100"
          >
            I specialize in building modern, scalable, and responsive web
            applications. I craft user-centric digital solutions that not only
            look great but also deliver exceptional performance.
          </motion.p>
          <motion.a
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 2 }}
            href="/myLogo.webp"
            className="bg-orange-400 text-orange-100 font-medium rounded-full py-3 px-6 inline-block hover:bg-gray-100 hover:text-black transition duration-300"
            download
            rel="noopener noreferrer"
          >
            Download Resume
          </motion.a>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 p-8 flex justify-center ">
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            height={650}
            width={650}
            src="/_MG_6695_11zon.webp"
            alt="profile photo"
            className="rounded-3xl w-72 sm:w-96 lg:w-full max-w-md mx-2"
            loading="lazy"
          />
        </div>
      </div>
      <div>
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        </div>
        <h1 className="text-center font-extrabold py-4">
          <motion.span
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.8 }}
            className="text-orange-50 text-4xl md:text-5xl tracking-tight"
          >
            Technologies
          </motion.span>
        </h1>

        <div className="py-20  flex flex-wrap items-center justify-center text-5xl gap-x-9 gap-y-10">
          <div className="fixed top-0 -z-10 h-full w-full">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
          </div>
          <motion.div
            variants={iconMotions(3)}
            initial="initial"
            animate="animate"
            className="text-orange-500"
          >
            <FaHtml5 />
          </motion.div>
          <motion.div
            variants={iconMotions(4)}
            initial="initial"
            animate="animate"
            className="text-sky-400"
          >
            <FaCss3Alt />
          </motion.div>

          <motion.div
            variants={iconMotions(3)}
            initial="initial"
            animate="animate"
            className="text-yellow-500"
          >
            <TbBrandJavascript />
          </motion.div>

          <motion.div
            variants={iconMotions(5)}
            initial="initial"
            animate="animate"
            className="text-cyan-500"
          >
            {" "}
            <RiReactjsLine />
          </motion.div>

          <motion.div
            variants={iconMotions(1)}
            initial="initial"
            animate="animate"
            className="text-green-600 text-6xl"
          >
            {" "}
            <FaNode />
          </motion.div>

          <motion.div
            variants={iconMotions(3)}
            initial="initial"
            animate="animate"
            className="text-white  bg-black p-2 text-3xl rounded-full"
          >
            <SiExpress />
          </motion.div>

          <motion.div
            variants={iconMotions(5)}
            initial="initial"
            animate="animate"
            className="text-green-400"
          >
            {" "}
            <SiMongodb />
          </motion.div>

          <motion.div
            variants={iconMotions(2)}
            initial="initial"
            animate="animate"
            className="text-sky-400"
          >
            <SiTailwindcss />
          </motion.div>

          <motion.div
            variants={iconMotions(6)}
            initial="initial"
            animate="animate"
            className="text-purple-500"
          >
            <FaBootstrap />
          </motion.div>

          <motion.div
            variants={iconMotions(3)}
            initial="initial"
            animate="animate"
            className="text-orange-500"
          >
            <SiPostman />
          </motion.div>

          <motion.div
            variants={iconMotions(1)}
            initial="initial"
            animate="animate"
            className="text-orange-700"
          >
            <FaGitAlt />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
