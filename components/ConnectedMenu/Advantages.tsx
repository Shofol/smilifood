"use client";

import { ReactNode, useRef } from "react";
import { advantagessData } from "../../data/advantages";

const Advantages = () => {
  return (
    <div className="bg-br-mgreen py-24">
      <div className="max-w-7xl mx-5 lg:mx-10 xl:mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 px-5 lg:px-0">
          <div className="lg:col-span-2 text-br-dark text-center lg:text-right">
            <h3 className="text-3xl font-bold">
              All the advantages of a<br className="hidden lg:block" />
              connected menu
            </h3>
            <p className="pt-4">
              Give your restaurant all the benefits of a digital menu with ease.
              With your account, easily create your products, drinks and menus,
              and update them in real time for an optimal ordering experience.
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
  image: ReactNode;
  content: string;
  index: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  const handleFillPosition = (event: any) => {
    if (fillRef.current && containerRef.current) {
      fillRef.current.style.left = `${
        event.clientX - containerRef.current.getBoundingClientRect().left
      }px`;
      fillRef.current.style.top = `${
        event.clientY - containerRef.current.getBoundingClientRect().top
      }px`;
    }
  };
  return (
    <div
      ref={containerRef}
      className="bg-white shadow-md rounded-md text-br-dark px-5 py-10 relative overflow-hidden cardContainer"
      onMouseMove={(e) => {
        handleFillPosition(e);
      }}
    >
      {image}
      <h4 className="text-2xl pt-5 font-bold z-10 relative">{title}</h4>
      <p className="pt-4 z-10 relative">{content}</p>
      <span ref={fillRef} className="fillElement"></span>
    </div>
  );
};

export default Advantages;
