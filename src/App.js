import React, { Component } from "react";

//custom css
import "./App.css";

//css framework
import "../node_modules/milligram/dist/milligram.min.css";

// custom react components
import Actions from "./modules/Actions.js";
import TimerDisplay from "./modules/TimerDisplay.js";
import Header from "./modules/Header.js";
import PopUp from "./modules/PopUp.js";
import Fade from "./modules/Fade.js";

import constants from './constants';
import { setNumberSpacing } from './helpers';

let timer;
let timeOut;
let transitionTime;
let transitionTime2;
let short_time = 600;
let medium_time = 1800;
let long_time = 4000;

let init = {
  header_text:
    "Take a deep breath first.<br />When you are ready,<br/>hold your breath and<br/>press START",
  timer: 0,
  timer_unit: "seconds",
  action: "Start",
  displayTime: true,
  showPopUp: false,
  showHeader: true,
  showTimer: true,
  class: "quickFade",
  timeout: short_time
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = init;
    this.handleStartTimer = this.handleStartTimer.bind(this);
    this.handleCalculateO2Saved = this.handleCalculateO2Saved.bind(this);
    this.handlePopUp = this.handlePopUp.bind(this);
  }

  reset = () => {
    document.getElementById("header").className = "row";
    document.getElementById("main").className = "row";
  };

  handleStartTimer() {
    this.reset();

    clearTimeout(transitionTime);
    transitionTime = this.setState({
      class: "fade",
      action: "Stop",
      showHeader: false,
      showTimer: false,
      timeout: long_time
    });

    timer = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, medium_time);

    timeOut = setTimeout(() => {
      this.setState({
        header_text: "When you can no longer hold your breath press STOP",
        displayTime: false,
        showHeader: true,
        showTimer: true,
        timeout: medium_time
      });
    }, long_time);
  }

  handleStopTimer() {
    this.reset();

    clearInterval(timer);
    clearTimeout(timeOut);
    clearTimeout(transitionTime);
    this.setState({
      showHeader: false,
      showTimer: false,
      class: "quickFade"
    });

    transitionTime = setTimeout(() => {
      this.setState({
        showHeader: true,
        showTimer: true,
        displayTime: true,
        header_text: "You have held your breath for",
        action: "Calculate Oxygen Saved"
      });
    }, short_time);
  }

  handleCalculateO2Saved() {
    this.reset();
    clearTimeout(transitionTime);
    this.setState({
      showHeader: false,
      showTimer: false,
      timeout: medium_time
    });

    // show divided text first and add time delay for timer

    let divided_num = (this.state.timer * 1000000000) / constants.total_population;
    divided_num = divided_num.toFixed(2);

    console.log('setNumberSpacing(constants.total_population', setNumberSpacing(constants.total_population));
    transitionTime = setTimeout(() => {
      this.setState({
        showHeader: true,
        displayTime: true,
        timer: divided_num,
        header_text: `Divided by ${setNumberSpacing(constants.total_population)}, which is the estimated number of people on earth, you have saved`,
        action: "Try Again",
        timer_unit: "nanoseconds"
      });
    }, short_time);

    transitionTime2 = setTimeout(() => {
      this.setState({
        showTimer: true,
        timeout: short_time
      });
    }, medium_time);
  }

  handleTryAgain() {
    this.reset();

    clearTimeout(transitionTime);
    clearTimeout(transitionTime2);
    this.setState({
      showHeader: false,
      showTimer: false,
      timeout: short_time
    });
    transitionTime = setTimeout(() => {
      this.setState(init);
    }, short_time);
  }

  handlePopUp() {
    this.setState({ showPopUp: !this.state.showPopUp });
  }

  render() {
    let popup = this.state.showPopUp ? (
      <PopUp
        close={() => {
          this.handlePopUp();
        }}
      />
    ) : null;
    let time_saved =
      this.state.timer_unit === "nanoseconds" ? (
        <h4 style={{ margin: "0px" }}>
          of oxygen for every single <br />
          person on earth
        </h4>
      ) : null;
    return (
      <div
        className="App container"
        style={{ position: "relative", height: window.innerHeight }}
      >
        {popup}
        <span
          onClick={() => this.handlePopUp()}
          style={{ paddingTop: "2rem", float: "right" }}
        >
          <i className="fa fa-question-circle-o fa-lg" aria-hidden="true" />
        </span>
        <Fade
          timeout={this.state.timeout}
          class={this.state.class}
          in={this.state.showHeader}
        >
          <header id="header" className="row">
            <Header header_text={this.state.header_text} />
          </header>
        </Fade>

        <Fade
          timeout={this.state.timeout}
          class={this.state.class}
          in={this.state.showTimer}
        >
          <main
            id="main"
            className="row"
            style={{ padding: "2rem 0px 0px 0px", minHeight: "170px" }}
          >
            <div className="column column-100">
              <TimerDisplay
                timer={this.state.timer}
                timer_unit={this.state.timer_unit}
                displayTime={this.state.displayTime}
              />
              {time_saved}
            </div>
          </main>
        </Fade>

        <footer className="hb-header row" style={{ minHeight: "150px" }}>
          <Actions
            startTimer={() => this.handleStartTimer()}
            stopTimer={() => this.handleStopTimer()}
            tryAgain={() => this.handleTryAgain()}
            calculateO2Saved={() => this.handleCalculateO2Saved()}
            action={this.state.action}
          />
        </footer>
      </div>
    );
  }
}

export default App;
