import React from "react";
import Button from "../layout/Button";

const Discover = () => {
  return (
    <div className="bg-br-gray py-24 text-br-dark text-center">
      <h3 className="text-4xl font-bold">Découvrez Smili Menu connecté +</h3>
      <p className="pt-2">
        Stop la perde de temp au nieveau de la prise de commande ! laissez voq
        clients commander depuis la carte connecté ;
      </p>
      <div className="flex justify-center items-center mt-4">
        <Button
          title="Découvrir"
          type="dark"
          actionType="link"
          className="px-12"
        />
      </div>
    </div>
  );
};

export default Discover;
