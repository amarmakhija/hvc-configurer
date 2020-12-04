import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ImageTab from './tabs/Tabs';

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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }),
);

export default function Image(props:any) {
    const classes = useStyles();
    const [region, setRegion] = React.useState('');
    const[data,setData] = React.useState([{}]);
    const{costExtimate} = props;
    const dataWithWindow = [{
        title : "Linux 2 Image",
        desc : "Linux 2 comes with 5 year of support.It provide linux karnel 4.14 turned for optimal Performance.",
        radio1 : "64-bit(x86)",
        radio2 : "64-bit(ARM)"
    },
    {
        title : "Ubuntu Server 18.04 LTS",
        desc : "Linux 2 comes with 5 year of support.It provide linux karnel 4.14 turned for optimal Performance.",
        radio1 : "64-bit(x86)",
        radio2 : "64-bit(ARM)"
    },
    {
        title : "Red Hat Enterprise Linux 8",
        desc : "Linux 2 comes with 5 year of support.It provide linux karnel 4.14 turned for optimal Performance.",
        radio1 : "64-bit(x86)",
        radio2 : "64-bit(ARM)"
    },
    {
        title : "Microsoft Window Server 2019 Base",
        desc : "Microsoft comes with 5 year of support..",
        radio1 : "64-bit(x86)",
    },
    {
        title : "SUSE Linux Enterprise Server",
        desc : "Linux 2 comes with 5 year of support.It provide linux karnel 4.14 turned for optimal Performance.",
        radio1 : "64-bit(x86)",
        radio2 : "64-bit(ARM)"
    },
    ];

    const dataWithoutWindow = dataWithWindow.filter(item=>item.title!=="Microsoft Window Server 2019 Base");
    //us-east-1, us-east-2, us-west-1, india-1
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setRegion(event.target.value as string);
        if(event.target.value === 'us-east-1' || event.target.value === 'us-east-2'){
            setData(dataWithWindow);
        }else{
            setData(dataWithoutWindow);
        }
      };
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          
          <Grid item xs={6} sm={4}>
            <h1>Choose Image</h1>
          </Grid>
          <Grid item xs={6} sm={4}>
            
          </Grid>
          <Grid item xs={6} sm={4}>
          <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Region</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={region}
                onChange={handleChange}
                >
                    <MenuItem value={"us-east-1"}>us-east-1</MenuItem>
                    <MenuItem value={"us-east-2"}>us-east-2</MenuItem>
                    <MenuItem value={"us-west-1"}>us-west-1</MenuItem>
                    <MenuItem value={"india-1"}>india-1</MenuItem>
                </Select>
            </FormControl>
          </Grid>
          
        </Grid>
            <ImageTab data = {data} setData = {costExtimate}/>
      </div>
    );
}