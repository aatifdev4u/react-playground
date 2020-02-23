import React , { Component } from 'react';

class RefDemo extends Component{
    constructor(props){
        super(props);
        this.nameInput = React.createRef();
        
    }

    componentDidMount(){
        this.nameInput.current.focus();
    }

    render(){
        return(
            <div>
                <h2>This is heading</h2>
                <label>Name:</label>
                <input type="text"  ref={this.nameInput}/>
                <br/>
                <br/>
                <br/>
                <label>Age:</label>
                <input type="text"   />
            </div>
        )
    }
}

export default RefDemo;