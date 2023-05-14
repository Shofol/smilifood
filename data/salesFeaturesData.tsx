import { ReactNode } from "react";
import Button from "../components/layout/Button";

export const salesFeaturesData: SalesFeature[] = [
  {
    heading: "Augmentez vos ventes.",
    content: (
      <>
        <p className="mb-4">
          Faites le choix du click & collect pour offrir à vos clients une
          expérience de commande en ligne rapide et pratique, tout en augmentant
          vos ventes.
        </p>
        <div className="flex justify-start">
          <Button
            title="Essayer"
            type="primary"
            actionType="link"
            className="shadow-md py-1"
          />
        </div>
      </>
    ),
  },
  {
    heading: "Moins de temps à gérer, plus de temps à cuisiner.",
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
    heading: "Des outils simples à utiliser.",
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
    heading: "Simplifiez vous la vie.",
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

export interface SalesFeature {
  heading: string;
  content: ReactNode;
  last?: boolean;
}
