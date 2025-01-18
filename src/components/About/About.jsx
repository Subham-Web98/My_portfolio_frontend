import { motion } from "motion/react";
const About = () => {
  return (
    <section id="about">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-12">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-orange-100 drop-shadow-md"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-orange-100">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="text-lg md:text-xl leading-7 mb-6"
            >
              Hi there! I am <span className="font-bold">Subham Mallick</span>,
              a passionate
              <span className="text-green-400 font-semibold">
                {" "}
                MERN Stack Developer
              </span>{" "}
              with a knack for crafting modern, scalable, and efficient web
              applications. I thrive on solving complex problems and turning
              ideas into impactful digital solutions.
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 2 }}
              className="text-lg md:text-xl leading-7 mb-6"
            >
              With expertise in{" "}
              <strong>MongoDB, Express.js, React.js, and Node.js</strong>, I
              focus on delivering user-centric designs, seamless user
              experiences, and performance-optimized applications. I am always
              eager to learn new technologies and stay updated with the latest
              trends in web development.
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 2.3 }}
              className="text-lg md:text-xl leading-7"
            >
              Outside of coding, I enjoy exploring new places, staying inspired
              by creative challenges, and contributing to open-source projects.
              Let us connect and create something amazing together!
            </motion.p>
          </div>

          {/* Image Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 2.3 }}
            className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
          >
            <img
              src="/about.png"
              alt="About Me"
              className=" w-72 sm:w-96 lg:w-full max-w-md"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
