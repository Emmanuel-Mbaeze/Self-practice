import React from "react";
import styled from "styled-components";
const Hero = ({ al }) => {
  return (
    <Container>
      <Wrapper>
        <Right al>
          <Top>
            <img src="/images/Marble.jpg" />
          </Top>
          <Bottom>
            <One>
              <img src="/images/Marble.jpg" />
            </One>
            <Two>
              <img src="/images/Hotel.jpg" />
            </Two>
            <Three>
              <img src="/images/gradient.jpg" />
            </Three>
          </Bottom>
        </Right>
        <Right>
          <Text>
            <Title>SNEAKER COMPANY</Title>
            <Subttile>
              The best selling <span>SNEAKER</span> in the whiole of africa
              SIgnUp' is defined but never used no-unused-vars Line 4:8: 'Hero'
              is defined but never used{" "}
            </Subttile>
            <Sub>
              {" "}
              buying a sneaker brings you freedom and we will help
              <br /> you find the best sneaker for you at a very great price
            </Sub>
          </Text>
          <Button>
            <button>Add To Cart</button>
          </Button>
          <Icon></Icon>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Hero;
// const Container = styled.div``
// const Container = styled.div``
const Sub = styled.div`
  font-size: 13px;
  font-weight: 300;
  span {
    color: blue;
    font-weight: 400;
  }
`;
const Subttile = styled.div`
  font-size: 13px;
  font-weight: 300;
  span {
    color: blue;
    font-weight: 400;
  }
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
const Button = styled.div`
  width: 300px;
  display: flex;

  button {
    padding: 16px 46px;
    flex: 1;
    font-size: 18px;
    font-weight: 500;
    border: none;
    outline: none;
    border-radius: 6px;
    background-color: blue;
    color: white;
  }
`;
const Text = styled.div`
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 30px;
`;
const Icon = styled.div``;
const Three = styled.div`
  width: 137px;
  height: 27vh;
  background-color: brown;
  img {
    width: 137px;
    height: 27vh;
    object-fit: cover;
  }
`;
const Two = styled.div`
  width: 137px;
  height: 27vh;
  background-color: gold;
  img {
    width: 137px;
    height: 27vh;
    object-fit: cover;
  }
`;
const One = styled.div`
  img {
    width: 137px;
    height: 27vh;
    object-fit: cover;
  }
  width: 137px;
  height: 27vh;
  background-color: black;
  opacity: 0.8;
`;
const Bottom = styled.div`
  width: 100%;
  height: 27vh;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Top = styled.div`
  img {
    width: 100%;
    height: 43vh;
  }
  width: 100%;
  height: 43vh;
  background-color: rebeccapurple;
`;
const Right = styled.div`
  width: 430px;
  height: 75vh;
  margin: 25px;
  display: flex;
  flex-direction: column;
  align-items: ${({ al }) => (al ? "center" : " flex-start")};
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 85%;
  min-height: 75vh;
  /* background-color: gainsboro; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
