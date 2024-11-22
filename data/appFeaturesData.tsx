import { ReactNode } from "react";
import Button from "../components/layout/Button";

export const featuresData: Feature[] = [
  {
    heading: "Connected Menu",
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
    image: "/menu1.png",
  },
  {
    heading: "Order Online",
    content: (
      <>
        <p className="mb-4">
          Create your menu online in a few clicks, and share it on your tables
          with QR codes. Modify it in real time!
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
    image: "/menu2.png",
  },
  {
    heading: "Online Table Reservation",
    content: (
      <>
        <p className="mb-4">
          Create your menu online in a few clicks, and share it on your tables
          with QR codes. Modify it in real time!
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
    image: "/menu3.png",
  },
  {
    heading: "Connect Cards",
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
    image: "/menu4.png",
  },
];

export interface Feature {
  heading: string;
  content: ReactNode;
  image: string;
}
