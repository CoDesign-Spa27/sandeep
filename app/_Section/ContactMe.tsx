import GetInTouchForm from "@/components/GetInTouchForm";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
function ContactMe() {
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(4px)",
    },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: delay * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };
  return (
    <div className="flex py-8 flex-col">
      <motion.div
        className="mb-10 space-y-4 flex flex-col items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        custom={0}
      >
        <div className="text-xs font-mono text-gray-400 tracking-wider uppercase">
          Contact
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        <div className="w-12 h-px bg-gradient-to-r from-color1 to-color2" />
      </motion.div>
      <div className="text-xl text-center font-switzer">
        Do you want to get in touch with me? Drop me a note on{" "}
        <Link href={"https://x.com/sandeep_code28"} target="_blank">
          <span className="border-b border-color2 text-color1 hover:text-color1/100 cursor-pointer">
            Twitter
          </span>
        </Link>
      </div>

      <GetInTouchForm />
    </div>
  );
}

export default ContactMe;
