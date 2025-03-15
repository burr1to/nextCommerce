import axios from "axios";
import React from "react";
import Image from "next/image";
function randomInt(count: number) {
  return Math.floor(Math.random() * count);
}
const SingleProduct = async ({
  params,
}: {
  params: Promise<{ productID: string }>;
}) => {
  const a = randomInt(5);

  if (a === 1) {
    throw new Error("Error due to randomInt being ONE");
  }
  const productID = (await params).productID;
  try {
    //test loader.tsx working properly or not
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productID}`
    );
    const singleProd = response.data;

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
          <p className='text-justify'>{singleProd.description}</p>
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
