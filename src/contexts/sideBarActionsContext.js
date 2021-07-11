import React from "react";

export const SideBarActionsContext = React.createContext();

const SideBarActionsContextTag = ({ children }) => {
  const [allNotesCheck, setAllNotesCheck] = React.useState({
    checked: false,
  });
  const [allMarkersCheck, setAllMarkersCheck] = React.useState({
    checked: false,
  });

  const [open, setOpen] = React.useState(false);
  const [openSide, setOpenSide] = React.useState(true);
  const [openExpand, setOpenExpand] = React.useState(true);
  const [markTime, setmarkTime] = React.useState(false);
  const [markTimePosition, setMarkTimePosition] = React.useState({});
  const [reset, setReset] = React.useState(false);
  const [valueTab, setValueTab] = React.useState(0);
  const [addMarker, setAddMarker] = React.useState(false);
  const [typenoteId, setTypenoteId] = React.useState("");
  const [onPlayVideo, setOnPlayVideo] = React.useState(false);

  const [activeMarkerList, setActiveMarkerList] = React.useState();
  const handleMarkList = (index, time) => {
    setActiveMarkerList(index);
    setMarkTimePosition({ ...time, time: time });
    setOnPlayVideo(true);
  };

  const handlePosition = () => {
    // setMarkTimePosition(parseFloat(markTimePosition))
    //setValueTab(1);
    setTypenoteId("video");
    setmarkTime(true);
    setAddMarker(true);
    setActiveMarkerList("");
  };

  const handleChange = (event, newValue) => {
    setValueTab(newValue);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setOpenExpand(true);
  };

  const handleDrawerCloseAll = () => {
    setOpen(false);
    setOpenSide(false);
    setOpenExpand(true);
  };

  const handleCommentsOpen = () => {
    setOpenSide(!openSide);
  };
  return (
    <SideBarActionsContext.Provider
      value={{
        open,
        openSide,
        openExpand,
        markTime,
        valueTab,
        addMarker,
        activeMarkerList,
        markTimePosition,
        reset,
        handleMarkList,
        setmarkTime,
        setMarkTimePosition,
        setAddMarker,
        handleDrawerOpen,
        handleDrawerClose,
        handleDrawerCloseAll,
        handleCommentsOpen,
        handlePosition,
        handleChange,
        allNotesCheck,
        setAllNotesCheck,
        allMarkersCheck,
        setAllMarkersCheck,
        setActiveMarkerList,
        setValueTab,
        typenoteId,
        setTypenoteId,
        onPlayVideo,
        setOpenSide,
      }}
    >
      {children}
    </SideBarActionsContext.Provider>
  );
};

export default SideBarActionsContextTag;
