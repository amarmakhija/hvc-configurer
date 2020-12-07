import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    margin: {
      margin: theme.spacing(1),
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
        </Grid><Grid item xs={1}>
            <p>IOPS</p>
        </Grid><Grid item xs={1}>
            <p>Backup Required</p>
        </Grid>
        <Grid item xs={2}>
            <p>Remarks</p>
        </Grid>
        <Grid item xs={1}>
            <p>Delete</p>
        </Grid>
        </>
    )
}
export default function  StoraageItem(props:any){

    const classes = useStyles();
    const{updateItem,deleteItem} = props;
    const[storage,setStorage] = React.useState(props.item)    
    const deleteItemEvent = (event:any) =>{
      deleteItem(storage);
    }
    const handleTypeChange = (event: React.ChangeEvent<{ value: unknown}>) =>{
      const copyStorage = {...storage};
      copyStorage.type = event.target.value as string
      setStorage(copyStorage);
      updateItem(copyStorage);
      console.log(copyStorage);
    }

    const getIopsValue =(capacity:number) =>{
      let iops = 0;
      if(capacity<100){
        iops = 100;
      }else if(capacity>=100 && capacity<=500){
        iops = 500;
      }else{
        iops = 1000;
      }
      return iops;
    }
    const handleStorageCapacity = (event: React.ChangeEvent<{ value: unknown}>) =>{
      const copyStorage = {...storage};
      const capacity = event.target.value as number;
      copyStorage.capacity = capacity;
      copyStorage.iops = getIopsValue(capacity);
      setStorage(copyStorage);
      updateItem(copyStorage);
      console.log(copyStorage);
    }

    const handleRemark = (event: React.ChangeEvent<{ value: unknown}>) =>{
      const copyStorage = {...storage};
      copyStorage.remark = event.target.value as string;
      setStorage(copyStorage);
      updateItem(copyStorage);
      console.log(copyStorage);
    }
    const handleEncyrption = (event: React.ChangeEvent<HTMLInputElement>) => {
      const copyStorage = {...storage};
      copyStorage.encryption = event.target.checked;
      updateItem(copyStorage);
      setStorage(copyStorage);
    };
    const handleBackup = (event: React.ChangeEvent<HTMLInputElement>) => {
      const copyStorage = {...storage};
      copyStorage.backup = event.target.checked;
      updateItem(copyStorage);
      setStorage(copyStorage);
    };

    
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
                onChange={handleTypeChange}
              >
                <MenuItem value={"SSD"}>SSD</MenuItem>
                <MenuItem value={"magnetic disk"}>magnetic disk</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
                <p>{storage.volume}</p>
            </Grid><Grid item xs={2}>
                <TextField id="standard-basic" label="" value= {storage.capacity} onChange={handleStorageCapacity}/>
            </Grid><Grid item xs={1}>
              <Checkbox
                checked={storage.encryption}
                onChange={handleEncyrption}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </Grid><Grid item xs={1}>
                <p>{storage.iops}</p>
            </Grid><Grid item xs={1}>
              <Checkbox
                checked={storage.backup}
                onChange={handleBackup}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField id="standard-basic" label="rating" value= {storage.remark} onChange={handleRemark}/>
            </Grid>
            <Grid item xs={1}>
              <IconButton aria-label="delete" className={classes.margin} onClick={deleteItemEvent}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Grid>
            <hr/>    
        </Grid>
    );
}
