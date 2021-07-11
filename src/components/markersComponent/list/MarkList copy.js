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
  content: {
    "&$expanded": {
      margin: 0,
    },
  },
  expanded: {
    margin: "0 auto",
  },
  borderExpand: {
    border: "1px solid" + theme.palette.primary.main,
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
  const [expanded, setExpanded] = React.useState(false);
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
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
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
                            <div className="mb-1">
                              <Accordion
                                className={
                                  expanded === marker.id && classes.borderExpand
                                }
                                expanded={expanded === marker.id}
                                onChange={handleChange(marker.id)}
                              >
                                <AccordionSummary
                                  onClick={() =>
                                    contextSide.handleMarkList(
                                      index,
                                      marker.time
                                    )
                                  }
                                  classes={{
                                    content: classes.content,
                                    expanded: classes.expanded,
                                  }}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  <Grid
                                    container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center"
                                  >
                                    <div
                                      className={classes.ContentDescriptionMark}
                                    >
                                      <Typography
                                        variant="body2"
                                        className={classes.descriptionMark}
                                      >
                                        Marcador {marker.id} -{" "}
                                        {marker.nombreItem}
                                      </Typography>
                                      <Typography
                                        variant={"caption"}
                                        className={classes.timeText}
                                      >
                                        {marker.time}
                                      </Typography>
                                    </div>

                                    <IconButton
                                      onClick={() => {
                                        props.editRow(marker, marker.id);
                                      }}
                                      className="button muted-button"
                                    >
                                      <EditIcon style={{ fontSize: 18 }} />
                                    </IconButton>
                                  </Grid>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Typography variant={"body2"}>
                                    {marker.contenido}
                                  </Typography>
                                </AccordionDetails>
                              </Accordion>
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          {props.noteAction && (
                            <div className="mb-1">
                              <Accordion
                                expanded={expanded === marker.id}
                                onChange={handleChange(marker.id)}
                              >
                                <AccordionSummary
                                  classes={{
                                    content: classes.content,
                                    expanded: classes.expanded,
                                  }}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  <Grid
                                    container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center"
                                  >
                                    <div
                                      className={classes.ContentDescriptionMark}
                                    >
                                      <Typography
                                        variant="body2"
                                        className={classes.descriptionMark}
                                      >
                                        Marcador {marker.id} -{" "}
                                        {marker.nombreItem}
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
                                      <EditIcon style={{ fontSize: 18 }} />
                                    </IconButton>
                                  </Grid>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Typography variant={"body2"}>
                                    {marker.contenido}
                                  </Typography>
                                </AccordionDetails>
                              </Accordion>
                            </div>
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
