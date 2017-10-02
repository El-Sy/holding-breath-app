import React, { Component } from 'react';

const timerStyle = {
  fontFamily: "Roboto",
  fontSize: "40px",
  marginBottom: "15px"
}

const unitStyle = {
  paddingLeft: "1rem",
  marginBottom: "20px"
}

const waitingTextStyle = {
  color: "lightgray",
  marginBottom: "20px"
}

class TimeDisplay extends Component {

  render() {

    let timer_display = this.props.displayTime ?
      <div className="hb-display">
        <h3 style={timerStyle}>{this.props.timer}</h3>
        <h3 style={unitStyle}>{this.props.timer_unit}</h3>
      </div> :
      <div className="hb-display">
        <h3 style={waitingTextStyle}>holding breath...</h3>
      </div>

      return (
        <section>
          {timer_display}
        </section>
      );
   
  }
}

export default TimeDisplay;