import React, { Component } from 'react';

const PopUpStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: "1030",
  height:window.innerHeight

}

const PopUpInnerStyle = {
  backgroundColor: "white",
  textAlign: "left",
  padding: "1rem",
  zIndex: "1040",
  border: "0.1rem solid #606c76",
  borderRadius: "1rem"
}

class PopUp extends Component {

  handleOnClick(e) {
    const popup = document.getElementById("popup")
    if (!popup.contains(e.target)) {
      this.props.close();
    }
  }

  createMarkup(e) {
    return { __html: e };
  }

  render() {
    return (
      <div className="container" style={PopUpStyle} onClick={(e) => this.handleOnClick(e)}>
        <article className="row">
          <div className="column column-80 column-offset-20">
            <div className="hb-header">
              <div id="popup" style={PopUpInnerStyle} dangerouslySetInnerHTML={this.createMarkup("Holding Breath is a participatory artwork which is based on a theory that when you hold your breath, you are saving the oxygen you are suppose to use for someone else.<br /><br />By inviting participants to hold their breath for as long as they can and dividing the result with the number of people on earth( + 7 500 000 000), this artwork calculates the amount of oxygen you have donated to every single person on earth in the form of nanoseconds.<br /><br />This artwork aims to create a reflection of its truth, whether or not a person can save oxygen by holding his breath and whether or not an action so small can effect the entire world.")} />
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default PopUp;