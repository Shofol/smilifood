"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Solution = () => {
  return (
    <div className="bg-br-mgreen">
      <div className="max-w-7xl mx-auto py-24 text-br-dark px-5 lg:px-0">
        <h2 className="text-3xl text-center font-bold mb-10">
          Profitez de notre solution numérique optimisée pour un parcours
          digital fluide et efficace, tant pour vos clients que pour votre
          restaurant.
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:gap-48 mt-10 lg:mt-20">
          <p className="text-xl flex-1 lg:items-center">
            Améliorez votre expérience client en proposant une solution de
            commande en ligne intuitive et efficace. Avec notre solution, vos
            clients peuvent commander facilement depuis leur téléphone ou leur
            ordinateur, sans attendre au téléphone ou en personne. Vous pouvez
            personnaliser votre menu en fonction de vos préférences, de
            l&apos;heure de la journée et des événements spéciaux. Notre
            solution vous permet également de mieux connaître vos clients en
            recueillant des informations importantes telles que leurs
            préférences alimentaires et leurs coordonnées.
          </p>
          <div className="flex-1 w-full lg:w-auto mt-10 lg:mt-0">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="solution"
            >
              <Image
                src={"/cooking.png"}
                alt="solution"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "0 200px",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
