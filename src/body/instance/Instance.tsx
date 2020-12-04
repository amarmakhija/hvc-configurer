import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GeneralPurpose from './GeneralPurpose';


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

export default function Instance(){
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
    };
  
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
            <GeneralPurpose data="General Purpose"/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <GeneralPurpose data="Cpu Optimised"/>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <GeneralPurpose data="Storage Optimised"/>
        </TabPanel>
        <TabPanel value={value} index={3}>
            <GeneralPurpose data="Network Optimised"/>
        </TabPanel>
      </div>
    );  
  
}