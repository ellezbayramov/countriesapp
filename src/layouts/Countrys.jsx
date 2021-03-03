import React from 'react'
import styled from 'styled-components'
import {useContext,useEffect} from 'react'
import {Mycontext} from '../Context'





const AllContry  = styled.div`
width  : 100%;
height : auto;
z-index : 200;
text-align : center;
background-color :none;
display : flex;
flex-direction : row;
flex-wrap : wrap;
justify-content : center;
margin-bottom : 20px;

`


const Headertext = styled.p`
color : black;
font-weight : 800;
font-family : sans-serif;
width  :100%;
text-align :center;
font-size : 30px
`


const Countrycontent = styled.div`
height : 270px;
width : 300px;
margin-top : 10px;
margin-left   :30px;
margin-bottom : 20px;
background-color :#efefef;
border-radius : 40px;
@media (max-width: 550px) {
margin-left : 0;
margin-bottom : 15px    
  } 


`  


const Imgdiv  = styled.div `
width : 30%;
height : auto;
float : left
`


const Informationsdiv = styled.div`
width : 70%;
height : auto;
max-height : 40%;
float : left;
padding-left : 10px
`  

const Countryname = styled.p`
color : black;
text-align : left;
margin-left : 5px;
font-weight : 700;
`

const Countrycity = styled(Countryname)`
color : red
`

const Informationsdivtwo = styled.div`
width : 100%;
height : 158px;
margin-top : 90px;
border-top : solid 2px lightgray;
padding-top : 10px
`


const Countryarea = styled(Countryname)`
color : red
`

const Countrynative = styled(Countryname)`
color : red
`

const Countrypopulation = styled(Countryname)`
color : red
`

const CountryRegion = styled(Countryname)`
color : red
`




function Countrys() {


const {countries}  = useContext(Mycontext)

useEffect(() => {
console.log(countries)
},[])


  return (
    <div>
      <AllContry>
        <Headertext>Country</Headertext>
      {
        
        countries.slice(1,101).map((f) => {
          return (
           
            <Countrycontent>
            


            <Imgdiv>
            <img src = {f.flag} className = "img-fluid"/>
            </Imgdiv>

            <Informationsdiv>
            <Countryname>{f.name}</Countryname>
            <Countrycity><span style = {{color : "black"}}>City</span> : {f.capital}</Countrycity>
            </Informationsdiv>


            <Informationsdivtwo>
            <Countryarea><span style = {{color : "black"}}>Area : </span>{f.area} km</Countryarea>
            <Countrypopulation><span style = {{color : "black"}}>Population : </span>{f.population}</Countrypopulation>
            <Countrynative><span style = {{color : "black"}}>Native : </span>{f.nativeName}</Countrynative>
            <CountryRegion><span style = {{color : "black"}}>Region : </span>{f.region}</CountryRegion>
            </Informationsdivtwo>
            
            
            
            
            </Countrycontent>
                      )
        })
      }


      
      </AllContry>
    </div>
  )
}


export default Countrys