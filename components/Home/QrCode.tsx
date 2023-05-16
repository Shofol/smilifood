"use client";

import Image from "next/image";
import React from "react";
import Button from "../layout/Button";
import { usePathname } from "next/navigation";

const QrCode = () => {
  const isHome = usePathname() === "/";
  return (
    <div className="flex flex-col mb-24 pt-24">
      <div className="flex flex-col lg:flex-row px-5 lg:px-0 justify-between items-center max-w-7xl mx-auto lg:gap-20">
        <div className="text-br-dark text-center lg:text-left">
          <h3 className="text-3xl font-bold">
            Un exemple de carte connecté, <br className="hidden lg:block" />
            scan le Code QR !
          </h3>
          <p className="text-xl mt-4">
            Saviez vous qu’une carte connecté peut augmenter{" "}
            <br className="hidden lg:block" />
            le panier moyen de vos consommateurs{" "}
            <br className="hidden lg:block" />
            jusqu’à 30% ?{" "}
          </p>
        </div>
        <div>
          <Image src={"/qrcode.png"} width={320} height={320} alt="qr code" />
        </div>
      </div>
      <div className="flex justify-center items-center my-4">
        <Button
          title={isHome ? "Nous conctacter" : "Essayer Smili Menu connecté"}
          type={isHome ? "primary" : "secondary"}
          actionType="link"
          className={"shadow-md px-8 "}
        />
      </div>
    </div>
  );
};

export default QrCode;
