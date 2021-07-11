import React, { useState, Fragment } from "react";
import AddMarkerForm from "./forms/AddMarkForm";
import EditMarkerForm from "./forms/EditMarkForm";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Switch,
  FormControlLabel,
  Fab,
} from "@material-ui/core";
import { ActionsMarker } from "../../components";
import MarkList from "./list/MarkList";
import MarkListAll from "./list/MarkListAll";
import { ListItemsContext } from "../../contexts/listItemsContext";
import { DataActionsContext } from "../../contexts/dataContext";
import { SideBarActionsContext } from "../../contexts/sideBarActionsContext";
import AddIcon from "@material-ui/icons/Add";
const StyledButton = withStyles({
  root: {
    marginRight: 8,
  },
  label: {
    textTransform: "capitalize",
    padding: "3px 8px",
    fontSize: "13px",
  },
})(Fab);
const MarkersComponent = () => {
  const contextData = React.useContext(DataActionsContext);
  const context = React.useContext(ListItemsContext);
  const contextSide = React.useContext(SideBarActionsContext);

  const initialFormState = { id: null, contenido: "", time: "" };

  // Setting state
  //const [marker, setMarker] = useState();
  const [currentMarker, setCurrentMarker] = useState(initialFormState);
  const [editing, setEditing] = useState(false);
  const [actionFormAdd, setActionFromAdd] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [noteAction, setNoteAction] = React.useState(true);
  const [markerAction, setMarkerAction] = React.useState(true);
  contextData.setSubtopicId(
    contextData.topics &&
      contextData.topics[context.selectedTopic].subtemas[
        context.selectedSubtopic
      ].id
  );

  // CRUD operations
  const AddMarker = (marker) => {
    marker.id = marker && marker.length + 1;
    contextData.setAddNotes({
      ...marker,
      contenido: marker.contenido,
      id: marker.id,
      time: marker.time,
      subitemPosition: context.selectedSubtopic,
      itemPosition: context.selectedTopic,
      typenoteId: contextSide.typenoteId,
      datetime: marker.datetime,
      nombreItem:
        contextData.topics[context.selectedTopic].subtemas[
          context.selectedSubtopic
        ].nombre,
    });
    contextSide.setAddMarker(false);
    contextSide.setmarkTime(false);
    setActionFromAdd(false);
  };

  const deleteMarkers = () => {
    contextData.setDeleteNotes(deleteId);
    setTimeout(() => {
      setActionFromAdd(false);
      setEditing(false);
      contextSide.setAddMarker(false);
    }, 2000);
  };

  const updateMarker = (id, updatedMarker, marker) => {
    setEditing(false);
    contextSide.setAddMarker(false);
    contextData.setEditNotes(
      contextData.notes.map((marker) =>
        marker.id === id ? updatedMarker : marker
      )
    );
    contextData.setEditNotes({
      ...marker,
      contenido: updatedMarker.contenido,
      id: updatedMarker.id,
      subtemaId: contextData.subtopicId,
      time: updatedMarker.time && updatedMarker.time,
      datetime: !updatedMarker.time && updatedMarker.datetime,
      typenoteId: updatedMarker.typenoteId,
      subitemPosition: context.selectedSubtopic,
      itemPosition: context.selectedTopic,
      nombreItem:
        contextData.topics[context.selectedTopic].subtemas[
          context.selectedSubtopic
        ].nombre,
    });
    setActionFromAdd(false);
  };

  const editRow = (marker, id) => {
    setEditing(true);
    contextSide.setAddMarker(true);
    setDeleteId(id);
    setCurrentMarker({
      id: marker.id,
      time: marker.time,
      subtemaId: contextData.subtopicId,
      contenido: marker.contenido,
    });
    console.log("delete", deleteId);
  };

  const handleEdit = () => {
    contextSide.setAddMarker(false);
    setEditing(false);
  };
  const handleCancel = () => {
    contextSide.setmarkTime("");
    contextSide.setAddMarker(false);
    setActionFromAdd(false);
  };
  const handleChange = (event) => {
    contextSide.setAllMarkersCheck({
      ...contextSide.allMarkersCheck,
      [event.target.name]: event.target.checked,
    });
  };
  const handleAdd = () => {
    setActionFromAdd(true);
    contextSide.setTypenoteId("texto");
    // contextSide.setmarkTime(true);
    // contextSide.setAddMarker(true);
    // contextSide.setActiveMarkerList("");
  };
  const handleNoteActive = () => {
    setNoteAction(noteAction === false ? true : false);
  };
  const handleMarkerActive = () => {
    setMarkerAction(markerAction === false ? true : false);
  };
  return (
    <div className="container">
      <div>
        {contextSide.addMarker || actionFormAdd ? (
          <div className="mb-4">
            {editing ? (
              <div className="fadeIn-animate">
                <EditMarkerForm
                  editing={editing}
                  setEditing={handleEdit}
                  currentMarker={currentMarker}
                  updateMarker={updateMarker}
                  deleteMarkers={deleteMarkers}
                />
              </div>
            ) : (
              <div className="fadeIn-animate">
                <AddMarkerForm AddMarker={AddMarker} onClose={handleCancel} />
              </div>
            )}
          </div>
        ) : null}

        {!editing && (
          <>
            <div className="flex-large">
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                className="mb-2"
              >
                {/* <Typography variant="p" component="h2" className="mb-1 mt-2">
                  Mis notas
                </Typography> */}
                <div>
                  {/* <StyledButton
                    variant="extended"
                    size="small"
                    color={noteAction ? "primary" : "secondary"}
                    aria-label="add"
                    onClick={() => handleNoteActive()}
                    disabled={
                      contextData.allNotes && contextData.allNotes.length <= 0
                        ? true
                        : false
                    }
                  >
                    Texto
                  </StyledButton>
                  <StyledButton
                    variant="extended"
                    size="small"
                    color={markerAction ? "primary" : "secondary"}
                    aria-label="add"
                    onClick={() => handleMarkerActive()}
                    disabled={
                      contextData.allNotes && contextData.allNotes.length <= 0
                        ? true
                        : false
                    }
                  >
                    Video
                  </StyledButton> */}
                  <FormControlLabel
                    value="start"
                    checked={contextSide.allMarkersCheck.checked}
                    name="checked"
                    onChange={handleChange}
                    control={<Switch color="primary" />}
                    label={<Typography variant="body2">ver todos</Typography>}
                    labelPlacement="start"
                    style={{ opacity: 0.8, marginLeft: 0 }}
                    disabled={
                      contextData.allNotes && contextData.allNotes.length <= 0
                        ? true
                        : false
                    }
                  />
                </div>
                <div>
                  {!actionFormAdd && (
                    //handleCreate={() => contextSide.handlePosition()}

                    // <Fab
                    //   color="primary"
                    //   className="ml-2"
                    //   aria-label="add"
                    //   size="small"
                    //   onClick={() => handleAdd()}
                    // >
                    //   <AddIcon />
                    // </Fab>
                    <>
                      <ActionsMarker
                        actionClickText={() => handleAdd()}
                        actionClickVideo={() => contextSide.handlePosition()}
                      />
                    </>
                  )}
                </div>
              </Grid>

              {!contextSide.allMarkersCheck.checked ? (
                <div className="fadeIn-animate">
                  <MarkList
                    markers={contextData.notes}
                    editRow={editRow}
                    listPosition={contextSide.handleListPosition}
                    noteAction={noteAction}
                    markerAction={markerAction}
                  />
                </div>
              ) : (
                <MarkListAll
                  noteAction={noteAction}
                  markerAction={markerAction}
                  markers={contextData.allNotes}
                  setNoteSwitch={() =>
                    contextSide.setAllNotesCheck({ checked: false })
                  }
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MarkersComponent;
