"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const How = () => {
  return (
    <div className="pt-5 lg:pt-24 max-w-7xl mx-auto px-5 lg:px-0">
      <h2 className="text-4xl lg:text-5xl font-bold text-br-dark text-center">
        Comment ca marche ?
      </h2>
      <p className="text-br-dark text-center text-xl">Rien de plus simple...</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:my-20 my-10 px-5 lg:px-0">
        <motion.div
          initial={{ translateY: 100 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-br-light p-12 shadow-md rounded-lg flex flex-col items-center"
        >
          <Image
            src={"/icon.png"}
            width={80}
            height={80}
            alt={"Rien de plus simple"}
          />

          <h3 className="text-center text-br-ylw-light text-2xl font-bold py-5">
            Le client scanne votre code QR
          </h3>
        </motion.div>
        <motion.div
          initial={{ translateY: 100 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="bg-br-secondary p-12 shadow-md rounded-lg flex flex-col items-center"
        >
          <Image
            src={"/icon.png"}
            width={80}
            height={80}
            alt={"Le client scanne votre code QR"}
          />

          <h3 className="text-center text-br-ylw-medium text-2xl font-bold py-5">
            Il consulte votre carte depuis son téléphone
          </h3>
        </motion.div>
        <motion.div
          initial={{ translateY: 100 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-br-primary p-12 shadow-md rounded-lg flex flex-col items-center"
        >
          <Image
            src={"/icon.png"}
            width={80}
            height={80}
            alt={"Il consulte votre carte depuis son téléphone"}
          />

          <h3 className="text-center text-br-ylw-dark text-2xl font-bold py-5">
            La commande est prise par le serveur
          </h3>
        </motion.div>
      </div>
    </div>
  );
};

export default How;
