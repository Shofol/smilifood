import { ReactNode } from "react";
import Button from "../components/layout/Button";

export const faqsData: FAQ[] = [
  {
    heading: "1. Comment veux tu trouver une phrase si tu reflechis pas ?",
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
    heading: "2. Ici question numéro deux ?",
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
    heading: "3. une phrase si tu reflechis pas ?",
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

export interface FAQ {
  heading: string;
  content: ReactNode;
  last?: boolean;
}
