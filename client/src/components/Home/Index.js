import React from "react";
import CategoryBar from "../CategoryBar";

import Carousel from "./Carousel";

import ItemList from "./ItemList";

const categories = [
  "lifestyle",
  "fitness",
  "medical",
  "entertainment",
  "industrial",
  "pets and animals",
]; // this is a test category array

const Home = () => {
  const [category, SetCategory] = React.useState("lifestyle");

  return (
    <>
      <CategoryBar categories={categories} SetCategory={SetCategory} />
      <Carousel category={category} />
      <ItemList />
    </>
  );
};

export default Home;
