"use client";

import Image from "next/image";
import axios from "axios";

import { useEffect, useState } from "react";
import { Card } from "@/components";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
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
      <Card />
    </div>
  );
}
