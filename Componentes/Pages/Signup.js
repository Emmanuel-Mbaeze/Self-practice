import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import styled from 'styled-components'
const Signup = () => {
  return (
  <Container>
      <Wrapper>
      <Left>

</Left>
          <Right>
<Form>
  <Title>Sign Up</Title>
  <Inputs>
            <Inputholder>
            <Label>Username</Label>
            <Input placeholder="input Username" type="text"/>
            
            </Inputholder>
            <Inputholder>
            <Label>Email address</Label>
            <Input placeholder="input email" type="email"/>
            
            </Inputholder>
            <Inputholder>
            <Label>Password</Label>
            <Input placeholder="input password" type="password"/>
            
            </Inputholder>
            </Inputs>
            <Buttons>
              <Button>SIgn Up</Button>
              <GOOglesignup>
              <FcGoogle  fontSize="21px"/>

                <span>
                        SignUP with Google 

                    </span>
              </GOOglesignup>
            </Buttons>
</Form>
          </Right>
        
      </Wrapper>
  </Container>
  )
}

export default Signup
const Buttons = styled.div`
width: 100%;
height: 150px;
display: flex;
flex-direction: column;
justify-content: space-around;
/* background-color: red; */
align-items: center;
margin-top: 40px;
`
const Button = styled.div`
background-color: royalblue;
padding: 8px 20px;
border-radius: 7px;
color: white;
font-size: 20px;
`
const GOOglesignup = styled.div`
span{
  margin-left: 10px;
}
font-size: 19px;
background-color: white;
border: 2px solid royalblue;
width: 100%;
height: 55px;
padding: 0 5px;
border-radius: 7px;
display: flex;
align-items: center;
justify-content: center;
color: black;
`
const Form = styled.div`
width: 70%;
height: 80%;
`

const Title = styled.div`
font-size: 30px;
font-weight: 500;
`
const Inputs = styled.div`
margin-top: 30px;

`
const Inputholder = styled.div`
margin-bottom: 20px;

`
const Label = styled.div`
font-weight: 700;
`
const Input = styled.input`
:focus{
  outline:1px solid royalblue ;
}
font-size: 17px;
box-shadow: 0 0 3px rgba(0,0,0,0.3);
padding: 0 5px;
width: 90%;
height: 45px;
border:2px solid royalblue ;
outline: none;
border-radius: 6px;
margin-top: 7px;
`
const Container = styled.div`
width: 100%;
height: 100vh;
background-color: royalblue;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width: 80%;
background-color: white;
border-radius: 7px;
display: flex;
`
const Right = styled.div`
@media (max-width:768px){
flex: 1;

}
height: 90vh;
flex: 0.5;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Left = styled.div`
@media (max-width:768px){
  display: none;
}
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
background-image: url("/images/pexs.jpg");
background-position: center;
background-size: cover;
flex: 0.5;
height: 90vh;
`
