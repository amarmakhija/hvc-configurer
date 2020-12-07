import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
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
    return (<><Grid item xs={3}>
              <p>Type</p>
          </Grid><Grid item xs={2}>
              <p>Protocol</p>
          </Grid><Grid item xs={2}>
              <p>Port Range</p>
          </Grid> <Grid item xs={2}>
              <p>Source</p>
          </Grid> <Grid item xs={3}>
              <p>Description</p>
          </Grid></>
    )
}
export default function ConfigureSecurityItem(props:any){
  const classes = useStyles();
  const[rule,setRule] = React.useState(props.item);
  const{updateItem} = props;
  const getPortRange = (type:string) =>{
    let portRange = "";
      if(type === "HTTPS"){
        portRange = "443"
      }else if(type === "SSH"){
        portRange = "22"
      }else{
        portRange = "25"
      }
      return portRange;
  }
  const handleTypeChange = (event: React.ChangeEvent<{ value: unknown}>) =>{
    const type = event.target.value as string
    const copyRule = {...rule};
    copyRule.type = event.target.value as string
    copyRule.pro = "TCP"
    copyRule.portRange = getPortRange(type);
    setRule(copyRule);
    updateItem(copyRule);
    console.log(copyRule);
  }
  const handleProtocol = (event: React.ChangeEvent<{ value: unknown}>) =>{
    const copyRule = {...rule};
    copyRule.pro = event.target.value as string
    setRule(copyRule);
    updateItem(copyRule);
    console.log(copyRule);
  }

  const handlePortRange = (event: React.ChangeEvent<{ value: unknown}>) =>{
    const copyRule = {...rule};
    copyRule.portRange = event.target.value as string
    setRule(copyRule);
    updateItem(copyRule);
    console.log(copyRule);
  }

  const handleSource = (event: React.ChangeEvent<{ value: unknown}>) =>{
    const copyRule = {...rule};
    copyRule.source = event.target.value as string
    setRule(copyRule);
    updateItem(copyRule);
    console.log(copyRule);
  }

  const handleDescription = (event: React.ChangeEvent<{ value: unknown}>) =>{
    const copyRule = {...rule};
    copyRule.des = event.target.value as string
    setRule(copyRule);
    updateItem(copyRule);
    console.log(copyRule);
  }
 
  return(
    <div>
      <Grid container spacing={3}>
            {GridHeader()}
            <Grid item xs={3}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={rule.type}
                onChange={handleTypeChange}
              >
                <MenuItem value={"HTTPS"}>HTTPS</MenuItem>
                <MenuItem value={"SSH"}>SSH</MenuItem>
                <MenuItem value={"SMTP"}>SMTP</MenuItem>
                </Select>
              </FormControl>
              </Grid><Grid item xs={2}>
              <TextField id="standard-basic" label="" value= {rule.pro} onChange={handleProtocol}/>
            </Grid><Grid item xs={2}>
              <TextField id="standard-basic" label="" value= {rule.portRange} onChange={handlePortRange}/>
            </Grid> <Grid item xs={2}>
              <TextField id="standard-basic" label="" value= {rule.source} onChange={handleSource}/>
            </Grid><Grid item xs={3}>
              <TextField id="standard-basic" label="" value= {rule.des} onChange={handleDescription}/>
          </Grid>
          </Grid>
    </div>
  )
}