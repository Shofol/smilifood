"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Testimonial, testimonials } from "../../data/testimonialsData";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="w-full bg-br-mgreen py-24 my-10 px-5 lg:px-0 lg:my-24">
      <div className=" flex flex-col">
        <div className="max-w-7xl mx-auto w-full text-br-dark lg:pl-10">
          <h3 className="text-left text-3xl font-bold">
            Discover our customers opinions
          </h3>
          <p className="text-xl mt-2 border-l-4 border-l-br-primary pl-2">
            Try Fastfood and you will love it!
          </p>
        </div>
        <motion.div
          initial={{ translateX: 100 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="lg:ml-20"
        >
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2.8,
                spaceBetween: 50,
              },
            }}
          >
            {testimonials.map((testimonial: Testimonial) => {
              return (
                <SwiperSlide key={testimonial.name}>
                  <div className="relative bg-white px-5 py-10 rounded-lg shadow-lg mt-10 ml-20">
                    <div className="absolute w-20 h-20 bg-gray-400 -left-10 top-10 rounded-lg z-10">
                      <Image
                        src={testimonial.image}
                        alt={"/testimonial"}
                        fill
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="pl-10">
                      <p className="text-br-dark">{testimonial.content}</p>
                      <p className="mt-4 text-sm text-br-lgreen font-bold">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-br-lgreen">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
