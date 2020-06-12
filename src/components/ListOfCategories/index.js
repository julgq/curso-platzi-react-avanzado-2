import React from "react";
import { Category } from "../Category/Category";
import { List, Item } from "./styles";
import { categories } from "../../db.json";

export const ListOfCategories = () => {
  return (
    <List>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
};
