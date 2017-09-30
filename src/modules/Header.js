import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
        <header className="hb-header">
          <h4>{this.state.header_text}</h4>
        </header>
        );
  }
}

export default Header;
