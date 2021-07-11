import React from "react";
import { FileComponent, MarkersComponent } from "../components";
import { AntTab, AntTabs, a11yProps, TabPanel } from "../components/Tabs";
import { Typography, makeStyles } from "@material-ui/core";
import { DataActionsContext } from "../contexts/dataContext";
import { SideBarActionsContext } from "../contexts/sideBarActionsContext";
import { ListItemsContext } from "../contexts/listItemsContext";
import DesignIcon from "../assets/images/icon.svg";

const useStyles = makeStyles((theme) => ({
  contentTabs: {
    minHeight: "400px",
    paddingBottom: "200px",
  },

  iconTitle: {
    maxWidth: 40,
    display: "inline",
    position: "absolute",
    left: -50,
    top: -10,
  },
  menuTabs: {
    marginBottom: "20px",
  },
  textTitle: {
    margin: "10px 10px 17px 50px",
    position: "relative",
    lineHeight: "27px",
  },
}));

const TabsMobile = (props) => {
  const contextSide = React.useContext(SideBarActionsContext);
  const contextData = React.useContext(DataActionsContext);
  const context = React.useContext(ListItemsContext);
  const classes = useStyles();

  return (
    <>
      <Typography
        components={"h2"}
        variant="h6"
        className={classes.textTitle}
        color="primary"
      >
        <img src={DesignIcon} alt="icon" className={classes.iconTitle} />
        {contextData.courses.nombre}
      </Typography>
      <div className={classes.root}>
        <div className={classes.contentTabs}>
          <AntTabs
            className={classes.menuTabs}
            value={contextSide.valueTab}
            onChange={contextSide.handleChange}
            aria-label="ant example"
          >
            <AntTab label="Contenido" {...a11yProps(0)} />
            {/* <AntTab label="Marcadores" {...a11yProps(1)} /> */}
            <AntTab label="Marcadores" {...a11yProps(1)} />

            <AntTab label="Archivos y Enlaces" {...a11yProps(2)} />
          </AntTabs>
          <div className={classes.tabContainer}>
            <TabPanel value={contextSide.valueTab} index={0}>
              {props.children}
            </TabPanel>
            {/* <TabPanel value={contextSide.valueTab} index={1}>
              <MarkersComponent />
            </TabPanel> */}
            <TabPanel value={contextSide.valueTab} index={1}>
              <MarkersComponent />
            </TabPanel>
            <TabPanel value={contextSide.valueTab} index={2}>
              <FileComponent />
            </TabPanel>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabsMobile;
