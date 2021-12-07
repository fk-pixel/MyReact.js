import React from "react";
import Slider from "react-slick";
import { carouselData } from "./mock";
import styled from "styled-components";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SliderComp() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScrool: 1,
    cssEase: "linear",
  };

  return (
    <div>
      <Slider {...settings}>
        {carouselData.map((item) => (
          <Wrapper key={item.id}>
            <Card>
              <div className="card-img">
                <img src={item.imgUrl} alt={item.title} />
              </div>
              <BodyTitle className="body-title">
                <li>
                  <a href="https://www.google.com">{item.title}</a>
                </li>
              </BodyTitle>
              <Details className="details">
                <h3>
                  Monatlicher Verkauf:
                  <span className="sale"> {item.monthlysale} </span>
                </h3>
              </Details>
            </Card>
          </Wrapper>
        ))}
      </Slider>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0 10px;
  box-sizing: border-box;
  &:active,
  &:hover,
  &:focus {
    outline: none;
    border: none;
  }
`;
const Card = styled.div`
  width: 100%;
  height: 450px;
  border-radius: 0.42rem;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  .card-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: #fff;
    transition: 0.5s;
    img {
      margin-top: 20px;
      width: 100%;
      height: 70%;
      object-fit: contain;
    }
  }
  &:hover {
    img {
      opacity: 0.4;
      transition: 0.5s;
    }
    .card-img {
      transform: translateY(-80px);
      transition: all 0.9s;
      background: #fff;
    }
  }

  &:hover {
    .details {
      bottom: 0;
    }
  }
  &:hover {
    .body-title li a {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

const BodyTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;
  li {
    list-style: none;
    a {
      position: relative;
      display: block;
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: none;
      font-size: 23px;
      color: royalblue;
      font-weight: 300;
      margin: 0 6px;
      transition: 0.4s;
      transform: translateY(200px);
      opacity: 0.2;
    }
  }
`;
const Details = styled.div`
  position: absolute;
  bottom: 450px;
  left: 0;
  background: #fff;
  width: 100%;
  height: 100px;
  z-index: 1;
  padding: 10px;
  transition: 0.6s;
  h3 {
    margin: 15px 0;
    padding: 0;
    text-align: center;
    font-weight: 600;
    .sale {
      font-size: 16px;
      line-height: 2;
      color: #333;
      font-weight: 300;
      display: block;
    }
  }
`;
