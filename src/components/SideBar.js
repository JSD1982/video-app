import React from "react";
import { FileComponent, MarkersComponent } from "../components";
import { AntTab, AntTabs, a11yProps, TabPanel } from "./Tabs";
import { Typography, makeStyles } from "@material-ui/core";
import ResizePanel from "react-resize-panel";
import { SideBarActionsContext } from "../contexts/sideBarActionsContext";
import { DataActionsContext } from "../contexts/dataContext";
import { ListItemsContext } from "../contexts/listItemsContext";
import DesignIcon from "../assets/images/icon.svg";
import { useResizeDetector } from "react-resize-detector";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  contentTabs: {
    backgroundColor: theme.palette.background.paper,
    minHeight: "400px",
  },
  tabContainer: {
    padding: "20px 20px 40px 20px",
  },
  iconTitle: {
    maxWidth: 40,
    display: "inline",
    marginRight: 5,
    position: "absolute",
    left: 0,
    top: 11,
  },
  textTitle: {
    padding: "20px 20px 20px 48px",
    position: "relative",
    lineHeight: "24px",
  },
}));

const SideBar = () => {
  const contextSide = React.useContext(SideBarActionsContext);
  const contextData = React.useContext(DataActionsContext);
  const context = React.useContext(ListItemsContext);
  const classes = useStyles();
  const { width = 300, ref } = useResizeDetector();

  React.useEffect(() => {
    if (width < 200 && width != 0) {
      contextSide.setOpenSide(false);
    }
  }, [contextSide.setOpenSide, width]);

  return (
    <>
      {contextSide.openSide && (
        <ResizePanel direction="w" style={{ width: "100px" }}>
          <div
            className={"panel sidebar sidebar-right sidebar-right__active"}
            ref={ref}
          >
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
                  <AntTab label="Marcadores" {...a11yProps(0)} />

                  <AntTab label="Archivos" {...a11yProps(1)} />
                </AntTabs>
                <div className={classes.tabContainer}>
                  <TabPanel value={contextSide.valueTab} index={0}>
                    <MarkersComponent />
                  </TabPanel>

                  <TabPanel value={contextSide.valueTab} index={1}>
                    <FileComponent />
                  </TabPanel>
                </div>
              </div>
            </div>
          </div>
        </ResizePanel>
      )}
    </>
  );
};

export default SideBar;
