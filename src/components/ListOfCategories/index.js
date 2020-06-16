import React, { Fragment, useEffect, useState } from "react";
import { Category } from "../Category/Category";
import { List, Item } from "./styles";

export const ListOfCategories = () => {

  /* setear el estado inicial */
  const [categories, setCategories] = useState([]);
  const [showFixed, setShowFixed] = useState(false);

  /* useEffect se ejecuta cada vez que se renderiza el componente */

  /* useEffect para obtener los datos del API */
  useEffect(function () {
    window
      .fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
      });
  }, []);


  /* useEffect para mostrar las categorias cuando el scroll baje */
  useEffect(function () {

    /* Función onScroll para verificar el movimiento del scroll */
    const onScroll = e => {
      /* si el scroll  es en Y es mayor a 200 entones newShowFixed == true */
      const newShowFixed = window.scrollY > 200

      /* si el */
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    /* Escuchar el movimiento del scroll, se suscribe un evento. */
    document.addEventListener('scroll', onScroll)
    console.log(showFixed);

    /* cuando se desmonta el componente se elimina la suscripción al evento */
    return () => document.removeEventListener('scroll', onScroll)

  }, [showFixed])


  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )
  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>

  );
};
