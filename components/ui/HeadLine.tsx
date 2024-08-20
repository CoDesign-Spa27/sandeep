import { motion } from "framer-motion";
import React from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Headline = ({ title }: { title: string }) => {
  // Set up animation control
  const controls = useAnimation();

  // Set up intersection observer to detect when the component is in view
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  // Start animation when component is in view
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Define popping animation variants
  const popUpVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="text-3xl uppercase md:text-5xl lg:text-5xl font-bold font-switzer mb-4 dark:text-white"
      initial="hidden"
      animate={controls}
      variants={popUpVariants} // Apply pop-up animation to the header
    >
      {title}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { width: 0 },
          visible: { width: "100%" },
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="h-[0.2rem] animate-gradient bg-300% bg-gradient-to-r from-violet-500 via-blue-500 to-pink-500 mt-2"
      />
    </motion.div>
  );
};
