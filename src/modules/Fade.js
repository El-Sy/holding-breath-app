import React, { Component } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

class Fate extends Component {

    render() {
        return (
            <CSSTransition
                in={this.props.in}
                timeout={this.props.timeout}
                classNames={this.props.class}
                mountOnEnter
            >
                {this.props.children}
            </CSSTransition>
        )
    }
}

export default Fate;