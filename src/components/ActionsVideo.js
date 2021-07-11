import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SpeedDial from "@material-ui/lab/SpeedDial";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  exampleWrapper: {
    position: "relative",
  },
  radioGroup: {
    margin: theme.spacing(1, 0),
  },
  speedDial: {
    position: "absolute",
    "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
      bottom: 10,
      right: 13,
      zIndex: 1000,
    },
    "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
}));

export default function ActionsVideo(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseIcon = () => {
    setOpen(false);
    props.handleCreate();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <div className={classes.exampleWrapper}>
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          hidden={hidden}
          fontSize="small"
          icon={<BookmarkIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          tooltipTitle="crear marcador"
          onClick={handleCloseIcon}
        ></SpeedDial>
      </div>
    </div>
  );
}
