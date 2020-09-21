import React from "react";
import SwiperCore, { Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import lifestyle1 from "../../images/lifestyle1";
import lifestyle2 from "../../images/lifestyle2";
import lifestyle3 from "../../images/lifestyle3";
import lifestyle4 from "../../images/lifestyle4";

const imageArray = [lifestyle1, lifestyle2, lifestyle3, lifestyle4];

// install Swiper components
SwiperCore.use([Pagination, Scrollbar, A11y]);

const Carousel = () => {
  return (
    <SwiperContainer>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {imageArray.map((image) => {
          return (
            <SwiperSlide>
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
  height: 200px;
  display: flex;
  width: calc(100vw - 60px);
  background: red;
  cursor: pointer;
`;

const Image = styled.img`
  object-fit: cover;
`;
