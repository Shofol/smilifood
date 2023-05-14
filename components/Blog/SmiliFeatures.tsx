import React from "react";

const SmiliFeatures = () => {
  return (
    <div className="pt-5 lg:pt-24 max-w-7xl mx-auto">
      <h2 className="text-4xl lg:text-5xl font-bold text-br-dark text-center">
        Augmentez vos commandes en ligne avec Smili
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:my-20 my-10 px-5 lg:px-0">
        <div className="bg-br-light p-12 shadow-md rounded-lg">
          <h3 className="text-br-ylw-light text-2xl font-bold pb-5">
            Une visibilité digitale
          </h3>
          <p className="text-br-ldark">
            Les clients peuvent passer leur commande depuis n'importe où en
            consultant votre menu en ligne
          </p>
        </div>
        <div className="bg-br-secondary p-12 shadow-md rounded-lg">
          <h3 className="text-br-ylw-medium text-2xl font-bold pb-5">
            Facilitation prise de commmande
          </h3>
          <p className="text-br-ldark">
            Ne perdez plus de temp à prendre vos commandes via télephonne !
            Smili permet à vos clients de commander en toute autonomie.
          </p>
        </div>
        <div className="bg-br-primary p-12 shadow-md rounded-lg">
          <h3 className="text-br-ylw-dark text-2xl font-bold pb-5">
            Augmentation du panier moyen
          </h3>
          <p className="text-br-ldark">
            Le logicilel Smili food permet aux restaurateurs avec sa carte
            connecté de voir son panier moyen augmenter jusqu’à 30%
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmiliFeatures;
