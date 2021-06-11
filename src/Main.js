import React from 'react';
import HornedBeasts from './HornedBeasts';
import { CardColumns, Container , Form, Button} from 'react-bootstrap';
import Data from './data.json';

class Main extends React.Component{

  constructor(props){
    super(props);

    this.state={
      beastHorn: 0,
      beastList: Data
    }
  }

  handleSubmitForm = e =>{
    e.preventDefault();
    console.log('submitted');
    
    let  beastArray = Data.filter(beast => e.target.HornSelect.value == beast.horns);
    this.setState({
    beastList: beastArray,
    beastHorn: e.target.HornSelect.value

    })
    console.log (e.target.HornSelect.value);
    
    
  }


  render(){
    return(
      
      <CardColumns>
        <Container>
      <Form onSubmit = {this.handleSubmitForm}>
        <Form.Group controlId= "HornSelect">
        <Form.Label>Click Below to Sort by Horns</Form.Label>
        <Form.Control as="select">
          <option value = "1">1</option>
          <option value = "2" >2</option>
          <option value = "3">3</option>
          <option value = "100">100</option>
        </Form.Control>
        </Form.Group>
        <Button type = "submit">Submit</Button>
      </Form>

      </Container>
      {this.state.beastList.map((beasts, idx) =>
      <HornedBeasts
      showModal= {this.props.showModal} 
      title={beasts.title} 
      horns={beasts.horns}
      image_url={beasts.image_url} 
      description={beasts.description} key={idx}/>
      )}
      </CardColumns>
    );
  }
}

export default Main;