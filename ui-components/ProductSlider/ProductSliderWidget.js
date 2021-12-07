import React from "react";
import { ProductSliderComp } from "./ProductSliderComp";
import { carouselData } from "./mock";
import styled from "styled-components";

export function ProductSliderWidget() {
  return (
    <div className="mt-8">
      <SliderTitle>Beliebtesten Produkte</SliderTitle>
      <Carousel>
        <ProductSliderComp carouselData={carouselData} />
      </Carousel>
    </div>
  );
}

const SliderTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  color: "gray";
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 1.4rem;
`;
const Carousel = styled.div`
  .slick-dots {
    bottom: -0.7vw;
    li {
      button {
        width: 20px;
        height: 20px;
        border: 0.6px solid "white";
        border-radius: 30px;
        &:before {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 10px;
          height: 10px;
          border-radius: 30px;
          content: "";
          text-align: center;
          opacity: 1;
          color: "primary";
          background-color: none;
          transform: translate(-50%, -50%);
          transition: all 0.3s ease-in-out;
        }
      }
      &.slick-active,
      &:hover {
        button {
          border-color: "primary";
          &:before {
            background-color: "primary";
            opacity: 1;
          }
        }
      }
    }
  }
  .slick-prev,
  .slick-next {
    width: 50px;
    height: 50px;
    background-color: none;
  }
  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    color: "white";
    outline: none;
    background: none;
  }
  .slick-prev:before,
  .slick-next:before {
    color: "primary";
  }
`;
