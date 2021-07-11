import React from "react";
import { Button, Hidden } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { ListItemsContext } from "../contexts/listItemsContext";
import { course } from "../mock/curso";
const PaginatorButtons = () => {
  const context = React.useContext(ListItemsContext);

  return (
    <>
      <div className="pagination-buttons">
        <Button
          onClick={context.handleBack}
          disabled={
            context.selectedTopic === 0 && context.selectedSubtopic === 0
              ? true
              : false
          }
          variant="contained"
          className="button-pagination"
          color="secondary"
          size="small"
        >
          <ChevronLeft />
          <Hidden smDown>Volver</Hidden>
        </Button>

        <Button
          variant="contained"
          className="ml-2 button-pagination"
          color="primary"
          onClick={context.handleNext}
          disabled={
            (context.selectedTopic === context.maxTopics - 1 &&
              context.selectedSubtopic === context.maxSubTopics - 1) ||
            course.temas[context.selectedTopic].subtemas[
              context.selectedSubtopic
            ].visto === false ||
            course.temas[context.selectedTopic].subtemas[
              context.selectedSubtopic
            ].blocked === true
              ? true
              : false
          }
          size="small"
        >
          <Hidden smDown>Continuar</Hidden>
          <ChevronRight />
        </Button>
      </div>
    </>
  );
};

export default PaginatorButtons;
