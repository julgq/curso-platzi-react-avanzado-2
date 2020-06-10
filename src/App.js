import React from "react";
import { ListOfCategories } from "./components/ListOfCategories/index";
import { GlobalStyle } from "./GlobalStyles";

export const App = () => (
  <div>
    <GlobalStyle />
    <ListOfCategories />
  </div>
);
