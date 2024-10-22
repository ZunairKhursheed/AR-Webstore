import React from "react";
import ModelViewer from "../ModelViewer/ModelViewer";
import productItems from "../../data/ProductItems";
import "../ProductList/ProductList.css";

export const SheenChair = () => {
  return <ModelViewer item={productItems[0]} />;
};
