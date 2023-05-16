"use client";

import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className="pt-5 lg:pt-24 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-br-dark text-center">
        Smili food un outil tout-en-un pour développer votre activité grâce à
        Internet
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:my-20 my-10 px-5 lg:px-0">
        <motion.div
          initial={{ translateY: 100 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-br-primary p-12 shadow-md rounded-lg"
        >
          <h3 className="text-br-lgreen-2 text-2xl font-bold pb-5">
            Gagnez des clients
          </h3>
          <p className="text-br-ldark">
            Convertissez les clients en ligne avec notre réservation en ligne et
            offrez une expérience de commande fluide sur place avec nos
            solutions.
          </p>
        </motion.div>
        <motion.div
          initial={{ translateY: 100 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="bg-br-mgreen p-12 shadow-md rounded-lg"
        >
          <h3 className="text-br-mgreen-2 text-2xl font-bold pb-5">
            Gagnez du temp
          </h3>
          <p className="text-br-ldark">
            Simplifiez votre quotidien grâce à notre série de fonctionnalités
            conçues pour améliorer l&apos;expérience client et celle de votre
            équipe.
          </p>
        </motion.div>
        <motion.div
          initial={{ translateY: 100 }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-br-dgreen p-12 shadow-md rounded-lg"
        >
          <h3 className="text-br-mgreen text-2xl font-bold pb-5">
            Augmentez votre CA
          </h3>
          <p className="text-br-ldark">
            Maximisez votre panier chiffre d’affaireen créant des parcours de
            commande optimisés avec Smili food.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
