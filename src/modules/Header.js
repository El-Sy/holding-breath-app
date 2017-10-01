import React, { Component } from 'react';

class Header extends Component {

createMarkup(e) {
    return {__html: e};
  }

  render() {
    return (
      <header id="header" style={{minHeight:"300px"}} className="hb-header column column-100">
        <h4 style={{margin:"80px 0px 1rem 0px"}} dangerouslySetInnerHTML={this.createMarkup(this.props.header_text)} />
      </header>
    );
  }
}

export default Header;
