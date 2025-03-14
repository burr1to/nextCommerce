import React from "react";
import { CardProps } from "@/types";

interface CardProps2 {
  data: CardProps;
}
const Card = ({ data }: CardProps2) => {
  const { id, title, category, price, rating, description, image } = data;
  return (
    <section className='flex'>
      <div>{id}</div>
    </section>
  );
};

export default Card;
