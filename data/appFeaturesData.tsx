import { ReactNode } from "react";
import Button from "../components/layout/Button";

export const featuresData: Feature[] = [
  {
    heading: "Menu connecté.",
    content: (
      <>
        <p className="mb-4">
          Créez votre menu en ligne en quelques cliques, et partagez le sur vos
          tables avec de code QR. Modifiez le en temp réel !
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
    heading: "Commande en ligne.",
    content: (
      <>
        <p className="mb-4">
          Créez votre menu en ligne en quelques cliques, et partagez le sur vos
          tables avec de code QR. Modifiez le en temp réel !
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
    heading: "Réservation table en ligne.",
    content: (
      <>
        <p className="mb-4">
          Créez votre menu en ligne en quelques cliques, et partagez le sur vos
          tables avec de code QR. Modifiez le en temp réel !
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
    heading: "Carte connecté +.",
    content: (
      <>
        <p className="mb-4">
          Créez votre menu en ligne en quelques cliques, et partagez le sur vos
          tables avec de code QR. Modifiez le en temp réel !
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

export interface Feature {
  heading: string;
  content: ReactNode;
  last?: boolean;
}
