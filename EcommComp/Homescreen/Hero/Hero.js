import React from "react";
import styled from "styled-components";
const Hero = ({ bg }) => {
  return (
    <Container>
      <Wrapper>
        <Herone>
          <Heronehold>
            <img />
            <Onetexthold>
              <h5>Zara</h5>
              <p>Female</p>
            </Onetexthold>
          </Heronehold>
        </Herone>
        <Herotwo>
          <Texthold>
            <Title>SUNGLASS COLLECTION</Title>
            <Subtitle>MANEL</Subtitle>
          </Texthold>
          <Imgdiv>
            <img />
          </Imgdiv>
        </Herotwo>
        <Herothree>
          <Subdiv bg>
            <img />
            <span>Trendy Collections</span>
          </Subdiv>
          <Subdiv>
            <img />
            <span>Watch Collections</span>
          </Subdiv>
        </Herothree>
      </Wrapper>
    </Container>
  );
};

export default Hero;
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
const Heronehold = styled.div``;
const Imgdiv = styled.div``;
const Subdiv = styled.div`
  height: 145px;
  width: 260px;
  background-color: ${({ bg }) => (bg ? "skyblue" : "antiquewhite")};
`;
const Herothree = styled.div`
  width: 310px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  /* background-color: darkgoldenrod; */
`;
const Subtitle = styled.div`
  margin-bottom: 20px;
  font-weight: 300;
  font-size: 11px;
  color: darkr;
`;
const Title = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 19px;
  line-height: 1.2;
  width: 170px;
`;
const Texthold = styled.div`
  flex-direction: column;
  justify-content: flex-end;
  display: flex;
`;
const Herotwo = styled.div`
  flex: 1;
  background-color: antiquewhite;
  margin: 0 10px;
  display: flex;
`;
const Onetexthold = styled.div``;
const Herone = styled.div`
  width: 250px;
  background-color: blueviolet;
`;
const Wrapper = styled.div`
  /* background-color: aqua; */
  display: flex;
  width: 1250px;
  height: 100%;
`;
const Container = styled.div`
  margin-top: 20px;
  height: 70vh;
  width: 100%;
  /* background-color: darkcyan; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
