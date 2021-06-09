import React from 'react';
import Card from 'react-bootstrap/Card'


class HornedBeasts extends React.Component{
  // create constructor prop
  constructor(props){
    super(props);
    //set initializer
    this.state={
      favoriteCount:0
    }
  }
  //increase favorite count by one 
  increaseFavorite = ()=>{
    this.setState({
      favoriteCount: this.state.favoriteCount +1
    });
  }
  render(){
    //needs to pass title<h2>, imageUrl<img>, description<p>
    //add a button to the image allow user to favorite image
    return(
      <Card style ={{width: '18rem'}}>
        <Card.Img variant="top" alt = {this.props.title} onClick={this.increaseFavorite}  src={this.props.image_url}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.state.favoriteCount}</Card.Text>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeasts;