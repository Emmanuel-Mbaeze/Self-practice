import React from "react";
import styled from "styled-components";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { AiFillApple } from "react-icons/ai";
const Hero = () => {
  return (
    <Container>
      <Left>
        <Hold>
          <Head>
            When we build,
            <br />
            let's think that <br />
            we <span> build forever</span>
          </Head>
          <Text>
            Appropriately faster efficient ideas after to go forward <br />
            alignment monotonactly
          </Text>
          <Buttons>
            <Button1>
              <Bicon>
                <IoLogoGooglePlaystore />
              </Bicon>
              <Btext>
                <span>Get from</span>
                <br />
                Google Playstore
              </Btext>
            </Button1>
            <Button1>
              <Bicon>
                <AiFillApple />
              </Bicon>
              <Btext>
                <span>Download from</span>
                <br />
                Apple store
              </Btext>
            </Button1>
          </Buttons>
        </Hold>
      </Left>
      <Right>
        <Holder>
          <Image src="/images/Marble.jpg" />
        </Holder>
        <Over>
          <Oimage src="/images/Ngo.jpg" />
          <Otext>
            <Top>Top</Top>
            <Bottom>Bottom</Bottom>
          </Otext>
        </Over>
        <Circleover></Circleover>
      </Right>
    </Container>
  );
};

export default Hero;
// const Container = styled.div``
const Circleover = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  background-color: orangered;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  position: absolute;
  left: 645px;
  top: 200px;
`;
const Top = styled.div`
  font-weight: bold;
  font-size: 14px;
`;
const Bottom = styled.div`
  font-weight: bold;
  font-size: 14px;
`;
const Otext = styled.div`
  width: 160px;
  height: 60px;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;
const Oimage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 100%;
`;
const Over = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  right: 40px;
  bottom: 160px;
  /* color: green; */
  width: 250px;
  height: 80px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;
const Image = styled.img`
  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Holder = styled.div`
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    border-radius: 100%;
  }
  position: relative;
  width: 500px;
  height: 500px;
  border-radius: 100%;
  background-color: red;
  overflow: hidden;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
`;
const Right = styled.div`
  flex: 0.4;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;
const Btext = styled.div`
  @media (max-width: 768px) {
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;

    span {
      font-size: 8px;
    }
  }
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;

  span {
    font-size: 11px;
  }
`;
const Bicon = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  font-size: 30px;
  display: flex;
  align-items: center;
`;
const Button1 = styled.div`
  @media (max-width: 768px) {
    padding: 10px 10px;
    margin: 10px;
  }
  display: flex;
  align-items: center;
  background-color: var(--Btcolor);
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  margin-right: 20px;
  cursor: pointer;
`;
const Hold = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /* background-color: rebeccapurple; */
`;
const Buttons = styled.div`
  display: flex;
  margin-top: 30px;
`;
const Head = styled.div`
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    font-size: 35px;
    // background-color: aliceblue;
  }
  font-weight: bold;
  font-size: 50px;
  text-transform: capitalize;
  span {
    color: orangered;
  }
`;
const Text = styled.div`
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
  margin-top: 25px;
  font: bold;
  font-style: 13px;
  opacity: 0.5;
`;
const Left = styled.div`
  @media (max-width: 768px) {
    // background-color: blue;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  flex: 0.4;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  min-height: 91vh;
  background-color: var(--bColor);
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    margin-top: -3px;
  }
`;
