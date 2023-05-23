import React, { Component } from 'react';
import Child from "./Components/Child.jsx";


class App extends Component {
  state = {name:'Max'} 
  render() { 
    return (
<div>
  <Child name={this.state.name}/>
</div>
    );
  }
}
 
export default App;