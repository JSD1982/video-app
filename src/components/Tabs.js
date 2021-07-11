import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Tab, Tabs, Typography} from '@material-ui/core';

export const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    '&:hover': {
      color:  theme.palette.primary.main,
      opacity: 1,
    },
    '&$selected': {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color:  theme.palette.primary.main,
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

export const AntTabs = withStyles((theme) => ({
  root: {
    borderBottom: '1px solid #e8e8e8',
    minWidth:'400px'
  },
  indicator: {
    backgroundColor:  theme.palette.primary.main,
  },
}))(Tabs);
export const a11yProps =(index) => {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

export const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (

        <Typography>{children}</Typography>

      )}
    </div>
  );
}
