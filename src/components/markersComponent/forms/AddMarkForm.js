import React, { useState, useContext } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { SideBarActionsContext } from "../../../contexts/sideBarActionsContext";
import { DataActionsContext } from "../../../contexts/dataContext";
import { withStyles } from "@material-ui/core/styles";
const StyledButton = withStyles({
  label: {
    textTransform: "capitalize",
  },
})(Button);
const AddMarkForm = (props) => {
  const initialFormState = { id: null, contenido: "", time: "" };
  const [marker, setMarker] = useState(initialFormState);
  const ctx = useContext(SideBarActionsContext);
  const contextData = React.useContext(DataActionsContext);
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
        if (!marker.contenido && !marker.time) return;
        let markerList = marker;
        markerList = { ...markerList, time: ctx.markTimePosition.time };
        props.AddMarker(markerList);
        setMarker(initialFormState);
        contextData.setloadingBar(true);
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            autoFocus
            variant="outlined"
            label="Descripción del marcador"
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
        <Grid item xs={12}>
          <StyledButton
            variant="contained"
            onClick={props.onClose}
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
      </Grid>
    </form>
  );
};

export default AddMarkForm;
