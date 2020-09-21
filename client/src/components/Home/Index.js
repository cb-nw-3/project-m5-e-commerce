import React from "react";
import styled from "styled-components/macro";
import Footer from "../Footer/footer";
import CategoryBar from "../CategoryBar";
import Carousel from "./Carousel";

const categories = [
  "lifestyle",
  "fitness",
  "medical",
  "entertainment",
  "industrial",
  "pets and animals",
]; // this is a test category array

const Home = () => {
  return (
    <>
      Home
      <CategoryBar categories={categories} />
      <Carousel />
    </>
  );
};

export default Home;
