import axios from "axios";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
const SingleProduct = async ({
  params,
}: {
  params: Promise<{ productID: string }>;
}) => {
  const productID = (await params).productID;
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productID}`
    );
    const singleProd = response.data;
    console.log(singleProd);
    return (
      <div className='flex flex-col items-center justify-center relative gap-y-4 p-4'>
        <h2>{singleProd.title}</h2>
        <p className='capitalize underline'>{singleProd.category}</p>
        <div className=''>
          <Image
            src={singleProd.image}
            alt='Product'
            width={200}
            height={200}
          />
        </div>
        <div className='flex justify-center max-w-[400px]'>
          <p className='text-center'>{singleProd.description}</p>
        </div>
        <div className='text-center'>
          <p className='text-xl border border-blue-400 rounded-lg px-4 py-1 bg-blue-400 text-white'>
            ${singleProd.price}
          </p>

          <p className='m-4'>Rating : {singleProd.rating.rate}</p>
        </div>
      </div>
    );
  } catch (err) {
    console.error(err);
  }
};

export default SingleProduct;
