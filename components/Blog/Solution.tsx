import Image from "next/image";
import React from "react";

const Solution = () => {
  return (
    <div className="bg-br-bg">
      <div className="max-w-7xl mx-auto py-24 text-br-dark">
        <h2 className="text-4xl font-bold mb-10">
          Profitez de notre solution numérique optimisée pour un parcours
          digital fluide et efficace, tant pour vos clients que pour votre
          restaurant.
        </h2>
        <div className="flex items-center gap-48 mt-24">
          <p className="text-xl flex-1 items-center">
            Améliorez votre expérience client en proposant une solution de
            commande en ligne intuitive et efficace. Avec notre solution, vos
            clients peuvent commander facilement depuis leur téléphone ou leur
            ordinateur, sans attendre au téléphone ou en personne. Vous pouvez
            personnaliser votre menu en fonction de vos préférences, de l'heure
            de la journée et des événements spéciaux. Notre solution vous permet
            également de mieux connaître vos clients en recueillant des
            informations importantes telles que leurs préférences alimentaires
            et leurs coordonnées.
          </p>
          <div className="flex-1">
            <div className="solution">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
