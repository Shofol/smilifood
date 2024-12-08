import { ReactNode } from "react";
import Button from "../components/layout/Button";

export const benefitsData: Benefit[] = [
  {
    heading: "Create your connected card and distribute it from QR code",
    content: (
      <>
        <p className="mb-4">
          From your dashboard you can update your menu in real time! You can add
          allergens, photos, variations, etc. The + is that the menu can be
          modified live on your customers smartphones.
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
    heading: "Save Time",
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
    heading: "Improve the customer experience",
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
    last: true,
  },
];

export interface Benefit {
  heading: string;
  content: ReactNode;
  last?: boolean;
}
