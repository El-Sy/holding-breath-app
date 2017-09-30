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
        <section className="hb-display">
          <h1>{this.props.timer}</h1> <h3 style={unitStyle}>{this.props.timer_unit}</h3>
        </section>
      );
    } else {
      return (
        <section className="hb-display">
          <h3 style={waitingTextStyle}>holding breath...</h3>
        </section>

      );
    }
  }
}

export default TimeDisplay;