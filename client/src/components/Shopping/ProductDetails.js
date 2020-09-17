import React from "react";
import { useParams } from "react-router-dom";

// goal is to display details of a specific product
// information : the id of the product(from params)
// we will fetch the data from the server

// useStatet to stroe the info of the product
// useEffect to get data about the product
// use params to get the id from the url

const ProductDetails = () => {
  const { itemId } = useParams();
  console.log(itemId);

  return <div>Product</div>;
};

export default ProductDetails;
