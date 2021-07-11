import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import Test from './containers/Test';
//import Library from './containers/Library';
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import "./assets/scss/main.scss";
import ThemeContextTag from "./contexts/themeContext";
import ListItemsContextTag from "./contexts/listItemsContext";
import SideBarActionsContextTag from "./contexts/sideBarActionsContext";
import DataActionsContextTag from "./contexts/dataContext";
import favAkademus from "./assets/images/akademus-favicon.png";
import favCitius from "./assets/images/citius-favicon.ico";
import favIebs from "./assets/images/iebs-favicon.ico";
const Loading = () => <h1>el pepe</h1>;

const favicon = document.getElementById("favicon");

if (window.iebs_lcms.theme === "iebs") {
  window.document.title = "LCMS Iebschool";
  favicon.setAttribute("href", favIebs);
}
if (window.iebs_lcms.theme === "akademus") {
  window.document.title = "LCMS Akademus";
  favicon.setAttribute("href", favAkademus);
}
if (window.iebs_lcms.theme === "citius") {
  window.document.title = "LCMS Citiuschool";
  favicon.setAttribute("href", favCitius);
}

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <React.StrictMode>
      <DataActionsContextTag>
        <SideBarActionsContextTag>
          <ListItemsContextTag>
            <ThemeContextTag>
              <App />
            </ThemeContextTag>
          </ListItemsContextTag>
        </SideBarActionsContextTag>
      </DataActionsContextTag>
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
