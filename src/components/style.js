import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 320;
const drawerWidthXs = "100%";
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
  },

  drawer: {
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    [theme.breakpoints.down("xs")]: {
      width: drawerWidthXs,
    },
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    [theme.breakpoints.down("sm")]: {
      width: "110px",
    },
    width: "180px",
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: "-110px",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 2),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  main: {
    height: "100vh",
    width: "5000px",
    //overflow: "auto",
    flexGrow: 1,
    position: "relative",
  },
  videoMain: {
    height: "100vh",
    width: "5000px",
    overflow: "auto",
    flexGrow: 1,
    position: "relative",
    paddingBottom: 50,
  },
  iconTitle: {
    maxWidth: 40,
    display: "inline",
    margin: "0 5px 0 0",
    position: "absolute",
    left: 10,
    top: 17,
  },
  textTitle: {
    lineHeight: "24px",
    fontSize: "18px",
  },
  contentTitle: {
    padding: "25px 11px 16px 60px",
    whiteSpace: "initial",
    position: "relative",
  },
  videoWrapper: {
    position: "relative",
    paddingBottom: "56.25%",
    height: 0,
  },
  videoWrapperFullWidth: {
    position: "relative",
    paddingBottom: "43.25%",
    height: 0,
  },
}));
