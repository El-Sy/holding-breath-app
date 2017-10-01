import React, { Component } from 'react';

const unitStyle = {
  paddingLeft: "1rem",
  marginBottom:"20px"
}

const waitingTextStyle = {
  color: "lightgray",
  marginBottom:"20px"
}

class TimeDisplay extends Component {

  render() {

    if (this.props.displayTime) {
      return (
        <section className="column column-100">
          
          <div className="hb-display">
          <h3 style={{fontFamily:"Roboto",fontSize:"40px", marginBottom:"15px"}}>{this.props.timer}</h3> <h3 style={unitStyle}>{this.props.timer_unit}</h3>
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