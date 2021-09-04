import logo from './logo.svg';
import './App.css';
import React from 'react'
class App extends React.Component{
  constructor(){
    super();
    this.state = {Name:null}

  }
  getData(val){
    // val.preventDefault();
    this.setState({Name:val.target.value})
  }

  render(){
    return(
      <div className="App">
        <h1>{this.state.Name}</h1>
        <input type="text" onChange={val=>{this.getData(val)}}/>
      </div>
    )
  }
}

export default App;
