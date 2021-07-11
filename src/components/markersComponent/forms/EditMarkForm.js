import React, { useState, useEffect } from "react";
import { Grid, TextField, Button, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { DataActionsContext } from "../../../contexts/dataContext";
import { withStyles } from "@material-ui/core/styles";
const StyledButton = withStyles({
  label: {
    textTransform: "capitalize",
  },
})(Button);
const EditMarkForm = (props) => {
  const [marker, setMarker] = useState(props.currentMarker);
  const contextData = React.useContext(DataActionsContext);

  useEffect(() => {
    setMarker(props.currentMarker);
  }, [props]);
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]
  function dateTime() {
    var d = new Date();
    var n = d.toLocaleString();
    return n;
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setMarker({ ...marker, [name]: value, datetime: dateTime() });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateMarker(marker.id, marker);
        contextData.setloadingBar(true);
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            autoFocus
            variant="outlined"
            label="contenido"
            type="text"
            name="contenido"
            value={marker.contenido}
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={4}
            size="small"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} direction="row" justify="space-between">
        <Grid item>
          <StyledButton
            variant="contained"
            onClick={() => props.setEditing(false)}
            className="button muted-button mr-1"
            size="small"
          >
            Cancelar
          </StyledButton>
          <StyledButton
            variant="contained"
            color="primary"
            type="submit"
            size="small"
          >
            Guardar
          </StyledButton>
        </Grid>
        <IconButton
          onClick={props.deleteMarkers}
          className="button muted-button"
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Grid>
    </form>
  );
};

export default EditMarkForm;
