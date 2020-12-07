import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AllPurposeInstance from './AllPurpose';


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
function getValue(val:string){
    if(val){
      if(val==="General Purpose"){
          return 0;
      }else if(val==="Cpu Optimised"){
        return 1;
      }
      else if(val === "Storage Optimised"){
          return 2;
      }else{
          return 3;
      }
    }else{
      return 0;
    }
}
export default function Instance(props:any){
    const classes = useStyles();
    const{instance,core,memory,setCore,setMemory,setInstance} = props;
    const [value, setValue] = React.useState(getValue(instance));
    console.log(instance);
    console.log(core);
    console.log(memory);
    const handleChange = (event: any, newValue: number) => {
        setValue(newValue);
    };
    const section = {generalPurpose :{ availCore : [{key:"1",value:"1 core"},{key:"2",value:"2 core"},{key:"4",value:"4 core"}],
                            availMemory : [{key:"256MB",value:"256MB"},{key:"512MB",value:"512MB"},{key:"1GB",value:"1GB"},{key:"2GB",value:"2GB"},{key:"4GB",value:"4GB"}] 
                          },
                    cpuOptimised : {availCore : [{key:"1",value:"1 core"},{key:"8",value:"8 core"},{key:"16",value:"16 core"}],
                          availMemory : [{key:"16GB",value:"16GB"},{key:"32GB",value:"32GB"},{key:"64GB",value:"64GB"}] 
                        },
                    storageOptimised : {availCore : [{key:"1",value:"1 core"},{key:"2",value:"2 core"},{key:"8",value:"8 core"},{key:"16",value:"16 core"}],
                            availMemory : [{key:"16GB",value:"16GB"},{key:"32GB",value:"32GB"},{key:"64GB",value:"64GB"}] 
                          },
                    networkOptimised :{availCore : [{key:"1",value:"1 core"},{key:"2",value:"2 core"},{key:"4",value:"4 core"},{key:"8",value:"8 core"},{key:"16",value:"16 core"}],
                        availMemory : [{key:"256MB",value:"256MB"},{key:"512MB",value:"512MB"},{key:"1GB",value:"1GB"},{key:"2GB",value:"2GB"},{key:"4GB",value:"4GB"},{key:"16GB",value:"16GB"},{key:"32GB",value:"32GB"},{key:"64GB",value:"64GB"}] 
                      }
                    }
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs value={value} onChange={handleChange} variant="scrollable"
            scrollButtons="on"indicatorColor="primary" textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label="General Purpose" {...a11yProps(0)} />
            <Tab label="Cpu Optimised"  {...a11yProps(1)} />
            <Tab label="Storage Optimised"  {...a11yProps(2)} />
            <Tab label="Network Optimised"  {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
                {core && memory && instance && instance==="General Purpose"   ?
               <AllPurposeInstance instance ={instance} core = {core} memory = {memory} data="General Purpose" 
               setInstance = {setInstance} availCores = {section.generalPurpose.availCore} 
               availMemory = {section.generalPurpose.availMemory} setParentCore = {setCore} setParentMemory = {setMemory} />:
               <AllPurposeInstance instance ='' core = '' memory = '' data="General Purpose" 
               setInstance = {setInstance} availCores = {section.generalPurpose.availCore} 
               availMemory = {section.generalPurpose.availMemory} setParentCore = {setCore} setParentMemory = {setMemory} /> 
               }
        </TabPanel>
        <TabPanel value={value} index={1}>
        {core && memory && instance && instance==="Cpu Optimised"?
            <AllPurposeInstance instance ={instance} core = {core} memory = {memory} data="Cpu Optimised" 
            setInstance = {setInstance} availCores = {section.cpuOptimised.availCore}
             availMemory = {section.cpuOptimised.availMemory} setParentCore = {setCore} setParentMemory = {setMemory}/>:
             <AllPurposeInstance instance ='' core = '' memory = '' data="Cpu Optimised" 
            setInstance = {setInstance} availCores = {section.cpuOptimised.availCore}
             availMemory = {section.cpuOptimised.availMemory} setParentCore = {setCore} setParentMemory = {setMemory}/>}
        </TabPanel>
          <TabPanel value={value} index={2}>
          {core && memory && instance && instance==="Storage Optimised"?
              <AllPurposeInstance instance ={instance} core = {core} memory = {memory} data="Storage Optimised" 
              setInstance = {setInstance} availCores = {section.storageOptimised.availCore} 
              availMemory = {section.storageOptimised.availMemory} setParentCore = {setCore} setParentMemory = {setMemory}/>:
              <AllPurposeInstance instance ='' core = '' memory = '' data="Storage Optimised" 
              setInstance = {setInstance} availCores = {section.storageOptimised.availCore} 
              availMemory = {section.storageOptimised.availMemory} setParentCore = {setCore} setParentMemory = {setMemory}/>}
          </TabPanel>
        <TabPanel value={value} index={3}>
        {core && memory && instance && instance==="Network Optimised"?
            <AllPurposeInstance instance ={instance} core = {core} memory = {memory} data="Network Optimised" 
            setInstance = {setInstance} availCores = {section.networkOptimised.availCore} 
            availMemory = {section.networkOptimised.availMemory} setParentCore = {setCore} setParentMemory = {setMemory}/>:
            <AllPurposeInstance instance ='' core = '' memory = '' data="Network Optimised" 
            setInstance = {setInstance} availCores = {section.networkOptimised.availCore} 
            availMemory = {section.networkOptimised.availMemory} setParentCore = {setCore} setParentMemory = {setMemory}/>}
        </TabPanel>
      </div>
    );  
  
}