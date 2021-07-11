import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ListSubItems } from "../components";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  List,
  Typography,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { ExpandMore, Description } from "@material-ui/icons";
import { ListItemsContext } from "../contexts/listItemsContext";
import { DataActionsContext } from "../contexts/dataContext";
import { SideBarActionsContext } from "../contexts/sideBarActionsContext";
import { course } from "../mock/curso";
const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: 0,
    backgroundColor: "#f7f7f7",
  },
  accordionSummary: {
    padding: "0px 37px 0px 16px",
    justifyContent: "flex-start",
    whiteSpace: " break-spaces",
  },
  accordionContent: {
    padding: "0",
  },
  buttonList: {
    padding: "0 2px 0 16px",
  },
  list: {
    width: "100%",
  },
  icondExpand: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  descriptionIcon: {
    display: "inline-block",
  },
});

const ListItems = () => {
  const context = React.useContext(ListItemsContext);
  const contextSide = React.useContext(SideBarActionsContext);
  const contextData = React.useContext(DataActionsContext);
  const [check, setCheck] = React.useState();
  const classes = useStyles();
  var maxSubtopic = null;

  React.useEffect(() => {
    context.setTotalSubtopics(maxSubtopic);
  }, [context.setTotalSubtopics]);

  return (
    <div className={classes.root}>
      {contextData.topics &&
        contextData.topics.map((topic, index) => {
          maxSubtopic += contextData.topics[index].subtemas.length;

          return (
            <>
              <Accordion
                // expanded={context.expanded === index}
                // onChange={context.handleChange(index)}
                defaultExpanded
              >
                <AccordionSummary
                  className={classes.accordionSummary}
                  expandIcon={<ExpandMore className={classes.icondExpand} />}
                  // onClick={
                  //   contextData.topics[index].subtemas.length !== 0
                  //     ? context.handleTopic(index)
                  //     : null
                  // }
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  {contextSide.open && (
                    <Grid container direction="column">
                      <Typography variant={"overline"} components={"h2"}>
                        topics {topic.orden}
                      </Typography>
                      <Typography
                        variant={"overline"}
                        components={"h2"}
                        style={{ lineHeight: "20px" }}
                      >
                        <b>{topic.nombre}</b>
                      </Typography>
                    </Grid>
                  )}
                </AccordionSummary>
                <AccordionDetails className={classes.accordionContent}>
                  <List className={classes.list}>
                    {contextData.topics[index].subtemas.map(
                      (subtopic, subindex) => {
                        return (
                          <>
                            <ListSubItems
                              topicIndex={index}
                              value={subindex}
                              id={subtopic.id}
                              view={
                                course.temas[index].subtemas[subindex].visto
                              }
                              disabled={
                                // course.temas[index].subtemas[subindex].blocked
                                course.temas[index].subtemas[subindex].disabled
                              }
                              title={subtopic.nombre}
                              blocked={
                                course.temas[index].subtemas[subindex].blocked
                              }
                              key={subindex}
                              icon={subtopic.vimeo_id}
                            />
                          </>
                        );
                      }
                    )}
                  </List>
                </AccordionDetails>
              </Accordion>
            </>
          );
        })}
      <ListItemIcon
        style={{
          width: "100%",
          cursor: "pointer",
        }}
      >
        <ListItem
          style={{ padding: 13, borderLeft: "3px solid #691196" }}
          onClick={() => context.setActiveMeans(true)}
        >
          {contextSide.open && (
            <ListItemText primary={"Recursos de la clase"} />
          )}
          <Description
            className={classes.descriptionIcon}
            style={contextSide.open ? { marginRight: 12 } : { marginLeft: 115 }}
          />
        </ListItem>
      </ListItemIcon>
    </div>
  );
};

export default ListItems;
