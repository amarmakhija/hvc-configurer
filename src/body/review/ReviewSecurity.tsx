import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
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
    return (<><Grid item xs={3}>
              <p>Type</p>
          </Grid><Grid item xs={2}>
              <p>Protocol</p>
          </Grid><Grid item xs={2}>
              <p>Port Range</p>
          </Grid> <Grid item xs={2}>
              <p>Source</p>
          </Grid> <Grid item xs={3}>
              <p>Description</p>
          </Grid></>
    )
}
export default function ReviewSecurity(props:any){
  const classes = useStyles();
  const{rule} = props;
  return(
    <div>
      <Grid container spacing={3}>
            {GridHeader()}
            <Grid item xs={3}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={rule.type}
              >
                <MenuItem value={rule.type}>{rule.type}</MenuItem>
                </Select>
              </FormControl>
              </Grid><Grid item xs={2}>
              <TextField id="standard-disabled" label="protocol" value= {rule.pro}/>
            </Grid><Grid item xs={2}>
              <TextField id="standard-disabled" label="portRange" value= {rule.portRange}/>
            </Grid> <Grid item xs={2}>
              <TextField id="standard-disabled" label="source" value= {rule.source} />
            </Grid><Grid item xs={3}>
              <TextField id="standard-disabled" label="des" value= {rule.des} />
          </Grid>
          <Grid item xs={12}>
              <Divider/>
          </Grid>
          </Grid>
    </div>
  )
}