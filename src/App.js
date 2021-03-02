
import './App.css';
import mycontext from './Context'
import styled from 'styled-components'
import Navbar from './layouts/Navbar'





function App() {
  return (
    <mycontext.provider>
      <div className="App">
      <Navbar/>

   

    </div>
    </mycontext.provider>
    
  );
}

export default App;
