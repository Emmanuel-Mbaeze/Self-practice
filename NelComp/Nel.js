import React from "react";
import styled from "styled-components";
const Hero1 = () => {
  return (
    <Container>
      <Header>
        <InnerHeader>
          <Logo>
            NGO
            <span style={{ color: "blue", fontWeight: 700 }}>.</span>
          </Logo>
          <NavHold>
            <Nav style={{ color: "blue" }}>Home</Nav>
            <Nav>Training</Nav>
            <Nav>Donate</Nav>
            <Nav>Event</Nav>
            <button>Register</button>
          </NavHold>
        </InnerHeader>
      </Header>
      <Wrapper>
        <Content>
          <Headline>
            <spam style={{ color: "blue" }}> Donate</spam> to fund someone's
            dreams
            <span
              style={{
                color: "blue",
                fontWeight: 800,
                fontSize: "50px",
              }}
            >
              .
            </span>{" "}
          </Headline>
          <Text>
            {" "}
            Donate to kids who have a dreams,kids who are willing to give in
            their very best. <br /> You'll get fitter and stronger
          </Text>
        </Content>
        <ImageHold>
          <img src="/images/Hotel.jpg" />
        </ImageHold>
      </Wrapper>
    </Container>
  );
};

export default Hero1;

const Container = styled.div`
  width: 100%;
  background-color: rgba(255, 248, 220, 0.5);
  height: 100%;
  min-height: 100vh;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;
const InnerHeader = styled.div`
  width: 90%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 23px;
`;
const NavHold = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: royalblue;
    border-radius: 5px;
    padding: 12px 20px;
    outline: none;
    border: 0;
    margin-left: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.35s ease-in;
    color: white;
    :hover {
      background-color: transparent;
      color: black;
      border: 1.5px solid royalblue;
    }
  }
  @media screen and (max-width: 1024px) {
  }
`;
const Nav = styled.div`
  font-weight: 500;
  cursor: pointer;
  margin: auto 15px;

  transition: all 0.35s ease-in;
  :hover {
    color: rgb(255, 182, 1);
  }

  @media screen and (max-width: 1024px) {
    margin: auto 10px;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
`;

const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  @media screen and (max-width: 425px) {
    width: 70%;
  }
`;
const Headline = styled.div`
  margin: 5px auto 20px;
  font-size: 50px;
  font-weight: 700;
  font-family: montserrat;
  width: 450px;
  text-align: center;
  @media screen and (max-width: 425px) {
    font-size: 30px;
    width: 100%;
    line-height: 25px;
  }
`;

const Text = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  @media screen and (max-width: 425px) {
    font-size: 15px;
    font-weight: 400;
  }
`;

const ImageHold = styled.div`
  width: 450px;
  height: 200px;
  /* background-color: red; */
  img {
    width: 100%;
    object-fit: contain;
  }
`;
