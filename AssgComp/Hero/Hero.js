import React from "react";
import styled from "styled-components";
const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Left src="/images/blue.jpg" />

        <Right>
          <Text>
            <Title>
              Make your <br />
              <span>interior</span> looks <br /> great
            </Title>
            <Sub>
              either with meaningful text, or an empty string for decorative
              images jsx-a11y/alt-text Line 38:13: img elements must have an alt
              prop, either with meaningful text,
            </Sub>
          </Text>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Hero;
// const Container = styled.div``
const Sub = styled.div``;
const Title = styled.div`
  font-weight: bold;
  font-size: 19px;
  span {
    color: orangered;
  }
`;
const Text = styled.div``;
const Left = styled.img`
  background-color: aquamarine;

  width: 48%;
  height: 450px;

  object-fit: cover;
`;
const Right = styled.div`
  width: 48%;
  height: 450px;
  /* background-color: blueviolet; */
`;
const Wrapper = styled.div`
  width: 83%;
  height: 450px;
  /* background-color: green; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
