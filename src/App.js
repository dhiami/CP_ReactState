import React from "react";
import "./App.css";
import Timer from "./Component/timer";
import {Button} from 'react-bootstrap';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  showProfile = () => {
    this.setState({ show: !this.state.show })
  };
  render() {
    return (
      <div className="App">
        <div className="Button">

          <Button onClick={this.showProfile}  style={{ marginTop: '10%'}}>
            {this.state.show ? "Hide" : "Show"}
          </Button>

          {this.state.show ? (
            <div className="Info">
            <p><h4>Name: </h4> Missaoui Dhia</p>
            <p><h4>Bio: </h4> Hope one day our dreams come true </p>
            <p><h4>Profession: </h4> Full Stack JS student </p>
            <img src="./download.jpg" alt="image" />
            </div>)
            :( <div className="Timer" >
            <Timer />
            </div>
            )}
        </div>
      </div>
    )
  }
}
export default App;