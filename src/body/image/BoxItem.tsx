import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Button } from '@material-ui/core';
import BorderAllTwoToneIcon from '@material-ui/icons/BorderAll';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
  }),
);
export default function  BoxItem(props:any){
    const [value,setValue] = React.useState(props.selectedBit);
    const {obj,setObject,setSelectedBit} = props;
    console.log(props.selectedBit);
    
    const handleRadioChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setValue(event.target.value as string);
        setSelectedBit(event.target.value as string);
      };
    return (
        <Grid container spacing={3}>
        <Grid item xs={1}>
          {obj.title?<BorderAllTwoToneIcon style={{ fontSize: 80 , color:"primary"} }/>:null}
        </Grid>

        <Grid item xs={8}>
            <h3>{obj.title}</h3>
            <h4>{obj.desc}</h4>
        </Grid>

        <Grid item xs={3}>
        <FormControl component="fieldset">
            <FormLabel component="legend"></FormLabel>
            <RadioGroup aria-label="" name="" value={value} onChange={handleRadioChange}>
                {obj.radio1 ? <FormControlLabel value={obj.radio1} control={<Radio />} label={obj.radio1} /> : null}
                {obj.radio2 ? <FormControlLabel value={obj.radio2} control={<Radio />} label={obj.radio2} /> : null}
            </RadioGroup>
            {obj.title?<Button style={{backgroundColor:'#0000FF'}}onClick = {(event) => setObject(event,obj)} >click</Button>:null}
        </FormControl>
        </Grid>
  </Grid>
    );
}
