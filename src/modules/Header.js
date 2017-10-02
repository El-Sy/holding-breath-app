import React, { Component } from 'react';

class Header extends Component {

createMarkup(e) {
    return {__html: e};
  }

  render() {
    return (
      <div style={{minHeight:"210px"}} className="hb-header column column-100">
        <h4 style={{margin:"40px 0px 0px 0px"}} dangerouslySetInnerHTML={this.createMarkup(this.props.header_text)} />
      </div>
    );
  }
}

export default Header;
