
import React from "react"
import styled from "styled-components"
import Header from "../Header/Header"
const Tryfree =()=>{
    return (
        
<>
<Header/>
<Container>
<Wrapper>
    <Search> <input id="input-task" type="text" placeholder="Input UserName....."/></Search>
    <Text><input id="input-task" type="text" placeholder="EmailorPhonenumber....."/></Text>
    <Button>Tryfree</Button>
    </Wrapper>
    </Container>
</>
    )
}
export default Tryfree

const Container = styled.div`
width: 100%;
height: 610px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;

`
const Wrapper = styled.div`
@media (max-width:500px){
    width: 53%;
}
width: 25%;
height: 400px;
/* background-color: blue; */
border-radius: 6px;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
display: flex;
flex-direction: column;
/* justify-content: space-around; */
align-items: center;
`

const Search = styled.div`
margin-top: 90px;

input[type="text"]{
    width: 75%;
    padding: 15px;
    border-radius: 30px;
    margin: 2.5%;
    border: none;
    outline: none;
    outline: none;
    box-shadow: 0px 1px 5px #a3a3a3;
}
`
const Text = styled.div`
margin-top: 30px;

input[type="text"]{
    width: 75%;
    padding: 15px;
    border-radius: 30px;
    margin: 2.5%;
    border: none;
    outline: none;
    box-shadow: 0px 1px 5px #a3a3a3;
}
`
const Button = styled.button`
width: 100px;
height: 40px;
background-color: hotpink;
color: white;
margin-top: 30px;
border: none;
outline: none;
border-radius: 7px;

`