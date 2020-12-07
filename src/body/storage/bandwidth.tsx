import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 300,
    },
    margin: {
      height: theme.spacing(3),
    },
  }),
);

const bandwitdth = [
    {
      value: 0.5,
      label: '512 GB',
    },
    {
      value: 1,
      label: '1 TB',
    },
    {
      value: 2,
      label: '2 TB',
    },
  ];
export default function Bandwidth(props:any){
    const classes = useStyles();
    const {instance,bandwidth,setBandwidth,upDateBandWidth} = props;
    function valuetext(value: number) {
        setBandwidth(value as number);
        upDateBandWidth(value as number);
        console.log(bandwidth);
        return `${value}`;
      }
      console.log(bandwidth);
    return(
    <div className={classes.root}>
      <Typography id="discrete-slider-custom" gutterBottom>
        Outbound Traffic
      </Typography>
      <Slider
        defaultValue={0.5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={0.5}
        valueLabelDisplay="auto"
        marks = {bandwitdth}
        min = {0.5}
        max = { instance === "Network Optimised" ? 1 :2}
      />
    </div>
    )
}