import React, { Component } from 'react';

class Accordion extends Component{
    constructor(props){
        super(props);
        this.state = {
            isCollapsed: true
        }
        this.onClick = this.onClick.bind(this)
    }

    onClick(){
        this.setState({
            isCollapsed: !this.state.isCollapsed
        })
    }

    render(){
        const {Header, children} = this.props;
        const {isCollapsed} = this.state;
        return(
            <div className="Accordion">
                <div onClick={this.onClick} className="Header">{Header}</div>
                {!isCollapsed && <div className="Content">{children}</div>}
            </div>
        )
    }
}

export default Accordion;