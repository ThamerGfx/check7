import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      log: "",
      tab:[0,1,2,3,4,5,6,7,8,9],    
    }
    };

  buttonClicked=(i) =>{
    this.setState({log:"The factorial of "+this.state.tab[i]+" is: "+this.state.tab[i]*this.state.tab[i]});
};
  render() {
    return (
      <div className="App">
      <div className="btn">
          {this.state.tab.map((i)=>{
            return <button onClick={() => this.buttonClicked(i)}>{this.state.tab[i]}</button>})}
      </div>
      <div>
        <b className="texte"><h3>{this.state.log}</h3></b>
      </div>
      </div>
    );
  }
}
export default App;