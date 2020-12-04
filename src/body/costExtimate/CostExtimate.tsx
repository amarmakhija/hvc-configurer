import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);
function getPrice(server:String){
    switch(server){
        case "Linux 2 Image":
            return "243.61";
        case "Ubuntu Server 18.04 LTS":
            return "222.54";
        case "Red Hat Enterprise Linux 8":
            return "300.00";
        case "Microsoft Window Server 2019 Base":
            return "338.77";
        case "SUSE Linux Enterprise Server":
            return "200.22";
    }
    
}
export default function CostExtimate(props:any) {
    const classes = useStyles();
    const {data} = props;
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
            <p>Cost Extimation:</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            {data.title?"server":null}
          </Grid>
          <Grid item xs={12} sm={6}>
            {data.title?data.title:null}
          </Grid>
          <Grid item xs={6} sm={6}>
            {data.title?"Price":null}
          </Grid>
          <Grid item xs={6} sm={6}>
            {data.title?"$"+getPrice(data.title)+"/mo":null}
          </Grid>
         </Grid>
      </div>
    );
}