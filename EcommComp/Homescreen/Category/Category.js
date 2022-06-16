import React from "react";
import styled from "styled-components";
const Category = () => {
  return (
    <Container>
      <Wrapper>
        <Catbutton>Collections</Catbutton>
        <Catnav>
          <span>Shoes</span>
          <span> Women Collections</span>
          <span>MenCollections </span>
          <span>Kids Collections</span>
          <span>Jewelleries</span>
        </Catnav>
      </Wrapper>
    </Container>
  );
};

export default Category;
const Catnav = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    margin: 0 10px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
  }
`;
const Catbutton = styled.button`
  @media (max-width: 800px) {
    display: none;
  }
  border: 0;
  outline: none;
  background-color: darkorange;
  padding: 8px 10px;
  font-weight: bold;
  font-size: 15px;
  font-family: poppins;
  color: white;
  border-radius: 3px;
  cursor: pointer;
`;
const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  padding: 0 80px;
  /* background-color: rebeccapurple; */

  margin: 10px 0;
  @media (max-width: 1200px) {
    width: 90%;
  }
`;
const Container = styled.div`
  width: 100%;
  min-width: 100vw;
  min-height: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eeee;
  color: black;
`;
