import React, { Component } from 'react';

class Child extends Component { 
    render() { 
        return (<p>my name is {this.props.name}</p>);
    }
}
 
export default Child;