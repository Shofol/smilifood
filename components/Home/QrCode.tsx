"use client";

import Image from "next/image";
import Button from "../layout/Button";
import { usePathname } from "next/navigation";

const QrCode = () => {
  const isHome = usePathname() === "/";
  return (
    <div className="flex flex-col mb-24 pt-24">
      <div className="flex flex-col lg:flex-row px-5 lg:px-0 justify-between items-center max-w-7xl mx-auto lg:gap-20">
        <div className="text-br-dark text-center lg:text-left">
          <h3 className="text-3xl font-bold">
            An example of a connected card,
            <br />
            scan the QR Code!
          </h3>
          <p className="text-xl mt-4">
            Did you know that a connected card can <br />
            increase your consumers average basket{" "}
            <br className="hidden lg:block" />
            by up to 30%?{" "}
          </p>
        </div>
        <div>
          <Image src={"/qrcode.png"} width={320} height={320} alt="qr code" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-16 mb-4">
        <Button
          title={isHome ? "Contact Us" : "Try FastFood"}
          type={isHome ? "primary" : "secondary"}
          actionType="link"
          className={"shadow-md px-8 "}
        />
      </div>
    </div>
  );
};

export default QrCode;
