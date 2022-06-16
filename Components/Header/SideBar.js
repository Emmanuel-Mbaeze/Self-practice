import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    
    <Container>
      
        <Span  to="/"> Home</Span>
            <Span to="/Discover"> Discover </Span>
            <Span  to="/Community">Community</Span>
            <Span  to="/Services">Services</Span>
            <Button  to="/Tryfree">Try it Free</Button>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  width: 30%;
  height: 30vh;
  background-color: darkred;
  margin-left:425px;
  margin-top: -14px;
  display:flex;
  flex-direction: column;
  justify-content:space-around;
  align-items:center;
  @media (max-width:500px){
  margin-left:325px;

  }
`;
const Span = styled(Link)`
text-decoration: none;
    font-weight: 600;
    transition: all 350ms;
    color:white;

    :hover {
      color: #747474;
      cursor: pointer;
      transform: scale(1.1);
    }
`
const Button =styled(Link)`
text-decoration: none;
  font-family: "Sen", sans-serif;
  font-weight: bold;
  font-size: 13px;
  padding: 8px 18px;
  background-color: #fff;
  border-radius: 8px;
  color:black;
  outline: none;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
`
