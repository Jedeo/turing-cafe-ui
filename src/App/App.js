import React, { Component } from "react";
import Home from "../components/home.component/Home";
import Form from "../components/form.component/Form";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      res: []
    }
  }
  getNewReservation = (newRes) => {
    this.setState(()=>{return {res: [newRes,...this.state.res]}}, ()=> {console.log(this.state);})
  }
  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form">
            <Form getNewReservation={this.getNewReservation}/>
        </div>
        <div className="resy-container">
          <Home newRes={this.state.res} />
        </div>
      </div>
    );
  }
}

export default App;
