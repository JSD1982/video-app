import React from "react";
import {
  Typography,
  IconButton,
  Grid,
  Divider,
  Fab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
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
                    <div key={marker.id}>
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
                                    onClick={() =>
                                      contextSide.handleMarkList(
                                        index,
                                        marker.time
                                      )
                                    }
                                  >
                                    {/* <TurnedInIcon
                                    color={
                                      contextSide.activeMarkerList === index
                                        ? "primary"
                                        : "secondary"
                                    }
                                    size="small"
                                    className={classes.iconMark}
                                  /> */}
                                    {marker.contenido}
                                  </Typography>
                                  <Typography
                                    variant="caption"
                                    className={classes.timeText}
                                  >
                                    {secondsToHms(marker.time)}
                                    {" - "}
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

                              <Divider />
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          {props.noteAction && (
                            <>
                              {/* <Grid
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
                              </Grid> */}
                              <Accordion>
                                <AccordionSummary
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                  className={classes.summaryAcordion}
                                >
                                  <Grid
                                    container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center"
                                  >
                                    <div>
                                      <Typography
                                        variant="body2"
                                        className={classes.descriptionMark}
                                      >
                                        Nota 1 - {marker.nombreItem}
                                      </Typography>
                                      <Typography
                                        variant={"caption"}
                                        className={classes.timeText}
                                      >
                                        {marker.datetime}
                                      </Typography>
                                    </div>

                                    <IconButton
                                      onClick={() => {
                                        props.editRow(marker, marker.id);
                                      }}
                                      className="button muted-button"
                                    >
                                      <EditIcon style={{ fontSize: 19 }} />
                                    </IconButton>
                                  </Grid>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Typography>{marker.contenido}</Typography>
                                </AccordionDetails>
                              </Accordion>
                              <Divider />
                            </>
                          )}
                        </>
                      )}
                    </div>
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
