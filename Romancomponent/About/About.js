import React from "react";
import styled from "styled-components";
const About = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>
            Our <span>18 Years</span> of achievements
          </Title>
          <Text>
            img elements must have an alt prop, either with meaningful text, or
            an empty string for decorative images jsx-a11y/alt-text
          </Text>
        </Left>

        <Center>
          <Top>
            <Up>40+</Up>
            <Down>Happy Clients</Down>
          </Top>
          <Bottpom>
            <Up>300</Up>
            <Down>Happy Clients</Down>
          </Bottpom>
        </Center>
        <Right>
          <Top>
            <Up>540+</Up>
            <Down>Projects Completed</Down>
          </Top>
          <Bottpom>
            <Up>25+</Up>
            <Down>Projects Completed</Down>
          </Bottpom>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default About;
// const Left = styled.div``
const Bottpom = styled.div`
  border-left: 3px solid orangered;
  /* background-color: green; */
  margin-top: 30px;
  padding: 0 10px;
`;
const Down = styled.div`
  font-weight: bold;
  font-size: 13px;
`;
const Up = styled.div`
  font-weight: bold;
  font-size: 20px;
`;
const Top = styled.div`
  @media (max-width: 768px) {
    margin-top: 25px;
  }
  border-left: 3px solid orangered;
  padding: 0 10px;

  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; */
  /* background-color: red; */
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  text-transform: capitalize;
  opacity: 0.8;
  span {
    color: orangered;
  }
`;
const Text = styled.div`
  font-weight: bold;
  margin-top: 6px;
  font-size: 13px;
  @media (max-width: 768px) {
  }
`;
const Left = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
  width: 30%;
  /* background-color: red; */
  min-height: 90px;
  margin: 10px;
`;
const Center = styled.div`
  width: 30%;
  min-height: 90px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  @media (max-width: 768px) {
    width: 190px;
    /* background-color: red; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }

  /* background-color: greenyellow; */
`;
const Right = styled.div`
  @media (max-width: 768px) {
    width: 190px;
    /* background-color: red; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
  //   background-color: rebeccapurple;
  width: 30%;
  min-height: 90px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;
  /* background-color: blue; */
`;
const Container = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 85%;
  min-height: 90px;
  /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
  @media (max-width: 768px) {
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
`;
