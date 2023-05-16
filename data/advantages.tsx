import { ReactNode } from "react";
import Button from "../components/layout/Button";

export const advantagessData: Advantage[] = [
  {
    title: "Facile d’utilisation",
    content:
      "La création de votre carte est simple et intuitive, quelques minutes suffiront!",
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 90">
        <path d="M70 90V74H54v-8h15V50h8v16h17v8H78v16h-8z" fill="#3B3E3A" />
        <path
          d="M20 70h25v8H19c-3-1-6-4-7-6L2 36c-1-4 0-6 5-6h14c2 0 4-2 5-3L40 6c5-6 7-6 11 0l13 21c2 2 4 3 7 3h11c7 0 8 1 7 8l-2 4h-7v-4H11l9 32zm14-40h23L46 13 34 30z"
          fill="#3B3E3A"
        />
      </svg>
    ),
  },
  {
    title: "Photos & Description",
    content:
      "Pour chaque plat pour pouvez rajouter une photo, une description & des déclinaisons.",
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 90">
        <path d="M70 90V74H54v-8h15V50h8v16h17v8H78v16h-8z" fill="#3B3E3A" />
        <path
          d="M20 70h25v8H19c-3-1-6-4-7-6L2 36c-1-4 0-6 5-6h14c2 0 4-2 5-3L40 6c5-6 7-6 11 0l13 21c2 2 4 3 7 3h11c7 0 8 1 7 8l-2 4h-7v-4H11l9 32zm14-40h23L46 13 34 30z"
          fill="#3B3E3A"
        />
      </svg>
    ),
  },
  {
    title: "Modifiable en Temps Réel",
    content:
      "Actualisez vos plats du jours ainsi que la disponibilité de vos plats en temps réel.",
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 90">
        <path d="M70 90V74H54v-8h15V50h8v16h17v8H78v16h-8z" fill="#3B3E3A" />
        <path
          d="M20 70h25v8H19c-3-1-6-4-7-6L2 36c-1-4 0-6 5-6h14c2 0 4-2 5-3L40 6c5-6 7-6 11 0l13 21c2 2 4 3 7 3h11c7 0 8 1 7 8l-2 4h-7v-4H11l9 32zm14-40h23L46 13 34 30z"
          fill="#3B3E3A"
        />
      </svg>
    ),
  },
  {
    title: "Allergènes & Restrictions",
    content:
      "Indiquez les allergènes de vos plats ainsi que leur particularités (bio, vegan, fait-maison,...).",
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 89">
        <path
          fill="#3B3E3A"
          d="M56 22h11c12 1 20 9 21 21 2 23-22 47-45 45-7 0-12-3-17-8l-3-3C9 71 3 60 1 46c-2-13 1-25 9-35C21-4 38-3 49 11l7 11zM45 84c18 0 37-18 39-35 2-16-7-25-23-23-17 2-35 21-35 39 0 12 7 19 19 19zm7-60-5-9C36 0 22 0 12 15a42 42 0 0 0 1 50l9 8c-2-24 10-39 30-49z"
        />
        <path
          fill="#3B3E3A"
          d="M34 75c1-10 5-15 12-19l13-4c7-3 14-7 15-15l2-3 2 3c-2 4-2 8-5 11l-16 9-10 3c-5 3-8 7-9 13l-2 5-2-3zM21 23l5-13 3-2v4c-4 7-4 15 0 22v4l-3-2-5-13z"
        />
        <path
          fill="#3B3E3A"
          d="M26 10s-11 7 0 26c0 0 5 4 3-2s-6-23 0-22c0 0 3-6-3-2z"
        />
      </svg>
    ),
  },
  {
    title: "Une carte à votre image",
    content:
      "Vous avez la possibilité de créer votre carte entièrement à vos gouts !",
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 90">
        <path d="M70 90V74H54v-8h15V50h8v16h17v8H78v16h-8z" fill="#3B3E3A" />
        <path
          d="M20 70h25v8H19c-3-1-6-4-7-6L2 36c-1-4 0-6 5-6h14c2 0 4-2 5-3L40 6c5-6 7-6 11 0l13 21c2 2 4 3 7 3h11c7 0 8 1 7 8l-2 4h-7v-4H11l9 32zm14-40h23L46 13 34 30z"
          fill="#3B3E3A"
        />
      </svg>
    ),
  },
  {
    title: "Augmentation panier moyen",
    content:
      "La carte digitale augmentera en moyenne de 15 à 30% votre panier moyen !",
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 90">
        <path d="M70 90V74H54v-8h15V50h8v16h17v8H78v16h-8z" fill="#3B3E3A" />
        <path
          d="M20 70h25v8H19c-3-1-6-4-7-6L2 36c-1-4 0-6 5-6h14c2 0 4-2 5-3L40 6c5-6 7-6 11 0l13 21c2 2 4 3 7 3h11c7 0 8 1 7 8l-2 4h-7v-4H11l9 32zm14-40h23L46 13 34 30z"
          fill="#3B3E3A"
        />
      </svg>
    ),
  },
];

export interface Advantage {
  title: string;
  content: string;
  image: ReactNode;
}
