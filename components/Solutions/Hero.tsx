"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full relative">
      <div className="bg-black absolute left-0 top-0 w-full h-full opacity-50 z-10"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="relative py-36 z-10 text-white max-w-4xl px-5 lg:px-0 lg:pl-28"
      >
        <h1 className="text-5xl lg:text-6xl font-bold pl-4 mb-4 border-l-4 border-l-br-primary">
          Smili Menu connecté
        </h1>
        <h2 className="text-2xl lg:text-3xl pb-4">
          Augmentez votre panier moyen
        </h2>
        <p className="text-lg lg:text-xl text-justify lg:pr-36">
          En quelques minutes seulement, il est possible de dématérialiser votre
          carte de restaurant et améliorer l&apos;expérience client. Vous
          n&apos;avez même pas besoin d&apos;une application spécifique, la
          caméra de leur téléphone suffit !
        </p>
      </motion.div>
      <Image
        src={"/heroBg.png"}
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        alt="hero image"
      />
    </div>
  );
};

export default Hero;
