import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import StorageItem from './StorageItem'
import Grid from '@material-ui/core/Grid';
import Bandwidth from './bandwidth';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

export default function Storage(props:any){
    const {instance,itemList, setItemList,bandwidth,setBandwidth,deleteItem} = props;
    const classes = useStyles();
    const [key,setKey] = React.useState(1);
    const addNewStorageItem = (event:any) =>{
        const item = {key: key, type:"SSD",volume:"ext",capacity:"120",encryption:true,iops:"600",backup:true,remark:""};
        setItemList(itemList.concat(item));
        const tempKey= key +1;
        setKey(tempKey);
    }
    const updateItem = (item:any) =>{
      const copyItemList = itemList.map((val:any)=>{
        if(val.key === item.key){
          val=item;
        }
        return val;
      })
      setItemList(copyItemList); 
    }
    const updateBandWidth = (item:number) =>{
      const copyBandwidth = item;
      setBandwidth(copyBandwidth); 
    }

    return(
        
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <div className={classes.root}>
                {itemList.map((item:any)  => <StorageItem key={item.key} item={item} updateItem = {updateItem} deleteItem={deleteItem} />)}
                <Button variant="contained" color="primary" onClick= {addNewStorageItem}>
                    Add Volume
                </Button>
            </div>
            </Grid>
            <Grid item xs ={12}>
                <Grid item xs={4}>
                <p><b>Network Bandwidth Configuration</b></p>
                </Grid>
            </Grid>
            
            <Bandwidth instance = {instance} bandwidth = {bandwidth} setBandwidth = {setBandwidth} upDateBandWidth = {updateBandWidth}/> 
            
        </Grid>
        
    )
} 