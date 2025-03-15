"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "@/components";
import { CardProps } from "@/types";

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

export default function Product() {
  const [data, setData] = useState<CardProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<CardProps[]>(
          "https://fakestoreapi.com/products"
        );

        setData(response.data);
      } catch (error) {
        setData(dummy);
      }
    };

    fetchData();
  }, []);

  console.log(data);

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
