import React from "react";
import styled from "styled-components";
const Card =({title,subtitle,swap,pictures})=>{
    return(
        <Container>
        <Wrapper swap={swap}>
            <Text>
                <h3>{title}</h3>
                <Subtitle>{subtitle}</Subtitle>
        
            </Text>
            <Image>
                <img src={pictures}/>
            </Image>
        </Wrapper>
    </Container>
    )
}
export default Card
const Container = styled.div`
width: 100%;
display: flex;
justify-content:center;
align-items: center;
margin-bottom: 30px;
/* background-color:red; */
`
const Wrapper = styled.div`
width: 85%;
display: flex;
justify-content: space-around;
align-items: center;
box-shadow: rgba(99, 99, 99, 0.2) 0px 0px 18px 4px;
border-radius: 10px;
flex-wrap: wrap;
flex-direction: ${({swap})=>swap};

@media (max-width:500px){
    display: flex;
    justify-content: center;
    /* background-color: green; */
flex-direction: column-reverse;


}
`
const Text = styled.div`
width: 430px;

   

@media (max-width:500px){
width: 310px;
    
}
h3{
    @media (max-width:500px){
width: 310px;
text-align: center;
    
}
}
`
const Subtitle = styled.div`
font-size: 16px;
    column-rule: #aaa;
    line-height: 1.5;
    @media (max-width:500px){
width: 310px;
text-align: center;
    
}
`
const Image = styled.div`
margin: 20px 0;
img{
    width: 450px;
}
@media (max-width:500px){
img{
width: 270px;

}    
}
`