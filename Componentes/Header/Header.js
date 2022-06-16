import React from 'react'
import styled from 'styled-components'
import {BiSearchAlt2} from 'react-icons/bi'
import {RiArrowDropDownLine} from 'react-icons/ri'
const Header = ({bg,bg1}) => {
  return (
   <Container>
       <Logo><img/> Logo</Logo>
       <NavI><span>illustrations</span>
       <Icon1/>
       </NavI>
       <Nav>Artist</Nav>
       <Searchin>
           <Icon/>
           <Input/>
       </Searchin>
       <Button bg1>Try pro free</Button>
       <Button bg>SignUP</Button>
       <Menu>m</Menu>
   </Container>
  )
}

export default Header
const Icon1  = styled(RiArrowDropDownLine)`
  cursor:pointer;
  font-size:25px ;
  margin-top:5px;
`
const Menu  = styled.div``
const Button  = styled.button`
margin: 0 9px;
padding: 6px 20px;
outline: none;
border: none;
background-color: ${({bg})=>bg?"ffff":"#005EFF"};
color: ${({bg})=>(bg?"red":"ffff")};
border-color: ${({bg1})=>(bg1?"transparent":"ddd")};
:hover{
    border-color: ${({bg1})=>(bg1?"ddd":"black")};
    transform: scale(1.09);
}

`
const Input  = styled.input``
const Icon  = styled.div``
const Searchin  = styled.div`
height:40px;
flex:1;
display:flex
`
const Nav  = styled.div`
margin-right:10px;
font-weight: 600;
`
const NavI  = styled.div`
margin: 0 10px;
display: flex;
align-items: center;
justify-content:center;
// background-color: red;
span{
font-weight: 600;

}
`
const Logo  = styled.div`
font-size: 32px;
font-family: arvo;
font-weight: 600;
margin-left: 20px;
`
const Container  = styled.div`
width: 100%;
height:60px;
border-bottom: 1px solid royalblue;
display: flex;
align-items: center;
`
