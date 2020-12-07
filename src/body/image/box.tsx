import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import BoxItem from './BoxItem'

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



export default function CustomCard(props:any){

    const classes = useStyles();
    const {data,setData,selectedBit,setSelectedBit,imageData} =props;        
    console.log("imageData",imageData);
    return (
        <Box color="text.primary">
            <div className={classes.root}>
                {data.map((item:any)=>{
                  return imageData && imageData.title && item.title ===imageData.title ?
                  (<BoxItem obj = {item} setObject= {setData} selectedBit = {selectedBit} setSelectedBit = {setSelectedBit} />)
                  :(<BoxItem obj = {item} setObject= {setData} selectedBit ='' setSelectedBit = {setSelectedBit} />)
                })}
             </div>
        </Box>
    );
}