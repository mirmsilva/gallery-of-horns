
import './App.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';

class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state={
      shouldShowModal: false
    }
  }

  showModal=(title, horns, image_url, description)=>{
    this.setState({
      shouldShowModal: true,
      title: title,
      horns: horns, 
      image_url: image_url,
      description: description,
      
    });
  }
  
  hideModal=()=>{
    this.setState({
      shouldShowModal:false
    });
  }
  
  render(){
    return(
      <>
      <SelectedBeast
      title={this.state.title}
      horns={this.state.horns}
      image_url={this.state.image_url}
      description={this.state.description}
      shouldShowModal={this.state.shouldShowModal}
      hideModal={this.hideModal}/>
      <Header/>
      <Main showModal= {this.showModal}/>
      <Footer/>
      </>
      );
    }
  }
  
  
  export default App;
  
  