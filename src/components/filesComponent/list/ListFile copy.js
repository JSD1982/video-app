import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Grid,
  IconButton,
  Divider,
} from "@material-ui/core";

import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const ListFile = ({ dataFile }) => {
  console.log("file", dataFile);
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={12}>
          <List>
            <ListItem>
              <ListItemIcon>
                <InsertDriveFileIcon />
              </ListItemIcon>
              <ListItemText primary="Single-line item" />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="download">
                  <CloudDownloadIcon color="primary" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default ListFile;
