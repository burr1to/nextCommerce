import React from "react";
import { useEffect } from "react";
const SingleProduct = async ({
  params,
}: {
  params: Promise<{ productID: string }>;
}) => {
  const productID = (await params).productID;
  return <div>Product {productID}</div>;
};

export default SingleProduct;
