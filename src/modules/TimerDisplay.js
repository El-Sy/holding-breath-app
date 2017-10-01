import React, { Component } from 'react';

const unitStyle = {
  paddingLeft: "1rem"
}

const waitingTextStyle = {
  color: "lightgray"
}

class TimeDisplay extends Component {

  render() {

    if (this.props.displayTime) {
      return (
        <section className="column column-100">
          
          <div className="hb-display">
          <h1>{this.props.timer}</h1> <h3 style={unitStyle}>{this.props.timer_unit}</h3>
          </div>
        </section>
      );
    } else {
      return (
        <section className="column column-100">
          <div className="hb-display">
          <h3 style={waitingTextStyle}>holding breath...</h3>
          </div>
        </section>

      );
    }
  }
}

export default TimeDisplay;