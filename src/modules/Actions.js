import React, { Component } from 'react';

class Actions extends Component {
  constructor(props) {
    super(props);
    this.handleTimer = this.handleTimer.bind(this);
  }

  handleTimer() {
    switch (this.props.action) {
      case "Start":
        return this.props.startTimer();
      case "Stop":
        return this.props.stopTimer();
      case "Calculate Oxygen Saved":
        return this.props.calculateO2Saved();
      case "Try Again":
        return this.props.tryAgain();
      default:
        return this.props.startTimer();
    }

  }



  render() {
    let link = this.props.action === "Try Again" ? <a href="http://www.cynthiadsuwito.com/"><button>Go to cynthiadsuwito.com</button></a> : null;
    return (
      <section className="hb-actions">
        <button onClick={() => this.handleTimer()}>{this.props.action}</button>
        {link}
      </section>
    );
  }
}

export default Actions;
