import React from "react";
import Vimeo from "./Vimeo";
// import { ActionsVideo } from "../../components";
// import { SideBarActionsContext } from "../../contexts/sideBarActionsContext";
// import { ListItemsContext } from "../../contexts/listItemsContext";
// import { DataActionsContext } from "../../contexts/dataContext";
const VimeoPlayer = ({ ...props }) => {
  //   const context = React.useContext(ListItemsContext);
  //   const contextData = React.useContext(DataActionsContext);
  //   const contextSide = React.useContext(SideBarActionsContext);
  return (
    <div>
      <Vimeo {...props} />
      {/* {contextData.topics[context.selectedTopic].subtemas[
        context.selectedSubtopic
      ].vimeo_id === false && (
        <ActionsVideo handleCreate={() => contextSide.handlePosition()} />
      )} */}
    </div>
  );
};
export default VimeoPlayer;
