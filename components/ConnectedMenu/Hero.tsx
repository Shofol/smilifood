"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-5 lg:mx-10 xl:mx-auto flex flex-col lg:flex-row items-start relative mt-36 lg:mt-48">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="flex-1 relative z-10 text-br-dark px-5 lg:px-0"
      >
        <h1 className="text-5xl font-bold mb-4">FastFood Connected Menu </h1>
        <h2 className="text-2xl pb-4 ">Increase your average basket n</h2>
        <p className="text-lg lg:text-xl text-br-lgreen text-justify lg:pr-36 pl-4 border-l-4 border-l-br-primary">
          In just a few minutes, it is possible to dematerialize your restaurant
          menu and improve the customer experience. You don&apos;t even need a
          specific application, their phone&apos;s camera is enough!
        </p>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.75 }}
        className="flex-1 flex justify-center items-center px-10 lg:px-0 py-16 lg:py-0"
      >
        <Image src={"/menuArt.svg"} width={488} height={488} alt="hero image" />
      </motion.div>
    </div>
  );
};

export default Hero;
