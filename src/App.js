import {Routes,Route} from 'react-router-dom'
import React,{useEffect} from 'react';



import './App.css';
import Navbar from './components/Navbar';
import FooterBar from './components/FooterBar';
import Home from './Pages/Home'
import Info from './Pages/Info'
import Signin from './Pages/Signin'
import Tutorial from './Pages/Tutorial'
import Member from './Pages/Member'

function App() {
  useEffect(()=>{
    document.title = "TCProject";
  })
  return (
    <>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path ="/" element = {<Home/>} />
          <Route path ="/info" element = {<Info/>} />
          <Route path ="/tutorial" element = {<Tutorial/>} />
          <Route path ="/signin" element = {<Signin/>} />
          <Route path ="/member" element = {<Member/>} />
        </Routes>

        <FooterBar/>
        
      </div>
    </>
    
  );
}

export default App;
