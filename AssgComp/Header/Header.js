import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";
const Header = () => {
  return (
    <Container>
      <Logo>
        <img src="/images/logo.svg" />
      </Logo>
      <Navhold>
        <Nav>Home</Nav>
        <Navs>Services</Navs>
        <Navs>Testimonies</Navs>
        <Navs>Contact</Navs>
      </Navhold>
      <Icons>
        <AiOutlineMenu />
      </Icons>
    </Container>
  );
};

export default Header;
// const Navs = styled.div``
const Icons = styled.div`
  font-size: 25px;
`;
const Navs = styled.div`
  margin-right: 40px;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
`;
const Logo = styled.div`
  img {
    width: 120px;
  }
`;
const Navhold = styled.div`
  display: flex;
  align-items: center;
`;
const Nav = styled.div`
  margin-right: 40px;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
  padding: 2px 0;
  border-bottom: 2px solid orangered;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 6px 0;
  background-color: white;
  border-bottom: 1.5px solid grey;
`;
