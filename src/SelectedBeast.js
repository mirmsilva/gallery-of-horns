import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Button from 'react-bootstrap/Button';


class SelectedBeast extends React.Component{
  render(){
    return(
    <>
    <Modal show={this.props.shouldShowModal} onHide={this.props.hideModal}>
      <Modal.Header closeButton>
        {this.props.title}
      </Modal.Header>
      <Modal.Body>
        {this.props.horns}
        {this.props.description}
        <img src= {this.props.image_url} alt={this.props.title}></img>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick = {this.props.hideModal}>Close Button</Button>
      </Modal.Footer>
    </Modal>
    </>
    )
  }
}

export default SelectedBeast;