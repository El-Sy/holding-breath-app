import React, { Component } from 'react';

class Header extends Component {

createMarkup(e) {
    return {__html: e};
  }

  render() {
    return (
      <header style={{minHeight:"200px"}} className="hb-header column column-100">
        <span onClick={this.props.popUp}style={{ float: "right" }}>
          <i className="fa fa-question-circle-o fa-lg" aria-hidden="true"></i>
        </span>

        <h4 style={{margin:"6rem 0px 1rem 0px"}} dangerouslySetInnerHTML={this.createMarkup(this.props.header_text)} />
      </header>
    );
  }
}

export default Header;
