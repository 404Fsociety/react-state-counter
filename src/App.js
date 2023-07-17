import React, { Component } from 'react';
import Navigation from './Navigation';
import PersonComponent from './Person'
import Button from 'react-bootstrap/Button';
import Footerr from './Footerr'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {show:false};
  }
  toggle =()=>{
    this.setState({show: !this.state.show})
  }
  render() {
    return (
      <div className="App">
        <Navigation/>
        <div style={{textAlign:"center",marginTop:"50px"}}>
        <Button onClick={this.toggle} variant="success">show profil</Button>
        {this.state.show?<PersonComponent/> :null}
        <Footerr/>
        </div>
      </div>
    )
  }
}