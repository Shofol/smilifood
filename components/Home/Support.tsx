"use client";

import Button from "../layout/Button";
import Image from "next/image";
import { motion } from "framer-motion";

const Support = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row py-20 max-w-7xl px-5 lg:px-10 xl:px-0 mx-auto">
      <div className="flex-1 px-5 lg:px-0">
        <h3 className="lg:text-3xl font-bold text-br-dark border-l-br-primary border-l-4 pl-6">
          Superior support
        </h3>
        <p className="text-lg pt-4 pl-8 text-br-dark">
          Our customers trust our reliability every day!
        </p>
        <div className="flex my-10">
          <div className="grid grid-cols-3">
            <div className="flex flex-col p-5 items-center">
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.75 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-white bg-br-primary w-20 h-20 rounded-full flex justify-center items-center"
              >
                24/7
              </motion.p>
              <p className="text-br-dark text-center pt-2 leading-tight">
                Listening to <br />
                your needs
              </p>
            </div>
            <div className="flex flex-col p-5 items-center">
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.75 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-white bg-br-primary w-20 h-20 rounded-full flex justify-center items-center text-center"
              >
                96%
              </motion.p>
              <p className="text-br-dark text-center pt-2 leading-tight">
                Our <br />
                satisfied customers
              </p>
            </div>
            <div className="flex flex-col p-5 items-center">
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.75 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-white bg-br-primary w-20 h-20 rounded-full flex justify-center items-center text-center leading-none"
              >
                15
                <br /> min
              </motion.p>
              <p className="text-br-dark text-center pt-2 leading-tight">
                Average <br /> response time
              </p>
            </div>
          </div>
        </div>

        <p className="text-xl text-br-dark text-center lg:text-left lg:pl-8 mt-4">
          Do you have any questions?
        </p>
        <div className="flex justify-center lg:justify-start lg:ml-8 my-2">
          <Button
            title="Contact Us"
            type="primary"
            actionType="link"
            className="py-1"
          />
        </div>
      </div>

      <div className="flex justify-start items-end pt-10 pb-0 lg:py-0">
        <Image
          src={"/supportArt.svg"}
          alt="support art"
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};

export default Support;
