import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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
export default function GeneralPurpose(props:any){
    const{data} = props;
    const classes = useStyles();
    const [cores, setCores] = React.useState('');
    const [memory, setMemory] = React.useState('');

    const handleCoreChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCores(event.target.value as string);
      };
      const handleMemoryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setMemory(event.target.value as string);
        console.log("memory",memory)
      };
    return(
        <div>
            <Grid container spacing={8}>
          
            <Grid item xs={2} sm={12}>
                 <h1>Choose Configuration - {data}</h1>
            </Grid>

            <Grid item xs={6} sm={6}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="core-label">Cores</InputLabel>
                    <Select
                    labelId="core-label"
                    id="core"
                    value={cores}
                    onChange={handleCoreChange}
                    >
                        <MenuItem value={"1"}>1 core</MenuItem>
                        <MenuItem value={"2"}>2 core</MenuItem>
                        <MenuItem value={"4"}>4 core</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6} sm={6}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="memory-label">Memory</InputLabel>
                    <Select
                    labelId="memory-label"
                    id="memory"
                    value={memory}
                    onChange={handleMemoryChange}
                    >
                        <MenuItem value={"256"}>256 MB</MenuItem>
                        <MenuItem value={"512"}>512 MB</MenuItem>
                        <MenuItem value={"1"}>1 GB</MenuItem>
                        <MenuItem value={"4"}>4 GB</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
        </div>
    );
}