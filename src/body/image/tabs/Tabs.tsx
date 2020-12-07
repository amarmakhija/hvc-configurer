import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CustomCard from '../box';
import Instance from '../../instance/Instance';
import Storage from '../../storage/Storage';
import ConfigureSecurity from '../../configureSecurity/ConfigureSecurity';
import Review from '../../review/Review';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ImageTab(props:any) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const[selectedBit,setSelectedBit] = React.useState('')
  const [securityGroup,setSecurityGroup] = React.useState('');
  const {imageData,core,memory,data,setData,setCore,setMemory,
    instance,setInstance,itemList,setItemList,
    bandwidth,setBandwidth,securityName,
    setSecurityName,ruleList,setRuleList,deleteItem} = props;
  console.log(imageData);
  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange} variant="scrollable"
          scrollButtons="on"indicatorColor="primary" textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Choose Image" {...a11yProps(0)} />
          <Tab label="Choose Instance"  {...a11yProps(1)} />
          <Tab label="Choose Storage and Network"  {...a11yProps(2)} />
          <Tab label="Configure Security"  {...a11yProps(3)} />
          <Tab label="Review and Lunch"  {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <CustomCard data={data} setData = {setData} imageData={imageData} selectedBit = {selectedBit} setSelectedBit = {setSelectedBit}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Instance instance ={instance} core = {core} memory = {memory} setCore = {setCore} setMemory = {setMemory} setInstance = {setInstance} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Storage instance ={instance} itemList = {itemList} setItemList = {setItemList} bandwidth = {bandwidth} setBandwidth = {setBandwidth} deleteItem={deleteItem}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ConfigureSecurity securityName = {securityName} setSecurityName={setSecurityName} ruleList = {ruleList} 
        setRuleList={setRuleList}  securityGroup={securityGroup} setSecurityGroup={setSecurityGroup} />
      </TabPanel>
      <TabPanel value={value} index={4}> 
           <Review imageData = {imageData} selectedBit = {selectedBit} core = {core} memory = {memory} instance= {instance}
                    bandwidth = {bandwidth} itemList = {itemList} securityName = {securityName} ruleList = {ruleList}
                    setValue ={setValue}
           />
      </TabPanel>
    </div>
  );
}