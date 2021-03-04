import React from 'react'
import {useContext,useEffect,useState} from 'react'
import styled from 'styled-components'
import {Mycontext} from '../Context'

const Allnavbar = styled.div`
width : 100%;
height : 70px;
border-bottom : solid 2px lightgray;
display : flex;
justify-content : space-between;
position : fixed;
top : 0;
left:  0;
z-index : 10000;
background-color : #f4f4f4;

`

const Baslik = styled.h3`
color : black;
font-weight  : 700;
font-family : monospace;
margin-left : 30px;
font-size :20px ;
margin-top : 20px
`


const Input = styled.input`
width : 20%;
border : none;
height : 30px;
margin-right : 60px;
margin-top : 20px
`

 function Navbar({handleChange}) {
  return (
    <div>
    <nav> 
    <Allnavbar>
      <Baslik>Count</Baslik>
      <Input placeholder = "Search" onChange = {handleChange} ></Input>
  
    
    </Allnavbar> 
    </nav>
    </div>
  )
}

export default Navbar
