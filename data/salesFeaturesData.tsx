import { ReactNode } from "react";
import Button from "../components/layout/Button";

export const salesFeaturesData: SalesFeature[] = [
  {
    heading: "Increase your sales",
    content: (
      <>
        <p className="mb-4">
          Choose click & collect to offer your customers a fast and convenient
          online ordering experience, while increasing your sales.
        </p>
        <div className="flex justify-start">
          <Button
            title="Try Now"
            type="primary"
            actionType="link"
            className="shadow-md py-1"
          />
        </div>
      </>
    ),
  },
  {
    heading: "Less time managing, more time cooking",
    content: (
      <>
        <p className="mb-4">
          Create your menu online in a few clicks, and share it on your tables
          with QR codes. Modify it in real time!
        </p>
        <div className="flex justify-start">
          <Button
            title="Discover"
            type="primary"
            actionType="link"
            className="shadow-md py-1"
          />
        </div>
      </>
    ),
  },
  {
    heading: "Easy to use tools",
    content: (
      <>
        <p className="mb-4">
          Create your menu online in a few clicks, and share it on your tables
          with QR codes. Modify it in real time!
        </p>
        <div className="flex justify-start">
          <Button
            title="Discover"
            type="primary"
            actionType="link"
            className="shadow-md py-1"
          />
        </div>
      </>
    ),
  },
  {
    heading: "Make your life easier",
    content: (
      <>
        <p className="mb-4">
          Create your menu online in a few clicks, and share it on your tables
          with QR codes. Modify it in real time! !
        </p>
        <div className="flex justify-start">
          <Button
            title="Discover"
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

export interface SalesFeature {
  heading: string;
  content: ReactNode;
  last?: boolean;
}
