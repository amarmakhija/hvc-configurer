import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);
const exisitingSecurityGroup = [{securityName: "SG1",type:"HTTPS",protocol:"TCP",PortRange:"443",Source:"1.1.1.1",Description:"sg1"},
                                    {securityName: "SG2",type:"SSH",protocol:"TCP",PortRange:"22",Source:"2.2.2.2",Description:"sg2"},
                                    {securityName: "SG3",type:"SMTP",protocol:"TCP",PortRange:"25",Source:"3.3.3.3",Description:"sg3"},
                                    {securityName: "SG4",type:"HTTPS",protocol:"TCP",PortRange:"443",Source:"1.1.1.1",Description:"sg1"},
                                    {securityName: "SG5",type:"SSH",protocol:"TCP",PortRange:"22",Source:"2.2.2.2",Description:"sg2"},
                                    {securityName: "SG6",type:"SMTP",protocol:"TCP",PortRange:"25",Source:"3.3.3.3",Description:"sg3"},
                               ]
export default function ExistingSecurity(props:any){
    const classes = useStyles();
    const{securityName,setSecurityName,ruleList,setRuleList} = props;
    const [existingSecurityOption,setExistingSecurityOption] = React.useState('');
    const handleTypeChange = (event: React.ChangeEvent<{ value: unknown}>) =>{
        const securityName = event.target.value as string;
        setExistingSecurityOption(securityName)
        const obj = exisitingSecurityGroup.filter(item=>item.securityName === securityName)
        setSecurityName(securityName);
        setRuleList(obj);
      }
    return(
        <div>
            <Grid container spacing={3}>
                <Grid item xl={12}>Select Security Group</Grid>
                <Grid item xl={6}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        onChange={handleTypeChange}
                        value={existingSecurityOption}
                        >
                        {exisitingSecurityGroup.map((item) => (
                            <MenuItem key={item.securityName} value={item.securityName}>{item.securityName}</MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}