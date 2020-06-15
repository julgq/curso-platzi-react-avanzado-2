import React, { useEffect, useState } from "react";
import { Category } from "../Category/Category";
import { List, Item } from "./styles";

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);

  /* useEffect se ejecuta cada vez que se renderiza el componente */
  useEffect(function () {
    window
      .fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
      });
  }, []);

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
