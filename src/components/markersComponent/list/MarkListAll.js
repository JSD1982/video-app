import React from "react";
import {
  Typography,
  IconButton,
  Grid,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Card,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { DataActionsContext } from "../../../contexts/dataContext";
import { ListItemsContext } from "../../../contexts/listItemsContext";
import { SideBarActionsContext } from "../../../contexts/sideBarActionsContext";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  descriptionMark: {
    overflowWrap: "break-word",
    cursor: "pointer",
    lineHeight: "18px",
    position: "relative",
    paddingLeft: "0px",
    marginTop: "8px",
    marginBottom: "4px",
  },
  cardItem: {
    padding: "0px 5px 0px 10px",
    marginBottom: 5,
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
const MarkListAll = (props) => {
  const classes = useStyles();

  const contextData = React.useContext(DataActionsContext);
  const context = React.useContext(ListItemsContext);
  const contextSide = React.useContext(SideBarActionsContext);

  const handlehandleMarker = (subitemPosition, itemPosition, time, index) => {
    contextSide.setAllMarkersCheck({ checked: false });
    context.setSelectedTopic(itemPosition);
    context.setSelectedSubtopic(subitemPosition);
    console.log("sub", itemPosition, subitemPosition);
    context.setActiveVideo(true);
    contextSide.setActiveMarkerList(index);
    contextSide.setMarkTimePosition({ time: time });
  };
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

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    const results = props.markers.filter((person) =>
      person.contenido.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <>
      <FormControl>
        <InputLabel htmlFor="standard-adornment-password" size="small">
          Buscar marcador
        </InputLabel>
        <Input
          id="standard-adornment-password"
          type={"text"}
          value={searchTerm}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>

      <div className="mt-4">
        {contextData.loadingBar ? (
          <>
            <Skeleton height={50} />
            <Skeleton height={50} />
          </>
        ) : (
          <div className="fadeIn-animate">
            {props.markers && (
              <>
                {props.markers.length >= 0 ? (
                  searchResults.map((marker, index) => (
                    <Card
                      key={marker.id}
                      className="mb-1"
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
                                <Grid item>
                                  <IconButton
                                    onClick={() =>
                                      handlehandleMarker(
                                        marker.subitemPosition,
                                        marker.itemPosition,
                                        marker.time,
                                        index
                                      )
                                    }
                                    className="button muted-button mt-2"
                                  >
                                    <VisibilityIcon fontSize="small" />
                                  </IconButton>
                                </Grid>
                              </Grid>
                            </>
                          )}
                        </>
                      ) : (
                        <div key={marker.id}>
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
                                    {marker.datetime} {" - "}
                                    {marker.nombreItem}
                                  </Typography>
                                </Grid>

                                <Grid item>
                                  <IconButton
                                    onClick={() =>
                                      handlehandleMarker(
                                        marker.subitemPosition,
                                        marker.itemPosition
                                      )
                                    }
                                    className="button muted-button"
                                  >
                                    <VisibilityIcon fontSize="small" />
                                  </IconButton>
                                </Grid>
                              </Grid>
                            </>
                          )}
                        </div>
                      )}
                    </Card>
                  ))
                ) : (
                  <p>Lista de notas vacia</p>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default MarkListAll;
