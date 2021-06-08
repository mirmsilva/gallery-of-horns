import React from 'react';

class Footer extends React.Component{
  render(){
    //will contain my name as the author
    return(
      <>
      <p>{this.props.footer}</p>
      </>
    );
  }
}

export default Footer;