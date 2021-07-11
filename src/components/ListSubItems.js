import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Checkbox,
  FormControlLabel,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  Videocam,
  CheckCircleOutline,
  CheckCircle,
  Description,
  Lock,
} from "@material-ui/icons";

import { ListItemsContext } from "../contexts/listItemsContext";
import { SideBarActionsContext } from "../contexts/sideBarActionsContext";
import { DataActionsContext } from "../contexts/dataContext";
const useStyles = makeStyles({
  listItem: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  listSelected: {
    borderLeft: "3px solid #691196",
  },
  checkItem: {
    position: "relative",
    left: "14px",
  },
  textItem: {
    marginLeft: 5,
    whiteSpace: "initial",
  },
  iconList: {
    position: "relative",
    top: "1px",
  },
});

const ListSubItems = (props) => {
  const [check, setCheck] = React.useState();
  const context = React.useContext(ListItemsContext);
  const contextSide = React.useContext(SideBarActionsContext);
  const contextData = React.useContext(DataActionsContext);
  const classes = useStyles();
  // React.useEffect(() => {
  //   contextData.getViews.map((view) => {
  //     props.id === view.subtemaId && setCheck(view.visto);
  //   });
  // }, [setCheck]);
  return (
    <>
      <Divider />
      <ListItem
        key={props.value}
        role={undefined}
        dense
        button
        disabled={props.disabled}
        onClick={context.handleSubTopic(props.value, props.topicIndex)}
        className={
          // context.selectedSubtopic === props.value &&
          // context.selectedTopic === props.id
          //   ? classes.listSelected
          //   : null
          !props.disabled && classes.listSelected
        }
        selected={
          context.selectedSubtopic === props.value &&
          context.selectedTopic === props.topicIndex
            ? true
            : false
        }
      >
        <ListItemIcon className={classes.listItem}>
          {contextSide.open && (
            <>
              <div className={classes.iconList}>
                {props.blocked ? (
                  <Lock fontSize="small" />
                ) : (
                  <>
                    {props.icon === false ? (
                      <Description fontSize="small" />
                    ) : (
                      <Videocam fontSize="small" />
                    )}
                  </>
                )}
              </div>

              <ListItemText
                primary={props.title}
                className={classes.textItem}
              />
            </>
          )}
          <div></div>

          <FormControlLabel
            control={
              <Checkbox
                className={classes.checkItem}
                color="primary"
                icon={<CheckCircleOutline fontSize="small" />}
                checkedIcon={<CheckCircle fontSize="small" />}
                name="checkedH"
              />
            }
            edge="end"
            checked={props.view}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
      </ListItem>
    </>
  );
};

export default ListSubItems;
