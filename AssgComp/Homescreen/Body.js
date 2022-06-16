import React from "react";
import styled from "styled-components";
const Body = () => {
  return (
    <Container>
      <Top>
        <Left>
          get to know <br />
          our <span>works</span>
        </Left>
        <Right>
          must have an alt prop, either with meaningful text, or an empty string
          for decorative images jsx-a11y/alt-text webpack 5.70.0 compiled with 1
          warning in 2314 ms
        </Right>
      </Top>
      <Bottom>
        <Bleft>
          <Image>
            <img src="/images/Marble.jpg" />
          </Image>
          <Text>
            <Tleft>
              <Title>Minimalist books</Title>
              <Subtitile>70 Workspace</Subtitile>
            </Tleft>
            <Tright>
              <Seemore>Seemore</Seemore>
              <Navs>
                <Line></Line>
                <Lines></Lines>
              </Navs>
            </Tright>
          </Text>
        </Bleft>
        <Bleft>
          <Image>
            <img src="/images/Hotel.jpg" />
          </Image>
          <Text>
            <Tleft>
              <Title>Minimalist books</Title>
              <Subtitile>70 Workspace</Subtitile>
            </Tleft>
            <Tright>
              <Seemore>Seemore</Seemore>
              <Navs>
                <Line></Line>
                <Lines></Lines>
              </Navs>
            </Tright>
          </Text>
        </Bleft>
      </Bottom>
    </Container>
  );
};

export default Body;
// const Line = styled.div``
const Lines = styled.div``;
const Line = styled.div``;
const Navs = styled.div``;
const Seemore = styled.div``;
const Tright = styled.div``;
const Subtitile = styled.div`
  font-size: 12px;
`;
const Title = styled.div``;
const Tleft = styled.div``;
const Text = styled.div`
  width: 100%;
  height: 50px;
  /* background-color: pink; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: bold;
`;
const Image = styled.div`
  img {
    width: 317px;
    height: 160px;
    object-fit: cover;
  }
`;
const Bleft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 33%;
  height: 200px;
  /* background-color: yellow; */
`;
const Right = styled.div`
  color: white;
  font-weight: 300;
  font-size: 11px;
  // width: 35px;
  width: 27%;
  // background-color: green;
`;
const Left = styled.div`
  text-transform: capitalize;
  font-size: 26px;
  font-weight: bold;
  color: white;

  span {
    color: orange;
  }
`;
const Top = styled.div`
  width: 80%;
  height: 90px;
  // background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Bottom = styled.div`
  width: 80%;
  height: 200px;
  /* background-color: blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: darkgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
`;
