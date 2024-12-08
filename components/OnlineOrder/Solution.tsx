"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Solution = () => {
  return (
    <div className="bg-br-mgreen">
      <div className="max-w-7xl mx-5 lg:mx-10 xl:mx-auto py-24 text-br-dark px-5 lg:px-0">
        <h2 className="text-3xl text-center font-bold mb-10">
          Take advantage of our optimized digital solution for a smooth and
          efficient digital journey, <br className="hidden xl:block" />
          both for your customers and for your restaurant.
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:gap-48 mt-10 lg:mt-20">
          <p className="text-xl flex-1 lg:items-center">
            Improve your customer experience by offering an intuitive and
            efficient online ordering solution. With our solution, your
            customers can easily order from their phone or computer, without
            waiting on the phone or in person. You can customize your menu based
            on your preferences, time of day, and special events. Our solution
            also allows you to better understand your customers by collecting
            important information such as their dietary preferences and contact
            information.
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
