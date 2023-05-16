"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { advantagessData } from "../../data/advantages";

const Advantages = () => {
  return (
    <div className="bg-br-mgreen py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 px-5 lg:px-0">
          <div className="lg:col-span-2 text-br-dark text-center lg:text-right">
            <h3 className="text-4xl font-bold">
              Tous les avantages d&apos;un <br className="hidden lg:block" />{" "}
              menu connecté
            </h3>
            <p className="pt-4">
              Offrez à votre restaurant tous les avantages d&apos;une carte
              numérique en toute simplicité. Avec votre compte, créez facilement
              vos produits, boissons et menus, et mettez-les à jour en temps
              réel pour une expérience de commande optimale.
            </p>
          </div>
          {advantagessData.map((adv, index) => {
            return (
              <Card
                key={adv.title}
                title={adv.title}
                content={adv.content}
                image={adv.image}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Card = ({
  title,
  image,
  content,
  index,
}: {
  title: string;
  image: string;
  content: string;
  index: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  const handleFillPosition = (event: any) => {
    if (fillRef.current && containerRef.current) {
      fillRef.current.style.left = `${
        event.pageX - containerRef.current.getBoundingClientRect().left
      }px`;
      console.log(containerRef.current.getBoundingClientRect().top);
      fillRef.current.style.top = `${
        event.pageY - containerRef.current.getBoundingClientRect().top
      }px`;
    }
  };
  return (
    <div
      ref={containerRef}
      className="bg-white shadow-md rounded-md text-br-dark px-5 py-10 relative cardContainer"
      onMouseMove={(e) => {
        handleFillPosition(e);
      }}
    >
      <Image src={image} width={80} height={80} alt={title} />
      <h4 className="text-2xl pt-5 font-bold">{title}</h4>
      <p className="pt-4">{content}</p>
      <span ref={fillRef} className="fillElement"></span>
    </div>
  );
};

export default Advantages;
