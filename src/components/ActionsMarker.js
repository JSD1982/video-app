import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import CreateIcon from "@material-ui/icons/Create";
import Icon from "@material-ui/core/Icon";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  exampleWrapper: {
    position: "relative",
  },
  radioGroup: {
    margin: 0,
  },
  speedDial: {
    position: "absolute",
    bottom: -24,
    right: 0,
    zIndex: 5,
  },
}));

export default function ActionsVideo(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const actions = [
    {
      icon: <CreateIcon fontSize="small" />,
      name: "Crear nota de texto",
      actionClick: props.actionClickText,
    },
    {
      icon: <BookmarkIcon fontSize="small" />,
      name: "Crear marcador",
      actionClick: props.actionClickVideo,
    },
  ];
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
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.actionClick}
            />
          ))}
        </SpeedDial>
      </div>
    </div>
  );
}
