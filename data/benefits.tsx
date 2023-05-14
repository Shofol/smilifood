import { ReactNode } from "react";
import Button from "../components/layout/Button";

export const benefitsData: Benefit[] = [
  {
    heading: "Créez votre carte connecté et diffusez la à partir de code QR",
    content: (
      <>
        <p className="mb-4">
          Depuis votre dashboard vous pouvez alimenter votre carte en temp réel
          ! Vous pouvez mettre des allergènes, photos, déclinaisons... Le + la
          carte se modifie en direct sur le smartphone de vos clients.
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
    heading: "Economisez du temps",
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
    heading: "Améliorez l’expérience client",
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

export interface Benefit {
  heading: string;
  content: ReactNode;
  last?: boolean;
}
