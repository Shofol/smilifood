"use client";

import Image from "next/image";
import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { Benefit, benefitsData } from "../../data/benefits";

const Benefits = () => {
  const ChevronUpIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  );

  const ChevronDownIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke="#FFCA7A"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl mx-auto my-10 lg:my-24">
      <div className="flex-1 h-96 lg:h-auto lg:min-h-screen py-10 lg:mr-20">
        <div className="relative h-full flex">
          <Image
            src={"/cooking.png"}
            fill
            style={{ objectFit: "cover" }}
            alt="woman cooking"
            className="rounded-tl-md rounded-tr-md rounded-br-md rounded-bl-3xl"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center px-5 lg:px-0">
        <h3 className="text-4xl text-br-dark font-semibold">
          Augmentez votre chiffre d’affaire tout en gagnant du temps
        </h3>
        {/* <p className="text-br-ldark pt-2">
          Offrez une expérience de commande exceptionnelle pour
          <br /> vous et vos clients.
        </p> */}
        <div className="mt-10 border-l-4 pl-5 lg:pl-10 lg:ml-5 border-l-br-primary">
          {benefitsData.map((benefit: Benefit) => {
            return (
              <Disclosure key={benefit.heading}>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={
                        "w-full flex justify-between py-4 text-left text-sm font-medium text-br-dark focus:outline-none focus-visible:ring focus-visible:ring-bg-br-ylw-medium focus-visible:ring-opacity-75 " +
                        (open || benefit.last
                          ? ""
                          : "border-b-2 border-b-br-lgreen")
                      }
                    >
                      <span
                        className={
                          "text-xl " +
                          (open ? "text-br-dark" : "text-br-lgreen")
                        }
                      >
                        {benefit.heading}
                      </span>
                      {open ? ChevronUpIcon : ChevronDownIcon}
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="py-4 text-sm text-gray-500 border-b-2 border-b-br-lgreen">
                        <div className="max-w-lg">{benefit.content}</div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
