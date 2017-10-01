import React, { Component } from 'react';




//custom css
import './App.css';

//css framework
import '../node_modules/milligram/dist/milligram.min.css';

// custom react components
import Actions from './modules/Actions.js'
import TimerDisplay from './modules/TimerDisplay.js'
import Header from './modules/Header.js';
import PopUp from './modules/PopUp.js'

let timer;
let timeOut;

let init = {
  header_text: "Take a deep breath first.<br />When you are ready, press start",
  timer: 0,
  timer_unit: "seconds",
  action: "Start",
  displayTime: true,
  message: "",
  showPopUp: false
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = init;
    this.handleStartTimer = this.handleStartTimer.bind(this);
    this.handleCalculateO2Saved = this.handleCalculateO2Saved.bind(this);
    this.handlePopUp = this.handlePopUp.bind(this);
  }


  handleStartTimer() {
    timer = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 })
    }, 1000)
    this.setState({ action: "Stop" })
    timeOut = setTimeout(() => {
      this.setState({ 
        header_text:"When you can no longer hold your breath press STOP",
        displayTime: false })
    }, 4000)
  }

  handleStopTimer() {
    clearInterval(timer);
    clearTimeout(timeOut);
    this.setState({
      displayTime: true,
      header_text: "You have held your breath for",
      action: "Calculate Oxygen Saved"
    })

  }

  handleCalculateO2Saved() {
    // show divided text first and add time delay for timer
    console.log("time recorded", this.state.timer)

    let divided_num = this.state.timer * 1000000000 / 7500000000
    console.log("divided_num", divided_num)
    divided_num = divided_num.toFixed(2)
    console.log("rounded to 2 dp", divided_num)

    this.setState({
      displayTime: true,
      timer: divided_num,
      header_text: "Divided by 7 500 000 000, which is the estimated number of people on earth, you have saved",
      action: "Try Again",
      timer_unit: "nanoseconds"
    })
  }

  handleTryAgain() {
    this.setState(init)
  }

  handlePopUp(){
    this.setState({showPopUp:!this.state.showPopUp})
  }


  render() {
    let popup = this.state.showPopUp ? <PopUp close={()=>{this.handlePopUp()}} /> : null;
    return (
      <div className="App container">
        {popup}
        <Header
          header_text={this.state.header_text}
          popUp={this.handlePopUp}
        />

        <main className="hb-body row">
          <TimerDisplay
            timer={this.state.timer}
            timer_unit={this.state.timer_unit}
            displayTime={this.state.displayTime}
          />
        </main>
        <footer className="row">
          <Actions
            startTimer={() => this.handleStartTimer()}
            stopTimer={() => this.handleStopTimer()}
            tryAgain={() => this.handleTryAgain()}
            calculateO2Saved={() => this.handleCalculateO2Saved()}
            action={this.state.action} />
        </footer>
      </div>
    );
  }
}

export default App;
