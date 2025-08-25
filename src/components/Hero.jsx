import React from 'react';
import { motion } from 'framer-motion';

const videoSrc = "/apl.mp4";

const HeroSection = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {}
      <video
        autoPlay
        loop
        muted
        playsInline 
        className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover z-[-1]"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {}
      <div className="absolute inset-0 bg-black opacity-50 z-[-1]"></div>

      {}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold leading-tight md:text-5xl lg:text-7xl drop-shadow-lg"
          variants={textVariants}
        >
          Quality Refurbished Laptops
        </motion.h1>

        <motion.p
          className="mt-4 text-base md:text-xl lg:text-2xl max-w-3xl drop-shadow-md"
          variants={textVariants}
        >
          Find your perfect device at an unbeatable price. All our laptops are professionally refurbished and certified for top performance.
        </motion.p>

        <motion.button
          className="mt-8 px-8 py-4 bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-full shadow-lg hover:from-teal-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
          variants={buttonVariants}
        >
          Explore Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroSection;