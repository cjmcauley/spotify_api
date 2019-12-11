import React, { Component } from "react";
import Dropdown from "react-dropdown";
import Typography from "@material-ui/core/Typography";
import "./styles.css";

const days = ["5", "10", "15", "20", "25", "30"];
const period = [
  { tag: "last 4 weeks", value: "short_term" },
  { tag: "last 6 months", value: "medium_term" },
  { tag: "all time", value: "long_term" }
];

class DropdownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTracks: "",
      selectedPeriod: ""
    };

    this._onSelectTracks = this._onSelectTracks.bind(this);
    this._onSelectPeriod = this._onSelectPeriod.bind(this);
    this.updateChoice = this.updateChoice.bind(this);
  }

  _onSelectTracks(option) {
    this.setState({ selectedTracks: option.value });
  }

  _onSelectPeriod(option) {
    this.setState({ selectedPeriod: option.value });
  }

  updateChoice() {
    this.props.handleChangeTracks(this.state.selectedTracks);
    this.props.handleChangePeriod(this.state.selectedPeriod);
  }

  render() {
    const defaultOptionTracks = this.state.selectedTracks;
    const defaultOptionPeriod = this.state.selectedPeriod;

    return (
      <>
        <div>
          <Typography>Select How Many Tracks to See</Typography>
          <Dropdown
            options={days}
            onChange={this._onSelectTracks}
            value={defaultOptionTracks}
            placeholder="select number of tracks"
          />
        </div>
        <div>
          <Typography>Select Time Scale</Typography>
          <Dropdown
            options={period}
            onChange={this._onSelectPeriod}
            value={defaultOptionPeriod}
            placeholder="select time period"
          />
        </div>
        <button onClick={this.updateChoice}>Submit</button>
      </>
    );
  }
}

export default DropdownComponent;
