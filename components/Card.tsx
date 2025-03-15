import React from "react";
import { CardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

interface CardPropsData {
  data: CardProps;
}

const Card = ({ data }: CardPropsData) => {
  const { id, title, category, price, rating, description, image } = data;
  return (
    <section className='flex flex-col items-center border border-gray-400 rounded-[30px] p-6'>
      <div className='flex flex-col items-center justify-center relative'>
        <h2 className='overflow-hidden h-16 text-center '>{title}</h2>
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className='object-contain h-[300px] p-5'
        />
        <p className='absolute text-xl border border-blue-400 rounded-lg px-4 py-1 bg-blue-400 text-white mt-[200px] ml-[100px]'>
          ${price}
        </p>
      </div>

      <div className='flex justify-center w-full py-5'>
        <Link href='/product/[id]' as={`/product/${id}`}>
          <Button title='View Product' />
        </Link>
      </div>
    </section>
  );
};

export default Card;
