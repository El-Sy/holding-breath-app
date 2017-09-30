import React, { Component } from 'react';
import './App.css';

// custom react components
import Actions from './modules/Actions.js'
import TimerDisplay from './modules/TimerDisplay.js'

let timer;
let timeOut;

let init = {
  header_text: "Take a deep breath first and press start",
  timer: 0,
  timer_unit: "seconds",
  time_taken: 0,
  action: "Start",
  displayTime:true
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = init;
    this.handleStartTimer = this.handleStartTimer.bind(this);
    this.handleCalculateO2Saved = this.handleCalculateO2Saved.bind(this);
  }


  handleStartTimer() {
    timer = setInterval(()=>{
      this.setState({timer: this.state.timer + 1})
    },1000)
    this.setState({action:"Stop"})
    timeOut = setTimeout(()=>{
      this.setState({displayTime:false})
    },4000)
  }

  handleStopTimer() {
    clearInterval(timer);
    clearTimeout(timeOut);
    this.setState({
      displayTime:true,
      header_text:"You have held your breath for",
      action:"Calculate Oxygen Saved"
    })

  }

  handleCalculateO2Saved(){
    console.log("time recorded",this.state.timer)

    let divided_num = this.state.timer*1000000000/7500000000
    console.log("divided_num",divided_num)
    divided_num = divided_num.toFixed(2)
    console.log("rounded to 2 dp",divided_num)

    this.setState({
      displayTime:true,
      timer:divided_num,
      header_text:"Divided by 7 500 000 000, which is the estimated number of people on earth, you have saved",
      action:"Try Again",
      timer_unit:"nanoseconds"
    })
  }

  handleTryAgain(){
    this.setState(init)
  }


  render() {
    return (
      <div className="App">
        <header className="hb-header">
          <h4>{this.state.header_text}</h4>
        </header>
        <main className="hb-body">
          <TimerDisplay
            timer={this.state.timer}
            timer_unit={this.state.timer_unit}
            displayTime={this.state.displayTime}
          />
          <Actions
            startTimer={()=>this.handleStartTimer()}
            stopTimer={()=>this.handleStopTimer()}
            tryAgain={()=>this.handleTryAgain()}
            calculateO2Saved={()=>this.handleCalculateO2Saved()}

            action={this.state.action} />
        </main>
      </div>
    );
  }
}

export default App;
