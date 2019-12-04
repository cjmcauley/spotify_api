import React, { Component } from "react";
import Dropdown from "react-dropdown";
import Typography from "@material-ui/core/Typography";
import "./styles.css";

class DropdownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };

    this.onSelect = this.onSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (index, value) => {
    this.props.handleChangeTracks(index, value);
    this.props.changeTopTracks();
  };

  onSelect(option) {
    this.setState({ selected: option.value });
  }

  render() {
    const defaultOption = this.state.selected;

    return (
      <div>
        <Typography>Select How Many Tracks to See</Typography>
        <Dropdown
          options={this.props.noOfTracks}
          onChange={this.onSelect}
          value={defaultOption}
          placeholder="Select an option"
        />
      </div>
    );
  }
}

export default DropdownComponent;
