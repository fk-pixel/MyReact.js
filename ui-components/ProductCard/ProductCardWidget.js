import React from "react";
import { LineChart } from "./LineChart";
import styled from "styled-components";
import { ChevronRight } from "react-bootstrap-icons";


export function ProductCardWidget() {
  return (
    <Flex>
      <FlipperContainer>
        <CardContainer>
          <HeadImgContainer>
            <h6 className="ml-2 p-1 text-white">
              Most Populär
              <ChevronRight
                style={{
                  animation: "animateRight infinite 1.5s",
                  overflowX: "hidden",
                }}
                className="ml-40"
                color="white"
                size="2rem"
              />
            </h6>
          </HeadImgContainer>

          <AvatarContainer>
            <img
              src="https://lallahoriye.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg"
              alt="asdqwe"
            />
          </AvatarContainer>
          <div>
            <Title>Produkt Name</Title>
            <Subtitle>Zuletzt verkauft: 21.11.2021</Subtitle>
            <Cardh6 >
              Gesamtumsatz im letzten Monat
              <span className="ml-2 label label-inline font-weight-bolder label-light-danger font-size-h6">
                23
              </span>
            </Cardh6>
          </div>
          <LineChart />
        </CardContainer>
      </FlipperContainer>
    </Flex>
  );
}

const Flex = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 10px;
`;
const FlipperContainer = styled.div`
  border-radius: 5px;
`;
const CardContainer = styled.div`
  width: 300px;
  height: 450px;
  background: #fff;
  border-radius: 5px;

`;
const HeadImgContainer = styled.div`
  background-color: #fff;
  height: 7%;
  margin: 0;
  border-radius: 5px;
  background: #ef476f; /* 9FB4C7 28587B 9FB798 EEEEFF e63946 f72585 */
  background-size: cover;
  @keyframes animateRight {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(0);
    }
    40% {
      transform: translateX(5px);
    }
    60% {
      transform: translateX(3px);
    }
  }
`;
const AvatarContainer = styled.div`
  width: 150px;
  height: 150px;
  z-index: 9;
  position: relative;
  top: 1rem;
  margin-bottom: 3rem;
  margin-left: 6rem;
  border: none;
  background: #000;
  background-size: cover;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  & img {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: auto 0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 50%;
  }
`;

const Title = styled.div`
  color: #555;
  font-weight: 100;
  outline: none;
  margin: 0px;
  display: inline-block;
  width: 100%;
  text-align: center;
  position: relative;
  top: -25px;
  font-family: Raleway, sans-serif;
  font-size: 1.7rem;
`;
const Cardh6 = styled(Title)`
  top: -25px;
  font-size: 1rem;
`;
const Subtitle = styled.div`
  position: relative;
  top: -25px;
  padding-bottom: 4.7rem;
  text-align: center;
  font-weight: 100;
  color: #888;
`;
