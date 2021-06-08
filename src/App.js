
import './App.css';
import React from 'react';
import Header from './Header.js';
import Main from './HornedBeasts.js';
import Footer from './Footer';
import HornedBeasts from './HornedBeasts.js';



class App extends React.Component{
  render(){
    return(
      <>
      <Header header = "Welcome to Gallery of Horns"/>
      <Main/>
      <Footer footer = "this page was made by Miriam"/>
      </>
    );
  }
}


export default App;

