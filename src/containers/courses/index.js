import React from "react";
import { Layout } from "../../components";
import { ReactQueryDevtools } from "react-query-devtools";
import { DataActionsContext } from "../../contexts/dataContext";
import loading from "../../assets/images/loading.gif";
const Courses = () => {
  const contextData = React.useContext(DataActionsContext);

  return (
    <>
      {contextData.loading === false ? (
        <>
          <div className="fadeIn-animate">
            <Layout />
          </div>
        </>
      ) : (
        <>
          <img src={loading} className="fadeIn-animate loading-img" />
        </>
      )}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </>
  );
};

export default Courses;
