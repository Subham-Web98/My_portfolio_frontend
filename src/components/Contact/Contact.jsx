import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-10 gap-10 md:gap-20 px-4">
      {/* Background Styling */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>

      {/* Contact Image */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex justify-center"
      >
        <img
          className="rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-lg"
          src="/contactPng.png"
          alt="Contact"
          loading="lazy"
        />
      </motion.div>

      {/* Contact Form */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="w-full max-w-lg border-2 px-6 py-8 rounded-2xl shadow-md shadow-emerald-400 bg-gray-900"
      >
        <form className="flex flex-col gap-y-5 text-left text-orange-100">
          {/* Name Input */}
          <label className="w-full flex flex-col">
            Name
            <input
              type="text"
              className="rounded-xl outline-none px-5 py-2 mt-2 bg-gray-800 text-white placeholder-gray-400"
              placeholder="Enter your name"
              required
            />
          </label>

          {/* Email Input */}
          <label className="w-full flex flex-col">
            Email
            <input
              type="email"
              className="rounded-xl outline-none px-5 py-2 mt-2 bg-gray-800 text-white placeholder-gray-400"
              placeholder="Enter your email"
              required
            />
          </label>

          {/* Message Input */}
          <label className="w-full flex flex-col">
            Message
            <textarea
              className="rounded-xl outline-none px-5 py-2 mt-2 bg-gray-800 text-white placeholder-gray-400 resize-none h-32"
              placeholder="Write your message here"
              required
            ></textarea>
          </label>

          {/* Submit Button */}
          <button
            className="px-5 py-2 rounded-lg bg-orange-500 hover:bg-orange-400 hover:text-white hover:font-semibold transition-all"
            type="submit"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
