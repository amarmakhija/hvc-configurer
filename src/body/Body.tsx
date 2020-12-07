import React, { useEffect,useState,useRef } from 'react';
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
    const[core,setCore] = React.useState('');
    const[memory,setMemory] = React.useState('');
    const[instance,setInstance] = React.useState('');
    const[itemList,setItemList] = React.useState([{key:0,type:"SSD",volume:"root",capacity:"120",encryption:true,iops:"500",backup:true,remark:""}])
    const[bandwidth,setBandwidth] = React.useState(0);
    const [securityName,setSecurityName] = React.useState('');
    const[ruleList,setRuleList] = React.useState([{key:0,type:"",pro:"",portRange:"",source:"",des:""}]);
    const setExtimate = (event:any,obj:any) =>{
        setCostimate(obj);
    }
    const deleteItem = (item:any) =>{
      const copyItemList = itemList.filter((val:any) => val.key !== item.key);
      setItemList(copyItemList)
      console.log("itemList",itemList)
      console.log(item);
    }

    return (
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper} style={{ backgroundColor: '#DCDCDC'}} ><Image imageData={costExtimate}
          core = {core} memory = {memory} 
           costExtimate = {setExtimate} setCore = {setCore} setMemory = {setMemory} 
           instance ={instance} setInstance = {setInstance} itemList = {itemList} setItemList = {setItemList}
           bandwidth = {bandwidth} setBandwidth = {setBandwidth} securityName = {securityName} 
           setSecurityName={setSecurityName} ruleList = {ruleList} setRuleList={setRuleList} deleteItem={deleteItem}/></Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}><CostExtimate data={costExtimate} core ={core} memory={ memory}  bandwidth= {bandwidth} itemList={itemList} /></Paper>
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>   
    )
}
