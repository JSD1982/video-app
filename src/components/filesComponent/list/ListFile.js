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
import { ListItemsContext } from "../../../contexts/listItemsContext";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const ListFile = ({ dataFile }) => {
  const context = React.useContext(ListItemsContext);
  console.log("allfile", dataFile);
  return (
    <>
      <Grid container>
        <Typography variant="caption">
          {dataFile.temas[context.selectedTopic].nombre}
        </Typography>
        <Grid item xs={12} md={12}>
          <List style={{ marginLeft: "-16px" }}>
            <>
              {dataFile.temas[context.selectedTopic].subtemas.map(
                (dataSubtopics, indexSubtopics) => (
                  <>
                    {dataFile.temas[context.selectedTopic].subtemas[
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
            </>
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default ListFile;
