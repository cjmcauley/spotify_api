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
      selected: ""
    };

    this._onSelect = this._onSelect.bind(this);
  }

  _onSelect(option) {
    this.setState({ selected: option.value });
    this.props.handleChangeTracks(this.state.selected);
    this.props.changeTopTracks();
  }

  render() {
    const defaultOption = this.state.selected;

    return (
      <>
        <div>
          <Typography>Select How Many Tracks to See</Typography>
          <Dropdown
            options={days}
            onChange={this._onSelect}
            value={defaultOption}
            placeholder="5"
          />
        </div>
        <div>
          <Typography>Select Time Scale</Typography>
          <Dropdown
            options={period}
            onChange={this._onSelect}
            value={defaultOption}
            placeholder="5"
          />
        </div>
      </>
    );
  }
}

export default DropdownComponent;
