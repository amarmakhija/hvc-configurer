import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Divider from '@material-ui/core/Divider';
import ReviewStorage from './ReviewStorage';
import ReviewSecurity from './ReviewSecurity';
import { Button } from '@material-ui/core';
import BorderAllIcon from '@material-ui/icons/BorderAll';
export default function Review(props:any){
    const {imageData,selectedBit,core,memory,instance,bandwidth,itemList,ruleList,setValue} =props;
    console.log(imageData);
    console.log(selectedBit);
    return(
        <Grid container spacing={3}>
            <Grid item xs={2}>Image</Grid>
            <Grid item xs={8}></Grid>
            <Grid item xs={2}><Button style={{backgroundColor:'#D3D3D3'}} onClick = {(event) => setValue(0)} >edit</Button></Grid>
            <Grid item xs={12}>
                  <Divider/>
            </Grid>
            <Grid item xs={1}>
            <BorderAllIcon style={{ fontSize: 80 , color:"secondary"} }/>
            </Grid>

            <Grid item xs={8}>
                <h3>{imageData.title}</h3>
                <h4>{imageData.desc}</h4>
            </Grid>

            <Grid item xs={3}>
            <FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                <RadioGroup aria-label="" name="" value={selectedBit}>
                    {imageData.radio1 ? <FormControlLabel value={imageData.radio1} control={<Radio />} label={imageData.radio1} /> : null}
                    {imageData.radio2 ? <FormControlLabel value={imageData.radio2} control={<Radio />} label={imageData.radio2} /> : null}
                </RadioGroup>
            </FormControl>
            </Grid>
            <Grid item xs={12}>
                <Divider/>
            </Grid>
            <Grid item xs={2}>Instance</Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}><Button style={{backgroundColor:'#D3D3D3'}} onClick = {(event) => setValue(1)} >edit</Button></Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={12}>
                <Divider/>
            </Grid>
            
            <Grid item xs={3}>{instance}</Grid>
            <Grid item xs={5}></Grid>
            <Grid item xs={4}></Grid>

            <Grid item xs={2}>Core</Grid>
            <Grid item xs={2}>{core}</Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}></Grid>

            <Grid item xs={2}>Memory</Grid>
            <Grid item xs={2}>{memory}</Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}></Grid>

            <Grid item xs={12}>
                <Divider/>
            </Grid>

            <Grid item xs={2}>BandWidth</Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}><Button style={{backgroundColor:'#D3D3D3'}} onClick = {(event) => setValue(2)} >edit</Button></Grid>
            <Grid item xs={6}></Grid>

            <Grid item xs={2}>{bandwidth}TB/Month</Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={4}></Grid>
            
            <Grid item xs={12}>
                <Divider/>
            </Grid>

            <Grid item xs={2}>Storage</Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}><Button style={{backgroundColor:'#D3D3D3'}} onClick = {(event) => setValue(2)} >edit</Button></Grid>
            <Grid item xs={6}></Grid>

            <Grid item xs={12}>
                <Divider/>
            </Grid>
            {itemList.map((item:any)  => <ReviewStorage key= {item.key} storage={item}/>)}
            <Grid item xs={2}>Security</Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}><Button style={{backgroundColor:'#D3D3D3'}} onClick = {(event) => setValue(3)} >edit</Button></Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={12}>
                <Divider/>
            </Grid>
            {ruleList.map((item:any) => <ReviewSecurity key={item.key} rule={item}/>)}

            <Grid item xs={4}>
            </Grid>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}>
                 <Button style={{backgroundColor:'#7CFC00'}} onClick={() => { alert('Instance Launched') }}>Launch</Button>
            </Grid>
        </Grid>
    )
}