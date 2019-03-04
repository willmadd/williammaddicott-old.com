import React, { Component } from "react";
import "./App.scss";
import * as api from './database/getData'
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";

class App extends Component {
  state={
    query:[],
  }

componentDidMount=()=>{
  let query = api.getData();

query.then(res=>{
 this.setState({
   query:res.data
 }) 
})
}

  render() {
    return (
      <div className="App">
        
        <Header/>
        <AboutMe/>
<Services/>

      </div>
    );
  }
}

export default App;
