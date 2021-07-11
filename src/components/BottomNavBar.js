import React from "react";
import { IconButton } from "@material-ui/core";
import {
  Link,
  Print,
  RateReview,
  ChevronLeft,
  ChevronRight,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  bottomBar: {
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    alignItems: "center",
    bottom: 0,
    position: "fixed",
    width: "100%",
    backgroundColor: "#fff",
    padding: "10px 30px",
    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
    marginLeft: "-26px",
  },
  pagination: {
    position: "fixed",
    right: "46px",
  },
}));
const BottomNavBar = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.bottomBar}>
        <div>
          <IconButton
            color="inherit"
            onClick={props.handleCommentsOpen}
            edge="start"
          >
            <RateReview />
          </IconButton>
        </div>
        <div className={classes.pagination}>
          <IconButton className="mr-2" color="inherit" edge="start" disabled>
            {" "}
            <ChevronLeft fontSize="large" />
          </IconButton>
          <IconButton color="inherit" edge="start">
            <ChevronRight fontSize="large" />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default BottomNavBar;
