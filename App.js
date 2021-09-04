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

// Form Get Value With the help of functional component

import {useState} from 'react'
import './App.css'

function App(){
  const [Name,setName] = useState("")
  const [City , setCity] = useState("")
  const [check, setCheck] = useState(false)

  function getForm(e){
    e.preventDefault();
    console.log(Name,City,check)
  }
  return(
    <div className="App">
    <form onSubmit={getForm}>
    <h1>Forms get data</h1>
      <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/><br/><br/>
      <select onChange={(e)=>setCity(e.target.value)}>
        <option>Choose City</option>
        <option>Saharanpur</option>
        <option>Muzaffarnagar</option>
        <option>Meerut</option>
      </select><br/><br/>
      <input type="checkbox" onChange={(e)=>setCheck(e.target.checked)}/><span>Accept terms and Conditions</span><br/><br/>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}
export default App
