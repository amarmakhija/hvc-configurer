import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import ExistingSecurity from './ExistingSecurity';
import SecurityConfig from './SecurityConfig';

export default function ConfigureSecurity(props:any){
    const {securityName,setSecurityName,ruleList,setRuleList,securityGroup,setSecurityGroup} = props;
    const handleSecurityGroupChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSecurityGroup(event.target.value as string);
        console.log(event.target.value);
      };
    return (

        <Grid container spacing={3}>
            <FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                <RadioGroup aria-label="" name="" value={securityGroup} onChange={handleSecurityGroupChange}>
                    <Grid item xl={12} xs={12}>
                        <FormControlLabel value="Upload New Security Group" control={<Radio />} label="Upload New Security Group"/> 
                    </Grid>
                    <Grid item xl={12} xs={12}></Grid>
                    <Grid item xl={12} xs={12}>
                        <FormControlLabel value="Select Existing Security Group" control={<Radio />} label="Select Existing Security Group" />
                    </Grid> 
                </RadioGroup>
             
                <Grid item xl={12}></Grid>
            <Grid item xl={12}>
                   {securityGroup === "Select Existing Security Group" ?
                        <ExistingSecurity securityName = {securityName} 
                        setSecurityName={setSecurityName} ruleList = {ruleList} setRuleList={setRuleList} /> 
                    :
                   securityGroup ==="Upload New Security Group"  ?
                        <SecurityConfig securityName = {securityName} 
                        setSecurityName={setSecurityName} ruleList = {ruleList} setRuleList={setRuleList} />
                    :null
                    }
                       
            </Grid>
             </FormControl>
        </Grid>
    )
}