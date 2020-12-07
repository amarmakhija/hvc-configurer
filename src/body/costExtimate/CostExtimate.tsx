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
function getImagePrice(server:string): number{
    if(!server){
      return 0;
    }
    switch(server){
        case "Linux 2 Image":
            return 243.61;
        case "Ubuntu Server 18.04 LTS":
            return 222.54;
        case "Red Hat Enterprise Linux 8":
            return 300.00;
        case "Microsoft Window Server 2019 Base":
            return 338.77;
        case "SUSE Linux Enterprise Server":
            return 200.22;
        default:
          return 0;
    }  
}
function getCpuPrice(cpu:string): number{
  if(!cpu){
    return 0;
  }
  switch(cpu){
      case "32GB":
          return 20;
      case "64GB":
          return 40;
      default:
        return 0;
  }  
}

function getCorePrice(core:string): number{
  if(!core){
    return 0;
  }
  switch(core){
      case "8 core":
          return 20;
      case "16 core":
          return 40;
      default:
          return 0;
  }  
}
function getBandWidthValue(val:number):number{
  if(val<=1){
    return 5;
  }else if(val>1 && val<=2){
    return 10;
  }else{
    return 0;
  }
}
function add(a: number, b: number,c: number,d: number,e:number): number {
  return a + b + c + d + e;
}
function getStorageValue(itemList:any):number{
  // {key:0,type:"SSD",volume:"root",capacity:"120",encryption:true,iops:"500",backup:true,remark:""
  //{key: key, type:"SSD",volume:"ext",capacity:"120",encryption:true,iops:"600",backup:true,remark:""}
  if(!itemList){
    return 0;
  }
  let sum=0;
  itemList.forEach((item:any)=>{
      if(item.volume === "ext"){
        sum += item.type === "SSD" ? 40 : 20;
      }
  })
  return sum;
}
export default function CostExtimate(props:any) {
    const classes = useStyles();
    const {data,core,memory,bandwidth,itemList} = props;
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

          <Grid item xs={12} sm={6}>
            {core?"core":null}
          </Grid>
          <Grid item xs={12} sm={6}>
            {core?core:null}
          </Grid>

          <Grid item xs={12} sm={6}>
            {memory?"memory":null}
          </Grid>
          <Grid item xs={12} sm={6}>
            {memory?memory:null}
          </Grid>
          
          <Grid item xs={12} sm={6}>
            {bandwidth?"bandwidth":null}
          </Grid>
          <Grid item xs={12} sm={6}>
            {bandwidth?bandwidth:null}
          </Grid>
          
          <Grid item xs={6} sm={6}>
            {data.title?"Price":null}
          </Grid>
          <Grid item xs={6} sm={6}>
            {data.title?"$"+ add(getImagePrice(data.title),getCorePrice(core),getCpuPrice(memory),getStorageValue(itemList),getBandWidthValue(bandwidth)) + "/mo":null}
          </Grid>
         </Grid>
      </div>
    );
}