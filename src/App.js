
import './App.css';
import {Mycontext} from './Context'
import Navbar from './layouts/Navbar'
import {useState,useEffect} from 'react'
import Countrys from './layouts/Countrys'
import axios from 'axios'


function App() {


  const [countries,setcountries] = useState([])


  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(res => {
      setcountries(res.data)
    })
  },[])





  


  

  return (
    <Mycontext.Provider value = {{countries}}>
      <div className="App">
      <Navbar/>
      <div style  = {{width: "100%",height : "70px"}}></div>
      <Countrys/>
    </div>
    </Mycontext.Provider>
    
  );
}

export default App;
