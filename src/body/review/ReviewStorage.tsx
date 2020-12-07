import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }),
);
function GridHeader(){
    return (<><Grid item xs={2}>
           <p>type</p>
        </Grid><Grid item xs={2}>
            <p>Volume</p>
        </Grid><Grid item xs={2}>
            <p>Capacity</p>
        </Grid><Grid item xs={1}>
            <p>Encryption</p>
        </Grid><Grid item xs={2}>
            <p>IOPS</p>
        </Grid><Grid item xs={1}>
            <p>Backup Required</p>
        </Grid>
        <Grid item xs={2}>
            <p>Remarks</p>
        </Grid></>
    )
}
export default function  StoraageItem(props:any){

    const classes = useStyles();
    const{storage} = props;
    return (
        <Grid container spacing={3}>

          
            {GridHeader()}
            <Grid item xs={2}>
              
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={storage.type}
              >
                <MenuItem value={storage.type}>{storage.type}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
                <p>{storage.volume}</p>
            </Grid><Grid item xs={2}>
                <TextField id="standard-disabled" label="" value= {storage.capacity} />
            </Grid><Grid item xs={1}>
              <Checkbox
                checked={storage.encryption}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </Grid><Grid item xs={2}>
                <p>{storage.iops}</p>
            </Grid><Grid item xs={1}>
              <Checkbox
                checked={storage.backup}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField id="standard-disabled" label="rating" value= {storage.remark}/>
            </Grid>
            <Grid item xs={12}>
                <Divider/>
            </Grid>
            <hr/>    
        </Grid>
    );
}
