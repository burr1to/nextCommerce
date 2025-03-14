"use client";

import Image from "next/image";
import axios from "axios";

import { useEffect, useState } from "react";
import { Card } from "@/components";
import { CardProps } from "@/types";

export default function Home() {
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
      <div className='flex flex-cols gap-7'>
        {data.map((item) => (
          <Card data={item} />
        ))}
      </div>
    </div>
  );
}
