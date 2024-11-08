"use client";

import Image from "next/image";
import React from "react";
import Button from "../layout/Button";
import { motion } from "framer-motion";

const Hero = () => {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center py-20 max-w-7xl mx-auto mt-10 lg:mt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="px-5 lg:px-0"
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-br-dark leading-tight">
          Economisez du temp et de l’argent avec votre logiciel Smili food
        </h1>
        <p className="text-lg text-br-ldark font-light pt-5 max-w-lg">
          Simplifiez votre activité de restauration en optimisant chaque étape
          et concentrez-vous sur le développement de votre restaurant.
        </p>
        <div className="mt-8 flex justify-start">
          <Button
            title="Nous conctacter"
            type="primary"
            actionType="link"
            target="/#contact"
            className="shadow-md"
            icon={icon}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.75 }}
      >
        <Image
          src={"/art.svg"}
          width={1500}
          height={1000}
          alt="restaurant illustration"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
