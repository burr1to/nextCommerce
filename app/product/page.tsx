// "use client";
import axios from "axios";
import { useEffect, useState, Suspense } from "react";
import { Card } from "@/components";
import { CardProps } from "@/types";
import Loading from "./loading";

const dummy = [
  {
    id: 1,
    title: "Googly",
    category: "Dummy",
    price: 100,
    rating: 5,
    description: "Googly",
    image: "/logo.png",
  },
];

async function getProducts() {
  const response = await axios.get<CardProps[]>(
    "https://fakestoreapi.com/products"
  );
  return response.data;
}

export default async function Product() {
  const data = await getProducts();
  // const [data, setData] = useState<CardProps[]>([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await new Promise((resolve) => setTimeout(resolve, 2000));
  //       const response = await axios.get<CardProps[]>(
  //         "https://fakestoreapi.com/products"
  //       );

  //       setData(response.data);
  //     } catch (error) {
  //       setData(dummy);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className='relative '>
      <h1 className='flex justify-center'>Product List</h1>
      <div className='grid lg:grid-cols-3 grid-cols-1 mt-10 mx-auto max-w-[1440px] gap-x-4 gap-y-10'>
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
