import React from "react";
import { ActionsVideo, TabsMobile, VimeoPlayer } from "../components";
import { ListItemsContext } from "../contexts/listItemsContext";
import { DataActionsContext } from "../contexts/dataContext";
import { SideBarActionsContext } from "../contexts/sideBarActionsContext";
import { Hidden, Box, Typography } from "@material-ui/core";
import { useStyles } from "./style.js";
import replace from "react-string-replace";
import Logo1 from "../assets/images/logo-Citius-black-2020.svg";
import Logo2 from "../assets/images/logo-Akademus.svg";
import Logo3 from "../assets/images/logo-emonkeyz-adademy.svg";
import Logo4 from "../assets/images/logo-IEBS-10.svg";
import Logo5 from "../assets/images/logo-quantum-school-logo-color.svg";
import Logo6 from "../assets/images/logo-sales-school-logo-color.svg";
import BottomScrollListener from "react-bottom-scroll-listener";
//import VisibilitySensor from "react-visibility-sensor";
import { course } from "../mock/curso";
const ContentLayout = (props) => {
  const classes = useStyles();
  const context = React.useContext(ListItemsContext);
  const contextData = React.useContext(DataActionsContext);
  const contextSide = React.useContext(SideBarActionsContext);
  // const onChange = (isVisible) => {
  //   if (isVisible) {
  //     handleCheck();
  //   }
  // };
  const reg = /\{([a-z|A-Z|0-9|\.]+)\}/g;
  const handleCheck = () => {
    if (
      course.temas[context.selectedTopic].subtemas[context.selectedSubtopic]
        .visto === false
    ) {
      if (context.selectedSubtopic + 1 >= context.maxSubTopics) {
        course.temas[context.selectedTopic].subtemas[
          context.selectedSubtopic
        ].visto = true;

        context.setSelectedTotalSubtopic(
          (prevActiveStep) => prevActiveStep + 1
        );
      } else {
        course.temas[context.selectedTopic].subtemas[
          context.selectedSubtopic
        ].visto = true;

        course.temas[context.selectedTopic].subtemas[
          context.selectedSubtopic + 1
        ].disabled = false;

        context.setSelectedTotalSubtopic(
          (prevActiveStep) => prevActiveStep + 1
        );
      }
    }
  };
  console.log("elpepe", context.selectedTotalSubtopic, context.totalSubtopics);
  const handleVideoPlay = () => {
    context.setActiveVideo(true);
  };
  return (
    <>
      <div className="root">
        {context.activeMeans ? (
          <Box pr={4} pl={4} className="means-content">
            <Box pb={2} pt={1}>
              <Typography component="h5" variant="h5" className="mb-3">
                Tema 1 - Los motores de búsqueda
              </Typography>
              <a href="#">¿Qué es un motor de búsqueda?.pdf</a>
              <a href="#">El cambiante algoritmo de Google.pdf</a>
              <a href="#">Guía de SEO básica de Google</a>
            </Box>

            <Box pb={2} pt={1}>
              <Typography component="h5" variant="h5" className="mb-3">
                Tema 2 - Search Engine Optimization
              </Typography>
              <a href="#">Factores SEO on page y off page.pdf</a>
              <a href="#">
                Guía de optimización en buscadores (SEO) para principiantes
              </a>
              <a href="#">Factores de posicionamiento SEO para 2020</a>
            </Box>
            <Box pb={2} pt={1}>
              <Typography component="h5" variant="h5" className="mb-3">
                Tema 3 - Las palabras clave (keywords) y su papel en el SEO
              </Typography>
              <a href="#">
                Introducción al estudio de las palabras clave, ¿qué son las long
                tail?.pdf
              </a>
              <a href="#">Criterios para el análisis de una keyword.pdf</a>
              <a href="#">
                Las 12 mejores herramientas gratuitas para buscar keywords
              </a>
            </Box>
            <Box pb={2} pt={1}>
              <Typography component="h5" variant="h5" className="mb-3">
                Tema 4 - Optimizaciones de contenido
              </Typography>
              <a href="#">Optimizaciones SEO de contenido.pdf</a>
            </Box>
            <Box pb={2} pt={1}>
              <Typography component="h5" variant="h5" className="mb-3">
                Tema 5 - Los enlaces como referente
              </Typography>
              <a href="#">Linkbuilding.pdf</a>
              <a href="#">
                Estrategias de Link Building para los profesionales del SEO
              </a>
            </Box>
          </Box>
        ) : (
          <>
            {contextData.topics[context.selectedTopic].subtemas[
              context.selectedSubtopic
            ].vimeo_id === false ? (
              <BottomScrollListener onBottom={handleCheck}>
                {(scrollRef) => (
                  <>
                    <div ref={scrollRef} className="inner-scroll">
                      <div style={{ paddingTop: 63 }}></div>
                      <>
                        <Hidden mdUp>
                          <Box pt={4} pr={4} pl={4}>
                            <TabsMobile>
                              <Typography variant={"h4"} components={"h2"}>
                                {
                                  contextData.topics[context.selectedTopic]
                                    .subtemas[context.selectedSubtopic].nombre
                                }
                              </Typography>
                              {/* <VisibilitySensor onChange={onChange}> */}
                              <div
                                className="description-content__container"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    contextData.topics[context.selectedTopic]
                                      .subtemas[context.selectedSubtopic]
                                      .contenido,
                                }}
                              />
                              {/* </VisibilitySensor> */}
                            </TabsMobile>
                          </Box>
                        </Hidden>
                        <Hidden smDown>
                          <Box p={4}>
                            <Typography variant={"h4"} components={"h2"}>
                              {
                                contextData.topics[context.selectedTopic]
                                  .subtemas[context.selectedSubtopic].nombre
                              }
                            </Typography>
                            {/* <VisibilitySensor onChange={onChange}> */}
                            {contextData.topics[context.selectedTopic].subtemas[
                              context.selectedSubtopic
                            ].vimeoId1 ? (
                              <>
                                <div
                                  className="description-content__container"
                                  // dangerouslySetInnerHTML={{
                                  //   __html:
                                  //     contextData.topics[context.selectedTopic]
                                  //       .subtemas[context.selectedSubtopic]
                                  //       .contenido,
                                  // }}
                                >
                                  {}
                                  {replace(
                                    contextData.topics &&
                                      contextData.topics[context.selectedTopic]
                                        .subtemas[context.selectedSubtopic]
                                        .contenido,
                                    reg,
                                    () => (
                                      <>
                                        <VimeoPlayer
                                          onEnd={context.handleEndVideo()}
                                          paused={contextSide.markTime}
                                          start={
                                            contextSide.markTimePosition.time
                                          }
                                          played={contextSide.onPlayVideo}
                                          pictureInpicture={true}
                                          onPause={(time) =>
                                            contextSide.setMarkTimePosition({
                                              time: time.seconds,
                                            })
                                          }
                                          video={
                                            contextData.topics[
                                              context.selectedTopic
                                            ].subtemas[context.selectedSubtopic]
                                              .vimeoId1
                                          }
                                        />
                                        <ActionsVideo
                                          handleCreate={() =>
                                            contextSide.handlePosition()
                                          }
                                        />
                                      </>
                                    )
                                  )}
                                </div>
                              </>
                            ) : (
                              <>
                                <div
                                  className="description-content__container"
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      contextData.topics[context.selectedTopic]
                                        .subtemas[context.selectedSubtopic]
                                        .contenido,
                                  }}
                                ></div>
                              </>
                            )}

                            {/* </VisibilitySensor> */}
                          </Box>
                        </Hidden>
                      </>
                    </div>
                  </>
                )}
              </BottomScrollListener>
            ) : (
              <>
                <div style={{ paddingTop: "63px" }}>
                  <Hidden smDown>
                    {context.activeVideo ||
                    contextData.topics[context.selectedTopic].subtemas[
                      context.selectedSubtopic
                    ].recurso_video_descripcion === "" ? (
                      <>
                        <div
                          className={
                            contextSide.openSide
                              ? classes.videoWrapper
                              : classes.videoWrapperFullWidth
                          }
                        >
                          <div className="logo-video-content">
                            {window.iebs_lcms.theme === "iebs" && (
                              <img
                                src={Logo4}
                                alt="logo"
                                className="video-logo"
                              />
                            )}
                            {window.iebs_lcms.theme === "citius" && (
                              <img
                                src={Logo1}
                                alt="logo"
                                className="video-logo"
                              />
                            )}
                            {window.iebs_lcms.theme === "akademus" && (
                              <img
                                src={Logo2}
                                alt="logo"
                                className="video-logo"
                              />
                            )}
                          </div>
                          <VimeoPlayer
                            className={
                              contextSide.openSide
                                ? "video-content"
                                : "video-content full-video"
                            }
                            onEnd={context.handleEndVideo()}
                            paused={contextSide.markTime}
                            start={contextSide.markTimePosition.time}
                            //start={0}
                            onPause={(time) =>
                              contextSide.setMarkTimePosition({
                                time: time.seconds,
                              })
                            }
                            video={
                              contextData.topics[context.selectedTopic]
                                .subtemas[context.selectedSubtopic].vimeo_id
                            }
                          />
                        </div>
                        <ActionsVideo
                          handleCreate={() => contextSide.handlePosition()}
                        />
                      </>
                    ) : (
                      <>
                        {contextData.topics[context.selectedTopic].subtemas[
                          context.selectedSubtopic
                        ].recurso_video_descripcion && (
                          <>
                            <div className={classes.videoWrapper}>
                              <VimeoPlayer
                                className="video-content"
                                onEnd={context.handleEndVideo()}
                                paused={contextSide.markTime}
                                start={contextSide.markTimePosition.time}
                                //start={0}
                                onPause={(time) =>
                                  contextSide.setMarkTimePosition({
                                    time: time.seconds,
                                  })
                                }
                                video={
                                  contextData.topics[context.selectedTopic]
                                    .subtemas[context.selectedSubtopic].vimeo_id
                                }
                              />
                            </div>
                            <div className="content-video-modal">
                              <div className="content-video-modal__description">
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      contextData.topics[context.selectedTopic]
                                        .subtemas[context.selectedSubtopic]
                                        .recurso_video_descripcion,
                                  }}
                                />
                                <button onClick={handleVideoPlay}>
                                  SIGUIENTE
                                </button>
                              </div>
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </Hidden>
                  <Hidden mdUp>
                    <Box pt={4} pr={4} pl={4}>
                      <TabsMobile>
                        <>
                          {context.activeVideo ||
                          contextData.topics[context.selectedTopic].subtemas[
                            context.selectedSubtopic
                          ].recurso_video_descripcion === "" ? (
                            <>
                              <div className={classes.videoWrapper}>
                                <div className="logo-video-content ">
                                  {window.iebs_lcms.theme === "iebs" && (
                                    <img
                                      src={Logo4}
                                      alt="logo"
                                      className="video-logo"
                                    />
                                  )}
                                  {window.iebs_lcms.theme === "citius" && (
                                    <img
                                      src={Logo1}
                                      alt="logo"
                                      className="video-logo"
                                    />
                                  )}
                                  {window.iebs_lcms.theme === "akademus" && (
                                    <img
                                      src={Logo2}
                                      alt="logo"
                                      className="video-logo"
                                    />
                                  )}
                                </div>
                                <VimeoPlayer
                                  className="video-content"
                                  onEnd={context.handleEndVideo()}
                                  paused={contextSide.markTime}
                                  start={
                                    contextSide.markTimePosition.time &&
                                    contextSide.markTimePosition.time
                                  }
                                  onPause={(time) =>
                                    contextSide.setMarkTimePosition({
                                      time: time.seconds,
                                    })
                                  }
                                  video={
                                    contextData.topics[context.selectedTopic]
                                      .subtemas[context.selectedSubtopic]
                                      .vimeo_id
                                  }
                                />
                              </div>
                              <ActionsVideo
                                handleCreate={() =>
                                  contextSide.handlePosition()
                                }
                              />
                            </>
                          ) : (
                            <>
                              {contextData.topics[context.selectedTopic]
                                .subtemas[context.selectedSubtopic]
                                .recurso_video_descripcion && (
                                <>
                                  <div className={classes.videoWrapper}>
                                    <VimeoPlayer
                                      className="video-content"
                                      //autoplay
                                      onEnd={context.handleEndVideo()}
                                      paused={contextSide.markTime}
                                      start={
                                        contextSide.markTimePosition.time &&
                                        contextSide.markTimePosition.time
                                      }
                                      onPause={(time) =>
                                        contextSide.setMarkTimePosition({
                                          time: time.seconds,
                                        })
                                      }
                                      video={
                                        contextData.topics[
                                          context.selectedTopic
                                        ].subtemas[context.selectedSubtopic]
                                          .vimeo_id
                                      }
                                    />
                                  </div>
                                  <div className="content-video-modal">
                                    <div className="content-video-modal__description">
                                      <div
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            contextData.topics[
                                              context.selectedTopic
                                            ].subtemas[context.selectedSubtopic]
                                              .recurso_video_descripcion,
                                        }}
                                      />
                                      <button onClick={handleVideoPlay}>
                                        SIGUIENTE
                                      </button>
                                    </div>
                                  </div>
                                </>
                              )}
                            </>
                          )}
                        </>
                      </TabsMobile>
                    </Box>
                  </Hidden>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ContentLayout;
