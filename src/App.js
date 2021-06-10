
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

  showModal=(title, description,image_url)=>{
    this.setState({
      shouldShowModal: true,
      title: title,
      description: description,
      image_url: image_url
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
  
  