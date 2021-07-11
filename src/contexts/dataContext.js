import React from "react";
import { CourseServices } from "../services";
import { useQuery } from "react-query";
//import { Console } from "react-query/types/core/utils";

export const DataActionsContext = React.createContext();
const services = new CourseServices();

const DataActionsContextTag = ({ children }) => {
  const [topics, setTopics] = React.useState();
  const [subtopicId, setSubtopicId] = React.useState();
  const [courses, setCourses] = React.useState();
  //notes
  const [notes, setNotes] = React.useState();
  const [allNotes, setAllNotes] = React.useState();
  const [addNotes, setAddNotes] = React.useState(null);
  const [editNotes, setEditNotes] = React.useState(null);
  const [deleteNotes, setDeleteNotes] = React.useState(null);
  //markers
  const [markers, setMarkers] = React.useState();
  const [allMarkers, setAllMarkers] = React.useState();
  const [addMarkers, setAddMarkers] = React.useState(null);
  const [editMarkers, setEditMarkers] = React.useState(null);
  const [deleteMarkers, setDeleteMarkers] = React.useState(null);
  //views
  const [getViews, setGetViews] = React.useState();
  const [addViews, setAddViews] = React.useState(null);
  //loading
  const [loading, setLoading] = React.useState(true);
  const [loadingBar, setloadingBar] = React.useState(true);
  const [notificationState, setNotificationState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "right",
    text: "Guardado con éxito!",
    type: "success",
  });
  const { vertical, horizontal, open } = notificationState;
  //query
  const getCourses = async () => {
    const res = await fetch(topics && topics);
    return res;
  };
  const { data, status } = useQuery("topics", getCourses);

  React.useEffect(() => {
    if (status === "success" && topics != null) {
      setLoading(false);
    }
  }, [setTopics, data, status, loading, topics]);

  const getNotesData = () => {
    //Get Notes
    try {
      services
        .getNotes(subtopicId.toString())
        .then((res) => {
          setNotes(res.data);
          setTimeout(() => {
            setloadingBar(false);
          }, 200);
        })
        .catch((error) => {
          console.log("getNotes", error);
        });
    } catch (error) {
      console.log("getNotes", error);
    }
  };
  const getAllNotesData = () => {
    try {
      services
        .getAllNotes()
        .then((res) => {
          setAllNotes(res.data);
          //setloadingBar(false);
        })
        .catch((error) => {
          console.log("getAllNotes", error);
        });
    } catch (error) {
      console.log("getAllNotes", error);
    }
  };

  React.useEffect(() => {
    //Get AllCourses
    try {
      if (topics === undefined) {
        services
          .getTopic()
          .then((res) => {
            setTopics(res.data);
            localStorage.setItem("data_iebs", JSON.stringify(topics));
          })
          .catch((error) => {
            return error;
          });
      }
    } catch (error) {
      return error;
    }

    //Get Courses
    try {
      if (courses === undefined) {
        services
          .getCourse()
          .then((res) => {
            setCourses(res.data);
          })
          .catch((error) => {
            console.log("getCourse", error);
          });
      }
    } catch (error) {
      console.log("getCourse", error);
    }
    console.log("notas", notes);

    //Notes

    getNotesData();

    getAllNotesData();

    try {
      if (addNotes != null) {
        services
          .addNotes(subtopicId.toString(), addNotes)
          .then((res) => {
            if (res.data) {
              getNotesData();
              getAllNotesData();
              setNotificationState({
                ...notificationState,
                text: "Nota agregada con éxito!",
                open: true,
                type: "success",
              });
            }
          })
          .catch((error) => {
            setNotificationState({
              ...notificationState,
              text: "No se pudo agregar la nota",
              open: true,
              type: "error",
            });
          });

        setAddNotes(null);
      }
    } catch (error) {
      console.log("addNotes", error);
    }

    try {
      if (editNotes != null) {
        services
          .editNotes(editNotes)
          .then((res) => {
            if (res.data) {
              getNotesData();
              getAllNotesData();
              setNotificationState({
                ...notificationState,
                text: "Nota guardada con éxito!",
                open: true,
                type: "success",
              });
            }
          })
          .catch((error) => {
            setNotificationState({
              ...notificationState,
              text: "No se pudo editar la nota",
              open: true,
              type: "error",
            });
          });

        setEditNotes(null);
      }
    } catch (error) {
      console.log("editNotes", error);
    }

    try {
      if (deleteNotes != null) {
        services
          .deleteNotes(deleteNotes.toString())
          .then((res) => {
            if (res.data) {
              getNotesData();
              getAllNotesData();
              setDeleteNotes(null);
              setTimeout(() => {
                setloadingBar(false);
              }, 500);
              setNotificationState({
                ...notificationState,
                text: "Nota borrada con éxito!",
                open: true,
                type: "success",
              });
            }
          })
          .catch((error) => {
            setNotificationState({
              ...notificationState,
              text: "No se pudo borrar la nota",
              open: true,
              type: "error",
            });
          });
      }
    } catch (error) {
      console.log("deleteNotes", error);
    }

    //add views
    // try {
    //   if (addViews != null) {
    //     services
    //       .addViews(addViews.toString())
    //       .then((res) => {
    //         setAddViews(res.data);
    //       })
    //       .catch((error) => {
    //         console.log("addViews", error);
    //       });
    //     setDeleteNotes(null);
    //   }
    // } catch (error) {
    //   console.log("addViews", error);
    // }

    //get views
    // try {
    //   if (getViews === undefined) {
    //     services
    //       .getViews()
    //       .then((res) => {
    //         setGetViews(res.data);
    //       })
    //       .catch((error) => {
    //         console.log("addViews", error);
    //       });
    //   }
    // } catch (error) {
    //   console.log("addViews", error);
    // }
  }, [
    setTopics,
    setCourses,
    setNotes,
    setAddNotes,
    setEditNotes,
    setDeleteNotes,
    setSubtopicId,
    setAddViews,
    setGetViews,
    setloadingBar,
    setAllNotes,
    setAllMarkers,
    deleteNotes,
    deleteMarkers,
    subtopicId,
    addViews,
    getViews,
    editNotes,
    addNotes,
    addMarkers,
    editMarkers,
    setMarkers,
    setDeleteMarkers,
    setNotificationState,
  ]);

  return (
    <DataActionsContext.Provider
      value={{
        courses,
        topics,
        notes,
        loading,
        addNotes,
        getViews,
        editNotes,
        setTopics,
        setCourses,
        setNotes,
        setAddNotes,
        setEditNotes,
        setDeleteNotes,
        setDeleteMarkers,
        setSubtopicId,
        setAddViews,
        setGetViews,
        subtopicId,
        loadingBar,
        setloadingBar,
        allNotes,
        setAllNotes,
        setAddMarkers,
        setEditMarkers,
        setAllMarkers,
        allMarkers,
        markers,
        notificationState,
        setNotificationState,
      }}
    >
      {children}
    </DataActionsContext.Provider>
  );
};

export default DataActionsContextTag;
