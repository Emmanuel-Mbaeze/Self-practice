import React from 'react'
import styled from 'styled-components'
import {ImCheckboxUnchecked} from 'react-icons/im'
import {TiArrowRight} from 'react-icons/ti'
import {FcGoogle} from 'react-icons/fc'
const SIgnup = () => {
  return (
 <Container>
        <Left>
     <Blur>

</Blur>
     </Left>
     <Right>
        <Form>
            <Title>Sign Up</Title>
            <Inputs>
            <Inputholder>
            <Label>Email address</Label>
            <Input placeholder="input email" type="email"/>
            
            </Inputholder>
            <Inputholder>
            <Label>Password</Label>
            <Input placeholder="input password" type="password"/>
            
            </Inputholder>
            </Inputs>
            <Checkbox>
                <Check><ImCheckboxUnchecked/></Check>
                <span>Show password</span>
            </Checkbox>
            <Buttons>
                <Button>
                    Sign Up <span>
                        <TiArrowRight fontSize="30px"/>
                    </span>
                </Button>
                <Or>
                    <Orline></Orline>
                    <span>OR</span>
                </Or>
                <Googlebutton>
                    <span>
                        <FcGoogle  fontSize="21px"/>
                        Continue with google
                    </span>
                </Googlebutton>
            </Buttons>
        </Form>
     </Right>
  
 </Container>
  )
}

export default SIgnup
const Buttons = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items:center;
margin-top: 30px;
`
const Button = styled.div`
width: 93%;
height: 45px;
display: flex;
align-items:center;
justify-content: center;
background-color: yellow;
border-radius: 6px;
color: white;
margin-right: 35px;
cursor: pointer;
span{
    display: flex;
    align-items: center;
    margin-left: 5px;
}
`
const Or = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content:center;
flex-direction: column;
margin-top: 30px;
height: 23px;
position: relative;
span{
    position: absolute;
    top: 0;
    background-color: white;
    padding: 0 14px;
}
`
const Orline = styled.div`
opacity: 0.5;
width: 70%;
height: 2px;
background-color: black;
`
const Googlebutton = styled.div`
margin-top: 30px;
width: 100%;
height: 55px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
color: yellow;
border:  1px solid yellow;
cursor: pointer;

span{
    display: flex;
    align-items: center;
    margin-right:6px;
}
`
const Title = styled.div`
font-size: 40px;
font-weight: 500;
`
const Inputholder = styled.div`
margin-bottom: 20px;
`
const Input = styled.input`
/* padding: 8px 40px; */
:focus{
    outline:1px solid yellow ;
}
box-shadow: 0 0 3px rgba(0,0,0,0.3);
width: 90%;
height: 45px;
border-radius: 5px;
padding: 0 5px;
border: none;
outline: none;
font-size: 17px;
margin-top: 10px;
`
const Label = styled.div`
font-weight: 700;
font-size: 18px;
`

const Inputs = styled.div`
margin-top: 40px;
`
const Check = styled.div`
`
const Checkbox = styled.div`
display: flex;
align-items: center;
span{
    margin-left: 10px;
}
`
const Container = styled.div`
width: 100%;
display: flex;
`
const Form = styled.div`
width: 70%;
height: 80%;
/* background-color: red; */

`
const Right = styled.div`
@media (max-width: 768px){
flex: 1;
    
}
flex: 0.5;
height: 100vh;
/* background-color: royalblue; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Left = styled.div`
@media (max-width: 768px){
    display: none;
}
flex: 0.5;
height: 100vh;
border-bottom-right-radius:20px;
background-image: url("/images/5.jpg");
background-position: center;
background-size: cover;
background-repeat:no-repeat;
display: flex;
justify-content: center;
align-items: center;
/* background-color: rebeccapurple; */
border-top-right-radius: 20px;
`
const Blur = styled.div`
width: 70%;
height: 80%;
background: rgba(0,0,0,0.4);
backdrop-filter: blur(15px);
border-radius: 10px;
`
