import React from 'react';
import HornedBeasts from './HornedBeasts';
import { CardColumns } from 'react-bootstrap';
import Data from './data.json';

class Main extends React.Component{

  render(){
    return(
      <CardColumns>
      {Data.map((beasts, idx) =>
      <HornedBeasts
      showModal= {this.props.showModal} 
      image_url={beasts.image_url} 
      title={beasts.title} 
      description={beasts.description} key={idx}/>
      )}
      </CardColumns>
    );
  }
}

export default Main;