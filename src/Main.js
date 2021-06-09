import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from './data.json';
import { CardColumns } from 'react-bootstrap';


class Main extends React.Component{
  
  render(){
    return(
      <CardColumns>
      {Data.map((beasts, idx) =>
      <HornedBeasts image_url = {beasts.image_url} title = {beasts.title} key={idx}/>
        )}
        </CardColumns>
    );
  }
}

export default Main;

