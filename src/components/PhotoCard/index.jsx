import React, { Fragment, useEffect, useRef, useState } from "react";
import { Article, ImgWrapper, Img, Button } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  // Obtener el valor de show para saber si mostrar la imagen, y element que es la referencia.
  const [show, element] = useNearScreen();

  // key dinamico con el valor del id enviado como prop
  const key = `like-${id}`;

  // Obtener el valor de liked del localstorage, y la función para cambiarlo.
  const [liked, setLiked] = useLocalStorage(key, false);

  // cambio de icono respecto al valor del liked
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLiked(!liked)}>
            <Icon size="32px" /> {likes} likes!
          </Button>
        </Fragment>
      )}
    </Article>
  );
};
