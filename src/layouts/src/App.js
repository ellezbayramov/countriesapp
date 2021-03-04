
import './App.css';
import {Mycontext} from './Context'
import Navbar from './layouts/Navbar'
import {useState,useEffect} from 'react'
import Countrys from './layouts/Countrys'
import axios from 'axios'


function App() {


  const [countries,setcountries] = useState([])
  const [input,setinput] = useState("")


  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(res => {
      setcountries(res.data)
    })
  },[])





  
 const filterdata = countries.filter(d => {
     return d.name.toLowerCase().includes(input.toLowerCase())
   })
     





  return (
    <Mycontext.Provider value = {{filterdata}}>
      <div className="App">
      <Navbar handleChange = {(e) => setinput(e.target.value)}/>
      <div style  = {{width: "100%",height : "70px"}}></div>
      <Countrys/>
    </div>
    </Mycontext.Provider>
    
  );
}

export default App;
