"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Testimonial, testimonials } from "../../data/testimonialsData";

const Testimonials = () => {
  return (
    <div className="w-full bg-br-bg py-24 my-10 px-5 lg:px-0 lg:my-24">
      <div className=" flex flex-col">
        <div className="max-w-7xl mx-auto w-full text-br-dark lg:pl-10">
          <h3 className="text-left text-4xl">
            Découvrez les avis de nos cleints
          </h3>
          <p className="text-xl mt-2 border-l-4 border-l-br-primary pl-2">
            Essayer Smili food c’est l’adopter!
          </p>
        </div>
        <div className="lg:ml-20">
          <Swiper
            // slidesPerView={2.8}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
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
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
