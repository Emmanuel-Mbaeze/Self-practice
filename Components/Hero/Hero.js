import  React from "react"
import styled from "styled-components"
import Header from "../Header/Header"
const Hero = ()=>{
    return(
<Heroholder>
    <Header/>
    <Container>
        <Wrapper>
            <Text>
                <h1>Build a community your fans will love</h1>
                <p>Huddle re-imagines the way we build communities.You have a voice and so does your audience.Create connection with your users as you engage in genuie conversation</p>
                <button>Get Started For Free</button>
            </Text>
            <Image>
                <img src="/images/illustration-mockups.svg"/>
            </Image>
        </Wrapper>
    </Container>

</Heroholder>
    )
}
export default Hero

const Heroholder = styled.div`
width: 100%;
height: 100%;
min-height: 90vh;
background-image: url("/images/bg-hero-desktop.svg");
background-color: lightblue;
margin-bottom: 90px;
`
const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
width: 85%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
@media (max-width:800px){
    justify-content:center;
}
`
const Text = styled.div`
width: 400px;
font-family: "poppins",sans-serif;
h1{
    width: 350px;
    @media(max-width:500px){
      text-align: center;
      
  }
}
p{
    font-size: 13px;
    font-weight: 450;
    @media(max-width:500px){
      text-align: center;
      
  }
}
button {
    font-family: "poppins", sans-serif;
    font-weight: 500;
    font-size: 13px;
    padding: 8px 18px;
    background-color:hotpink;
    color: white;
    border-radius: 8px;
    outline: none;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    cursor: pointer;
    @media(max-width:500px){
     margin-left: 100px;
      
  }
  }
  @media(max-width:400px){
      text-align: center;
  }
  @media(max-width:800px){
      margin-bottom: 20px;
      button{
        font-size: 12px;
    /* padding: 8px 18px; */
      }
  }
`
const Image = styled.div`
img{
width: 600px;
}
@media(max-width:800px){
    margin-bottom: 20px;
    img{
width: 400px;
} 
}
`
// const Heroholder = styled.div``
// const Heroholder = styled.div``