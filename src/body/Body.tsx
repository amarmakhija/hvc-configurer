import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from './image/Image';
import CostExtimate from './costExtimate/CostExtimate';

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
//<Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
export default function Body() {
    const classes = useStyles();
    const[costExtimate,setCostimate] = React.useState({});
    const setExtimate = (event:any,obj:any) =>{
        setCostimate(obj);
    }
    return (
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper} style={{ backgroundColor: '#DCDCDC'}} ><Image costExtimate = {setExtimate} /></Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}><CostExtimate data={costExtimate}/></Paper>
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>   
    )
}
