import React, { Component } from 'react';

class Coder4 extends Component{
    static contextType = NameContext;
    render(){
        <div>
            <h1>This is coder4</h1>
        <p>{this.context}</p>
        </div>
    }
}

export default Coder4;