import React from "react";
import styled from "styled-components";
import { GiCancel } from "react-icons/gi";

const Footer = ()=>{
    return(
<Container>
    <Wrapper>
        <Box1>
        <Logo>
            <img src="/images/Logo1.svg" alt="" />
          </Logo>
          <Location>
          <GiCancel fontSize="30px"/>
          <p>uerub rgriugr  ugrug ruuaabrub riuuire uarugaure auru</p>
          </Location>
          <Tel>
          <GiCancel fontSize="30px"  />
           <p>+234-040-494-53</p>
          </Tel>
          <Mail>
          <GiCancel fontSize="30px"  />
         <p>Manel@gmail.com</p>
          </Mail>
        </Box1>
        <Box2>
<p>About us</p>
<p>What we do</p>
<p>FAQ</p>
        </Box2>
        <Box3>
        <p>Career</p>
        <p>Blog</p>
        <p>Contact us</p>

        </Box3>
<Box4>
<GiCancel fontSize="35px"  />
<GiCancel fontSize="35px"  />
<GiCancel fontSize="35px"  />

</Box4>
    </Wrapper>
</Container>

    )
}
export default Footer
const Container = styled.div`
width:100%;
height: 370px;
background-color: #00252E;
display:flex;
justify-content:center;
align-items:center;
`
const Wrapper = styled.div`
width: 85%;
height: 230px;
/* background-color: #bbbb; */
display: flex;
justify-content: space-around;
align-items: center;
/* border-radius:7px; */
`

const Box1 = styled.div`
height: 160px;
width: 300px;
/* background-color:grey; */
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: space-between;
`
const Box2 = styled.div`
color:white;

`
const Box3 = styled.div`
color:white;
`
const Box4 = styled.div``
const Logo = styled.div`
width: 300px;

  img {
    width: 130px;
  }
`
const Mail = styled.div`
width: 180px;
height: 25px;
p{
    color:white;
}

// background-color: orange;
display: flex;
justify-content: space-between;
align-items: center;
`
const Tel = styled.div`
width: 170px;
/* color:white; */
p{
    /* width: 250px; */
    color:white;
}
height: 25px;

// background-color: pink;

display: flex;
justify-content: space-between;
align-items: center;`
const Location = styled.div`
width: 300px;

height: 45px;

// background-color: red;
display: flex;
justify-content: space-between;
align-items: center;
p{
    width: 250px;
    color:white;
}
`