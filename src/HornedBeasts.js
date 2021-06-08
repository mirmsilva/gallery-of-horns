import React from 'react';

class HornedBeasts extends React.Component{
  render(){
    //needs to pass title<h2>, imageUrl<img>, description<p>
    //
    return(
      <>
      <h2>{this.props.title}</h2>
      <img src = {this.props.imageUrl}></img>
      <p>{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeasts;