import React from "react"
import styled from "styled-components";
import Card from "./Card";

const Propcard =()=>{
    return(
<Container>
<Wrapper>
<h3>GET STARTED</h3>
<button>Try for free</button>
</Wrapper>
</Container>
    )
}
export default Propcard
const Container = styled.div`
width: 100%;

display: flex;
justify-content: space-around;
align-items: center;
margin-top: -420px;
@media (max-width:500px){
/* width: 39%; */
margin-top: -390px;


}
`
const Wrapper = styled.div`
  button {
    font-family: "Sen", sans-serif;
    font-weight: bold;
    font-size: 13px;
    padding: 8px 18px;
    background-color: hotpink;
    border-radius: 8px;
    outline: none;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    cursor: pointer;
  }
/* width:100%; */
height: 150px;
background-color: white;
width: 25%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: rgba(99, 99, 99, 0.2) 0px 0px 18px 4px;
border-radius: 10px;
@media (max-width:500px){
width: 41%;

}
`