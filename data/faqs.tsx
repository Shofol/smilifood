import { ReactNode } from "react";
import Button from "../components/layout/Button";

export const faqsData: FAQ[] = [
  {
    heading:
      "1. How do you expect to find a sentence if you don't think about it?",
    content: (
      <>
        <p className="mb-4">
          Create your menu online in a few clicks, and share it on your tables
          with QR codes. Modify it in real time!!
        </p>
        <div className="flex justify-start">
          <Button
            title="Découvrir"
            type="primary"
            actionType="link"
            className="shadow-md py-1"
          />
        </div>
      </>
    ),
  },
  {
    heading: "2. Here Question No 2 ?",
    content: (
      <>
        <p className="mb-4">
          Create your menu online in a few clicks, and share it on your tables
          with QR codes. Modify it in real time!!
        </p>
        <div className="flex justify-start">
          <Button
            title="Découvrir"
            type="primary"
            actionType="link"
            className="shadow-md py-1"
          />
        </div>
      </>
    ),
  },
  {
    heading: "3. Any more questions ?",
    content: (
      <>
        <p className="mb-4">
          Create your menu online in a few clicks, and share it on your tables
          with QR codes. Modify it in real time!!
        </p>
        <div className="flex justify-start">
          <Button
            title="Découvrir"
            type="primary"
            actionType="link"
            className="shadow-md py-1"
          />
        </div>
      </>
    ),
    last: true,
  },
];

export interface FAQ {
  heading: string;
  content: ReactNode;
  last?: boolean;
}
