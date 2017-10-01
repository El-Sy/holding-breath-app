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
    let link = this.props.action === "Try Again" ?
      <a href="http://www.cynthiadsuwito.com/">
        <button 
        className="button button-outline"
        style={{marginLeft:"1rem"}}
        >Go to cynthiadsuwito.com</button>
      </a> : null;
    return (
      <section className="column column-100">
        <div className="hb-actions">
        <button className="button button-outline" onClick={() => this.handleTimer()}>{this.props.action}</button>
        {link}
        </div> 
      </section>
    );
  }
}

export default Actions;
