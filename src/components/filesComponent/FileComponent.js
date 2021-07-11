import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Switch, FormControlLabel, Typography } from "@material-ui/core";
import ListFile from "./list/ListFile";
import ListAllFiles from "./list/ListAllFiles";
import { DataActionsContext } from "../../contexts/dataContext";
import { course } from "../../mock/curso";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
}));

const FileComponent = () => {
  const classes = useStyles();
  const contextData = React.useContext(DataActionsContext);
  const [fileMeans, setFileMeans] = React.useState(course);
  const [allFiles, setAllFiles] = React.useState({
    checked: false,
  });
  const handleChange = (event) => {
    setAllFiles({ ...allFiles, [event.target.name]: event.target.checked });
  };

  console.log("means", fileMeans);

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
        className="mb-2"
      >
        <FormControlLabel
          value="start"
          checked={allFiles.checked}
          name="checked"
          onChange={handleChange}
          control={<Switch color="primary" />}
          label={<Typography variant="body2">ver todos</Typography>}
          labelPlacement="start"
          style={{ paddingRight: 17, opacity: 0.8 }}
        />
      </Grid>
      {!allFiles.checked ? (
        <div className="fadeIn-animate">
          <ListFile dataFile={fileMeans} />
        </div>
      ) : (
        <ListAllFiles dataFile={fileMeans} />
      )}
    </div>
  );
};

export default FileComponent;
