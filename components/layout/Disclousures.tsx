import { Feature } from "@/data/appFeaturesData";
import { Benefit } from "@/data/benefits";
import { FAQ } from "@/data/faqs";
import { SalesFeature } from "@/data/salesFeaturesData";
import { Disclosure } from "@headlessui/react";
import React, { useRef } from "react";

const Disclousures = ({
  data,
}: {
  data: Feature[] | FAQ[] | SalesFeature[] | Benefit[];
}) => {
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
      stroke="#68B8BE"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );

  const refs: any = useRef([]);

  const handleClick = (index: number) => {
    console.log(refs);
    refs.current.map((ref: any, refIndex: number) => {
      if (refIndex !== index) {
        ref();
      }
    });
  };

  return (
    <>
      {data.map(
        (feature: Feature | FAQ | SalesFeature | Benefit, index: number) => {
          return (
            <Disclosure
              key={feature.heading}
              defaultOpen={index === 0 ? true : false}
            >
              {({ open, close }) => (
                <>
                  <Disclosure.Button
                    ref={(el) => (refs.current[index] = close)}
                    onClick={() => handleClick(index)}
                    className={
                      "w-full flex justify-between py-4 text-left text-sm font-medium text-br-dark focus:outline-none focus-visible:ring focus-visible:ring-bg-br-ylw-medium focus-visible:ring-opacity-75 "
                    }
                  >
                    <span
                      className={
                        "text-xl " + (open ? "text-br-dark" : "text-br-lgreen")
                      }
                    >
                      {feature.heading}
                    </span>
                    {open ? ChevronUpIcon : ChevronDownIcon}
                  </Disclosure.Button>
                  <Disclosure.Panel className="py-4 text-sm text-gray-500">
                    <div className="max-w-lg">{feature.content}</div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          );
        }
      )}
    </>
  );
};

export default Disclousures;
