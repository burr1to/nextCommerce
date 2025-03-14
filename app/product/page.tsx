"use client";
import axios from "axios";

import { useEffect, useState } from "react";
import { Card } from "@/components";
import { CardProps } from "@/types";

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
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className='relative'>
      <div className='flex justify-center items-center flex-wrap mx-auto max-w-[1440px] gap-7'>
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
