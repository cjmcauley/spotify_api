import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import "./styles.css";

class DropdownComponent extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (index, value) => {
    this.props.handleChangeTracks(index, value);
    this.props.changeTopTracks();
  };

  render() {
    return (
      <div>
        <Typography id="discrete-slider" gutterBottom>
          Select How Many Tracks to See
        </Typography>
      </div>
    );
  }
}

export default DropdownComponent;
