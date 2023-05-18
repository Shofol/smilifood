"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start relative mt-36 lg:mt-48">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="flex-1 relative z-10 text-br-dark px-5 lg:px-0"
      >
        <h1 className="text-5xl font-bold mb-4">Smili commande en ligne</h1>
        <h2 className="text-2xl pb-4 ">
          Augmentez le nombre de commandes en ligne
        </h2>
        <p className="text-lg lg:text-xl text-br-lgreen text-justify lg:pr-36 pl-4 border-l-4 border-l-br-primary">
          Ne perdez plus de temp à décrocher au téléphone et augmentez vos
          ventes
        </p>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.75 }}
        className="flex-1 flex justify-end items-end px-10 lg:px-0 py-16 lg:py-0"
      >
        <Image src={"/blogArt.svg"} width={500} height={500} alt="hero image" />
      </motion.div>
    </div>
  );
};

export default Hero;
