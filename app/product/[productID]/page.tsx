import axios from "axios";
import React from "react";
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

    return <div>Product {singleProd.price}</div>;
  } catch (err) {
    console.error(err);
  }
};

export default SingleProduct;
