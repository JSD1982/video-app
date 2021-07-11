const isDesa = process.env.NODE_ENV === "development";

export const apiRoute = {
  apiPath: isDesa ? "http://localhost:3005/" : window.iebs_lcms.apiRoute,
};
