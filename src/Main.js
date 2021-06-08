import React from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component{
  render(){

    return(
      <>
      <HornedBeasts title = "Horns 1" imageUrl = "https://d1nslcd7m2225b.cloudfront.net/Pictures/480xAny/2/2/7/1178227_horns_01.jpg" decription = "Daniel Radcliffe in horns"/>
      <HornedBeasts title = "Horns 2" imageUrl = "https://d1nslcd7m2225b.cloudfront.net/Pictures/480xAny/2/2/7/1178227_horns_01.jpg" decription = "Daniel Radcliffe in horns two"/>
      <HornedBeasts title = "Horns 3" imageUrl = "https://d1nslcd7m2225b.cloudfront.net/Pictures/480xAny/2/2/7/1178227_horns_01.jpg" decription = "Daniel Radcliffe in horns three"/>
      </>
    );
  }
}

export default Main;