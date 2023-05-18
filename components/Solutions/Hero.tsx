"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start relative mt-36 lg:mt-48">
      {/* <div className="bg-black absolute left-0 top-0 w-full h-full opacity-50 z-10"></div> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="flex-1 relative z-10 text-br-dark px-5 lg:px-0"
      >
        <h1 className="text-5xl font-bold mb-4">Smili Menu connecté</h1>
        <h2 className="text-2xl pb-4 ">Augmentez votre panier moyen</h2>
        <p className="text-lg lg:text-xl text-br-lgreen text-justify lg:pr-36 pl-4 border-l-4 border-l-br-primary">
          En quelques minutes seulement, il est possible de dématérialiser votre
          carte de restaurant et améliorer l&apos;expérience client. Vous
          n&apos;avez même pas besoin d&apos;une application spécifique, la
          caméra de leur téléphone suffit !
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
