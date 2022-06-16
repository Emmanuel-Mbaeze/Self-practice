import React from "react";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";
const Signin = () => {
  return (
    <Container>
      <Wrapper>
        <Left></Left>
        <Right>
          <Form>
            <Title>Sign In</Title>
            <Inputs>
              <Inputholder>
                <Label>Email address</Label>
                <Input placeholder="input email" type="email" />
              </Inputholder>
              <Inputholder>
                <Label>Password</Label>
                <Input placeholder="input password" type="password" />
              </Inputholder>
            </Inputs>
            <Buttons>
              <Button>Sign In</Button>
            </Buttons>
          </Form>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Signin;
//#090909
const Line = styled.div`
  background-color: blue;
  width: 1px;
  height: 80vh;

  @media (max-width: 768px) {
    display: none;
  }
`;
const Right = styled.div`
  @media (max-width: 768px) {
    flex: 1;
  }
  flex: 0.5;
  min-height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: royalblue; */
`;
const Left = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  flex: 0.6;
  min-height: 90px;
  background-image: url("/images/C8.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
const Wrapper = styled.div`
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  width: 80%;
  min-height: 80vh;
  display: flex;
`;
const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: green; */
`;

const Form = styled.div`
  @media (max-width: 768px) {
    flex: 1;
  }
  width: 90%;
  min-height: 25%;
  opacity: 0.8;
  /* background-color: red; */
  border-radius: 7px;
  padding: 20px 32px;
`;
const Buttons = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* background-color: red; */
  align-items: center;
  margin-top: 20px;
`;
const Button = styled.div`
  /* background-color: royalblue; */
  background-color: blue;
  padding: 16px 26px;
  border-radius: 7px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  :hover {
    transform: scale(1.09);
    background-color: white;
    border: 1px solid blue;
    color: black;
    font-size: 20px;
    font-weight: 600;
  }
`;
const Applesignup = styled.div`
  @media (max-width: 768px) {
    margin-right: 5px;
  }
  :hover {
    transform: scale(1.04);
    background-color: blue;
    border: none;
    color: white;
    font-size: 20px;
    font-weight: 600;
  }
  span {
    margin-left: 10px;
  }
  font-size: 19px;
  cursor: pointer;
  background-color: white;
  border: 1px solid blue;
  width: 100%;
  height: 55px;
  padding: 0 5px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;
const GOOglesignup = styled.div`
  @media (max-width: 768px) {
    margin-right: 5px;
  }
  :hover {
    transform: scale(1.04);
    background-color: blue;
    border: none;
    color: white;
    font-size: 20px;
    font-weight: 600;
  }
  span {
    margin-left: 10px;
  }
  font-size: 19px;
  cursor: pointer;
  background-color: white;
  border: 1px solid blue;
  width: 100%;
  height: 55px;
  padding: 0 5px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: black;
`;
const Inputs = styled.div`
  margin-top: 30px;
`;
const Inputholder = styled.div`
  margin-bottom: 20px;
`;
const Label = styled.div`
  font-weight: 700;
  color: black;
`;
const Input = styled.input`
  :focus {
    outline: 0.1px solid royalblue;
  }
  font-size: 17px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  padding: 0 5px;
  width: 100%;
  height: 45px;
  border: 0.1px solid blue;
  outline: none;
  border-radius: 6px;
  margin-top: 7px;
`;
