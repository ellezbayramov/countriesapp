import React from 'react'
import styled from 'styled-components'


const Allnavbar = styled.div`
width : 100%;
height : 70px;
border-bottom : solid 2px lightgray;
margin :0;
padding : 0;
display : flex;
justify-content : space-between;
position : fixed;
top : 0;
left:  0

`

const Baslik = styled.h3`
color : black;
font-weight  : 700;
font-family : monospace;
margin-left : 30px;
font-size :20px 
`


const Input = styled.input`
width : 20%;
border : none;
height : 30px;
margin-right : 60px;
margin-top : 20px
`

 function Navbar() {
  return (
    <div>
    <nav>
    <Allnavbar>
      <Baslik>Count</Baslik>
      <Input placeholder = "Search"></Input>
    
    
    </Allnavbar> 
    </nav>
    </div>
  )
}

export default Navbar
