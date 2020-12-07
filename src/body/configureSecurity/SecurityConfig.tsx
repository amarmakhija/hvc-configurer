import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ConfigureSecurityItem from './ConfigureSecurityItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);
export default function SecurityConfig(props:any){
    const classes = useStyles();
    const{securityName,setSecurityName,ruleList,setRuleList} = props;
    const[key,setKey] = React.useState(1);
    const addNewStorageItem = (event:any) =>{
        const item = {key:key,type:"",pro:"",portRange:"",source:"",des:""}
        setRuleList(ruleList.concat(item));
        const val = key+1;
        setKey(val);
    }
    const handleSecurityName = (event: React.ChangeEvent<{ value: unknown}>) =>{
        const name = event.target.value as string;
        setSecurityName(name)
        console.log(name);
      }
      const updateItem = (item:any) =>{
        const copyItemList = ruleList.map((val:any)=>{
          if(val.key === item.key){
            val=item;
          }
          return val;
        })
        setRuleList(copyItemList); 
      }
    return(
        <div>
            <Grid container spacing={3}>
            <Grid item xs={12}>
                New Security Group
            </Grid>
            <Grid item xs={12}>
              <TextField id="standard-basic" label="" value= {securityName} onChange={handleSecurityName}/>
            </Grid>
                <Grid item xs={12}>
                <div className={classes.root}>
                    {ruleList.map((val:any)  => <ConfigureSecurityItem key={val.key} item={val} updateItem ={updateItem}/>)}
                    <Button variant="contained" color="primary" onClick= {addNewStorageItem}>
                        Add Rule
                    </Button>
                </div>
                </Grid>
            </Grid>
        </div>
    )

}