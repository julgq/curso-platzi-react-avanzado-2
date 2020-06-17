import React, { useEffect, useRef, useState, Fragment } from "react";
import { Article, ImgWrapper, Img, Button } from "./styles";
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {

  // Iniciarlizar la referencia que se usara en Article
  const element = useRef(null)

  // Inicializar estado de show
  const [show, setShow] = useState(false)

  useEffect(function () {
    //console.log(element.current)
    const observer = new window.IntersectionObserver(function (entries) {
      //console.log(entries)

      // Obtener el elemento isIntersection
      const { isIntersecting } = entries[0]
      console.log({ isIntersecting })

      // Sí hace intersección entonces cambiar el el valor de show
      if (isIntersecting) {
        console.log('si, esta haciendo intersección')
        setShow(true)

        // Una vez hecho el render ya no es necesario observar ese elemento, ayudará al performance.
        observer.disconnect();
      }
    });

    // Iniciar el observador
    observer.observe(element.current);
  }, [element]);

  return (
    <Article ref={element}>
      {
        show && <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button>
            <MdFavoriteBorder size='32px' /> {likes} likes!
          </Button>
        </Fragment>
      }

    </Article >
  );
};
