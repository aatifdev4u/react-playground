import React from 'react';

const withToggle = (WrappedComponent)=>{
    class newToggleComponent  extends React.Component{

        constructor(props){
            super(props);

            this.state = {
                toggleStatus: false
            }

            this.toggleHandler = this.toggleHandler.bind(this);
        }

    toggleHandler(){
        this.setState({
            toggleStatus: !this.state.toggleStatus
        })
    }

    render(){
        return(
            <WrappedComponent
                {...this.props}
                toggleStatus={this.state.toggleStatus}
                toggleHandler={this.toggleHandler}
            />
        )
    }
    }

    return newToggleComponent;
}

export default withToggle;