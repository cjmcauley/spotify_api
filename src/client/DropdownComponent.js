import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import './styles.css'

const DropdownComponent = (props) => {


      const useStyles = makeStyles(theme => ({
        root: {
          width: 300,
        },
        margin: {
          height: theme.spacing(3),
        },
      }));
      
      function valuetext(value) {
        return `${value}`;
      }
      
      const classes = useStyles();

      return(
        <div className={classes.root}>
         <Typography id="discrete-slider" gutterBottom>
        Select How Many Tracks to See
      </Typography>
        <Slider
        defaultValue={5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        step={5}
        marks
        min={5}
        max={50}
        valueLabelDisplay="on"
      />
        </div>
      )
    }

export default DropdownComponent;