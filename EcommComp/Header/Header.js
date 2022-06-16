import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import {
  AiTwotoneSetting,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi";
const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src="/images/logo.svg" />
        </Logo>
        <Searchhold>
          <input placeholder="Make a search....." />
          <button>
            <Icon />
          </button>
        </Searchhold>
        <Othericons>
          <Icon1 />
          <Icon2 />
          <button>
            Accounts <BtnIcon />
          </button>
        </Othericons>
        <Sidebar>
          <BiMenuAltRight />
        </Sidebar>
      </Wrapper>
    </Container>
  );
};

export default Header;
// const Icon2 = styled.div``
const Sidebar = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 33px;
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
  }
  @media (max-width: 425px) {
    font-size: 30px;
    margin-bottom: 1px;
  }
`;
const BtnIcon = styled(MdAccountCircle)`
  margin-left: 5px;
`;
const Icon2 = styled(AiTwotoneSetting)`
  font-size: 21px;
  cursor: pointer;
`;
const Icon1 = styled(IoNotifications)`
  font-size: 21px;
  cursor: pointer;
`;
const Icon = styled(BiSearch)`
  font-size: 21px;
  cursor: pointer;
`;
const Othericons = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: yellowgreen; */
  button {
    cursor: pointer;

    border: 0;
    outline: none;
    height: 35px;
    width: 120px;
    border-radius: 500px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: white;
    background-color: darkorange;
  }
`;
const Searchhold = styled.div`
  width: 500px;
  display: flex;
  @media (max-width: 800px) {
    width: 250px;
  }
  @media (max-width: 425px) {
    width: 200px;
  }
  @media (max-width: 375px) {
    width: 130px;
    margin-right: 45px;
  }
  @media (max-width: 320px) {
    width: 3px;
    margin-right: 185px;
  }
  button {
    border: 0;
    outline: none;
    background-color: darkorange;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 3px;
    height: 30px;
    cursor: pointer;
    @media (max-width: 425px) {
      height: 25px;
    }
  }
  input {
    cursor: pointer;

    outline: none;
    font-family: poppins;
    border: none;
    flex: 1;
    background-color: antiquewhite;
  }
`;
const Logo = styled.div`
  img {
    width: 120px;
    @media (max-width: 425px) {
      width: 85px;
    }
    @media (max-width: 320px) {
      width: 60px;
    }
  }
`;
const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1200px) {
    width: 85%;
  }
  @media (max-width: 425px) {
    width: 93%;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 70px;
  /* background-color: rebeccapurple; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
