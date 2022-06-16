import React from "react";
import styled from "styled-components";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
const Signup = () => {
  return (
    <Container>
      <Wrapper>
        <Form>
          <Title>Sign Up</Title>
          <Inputs>
            <Inputholder>
              <Label>Username</Label>
              <Input placeholder="input Username" type="text" />
            </Inputholder>
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
            <Button>Sign Up</Button>
            <GOOglesignup>
              <FcGoogle fontSize="21px" />

              <span>SignUp with Google</span>
            </GOOglesignup>
            <Applesignup>
              <AiFillApple fontSize="21px" />

              <span>SignUp with Apple</span>
            </Applesignup>
          </Buttons>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Signup;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("/images/gradient.jpg");
  background-position: center;
  background-size: cover;
  /* background-color: royalblue; */
`;
const Form = styled.div`
  @media (max-width: 768px) {
    flex: 1;
  }
  width: 70%;
  min-height: 95%;
  opacity: 0.8;
  background-color: white;
  border-radius: 7px;
  padding: 20px 32px;
  background-image: url("/images/Linear.jpg");
  background-position: center;
  background-size: cover;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  min-height: 100vh;
  /* background-color: red; */
`;
const Buttons = styled.div`
  width: 100%;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* background-color: red; */
  align-items: center;
  margin-top: 30px;
`;
const Button = styled.div`
  background-color: royalblue;
  padding: 8px 20px;
  border-radius: 7px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  :hover {
    transform: scale(1.09);
    background-color: white;
    border: 2px solid royalblue;
    color: black;
    font-size: 20px;
    font-weight: 600;
  }
`;
const GOOglesignup = styled.div`
  @media (max-width: 768px) {
    margin-right: 5px;
  }
  :hover {
    transform: scale(1.04);
    background-color: royalblue;
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
  border: 1px solid royalblue;
  width: 90%;
  height: 55px;
  padding: 0 5px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  margin-right: 35px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
`;
const Inputs = styled.div`
  margin-top: 30px;
`;
const Inputholder = styled.div`
  margin-bottom: 20px;
`;
const Label = styled.div`
  font-weight: 700;
`;
const Input = styled.input`
  :focus {
    outline: 1px solid royalblue;
  }
  font-size: 17px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  padding: 0 5px;
  width: 90%;
  height: 45px;
  border: 1px solid royalblue;
  outline: none;
  border-radius: 6px;
  margin-top: 7px;
`;
const Applesignup = styled.div`
  @media (max-width: 768px) {
    margin-right: 5px;
  }
  :hover {
    transform: scale(1.04);
    background-color: #0b1116;
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
  border: 1px solid #0b1116;
  width: 90%;
  height: 55px;
  padding: 0 5px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  margin-right: 35px;
`;
