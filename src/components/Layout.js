import React from "react";
import clsx from "clsx";
import {
  ListItems,
  SideBar,
  ProgressBar,
  NavBar,
  PaginatorButtons,
  ContentLayout,
} from "../components";
import MuiAlert from "@material-ui/lab/Alert";
import {
  Drawer,
  Typography,
  Divider,
  Grid,
  Hidden,
  Snackbar,
  Slide,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import DesignIcon from "../assets/images/icon.svg";
import { ListItemsContext } from "../contexts/listItemsContext";
import { SideBarActionsContext } from "../contexts/sideBarActionsContext";
import { DataActionsContext } from "../contexts/dataContext";
import { useStyles } from "./style.js";
function Alert(props) {
  return <MuiAlert elevation={8} variant="filled" {...props} />;
}

const Layout = (props) => {
  const context = React.useContext(ListItemsContext);
  const contextSide = React.useContext(SideBarActionsContext);
  const contextData = React.useContext(DataActionsContext);

  const classes = useStyles();
  const handleReset = () => {
    contextSide.handleDrawerClose();
    context.handleResetTopic();
  };
  const handleClose = () => {
    contextData.setNotificationState({
      ...contextData.notificationState,
      open: false,
    });
  };
  const vertical = contextData.notificationState.vertical;
  const horizontal = contextData.notificationState.horizontal;
  return (
    <Grid className={classes.root}>
      <Snackbar
        open={contextData.notificationState.open}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
        //TransitionComponent={<Slide {...props} direction="up" />}
        autoHideDuration={4000}
      >
        <Alert
          onClose={handleClose}
          severity={
            contextData.notificationState.type
              ? contextData.notificationState.type
              : "success"
          }
        >
          {contextData.notificationState.text}
        </Alert>
      </Snackbar>

      {contextData.courses && (
        <>
          <CssBaseline />
          <NavBar />
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: contextSide.open,
              [classes.drawerClose]: !contextSide.open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: contextSide.open,
                [classes.drawerClose]: !contextSide.open,
              }),
            }}
          >
            <Grid className={classes.toolbar}>
              <ProgressBar
                value={Math.ceil(
                  (context.selectedTotalSubtopic / context.totalSubtopics) * 100
                )}
              />
              {console.log(
                "bar",
                context.selectedTotalSubtopic,
                context.totalSubtopics
              )}
            </Grid>
            <Divider />
            <Grid
              container
              direction="row"
              justify={contextSide.open ? "flex-start" : "flex-end"}
              alignItems="center"
              className={classes.contentTitle}
            >
              <div style={{ cursor: "pointer" }} onClick={handleReset}>
                <Typography
                  components={"h2"}
                  variant="h6"
                  className={classes.textTitle}
                  color="primary"
                >
                  <img
                    src={DesignIcon}
                    alt="icon"
                    className={classes.iconTitle}
                  />
                  {contextSide.open && contextData.courses.nombre}
                </Typography>
              </div>
            </Grid>
            <Divider />
            <Grid
              style={
                contextSide.open ? { overflow: "auto" } : { overflow: "hidden" }
              }
            >
              <ListItems />
            </Grid>
          </Drawer>
          <Grid
            className={contextSide.openSide ? classes.main : classes.videoMain}
          >
            <ContentLayout />

            <PaginatorButtons />
          </Grid>
          <Hidden smDown>
            <SideBar />
          </Hidden>
        </>
      )}
    </Grid>
  );
};

export default Layout;
