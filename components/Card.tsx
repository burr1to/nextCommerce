import React from "react";
import { CardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface CardPropsData {
  data: CardProps;
}

const Card = ({ data }: CardPropsData) => {
  const { id, title, category, price, rating, description, image } = data;
  return (
    <section className='flex flex-col items-center border border-black p-2'>
      <div className=''>
        <h2>{title}</h2>
      </div>
      <div>
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className='object-contain'
        />
      </div>
      <div className='relative flex flex-col items-center'>
        <div className='absolute text-xl border border-blue-400 rounded-lg px-4 py-1 bg-blue-400 text-white'>
          ${price}
        </div>
        <p>{category}</p>
        <Link href='/product/[id]' as={`/product/${id}`}>
          Link
        </Link>
      </div>
    </section>
  );
};

export default Card;
