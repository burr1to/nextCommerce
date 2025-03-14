import React from "react";
import { CardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface CardProps2 {
  data: CardProps;
}

const Card = ({ data }: CardProps2) => {
  const { id, title, category, price, rating, description, image } = data;
  return (
    <section className='flex flex-col p-6 justify-center items-center text-black hover:bg-white hover:shadow-lg rounded-3xl border w-[400px] h-auto'>
      <Link href='/product/[id]' as={`/product/${id}`}>
        <div className='w-full flex justify-between gap-2'>
          <h2 className='text-[22px] mx-auto text-center'>{title}</h2>
        </div>
        <div className='relative w-full h-40 my-3 object-contain flex justify-center'>
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            className='object-contain'
          />
        </div>
        <p className='capitalize'>{category}</p>
      </Link>
    </section>
  );
};

export default Card;
