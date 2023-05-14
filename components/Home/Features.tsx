import React from "react";

const Features = () => {
  return (
    <div className="pt-5 lg:pt-24 max-w-7xl mx-auto">
      <h2 className="text-4xl lg:text-5xl font-bold text-br-dark text-center">
        Smili food un outil tout-en-un pour développer votre activité grâce à
        Internet
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:my-20 my-10 px-5 lg:px-0">
        <div className="bg-br-light p-12 shadow-md rounded-lg">
          <h3 className="text-br-ylw-light text-2xl font-bold pb-5">
            Gagnez des clients
          </h3>
          <p className="text-br-ldark">
            Convertissez les clients en ligne avec notre réservation en ligne et
            offrez une expérience de commande fluide sur place avec nos
            solutions.
          </p>
        </div>
        <div className="bg-br-secondary p-12 shadow-md rounded-lg">
          <h3 className="text-br-ylw-medium text-2xl font-bold pb-5">
            Gagnez du temp
          </h3>
          <p className="text-br-ldark">
            Simplifiez votre quotidien grâce à notre série de fonctionnalités
            conçues pour améliorer l&apos;expérience client et celle de votre
            équipe.
          </p>
        </div>
        <div className="bg-br-primary p-12 shadow-md rounded-lg">
          <h3 className="text-br-ylw-dark text-2xl font-bold pb-5">
            Augmentez votre CA
          </h3>
          <p className="text-br-ldark">
            Maximisez votre panier chiffre d’affaireen créant des parcours de
            commande optimisés avec Smili food.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
