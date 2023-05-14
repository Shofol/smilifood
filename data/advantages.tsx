import { ReactNode } from "react";
import Button from "../components/layout/Button";

export const advantagessData: Advantage[] = [
  {
    title: "Facile d’utilisation",
    content:
      "La création de votre carte est simple et intuitive, quelques minutes suffiront!",
    image: "/icon.png",
  },
  {
    title: "Photos & Description",
    content:
      "Pour chaque plat pour pouvez rajouter une photo, une description & des déclinaisons.",
    image: "/icon.png",
  },
  {
    title: "Modifiable en Temps Réel",
    content:
      "Actualisez vos plats du jours ainsi que la disponibilité de vos plats en temps réel.",
    image: "/icon.png",
  },
  {
    title: "Allergènes & Restrictions",
    content:
      "Indiquez les allergènes de vos plats ainsi que leur particularités (bio, vegan, fait-maison,...).",
    image: "/icon.png",
  },
  {
    title: "Une carte à votre image",
    content:
      "Vous avez la possibilité de créer votre carte entièrement à vos gouts !",
    image: "/icon.png",
  },
  {
    title: "Augmentation panier moyen",
    content:
      "La carte digitale augmentera en moyenne de 15 à 30% votre panier moyen !",
    image: "/icon.png",
  },
];

export interface Advantage {
  title: string;
  content: string;
  image: string;
}
