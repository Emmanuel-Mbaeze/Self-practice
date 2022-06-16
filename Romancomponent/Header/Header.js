import React from "react";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = () => {
  return (
    <Container>
      <Logo>
        <img src="/images/logo.svg" />
      </Logo>
      <Navhold>
        <Nav>Home</Nav>
        <Nav>About</Nav>
        <Nav>Pricing</Nav>
        <Nav>How it works</Nav>
        <Nav>Portfolio</Nav>
        <Button>Contact US</Button>
      </Navhold>
      <Menu>
        <AiOutlineMenu
          fontSize="25px"
          id="menu"
          onClick={() => {
            document.getElementById("sidebar").style.width = "230px";
            document.getElementById("menu").style.display = "none";
            document.getElementById("close").style.display = "block";
          }}
        />
        <AiOutlineClose
          id="close"
          fontSize="25px"
          style={{
            display: "none",
          }}
          onClick={() => {
            document.getElementById("sidebar").style.width = "0";
            document.getElementById("menu").style.display = "block";
            document.getElementById("close").style.display = "none";
            document.getElementById("close").style.transition = "all 250ms";
          }}
        />
      </Menu>
      <Sidebar id="sidebar">
        <Hold>
          <Nav1>Home</Nav1>
          <Nav1>About</Nav1>
          <Nav1>Pricing</Nav1>
          <Nav1>How it works</Nav1>
          <Nav1>Portfolio</Nav1>
          <Button1>Contact US</Button1>
        </Hold>
        <Logo1>
          <img src="/images/logo.svg" />
        </Logo1>
      </Sidebar>
    </Container>
  );
};

export default Header;
// const Wrapper = styled.div``;
const Logo1 = styled.div`
  margin-bottom: 10px;
  img {
    width: 120px;
  }
`;
const Button1 = styled.button`
  margin-top: 30px;
  background-color: orangered;
  border: 0;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 14px;
  color: white;
`;
const Hold = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  /* background-color: red; */
`;
const Nav1 = styled.div`
  color: white;
  margin-top: 40px;
`;
const Sidebar = styled.div`
  z-index: 10;
  transition: all 950ms;
  overflow: hidden;
  width: 0;
  height: 100vh;
  /* background-color: rgba(0, 0, 0, 0.5); */
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Menu = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;
const Button = styled.button`
  background-color: orangered;
  border: 0;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 14px;
  color: white;
`;
const Nav = styled.div`
  margin-right: 40px;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
`;
const Navhold = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Logo = styled.div`
  img {
    width: 120px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: lavender; */
  background-color: var(--bColor);
  padding: 15px 0;
`;
