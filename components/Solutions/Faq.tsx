import React from "react";
import { FAQ, faqsData } from "../../data/faqs";
import { Disclosure, Transition } from "@headlessui/react";
import Button from "../layout/Button";

const Faq = () => {
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
    <div>
      <div className="flex-1 flex flex-col justify-center px-5 lg:px-0 max-w-5xl mx-auto pb-24">
        <h3 className="text-4xl text-br-dark font-semibold border-l-4 border-l-br-primary pl-5">
          Les questions anticipé | Smili Menu connecté
        </h3>
        <div className="mt-10 ">
          {faqsData.map((benefit: FAQ) => {
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

export default Faq;
