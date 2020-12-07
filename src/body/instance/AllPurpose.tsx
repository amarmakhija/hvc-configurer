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

export default function AllPurposeInstance(props:any){
    const{data,setInstance,availCores,availMemory,setParentCore,setParentMemory} = props;
    setInstance(data);
    const classes = useStyles();
    const [cores, setCores] = React.useState(props.core);
    const [memory, setMemory] = React.useState(props.memory);

    const handleCoreChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCores(event.target.value as string);
        setParentCore(event.target.value as string)
      };
      const handleMemoryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setMemory(event.target.value as string);
        setParentMemory(event.target.value as string)
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
                    {availCores.map((item:any) =>(
                        <MenuItem key={item.key} value={item.value}>{item.value}</MenuItem>
                    ))}
                        
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
                      {availMemory.map((item:any) =>(
                        <MenuItem key={item.key} value={item.value}>{item.value}</MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
        </div>
    );
}