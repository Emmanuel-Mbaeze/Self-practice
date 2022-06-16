import React from "react"
import styled from "styled-components"
import Header from "../Header/Header"
const Community =()=>{
    return(
<>
<Header/>
<Container>
            <Wrapper>
                <Text>
<h1>Community </h1>
<p>Huddle re-imagines the way we build communities.You have a voice and so does your audience.Create connection with your users as you engage in genuie conversation</p>
                </Text>
                <Image>
                    <img src="/images/4.png"/>
                </Image>
            </Wrapper>
        </Container>
</>
    )
}
export default Community
const Container = styled.div`
width: 100%;
display: flex;
justify-content:center;
align-items: center;
margin-bottom: 90px;
/* background-color: pink; */

`
const Wrapper = styled.div`

width: 85%;
height: 500px;
/* background-color: red; */
display: flex;
justify-content: space-around;
align-items: center;
box-shadow: rgba(99, 99, 99, 0.2) 0px 0px 18px 4px;
border-radius: 10px;
flex-wrap: wrap;
margin-top: 70px;

@media (max-width:500px){
    display: flex;
    justify-content: center;
    /* background-color: green; */
flex-direction: column-reverse;
/* flex-direction: ${({swap})=>swap}; */


}
`
const Text = styled.div`
width: 430px;

   

@media (max-width:500px){
width: 310px;
    
}
h1{
    @media (max-width:500px){
width: 310px;
text-align: center;
    
}
p{
    font-size: 16px;
    column-rule: #aaa;
    line-height: 1.5;
    @media (max-width:500px){
width: 270px;
text-align: center;
    
}
}
}
`
const Image = styled.div`
img{
    width: 450px;
}
@media (max-width:500px){
img{
width: 350px;

} 
}
`