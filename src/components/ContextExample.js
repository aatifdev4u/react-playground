import React, { Component} from 'react';

const NameContext = React.createContext();

export const Coder = ()=>{
    return(
        <NameContext.Provider value={{name: 'ABC', age: 30}}>
            <div>
                <h2>Thi s is from Coder 3</h2>
                <Coder2/>
            </div>
        </NameContext.Provider>
    )
}

class Coder4 extends Component{
    static contextType = NameContext;
    render(){
        console.log(this.context);
        return(
            <div>
                <h1>This is coder4</h1>
                <p>Name: {this.context.name}</p>
                <p>Age: {this.context.age}</p>
            </div>
        )
    }
}

export const Coder2 = ()=>{
    return(
        <div>
            <Coder3 />
            <Coder4 />
        </div>
    );
}

export const Coder3 = ()=>{
    return(
        <NameContext.Consumer>
            {
                (detail)=>{
                    return <React.Fragment>
                        <h1>This is from Cdeer3</h1>
                        <p>Name: {detail.name}</p>
                        <p>Age: {detail.age}</p>
                    </React.Fragment>
                }
            }
        </NameContext.Consumer>
    )
}