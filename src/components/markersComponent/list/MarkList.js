import React from "react";
import {
  Typography,
  IconButton,
  Grid,
  CardActionArea,
  Card,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { SideBarActionsContext } from "../../../contexts/sideBarActionsContext";
import { DataActionsContext } from "../../../contexts/dataContext";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  summaryAcordion: {
    margin: "0",
  },
  heading: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: "100",
  },
  cardItem: {
    padding: "0px 5px 0px 10px",
    marginBottom: 5,
    border: "none",
  },
  cardItemActive: {
    padding: "0px 5px 0px 10px",
    marginBottom: 5,
    border: "1px solid" + theme.palette.primary.main,
  },
  descriptionMark: {
    overflowWrap: "break-word",
    cursor: "pointer",
    lineHeight: "18px",
    position: "relative",
    paddingLeft: "0px",
    marginTop: "8px",
    marginBottom: "4px",
  },
  ContentDescriptionMark: {
    width: "85%",
  },
  timeText: {
    position: "relative",
    top: "-3px",
    opacity: 0.7,
  },
}));
const MarkList = (props) => {
  const classes = useStyles();
  const contextSide = React.useContext(SideBarActionsContext);
  const contextData = React.useContext(DataActionsContext);
  function secondsToHms(d) {
    d = Number(d);

    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    return (
      ("0" + h).slice(-2) +
      ":" +
      ("0" + m).slice(-2) +
      ":" +
      ("0" + s).slice(-2)
    );
  }

  return (
    <>
      <div className="mt-4" className={classes.root}>
        {contextData.loadingBar === true ? (
          <>
            <Skeleton height={50} />
            <Skeleton height={50} />
          </>
        ) : (
          <>
            {props.markers && (
              <>
                {props.markers.length > 0 ? (
                  props.markers.map((marker, index) => (
                    <CardActionArea>
                      <Card
                        key={marker.id}
                        onClick={() =>
                          marker.typenoteId === "video"
                            ? contextSide.handleMarkList(index, marker.time)
                            : null
                        }
                        className={classes.cardItem}
                      >
                        {marker.typenoteId === "video" ? (
                          <>
                            {props.markerAction && (
                              <>
                                <Grid
                                  container
                                  direction="row"
                                  justify="space-between"
                                  alignItems="center"
                                  className="mt-1 mb-1"
                                >
                                  <Grid
                                    item
                                    className={classes.ContentDescriptionMark}
                                  >
                                    <Typography
                                      variant="body2"
                                      className={classes.descriptionMark}
                                    >
                                      {marker.contenido}
                                    </Typography>
                                    <Typography
                                      variant="caption"
                                      className={classes.timeText}
                                    >
                                      video ({secondsToHms(marker.time)}){" - "}
                                      {marker.nombreItem}
                                    </Typography>
                                  </Grid>

                                  <Grid item className="mt-2">
                                    <IconButton
                                      onClick={() => {
                                        props.editRow(marker, marker.id);
                                      }}
                                      className="button muted-button"
                                    >
                                      <EditIcon fontSize="small" />
                                    </IconButton>
                                  </Grid>
                                </Grid>
                              </>
                            )}
                          </>
                        ) : (
                          <>
                            {props.noteAction && (
                              <>
                                <Grid
                                  container
                                  direction="row"
                                  justify="space-between"
                                  alignItems="center"
                                  className="mt-1 mb-1"
                                >
                                  <Grid
                                    item
                                    className={classes.ContentDescriptionMark}
                                  >
                                    <Typography
                                      variant="body2"
                                      className={classes.descriptionMark}
                                    >
                                      {marker.contenido}
                                    </Typography>
                                    <Typography
                                      variant={"caption"}
                                      className={classes.timeText}
                                    >
                                      {marker.datetime}
                                      {" - "}
                                      {marker.nombreItem}
                                    </Typography>
                                  </Grid>

                                  <Grid item>
                                    <IconButton
                                      onClick={() => {
                                        props.editRow(marker, marker.id);
                                      }}
                                      className="button muted-button"
                                    >
                                      <EditIcon fontSize="small" />
                                    </IconButton>
                                  </Grid>
                                </Grid>
                              </>
                            )}
                          </>
                        )}
                      </Card>
                    </CardActionArea>
                  ))
                ) : (
                  <p>Agregue una nota!</p>
                )}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};
export default MarkList;
