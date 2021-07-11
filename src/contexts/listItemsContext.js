import React from "react";
import { DataActionsContext } from "./dataContext";
import { SideBarActionsContext } from "./sideBarActionsContext";
import { course } from "../mock/curso";
export const ListItemsContext = React.createContext();

const ListItemsContextTag = ({ children }) => {
  const [desabledItems, setDesabledItems] = React.useState(true);
  const [blockItems, setBlockItems] = React.useState();
  const [totalSubtopics, setTotalSubtopics] = React.useState();
  const [selectedTotalSubtopic, setSelectedTotalSubtopic] = React.useState(0);
  const [selectedSubtopic, setSelectedSubtopic] = React.useState(0);
  const [selectedTopic, setSelectedTopic] = React.useState(0);
  const [options, setOptions] = React.useState(0);
  const [disabledOption, setDisabledOption] = React.useState();
  const [expanded, setExpanded] = React.useState(0);
  const [activeVideo, setActiveVideo] = React.useState(false);
  const [means, setMeans] = React.useState(false);
  const [activeMeans, setActiveMeans] = React.useState(false);
  const myScrollRef = React.useRef(null);
  const executeScroll = () => {
    myScrollRef.current.scrollIntoView();
  };
  console.log("select", selectedTopic, selectedSubtopic);
  const contextData = React.useContext(DataActionsContext);
  const contextSide = React.useContext(SideBarActionsContext);
  const maxTopics = contextData.topics && contextData.topics.length;
  const maxSubTopics =
    contextData.topics && contextData.topics[selectedTopic].subtemas.length;
  // const maxOptions =
  //   contextData.topics[selectedTopic].subtemas[selectedSubtopic]
  //     .options &&
  //   contextData.topics[selectedTopic].subtemas[selectedSubtopic].options
  //     .length;

  const handleResetTopic = () => {
    setSelectedTopic(0);
  };
  const handleNext = () => {
    contextSide.setValueTab(0);
    contextSide.setMarkTimePosition({ time: 0 });
    contextSide.setActiveMarkerList("");
    if (means === true) {
      setActiveMeans(true);
    } else {
      setActiveMeans(false);
      if (selectedSubtopic + 1 >= maxSubTopics) {
        setSelectedTopic((prevActiveStep) => prevActiveStep + 1);
        setSelectedSubtopic(0);
      } else {
        setSelectedSubtopic((prevActiveStep) => prevActiveStep + 1);
      }
    }
  };
  const handleBack = () => {
    contextSide.setValueTab(0);
    setActiveMeans(false);
    contextSide.setActiveMarkerList("");
    contextSide.setMarkTimePosition({ time: 0 });
    //executeScroll();
    contextSide.setMarkTimePosition(0);
    if (selectedSubtopic == 0) {
      setSelectedTopic((prevActiveStep) => prevActiveStep - 1);
      setSelectedSubtopic(
        contextData.topics[selectedTopic - 1].subtemas.length - 1
      );
    } else {
      setSelectedSubtopic((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleSubTopic = (value, id) => () => {
    contextSide.setValueTab(0);
    contextSide.setActiveMarkerList("");
    contextSide.setMarkTimePosition({ time: 0 });
    setActiveMeans(false);
    setSelectedSubtopic(value);
    setSelectedTopic(id);
    setOptions(0);
    setDisabledOption(false);
    contextSide.setAllNotesCheck({ checked: false });
  };

  const handleEndVideo = () => () => {
    contextSide.setValueTab(0);
    //contextData.setCourses({ ...contextData.courses });
    contextSide.setMarkTimePosition({ time: 0 });
    if (selectedSubtopic + 1 >= maxSubTopics) {
      setSelectedSubtopic(0);
      setExpanded(selectedTopic + 1);
      setSelectedTopic((prevActiveStep) => prevActiveStep + 1);

      if (
        course.temas[selectedTopic].subtemas[selectedSubtopic].visto === false
      ) {
        course.temas[selectedTopic].subtemas[selectedSubtopic].visto = true;

        course.temas[selectedTopic + 1].subtemas[0].disabled = false;
      }
    } else {
      console.log("pepito", selectedTopic, selectedSubtopic);
      setSelectedSubtopic((prevActiveStep) => prevActiveStep + 1);
      if (
        course.temas[selectedTopic].subtemas[selectedSubtopic].visto === false
      ) {
        course.temas[selectedTopic].subtemas[selectedSubtopic].visto = true;
        course.temas[selectedTopic].subtemas[
          selectedSubtopic + 1
        ].disabled = false;
      }
    }
    setSelectedTotalSubtopic((prevActiveStep) => prevActiveStep + 1);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : true);
  };

  // React.useEffect(() => {
  //   setExpanded(selectedTopic);
  // });

  return (
    <ListItemsContext.Provider
      value={{
        handleNext,
        handleBack,
        handleSubTopic,
        handleChange,
        handleEndVideo,
        handleResetTopic,
        setTotalSubtopics,
        setSelectedTotalSubtopic,
        myScrollRef,
        selectedTotalSubtopic,
        options,
        totalSubtopics,
        selectedSubtopic,
        selectedTopic,
        expanded,
        maxTopics,
        maxSubTopics,
        //maxOptions,
        disabledOption,
        setDisabledOption,
        activeVideo,
        setActiveVideo,
        setMeans,
        setActiveMeans,
        activeMeans,
        setSelectedSubtopic,
        setSelectedTopic,
        desabledItems,
        setDesabledItems,
        blockItems,
      }}
    >
      {children}
    </ListItemsContext.Provider>
  );
};

export default ListItemsContextTag;
