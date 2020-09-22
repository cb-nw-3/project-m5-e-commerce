import React from "react";
import SwiperCore, { Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

import lifestyle1 from "../../images/lifestyle1.jpg";
import lifestyle2 from "../../images/lifestyle2.jpg";
import lifestyle3 from "../../images/lifestyle3.jpg";
import lifestyle4 from "../../images/lifestyle4.jpg";
const imageArray = [lifestyle1, lifestyle2, lifestyle3, lifestyle4];

// install Swiper components
SwiperCore.use([Pagination, Scrollbar, A11y]);

const Carousel = () => {
  return (
    <SwiperContainer>
      <Swiper slidesPerView={1} pagination={{ clickable: true }}>
        {imageArray.map((image) => {
          return (
            <SwiperSlide
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image src={image} />
            </SwiperSlide>
          );
        })}
        ...
      </Swiper>
    </SwiperContainer>
  );
};

export default Carousel;

const SwiperContainer = styled.div`
  margin: 0 auto;
  position: relative;
  height: 300px;
  display: flex;
  width: calc(100vw - 60px);
  cursor: pointer;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;
