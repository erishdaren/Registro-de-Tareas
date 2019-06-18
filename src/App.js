import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './component/Navigation';
import TareasForm from './component/TareasForm';
export default function App() {

  return (
   
  <div className="App">
    
     {/* <h1 className="h1">TITULO DE LA APLICACIÓN </h1> */}
      
      <header className="App-header">
            <Navigation titulo = "React"/> 
            {/* titulo="nav1" === {this.props.titulo} --> esta es su propiedad el componente*/}     
  
      </header> 
      
      <img src={logo} className="App-logo" alt="logo" />
       <TareasForm />
<p> prueba para github</p>
    </div>
 
  );
}


