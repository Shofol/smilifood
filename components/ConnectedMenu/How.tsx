"use client";

import Image from "next/image";

const How = () => {
  return (
    <div className="pt-5 lg:pt-24 max-w-7xl mx-auto px-5 lg:px-10 xl:px-0">
      <h2 className="text-3xl font-bold text-br-dark text-center">
        How does it work?
      </h2>
      <p className="text-br-dark text-center text-xl">
        Nothing could be simpler...
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:my-20 my-10 px-5 lg:px-0">
        <div className="bg-br-primary  p-12 shadow-md rounded-lg flex flex-col items-center">
          <Image
            src={"/qrIcon.svg"}
            width={100}
            height={100}
            alt={"Rien de plus simple"}
          />

          <h3 className="text-center text-br-lgreen-2 text-2xl font-bold py-5">
            The customer scans your QR code
          </h3>
        </div>
        <div className="bg-br-mgreen p-12 shadow-md rounded-lg flex flex-col items-center">
          <Image
            src={"/menuIcon.svg"}
            width={100}
            height={100}
            alt={"Le client scanne votre code QR"}
          />

          <h3 className="text-center text-br-mgreen-2 text-2xl font-bold py-5">
            He checks your card on his phone
          </h3>
        </div>
        <div className="bg-br-dgreen p-12 shadow-md rounded-lg flex flex-col items-center">
          <Image
            src={"/chefIcon.svg"}
            width={100}
            height={100}
            alt={"Il consulte votre carte depuis son téléphone"}
          />

          <h3 className="text-center text-br-mgreen text-2xl font-bold py-5">
            The order is taken by the server
          </h3>
        </div>
      </div>
    </div>
  );
};

export default How;
