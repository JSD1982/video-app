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
  Typography,
} from "@material-ui/core";

import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const ListAllFiles = ({ dataFile }) => {
  console.log("allfile", dataFile);
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={12}>
          {dataFile.temas.map((data, index) => (
            <>
              <Typography variant="caption">{data.nombre}</Typography>
              <List style={{ marginLeft: "-16px" }}>
                {dataFile.temas[index].subtemas.map(
                  (dataSubtopics, indexSubtopics) => (
                    <>
                      {dataFile.temas[index].subtemas[
                        indexSubtopics
                      ].recursos.map((recursos) => (
                        <>
                          <ListItem>
                            <a href={recursos.filestack_url} target="_blank">
                              <ListItemIcon>
                                <InsertDriveFileIcon />
                                <Typography variant="overline" className="ml-1">
                                  {recursos.filestack_filename}
                                </Typography>
                              </ListItemIcon>
                            </a>
                            {/* <ListItemSecondaryAction>
                              <IconButton edge="end" aria-label="download">
                                <CloudDownloadIcon color="primary" />
                              </IconButton>
                            </ListItemSecondaryAction> */}
                          </ListItem>
                          <Divider />
                        </>
                      ))}
                    </>
                  )
                )}
              </List>
            </>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default ListAllFiles;
